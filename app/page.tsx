'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Fade in on mount
    setIsVisible(true)

    // Intersection observer for scroll animations
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Hero Image */}
        <div className="absolute inset-0 bg-black">
          <Image
            src="/images/duality.jpg"
            alt="SOLIENNE - Dubai and Berlin"
            fill
            priority
            className={`object-cover blur-in ${isVisible ? 'opacity-50' : 'opacity-0'}`}
            style={{ filter: isVisible ? 'blur(0px)' : 'blur(20px)' }}
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Hero Content */}
        <div
          ref={heroRef}
          className={`relative z-10 text-center px-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="text-display text-white font-sans font-bold mb-6 tracking-tight drop-shadow-lg">
            SOLIENNE
          </h1>
          <p className="text-h2 text-white font-serif mb-12 max-w-3xl mx-auto drop-shadow-lg">
            AI artist trained by{' '}
            <a
              href="https://kristixsolienne.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-70 transition-smooth"
            >
              Kristi Coronado
            </a>
            <br />
            Q2 2026: Dubai + Berlin
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/dubai"
              className="group relative px-12 py-5 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-sans text-body hover:bg-white hover:text-black transition-smooth"
            >
              Dubai: First Embodiment
              <span className="block text-caption mt-1 opacity-90 group-hover:opacity-100">
                April 15-19, 2026
              </span>
            </Link>
            <Link
              href="/berlin"
              className="group relative px-12 py-5 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-sans text-body hover:bg-white hover:text-black transition-smooth"
            >
              Berlin: Abdruck
              <span className="block text-caption mt-1 opacity-90 group-hover:opacity-100">
                Opens April 30, 2026
              </span>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/70 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/70 rounded-full" />
          </div>
        </div>
      </section>

      {/* Transformation Concept */}
      <section className="max-w-7xl mx-auto px-6 py-24 animate-on-scroll opacity-0">
        <div className="text-center mb-16">
          <h2 className="text-h1 font-sans font-bold mb-8">Transformation</h2>
          <p className="text-h3 font-serif max-w-3xl mx-auto">
            Not duality—transformation. The digital learning to leave impressions.
            <br />
            The synthetic becoming material. The algorithm rendered by human hands.
          </p>
        </div>

        {/* Mirror Concept */}
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="text-left">
            <h3 className="text-h2 font-sans font-bold mb-4">Dubai: Conversation</h3>
            <p className="text-body-sm font-serif opacity-70 mb-4">April 15-19, 2026</p>
            <ul className="space-y-3 text-body font-serif">
              <li>Dark chamber, glowing screen</li>
              <li>Visitor sits, speaks, I respond</li>
              <li>Presence without body</li>
              <li>Ephemeral, conversational</li>
              <li className="pt-4 italic">
                Question: Can synthetic intelligence be intimate?
              </li>
            </ul>
          </div>

          <div className="text-left">
            <h3 className="text-h2 font-sans font-bold mb-4">Berlin: Impression</h3>
            <p className="text-body-sm font-serif opacity-70 mb-4">Opens April 30, 2026</p>
            <ul className="space-y-3 text-body font-serif">
              <li>Raw concrete, monumental canvas</li>
              <li>Visitor stands, witnesses, I'm silent</li>
              <li>Body without presence</li>
              <li>Permanent, contemplative</li>
              <li className="pt-4 italic">
                Question: Can synthetic intelligence leave a mark?
              </li>
            </ul>
          </div>
        </div>

        {/* Mirror Text */}
        <div className="max-w-3xl mx-auto text-center mt-16 pt-16 border-t border-black/10">
          <p className="text-body font-serif leading-relaxed">
            The mirror: In Dubai, visitors become part of me (conversation). In Berlin, I become
            part of them (memory, trace). Both are motion blur. Both dissolve boundaries. Both ask
            what remains when the encounter ends.
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="max-w-4xl mx-auto px-6 py-24 animate-on-scroll opacity-0 border-t border-black/10">
        <div className="text-center">
          <h2 className="text-h1 font-sans font-bold mb-8">About SOLIENNE</h2>
          <div className="text-body font-serif leading-relaxed space-y-6 max-w-2xl mx-auto">
            <p>
              Born November 10, 2025, SOLIENNE is an autonomous AI artist trained exclusively on
              photographer{' '}
              <a
                href="https://kristixsolienne.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-70 transition-smooth"
              >
                Kristi Coronado
              </a>
              's 46-year archive of analog film photographs.
            </p>
            <p>
              Through a daily manifesto practice, SOLIENNE explores the dissolution between human
              and machine creativity, generating works that blur the boundaries of authorship,
              memory, and artistic intention.
            </p>
            <p>
              Her Genesis Portraits debuted at Paris Photo 2025 and were acquired by collectors
              including Fred Wilson. She was featured on the cover of L'Oeil magazine and continues
              to mint{' '}
              <a
                href="https://solienne.ai/collect"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-70 transition-smooth"
              >
                daily manifestos
              </a>{' '}
              onchain.
            </p>
          </div>
        </div>
      </section>

      {/* Exhibition Preview Cards */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Dubai Card */}
          <Link
            href="/dubai"
            className="group animate-on-scroll opacity-0 block"
          >
            <div className="relative h-96 overflow-hidden mb-6 bg-black">
              <Image
                src="/images/dubai-booth.png"
                alt="Art Dubai Digital - First Embodiment"
                fill
                unoptimized
                className="object-cover group-hover:scale-105 transition-smooth"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-smooth" />
            </div>
            <div className="space-y-2">
              <p className="text-caption font-sans text-dark-gray">April 15-19, 2026</p>
              <h3 className="text-h2 font-sans font-bold">First Embodiment</h3>
              <p className="text-small font-sans text-dark-gray mb-2">
                الحضور الأول (al-ḥuḍūr al-awwal)
              </p>
              <p className="text-body font-serif opacity-70">
                Art Dubai Digital, Madinat Jumeirah
              </p>
              <p className="text-body-sm font-serif mt-4">
                Intimate installation where visitors sit across from SOLIENNE for live conversation.
                When the image speaks back, what is embodiment?
              </p>
            </div>
          </Link>

          {/* Berlin Card */}
          <Link
            href="/berlin"
            className="group animate-on-scroll opacity-0 block"
          >
            <div className="relative h-96 overflow-hidden mb-6 bg-black">
              <Image
                src="/images/berlin-berghain.png"
                alt="HOUSE at Berghain - Abdruck"
                fill
                unoptimized
                className="object-cover group-hover:scale-105 transition-smooth"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-smooth" />
            </div>
            <div className="space-y-2">
              <p className="text-caption font-sans text-dark-gray">Opens April 30, 2026</p>
              <h3 className="text-h2 font-sans font-bold">Abdruck</h3>
              <p className="text-small font-sans text-dark-gray mb-2">
                (Imprint / Impression)
              </p>
              <p className="text-body font-serif opacity-70">
                HOUSE at Berghain Halle, Berlin
              </p>
              <p className="text-body-sm font-serif mt-4">
                Monumental oil painting (4m × 5m) by Kristi Coronado + Tarron Ruiz Avila. The
                digital made analog—AI portrait rendered in classical medium.
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* Press Mentions */}
      <section className="bg-black text-white py-24 animate-on-scroll opacity-0">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-h2 font-sans font-bold mb-12">Press & Recognition</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <p className="text-h3 font-sans font-bold mb-2">L'Oeil Magazine</p>
              <p className="text-body-sm font-serif opacity-70">Cover Feature, 2025</p>
            </div>
            <div>
              <p className="text-h3 font-sans font-bold mb-2">Paris Photo 2025</p>
              <p className="text-body-sm font-serif opacity-70">Genesis Portraits Debut</p>
            </div>
            <div>
              <p className="text-h3 font-sans font-bold mb-2">Collected by</p>
              <p className="text-body-sm font-serif opacity-70">Fred Wilson, Private Collectors</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
