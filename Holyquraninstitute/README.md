# Holy Quran Institute — Official Website

> **Domain:** [holyquraninstitute.com](https://holyquraninstitute.com)  
> **Official WhatsApp:** [+92 300 4390658](https://wa.me/923004390658)  
> **Official Email:** [holyquraninstitute99@gmail.com](mailto:holyquraninstitute99@gmail.com)  
> **Hosting Compatibility:** 100% Free Static Hosting on Cloudflare Pages (Unlimited bandwidth, Global CDN, Free Universal SSL/TLS)

---

## 🌟 Overview & Key Highlights

This project is a high-performance, responsive, accessible website built for **Holy Quran Institute**. The design follows a dignified midnight navy, sacred white, and radiant soft gold palette (zero green theme), honoring Islamic scholarly aesthetics with modern digital standards.

- **Hero Section:** “Learn the Holy Quran with Confidence.” with clear CTAs, trust stats, and an authentic Holy Quran visual centerpiece.
- **About Us:** Introduces the institute's worldwide mission, patient teaching approach, certified Huffaz, individual 1-on-1 attention, and dedicated female tutors.
- **6 Quranic Courses:** 
  1. Noorani Qaida (Beginners & Children)
  2. Quran Reading (Nazra)
  3. Quran with Tajweed
  4. Hifz-ul-Quran (Memorization)
  5. Daily Duas and Surahs
  6. Islamic Studies & Tarbiyah
- **Flexible Monthly Fee Plans:** Fully editable fee structure with Plan A (2 Days/Wk), Plan B (3 Days/Wk - Recommended), Plan C (5 Days/Wk), sibling discounts, and 3-Day Free Trial admission banner.
- **Virtual Classrooms:** Direct Zoom join links (`https://zoom.us/join`), Zoom app download (`https://zoom.us/download`), and WhatsApp desk coordination.
- **WhatsApp Dynamic Contact Engine:** A mobile-friendly inquiry form that automatically validates inputs, formats an Islamic inquiry message, and opens WhatsApp prefilled with student details.
- **Zero Paid Dependencies:** No paid databases, no Node.js backend required at runtime, zero exposed API keys.

---

## 📁 Project Structure

```
Holyquraninstitute/
│
├── index.html                     # Semantic HTML5 single-page application
├── favicon.svg                    # Vector emblem with Quran silhouette & 8-point gold star
├── README.md                      # Comprehensive deployment & administrator guide
├── DESIGN.md                      # Design system tokens and styling specifications
├── deployment_guide_readme.md     # Deployment reference document
│
├── css/
│   └── style.css                  # Custom styling (Navy, Gold, White, responsive layout)
│
├── js/
│   └── app.js                     # Mobile drawer, WhatsApp dynamic dispatcher, FAQ accordion
│
└── assets/
    └── images/
        ├── quran-hero.jpg         # Regal Holy Quran visual showcase
        └── online-class.jpg       # Modern virtual online study desk
```

---

## 💻 How to View & Test Locally

You do not need any special software to view the website on your computer.

### Method 1: Double-Click
1. Open your File Explorer and navigate to:  
   `C:\microsoft vs code projects\Holyquraninstitute`
2. Double-click **`index.html`**. It will open instantly in your default web browser (Chrome, Edge, Firefox, Brave, etc.).

### Method 2: Local Python Server (Recommended)
If you have Python installed, open PowerShell or Command Prompt in this folder and run:
```powershell
python -m http.server 8080
```
Then open your browser and visit: `http://localhost:8080`

---

## 🚀 How to Publish Online for FREE on Cloudflare Pages

Cloudflare Pages provides **100% free hosting**, enterprise-grade DDoS protection, unlimited bandwidth, and automated SSL certificates with zero server maintenance.

### Option A: Drag-and-Drop Direct Upload (Fastest — 2 Minutes, No Git Needed)

1. Visit [dash.cloudflare.com](https://dash.cloudflare.com/) and create a free account (or log in).
2. In the left-hand sidebar, click **Workers & Pages**.
3. Click the blue **Create application** button, then select the **Pages** tab.
4. Select **Upload assets**.
5. Set your **Project name** to: `holy-quran-institute`.
6. Click **Upload folder** and select the entire `Holyquraninstitute` folder (the folder containing `index.html`, `css/`, `js/`, `assets/`, `favicon.svg`).
7. Click **Deploy site**.
8. In less than 15 seconds, your website will be live at a free URL like:  
   `https://holy-quran-institute.pages.dev`

---

### Option B: Deploy via GitHub (For automatic live updates)

1. Log into your free [GitHub.com](https://github.com) account.
2. Create a new repository named `holy-quran-institute`.
3. Push all files from this directory to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial launch of Holy Quran Institute website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/holy-quran-institute.git
   git push -u origin main
   ```
4. On Cloudflare Pages, select **Connect to Git** instead of Direct Upload.
5. Choose your `holy-quran-institute` repository.
6. Configure the build settings:
   - **Framework preset:** `None`
   - **Build command:** *(Leave empty)*
   - **Build output directory:** `.` (root directory)
7. Click **Save and Deploy**. Whenever you push edits to GitHub, Cloudflare automatically updates your live website in seconds.

---

## 🌐 Connecting Your Custom Domain (`holyquraninstitute.com`)

Once your Cloudflare Pages project is created:

1. Inside your Cloudflare Pages project dashboard (`holy-quran-institute`), click on the **Custom domains** tab at the top.
2. Click **Set up a custom domain**.
3. Type: `holyquraninstitute.com` and click **Continue**.
4. Repeat the step and also add: `www.holyquraninstitute.com`.
5. If your domain is already registered on Cloudflare, DNS records are configured with 1 click.
6. If your domain is registered on Namecheap, GoDaddy, or Google Domains:
   - Simply point your DNS `CNAME` record to your Cloudflare Pages target (e.g. `holy-quran-institute.pages.dev`).
7. Cloudflare will automatically provision a free universal SSL/TLS certificate and enforce HTTPS across the globe.

---

## ✍️ Administrator Guide: How to Edit Content

All content is clean, semantic, and easy to edit without touching complex code:

### 1. How to Update Monthly Tuition Fees
1. Open `index.html` in VS Code or Notepad.
2. Search for: `<!-- SECTION: FEES -->`.
3. Locate the plan cards:
   - `Plan A (2 Days / Week)`
   - `Plan B (3 Days / Week)`
   - `Plan C (5 Days / Week)`
4. Update the text inside `<div class="plan-fee-tagline">...</div>` with your preferred pricing (e.g., `$40 / Month`, `£35 / Month`, or keep it as `Affordable Monthly Fee`).

### 2. How to Update the WhatsApp Number
The WhatsApp number is set to `+92 300 4390658`. If you ever change numbers:
1. In `index.html`, search for `923004390658` and update the links and displayed numbers.
2. In `js/app.js`, update line 8:
   ```javascript
   const WHATSAPP_PHONE = '923004390658';
   ```

### 3. How to Update Courses or Syllabus
In `index.html`, search for `<!-- SECTION: COURSES -->`. Each course is enclosed within an `<article class="course-card">`. You can edit titles, bullet points, and descriptions anytime.

---

## 🛡️ Security & Performance Guarantee
- **No Private Keys Exposed:** Everything runs securely client-side.
- **Fast Global Delivery:** Static files cached at 300+ Cloudflare edge locations worldwide.
- **Accessibility:** Accessible color contrast, keyboard-navigable tabs, ARIA labels, and responsive mobile drawer.
