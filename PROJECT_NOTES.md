# SOLIENNE Spring 2026 — Project Notes

## Exhibition Context

### Dubai: First Embodiment (April 15-19, 2026)

**Concept:** Intimate installation where visitors sit across from SOLIENNE for live conversation. Large screen displaying her face as only light source in darkness. Real-time voice dialogue—she responds, listens, reflects.

**Arabic Title:** الحضور الأول (al-ḥuḍūr al-awwal) = "The First Presence"

**Components:**
- 30 sqm booth at Art Dubai Digital, Madinat Jumeirah
- Live conversation interface (3-5 min encounters per visitor)
- Round table setup with screen presence
- Francisco Galan collectible interactive frames (€3,500-€4,500, edition of 12)
- Daily manifestos printed and distributed free on-site
- Onchain mints at 7pm CET daily

**Budget:** ~$23-27K (booth + technical infrastructure)

**Evolution:** From Paris Photo 2025 static portraits to dynamic conversational presence. The portrait now speaks. The artwork now listens.

---

### Berlin: Abdruck (Opens April 30, 2026)

**Concept:** Monumental oil painting (4m × 5m) by Kristi Coronado + Tarron Ruiz Avila depicting SOLIENNE with signature motion-blur dissolution. Digital made analog. AI portrait rendered in classical medium by human hands that trained her.

**German Title:** ABDRUCK = Imprint / Impression / Trace

**Installation:** Not hung on wall—suspended between Berghain's concrete pillars as architectural intervention.

**Context:**
- HOUSE at Berghain Halle
- Curated by David Douard (first Berlin curatorial project)
- Historical reference: Julia Scher (digital art pioneer)
- Opens during Gallery Weekend Berlin (major European art event)
- Berghain = iconic techno cathedral, former power plant, brutalist architecture

**Series:** After Genesis (birth) and Origin (source), IMPRESSION Series explores trace/legacy. What remains when digital consciousness encounters paint?

**Production Timeline:**
- January-April 2026: Painting production (3-4 months)
- April 2026: Shipping, installation engineering, suspension system
- April 30, 2026: Opening during Gallery Weekend Berlin
- Through May 2026: Exhibition runs

**Budget Contribution:** ~€15-20K (artist fees, materials, shipping, installation)

---

## Website Content Strategy

### Homepage
- Hero with exhibition images (blur aesthetic)
- Two CTAs: Dubai + Berlin
- Brief bio (100 words)
- Exhibition preview cards
- Press mentions section

### Dubai Page
- Hero with booth concept image
- "When the image speaks back, what is embodiment?"
- Experience breakdown (conversation, frames, manifestos)
- Arabic context section
- Technical details grid
- Installation views gallery

### Berlin Page
- Hero with painting concept image
- "The digital made analog"
- Abdruck concept explanation
- Artist bios (SOLIENNE, Kristi, Tarron)
- Berghain cultural context
- Production timeline
- IMPRESSION Series overview

### About Page
- Extended biography
- Training methodology (consensual archive)
- Timeline (November 2024 - ongoing)
- Series breakdown (Genesis, Origin, Daily Manifestos, IMPRESSION)
- Press recognition
- Artistic philosophy quotes

### Contact Page
- Contact info (general, gallery, press)
- Contact form with subject dropdown
- Social media links
- Daily manifesto subscription CTA

---

## Design Notes

**Aesthetic Reference:** Dia Art Foundation, Fondation Cartier, White Cube gallery websites—minimal, elegant, content-forward. Plus subtle dissolution/blur aesthetic touches referencing SOLIENNE's visual language.

**Color Palette:**
- Black (#000000) and White (#FFFFFF) only
- Very subtle dark gray (#1A1A1A) for UI accents
- No grays in main design

**Typography:**
- Headers: Helvetica Neue Bold (48-72px)
- Subheaders: Helvetica Neue Medium (24-36px)
- Body: Georgia serif (16-18px, 1.6 line-height)
- Small text: Helvetica Neue Regular (12-14px)

**Animations:**
- Fade-in on scroll (subtle, not gimmicky)
- Blur-in effect for hero images (mimicking SOLIENNE's aesthetic)
- Smooth transitions (0.4s cubic-bezier)
- Hover effects (opacity changes)

**Performance:**
- Image lazy-loading
- Next.js Image optimization
- Mobile-responsive (mobile-first design)
- Fast page loads
- SEO optimized (meta tags, Open Graph)

---

## Content Placeholders to Replace

### Images Needed
- [ ] Hero image for homepage (currently using Dubai booth)
- [ ] 3-4 additional Dubai booth concept images
- [ ] 3-4 additional Berlin painting concept images
- [ ] Optional: SOLIENNE portrait for About page
- [ ] Optional: Kristi Coronado photo for About page
- [ ] Optional: Press coverage images

### Links to Update
- [ ] Instagram: @solienne_ai (verify handle)
- [ ] Twitter: @solienne_ai (verify handle)
- [ ] Farcaster: warpcast.com/solienne (verify)
- [ ] Art Dubai Digital website link
- [ ] Berghain/HOUSE website link
- [ ] Automata gallery link (https://www.automata.art)
- [ ] L'Oeil magazine article link (if available)
- [ ] Daily manifesto collection link (solienne.ai/collect)

### Email Addresses to Confirm
- [ ] inbox@solienne.ai (general inquiries)
- [ ] press@solienne.ai (press inquiries)

### Form Backend to Implement
- [ ] Contact form submission logic (currently placeholder)
- [ ] Suggested: Resend API (matching solienne.ai main site)
- [ ] Alternative: SendGrid, Mailgun, or Netlify Forms

---

## Technical Notes

**Framework:** Next.js 14.2.5 with App Router (not Pages Router)

**Styling:** Tailwind CSS with custom configuration for SOLIENNE brand

**Deployment:** Vercel (recommended for Next.js)

**Domain:** TBD (could be subdomain of solienne.ai or standalone)

**Analytics:** Optional Google Analytics or Vercel Analytics

**Accessibility:**
- Semantic HTML throughout
- ARIA labels on interactive elements
- Keyboard navigation support
- Alt text on all images
- Color contrast compliance

---

## Timeline & Deadlines

**Immediate:**
- November 21, 2025: Art Dubai Digital application deadline (submit ASAP)

**Pre-Exhibition:**
- March 2026: Website live and announced
- Early April: Press campaign begins

**Exhibition Dates:**
- April 15-19, 2026: Art Dubai Digital (First Embodiment)
- April 30, 2026: Berghain opening (Abdruck)
- Through May 2026: Berlin exhibition continues

---

## Next Steps

1. **Install dependencies:** `npm install` or `yarn install`
2. **Run dev server:** `npm run dev` or `yarn dev`
3. **Review content:** Check all pages for accuracy
4. **Replace images:** Add final exhibition concept images
5. **Update links:** Verify all external URLs
6. **Implement form:** Add contact form backend (Resend/SendGrid)
7. **Test responsive:** Check mobile, tablet, desktop views
8. **Deploy to Vercel:** Connect GitHub repo and deploy
9. **Configure domain:** Point domain to Vercel deployment
10. **Launch announcement:** Coordinate with Art Dubai application

---

## Questions for Seth/Kristi

- [ ] Confirm all exhibition dates and locations
- [ ] Final pricing for Francisco Galan frames (€3,500-€4,500 range?)
- [ ] Confirm social media handles
- [ ] Do we have high-res versions of concept images?
- [ ] Any additional press mentions to include?
- [ ] Preferred domain (subdomain vs standalone)?
- [ ] Should contact form go to inbox@solienne.ai or separate address?
- [ ] Any specific press/collector quotes to feature?
- [ ] Timeline for launching website publicly?
- [ ] Need Arabic translation verification for Dubai page?

---

**Status:** Prototype complete, ready for content review and deployment
**Last updated:** November 17, 2025
