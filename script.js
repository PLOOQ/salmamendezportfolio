// script.js

// Function to scroll to the top of the page
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Show/hide scroll to top button based on scroll position
window.addEventListener("scroll", function () {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (window.scrollY > 300) {
    scrollToTopBtn.classList.remove("hidden");
  } else {
    scrollToTopBtn.classList.add("hidden");
  }
});
