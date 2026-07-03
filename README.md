# 🌌 SanzzDream Solutions — Execution Studio

> **Engineering Your Digital Vision.** A high-performance, conversion-optimized, and premium aesthetic landing page for SanzzDream Solutions (SDS) — featuring an interactive calculator, custom portfolio visual mockups, and dynamic cinematic light/dark toggling.

---

## 🎨 Visual Aesthetics & Cinematic Themes

SanzzDream Solutions is built with a **dual-theme cinematic matrix** managed purely through dynamic CSS variables and native browser storage synchronization:

*   **🌌 Galactic Dark Mode (Default)**: Deep space gradients (`#0b0d12` to `#05060c`), floating particle coordinates, translucent dark glassmorphism cards, and neon cyan/blue details.
*   **☀️ Premium Light Mode**: Apple/Stripe-inspired warm editorial off-white background (`#f8f8f6`), soft bronze orbs, clean cards with layered shadow matrices, and sharp navy charcoal typography.
*   **⚡ Smooth Transitions**: Custom easing curves mapped to backgrounds, cards, selects, borders, and checkmarks for fluid transitions.

---

## 🚀 Key Conversion Features

1.  **🧮 Interactive Price Calculator**: 
    *   Dynamic cost estimates across **all 7 SDS services** (Video Editing, Photo Editing, Data Analytics, Frontend Dev, PPT, Excel, Word).
    *   Package multipliers: Basic (`1.0x`), Standard (`1.4x`), Premium (`2.0x`).
    *   Express delivery surcharge (+30% priority scheduling).
    *   Values automatically rounded to the nearest ₹50 or ₹100.
2.  **💬 WhatsApp Quote Generator**: 
    *   Automatically parses options, priority timeline, package selection, and estimated pricing into a pre-formatted message.
    *   Provides quick-click override templates inside the service accordion list.
3.  **📐 Better Demo Showcase**: 
    *   Asymmetric responsive grid replacing generic icons with high-fidelity custom visual blocks representing each service (e.g. before/after image sliders, spreadsheet cell matrices, slide deck outlines).
4.  **🔒 Payment Confirmation CTA**: 
    *   Direct transaction confirmation tracker. Hides raw UPI IDs and guides clients with a checklist of transaction codes (UTR, screenshot logs).
5.  **📝 Tally Intake Optimization**: 
    *   Founder dashboard checklist advising clients on how to prepare reference files and target deadlines beforehand.

---

## 🛠️ Technology Stack

*   **Core**: React 18 (CDN Loader for MVP scalability), HTML5, CSS3 Custom Properties
*   **Styling**: Tailwind CSS (CDN Compiler, fully purged in production builds)
*   **Bundler**: Vite 6 (Hot Module Replacement)
*   **Deployment**: Vercel Serverless CD

---

## 📂 Project Structure

```
SanzzDream Solutions/
├── vercel.json           # Vercel SPA routing redirects
├── MVP_OPERATIONS.md     # Internal business workflow protocols
├── README.md             # Developer documentation
├── tailwind.config.js    # Tailwind typography and layout presets
├── vite.config.js        # Vite compilation variables
├── index.html            # Entry layout structure
├── src/
│   ├── main.jsx          # App root state and theme manager
│   ├── components.jsx    # React visual sections (Hero, Calculator, Showcase)
│   ├── data.js           # Services data model, checklists, and configurations
│   ├── index.css         # CSS variable matrix, particle orbs, and media classes
│   ├── hooks.jsx         # Custom React scroll reveal handlers
│   └── icons.jsx         # Sun, Moon, and service SVG vectors
```

---

## 💻 Local Development Setup

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org) installed on your system.

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for Production
To build and check file sizes:
```bash
npm run build
```

---

## ☁️ Deployment Guide (Vercel + GoDaddy)

This project is optimized for **Vercel** deployment with continuous integration (Route A):

1.  Push your changes to your GitHub repository.
2.  Import the repository into your Vercel Dashboard.
3.  Vercel will auto-configure based on the Vite template. Click **Deploy**.
4.  Once deployed, add your GoDaddy domain name under **Settings > Domains** in Vercel.
5.  Configure your GoDaddy DNS settings:
    *   **A Record** (`@`): Point to `76.76.21.21`
    *   **CNAME Record** (`www`): Point to `cname.vercel-dns.com`

---

## 📜 SDS Operating Principles

*   *Clear Quotes, Zero Guesswork*: Every project has estimated parameters before starting.
*   *50% Advance Rule*: 50% advance to initiate; balance due before final assets delivery.
*   *Tracked Execution*: Internal Notion board mapping from intake status to final handoff.
