function wasim() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}

wasim();

var tl = gsap.timeline();

tl.from(".nav", {
  opacity: 0,
  duration: 1,
  y: -50,
  delay: -0.1,
  // delay: 1,
})

  .from(".content img", {
    scale: 0.5,
    delay: -0.1,
    y: -50,
    duration: 0.8,
    borderRadius: 13,
    ease: Power4.easeOut,
  })

  .from(".content svg", {
    opacity: 0,
    y: -40,
    delay: 0.2,
    duration: 0.6,
  });

var h2Data = document.querySelectorAll(".page2 h2");
h2Data.forEach(function (elem) {
  var textData = elem.textContent;
  var splitedText = textData.split("");
  var clutter = "";
  splitedText.forEach(function (e) {
    clutter += `<span>${e}</span>`;
  });
  elem.innerHTML = clutter;
});
gsap.to(".page2 h2 span", {
  color: "#E3E3C4",
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".page2 h2 span",
    scroller: ".main",
    // markers: true,
    start: "top 60%",
    end: "top -5%",
    scrub: 2,
  },
});

gsap.to(".page2 #svg2,.page2 #svg3", {
  left: "-100vw",
  scrollTrigger: {
    trigger: ".page2 #svg2",
    scroller: ".main",
    // markers: true,
    scrub: 2,
  },
});

var h3Data = document.querySelectorAll(".page3 .nav-part h2");
h3Data.forEach(function (elem1) {
  console.log(elem1);
  var textData1 = elem1.textContent;
  var splitedText = textData1.split("");
  var clutter = "";
  splitedText.forEach(function (a) {
    clutter += `<span>${a}</span>`;
  });
  elem1.innerHTML = clutter;
});

gsap.to(".page3 h2 span", {
  color: "#434B34",
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".page3 h2 span",
    scroller: ".main",
    // markers: true,
    start: "top 100%",
    end: "top 50%",
    scrub: 2,
  },
});

tl.from(
  ".nav-part3 #rate,.nav-part3 #img2 ,#tag2 ,#tan,.nav-part4 p,.nav-part4 h3,.page3 h1",
  {
    opacity: 0,
    duration: 1,
    stagger: 1,
    // delay: 1,
    y: 100,
    scrollTrigger: {
      trigger: ".page3",
      scroller: ".main",
      // markers: true,
      start: "top -40%",
      end: "top 30%",
      scrub: 3,
    },
  }
);

tl.from(".page4", {
  opacity: 0,
  duration: 1,
  y: 100,
  scrollTrigger: {
    trigger: ".page4",
    scroller: ".main",
    // markers: true,
    start: "top 30%",
    end: "top 10%",
    scrub: 3,
  },
});

tl.from(".page5", {
  opacity: 0,
  duration: 1,
  y: 100,
  scrollTrigger: {
    trigger: ".page5",
    scroller: ".main",
    // markers: true,
    start: "top 50%",
    end: "top 10%",
    scrub: 2,
  },
});

// page5

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// page7

// let tl2 = gsap.timeline();

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".wasim2",
    scroller: ".main",
    // markers:true,
    start: "top 50%",
    end: "top 30%",
    scrub: 3,
  },
});

tl2.to(
  ".wasim2 .img-tag3",
  {
    transform: `translateX(-50%)`,
    duration: 2,
  },
  "Anime"
);
tl2.from(
  ".wasim2",
  {
    transform: `translateY(-10%)`,
    duration: 2,
    opacity: 0,
  },
  "Anime"
);
tl2.to(
  ".wasim2 .img-tag2",
  {
    transform: `translateX(50%)`,
    duration: 2,
  },
  "Anime"
);
