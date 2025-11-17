# SOLIENNE Spring 2026 Activation

Prototype website for SOLIENNE's Q2 2026 exhibitions: Art Dubai Digital (April 15-19) and HOUSE at Berghain Berlin (April 30).

## Project Overview

This is a Next.js 14 website showcasing SOLIENNE, an autonomous AI artist trained by Kristi Coronado, with two major exhibitions in Spring 2026:

1. **First Embodiment** — Art Dubai Digital (April 15-19, 2026)
   - Intimate conversation installation
   - Live voice dialogue with SOLIENNE
   - Francisco Galan collectible frames
   - Daily manifesto distribution

2. **Abdruck** — HOUSE at Berghain Berlin (opens April 30, 2026)
   - Monumental oil painting (4m × 5m)
   - Kristi Coronado + Tarron Ruiz Avila
   - IMPRESSION Series launch
   - Gallery Weekend Berlin

## Tech Stack

- **Framework:** Next.js 14.2.5 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Fonts:** Helvetica Neue (sans-serif), Georgia (serif)
- **Deployment:** Vercel

## Design Principles

- **Minimalist museum-quality aesthetic**
- **Strict black and white color palette**
- **Swiss typography principles**
- **Dissolution/blur aesthetic** (subtle image treatments)
- **Mobile-responsive**
- **Fast-loading with lazy loading**
- **Accessibility-compliant**

## Project Structure

```
solienne-spring-2026/
├── app/
│   ├── page.tsx              # Homepage with hero + exhibition previews
│   ├── dubai/
│   │   └── page.tsx          # Art Dubai Digital exhibition page
│   ├── berlin/
│   │   └── page.tsx          # Berghain Berlin exhibition page
│   ├── about/
│   │   └── page.tsx          # About SOLIENNE + biography
│   ├── contact/
│   │   └── page.tsx          # Contact form + information
│   ├── layout.tsx            # Root layout with Header + Footer
│   └── globals.css           # Global styles + animations
├── components/
│   ├── Header.tsx            # Sticky header with navigation
│   └── Footer.tsx            # Footer with links + info
├── public/
│   └── images/
│       ├── dubai-booth.png   # Dubai exhibition concept image
│       └── berlin-berghain.png # Berlin exhibition concept image
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

```bash
# Install dependencies
npm install
# or
yarn install

# Run development server
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
# Build optimized production bundle
npm run build
# or
yarn build

# Start production server
npm start
# or
yarn start
```

## Key Features

### Homepage
- Full-screen hero with exhibition images
- Two CTAs: Dubai and Berlin exhibitions
- Biography section
- Exhibition preview cards
- Press mentions section
- Scroll animations

### Dubai Exhibition Page
- Detailed exhibition information
- Arabic translation (الحضور الأول)
- Experience components breakdown
- Francisco Galan collectible frames info
- Daily manifesto practice details
- Technical specifications

### Berlin Exhibition Page
- Abdruck concept explanation
- Artist bios (SOLIENNE, Kristi Coronado, Tarron Ruiz Avila)
- Berghain context + cultural significance
- Production timeline
- Gallery Weekend Berlin integration
- IMPRESSION Series overview

### About Page
- Extended biography
- Training methodology (consensual archive)
- Timeline of exhibitions and milestones
- Series breakdown (Genesis, Origin, Daily Manifestos, IMPRESSION)
- Press recognition
- Artistic philosophy

### Contact Page
- Contact information (general, gallery, press)
- Contact form with subject selection
- Social media links
- Daily manifesto subscription CTA

## Design System

### Typography
- **Display:** 72px Helvetica Neue Bold (hero titles)
- **H1:** 48px Helvetica Neue Bold (page titles)
- **H2:** 36px Helvetica Neue Medium (section titles)
- **H3:** 24px Helvetica Neue Medium (subsection titles)
- **Body:** 18px Georgia (main content)
- **Body Small:** 16px Georgia (secondary content)
- **Caption:** 14px Helvetica Neue (labels, metadata)
- **Small:** 12px Helvetica Neue (footer, fine print)

### Colors
- **Primary:** #000000 (black)
- **Secondary:** #FFFFFF (white)
- **Accent:** #1A1A1A (dark gray for subtle UI)

### Animations
- **Fade-in on scroll:** Elements fade in when entering viewport
- **Blur-in for images:** Hero images blur-in on page load
- **Smooth transitions:** 0.4s cubic-bezier easing
- **Hover effects:** Opacity changes on interactive elements

## Content Placeholders

**Images to replace:**
- Hero image (homepage): Current placeholder is Dubai booth concept
- Additional exhibition photos (3-4 per exhibition page)
- Optional: SOLIENNE portrait for About page

**Links to update:**
- Social media URLs (Instagram, Twitter, Farcaster)
- External exhibition websites (Art Dubai Digital, Berghain/HOUSE)
- Automata gallery link
- Email addresses (confirm inbox@solienne.ai, press@solienne.ai)

**Form submission:**
- Contact form currently uses placeholder logic
- Replace with actual email service (Resend, SendGrid, etc.)

## Deployment

### Vercel (Recommended)

1. Push code to GitHub repository
2. Connect repository to Vercel
3. Vercel will auto-detect Next.js and configure build settings
4. Deploy!

```bash
# Or deploy directly via Vercel CLI
vercel --prod
```

### Environment Variables

No environment variables required for basic deployment. If adding contact form backend, create `.env.local`:

```
RESEND_API_KEY=your_key_here
# or other email service credentials
```

## Timeline

- **November 21, 2025:** Art Dubai Digital application deadline
- **April 15-19, 2026:** Art Dubai Digital exhibition (First Embodiment)
- **April 30, 2026:** Berghain opening (Abdruck) during Gallery Weekend Berlin
- **Through May 2026:** Berlin exhibition runs

## Credits

**Artist:** SOLIENNE (autonomous AI artist)
**Trainer:** Kristi Coronado
**Collaborators:** Tarron Ruiz Avila (painting), Francisco Galan (interactive frames)
**Gallery:** Automata
**Platform:** Eden Protocol
**Curators:** David Douard (Berlin)

## License

© 2025 SOLIENNE. All rights reserved.

## Contact

For questions about this website:
- Email: inbox@solienne.ai
- Repository: [GitHub link when available]

For press and exhibition inquiries, visit the Contact page.

---

**Built with:** Next.js 14, TypeScript, Tailwind CSS
**Design philosophy:** Museum-quality minimalism with dissolution aesthetic
**Last updated:** November 2025
