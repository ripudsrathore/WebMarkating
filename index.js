gsap.registerPlugin(ScrollToPlugin);
const scrollButton = document.querySelector("#scroll-button");
const sectionCases = document.querySelector("#scroll-funt");
scrollButton.addEventListener("click", () => {
  console.warn(sectionCases);
  gsap.to(window, {
    duration: 1,
    scrollTo: sectionCases,
  });
});