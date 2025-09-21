window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("scrolling", window.scrollY > 0);
});

const $skillsContainer = document.getElementById("js_skills");
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
