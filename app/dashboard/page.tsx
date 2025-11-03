import React from 'react'

function Dashboard() {
  return (
    <div className="min-h-screen p-8">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-800">Welcome to K Business Academy</h1>
          <p className="text-lg text-gray-600 mt-2">Access your resources all in one place.</p>
        </header>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Courses Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
            <div className="p-6">
              <div className="flex items-center mb-4">
                {/* Icon */}
                <svg className="h-10 w-10 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18c-2.305 0-4.408.867-6 2.292m0-14.25v14.25" />
                </svg>
                <h2 className="text-2xl font-bold text-gray-800 ml-4">Courses</h2>
              </div>
              <p className="text-gray-700 mb-6">
                Browse our catalog of expert-led courses. Enhance your skills and achieve your learning goals.
              </p>
              <a href="/dashboard/courses" className="inline-block bg-blue-600 text-white font-semibold py-2 px-5 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                View Courses
              </a>
            </div>
          </div>

          {/* Tools Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
            <div className="p-6">
              <div className="flex items-center mb-4">
                {/* Icon */}
                <svg className="h-10 w-10 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v16.5h16.5V3.75M3.75 3h16.5M3.75 3H21M9 3.75V21m0-17.25v17.25m0-17.25H3.75m5.25 0v17.25m5.25-17.25v17.25m0-17.25H21m-5.25 0v17.25M12 3.75v17.25" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75v17.25m0-17.25H21M3.75 9h16.5m-16.5 0h16.5m-16.5 0v1.5m16.5-1.5v1.5m-16.5 0H21m-17.25 0h17.25m-17.25 0v1.5m17.25-1.5v1.5m-17.25 0h17.25m-17.25 0v1.5m17.25-1.5v1.5m-17.25 0H21m-17.25 0h17.25" />
                </svg>
                <h2 className="text-2xl font-bold text-gray-800 ml-4">Tools</h2>
              </div>
              <p className="text-gray-700 mb-6">
                Access our suite of powerful tools designed to streamline your workflow and boost productivity.
              </p>
              <a href="/dashboard/tools" className="inline-block bg-green-600 text-white font-semibold py-2 px-5 rounded-lg hover:bg-green-700 transition-colors duration-300">
                Explore Tools
              </a>
            </div>
          </div>

          {/* Community Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
            <div className="p-6">
              <div className="flex items-center mb-4">
                {/* Icon */}
                <svg className="h-10 w-10 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.578 9.094 9.094 0 0 0 3.741-1.578m-3.741 2.156a9.094 9.094 0 0 1-3.741.578 9.094 9.094 0 0 1-3.741-1.578m3.741 2.156a9.094 9.094 0 0 0-3.741.578 9.094 9.094 0 0 0-3.741-1.578m0 2.156a9.094 9.094 0 0 1-3.741-.578 9.094 9.094 0 0 1-3.741-1.578M15 12.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm0 0c0 .353-.02.7-.059 1.044m-5.882-1.044c-.039-.344-.059-.7-.059-1.044m5.882 0a3 3 0 0 0-5.882 0M15 12.75c0 .73-.131 1.42-.363 2.059m-5.274-2.059A3.003 3.003 0 0 1 9 12.75m0 0a3 3 0 0 0-2.637 1.019M9 12.75c0 .73.131 1.42.363 2.059m5.274-2.059c.232-.639.363-1.329.363-2.059M21 12.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <h2 className="text-2xl font-bold text-gray-800 ml-4">Community</h2>
              </div>
              <p className="text-gray-700 mb-6">
                Connect with peers, ask questions, and share your knowledge in our vibrant community forums.
              </p>
              <a href="/dashboard/community" className="inline-block bg-purple-600 text-white font-semibold py-2 px-5 rounded-lg hover:bg-purple-700 transition-colors duration-300">
                Join Community
              </a>
            </div>
          </div>


          {/* Business Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
            <div className="p-6">
              <div className="flex items-center mb-4">
                {/* Icon */}
                <svg className="h-10 w-10 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v16.5h16.5V3.75M3.75 3h16.5M3.75 3H21M9 3.75V21m0-17.25v17.25m0-17.25H3.75m5.25 0v17.25m5.25-17.25v17.25m0-17.25H21m-5.25 0v17.25M12 3.75v17.25" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75v17.25m0-17.25H21M3.75 9h16.5m-16.5 0h16.5m-16.5 0v1.5m16.5-1.5v1.5m-16.5 0H21m-17.25 0h17.25m-17.25 0v1.5m17.25-1.5v1.5m-17.25 0h17.25m-17.25 0v1.5m17.25-1.5v1.5m-17.25 0H21m-17.25 0h17.25" />
                </svg>
                <h2 className="text-2xl font-bold text-gray-800 ml-4">Business</h2>
              </div>
              <p className="text-gray-700 mb-6">
                Access our suite of Businesses in a Box designed to streamline your workflow and boost productivity.
              </p>
              <a href="/dashboard/business" className="inline-block bg-green-600 text-white font-semibold py-2 px-5 rounded-lg hover:bg-green-700 transition-colors duration-300">
                Explore Business
              </a>
            </div>
          </div>

 {/* Goals and Challenges Card */}
 <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
            <div className="p-6">
              <div className="flex items-center mb-4">
                {/* Icon */}
                <svg className="h-10 w-10 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18c-2.305 0-4.408.867-6 2.292m0-14.25v14.25" />
                </svg>
                <h2 className="text-2xl font-bold text-gray-800 ml-4">Goals and Challenges</h2>
              </div>
              <p className="text-gray-700 mb-6">
                Explore our Goals and Challenges that you can take to imporove your skills.
              </p>
              <a href="/dashboard/goals-and-challenges" className="inline-block bg-blue-600 text-white font-semibold py-2 px-5 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                View Goals and Challenges
              </a>
            </div>
          </div>

          {/* Knowledge Base */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
            <div className="p-6">
              <div className="flex items-center mb-4">
                {/* Icon */}
                <svg className="h-10 w-10 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v16.5h16.5V3.75M3.75 3h16.5M3.75 3H21M9 3.75V21m0-17.25v17.25m0-17.25H3.75m5.25 0v17.25m5.25-17.25v17.25m0-17.25H21m-5.25 0v17.25M12 3.75v17.25" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75v17.25m0-17.25H21M3.75 9h16.5m-16.5 0h16.5m-16.5 0v1.5m16.5-1.5v1.5m-16.5 0H21m-17.25 0h17.25m-17.25 0v1.5m17.25-1.5v1.5m-17.25 0h17.25m-17.25 0v1.5m17.25-1.5v1.5m-17.25 0H21m-17.25 0h17.25" />
                </svg>
                <h2 className="text-2xl font-bold text-gray-800 ml-4">Knowledge Base</h2>
              </div>
              <p className="text-gray-700 mb-6">
                Explore our Knowledge Base to learn more about different business topics and more.
              </p>
              <a href="/dashboard/knowledge-base" className="inline-block bg-green-600 text-white font-semibold py-2 px-5 rounded-lg hover:bg-green-700 transition-colors duration-300">
                Explore Knowledge Base
              </a>
            </div>
          </div>

          {/* Events & Workshops */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
            <div className="p-6">
              <div className="flex items-center mb-4">
                {/* Icon */}
                <svg className="h-10 w-10 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.578 9.094 9.094 0 0 0 3.741-1.578m-3.741 2.156a9.094 9.094 0 0 1-3.741.578 9.094 9.094 0 0 1-3.741-1.578m3.741 2.156a9.094 9.094 0 0 0-3.741.578 9.094 9.094 0 0 0-3.741-1.578m0 2.156a9.094 9.094 0 0 1-3.741-.578 9.094 9.094 0 0 1-3.741-1.578M15 12.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm0 0c0 .353-.02.7-.059 1.044m-5.882-1.044c-.039-.344-.059-.7-.059-1.044m5.882 0a3 3 0 0 0-5.882 0M15 12.75c0 .73-.131 1.42-.363 2.059m-5.274-2.059A3.003 3.003 0 0 1 9 12.75m0 0a3 3 0 0 0-2.637 1.019M9 12.75c0 .73.131 1.42.363 2.059m5.274-2.059c.232-.639.363-1.329.363-2.059M21 12.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <h2 className="text-2xl font-bold text-gray-800 ml-4">Events & Workshops</h2>
              </div>
              <p className="text-gray-700 mb-6">
                From time to time we will have live events and workshops that you can join live. Visit this page to see what is coming.
              </p>
              <a href="/dashboard/events-workshops" className="inline-block bg-purple-600 text-white font-semibold py-2 px-5 rounded-lg hover:bg-purple-700 transition-colors duration-300">
                See Events & Workshops
              </a>
            </div>
          </div>


          {/* Templates & Resources */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
            <div className="p-6">
              <div className="flex items-center mb-4">
                {/* Icon */}
                <svg className="h-10 w-10 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v16.5h16.5V3.75M3.75 3h16.5M3.75 3H21M9 3.75V21m0-17.25v17.25m0-17.25H3.75m5.25 0v17.25m5.25-17.25v17.25m0-17.25H21m-5.25 0v17.25M12 3.75v17.25" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75v17.25m0-17.25H21M3.75 9h16.5m-16.5 0h16.5m-16.5 0v1.5m16.5-1.5v1.5m-16.5 0H21m-17.25 0h17.25m-17.25 0v1.5m17.25-1.5v1.5m-17.25 0h17.25m-17.25 0v1.5m17.25-1.5v1.5m-17.25 0H21m-17.25 0h17.25" />
                </svg>
                <h2 className="text-2xl font-bold text-gray-800 ml-4">Templates & Resources</h2>
              </div>
              <p className="text-gray-700 mb-6">
                Access our suite of templates and resources to help you get started with your business.
              </p>
              <a href="/dashboard/templates-resources" className="inline-block bg-green-600 text-white font-semibold py-2 px-5 rounded-lg hover:bg-green-700 transition-colors duration-300">
                Explore Templates & Resources
              </a>
            </div>
          </div>

           {/* Affiliate Center */}
           <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
            <div className="p-6">
              <div className="flex items-center mb-4">
                {/* Icon */}
                <svg className="h-10 w-10 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18c-2.305 0-4.408.867-6 2.292m0-14.25v14.25" />
                </svg>
                <h2 className="text-2xl font-bold text-gray-800 ml-4">Affiliate Center</h2>
              </div>
              <p className="text-gray-700 mb-6">
                Browse our catalog of affiliate programs and resources to help you get started with your business.
              </p>
              <a href="/dashboard/affiliate-center" className="inline-block bg-blue-600 text-white font-semibold py-2 px-5 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                View Affiliate Center
              </a>
            </div>
          </div>

          {/* Media Library*/}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
            <div className="p-6">
              <div className="flex items-center mb-4">
                {/* Icon */}
                <svg className="h-10 w-10 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v16.5h16.5V3.75M3.75 3h16.5M3.75 3H21M9 3.75V21m0-17.25v17.25m0-17.25H3.75m5.25 0v17.25m5.25-17.25v17.25m0-17.25H21m-5.25 0v17.25M12 3.75v17.25" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75v17.25m0-17.25H21M3.75 9h16.5m-16.5 0h16.5m-16.5 0v1.5m16.5-1.5v1.5m-16.5 0H21m-17.25 0h17.25m-17.25 0v1.5m17.25-1.5v1.5m-17.25 0h17.25m-17.25 0v1.5m17.25-1.5v1.5m-17.25 0H21m-17.25 0h17.25" />
                </svg>
                <h2 className="text-2xl font-bold text-gray-800 ml-4">Media Library</h2>
              </div>
              <p className="text-gray-700 mb-6">
                Access our suite of media files to help you get started with your business.
              </p>
              <a href="/dashboard/media-library" className="inline-block bg-green-600 text-white font-semibold py-2 px-5 rounded-lg hover:bg-green-700 transition-colors duration-300">
                Explore Media Library
              </a>
            </div>
          </div>

          {/* Mindset & Motivation */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
            <div className="p-6">
              <div className="flex items-center mb-4">
                {/* Icon */}
                <svg className="h-10 w-10 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.578 9.094 9.094 0 0 0 3.741-1.578m-3.741 2.156a9.094 9.094 0 0 1-3.741.578 9.094 9.094 0 0 1-3.741-1.578m3.741 2.156a9.094 9.094 0 0 0-3.741.578 9.094 9.094 0 0 0-3.741-1.578m0 2.156a9.094 9.094 0 0 1-3.741-.578 9.094 9.094 0 0 1-3.741-1.578M15 12.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm0 0c0 .353-.02.7-.059 1.044m-5.882-1.044c-.039-.344-.059-.7-.059-1.044m5.882 0a3 3 0 0 0-5.882 0M15 12.75c0 .73-.131 1.42-.363 2.059m-5.274-2.059A3.003 3.003 0 0 1 9 12.75m0 0a3 3 0 0 0-2.637 1.019M9 12.75c0 .73.131 1.42.363 2.059m5.274-2.059c.232-.639.363-1.329.363-2.059M21 12.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <h2 className="text-2xl font-bold text-gray-800 ml-4">Mindset & Motivation</h2>
              </div>
              <p className="text-gray-700 mb-6">
                Access our suite of mindset and motivation resources to help you get started with your business.
              </p>
              <a href="/dashboard/mindset-motivation" className="inline-block bg-purple-600 text-white font-semibold py-2 px-5 rounded-lg hover:bg-purple-700 transition-colors duration-300">
                Explore Mindset & Motivation
              </a>
            </div>
          </div>


        </div>
      </div>
    </div>
    
  )
}

export default Dashboard
