// Pages
const authPage = document.getElementById("auth-page");
const homePage = document.getElementById("home-page");
const filtersPage = document.getElementById("filters-page");
const profilePage = document.getElementById("profile-page");

// Buttons
const authForm = document.getElementById("auth-form");
const profileBtn = document.getElementById("profile-btn");
const backToHomeBtn = document.getElementById("back-to-home");

// Mock Data
const visitedPlaces = ["Srirangam", "Madurai", "Kanchipuram"];
const totalPoints = 120;

// Log In Functionality
authForm.addEventListener("submit", (e) => {
  e.preventDefault();
  authPage.classList.remove("active");
  homePage.classList.add("active");
});

// Navigate to Profile Page
profileBtn.addEventListener("click", () => {
  homePage.classList.remove("active");
  profilePage.classList.add("active");

  // Populate Profile Data
  const visitedPlacesList = document.getElementById("visited-places");
  const totalPointsElement = document.getElementById("total-points");

  // Clear and populate places visited
  visitedPlacesList.innerHTML = "";
  visitedPlaces.forEach((place) => {
    const li = document.createElement("li");
    li.textContent = place;
    visitedPlacesList.appendChild(li);
  });

  // Set total points
  totalPointsElement.textContent = `${totalPoints} Points`;
});

// Back to Dashboard
backToHomeBtn.addEventListener("click", () => {
  profilePage.classList.remove("active");
  homePage.classList.add("active");
});

// Navigate to Filters Page
document.querySelectorAll(".view-site").forEach((btn) => {
  btn.addEventListener("click", () => {
    homePage.classList.remove("active");
    filtersPage.classList.add("active");
  });
});

// Apply Filters
const filtersForm = document.getElementById("filters-form");
filtersForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Guide allocated based on your filters!");
});
