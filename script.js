window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("scrolling", window.scrollY > 0);
});

var typed = new Typed("#typed", {
  strings: ["Fullstack Developer.", "Coding Instructor."],
  typedSpeed: 75,
  loop: true,
  //   shuffle: true,
});
