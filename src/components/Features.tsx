import React from 'react'
import { Zap, Shield, TrendingUp } from 'lucide-react'

function Features() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-xl p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <Zap className="text-blue-600 w-12 h-12 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Instant Answers</h3>
            <p className="text-gray-600">Get real-time responses to your questions with our advanced AI algorithms. Save time and improve efficiency.</p>
          </div>
          <div className="bg-white rounded-xl shadow-xl p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <Shield className="text-green-600 w-12 h-12 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Secure & Private</h3>
            <p className="text-gray-600">Your data is protected with our state-of-the-art security measures. We prioritize your privacy and ensure confidentiality.</p>
          </div>
          <div className="bg-white rounded-xl shadow-xl p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <TrendingUp className="text-purple-600 w-12 h-12 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Boost Productivity</h3>
            <p className="text-gray-600">Automate repetitive tasks and streamline your workflow with our AI-powered chat assistant. Increase your productivity by up to 50%.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
