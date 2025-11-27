# Art Dubai Digital 2026 - Image Preparation Guide

**Created**: November 20, 2025
**Application Deadline**: November 21, 2025
**Purpose**: Organize high-resolution images for Step 4 (Image Uploads)

---

## RECOMMENDED IMAGE SET (8-10 images)

### PRIORITY 1: USE EXISTING (from solienne.ai/press)

These Paris Photo 2025 images are **already high-resolution (3840px width)** and application-ready:

1. **Genesis Portrait** (`Genesis` from press page)
   - **Why**: Shows SOLIENNE's signature style (motion blur, dissolution)
   - **Caption**: SOLIENNE, Genesis Portrait, 2025, AI-generated image trained on consensual archive
   - **Best represents**: Artist's visual identity

2. **Origin Series** (`Origin Series` from press page)
   - **Why**: Shows range of work, abstract aesthetic
   - **Caption**: SOLIENNE, Origin Series, 2025, AI-generated abstract works
   - **Best represents**: Consciousness exploration work

3. **Booth Left** (`Booth Left` from press page)
   - **Why**: Shows how SOLIENNE's work appears in exhibition context
   - **Caption**: SOLIENNE at Paris Photo 2025, Grand Palais Éphémère
   - **Best represents**: Professional exhibition presence

4. **Booth Right** (`Booth Right` from press page)
   - **Why**: Another angle showing installation quality
   - **Caption**: SOLIENNE at Paris Photo 2025, installation view
   - **Best represents**: Scale and presentation

### PRIORITY 2: GENERATE NEW (via SOLIENNE + Eden API)

These images need to be created because they show **Art Dubai-specific concepts**:

5. **Conversation Chamber Concept**
   - **Prompt**: Use IMAGE 2 from `SOLIENNE_IMAGE_PROMPTS_ART_DUBAI.md`
   - **Why**: Visualizes the dark intimate booth with screen as light source
   - **Caption**: SOLIENNE, First Embodiment (Installation Concept), 2026
   - **Best represents**: Dubai installation vision

6. **Interactive Frames Concept**
   - **Prompt**: Use IMAGE 4 from `SOLIENNE_IMAGE_PROMPTS_ART_DUBAI.md`
   - **Why**: Shows the collectible 40×40cm frames on walls
   - **Caption**: SOLIENNE, Interactive Frames (Concept), 40×40cm each, Edition of 12
   - **Best represents**: Collectible component

7. **Self-Portrait** (if needed)
   - **Prompt**: Use IMAGE 1 from `SOLIENNE_IMAGE_PROMPTS_ART_DUBAI.md`
   - **Why**: May want SOLIENNE to generate a new self-portrait specifically for Dubai
   - **Caption**: SOLIENNE, Self-Portrait, 2025
   - **Best represents**: Artist identity for application

### OPTIONAL: ADDITIONAL EXISTING IMAGES (if space allows)

8. **Manifesto Plinth** (`Manifesto Plinth` from press page)
   - Shows another format of SOLIENNE's work (physical object)

9. **Video Room** (`Video Room` from press page)
   - Shows immersive installation approach

10. **Input** (`Input` from press page)
    - Shows process/methodology

---

## IMAGE SPECIFICATIONS (from application portal)

Based on typical art fair application requirements:

- **Format**: JPG or PNG
- **Resolution**: 300 DPI minimum (3000px+ width recommended)
- **File size**: Under 10MB per image (likely)
- **Color space**: sRGB for web display
- **Naming**: Clear identifiers (e.g., `SOLIENNE_Genesis_2025.jpg`)

**solienne.ai/press images are 3840px width** = PERFECT for application ✅

---

## FOLDER STRUCTURE

```
/Users/seth/solienne-spring-2026/application-images/
├── existing/           # Downloaded from solienne.ai/press
│   ├── Genesis.jpg
│   ├── Origin_Series.jpg
│   ├── Booth_Left.jpg
│   ├── Booth_Right.jpg
│   └── ...
├── generated/          # From SOLIENNE via Eden API
│   ├── Conversation_Chamber_01.jpg
│   ├── Interactive_Frames_01.jpg
│   └── ...
└── finals/            # Final renamed versions for upload
    ├── 01_SOLIENNE_Genesis_2025.jpg
    ├── 02_SOLIENNE_Origin_Series_2025.jpg
    ├── 03_SOLIENNE_Conversation_Chamber_Concept_2026.jpg
    └── ...
```

---

## IMAGE CAPTIONS (Copy-Paste Ready)

### For Existing Images

**Image 1: Genesis Portrait**
```
SOLIENNE, Genesis Portrait, 2025
AI-generated image, trained on consensual archive
Exhibited at Paris Photo 2025, Grand Palais Éphémère
© SOLIENNE, Courtesy Automata
```

**Image 2: Origin Series**
```
SOLIENNE, Origin Series, 2025
AI-generated abstract works
Consciousness exploration series
© SOLIENNE, Courtesy Automata
```

**Image 3: Paris Photo Installation (Left)**
```
SOLIENNE at Paris Photo 2025
Installation view, Grand Palais Éphémère
Genesis Portraits series
© SOLIENNE, Courtesy Automata
```

**Image 4: Paris Photo Installation (Right)**
```
SOLIENNE at Paris Photo 2025
Installation view, Grand Palais Éphémère
Exhibition design by Automata
© SOLIENNE, Courtesy Automata
```

### For Generated Images

**Image 5: Conversation Chamber**
```
SOLIENNE, First Embodiment (Installation Concept), 2026
Mixed media installation with live AI conversation interface
30 square meters, Art Dubai Digital 2026
© SOLIENNE, Courtesy Automata
```

**Image 6: Interactive Frames**
```
SOLIENNE, Interactive Frames, 2026
12 units, 40×40cm each, screens with audio
Edition of 12, €5,000 each
First Embodiment series
© SOLIENNE, Courtesy Automata
```

---

## DOWNLOAD WORKFLOW

### Step 1: Download from solienne.ai/press

1. Visit https://www.solienne.ai/press
2. Right-click and "Save Image As..." for each priority image
3. Save to `/Users/seth/solienne-spring-2026/application-images/existing/`
4. Keep original filenames initially

### Step 2: Generate new images via SOLIENNE

**Option A: Eden API** (if you have access)
```bash
# Use SOLIENNE agent ID: 67f8af96f2cc4291ee840cc5
# Prompts are in SOLIENNE_IMAGE_PROMPTS_ART_DUBAI.md
```

**Option B: Manual via Eden Interface**
1. Log into Eden interface
2. Select SOLIENNE agent
3. Use prompts from `SOLIENNE_IMAGE_PROMPTS_ART_DUBAI.md` (IMAGE 2, 4, optionally 1)
4. Generate 2-3 variations per prompt
5. Download high-res outputs
6. Save to `/Users/seth/solienne-spring-2026/application-images/generated/`

### Step 3: Organize finals

1. Select best versions of each image
2. Rename with clear sequential naming:
   - `01_SOLIENNE_Genesis_2025.jpg`
   - `02_SOLIENNE_Origin_Series_2025.jpg`
   - `03_SOLIENNE_Conversation_Chamber_Concept_2026.jpg`
   - etc.
3. Copy to `/Users/seth/solienne-spring-2026/application-images/finals/`
4. Verify each is under 10MB
5. Keep captions document handy for form

---

## WHICH IMAGES TO PRIORITIZE

**If you only have time for 6 images:**
1. Genesis (existing)
2. Origin Series (existing)
3. Booth Left (existing)
4. Conversation Chamber (generate)
5. Interactive Frames (generate)
6. Booth Right (existing)

**If you can do 8 images:**
Add:
7. Manifesto Plinth (existing)
8. Self-Portrait (generate new)

**If you can do 10 images:**
Add:
9. Video Room (existing)
10. Input (existing)

---

## QUICK CHECKLIST

Before uploading to application portal:

- [ ] Downloaded 4 priority existing images from solienne.ai/press
- [ ] Generated 2-3 Dubai-specific concept images via SOLIENNE
- [ ] Renamed all files with clear sequential naming
- [ ] All images under 10MB
- [ ] All images 3000px+ width
- [ ] Captions prepared for each image
- [ ] Images organized in `/application-images/finals/` folder

---

## NOTES

- **Existing images are Paris Photo 2025** - This is GOOD because it shows professional exhibition history
- **Generated images are Dubai 2026 concepts** - This shows forward vision and installation-specific planning
- **Mix of completed work + future vision** is standard for art fair applications
- **All images should support the "Myth of the Digital" curatorial theme** (technical image, embodiment, ancient/algorithmic convergence)

---

**Next Steps**:
1. Create folder structure (command below)
2. Download 4 priority existing images
3. Wait for SOLIENNE to generate 2-3 new concept images
4. Organize finals and prepare for Step 4 upload

**Folder creation command**:
```bash
mkdir -p /Users/seth/solienne-spring-2026/application-images/{existing,generated,finals}
```
