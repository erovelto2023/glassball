#!/bin/bash

# Exit on error
set -e

echo "🚀 Starting deployment..."

# Install dependencies
echo "📦 Installing dependencies..."
npm ci --production

# Build the application
echo "🔨 Building application..."
npm run build

# Restart the application
echo "🔄 Restarting application..."
npm install -g pm2
pm2 delete k-business-academy 2> /dev/null || true
pm2 start ecosystem.config.js
pm2 save
pm2 startup

# Set up Nginx (requires sudo)
echo "🔧 Setting up Nginx..."
# Uncomment and modify the following lines after reviewing them
# sudo cp nginx.config /etc/nginx/sites-available/your-domain.com
# sudo ln -sf /etc/nginx/sites-available/your-domain.com /etc/nginx/sites-enabled/
# sudo nginx -t && sudo systemctl restart nginx

echo "✅ Deployment complete! Your application is now running on port 3000"
echo "🌐 Configure your domain's DNS to point to your server's IP address"
