// Navbar highlighter
$("#menu").onePageNav({
  currentClass: "active",
  changeHash: false,
  filter: "",
  easing: "linear",
});

// Scroll to top on page reload
$(document).ready(function () {
  $(this).scrollTop(0);
});

//Define animation timeline
let tll = gsap.timeline({
  paused: "true",
});

let workTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#work",
    start: "top center",
  },
});

let projectTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".secondary-work-section",
    start: "center bottom",
  },
});

let aboutTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#about",
    start: "center bottom",
  },
});

// Preloader & Hero section animation
tll.to("#percent, #bar", {
  duration: 0.2,
  opacity: 0,
  zIndex: -1,
});
tll
  .to("#preloader", {
    duration: 0.8,
    height: "0%",
  })
  .from(
    "#hero",
    {
      duration: 2,
      scale: 6,
      ease: "expoScale(1, 2)",
    },
    "-=1.1"
  )
  .from(
    ".hero-title",
    {
      duration: 0.5,
      css: { opacity: 0 },
      easeOut: "power3",
    },
    "-=0.9"
  )
  .from(
    ".hero-subtitle",
    {
      duration: 1.4,
      css: { opacity: 0 },
      easeOut: "power3",
    },
    "-=0.3"
  )
  .from("header", 0.5, { css: { display: "none", width: 0, height: 0 } }, "-=0.8")
  .from(".nav-items", 0.5, { css: { display: "none", opacity: 0 } }, "-=0.3");

var width = 1;
var bar = document.getElementById("barconfirm");
var id;
function move() {
  id = setInterval(frame, 10);
}
function frame() {
  if (width >= 100) {
    clearInterval(id);
    tll.play();
  } else {
    width++;
    bar.style.width = width + "%";
    document.getElementById("percent").innerHTML = width + "%";
  }
}

// Work - initial section animation
workTl
  .from(".work-title", { y: 300, opacity: 0, duration: 1.2 })
  .from(
    ".work-subtitle",
    {
      y: 300,
      opacity: 0,
      duration: 1.2,
    },
    "-=0.8"
  )
  .from(
    ".project-left",
    {
      x: -300,
      opacity: 0,
      duration: 1.2,
    },
    "-=0.6"
  )
  .from(
    ".info-right",
    {
      x: 300,
      opacity: 0,
      duration: 1.2,
    },
    "-=0.6"
  )
  .from(
    ".project-right",
    {
      x: 300,
      opacity: 0,
      duration: 1.2,
    },
    "-=0.6"
  )
  .from(
    ".info-left",
    {
      x: -300,
      opacity: 0,
      duration: 1.2,
    },
    "-=0.6"
  );

// Work - secondary section animation
projectTl
  .from(
    ".second-project-left",
    {
      x: -300,
      opacity: 0,
      duration: 1.2,
    },
    "-=0.6"
  )
  .from(
    ".second-info-right",
    {
      x: 300,
      opacity: 0,
      duration: 1.2,
    },
    "-=0.6"
  )
  .from(
    ".second-project-right",
    {
      x: 300,
      opacity: 0,
      duration: 1.2,
    },
    "-=0.6"
  )
  .from(
    ".second-info-left",
    {
      x: -300,
      opacity: 0,
      duration: 1.2,
    },
    "-=0.6"
  );

// About section animation
aboutTl
  .from(".about-title", { y: 300, opacity: 0, duration: 1.2 })
  .from(
    ".about-description",
    {
      y: 300,
      opacity: 0,
      duration: 1,
    },
    "-=0.8"
  )
  .from(
    ".left",
    {
      x: -300,
      opacity: 0,
      duration: 1,
    },
    "-=0.5"
  )
  .from(
    ".right",
    {
      x: 300,
      opacity: 0,
      duration: 1,
    },
    "-=0.5"
  );

// Scraped idea, maybe next time buckaroo (Hero text scrambler)
// window.onload = function () {
//   class TextScramble {
//     constructor(el) {
//       this.el = el;
//       this.chars = "!<>-_\\/[]{}—=+*^?#________";
//       this.update = this.update.bind(this);
//     }
//     setText(newText) {
//       const oldText = this.el.innerText;
//       const length = Math.max(oldText.length, newText.length);
//       const promise = new Promise((resolve) => (this.resolve = resolve));
//       this.queue = [];
//       for (let i = 0; i < length; i++) {
//         const from = oldText[i] || "";
//         const to = newText[i] || "";
//         const start = Math.floor(Math.random() * 40);
//         const end = start + Math.floor(Math.random() * 40);
//         this.queue.push({ from, to, start, end });
//       }
//       cancelAnimationFrame(this.frameRequest);
//       this.frame = 0;
//       this.update();
//       return promise;
//     }
//     update() {
//       let output = "";
//       let complete = 0;
//       for (let i = 0, n = this.queue.length; i < n; i++) {
//         let { from, to, start, end, char } = this.queue[i];
//         if (this.frame >= end) {
//           complete++;
//           output += to;
//         } else if (this.frame >= start) {
//           if (!char || Math.random() < 0.28) {
//             char = this.randomChar();
//             this.queue[i].char = char;
//           }
//           output += `<span class="dud">${char}</span>`;
//         } else {
//           output += from;
//         }
//       }
//       this.el.innerHTML = output;
//       if (complete === this.queue.length) {
//         this.resolve();
//       } else {
//         this.frameRequest = requestAnimationFrame(this.update);
//         this.frame++;
//       }
//     }
//     randomChar() {
//       return this.chars[Math.floor(Math.random() * this.chars.length)];
//     }
//   }

//   const phrases = [
//     "Hey there.",
//     "I'm Hansi Brahimasi.",
//     "A software developer.",
//     "A generative art creator.",
//     "Scroll down for more.",
//   ];

//   const el = document.querySelector(".scramble-text");
//   const fx = new TextScramble(el);

//   let counter = 0;
//   const next = () => {
//     fx.setText(phrases[counter]).then(() => {
//       setTimeout(next, 800);
//     });
//     counter = (counter + 1) % phrases.length;
//   };
//   next();
// };
