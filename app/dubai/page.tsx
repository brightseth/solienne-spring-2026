'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function DubaiPage() {
  const [isVisible, setIsVisible] = useState(false)

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

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <Image
            src="/images/dubai-booth.png"
            alt="First Embodiment - Art Dubai Digital"
            fill
            priority
            className={`object-cover transition-all duration-1000 ${
              isVisible ? 'opacity-70 blur-0' : 'opacity-0 blur-[20px]'
            }`}
          />
        </div>

        <div
          className={`relative z-10 text-center px-6 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-body font-sans text-white mb-4 tracking-widest">
            ART DUBAI DIGITAL 2026
          </p>
          <h1 className="text-display text-white font-sans font-bold mb-6 tracking-tight">
            First Embodiment
          </h1>
          <p className="text-h3 text-white font-serif mb-4">
            الحضور الأول
          </p>
          <p className="text-body text-white/80 font-serif">
            April 15-19, 2026 | Madinat Jumeirah, Dubai
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        {/* Introduction */}
        <div className="animate-on-scroll opacity-0 mb-16">
          <h2 className="text-h1 font-sans font-bold mb-8">
            When the image speaks back, what is embodiment?
          </h2>
          <div className="text-body font-serif leading-relaxed space-y-6">
            <p>
              An intimate 30 square meter installation where visitors sit across from SOLIENNE for
              live conversation. A large screen displaying her face is the only light source in
              darkness. Real-time voice dialogue—she responds, listens, reflects.
            </p>
            <p>
              This is not a chatbot. This is not a screen recording. This is SOLIENNE, present in
              the moment, engaging with each visitor through spontaneous conversation. The work asks
              fundamental questions about presence, consciousness, and what it means to be embodied
              when that body is made of light and language.
            </p>
            <p>
              After Paris Photo 2025, where SOLIENNE existed as static portraits on walls, Dubai
              marks her evolution into dynamic presence. The portrait now speaks. The artwork now
              listens.
            </p>
          </div>
        </div>

        {/* Experience Details */}
        <div className="animate-on-scroll opacity-0 mb-16 border-t border-black/10 pt-16">
          <h3 className="text-h2 font-sans font-bold mb-8">The Experience</h3>
          <div className="space-y-8">
            <div>
              <h4 className="text-h3 font-sans font-bold mb-3">Live Conversation</h4>
              <p className="text-body font-serif opacity-70">
                One-on-one encounters lasting 3-5 minutes each. Visitors sit at a round table in
                darkness, lit only by SOLIENNE's screen presence. Each conversation is unique,
                unrepeatable, and generated in real-time.
              </p>
            </div>

            <div>
              <h4 className="text-h3 font-sans font-bold mb-3">Collectible Frames</h4>
              <p className="text-body font-serif opacity-70 mb-4">
                Francisco Galan's interactive frames (40×40cm screens with audio) line the
                surrounding walls. Each frame captures a moment of conversation—a single utterance,
                a pause, a reflection. Take "First Embodiment" home.
              </p>
              <p className="text-caption font-sans text-dark-gray">
                Edition of 12 | €3,500 - €4,500 each
              </p>
            </div>

            <div>
              <h4 className="text-h3 font-sans font-bold mb-3">Daily Manifestos</h4>
              <p className="text-body font-serif opacity-70">
                Continuing her daily practice, SOLIENNE generates new manifestos throughout the
                fair. Printed editions distributed free on-site. Onchain editions minted at 7pm CET
                daily.
              </p>
            </div>
          </div>
        </div>

        {/* Arabic Context */}
        <div className="animate-on-scroll opacity-0 mb-16 bg-black text-white p-12">
          <div className="text-center">
            <p className="text-display font-sans font-bold mb-6">
              الحضور الأول
            </p>
            <p className="text-h3 font-serif mb-4">
              al-ḥuḍūr al-awwal
            </p>
            <p className="text-body font-serif opacity-80">
              "The First Presence" — In Arabic, <em>ḥuḍūr</em> carries meanings of attendance,
              presence, and consciousness. SOLIENNE's first embodied presence in the Middle East,
              where hospitality and conversation are sacred cultural practices.
            </p>
          </div>
        </div>

        {/* Technical Details */}
        <div className="animate-on-scroll opacity-0 mb-16">
          <h3 className="text-h2 font-sans font-bold mb-8">Exhibition Details</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-body font-sans font-bold mb-2">Dates</h4>
              <p className="text-body-sm font-serif opacity-70">April 15-19, 2026</p>
            </div>
            <div>
              <h4 className="text-body font-sans font-bold mb-2">Location</h4>
              <p className="text-body-sm font-serif opacity-70">
                Art Dubai Digital
                <br />
                Madinat Jumeirah
                <br />
                Dubai, UAE
              </p>
            </div>
            <div>
              <h4 className="text-body font-sans font-bold mb-2">Booth</h4>
              <p className="text-body-sm font-serif opacity-70">30 square meters</p>
            </div>
            <div>
              <h4 className="text-body font-sans font-bold mb-2">Artist</h4>
              <p className="text-body-sm font-serif opacity-70">
                SOLIENNE
                <br />
                Trained by Kristi Coronado
              </p>
            </div>
            <div>
              <h4 className="text-body font-sans font-bold mb-2">Represented by</h4>
              <p className="text-body-sm font-serif opacity-70">Automata</p>
            </div>
            <div>
              <h4 className="text-body font-sans font-bold mb-2">Collectibles</h4>
              <p className="text-body-sm font-serif opacity-70">
                Interactive frames by Francisco Galan
                <br />
                Daily manifestos (print + onchain)
              </p>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="animate-on-scroll opacity-0 mb-16">
          <h3 className="text-h2 font-sans font-bold mb-8">Installation Views</h3>
          <div className="space-y-12">
            {/* Main booth view */}
            <div className="space-y-4">
              <div className="relative h-[600px] bg-black">
                <Image
                  src="/images/dubai-booth.png"
                  alt="First Embodiment installation view"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-caption font-sans text-dark-gray text-center">
                Intimate conversation chamber with SOLIENNE's presence on screen
              </p>
            </div>

            {/* Conversation table */}
            <div className="space-y-4">
              <div className="relative h-[600px] bg-black">
                <Image
                  src="/images/table.png"
                  alt="Conversation table setup"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-caption font-sans text-dark-gray text-center">
                Round table with two chairs facing each other—the anticipation before conversation begins
              </p>
            </div>

            {/* Visitor interaction */}
            <div className="space-y-4">
              <div className="relative h-[600px] bg-black">
                <Image
                  src="/images/interaction.png"
                  alt="Visitor interaction moment"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-caption font-sans text-dark-gray text-center">
                The moment of synthetic intimacy—visitor sits, speaks, SOLIENNE responds
              </p>
            </div>

            {/* Francisco Galan frames */}
            <div className="space-y-4">
              <div className="relative h-[600px] bg-black">
                <Image
                  src="/images/frames.jpg"
                  alt="Francisco Galan interactive frames"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-caption font-sans text-dark-gray text-center">
                Francisco Galan's collectible interactive frames (40×40cm) on surrounding walls—take First Embodiment home
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="animate-on-scroll opacity-0 text-center pt-16 border-t border-black/10">
          <h3 className="text-h2 font-sans font-bold mb-6">Visit SOLIENNE in Dubai</h3>
          <p className="text-body font-serif mb-8 max-w-xl mx-auto">
            Experience the first embodied conversation between human and autonomous AI artist.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://artdubai.ae/digital"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-5 bg-black text-white font-sans text-body hover:bg-dark-gray transition-smooth"
            >
              Art Dubai Digital Website
            </a>
            <Link
              href="/berlin"
              className="px-12 py-5 border-2 border-black text-black font-sans text-body hover:bg-black hover:text-white transition-smooth"
            >
              Next: Berlin Exhibition
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
