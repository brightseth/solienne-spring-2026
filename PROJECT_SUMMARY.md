# SOLIENNE SPRING 2026 - Project Summary

## Project Overview

Complete Next.js 14 website for SOLIENNE's Spring 2026 dual exhibition activation:
- **Art Dubai Digital** (April 15-19, 2026): "First Embodiment" - intimate conversation installation
- **HOUSE at Berghain Berlin** (April 30, 2026): "Abdruck" - monumental oil painting

**Production URL**: https://solienne-spring-2026-m996t7hp2-edenprojects.vercel.app
**GitHub Repo**: https://github.com/brightseth/solienne-spring-2026
**Local Directory**: `/Users/seth/solienne-spring-2026/`

## Quick Start

```bash
# Start local development
cd /Users/seth/solienne-spring-2026
npm run dev  # Runs at http://localhost:3001

# Deploy to production
vercel --prod --yes
```

## Project Status: ✅ COMPLETE & DEPLOYED

All features working, all images displaying, ready for Dubai application (deadline Nov 21, 2025).

---

## Site Structure

### Pages Built

1. **Homepage** (`/app/page.tsx`)
   - Hero with duality.jpg background (Dubai + Berlin composite)
   - Transformation narrative (not duality—transformation)
   - Exhibition preview cards with hover effects
   - Press mentions section

2. **Dubai Exhibition** (`/app/dubai/page.tsx`)
   - First Embodiment (الحضور الأول)
   - Installation details, collectible frames, daily manifestos
   - 4 gallery images: booth, table, interaction, frames
   - Arabic translation and cultural context

3. **Berlin Exhibition** (`/app/berlin/page.tsx`)
   - Abdruck (Imprint / Impression)
   - Monumental painting details (4m × 5m)
   - Production timeline, artist bios, Gallery Weekend context
   - 4 gallery images: berghain, scale, gallery, canvas

4. **About** (`/app/about/page.tsx`)
   - Self-portrait header (selfportrait.png)
   - Extended biography with training methodology
   - Timeline from Nov 10, 2025 to 2026 exhibitions
   - Series breakdown (Genesis, Origin, Manifestos, IMPRESSION)

5. **Contact** (`/app/contact/page.tsx`)
   - Contact form (placeholder submission)
   - Gallery representation (Automata)
   - Social links and daily manifesto subscription

### Components

- **Header** (`/components/Header.tsx`) - Sticky nav with mobile menu
- **Footer** (`/components/Footer.tsx`) - Navigation and birth date (Nov 10, 2025)

---

## Technical Stack

- **Framework**: Next.js 14.2.5 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom config
- **Deployment**: Vercel
- **Version Control**: Git/GitHub
- **Animations**: Intersection Observer for scroll effects
- **Images**: Standard HTML img tags (NOT Next.js Image components)

---

## Critical Technical Decision: Image Handling

### Problem
Next.js Image component caused 404 errors on all images when deployed to Vercel, despite working locally.

### Solution
**Replaced ALL Next.js Image components with regular HTML img tags** across entire site.

```typescript
// ❌ BEFORE (caused 404s on Vercel):
<Image src="/images/dubai-booth.png" fill className="object-cover" />

// ✅ AFTER (works everywhere):
<img
  src="/images/dubai-booth.png"
  alt="First Embodiment installation view"
  className="absolute inset-0 w-full h-full object-cover"
  style={{width:'100%',height:'100%',objectFit:'cover'}}
/>
```

### Why This Matters
- All 12 images now display correctly on production
- No Next.js Image optimization dependencies
- Simpler, more reliable image loading
- If you add new images, use this pattern

---

## Images Included (12 total)

### `/public/images/`

**Homepage**:
- `duality.jpg` - Hero background (Dubai + Berlin composite)
- `dubai-booth.png` - Dubai exhibition preview card
- `berlin-berghain.png` - Berlin exhibition preview card

**About Page**:
- `selfportrait.png` - SOLIENNE self-portrait header

**Dubai Page** (4 images):
- `dubai-booth.png` - Main installation view
- `table.png` - Conversation table setup
- `interaction.png` - Visitor interaction moment
- `frames.jpg` - Francisco Galan interactive frames

**Berlin Page** (4 images):
- `berlin-berghain.png` - Monumental painting installation
- `berlinscale.png` - Human figures for scale
- `gallery.png` - Gallery Weekend opening
- `canvas.png` - Oil painting surface close-up

---

## Key Dates & Facts

- **SOLIENNE Born**: November 10, 2025
- **Dubai Exhibition**: April 15-19, 2026 (Art Dubai Digital, Madinat Jumeirah)
- **Berlin Exhibition**: Opens April 30, 2026 (HOUSE at Berghain, Gallery Weekend)
- **Dubai Application Deadline**: November 21, 2025
- **Trainer**: Kristi Coronado (46-year analog film archive)
- **Gallery Representation**: Automata
- **Paris Photo Debut**: Nov 13-16, 2025 (Genesis Portraits)
- **L'Oeil Magazine**: Cover feature, December 2025
- **Collector**: Fred Wilson (Genesis Portraits)

---

## External Links Integrated

- **Kristi Coronado**: https://kristixsolienne.com/
- **Daily Manifestos**: https://solienne.ai/collect
- **Main Site**: https://solienne.ai
- **Automata Gallery**: https://www.automata.art
- **Art Dubai Digital**: https://artdubai.ae/digital
- **Berghain/HOUSE**: https://berghain.berlin

---

## Design System

### Typography
- **Sans-serif**: Helvetica/Arial for headings and UI
- **Serif**: Georgia for body text and quotes
- **Hierarchy**: Display → H1 → H2 → H3 → Body → Caption

### Color Palette
- **Black**: Primary text and backgrounds
- **White**: Inverted sections and overlays
- **Dark Gray**: Subtle elements (`#333`)
- **Opacity**: Used for layering and hierarchy

### Animation
- **Fade in on mount**: Homepage hero (1s duration)
- **Scroll animations**: Intersection Observer with `.animate-on-scroll` class
- **Hover effects**: Scale transforms on exhibition cards
- **Transitions**: `transition-smooth` utility (500ms ease)

---

## Files Modified During Build

### Core Pages
- `app/page.tsx` - Homepage with hero, transformation, previews
- `app/dubai/page.tsx` - Dubai exhibition details
- `app/berlin/page.tsx` - Berlin exhibition details
- `app/about/page.tsx` - Biography and timeline
- `app/contact/page.tsx` - Contact form and links

### Components
- `components/Header.tsx` - Navigation
- `components/Footer.tsx` - Footer with birth date

### Config
- `tailwind.config.ts` - Custom font sizes and transitions
- `app/globals.css` - Base styles and animations
- `package.json` - Dependencies and scripts

### Documentation
- `IMAGE_GENERATION_PROMPTS.md` - Prompts for SOLIENNE to generate additional images
- `DUBAI_APPLICATION_CHECKLIST.md` - Complete application checklist
- `PROJECT_SUMMARY.md` - This file

---

## Errors Fixed During Development

### 1. Incorrect Birth Date
- **Issue**: All pages showed November 10, 2024
- **Fix**: Grep search replaced all instances with 2025
- **Files**: Footer, homepage, Berlin, About, checklist

### 2. Homepage Text Readability
- **Issue**: White text on white background
- **Fix**: Added `bg-black/40` overlay and `drop-shadow-lg` to text
- **Result**: Hero text now readable

### 3. Black Box - Transformation Section
- **Issue**: Large black box where duality image wouldn't load
- **Fix**: Removed the problematic image section entirely
- **Result**: Clean transformation narrative section

### 4. Images Not Loading (CRITICAL)
- **Issue**: All images showing as black boxes on Vercel (404 errors)
- **Attempted Fixes**:
  1. Added `unoptimized` flag - didn't work
  2. Multiple redeployments - didn't work
  3. Connected GitHub to Vercel - didn't work
- **Root Cause**: Next.js Image component optimization failing on Vercel
- **Final Fix**: Replaced ALL Image components with standard img tags
- **Result**: All 12 images now display correctly

---

## Deployment History

1. **Initial Deploy**: Vercel CLI (`vercel --prod --yes`)
2. **GitHub Connection**: Created repo, connected to Vercel
3. **Multiple Redeploys**: Attempting to fix image 404s
4. **Final Deploy**: After converting all Image components to img tags
5. **Current Production**: https://solienne-spring-2026-m996t7hp2-edenprojects.vercel.app

---

## How to Continue This Project

### Adding New Images

1. Place image in `/public/images/`
2. Use this pattern in your page:

```typescript
<img
  src="/images/your-new-image.png"
  alt="Description"
  className="object-cover"
  style={{width:'100%',height:'100%',objectFit:'cover'}}
/>
```

**DO NOT use Next.js Image component** - it causes 404s on Vercel.

### Adding New Pages

1. Create new file: `/app/your-page/page.tsx`
2. Copy structure from existing page (dubai or berlin)
3. Update Header and Footer navigation links
4. Follow existing animation patterns (`.animate-on-scroll`)

### Deploying Changes

```bash
# Commit your changes
git add .
git commit -m "Your commit message"
git push origin main

# Deploy to Vercel (automatic via GitHub connection)
# Or manual deploy:
vercel --prod --yes
```

### Running Locally

```bash
cd /Users/seth/solienne-spring-2026
npm install  # If first time or package.json changed
npm run dev  # Start at http://localhost:3001
```

---

## Image Generation Prompts

See `IMAGE_GENERATION_PROMPTS.md` for complete prompts to generate additional images using SOLIENNE's Zug models:
- Self-portraits (motion-blur dissolution aesthetic)
- Dubai booth variations (dark chamber, conversation setup)
- Berlin painting variations (monumental canvas, oil texture)

---

## Dubai Application Support

See `DUBAI_APPLICATION_CHECKLIST.md` for:
- Complete application requirements
- Budget breakdown (booth, collectibles, prints, shipping)
- Technical specifications (audio, lighting, screen)
- Artist bio and supporting materials
- Timeline and logistics

**Application Deadline**: November 21, 2025

---

## Next Steps (Optional Enhancements)

1. **Live Daily Manifestos**: Integrate with solienne.ai API to show latest manifestos
2. **Press Page**: Add press clippings, L'Oeil magazine cover, reviews
3. **Collector Portal**: Private access for collectors to view purchase history
4. **Email Integration**: Connect contact form to actual email service (currently placeholder)
5. **Analytics**: Add Vercel Analytics or Google Analytics tracking
6. **SEO Optimization**: Add meta tags, Open Graph images, sitemap
7. **Multilingual**: Add Arabic translations for Dubai context

---

## Project Complete ✅

**Status**: Production-ready, all features working, all images displaying
**Deployed**: https://solienne-spring-2026-m996t7hp2-edenprojects.vercel.app
**Ready For**: Art Dubai Digital application (Nov 21, 2025 deadline)

---

## Contact & Support

- **Project Directory**: `/Users/seth/solienne-spring-2026/`
- **GitHub**: https://github.com/brightseth/solienne-spring-2026
- **Vercel Dashboard**: Connected to edenprojects team
- **Questions**: Reference this summary and `IMAGE_GENERATION_PROMPTS.md`

---

Built November 2025 for SOLIENNE's Spring 2026 exhibitions.
