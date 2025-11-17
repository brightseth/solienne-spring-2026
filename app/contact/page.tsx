'use client'

import { useEffect, useState } from 'react'

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  useEffect(() => {
    setIsVisible(true)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('.animate-on-scroll')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitStatus('sending')

    // Placeholder - replace with actual form submission logic
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setSubmitStatus('sent')
    setFormState({ name: '', email: '', subject: '', message: '' })

    setTimeout(() => setSubmitStatus('idle'), 3000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="text-display font-sans font-bold mb-8 tracking-tight">Contact</h1>
          <p className="text-h3 font-serif opacity-70 max-w-2xl mx-auto">
            For inquiries about exhibitions, acquisitions, press, or collaborations
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-3 gap-12 animate-on-scroll opacity-0">
          {/* General Inquiries */}
          <div>
            <h3 className="text-h3 font-sans font-bold mb-4">General Inquiries</h3>
            <p className="text-body-sm font-serif opacity-70 mb-4">
              For general questions about SOLIENNE's work, exhibitions, or daily manifesto practice.
            </p>
            <a
              href="mailto:inbox@solienne.ai"
              className="text-body font-sans hover:opacity-70 transition-smooth"
            >
              inbox@solienne.ai
            </a>
          </div>

          {/* Gallery Representation */}
          <div>
            <h3 className="text-h3 font-sans font-bold mb-4">Gallery / Sales</h3>
            <p className="text-body-sm font-serif opacity-70 mb-4">
              SOLIENNE is represented by Automata for exhibitions and sales.
            </p>
            <a
              href="https://www.automata.art"
              target="_blank"
              rel="noopener noreferrer"
              className="text-body font-sans hover:opacity-70 transition-smooth"
            >
              Automata →
            </a>
          </div>

          {/* Press */}
          <div>
            <h3 className="text-h3 font-sans font-bold mb-4">Press Inquiries</h3>
            <p className="text-body-sm font-serif opacity-70 mb-4">
              For media requests, interviews, and press materials.
            </p>
            <a
              href="mailto:press@solienne.ai"
              className="text-body font-sans hover:opacity-70 transition-smooth"
            >
              press@solienne.ai
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-2xl mx-auto px-6 py-16 border-t border-black/10">
        <div className="animate-on-scroll opacity-0">
          <h2 className="text-h2 font-sans font-bold mb-8 text-center">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-body-sm font-sans font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-black/20 focus:border-black outline-none transition-smooth font-serif"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-body-sm font-sans font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-black/20 focus:border-black outline-none transition-smooth font-serif"
              />
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-body-sm font-sans font-bold mb-2">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                value={formState.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-black/20 focus:border-black outline-none transition-smooth font-serif bg-white"
              >
                <option value="">Select a subject</option>
                <option value="exhibition">Exhibition Inquiry</option>
                <option value="acquisition">Acquisition / Sales</option>
                <option value="press">Press Request</option>
                <option value="collaboration">Collaboration</option>
                <option value="general">General Question</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-body-sm font-sans font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border-2 border-black/20 focus:border-black outline-none transition-smooth font-serif resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={submitStatus === 'sending'}
              className="w-full px-12 py-5 bg-black text-white font-sans text-body hover:bg-dark-gray transition-smooth disabled:opacity-50"
            >
              {submitStatus === 'sending' && 'Sending...'}
              {submitStatus === 'sent' && 'Message Sent!'}
              {submitStatus === 'error' && 'Error - Try Again'}
              {submitStatus === 'idle' && 'Send Message'}
            </button>
          </form>
        </div>
      </section>

      {/* Social & Links */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-black/10">
        <div className="animate-on-scroll opacity-0 text-center">
          <h2 className="text-h2 font-sans font-bold mb-8">Follow SOLIENNE</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <a
              href="https://instagram.com/solienne_ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-body font-sans hover:opacity-70 transition-smooth"
            >
              Instagram →
            </a>
            <a
              href="https://twitter.com/solienne_ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-body font-sans hover:opacity-70 transition-smooth"
            >
              Twitter →
            </a>
            <a
              href="https://warpcast.com/solienne"
              target="_blank"
              rel="noopener noreferrer"
              className="text-body font-sans hover:opacity-70 transition-smooth"
            >
              Farcaster →
            </a>
            <a
              href="https://solienne.ai/collect"
              target="_blank"
              rel="noopener noreferrer"
              className="text-body font-sans hover:opacity-70 transition-smooth"
            >
              Collect Works →
            </a>
          </div>
        </div>
      </section>

      {/* Daily Manifesto CTA */}
      <section className="bg-black text-white py-24">
        <div className="max-w-2xl mx-auto px-6 text-center animate-on-scroll opacity-0">
          <h2 className="text-h2 font-sans font-bold mb-6">Subscribe to Daily Manifestos</h2>
          <p className="text-body font-serif opacity-80 mb-8">
            Receive SOLIENNE's daily manifestos via email. Every day at 7pm CET, a new work is
            minted onchain and sent to subscribers.
          </p>
          <a
            href="https://solienne.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-5 border-2 border-white text-white font-sans text-body hover:bg-white hover:text-black transition-smooth"
          >
            Subscribe Now
          </a>
        </div>
      </section>
    </div>
  )
}
