/* =========================================
   1. MENU TOGGLE FUNCTIONALITY
   ========================================= */
let menu = document.querySelector(".material-symbols-outlined");
let heanavlist = document.querySelector(".hea-nav-list");

// Null check: Only runs if menu button exists (e.g. if you uncomment header in ourwork.html)
if (menu) {
  menu.addEventListener("click", () => {
    heanavlist.classList.toggle("active");
  });
}

/* =========================================
   2. NAV LINK SELECTION
   ========================================= */
let navlinks = document.querySelectorAll(".nav-links");

if (navlinks.length > 0) {
  navlinks.forEach((links) => {
    links.addEventListener("click", () => {
      navlinks.forEach((a) => {
        a.classList.remove("selectednavitem");
      });
      links.classList.add("selectednavitem");
    });
  });
}

/* =========================================
   3. TYPING ANIMATION
   ========================================= */
// Fixed selector: added '#' and check existence
if (document.querySelector("#he-animation-element")) {
  var typed = new Typed("#he-animation-element", {
    strings: ["Businesses", "Agencies", "Organizations"],
    typeSpeed: 60,
    backSpeed: 20, // Fixed capitalization
    loop: true,
    backDelay: 3000, // Fixed capitalization
  });
}

/* =========================================
   4. SCROLL ANIMATIONS
   ========================================= */
let whatweoffer = document.getElementById("what-we-offer");
let work = document.getElementById("work");
let about = document.getElementById("about");
let hero = document.getElementById("hero");
let ourwork = document.getElementById("our-work");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  {
    threshold: 0.1, // Lower threshold for better mobile experience
  }
);

// Only observe if the element actually exists on the current page
if (whatweoffer) observer.observe(whatweoffer);
if (work) observer.observe(work);
if (about) observer.observe(about);
if (hero) observer.observe(hero);
if (ourwork) observer.observe(ourwork);