# K Business Academy - Deployment Guide for Hostinger VPS

This guide will help you deploy the K Business Academy application to your Hostinger VPS.

## Prerequisites

1. A Hostinger VPS (Ubuntu 22.04 recommended)
2. Domain name pointed to your VPS IP
3. SSH access to your VPS
4. Node.js 20.x installed

## Server Setup

### 1. Connect to Your VPS

```bash
ssh root@your-server-ip
```

### 2. Create a New User (Recommended)

```bash
adduser deploy
usermod -aG sudo deploy
```

### 3. Install Required Software

```bash
# Update package list
sudo apt update && sudo apt upgrade -y

# Install required packages
sudo apt install -y nginx git pm2 certbot python3-certbot-nginx

# Install Node.js 20.x
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
```

## Application Deployment

### 1. Clone the Repository

```bash
sudo mkdir -p /var/www/k-business-academy
sudo chown -R $USER:$USER /var/www/k-business-academy
cd /var/www/k-business-academy
git clone your-repository-url .
```

### 2. Install Dependencies

```bash
npm ci --production
```

### 3. Configure Environment Variables

```bash
# Create .env file
nano .env
```

Add your production environment variables (copy from .env.example and update values):

```
NODE_ENV=production
NEXT_PUBLIC_APP_ENV=production
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_production_publishable_key
CLERK_SECRET_KEY=your_production_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
```

### 4. Build the Application

```bash
npm run build
```

### 5. Set Up PM2 Process Manager

```bash
# Install PM2 globally
sudo npm install -g pm2

# Start the application
pm2 start ecosystem.config.js

# Save the PM2 process list
pm2 save

# Generate startup script
pm2 startup
```

## Configure Nginx

### 1. Create Nginx Configuration

```bash
sudo nano /etc/nginx/sites-available/k-business-academy
```

Paste the following configuration (update `your-domain.com` with your actual domain):

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### 2. Enable the Site

```bash
sudo ln -s /etc/nginx/sites-available/k-business-academy /etc/nginx/sites-enabled/
sudo nginx -t  # Test configuration
sudo systemctl restart nginx
```

## Set Up SSL (Let's Encrypt)

```bash
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

Follow the prompts to complete the SSL setup.

## Final Steps

1. **Configure Firewall** (if enabled):
   ```bash
   sudo ufw allow 'Nginx Full'
   sudo ufw allow 'OpenSSH'
   sudo ufw enable
   ```

2. **Verify Application**
   - Visit your domain in a web browser
   - Test all authentication flows
   - Check server logs: `pm2 logs`

## Updating the Application

```bash
# Pull the latest changes
git pull

# Install new dependencies
npm ci --production

# Rebuild the application
npm run build

# Restart the application
pm2 restart k-business-academy
```

## Monitoring

View application logs:
```bash
pm2 logs k-business-academy
```

View PM2 process list:
```bash
pm2 list
```

## Troubleshooting

- **Port in use**: Check what's running on port 3000: `sudo lsof -i :3000`
- **Nginx errors**: Check Nginx logs: `sudo tail -f /var/log/nginx/error.log`
- **Application errors**: Check PM2 logs: `pm2 logs k-business-academy`

## Security Notes

1. Keep your server updated: `sudo apt update && sudo apt upgrade`
2. Use strong passwords for all accounts
3. Regularly backup your database and important files
4. Monitor server resources: `htop`
5. Consider setting up a firewall: `ufw`
