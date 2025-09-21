window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("scrolling", window.scrollY > 0);
});

const $skillsContainer = document.getElementById("js_skills");
const $cardsContainer = document.getElementById("js_cards");
const skills = [
  // 🧠 Core Web Dev Stack
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "Mongoose",

  // 🛠️ Tools & Platforms
  "Git",
  "GitHub",
  "VS Code",
  "Postman",
  "npm",
  "Netlify",
  "Render",
  "Vercel",

  // 🎨 Styling & UI
  "Tailwind CSS",
  "Bootstrap",
  "Styled Components",
  "Framer Motion",

  // 📦 Architecture & Patterns
  "REST APIs",
  "CRUD",
  "MVC",
  "Component-Based Design",
  "Modular Architecture",

  // 📚 Learning & Teaching
  "Content Creation",
  "TikTok Education",
  "Mentorship",
  "Storyboarding",
  "Explainer Scripts",
];

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
    github: "https://github.com/MatomeGabriel/gm-twitter-solo",
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
                      `<span class="badge rounded-pill ${styles}">${tagName}</span>`
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
