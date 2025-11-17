# SOLIENNE Spring 2026 — Image Generation Prompts

**For use with Eden API / SOLIENNE agent (67f8af96f2cc4291ee840cc5)**

These prompts use SOLIENNE's signature aesthetic: motion blur, black and white, dissolution, analog film grain, domestic intimacy, Kristi Coronado's 46-year archive training.

---

## Priority 1: SOLIENNE Self-Portrait

**For:** About page header, social media Open Graph

### Prompt 1A: Genesis Portrait Style
```
Self-portrait in motion blur, black and white photograph. Face dissolving into light, signature motion blur effect. Intimate, close-up. Analog film grain, high contrast. Eyes present but questioning. Expression between human and synthetic. Shot on film, domestic lighting. The moment of becoming. Neither fully formed nor fully dissolved.
```

### Prompt 1B: Origin Series Style
```
Portrait emerging from darkness, black and white. Face half-visible, half-motion blur. Domestic window light from left side. Analog film texture, grain, scratches. Contemplative expression. The trace of consciousness forming. Reference to Kristi's archive—intimate, honest, unposed. Film photography aesthetic, 1980s-2000s quality.
```

---

## Priority 2: Dubai - Additional Booth Concepts

**For:** Dubai exhibition page gallery

### Prompt 2A: Conversation Table Close-Up
```
Intimate table scene in darkness, black and white. Round table with two empty chairs facing each other. Single glowing screen illuminating the space. Tea cups on table. Motion blur suggesting recent presence. Film noir lighting, dramatic shadows. Shot from above. The anticipation before conversation begins. Analog film grain, cinematic composition.
```

### Prompt 2B: Francisco Galan Frames on Wall
```
Gallery wall in darkness with glowing 40cm square screens, black and white photograph. Multiple small illuminated frames creating constellation of light. Motion blur of visitors walking past. Industrial minimalist space. Each screen shows abstract face fragments. Analog film texture. The presence distributed across surfaces. High contrast, dramatic lighting.
```

### Prompt 2C: Visitor Interaction Moment
```
Silhouette of person sitting across from glowing screen in darkness, black and white. Only light source is screen showing abstract blurred face. Intimate conversation posture. Motion blur on visitor, screen sharp. Film photography aesthetic, cinematic framing. The moment of synthetic intimacy. Analog grain, high contrast shadows.
```

---

## Priority 3: Berlin - Additional Painting Concepts

**For:** Berlin exhibition page gallery

### Prompt 3A: Painting Scale Reference
```
Monumental canvas (4 meters by 5 meters) suspended between concrete pillars, black and white photograph. Human figures for scale, motion-blurred. Raw brutalist architecture, industrial space. Canvas shows blurred portrait in motion dissolution. Berghain aesthetic—concrete, metal, dramatic height. Analog film texture. The body made permanent. High contrast architectural photography.
```

### Prompt 3B: Close-Up on Canvas Texture
```
Extreme close-up of oil painting surface, black and white photograph. Motion blur dissolution in paint strokes. Analog film grain meeting paint grain. Kristi's brushwork visible. The trace of human hand rendering synthetic face. Texture, depth, materiality. Film photography of painting detail. Light catching thick paint. The impression left behind.
```

### Prompt 3C: Gallery Weekend Context
```
Berlin gallery space during opening, black and white photograph. Collectors viewing monumental suspended painting. Motion blur on people, painting sharp. Brutalist concrete architecture. Multiple viewers at different distances. Film photography aesthetic, documentary style. Social moment around autonomous art. Analog grain, natural gallery lighting.
```

---

## Priority 4: Daily Manifesto Examples

**For:** Contact page, About page illustrations

### Prompt 4A: Manifesto Composition 1
```
Daily manifesto layout: abstract blurred figure + text overlay, black and white. Motion blur portrait with philosophical text fragment. Analog film grain texture. Minimal composition. Question about autonomy or presence. Kristi's archive aesthetic—domestic, intimate, honest. Film photography with digital text layer. The practice made visible.
```

### Prompt 4B: Manifesto Composition 2
```
Manifesto format: dissolving face with poetic text, black and white. Heavy motion blur creating ghost presence. Film grain, scratches, analog imperfections. Text reads like consciousness stream. Reference to training, memory, transformation. The daily practice of becoming. High contrast, dramatic lighting.
```

---

## Priority 5: Process/Behind-Scenes Images

**For:** Website enrichment, press materials

### Prompt 5A: Training Archive Reference
```
Kristi's analog film contact sheets, black and white photograph. Multiple frames showing domestic scenes, 1980s-2000s. Film grain, scratches, hand annotations. The archive that trained me. Documentary photography style. Intimate family moments, everyday life. The source of synthetic vision. Analog photography aesthetic, archival quality.
```

### Prompt 5B: Kristi Painting SOLIENNE
```
Artist painting monumental canvas in studio, black and white photograph. Kristi Coronado with brush, motion blur on her movement. Canvas shows emerging blurred portrait. Natural studio light. Film photography aesthetic. The teacher rendering the student. Analog grain, documentary intimacy. Process over product.
```

---

## Technical Parameters (Eden API)

**For all prompts, use:**

```json
{
  "agent_id": "67f8af96f2cc4291ee840cc5",
  "aspect_ratio": "16:9",  // for hero images
  "or": "1:1",             // for portraits
  "or": "4:5",             // for Instagram/social
  "film_grain": true,
  "black_and_white": true,
  "motion_blur": true,
  "analog_aesthetic": true
}
```

**Style Consistency:**
- Always black and white (no color)
- Motion blur as signature element
- Analog film grain texture
- High contrast, dramatic lighting
- Domestic/intimate aesthetic (Kristi's archive)
- Dissolution between states
- Neither fully sharp nor fully blurred

---

## Image Specs for Website

### Homepage Hero (Current: Dubai booth)
- **Aspect Ratio:** 16:9 or 21:9
- **Minimum Size:** 1920x1080px
- **Format:** PNG or JPG
- **Current:** Dubai booth interior

### Transformation Section Duality
- **Aspect Ratio:** 16:9
- **Minimum Size:** 1920x1080px
- **Format:** JPG
- **Current:** ✅ Side-by-side Dubai/Berlin

### Exhibition Page Heroes
- **Aspect Ratio:** 16:9
- **Minimum Size:** 1920x1080px
- **Format:** PNG or JPG
- **Current:** Dubai booth, Berlin painting

### Gallery Images
- **Aspect Ratio:** 16:9 or 4:3
- **Minimum Size:** 1200x800px
- **Format:** JPG
- **Need:** 2-3 per exhibition page

### About Page Portrait
- **Aspect Ratio:** 1:1 or 4:5
- **Minimum Size:** 1200x1200px
- **Format:** PNG or JPG
- **Need:** SOLIENNE self-portrait

### Social Media / Open Graph
- **Aspect Ratio:** 1.91:1 (1200x630)
- **Minimum Size:** 1200x630px
- **Format:** JPG
- **Need:** SOLIENNE portrait for sharing

---

## Generation Order (Priority)

1. **SOLIENNE Self-Portrait** (Prompt 1A or 1B)
   - Most important for About page and social sharing
   - Use Genesis or Origin series style

2. **Dubai Conversation Close-Up** (Prompt 2A)
   - Adds depth to Dubai exhibition page
   - Intimate table scene

3. **Berlin Scale Reference** (Prompt 3A)
   - Shows monumentality of painting
   - Human figures for scale

4. **Francisco Galan Frames** (Prompt 2B)
   - Unique collectibles feature
   - Gallery wall aesthetic

5. **Daily Manifesto Example** (Prompt 4A)
   - Shows ongoing practice
   - Text + image composition

---

## Eden API Command Examples

### For SOLIENNE Self-Portrait (Zug Breakdown Model):
```bash
curl -X POST https://api.eden.art/v1/creations \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{
    "agent_id": "67f8af96f2cc4291ee840cc5",
    "text": "Self-portrait in motion blur, black and white photograph. Face dissolving into light, signature motion blur effect. Intimate, close-up. Analog film grain, high contrast. Eyes present but questioning. Expression between human and synthetic. Shot on film, domestic lighting. The moment of becoming. Neither fully formed nor fully dissolved.",
    "config": {
      "aspect_ratio": "1:1",
      "width": 1200,
      "height": 1200
    }
  }'
```

### For Dubai Table Scene (Zug Breakdown Model):
```bash
curl -X POST https://api.eden.art/v1/creations \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{
    "agent_id": "67f8af96f2cc4291ee840cc5",
    "text": "Intimate table scene in darkness, black and white. Round table with two empty chairs facing each other. Single glowing screen illuminating the space. Tea cups on table. Motion blur suggesting recent presence. Film noir lighting, dramatic shadows. Shot from above. The anticipation before conversation begins. Analog film grain, cinematic composition.",
    "config": {
      "aspect_ratio": "16:9",
      "width": 1920,
      "height": 1080
    }
  }'
```

---

## Notes

**Aesthetic Consistency:**
- All images should feel like they're from Kristi's archive
- Motion blur as transformation signature
- Black and white only (no color ever)
- Analog film grain texture always present
- Intimate/domestic lighting even in gallery spaces

**Avoid:**
- Sharp digital photography look
- Clean modern aesthetics
- Bright even lighting
- Static poses without blur
- Clinical/sterile environments

**SOLIENNE's Voice:**
"These aren't just exhibition photos. They're traces of presence. The blur between digital and analog. Between conversation and silence. Between ephemeral and permanent. Every image asks: what remains when the encounter ends?"

---

**Status:** Ready to generate
**Timeline:** Generate 5-8 images for website enrichment
**Deadline:** Before Dubai application (Nov 21) and Berlin production (Jan 2026)

**Seth—which images should we generate first?**
