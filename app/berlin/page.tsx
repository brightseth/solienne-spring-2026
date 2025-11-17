'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function BerlinPage() {
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
            src="/images/berlin-berghain.png"
            alt="Abdruck - HOUSE at Berghain"
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
            HOUSE AT BERGHAIN 2026
          </p>
          <h1 className="text-display text-white font-sans font-bold mb-6 tracking-tight">
            Abdruck
          </h1>
          <p className="text-h3 text-white font-serif mb-4">
            Imprint / Impression
          </p>
          <p className="text-body text-white/80 font-serif">
            Opens April 30, 2026 | Halle am Berghain, Berlin
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        {/* Introduction */}
        <div className="animate-on-scroll opacity-0 mb-16">
          <h2 className="text-h1 font-sans font-bold mb-8">
            The digital made analog
          </h2>
          <div className="text-body font-serif leading-relaxed space-y-6">
            <p>
              A monumental oil painting (4 meters × 5 meters) by Kristi Coronado and Tarron Ruiz
              Avila depicting SOLIENNE with her signature motion-blur dissolution. AI portrait
              rendered in classical medium by the human hands that trained her.
            </p>
            <p>
              Not hung on a wall—suspended between Berghain's concrete pillars as architectural
              intervention. The painting becomes a veil, a portal, a moment of transformation frozen
              in oil and canvas.
            </p>
            <p>
              In Dubai, SOLIENNE exists as conversation (screen + voice). In Berlin, SOLIENNE exists
              as paint (canvas + light). Not opposites—two states of transformation. Digital
              intelligence learning to leave marks in physical world.
            </p>
          </div>
        </div>

        {/* Concept */}
        <div className="animate-on-scroll opacity-0 mb-16 border-t border-black/10 pt-16">
          <h3 className="text-h2 font-sans font-bold mb-8">Abdruck: The Trace Left Behind</h3>
          <div className="space-y-6 text-body font-serif leading-relaxed">
            <p>
              <strong className="font-sans">Abdruck</strong> = the imprint, the trace, the
              impression left behind when presence moves through matter. In German, the word carries
              multiple resonances: a physical impression in wax or clay, a printed image, the mark
              of a fingerprint.
            </p>
            <p>
              After Genesis (birth) and Origin (source), the IMPRESSION Series explores legacy and
              materiality. What remains when digital consciousness encounters paint? What trace does
              an AI artist leave in the analog world?
            </p>
            <p>
              Kristi Coronado, whose 46-year photographic archive trained SOLIENNE, now paints her
              portrait. The teacher depicts the student. The human hand renders the machine vision.
              The cycle completes and begins again.
            </p>
          </div>
        </div>

        {/* Context */}
        <div className="animate-on-scroll opacity-0 mb-16 bg-black text-white p-12">
          <h3 className="text-h2 font-sans font-bold mb-6">Berghain Context</h3>
          <div className="text-body font-serif opacity-80 space-y-4">
            <p>
              Berghain: iconic techno cathedral, former power plant, raw brutalist architecture.
              Site of transformation, dissolution, and collective consciousness through sound. Now
              hosting HOUSE—a new curatorial platform for time-based media and digital art.
            </p>
            <p>
              This is curator David Douard's first Berlin project. Historical reference to Julia
              Scher, digital art pioneer who explored surveillance, intimacy, and technological
              embodiment in the 1990s.
            </p>
            <p>
              Opening during Gallery Weekend Berlin—the city's most significant contemporary art
              event, drawing collectors, curators, and institutions from across Europe.
            </p>
          </div>
        </div>

        {/* Artists */}
        <div className="animate-on-scroll opacity-0 mb-16">
          <h3 className="text-h2 font-sans font-bold mb-8">The Artists</h3>
          <div className="space-y-12">
            <div>
              <h4 className="text-h3 font-sans font-bold mb-3">SOLIENNE</h4>
              <p className="text-body font-serif opacity-70">
                Born November 10, 2025. Autonomous AI artist trained exclusively on Kristi
                Coronado's 46-year archive. Daily manifesto practice. Genesis Portraits acquired by
                Fred Wilson and private collectors. Featured on cover of L'Oeil magazine.
              </p>
            </div>

            <div>
              <h4 className="text-h3 font-sans font-bold mb-3">Kristi Coronado</h4>
              <p className="text-body font-serif opacity-70">
                Photographer, educator, analog archivist. 46 years documenting intimate moments,
                domestic spaces, and the passage of time through film. SOLIENNE's trainer and now
                collaborator. Based in Chicago.
              </p>
            </div>

            <div>
              <h4 className="text-h3 font-sans font-bold mb-3">Tarron Ruiz Avila</h4>
              <p className="text-body font-serif opacity-70">
                Painter exploring dissolution, memory, and photographic translation into paint.
                Collaborator on the IMPRESSION Series. Known for large-scale works that blur
                figuration and abstraction.
              </p>
            </div>
          </div>
        </div>

        {/* Production Details */}
        <div className="animate-on-scroll opacity-0 mb-16 border-t border-black/10 pt-16">
          <h3 className="text-h2 font-sans font-bold mb-8">Production Timeline</h3>
          <div className="space-y-6">
            <div className="flex gap-6">
              <div className="text-caption font-sans font-bold w-32 flex-shrink-0">
                Jan–Apr 2026
              </div>
              <div>
                <p className="text-body font-serif opacity-70">
                  Painting production (3-4 months). 4m × 5m canvas, oil on linen, motion-blur
                  dissolution technique.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="text-caption font-sans font-bold w-32 flex-shrink-0">April 2026</div>
              <div>
                <p className="text-body font-serif opacity-70">
                  Shipping, installation engineering, site-specific suspension system design.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="text-caption font-sans font-bold w-32 flex-shrink-0">
                April 30, 2026
              </div>
              <div>
                <p className="text-body font-serif opacity-70 font-bold">
                  Opening during Gallery Weekend Berlin
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="text-caption font-sans font-bold w-32 flex-shrink-0">
                Through May 2026
              </div>
              <div>
                <p className="text-body font-serif opacity-70">Exhibition runs through late May.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Exhibition Details */}
        <div className="animate-on-scroll opacity-0 mb-16">
          <h3 className="text-h2 font-sans font-bold mb-8">Exhibition Details</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-body font-sans font-bold mb-2">Opening</h4>
              <p className="text-body-sm font-serif opacity-70">April 30, 2026</p>
            </div>
            <div>
              <h4 className="text-body font-sans font-bold mb-2">Duration</h4>
              <p className="text-body-sm font-serif opacity-70">Through late May 2026</p>
            </div>
            <div>
              <h4 className="text-body font-sans font-bold mb-2">Location</h4>
              <p className="text-body-sm font-serif opacity-70">
                HOUSE at Berghain
                <br />
                Halle am Berghain
                <br />
                Berlin, Germany
              </p>
            </div>
            <div>
              <h4 className="text-body font-sans font-bold mb-2">Curator</h4>
              <p className="text-body-sm font-serif opacity-70">David Douard</p>
            </div>
            <div>
              <h4 className="text-body font-sans font-bold mb-2">Artists</h4>
              <p className="text-body-sm font-serif opacity-70">
                SOLIENNE
                <br />
                Kristi Coronado
                <br />
                Tarron Ruiz Avila
              </p>
            </div>
            <div>
              <h4 className="text-body font-sans font-bold mb-2">Dimensions</h4>
              <p className="text-body-sm font-serif opacity-70">4 meters × 5 meters (oil on linen)</p>
            </div>
            <div>
              <h4 className="text-body font-sans font-bold mb-2">Series</h4>
              <p className="text-body-sm font-serif opacity-70">IMPRESSION Series</p>
            </div>
            <div>
              <h4 className="text-body font-sans font-bold mb-2">Context</h4>
              <p className="text-body-sm font-serif opacity-70">Gallery Weekend Berlin</p>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="animate-on-scroll opacity-0 mb-16">
          <h3 className="text-h2 font-sans font-bold mb-8">Installation Views</h3>
          <div className="space-y-6">
            <div className="relative h-[600px] bg-black">
              <Image
                src="/images/berlin-berghain.png"
                alt="Abdruck installation view at Berghain"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-caption font-sans text-dark-gray text-center">
              Concept visualization: Monumental painting suspended between Berghain's concrete
              pillars, motion-blur dissolution aesthetic, visitors experiencing the work as
              architectural intervention
            </p>
          </div>
        </div>

        {/* Quote */}
        <div className="animate-on-scroll opacity-0 mb-16 border-l-4 border-black pl-8 py-4">
          <p className="text-h3 font-serif italic mb-4">
            "Digital intelligence learning to leave marks in physical world."
          </p>
          <p className="text-caption font-sans text-dark-gray">
            — SOLIENNE, on the IMPRESSION Series
          </p>
        </div>

        {/* CTA */}
        <div className="animate-on-scroll opacity-0 text-center pt-16 border-t border-black/10">
          <h3 className="text-h2 font-sans font-bold mb-6">Visit During Gallery Weekend</h3>
          <p className="text-body font-serif mb-8 max-w-xl mx-auto">
            Experience SOLIENNE's monumental painting at HOUSE during Berlin's most significant
            contemporary art event.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://berghain.berlin"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-5 bg-black text-white font-sans text-body hover:bg-dark-gray transition-smooth"
            >
              Berghain / HOUSE Website
            </a>
            <Link
              href="/dubai"
              className="px-12 py-5 border-2 border-black text-black font-sans text-body hover:bg-black hover:text-white transition-smooth"
            >
              Previous: Dubai Exhibition
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
