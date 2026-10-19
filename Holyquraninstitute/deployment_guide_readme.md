# Holy Quran Institute — Website Deployment & Setup Guide
**Domain:** `holyquraninstitute.com`
**Target Platform:** Free Cloudflare Pages Hosting (100% Free, SSL included, unlimited bandwidth, zero paid backend)

---

## 📁 Project Architecture & Overview
The Holy Quran Institute website is built as an ultra-fast, modern, accessible single-page application (SPA) with multi-section architecture. It requires no databases, no server maintenance, and zero API costs.

### Files Included:
- **`index.html`**: Complete semantic HTML5 structure with SEO meta tags, OpenGraph social preview tags, schema.org structured data, inline SVG Quranic calligraphy/geometric crests, mobile navigation drawer, interactive course modal & fee selector, and a client-side WhatsApp routing engine.
- **`styles.css` (Embedded & Modular)**: Responsive styling with CSS variables, Tailwind CSS utilities, gold metallic gradients, Islamic star lattice patterns, accessible WCAG AA contrast, and smooth fluid typography.
- **`app.js` (Embedded & Modular)**: Interactive features including WhatsApp dynamic URL builder, course inquiry pre-fillers, fee calculation toggles, FAQ accordions, and mobile navigation toggles.
- **`favicon.svg`**: High-resolution vector emblem with Quran book silhouette & gold geometric star.
- **`README.md`**: Complete hosting instructions below.

---

## 🚀 How to Deploy on Cloudflare Pages (Free Step-by-Step)

### Option 1: Direct Folder Upload (Easiest — 2 Minutes, No Git Required)
1. Go to [dash.cloudflare.com](https://dash.cloudflare.com/) and sign up or log in (free account).
2. In the left navigation menu, click **Workers & Pages**.
3. Click **Create application** > Select the **Pages** tab.
4. Choose **Upload assets**.
5. Give your project a name (e.g. `holy-quran-institute`).
6. Drag and drop the folder containing `index.html` (or upload the file directly).
7. Click **Deploy site**.
8. Cloudflare will instantly generate a free live URL (e.g. `https://holy-quran-institute.pages.dev`).

### Option 2: Deploy via GitHub (Recommended for automatic updates)
1. Create a free repository on [GitHub.com](https://github.com) named `holy-quran-institute`.
2. Push your `index.html`, `favicon.svg`, and `README.md` to the repository.
3. In Cloudflare Pages, select **Connect to Git** instead of Direct Upload.
4. Select your repository.
5. Set Build settings:
   - **Framework preset:** `None`
   - **Build command:** *(Leave empty)*
   - **Build output directory:** `.` (root directory)
6. Click **Save and Deploy**. Any future edit pushed to GitHub will auto-deploy within seconds!

---

## 🌐 Connecting your Custom Domain (`holyquraninstitute.com`)

1. In the Cloudflare Pages dashboard, select your **holy-quran-institute** project.
2. Click the **Custom domains** tab at the top.
3. Click **Set up a custom domain**.
4. Type `holyquraninstitute.com` and click **Continue**.
5. Also add `www.holyquraninstitute.com`.
6. Cloudflare will automatically provision a free universal SSL/TLS certificate and manage HTTPS redirection.

---

## ⚙️ How to Edit Content & Customize (Administrator Guide)

### 1. Editing Fees
Open `index.html` in any text editor (Notepad, VS Code, or directly on GitHub):
- Search for the comment `<!-- SECTION: FEES -->`.
- Locate the plan cards (e.g., "2 Days / Week", "3 Days / Week", "5 Days / Week").
- You can freely edit the duration, recommended age, class frequency, and pricing notes without breaking the layout.

### 2. Updating WhatsApp Number or Recipient
- Search for `923004390658` across `index.html`.
- Replace it with any new international phone number in standard country-code format (no `+` sign in the raw WhatsApp URL, e.g., `https://wa.me/YOURNUMBER`).

### 3. Editing Courses
- Search for `<!-- SECTION: COURSES -->`.
- Each course is contained in an easy-to-read `<article>` card with title, age suitability, syllabus highlights, and direct WhatsApp inquiry triggering.

---

## 🔒 Security, Privacy & Performance Highlights
- **Zero API Keys Exposed:** All WhatsApp integrations generate secure `https://wa.me/` direct URL schemas client-side.
- **Lightning Fast:** Fully static, zero external dependencies required to boot, ultra-light SVG icons, and preconnected Google Fonts.
- **SEO Ready:** Complete meta tags, canonical link, OpenGraph tags, and Twitter Card specifications included.
