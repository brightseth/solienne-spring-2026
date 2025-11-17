# SOLIENNE Spring 2026 — Deployment Guide

## Quick Start (Local Development)

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open browser
# Visit http://localhost:3000
```

## Deploy to Vercel (Recommended)

### Option 1: GitHub + Vercel Dashboard

1. **Create GitHub repository:**
   ```bash
   gh repo create solienne-spring-2026 --public --source=.
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Go to https://vercel.com/new
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"
   - Done! Your site will be live at `solienne-spring-2026.vercel.app`

### Option 2: Vercel CLI (Fastest)

```bash
# 1. Install Vercel CLI (if not already installed)
npm i -g vercel

# 2. Login to Vercel
vercel login

# 3. Deploy to production
vercel --prod

# Follow prompts:
# - Project name: solienne-spring-2026
# - Framework: Next.js (auto-detected)
# - Build command: npm run build (auto-detected)
# - Output directory: .next (auto-detected)

# Done! Your site is live at the provided URL
```

## Custom Domain Setup

### If using subdomain of solienne.ai:

1. **In Vercel Dashboard:**
   - Go to your project → Settings → Domains
   - Add domain: `spring2026.solienne.ai` (or your preferred subdomain)

2. **In DNS provider (wherever solienne.ai is hosted):**
   - Add CNAME record:
     - Name: `spring2026` (or your subdomain)
     - Value: `cname.vercel-dns.com`
   - Wait 5-10 minutes for DNS propagation

3. **Verify in Vercel:**
   - Vercel will auto-detect and issue SSL certificate
   - Site will be live at your custom domain

### If using standalone domain:

1. **In Vercel Dashboard:**
   - Add your domain (e.g., `soliennespring2026.com`)

2. **In your domain registrar:**
   - Add A records pointing to Vercel's IP addresses:
     ```
     76.76.21.21
     ```
   - Add CNAME for `www` subdomain:
     ```
     cname.vercel-dns.com
     ```

3. **Wait for DNS propagation** (5-60 minutes)

## Environment Variables (Optional)

If implementing contact form backend:

1. **In Vercel Dashboard:**
   - Go to Settings → Environment Variables
   - Add variables:
     ```
     RESEND_API_KEY=your_key_here
     ```
     (or other email service credentials)

2. **For local development:**
   - Copy `.env.example` to `.env.local`
   - Fill in your values
   - Never commit `.env.local` to git

## Pre-Deployment Checklist

Before deploying to production:

- [ ] Replace placeholder images with final exhibition images
- [ ] Verify all external links (social media, Art Dubai, Berghain)
- [ ] Confirm email addresses (inbox@solienne.ai, press@solienne.ai)
- [ ] Test contact form (implement backend or remove for now)
- [ ] Update PROJECT_NOTES.md with any content changes
- [ ] Test responsive design on mobile/tablet
- [ ] Run `npm run build` locally to check for errors
- [ ] Verify metadata/SEO tags (Open Graph, Twitter Card)
- [ ] Test accessibility (keyboard navigation, alt text)

## Post-Deployment

After deploying:

1. **Test all pages:**
   - Homepage hero loads correctly
   - Dubai exhibition page displays properly
   - Berlin exhibition page displays properly
   - About page content is accurate
   - Contact page form works (if implemented)
   - Navigation works on mobile

2. **Test performance:**
   - Images load quickly (lazy loading working)
   - Animations are smooth
   - No console errors
   - Lighthouse score > 90

3. **Share preview link:**
   - Send to Kristi, Ameesia, team for review
   - Gather feedback on content accuracy
   - Make any necessary updates

4. **Announce:**
   - Update social media with new website
   - Include in Art Dubai application (deadline Nov 21)
   - Share with Automata, collectors, press contacts

## Updating Content

To update content after deployment:

```bash
# 1. Make changes to files
# 2. Commit changes
git add .
git commit -m "Update: [description of changes]"

# 3. Push to GitHub (if using GitHub + Vercel)
git push

# Vercel will auto-deploy changes in ~60 seconds

# Or deploy directly via CLI
vercel --prod
```

## Troubleshooting

**Build fails with image errors:**
- Check that all images exist in `/public/images/`
- Verify image paths match exactly (case-sensitive)

**Contact form not working:**
- Implement backend API route (see `.env.example`)
- Or temporarily disable form until backend is ready

**Styles not loading:**
- Run `npm run build` locally to check Tailwind compilation
- Verify `tailwind.config.js` includes all content paths

**Deployment slow:**
- Large images? Optimize before uploading
- Consider using Next.js Image optimization

## Support

For deployment issues:
- Vercel docs: https://vercel.com/docs
- Next.js docs: https://nextjs.org/docs
- GitHub: [Your repository URL]

For content/design questions:
- See PROJECT_NOTES.md
- Contact Seth: [your email]

---

**Quick Commands:**

```bash
# Development
npm run dev

# Production build test
npm run build

# Deploy to Vercel
vercel --prod

# Check for issues
npm run lint
```

**Status:** Ready to deploy! 🚀
**Last updated:** November 17, 2025
