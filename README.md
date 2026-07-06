# ⏳ Advance Age Calculator

A sleek, glassmorphic age calculator that tells you your exact age broken down into **years, months, weeks, days, hours, minutes, seconds, and milliseconds** — all from a single birth date input.

---

## ✨ Features

- 📅 **Precise Age Calculation** — Calculates age down to the millisecond
- 🎨 **Premium Glassmorphic UI** — Dark-themed, blur-glass card with animated ambient glows
- 🌈 **Gradient Typography** — Violet → Indigo → Cyan text gradients matching the brand palette
- 📐 **Responsive Layout** — Works beautifully on mobile, tablet, and desktop
- ✅ **Input Validation** — Enforces `DD-MM-YYYY` format and rejects future dates
- ⚡ **Instant Results** — No page reload — form submission is intercepted with JavaScript
- 🔤 **Custom Font** — Uses [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) for a premium feel

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **HTML5** | Semantic structure & form handling |
| **Tailwind CSS v4** | Utility-first styling with modern `bg-linear-to-r` syntax |
| **Vanilla JavaScript** | Age calculation logic & DOM manipulation |
| **Vite** | Lightning-fast dev server & production bundler |
| **Google Fonts** | Plus Jakarta Sans typography |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/hritik2004-cse/Advance_Age_Calculator.git

# Navigate into the project
cd Advance_Age_Calculator

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Starts the Vite dev server at `http://localhost:5173/`.

### Production Build

```bash
npm run build
```

Outputs optimised assets to the `dist/` folder.

---

## 📖 Usage

1. Open the app in your browser
2. Enter your birth date in **DD-MM-YYYY** format (e.g. `15-08-1998`)
3. Click **Calculate**
4. Instantly see your age displayed as:
   - A prominent **years · months · days** headline
   - A 2-column grid of total **months, weeks, days, hours, minutes, seconds**
   - Total **milliseconds** you have been alive

---

## 📁 Project Structure

```
Advance_Age_Calculator/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── main.js        # Age calculation logic & DOM rendering
│   └── style.css      # Tailwind CSS v4 + custom animations + Google Font
├── index.html         # App shell & glassmorphic layout
├── vite.config.js     # Vite + Tailwind plugin config
└── package.json
```

---

## 🎨 Design Highlights

- **Background**: Deep `#05050f` base with subtle indigo/violet radial gradients fixed to the viewport
- **Card**: `backdrop-blur-xl` glass card with `bg-white/3` fill and `border-white/8` border — glows violet-indigo on hover
- **Ambient Orbs**: Animated violet and cyan blur circles behind the card using a custom `animate-pulse-glow` keyframe
- **Result Grid**: A 2-column Tailwind grid with ALLCAPS slate labels above each bold white value
- **Gradients**: All gradient text and buttons use Tailwind v4 `bg-linear-to-r` with the `from-violet via-indigo to-cyan` palette

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
