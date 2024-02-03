gsap.registerPlugin(ScrollTrigger);

// Rolling-Text-stat
let direction = 1; // 1 = forward, -1 = backward scroll

const roll1 = roll(".rollingText", { duration: 20 }, true),
  roll2 = roll(".rollingText02", { duration: 20 }),
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

// scroll-gallrey-start
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
//color-fill-text-start
const textElements = gsap.utils.toArray('.color-text');
  
  textElements.forEach(text => {
    gsap.to(text, {
      backgroundSize: '100%',
      ease: 'none',
      scrollTrigger: {
        trigger: text,
        start: 'center 80%',
        end: 'center 10%',
        scrub: true,
      },
    });
  });
//color-fill-text-end