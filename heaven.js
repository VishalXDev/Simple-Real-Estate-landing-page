// JavaScript for Navigation and Button Actions

function navigateToSection(section) {
  const sectionElement = document.getElementById(section);
  if (sectionElement) {
    sectionElement.scrollIntoView({ behavior: "smooth" });
  }
}

function navigateToTour() {
  window.location.href = "tour.html";
}

function navigateToContact() {
  window.location.href = "contact.html";
}

function navigateToPricing() {
  window.location.href = "pricing.html";
}

// Add event listeners for navigation links
document.querySelectorAll(".nav-link").forEach((button) => {
  button.addEventListener("click", function () {
    const section = button.getAttribute("data-section");
    navigateToSection(section);
  });
});

// Add event listener for scroll to modify the appearance of the headline
window.addEventListener("scroll", function () {
  const headline = document.querySelector(".headline");
  if (window.scrollY > 100) {
    headline.classList.add("transparent");
  } else {
    headline.classList.remove("transparent");
  }
});

// Purchase button action (redirect to second page)
document.getElementById("purchase-btn").addEventListener("click", function () {
  window.location.href = "second-image-page.html"; // Redirect to second image page
});

// Purchase button on the third page action (redirect to third page details)
document.getElementById("purchase-btn-third-page").addEventListener("click", function () {
  window.location.href = "third-image-page.html"; // Redirect to third image page (or any other page)
});
