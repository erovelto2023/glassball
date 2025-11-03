import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const Page = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen flex flex-col">
      <Head>
        <title>K Business Academy - Scale Your Online Business</title>
        <meta name="description" content="Unlock your online business potential with K Business Academy and Scale Plus" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-indigo-600">K Business Academy</div>
          <div className="hidden md:flex space-x-6">
            <a href="#features" className="text-gray-600 hover:text-indigo-600">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-indigo-600">Pricing</a>
            <a href="#testimonials" className="text-gray-600 hover:text-indigo-600">Testimonials</a>
          </div>
          <a 
            href="#cta" 
            className="bg-indigo-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-indigo-700 transition duration-300"
          >
            Get Started
          </a>
        </nav>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-indigo-700 to-purple-800 text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Unlock Your Online Business Potential with K Business Academy!
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Imagine waking up each morning with a vibrant community of innovators beside you, equipped with all the tools and training necessary to make your online business dreams a reality.
            </p>
            <a 
              href="#cta" 
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition duration-300 inline-block"
            >
              👉 Create Your Scale Plus Account Here
            </a>
          </div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-6 py-16">
          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Dear Aspiring Entrepreneur,</h2>
            <p className="mb-6">
              At K Business Academy, we believe that the journey to success starts here. This isn't just another course; it's your gateway to financial freedom and entrepreneurial empowerment.
            </p>
            <p className="text-xl font-semibold mb-6">
              What if you could transform your ideas into a thriving online business, all while receiving unwavering support and the right tools?
            </p>
            <p className="mb-6">
              In today's fast-paced digital landscape, you often hear tales of success — the influencers, the entrepreneurs who seem to have cracked the code to online wealth. But have you ever paused to consider what sets them apart? The answer is simple: the right tools combined with effective guidance. And that's where we come in.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-8">
              <h3 className="text-2xl font-bold text-yellow-800 mb-2">A Limited-Time Offer</h3>
              <p className="text-yellow-700">
                For a limited time, we're excited to offer you a <span className="font-bold">FREE LIFETIME MEMBERSHIP</span> to K Business Academy with the purchase of Scale Plus. Yes, you read that right! When you invest in yourself and your future with Scale Plus, we'll provide you with the training, community, and resources that can elevate your business to new heights.
              </p>
            </div>

            <h3 className="text-2xl font-bold mt-12 mb-6">Here's what makes Scale Plus a game-changer:</h3>
            <p className="mb-6 italic">Stop taping together dozens of tools. Our platform unifies your entire business workflow.</p>

            <div className="grid md:grid-cols-3 gap-8 my-12">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h4 className="text-xl font-bold mb-3">Comprehensive Tool Replacement</h4>
                <p>Replace over 20 tools with one powerful platform that streamlines your workflow and saves you money.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h4 className="text-xl font-bold mb-3">Launch Today, Scale Tomorrow</h4>
                <p>Use Scale Plus to build funnels, sell products, and automate your marketing, allowing your business to thrive.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h4 className="text-xl font-bold mb-3">Everything Under One Roof</h4>
                <p>From funnel creation to e-commerce, Scale Plus offers a suite that caters to every aspect of your online business journey.</p>
              </div>
            </div>

            <div className="bg-indigo-50 p-8 rounded-lg my-12">
              <h3 className="text-2xl font-bold mb-4">As a valued member of K Business Academy, you will gain access to:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><span className="font-semibold">Exclusive Online Classes:</span> Expertly designed courses to guide you through every phase of your business.</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><span className="font-semibold">Live Training Sessions:</span> Interact with industry experts and ask questions in real time.</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><span className="font-semibold">Essential Software Tools:</span> Access to software that helps you execute your business strategies effortlessly.</span>
                </li>
              </ul>
              <p className="mt-6 italic">Remember, having the tools is only half of the equation. Without training and mentorship, those tools can become nothing more than a set of unused features.</p>
              <p className="mt-4 font-semibold">Let's not just talk about tools; let's talk about real results.</p>
            </div>

            <p className="mb-8">
              Our community is filled with stories of individuals just like you who were once at a crossroads, unsure of where to begin. With our support, they launched their businesses, gained traction, and are now living their entrepreneurial dreams. They embraced the opportunity, and so can you!
            </p>

            {/* Tools Section */}
            <section id="tools" className="my-16">
              <h2 className="text-3xl font-bold text-center mb-12">Everything You Get with Scale Plus</h2>
              
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg overflow-hidden">
                  <thead className="bg-gray-800 text-white">
                    <tr>
                      <th className="text-left py-4 px-6">Core Platform</th>
                      <th className="text-center py-4 px-6">Included</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      'GrooveFunnels - Seamlessly build complete sales funnels that will connect with your audience.',
                      'GroovePages - Create stunning landing pages with a simple drag-and-drop interface, no coding required!',
                      'GrooveSell Checkout - With GrooveSell, enjoy no transaction fees and maximize your revenue through 1-click upsells.',
                      'GrooveMail - Offers powerful automation and segmentation, allowing you to turn leads into loyal customers effortlessly.',
                      'GrooveAffiliate - Easily set up and manage your own affiliate program.',
                      'GrooveMember - Create secure membership sites & online courses.',
                      'GrooveVideo - Host, control, and analyze video performance.',
                      'GrooveBlog - SEO-friendly blogging integrated with your funnels.',
                      'GrooveWebinar - Run powerful live or automated webinars.',
                      'GrooveKart - Full e-commerce for physical products (no monthly fees).',
                      'And More... - GrooveProof, GrooveForms, GroovePop-Ups & Automations.'
                    ].map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="py-4 px-6">{item.split(' - ')[0]}</td>
                        <td className="text-center py-4 px-6">
                          <span className="text-green-600 font-semibold">Included</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* AI & Growth Suite */}
              <h3 className="text-2xl font-bold mt-16 mb-8 text-center">AI & Growth Suite (Included)</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  'ClickCampaigns.ai - AI-powered marketing campaign automation that builds complete advertising and email campaigns from scratch.',
                  'Courses.gg - Course and community platform with unlimited courses, no upfront costs, and only 5% fee on sales.',
                  'AffiliatePages.com - Website builder for affiliate marketers with pre-designed blocks and AI-powered content.',
                  'GroovePages AI - AI-powered website builder that creates GroovePages-ready designs, templates, and funnels in minutes.',
                  'ChatBaser.ai - AI chatbot platform that trains on your business content for 24/7 customer support and lead capture.',
                  'BrandBaser.com - AI-powered brand content generator for consistent, professional marketing materials across all channels.',
                  'HighTicketGPT.com - Sales copywriting platform built specifically for high-ticket offers, coaching programs, and premium services.',
                  'ScaleGPTs.com - Platform for building custom AI assistants that automate business processes and support teams.',
                  'PipeLeads.ai CRM - Sales pipeline management platform with lead tracking, deal management, and automation.',
                  'PipeLeads.ai LeadFinder - Lead generation engine that finds ideal prospects with AI-powered outreach automation.',
                  'Invoicer - Billing and payment automation platform for freelancers, agencies, and small businesses.',
                  'FunnelMapper.io - Visual funnel planning tool that lets marketers design, analyze, and optimize customer journeys.',
                  'CalendarBug - Online scheduling platform that simplifies booking meetings, calls, and appointments.',
                  'QuizFunnels - Lead generation platform that uses interactive quizzes to capture and qualify leads.',
                  'TOSDocs.com - Professional template library for terms of service, privacy policies, and cookie policies for websites.',
                  'Imager.gg - AI-powered image and video generator that creates stunning visual art from simple text descriptions.',
                  'DocSigner.ai - Smart document signing platform with AI-powered contract analysis and electronic signature workflows.',
                  'HDHelpDesk.com - Full-featured customer support platform with smart ticketing, live chat, knowledge base, and analytics.'
                ].map((tool, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-bold text-lg mb-2">{tool.split(' - ')[0]}</h4>
                    <p className="text-gray-600">{tool.split(' - ')[1]}</p>
                    <a href="#" className="text-indigo-600 hover:underline mt-2 inline-block">Learn More →</a>
                  </div>
                ))}
              </div>
            </section>

            {/* Email Setup */}
            <div className="bg-blue-50 p-8 rounded-lg my-12 border-l-4 border-blue-400">
              <h3 className="text-2xl font-bold mb-4">Free Email Setup Included ($780/yr Value)</h3>
              <p className="mb-4">
                Send up to 15,000 emails every month to 500 contacts—powered by TinyEmail's enterprise-level AI platform. A $65/mo value, included free with your Scale Plus membership.
              </p>
              <div className="bg-white p-4 rounded-lg inline-block">
                <span className="font-bold text-green-600">INCLUDED</span> Free Starter Plan
                <ul className="mt-2 space-y-1 text-sm">
                  <li>✓ 15,000 emails / month</li>
                  <li>✓ Up to 500 contacts</li>
                </ul>
              </div>
            </div>

            {/* Pricing */}
            <div className="text-center my-16">
              <h2 className="text-3xl font-bold mb-6">The value you receive is unmatched.</h2>
              <p className="text-xl mb-8">
                A total worth of over <span className="line-through">$15,000</span> in tools and resources, available to you for only...
              </p>
              <div className="text-5xl font-bold text-indigo-600 mb-2">$497 <span className="text-2xl text-gray-500">/ first year</span></div>
              <p className="text-gray-600 mb-8">After that, the investment is just $497 annually. Compare this to the industry standards, and it becomes clear that the Scale Plus suite is not just an opportunity — it's a steal.</p>
              
              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6">Your Future Starts Now</h3>
                <div className="bg-indigo-50 p-8 rounded-lg max-w-2xl mx-auto">
                  <h4 className="text-xl font-bold mb-4">Get Scale Plus + FREE Lifetime Academy Access</h4>
                  <ul className="space-y-3 mb-8 text-left">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Scale Plus Platform (All Tools)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>FREE Lifetime Access to K Business Academy</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Exclusive Online Classes</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Live Training & Community</span>
                    </li>
                  </ul>
                  <a 
                    href="#cta" 
                    className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-indigo-700 transition duration-300 inline-block"
                  >
                    👉 Create Your Scale Plus Account
                  </a>
                </div>
              </div>
            </div>

            {/* Closing */}
            <div className="mt-16 text-center">
              <p className="mb-6">
                So, why wait? If you're serious about running a successful online business, click the link below to discover what Scale Plus has to offer. Watch the video, and if you believe this isn't the right fit for you, no hard feelings. But if you're ready to take your first step toward success, we're here, ready to support you every step of the way.
              </p>
              <a 
                href="#cta" 
                className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-green-600 transition duration-300 inline-block mb-8"
              >
                👉 [Create Your Scale Plus Account Here]
              </a>
              <p className="mb-6">
                Once your account is created, your <span className="font-bold">FREE LIFETIME ACCESS</span> to K Business Academy will be activated. We will stand with you as you bring your entrepreneurial dreams to life.
              </p>
              <p className="text-xl font-semibold mb-8">
                The world is waiting for what you have to offer. Don't let indecision hold you back from transforming your life.
              </p>
              <blockquote className="border-l-4 border-indigo-500 pl-4 italic my-8 text-gray-600">
                "Success is a function of persistence and doggedness and the ability to bounce back from rejection."
                <footer className="mt-2 text-right font-semibold">— Malcolm Gladwell</footer>
              </blockquote>
              <p className="text-xl mb-8">
                With K Business Academy, you're not just gaining tools; you're gaining resilience, community, and the knowledge necessary to navigate the tumultuous waters of entrepreneurship.
              </p>
              <p className="text-2xl font-bold text-indigo-600 mb-12">
                Together, let's embark on this exciting journey and unlock your true potential. The time to act is now!
              </p>
              <p className="text-2xl font-bold">
                Join us today and let's turn your aspirations into achievements!
              </p>
              <p className="mt-12">
                Best regards,<br />
                The K Business Academy Team
              </p>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-300 hover:text-white">Features</a></li>
                <li><a href="#pricing" className="text-gray-300 hover:text-white">Pricing</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Help Center</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Contact Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Status</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} K Business Academy. All rights reserved.</p>
            <p className="mt-2 text-sm">
              This is a special promotion offered by K Business Academy. We are an affiliate partner for Scale Plus and may receive a commission for purchases made through our links, at no extra cost to you.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Page;
