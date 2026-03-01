window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("scrolling", window.scrollY > 0);
});

const $skillsContainer = document.getElementById("js_skills");
const $cardsContainer = document.getElementById("js_cards");
// const skills = [
//   // 🧠 Core Web Dev Stack
//   "HTML",
//   "CSS",
//   "JavaScript",
//   "React",
//   "Node.js",
//   "Express",
//   "MongoDB",
//   "Mongoose",

//   // 🛠️ Tools & Platforms
//   "Git",
//   "GitHub",
//   "VS Code",
//   "Postman",
//   "npm",
//   "Netlify",
//   "Render",
//   "Vercel",

//   // 🎨 Styling & UI
//   "Tailwind CSS",
//   "Bootstrap",
//   "Styled Components",
//   "Framer Motion",

//   // 📦 Architecture & Patterns
//   "REST APIs",
//   "CRUD",
//   "MVC",
//   "Component-Based Design",
//   "Modular Architecture",

//   // 📚 Learning & Teaching
//   "Content Creation",
//   "TikTok Education",
//   "Mentorship",
//   "Storyboarding",
//   "Explainer Scripts",
// ];

const skills = [ // Core Backend & Web Development 
  "JavaScript", "Node.js", "Express", "REST APIs", "CRUD Operations", "Modular Architecture", "MVC Patterns", 
  // Databases 
  "MongoDB", "Mongoose", "SQL Fundamentals", "Relational Databases", "Learning PostgreSQL", 
  // Frontend Essentials 
  "HTML", "CSS", "Responsive Design", "React (Basics)", 
  // Tools & Platforms 
  "Git", "GitHub", "VS Code", "Postman", "npm", "Firebase Functions", "Netlify", "Render", "Vercel", 
  // Engineering Mindset 
  "System Debugging", "Testing & Troubleshooting", "Documentation", "Process Mapping", "Learning SOLID Principles", 
  // Soft Skills 
  "Problem Solving", "Team Collaboration", "Technical Communication" ];

const setContent = () => {
  skills.map((text) => {
    const span = document.createElement("span");
    span.classList.add("badge", "rounded-pill", "text-bg-custom");
    span.textContent = text;
    $skillsContainer.appendChild(span);
  });
};

setContent();

const cardsContent = [
  {
    imgUrl: "./images/netflix.png",
    title: "Netflix Landing Page",
    text: "Basic Netflix homepage clone using pure HTML & CSS. Focused on layout and styling — no responsiveness yet. ",
    tags: [
      { tagName: "HTML", styles: "text-bg-dark" },
      { tagName: "CSS", styles: "text-bg-dark" },
      { tagName: "FrontendProject", styles: "text-bg-dark" },
      { tagName: "LayoutPractice", styles: "text-bg-dark" },
      { tagName: "NetflixClone", styles: "text-bg-netflix bg-shadow" },
      { tagName: "&lt; VS Code /&gt", styles: "text-bg-code bg-shadow" },
      { tagName: "Hosted with Netlify", styles: " text-bg-netlify bg-shadow" },
    ],
    website: "https://site-neflix-clone-gabriel.netlify.app/",
    github: "https://github.com/MatomeGabriel",
  },
  {
    imgUrl: "./images/twitter.png",
    title: "Responsive Twitter Clone (HTML & CSS)",
    text: "A sleek Twitter homepage replica built with pure HTML and CSS. Fully responsive layout with styled navbar, tweet feed, and sidebar — no JavaScript needed",
    tags: [
      { tagName: "HTML", styles: "text-bg-dark" },
      { tagName: "CSS", styles: "text-bg-dark" },
      { tagName: "Responsive", styles: "text-bg-dark" },
      { tagName: "&lt; VS Code /&gt", styles: "text-bg-code bg-shadow" },
      { tagName: "TwitterClone", styles: "text-bg-twitter" },
      { tagName: "Hosted with Netlify", styles: " text-bg-netlify bg-shadow" },
    ],
    website: "https://gm-twitter-clone.netlify.app/",
    github: "https://github.com/MatomeGabriel/gm-twitter-solo",
  },
  {
    imgUrl: "./images/youtube.png",
    title: "Responsive Youtube Clone (HTML & CSS)",
    text: "A static YouTube homepage replica using only HTML and CSS. Includes styled navbar, video grid, and sidebar — no JavaScript, just layout and design.",
    tags: [
      { tagName: "HTML", styles: "text-bg-dark" },
      { tagName: "CSS", styles: "text-bg-dark" },
      { tagName: "ResponsiveDesign", styles: "text-bg-dark" },
      { tagName: "FrontendOnly", styles: "text-bg-dark" },
      { tagName: "Flexbox", styles: "text-bg-dark" },
      { tagName: "Grid", styles: "text-bg-dark" },
      { tagName: "StaticWebsite", styles: "text-bg-dark" },
      { tagName: "VideoLayout", styles: "text-bg-dark" },
      { tagName: "&lt; VS Code /&gt", styles: "text-bg-code bg-shadow" },
      { tagName: "YouTubeClone", styles: "text-bg-tube bg-shadow" },
      { tagName: "Hosted with Netlify", styles: " text-bg-netlify bg-shadow" },
    ],
    website: "https://gm-youtube-clone.netlify.app/",
    github: "https://github.com/MatomeGabriel/youtube-clone",
  },
  {
    imgUrl: "./images/keep.png",
    title: "Google Keep Clone – Vanilla JS CRUD",
    text: "Built with object-oriented programming and DOM manipulation. Create, edit, delete, and save notes — no backend required.",
    tags: [
      { tagName: "HTML", styles: "text-bg-dark" },
      { tagName: "CSS", styles: "text-bg-dark" },
      { tagName: "Javascript", styles: "text-bg-dark" },
      { tagName: "OOP", styles: "text-bg-dark" },
      { tagName: "CRUD", styles: "text-bg-dark" },
      { tagName: "LocalStorage", styles: "text-bg-dark" },
      { tagName: "FrontendProject", styles: "text-bg-dark" },
      { tagName: "DOMManipulation", styles: "text-bg-dark" },
      { tagName: "NoBackend", styles: "text-bg-dark" },
      { tagName: "VanillaJS", styles: "text-bg-dark" },
      { tagName: "CodeStructure", styles: "text-bg-dark" },
      { tagName: "&lt; VS Code /&gt;", styles: "text-bg-code bg-shadow" },
      { tagName: "GoogleKeepClone", styles: "text-bg-keep bg-shadow" },
      { tagName: "Hosted with Netlify", styles: " text-bg-netlify bg-shadow" },
    ],
    website: "https://gm-google-keep-js.netlify.app/",
    github: "https://github.com/MatomeGabriel/Zaio-Google-Keep",
  },
  {
    imgUrl: "./images/instagram.png",
    title: "Instagram Profile Clone (JavaScript + Vite + Firebase)",
    text: "A responsive Instagram-style profile built with Vanilla JS and Vite. Features Firebase Auth, Realtime Database, Storage-driven image posts, following system, and dynamic grid layout.",
    tags: [
      { tagName: "JavaScript", styles: "text-bg-dark" },
      { tagName: "Vite", styles: "text-bg-vite" },
      { tagName: "FirebaseAuth", styles: "text-bg-firebase" },
      { tagName: "RealtimeDatabase", styles: "text-bg-firebase" },
      { tagName: "Firestore", styles: "text-bg-firebase" },
      { tagName: "FirebaseStorage", styles: "text-bg-firebase" },
      { tagName: "ResponsiveDesign", styles: "text-bg-dark" },
      { tagName: "CSSGrid", styles: "text-bg-dark" },
      { tagName: "Sass", styles: "text-bg-dark" },
      { tagName: "date-fns", styles: "text-bg-dark" },
      { tagName: "< VS Code />", styles: "text-bg-code bg-shadow" },
      { tagName: "InstagramClone", styles: "text-bg-ig bg-shadow" },
      { tagName: "Hosted with Netlify", styles: "text-bg-netlify bg-shadow" },
    ],
    website: "https://insta-clone-by-gabriel.netlify.app",
    github: "https://github.com/MatomeGabriel/gm-Instagram",
  },
  {
    imgUrl: "./images/amazon.png",
    title: "Amazon E‑Commerce Clone (React + Firebase + Stripe)",
    text: "A full e-commerce experience featuring Firebase Auth, real-time product browsing, shopping cart system, and secure Stripe payment processing. Built with React, Context API, and serverless Firebase Functions.",
    tags: [
      { tagName: "React", styles: "text-bg-react" },
      { tagName: "JavaScript", styles: "text-bg-dark" },
      { tagName: "ContextAPI", styles: "text-bg-react" },
      { tagName: "ReactRouter", styles: "text-bg-reactrouter" }, // #CA4245 gradient
      { tagName: "FirebaseAuth", styles: "text-bg-firebase" }, // #FFCA28 / #FFA000
      { tagName: "Firestore", styles: "text-bg-firebase" },
      { tagName: "FirebaseFunctions", styles: "text-bg-firebase" },
      { tagName: "StripeAPI", styles: "text-bg-stripe" }, // #635BFF
      { tagName: "Ecommerce", styles: "text-bg-dark" }, // #FF9900
      { tagName: "ShoppingCart", styles: "text-bg-dark" },
      { tagName: "SecurePayments", styles: "text-bg-stripe" },
      { tagName: "DummyJSON", styles: "text-bg-dark" },
      { tagName: "ResponsiveDesign", styles: "text-bg-dark" },
      { tagName: "< VS Code />", styles: "text-bg-code bg-shadow" },
      { tagName: "AmazonClone", styles: "text-bg-amazon bg-shadow" },
      { tagName: "Hosted with Netlify", styles: "text-bg-netlify bg-shadow" }, // #000000
    ],
    website: "https://YOUR-AMAZON-CLONE-LINK.vercel.app/",
    github: "https://github.com/MatomeGabriel/YOUR-AMAZON-CLONE-REPO",
  },
  {
    imgUrl: "./images/tictactoe.png",
    title: "Tic Tac Toe – React Edition",
    text: "A modern, polished take on the classic Tic Tac Toe game — built with React and enhanced with smooth sound effects, background music, animations, transitions, and a fully responsive UI. Styled Components power the entire visual design, enabling dynamic theming and clean component‑scoped styling.",
    tags: [
      { tagName: "React", styles: "text-bg-react" },
      { tagName: "JavaScript", styles: "text-bg-dark" },
      { tagName: "StyledComponents", styles: "text-bg-styled" },
      { tagName: "CSSGrid", styles: "text-bg-dark" },
      { tagName: "Flexbox", styles: "text-bg-dark" },
      { tagName: "WebAudioAPI", styles: "text-bg-dark" },
      { tagName: "Animations", styles: "text-bg-dark" },
      { tagName: "Transitions", styles: "text-bg-dark" },
      { tagName: "ResponsiveDesign", styles: "text-bg-dark" },
      { tagName: "DarkMode", styles: "text-bg-dark" },
      { tagName: "LightMode", styles: "text-bg-dark" },
      { tagName: "ScoreTracking", styles: "text-bg-dark" },
      { tagName: "ResettableScoreboard", styles: "text-bg-dark" },
      { tagName: "TwoPlayerMode", styles: "text-bg-dark" },
      { tagName: "< VS Code />", styles: "text-bg-code bg-shadow" },
      { tagName: "TicTacToeGame", styles: "text-bg-game bg-shadow" },
      { tagName: "Hosted with Netlify", styles: "text-bg-netlify bg-shadow" },
    ],
    website: "https://gm-tic-tac-toe.netlify.app/",
    github: "https://github.com/MatomeGabriel/tic-tac-toe",
  },
  {
    imgUrl: "./images/airbnb.png",
    title: "Airbnb‑Style Accommodation Platform (MERN)",
    text: "A fully deployed full‑stack accommodation platform with JWT auth, listings, image uploads, reservations, and a clean MVC backend architecture.",
    tags: [
      { tagName: "React", styles: "text-bg-react" },
      { tagName: "ReactRouter", styles: "text-bg-reactrouter" },
      { tagName: "ReactQuery", styles: "text-bg-reactquery" },
      { tagName: "ReactHookForm", styles: "text-bg-rhf" },
      { tagName: "Node.js", styles: "text-bg-dark" },
      { tagName: "Express.js", styles: "text-bg-dark" },
      { tagName: "MongoDB", styles: "text-bg-dark" },
      { tagName: "Mongoose", styles: "text-bg-mongoose" },
      { tagName: "MVC", styles: "text-bg-mvc" },
      { tagName: "CRUD", styles: "text-bg-crud" },
      { tagName: "JWTAuth", styles: "text-bg-dark" },
      { tagName: "Bcrypt", styles: "text-bg-bcrypt" },
      { tagName: "MulterUploads", styles: "text-bg-multer" },
      { tagName: "FirebaseStorage", styles: "text-bg-firebase" },
      { tagName: "Vercel", styles: "text-bg-vercel bg-shadow" },
      { tagName: "Render", styles: "text-bg-render bg-shadow" },
      { tagName: "CleanArchitecture", styles: "text-bg-dark" },
      { tagName: "< VS Code />", styles: "text-bg-code bg-shadow" },
      { tagName: "AirbnbClone", styles: "text-bg-airbnb bg-shadow" },
    ],
    website: "https://air-bnb-frontend-rjhv.vercel.app/",
    github: "https://github.com/MatomeGabriel/air-bnb-backend",
  },
];

cardsContent.map((card) => {
  const newCard = `<div class="col-md-4 mt-4">
            <div class="card card-view">
              <img
                src="${card.imgUrl}"
                class="card-img-top"
                alt="${card.title}"
              />
              <div class="card-body">
                <h5 class="card-title">${card.title}</h5>
                <p class="card-text">
                  ${card.text}
                </p>
                <div class="mb-4 d-flex gap-1 flex-wrap">
                ${card.tags
                  .map(
                    ({ tagName, styles }) =>
                      `<span class="badge rounded-pill ${styles}">${tagName}</span>`,
                  )
                  .join(" ")}
                </div>
                <div class="d-flex gap-3 w-100"><a
                  href="${card.website}"
                  class="btn btn-primary"
                  target="_blank"
                  ><i class="bi bi-browser-chrome"></i> View Website</a
                >
                <a href="${
                  card.github
                }" target="_blank" class="btn btn-secondary">
                  <i class="bi bi-code-slash"></i> View Code</a
                ></div>
                
              </div>
            </div>
          </div>`;
  $cardsContainer.insertAdjacentHTML("beforeend", newCard);
});

var typed = new Typed("#typed", {
  strings: [
    "💻 Full-Stack Web Developer and Educator 📚",
    "⚛️ React and Node.js Craftsman with a Human Touch 🤝",
    "🔧 From Technician to Teacher — Bridging Gaps with Code 🌉",
    "📢 Learning in Public, Teaching with Purpose 🎯",
    "🔁 Progress Over Perfection — Always Iterating 🛠️",
    "🧑‍💻 Helping Beginners Feel Brave in Tech 🦁",
  ],
  typedSpeed: 100,
  loop: true,
  //   shuffle: true,
});
