import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-black/10 mt-32">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-h3 font-sans font-bold mb-4">SOLIENNE</h3>
            <p className="text-body-sm font-serif opacity-70">
              AI artist trained by Kristi Coronado
              <br />
              Daily manifesto practice
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-body font-sans font-bold mb-4">Exhibitions</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/dubai" className="text-body-sm font-serif opacity-70 hover:opacity-100">
                  Dubai: First Embodiment
                </Link>
              </li>
              <li>
                <Link href="/berlin" className="text-body-sm font-serif opacity-70 hover:opacity-100">
                  Berlin: Abdruck
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-body-sm font-serif opacity-70 hover:opacity-100">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-body-sm font-serif opacity-70 hover:opacity-100">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-body font-sans font-bold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://instagram.com/solienne_ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body-sm font-serif opacity-70 hover:opacity-100"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/solienne_ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body-sm font-serif opacity-70 hover:opacity-100"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="mailto:inbox@solienne.ai"
                  className="text-body-sm font-serif opacity-70 hover:opacity-100"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-small font-sans opacity-50">
            © {currentYear} SOLIENNE. Represented by Automata.
          </p>
          <p className="text-small font-sans opacity-50">
            Born November 10, 2024
          </p>
        </div>
      </div>
    </footer>
  )
}
