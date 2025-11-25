import React from 'react'

function Hero() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
      <div className="container mx-auto text-center">
        <h1 className="text-6xl font-bold mb-6">Unlock the Power of AI Chat</h1>
        <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed mb-12">
          Experience the future of communication with our AI-powered chat application. Get instant answers, automate tasks, and connect with your audience like never before.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="/signup" className="bg-blue-700 hover:bg-blue-800 px-8 py-4 rounded-xl text-lg shadow-xl transition-all duration-300">Start Your Free Trial</a>
          <a href="/demo" className="border-2 border-gray-300 hover:border-blue-500 px-8 py-4 rounded-xl text-lg transition-all duration-300">Request a Demo</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
