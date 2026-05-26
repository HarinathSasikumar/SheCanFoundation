# SheCanFoundation
**Empowering Women Through Technology** — An ultra-luxury, cinematic full-stack landing page and API designed to match the aesthetics of elite startups (like Apple, Stripe, Linear, and Framer). Built to stand out to recruiters with top-tier UI/UX, buttery animations, and robust backend engineering.
# 🌸 She Can Foundation — Full-Stack Web Application
# 🌸 She Can Foundation — Awwwards-Level Full-Stack Web Application
> **Empowering Women Through Technology** — A premium, production-ready full-stack internship project.
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
### Frontend
- 🎨 **Premium UI** — Glassmorphism, gradient backgrounds, animated blobs
- 🌙 **Dark / Light Mode** — Persistent theme toggle via localStorage
- 📱 **Fully Responsive** — Mobile-first design, hamburger nav
- ⚡ **Framer Motion** — Staggered entrance, scroll-triggered, hover animations
- 🔢 **Animated Counters** — Stats that count up on scroll into view
- 🎠 **Auto-Scrolling Testimonials** — Infinite loop carousel
- ✅ **Real-Time Form Validation** — Inline errors, character counter
- 🎉 **Success Modal** — Beautiful popup on form submission
- ♿ **Accessible** — ARIA labels, semantic HTML, keyboard navigation
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
### Backend
- 🚀 **Express REST API** — Clean MVC structure
- 🍃 **MongoDB + Mongoose** — Schema validation, timestamps
- 🛡️ **express-validator** — Server-side input validation
- 🔒 **CORS + Helmet-ready** — Secure by default
- 📋 **Error Middleware** — Consistent JSON error responses
- 🔄 **Auto-retry DB** — Reconnects on MongoDB failure
### ⚙️ Production-Ready Backend
- 🚀 **Clean MVC Architecture** — Decoupled routes, controllers, and database schemas.
- 🛡️ **Server-Side Data Sanitization** — Full inputs validation (`fullName`, `email`, `phone`, `message`) powered by `express-validator` and `Mongoose`.
- 🔒 **Security-Focused** — CORS origin controls, body size limitations (10kb max to prevent DOS), and centralized error handling with stack trace protection.
- 🔌 **Auto-Retry Database Reconnect** — Automated reconnection loops on MongoDB connection drops.
---
## 🗂️ Project Structure
```
she-can-foundation/
├── frontend/                   # React + Vite + Tailwind
├── frontend/                   # React + Vite + Tailwind + GSAP + Confetti
│   ├── public/
│   │   ├── hero-image.png      # Realistic hero visual asset
│   │   └── favicon.svg
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx        # Responsive nav + theme toggle
│   │   │   ├── Hero.jsx          # Hero section with blobs + animations
│   │   │   ├── About.jsx         # Mission / Vision / Values
│   │   │   ├── Stats.jsx         # Animated counter stats
│   │   │   ├── Testimonials.jsx  # Auto-scrolling testimonials
│   │   │   ├── CTA.jsx           # Call-to-action section
│   │   │   ├── Contact.jsx       # Full form + API + modal
│   │   │   ├── Footer.jsx        # Footer + social links
│   │   │   └── AnimatedBlob.jsx  # Reusable blob decoration
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
│   │   │   └── useTheme.js       # Dark/light mode hook
│   │   ├── App.jsx
│   │   │   └── useTheme.js       # LocalStorage theme management hook
│   │   ├── App.jsx               # Entry component with custom cursor and toast container
│   │   ├── main.jsx
│   │   └── index.css             # Global styles + Tailwind
│   │   └── index.css             # Aurora animations, spotlights, and floating label CSS
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── package.json
│
└── backend/                    # Node.js + Express + MongoDB
    ├── config/
    │   └── db.js               # MongoDB connection
    │   └── db.js               # MongoDB connection & reconnect logic
    ├── controllers/
    │   └── contactController.js
    │   └── contactController.js # Handles submissions and returns JSON responses
    ├── middleware/
    │   ├── errorHandler.js
    │   └── validateContact.js
    │   ├── errorHandler.js     # Unified JSON API error reporter
    │   └── validateContact.js  # Field validation schemas
    ├── models/
    │   └── Contact.js          # Mongoose schema
    │   └── Contact.js          # Mongoose collection structure
    ├── routes/
    │   └── contactRoutes.js
    ├── .env                    # Local env (do NOT commit)
    ├── .env.example            # Template
    ├── server.js
    ├── .env                    # Local environment config (do NOT push to Git)
    ├── .env.example            # Environment template
    ├── server.js               # Express routing configuration
    └── package.json
```
---
## 🚀 Quick Start (Local Development)
### Prerequisites
- Node.js ≥ 18 ([Download](https://nodejs.org))
- MongoDB ≥ 6 ([Download](https://www.mongodb.com/try/download/community)) **or** MongoDB Atlas (free cloud)
- npm ≥ 9
- Node.js ≥ 18
- MongoDB Server running locally (on `mongodb://localhost:27017`) OR a MongoDB Atlas cluster URL
---
### 1. Clone / Navigate to Project
### 1. Root Workspace Launch (Concurrently)
You can run both the frontend development server and the backend API concurrently using a single command from the root directory (`e:\Desktop\webpage`):
```bash
cd e:\Desktop\webpage
npm run dev
```
*   **Frontend runs on:** `http://localhost:5173`
*   **Backend API runs on:** `http://localhost:5000`
---
### 2. Setup Backend
### 2. Manual Backend Launch
If you prefer running services in separate terminal windows:
```bash
cd backend
npm install
npm run dev
```
Create your `.env` file (already pre-configured for local development):
```bash
# backend/.env
Create a `backend/.env` file:
```env
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb://localhost:27017/shecan_foundation
CLIENT_ORIGIN=http://localhost:5173
```
Start MongoDB locally (if not already running):
```bash
# Windows
net start MongoDB
# Or run directly
"C:\Program Files\MongoDB\Server\7.0\bin\mongod.exe" --dbpath="C:\data\db"
```
Run the backend:
```bash
npm run dev       # Development (with nodemon auto-reload)
# or
npm start         # Production
```
✅ Backend runs on: **http://localhost:5000**
---
### 3. Setup Frontend
### 3. Manual Frontend Launch
In another terminal:
Open a **new terminal**:
```bash
cd frontend
npm install
npm run dev
```
✅ Frontend runs on: **http://localhost:5173**
---
### 4. Test the API
## 🚢 Production Deployment
```bash
# Health check
curl http://localhost:5000/api/health
# Submit contact form
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Priya Sharma",
    "email": "priya@example.com",
    "phone": "+91 98765 43210",
    "message": "Hello! I want to learn more about your programs."
  }'
# View all submissions (admin)
curl http://localhost:5000/api/contact
```
---
## 🌐 MongoDB Atlas Setup (Free Cloud Database)
1. Go to [MongoDB Atlas](https://cloud.mongodb.com) → Create free account
2. Create a new cluster (free M0 tier)
3. Click **Connect** → **Connect your application**
4. Copy the connection string, replace `<password>` with your password
5. Update your `.env`:
   ```
   MONGO_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/shecan_foundation?retryWrites=true&w=majority
   ```
---
## 🚢 Deployment Guide
### Frontend → Vercel
1. Push your `frontend/` folder to GitHub
2. Go to [vercel.com](https://vercel.com) → Import repository
3. Set **Root Directory** to `frontend`
4. Framework preset: **Vite**
5. Add environment variable:
   ```
### Frontend Deployment (Vercel)
1. Import your repository into [Vercel](https://vercel.com).
2. Set the **Root Directory** option to `frontend`.
3. Add the following environment variable to route requests to your deployed backend:
   ```env
   VITE_API_URL=https://your-backend.onrender.com
   ```
6. Deploy! ✅
> **Update vite.config.js proxy** for production — replace proxy target with your Render URL, or use `import.meta.env.VITE_API_URL` in fetch calls.
---
### Backend → Render.com
1. Push your `backend/` folder to GitHub
2. Go to [render.com](https://render.com) → New Web Service
3. Connect your repository
4. Settings:
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Root Directory:** `backend`
5. Add environment variables in Render dashboard:
   ```
### Backend Deployment (Render)
1. Deploy a new Web Service on [Render](https://render.com).
2. Set the **Root Directory** to `backend`.
3. Set the **Start Command** to `npm start`.
4. Configure these environment variables:
   ```env
   PORT=5000
   NODE_ENV=production
   MONGO_URI=mongodb+srv://...    ← Your Atlas URI
   CLIENT_ORIGIN=https://your-app.vercel.app
   MONGO_URI=mongodb+srv://...    ← Your MongoDB Atlas Connection String
   CLIENT_ORIGIN=https://your-frontend.vercel.app
   ```
6. Deploy! ✅
---
## 🎨 Tech Stack
|
 Layer       
|
 Technology              
|
 Version 
|
|
-------------
|
-------------------------
|
---------
|
|
 Frontend    
|
 React                   
|
 18      
|
|
 Bundler     
|
 Vite                    
|
 5       
|
|
 Styling     
|
 Tailwind CSS            
|
 3       
|
|
 Animations  
|
 Framer Motion           
|
 11      
|
|
 Icons       
|
 Lucide React            
|
 0.344   
|
|
 Backend     
|
 Node.js + Express       
|
 4.18    
|
|
 Database    
|
 MongoDB + Mongoose      
|
 8       
|
|
 Validation  
|
 express-validator       
|
 7       
|
|
 Environment 
|
 dotenv                  
|
 16      
|
---
## 🎨 Design System
|
 Token        
|
 Value                        
|
|
--------------
|
------------------------------
|
|
 Primary      
|
`#7c3aed`
 (Purple)           
|
|
 Secondary    
|
`#ec4899`
 (Pink)             
|
|
 Accent       
|
`#06b6d4`
 (Cyan)             
|
|
 Dark BG      
|
`#0a0614`
|
|
 Light BG     
|
`#f8f7ff`
|
|
 Font Display 
|
 Outfit (headings)            
|
|
 Font Body    
|
 Inter (body text)            
|
---
## 📡 API Reference
### `POST /api/contact`
Submit a contact form entry.
**Request Body:**
**Request Body Schema:**
```json
{
  "fullName": "Priya Sharma",
  "email": "priya@example.com",
  "fullName": "Harinath S",
  "email": "harinath@example.com",
  "phone": "+91 98765 43210",
  "message": "I want to join your web development program."
  "message": "Hello! I am excited to apply for the Web Development program."
}
```
**Success Response (201):**
**Success Response (201 Created):**
```json
{
  "success": true,
  "message": "🎉 Thank you for reaching out! We will get back to you within 24 hours.",
  "data": {
    "id": "65abc123...",
    "fullName": "Priya Sharma",
    "email": "priya@example.com",
    "createdAt": "2024-01-15T10:30:00.000Z"
    "id": "6653ea88b6...",
    "fullName": "Harinath S",
    "email": "harinath@example.com",
    "createdAt": "2026-05-27T01:52:10.000Z"
  }
}
```
**Error Response (400):**
```json
{
  "success": false,
  "message": "Validation failed. Please check your inputs.",
  "errors": [
    { "field": "email", "message": "Please provide a valid email address" }
  ]
}
```
### `GET /api/contact`
Retrieve all contact submissions (admin).
### `GET /api/health`
Health check endpoint.
---
## 🛡️ Security Features
- ✅ CORS restricted to allowed origin
- ✅ Request body size limit (10kb)
- ✅ Input sanitization via express-validator
- ✅ Mongoose schema validation
- ✅ Centralized error handling (no stack traces in production)
- ✅ Environment variables for all secrets
---
## 👩‍💻 Author
Built with ❤️ for **She Can Foundation** — Empowering Women Through Technology.
Built with ❤️ for **She Can Foundation** — Empowering Women Through Technology
---
## 📄 License
MIT © She Can Foundation 2024
