# FormPilot Product Website & Privacy Policy Documentation

This directory contains the complete, production-ready product landing page, standalone Privacy Policy, and Terms & Conditions for **FormPilot — Smart Form Autofill Chrome Extension**.

---

## 📁 Directory Structure

```text
website/
├── index.html               # Main Product Landing Page (Hero, Features, How It Works, 30-Day Trial, FAQ, Contact)
├── privacy.html             # Standalone Privacy Policy page (for Chrome Web Store review)
├── terms.html               # Standalone Terms & Conditions page
├── privacy/
│   └── index.html           # Subfolder version for direct URL path (https://domain.com/privacy/)
├── terms/
│   └── index.html           # Subfolder version for direct URL path (https://domain.com/terms/)
├── assets/
│   ├── css/
│   │   └── style.css        # Responsive dark-theme styling, glassmorphic UI, typography
│   ├── js/
│   │   └── main.js          # Navigation, config, FAQ accordion, toast notifications
│   └── images/
│       ├── icon16.png
│       ├── icon48.png
│       └── icon128.png
└── README.md                # Deployment and Chrome Web Store setup guide
```

---

## 🌐 Chrome Web Store Privacy Policy URL

In the **Chrome Web Store Developer Dashboard** under **Privacy Practices > Privacy policy**, paste either of these URLs once your site is deployed:

- **Option A (Direct File URL):**  
  `https://<your-username>.github.io/<repo-name>/privacy.html`  
  *(or `https://yourdomain.com/privacy.html`)*

- **Option B (Clean Directory URL):**  
  `https://<your-username>.github.io/<repo-name>/privacy/`  
  *(or `https://yourdomain.com/privacy/`)*

Both URLs are supported out of the box!

---

## 🚀 How to Deploy (Choose Any Free Option)

### Option 1: GitHub Pages (Recommended & 100% Free)
1. Push your repository to GitHub.
2. In your GitHub repository, go to **Settings > Pages**.
3. Under **Build and deployment > Source**, select **Deploy from a branch**.
4. Choose your branch (e.g., `main`), and set the folder to `/website` (or root `/` if your repo root is the website).
5. Click **Save**. Within 1–2 minutes, your website will be live at:
   ```text
   https://<your-username>.github.io/<repo-name>/
   ```
   Your Privacy Policy URL will be:
   ```text
   https://<your-username>.github.io/<repo-name>/privacy.html
   ```

### Option 2: Netlify (Drag & Drop or Git)
1. Log in to [Netlify](https://app.netlify.com).
2. Drag and drop the `website/` folder directly onto Netlify's drop zone, or link your GitHub repo and set the publish directory to `website`.
3. Your site is instantly live with a free SSL certificate:
   ```text
   https://formpilot.netlify.app/privacy.html
   ```

### Option 3: Cloudflare Pages / Vercel
1. Create a new project in Cloudflare Pages or Vercel.
2. Set root directory to `website`.
3. Deploy!

---

## ⚙️ Configuration (`assets/js/main.js`)

You can customize global settings in [`website/assets/js/main.js`](assets/js/main.js):

```javascript
var SITE_CONFIG = {
  storeUrl: '', // Paste your Chrome Web Store extension URL once published
  supportEmail: 'verify.formpilot@gmail.com',
  lastUpdated: 'October 2026',
  launchBanner: 'FormPilot — 30-Day Free Trial Available Now! Intelligent Cross-Tab Form Autofill'
};
```

When `storeUrl` is filled, clicking **"Add to Chrome"** or **"Start 30-Day Free Trial"** will open your Web Store listing in a new tab.

---

## ✅ Chrome Web Store Review Checklist

- [x] Privacy Policy explains **what data is collected** (email for trial verification, local field mappings).
- [x] Clarifies that **OCR and document processing happen 100% locally** on the user's device.
- [x] Transparently explains why all permissions (`storage`, `sidePanel`, `activeTab`, `tabs`, `scripting`, `contextMenus`, `<all_urls>`) are requested.
- [x] Public contact and support email provided (`verify.formpilot@gmail.com`).
- [x] Developer name & location stated (`Prince Vanani`, Gujarat, India).
