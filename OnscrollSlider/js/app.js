gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

const smoother = ScrollSmoother.create({
  wrapper: "#wrapper",
  content: "#content",
  smooth: 1,
  normalizeScroll: true, // prevents address bar from showing/hiding on most devices, solves various other browser inconsistencies
  ignoreMobileResize: true, // skips ScrollTrigger.refresh() on mobile resizes from address bar showing/hiding
  effects: true,
  preventDefault: true
 });
  
  const galleryWrapper = document.querySelector('.gallery-wrapper')
  const gallery = document.querySelector('.gallery')
  
  const tli = gsap.timeline()
  tli.to(gallery, {
    x: `-${gallery.offsetWidth}`,
    scrollTrigger: { 
      trigger: galleryWrapper,
      start: 'top top',
      end: `+=${gallery.offsetWidth}`,
      pin: true,
      scrub: 0.5,
    }
  })
  
let tl = gsap.timeline();
let mySplitText = new SplitText("#split-stagger", { type: "words,chars" });
let chars = mySplitText.chars;

chars.forEach((char, i) => {
 smoother.effects(char, { speed: 1, lag: (i + 1) * 0.1 });
});