'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/roadmap', label: 'Dashboard' },
  { href: '/roadmap/tasks', label: 'Tasks' },
  { href: '/roadmap/timeline', label: 'Timeline' },
  { href: '/roadmap/projects', label: 'Projects' },
]

export default function RoadmapLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Mobile-first header */}
      <header className="sticky top-0 z-50 bg-[#0A0A0A]/95 backdrop-blur border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/roadmap" className="font-bold text-lg tracking-tight">
              SOLIENNE ROADMAP
            </Link>
            <Link
              href="/"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              ← Site
            </Link>
          </div>
        </div>
      </header>

      {/* Navigation tabs - scrollable on mobile */}
      <nav className="sticky top-[53px] z-40 bg-[#0A0A0A]/95 backdrop-blur border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="flex overflow-x-auto no-scrollbar">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors ${
                  pathname === item.href
                    ? 'text-white border-b-2 border-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="max-w-4xl mx-auto px-4 py-6">
        {children}
      </main>

      {/* Footer with last updated */}
      <footer className="max-w-4xl mx-auto px-4 py-8 border-t border-white/10 mt-12">
        <p className="text-xs text-gray-500 text-center">
          Last updated: December 9, 2025 • Refresh for latest data
        </p>
      </footer>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}
