# Nitish Saini — Portfolio

> Personal portfolio of **Nitish Saini** — AI/ML Engineer & Full-Stack Developer, B.Tech @ IIIT Kota.

Live at: [nitish-portfolio-jet.vercel.app](https://nitish-portfolio-jet.vercel.app/)

---

## ✨ Features

- **Hero** — Animated intro with social links (GitHub, LinkedIn, HuggingFace, Docker)
- **About** — Education, leadership, skills masonry, stats strip & resume download
- **Projects** — Category filter tabs, project cards with modal deep-dives (backstory, highlights, metrics)
- **Contact** — Email, location & availability cards with a contact form
- **Responsive** — Fully optimised for mobile, tablet and desktop
- **Animations** — Framer Motion scroll-triggered sections and navbar auto-hide on scroll
- **Split Navbar** — Standalone brand logo (`Nitish.`) + floating nav-links pill

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + Vite |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Icons | Lucide React, React Icons |
| Deployment | Vercel |

---

## 📁 Project Structure

```
portfolio-app/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Split brand + nav pill
│   │   ├── Hero.jsx          # Landing section
│   │   ├── About.jsx         # Education, skills, stats
│   │   ├── Projects.jsx      # Filtered project grid
│   │   ├── ProjectModal.jsx  # Project deep-dive modal
│   │   ├── Contact.jsx       # Contact cards + form
│   │   ├── Footer.jsx        # Social links footer
│   │   └── ui/
│   │       └── AnimatedSection.jsx
│   ├── data/
│   │   └── portfolioData.js  # All content lives here
│   ├── App.jsx
│   └── index.css
├── vercel.json
└── index.html
```

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/nitishsaini-44/nitish-portfolio.git
cd portfolio/portfolio-app

# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

---

## 🌐 Deployment (Vercel)

1. Push to GitHub
2. Import repo on [vercel.com](https://vercel.com)
3. Set **Root Directory** → `portfolio-app`
4. Framework auto-detected as **Vite**
5. Click **Deploy** — done ✅

Every `git push` to `main` triggers an automatic redeploy.

---

## 📬 Contact

| | |
|---|---|
| Email | nitishsaini044@gmail.com |
| LinkedIn | [nitish-s044](https://www.linkedin.com/in/nitish-s044/) |
| GitHub | [nitishsaini-44](https://github.com/nitishsaini-44) |
| HuggingFace | [nitishsaini44](https://huggingface.co/nitishsaini44) |
| Docker Hub | [nitishssaini](https://hub.docker.com/u/nitishssaini) |
