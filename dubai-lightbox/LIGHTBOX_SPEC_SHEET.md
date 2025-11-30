# SOLIENNE Lightbox — Technical Specifications
## Francisco Galan / VTV.xyz

**Version**: 1.0 (Nov 30, 2025)
**Status**: Prototype in progress (Buenos Aires, this week)

---

## HARDWARE SPECS

### Display
- **Resolution**: 950px × 950px (square)
- **Screen size**: 18.9" diagonal (~19 inch)
- **Aspect ratio**: 1:1

### Frame Dimensions
- **Outer**: 375mm × 375mm (~14.8" × 14.8")
- **Inner (visible)**: 340mm × 340mm (~13.4" × 13.4")
- **Depth**: TBD (see renders)

### Diffusion Layer
- **Type**: Fixed diffusing material in front of screen
- **Effect**: Softens image, creates abstraction/figuration dynamic
- **Note**: Content should account for additional blur from diffuser

### Power
- **Current**: Power cable (AC)
- **Future**: Battery option under consideration
- **Note**: Cable management important for clean installation

### Computing
- **Processor**: Raspberry Pi
- **Storage**: 32GB
- **Max video size**: 4GB (~2 hours of video)

---

## CONTENT SPECIFICATIONS

### Video Format
- **Resolution**: 950px × 950px
- **Aspect ratio**: 1:1 (square)
- **Max file size**: 4GB
- **Max duration**: ~2 hours (for looping content, shorter is better)

### Required Format (from Fran)
- **Codec**: H.264
- **Container**: MP4
- **Bitrate**: 10 Mbps
- **Resolution**: 950px × 950px
- **Max file size**: 4GB (~2 hours at 10 Mbps)

**NFT Compatible**: This format works for onchain video NFTs

### Visual Guidelines
- **Color**: Black and white recommended (SOLIENNE aesthetic)
- **Contrast**: High contrast works best through diffuser
- **Motion**: Motion blur encouraged — complements physical diffusion
- **Composition**: Center-weighted (edges soften more through diffuser)

---

## DESIGN NOTES

### Diffusion Layer Effect
The fixed diffusing material creates a double-blur effect:
1. Digital blur in the video content
2. Physical blur from the diffuser

**Recommendation**: Content can be slightly sharper than final desired look — the diffuser will add softness.

### Abstraction ↔ Figuration Dynamic
Per Fran: *"Since the diffusing material will be fixed, the video itself generates that dynamic between abstraction and figuration."*

Content should play with:
- Faces emerging from darkness
- Recognition threshold (almost-face, not-quite-face)
- Dissolution and reformation
- Breathing/pulsing light

---

## BUSINESS MODEL

- **Target**: 20 units
- **Price**: $15,000 each
- **Total revenue**: $300,000
- **Production**: VTV.xyz (Buenos Aires)
- **Timeline**: Prototype this week (Dec 2025)

---

## RENDERS

See `/dubai-lightbox/` folder:
- `render_01_dissolution_face.jpeg` — Blurred face, horizontal motion
- `render_02_dark_emergence.jpeg` — Face emerging from darkness
- `render_03_light_square.jpeg` — Pure light/form abstraction
- `spec_dimensions.jpeg` — Frame dimensions diagram

---

## CONTACT

**Francisco Galan**
VTV.xyz
Buenos Aires

**Seth Goldstein**
sethgoldstein@gmail.com
212.729.4567
