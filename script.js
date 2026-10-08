const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const toTop = document.getElementById("toTop");
const navbarHeight = 64;
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// القائمة في الموبايل
function setMenu(open) {
  navLinks.classList.toggle("open", open);
  menuToggle.classList.toggle("open", open);
  menuToggle.setAttribute("aria-expanded", open);
}

menuToggle.addEventListener("click", () => {
  setMenu(!navLinks.classList.contains("open"));
});

// التمرير السلس للأقسام (مع إغلاق القائمة)
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - navbarHeight + 1;
    window.scrollTo({ top, behavior: reduceMotion ? "auto" : "smooth" });
    setMenu(false);
  });
});

// زر العودة لأعلى الصفحة
window.addEventListener("scroll", () => {
  toTop.classList.toggle("show", window.scrollY > 400);
});

toTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
});
