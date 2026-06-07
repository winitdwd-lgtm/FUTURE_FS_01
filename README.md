# 🌌 Vineet Dharwad - Professional Portfolio v2

[![Next.js Version](https://img.shields.io/badge/Next.js-v16.2-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React Version](https://img.shields.io/badge/React-v19.0-blue?style=flat-square&logo=react)](https://react.dev/)
[![TailwindCSS Version](https://img.shields.io/badge/TailwindCSS-v4.0-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-v12.3-ff007f?style=flat-square&logo=framer)](https://www.framer.com/motion/)

A premium, interactive, and high-performance developer portfolio website built using the latest web technologies. This application showcases the journey, technical capabilities, certifications, projects, and achievements of **Vineet Dharwad**, a Computer Science student and Full-Stack Developer & Analyst.

🔗 **Live GitHub Repository:** [https://github.com/winitdwd-lgtm/FUTURE_FS_01](https://github.com/winitdwd-lgtm/FUTURE_FS_01)

---

## ✨ Design & Aesthetic Philosophy

The project is built around **rich aesthetics** and **micro-interactions** to create a stunning first impression:
*   **Geometric Shape Hero Landing:** Elegant floating shapes with smooth floating physics and blur effects that animate on load.
*   **Cosmic Background Parallax:** Dynamic parallax star field and nebulas (`cosmic.css`) to give a depth-filled, futuristic vibe.
*   **Glassmorphic Card UI:** Sleek semi-transparent borders with subtle backdrops blending seamlessly into the dark color palette.
*   **3D Tilt Certifications Scroll:** An immersive scroll layout utilizing 3D tilt effects to display professional credentials.
*   **Micro-Animations:** Hover states, scroll fading, and active link transitions for a premium, responsive feel.

---

## 🛠️ Technology Stack

| Technology / Library | Purpose |
| :--- | :--- |
| **Next.js 16 (App Router)** | Modern React framework for routing, performance, and structure. |
| **React 19** | Core frontend library utilizing latest state patterns. |
| **Tailwind CSS v4** | Custom-tailored styles, HSL color tokens, and animations. |
| **Framer Motion 12** | Advanced animations, page transitions, and floating shapes. |
| **Base UI / Radix UI** | Accessible, unstyled UI primitives. |
| **Lucide Icons** | Consistent, vector-based iconography. |
| **Shadcn UI** | High-quality accessible components (Buttons, Cards). |

---

## 📂 Project Structure

```
portfolio-v2/
├── public/                 # Static assets (Favicons, SVG graphics)
├── src/
│   ├── app/
│   │   ├── favicon.ico     # App favicon
│   │   ├── globals.css     # Global stylesheets and Tailwind CSS v4 directives
│   │   ├── layout.tsx      # Core HTML structure and font loading (Outfit, Inter)
│   │   └── page.tsx        # Main application file & Portfolio sections
│   ├── components/
│   │   └── ui/             # Reusable interactive components
│   │       ├── blur-fade.tsx                  # Fading scroll animation wrapper
│   │       ├── button.tsx                     # Styled Shadcn button
│   │       ├── container-scroll-animation.tsx # 3D scroll tilt list wrapper
│   │       ├── cosmic.css                     # Custom animations for cosmic background
│   │       ├── parallax-cosmic-background.tsx # Interactive starfield & nebulas
│   │       ├── personal-landing.tsx           # Contact form & social links
│   │       └── shape-landing-hero.tsx         # Elegant floating geometric shapes hero
│   └── lib/
│       └── utils.ts        # CN utility for merging Tailwind classes
├── components.json         # Shadcn configuration
├── next.config.js          # Next.js configuration (with static export output: 'export')
├── package.json            # Node.js dependencies & scripts
├── tsconfig.json           # TypeScript configuration
└── tailwind.config.js      # Styling configuration
```

---

## 🚀 Key Sections

### 1. 🌌 Hero Geometric Banner
Features beautiful title text ("Vineet Dharwad — Engineer & Innovator") backed by abstract floating glassmorphic shapes that react smoothly to transitions.

### 2. 🧠 About, Education & Core Skills
*   **Summary:** Highlights Vineet's profile as a detail-oriented Computer Science student focused on problem-solving.
*   **Education:** Bachelor of Engineering, Computer Science at **Global Academy of Technology** (2024 - 2028).
*   **Technical Skill Taxonomy:** Organizes skills into Programming Languages, Web Development, Frameworks, Data & Databases, Core Concepts, and Developer Tools.

### 3. 💼 Experience & Leadership Timeline
Showcases role descriptions and achievements in:
*   **Marketing Specialist:** IT Virtuoso Club | Global Academy of Technology
*   **Software Engineering Job Simulation:** JPMorgan Chase
*   **Data Analytics Job Simulation:** Deloitte Australia
*   **GenAI Powered Data Analytics Simulation:** Tata
*   **Operations Job Simulation:** Goldman Sachs

### 4. 📜 Professional Accreditations (Certifications)
A stunning grid of verified certifications displayed in a custom 3D scrolling component, including certifications from **Infosys Springboard**, **Oracle (AI Foundations Associate)**, **Google / Credly (Agent Development Kit)**, **IBM SkillsBuild**, and **Unstop**.

### 5. 🛠️ Featured Engineering (Projects)
Exhibits core projects with descriptions and specific technology tags:
*   **Full Stack Web Application:** (HTML, CSS, JS, React.js, REST APIs)
*   **Backend Application:** (Spring Boot, SQL, Java, MVC)
*   **AI/Data Analytics Project:** (Python, EDA, ML, Data Visualization)

### 6. ✉️ Interactive Contact Card
A messaging panel built with validation and visual feedback to allow visitors to directly message Vineet, alongside high-fidelity links to GitHub, LinkedIn, and Email.

---

## ⚙️ Getting Started

### Prerequisites
*   Node.js (v18.x or later recommended)
*   npm, yarn, pnpm, or bun

### Local Installation
1.  Clone the repository:
    ```bash
    git clone https://github.com/winitdwd-lgtm/FUTURE_FS_01.git
    cd FUTURE_FS_01
    ```
    *(If running locally from the nested directory, move into `portfolio-v2/`)*:
    ```bash
    cd portfolio-v2
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Run the local development server:
    ```bash
    npm run dev
    ```
4.  Open [http://localhost:3000](http://localhost:3000) in your web browser to view the application.

---

## 📦 Static Export & Deployment

The portfolio is pre-configured to build as a static website for deployment on Vercel, GitHub Pages, Netlify, or AWS S3.

1.  Build and export the static site:
    ```bash
    npm run build
    ```
    This command will generate an `out/` directory containing the optimized static HTML, CSS, and JS assets.
2.  Deploy the contents of the `out/` directory directly to your web host.

---

## ✒️ Author
*   **Vineet Dharwad**
    *   📧 Email: winit.dwd@gmail.com
    *   🔗 LinkedIn: [Vineet Dharwad](https://in.linkedin.com/in/vineet-dharwad-3a8a50389)
    *   💻 GitHub: [winitdwd-lgtm](https://github.com/winitdwd-lgtm)
