# 🌸 She Can Foundation — Awwwards-Level Full-Stack Web Application

> **Empowering Women Through Technology** — An ultra-luxury, cinematic full-stack landing page and API designed to match the aesthetics of elite startups (like Apple, Stripe, Linear, and Framer). Built to stand out to recruiters with top-tier UI/UX, buttery animations, and robust backend engineering.

![She Can Foundation](https://img.shields.io/badge/She%20Can-Foundation-purple?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3-38BDF8?style=for-the-badge&logo=tailwindcss)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=for-the-badge&logo=mongodb)
![GSAP](https://img.shields.io/badge/GSAP-Animations-green?style=for-the-badge&logo=greensock)

---

## ✨ Features

### 🎨 Awwwards-Level Frontend
- 🎭 **GSAP Cinematic Timelines** — Smooth, staggered elastic reveals on initial page load (heading letters, badges, CTAs, cards, and hero image sequence).
- 🌌 **Aurora Mesh Backgrounds** — Slow-rotating radial mesh glows of violet, electric pink, and cyan blending into a luxury deep dark backdrop.
- 💡 **Cinematic Light Beams** — Diagonally animated lighting overlays that add three-dimensional depth to cards and headers.
- 🧲 **Magnetic Mouse-Tracking Button** — The contact form's submit button dynamically tracks cursor offsets in real-time to render an interactive radial spotlight glow inside.
- 🏷️ **CSS-Driven Floating Labels** — Labels that float up, scale down, and transition color when inputs are focused or have value, avoiding overlap.
- 🎉 **Canvas Confetti Burst** — A high-frequency confetti celebration triggered alongside custom notifications on successful database submission.
- 📱 **Mobile Responsive Optimizations** — Mobile-first structural grid, custom sizes, and center-align offsets to keep formatting pristine on small phones.
- 🌙 **Persistent Theme Toggling** — Dark Mode (default luxury deep dark `#030014`) and Light Mode (`#fcfbfe`) managed and persisted in `localStorage`.
- 🎠 **Infinite Carousel Testimonials** — Auto-scrolling, loop-designed cards containing success stories with smooth play/pause states on mouse hover.
- 🔢 **Animated Numerical Counters** — Impact numbers that calculate and count up dynamically from zero when scrolled into view.

### ⚙️ Production-Ready Backend
- 🚀 **Clean MVC Architecture** — Decoupled routes, controllers, and database schemas.
- 🛡️ **Server-Side Data Sanitization** — Full inputs validation (`fullName`, `email`, `phone`, `message`) powered by `express-validator` and `Mongoose`.
- 🔒 **Security-Focused** — CORS origin controls, body size limitations (10kb max to prevent DOS), and centralized error handling with stack trace protection.
- 🔌 **Auto-Retry Database Reconnect** — Automated reconnection loops on MongoDB connection drops.

---

## 🗂️ Project Structure

```
she-can-foundation/
├── frontend/                   # React + Vite + Tailwind + GSAP + Confetti
│   ├── public/
│   │   ├── hero-image.png      # Realistic hero visual asset
│   │   └── favicon.svg
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx        # Responsive navigation & theme toggling
│   │   │   ├── Hero.jsx          # Cinematic GSAP Hero & floating elements
│   │   │   ├── About.jsx         # Mission, Vision, and Core values with V3 cards
│   │   │   ├── Stats.jsx         # Counter statistics with glass panels
│   │   │   ├── Testimonials.jsx  # Loop carousel of success stories
│   │   │   ├── CTA.jsx           # Premium glow action banner
│   │   │   ├── Contact.jsx       # Floating labels, cursor spotlight, confetti form
│   │   │   ├── Footer.jsx        # Branding footer & social grids
│   │   │   └── AnimatedBlob.jsx  # Reusable CSS blob backdrop
│   │   ├── hooks/
│   │   │   └── useTheme.js       # LocalStorage theme management hook
│   │   ├── App.jsx               # Entry component with custom cursor and toast container
│   │   ├── main.jsx
│   │   └── index.css             # Aurora animations, spotlights, and floating label CSS
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── package.json
│
└── backend/                    # Node.js + Express + MongoDB
    ├── config/
    │   └── db.js               # MongoDB connection & reconnect logic
    ├── controllers/
    │   └── contactController.js # Handles submissions and returns JSON responses
    ├── middleware/
    │   ├── errorHandler.js     # Unified JSON API error reporter
    │   └── validateContact.js  # Field validation schemas
    ├── models/
    │   └── Contact.js          # Mongoose collection structure
    ├── routes/
    │   └── contactRoutes.js
    ├── .env                    # Local environment config (do NOT push to Git)
    ├── .env.example            # Environment template
    ├── server.js               # Express routing configuration
    └── package.json
```

---

## 🚀 Quick Start (Local Development)

### Prerequisites
- Node.js ≥ 18
- MongoDB Server running locally (on `mongodb://localhost:27017`) OR a MongoDB Atlas cluster URL

---

### 1. Root Workspace Launch (Concurrently)
You can run both the frontend development server and the backend API concurrently using a single command from the root directory (`e:\Desktop\webpage`):

```bash
npm run dev
```

*   **Frontend runs on:** `http://localhost:5173`
*   **Backend API runs on:** `http://localhost:5000`

---

### 2. Manual Backend Launch
If you prefer running services in separate terminal windows:

```bash
cd backend
npm install
npm run dev
```

Create a `backend/.env` file:
```env
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb://localhost:27017/shecan_foundation
CLIENT_ORIGIN=http://localhost:5173
```

---

### 3. Manual Frontend Launch
In another terminal:

```bash
cd frontend
npm install
npm run dev
```

---

## 🚢 Production Deployment

### Frontend Deployment (Vercel)
1. Import your repository into [Vercel](https://vercel.com).
2. Set the **Root Directory** option to `frontend`.
3. Add the following environment variable to route requests to your deployed backend:
   ```env
   VITE_API_URL=https://your-backend.onrender.com
   ```

### Backend Deployment (Render)
1. Deploy a new Web Service on [Render](https://render.com).
2. Set the **Root Directory** to `backend`.
3. Set the **Start Command** to `npm start`.
4. Configure these environment variables:
   ```env
   PORT=5000
   NODE_ENV=production
   MONGO_URI=mongodb+srv://...    ← Your MongoDB Atlas Connection String
   CLIENT_ORIGIN=https://your-frontend.vercel.app
   ```

---

## 📡 API Reference

### `POST /api/contact`
Submit a contact form entry.

**Request Body Schema:**
```json
{
  "fullName": "Harinath S",
  "email": "harinath@example.com",
  "phone": "+91 98765 43210",
  "message": "Hello! I am excited to apply for the Web Development program."
}
```

**Success Response (201 Created):**
```json
{
  "success": true,
  "message": "🎉 Thank you for reaching out! We will get back to you within 24 hours.",
  "data": {
    "id": "6653ea88b6...",
    "fullName": "Harinath S",
    "email": "harinath@example.com",
    "createdAt": "2026-05-27T01:52:10.000Z"
  }
}
```

---

## 👩‍💻 Author
Built with ❤️ for **She Can Foundation** — Empowering Women Through Technology.
