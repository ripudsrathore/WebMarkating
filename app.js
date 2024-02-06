//  READ MORE UNDERLINE ANIMATIO0N
var tl = gsap.timeline({ paused: true });
var animation = tl.fromTo(
  ".underline",
  {
    width: "100%",
  },
  {
    width: 0,
    right: "30%",
    duration: 1,
    ease: "power1.inOut",
  }
);

document.querySelectorAll(".js-work-link").forEach(function (element) {
  element.addEventListener("mouseenter", function () {
    animation.play();
  });
  element.addEventListener("mouseleave", function () {
    animation.reverse();
  });
});

gsap.registerPlugin(ScrollTrigger);

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

// Rolling-Text-stat
let direction = 1; // 1 = forward, -1 = backward scroll

const roll1 = roll(".rollingText", { duration: 10 }),
  roll2 = roll(".rollingText02", { duration: 10 }, true),
  scroll = ScrollTrigger.create({
    onUpdate(self) {
      if (self.direction !== direction) {
        direction *= -1;
        gsap.to([roll1, roll2], { timeScale: direction, overwrite: true });
      }
    },
  });

// helper function that clones the targets, places them next to the original, then animates the xPercent in a loop to make it appear to roll across the screen in a seamless loop.
function roll(targets, vars, reverse) {
  const tl = gsap.timeline({
    repeat: -1,
    onReverseComplete() {
      this.totalTime(this.rawTime() + this.duration() * 10); // otherwise when the playhead gets back to the beginning, it'd stop. So push the playhead forward 10 iterations (it could be any number)
    },
  });
  vars = vars || {};
  vars.ease || (vars.ease = "none");
  gsap.utils.toArray(targets).forEach((el) => {
    let clone = el.cloneNode(true);
    el.parentNode.appendChild(clone);
    gsap.set(clone, {
      position: "absolute",
      top: el.offsetTop,
      left: el.offsetLeft + (reverse ? -el.offsetWidth : el.offsetWidth),
    });
    tl.to([el, clone], { xPercent: reverse ? 100 : -100, ...vars }, 0);
  });
  return tl;
}
// Rolling-Text-end

//2 scroll-gallrey-start
gsap.registerPlugin(ScrollTrigger);

gsap.to(".scroll-gallary-text", {
  scrollTrigger: {
    trigger: ".scroll-gallary-text",
    scroll: "body",

    start: "botom ",
    end: "bottom ",
  },

  scrub: 3,
  ease: Linear.easeNone,
  scrub: 8,
});

gsap.to(".scroll-image", {
  scrollTrigger: {
    trigger: "scroll-gallary-text",
    scroll: "body",
    start: "top ",
    end: "bottom ",
    scrub: 3,
  },
  yPercent: -500,
  duration: 5,
  ease: Linear.easeNone,
});
// scroll-gallrey-end
//3color-fill-text-start
const textElements = gsap.utils.toArray(".color-text");

textElements.forEach((text) => {
  gsap.to(text, {
    backgroundSize: "100%",
    ease: "none",
    scrollTrigger: {
      trigger: text,
      start: "center 80%",
      end: "center 10%",
      scrub: true,
    },
  });
});
//color-fill-text-end

//4 Card image

gsap.to(".smallimg", {
  scrollTrigger: {
    trigger: ".section-one ",
    start: "top ",

    scrub: 1,
    marks: true,
  },
  y: -250,
  dureation: 5,
});
gsap.to(".second-smallimg", {
  scrollTrigger: {
    trigger: ".section-two ",
    start: "top ",
    scrub: 1,
    marks: true,
  },
  y: -250,
  dureation: 5,
});
