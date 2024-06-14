document.addEventListener("DOMContentLoaded", (event) => {
  // Function to handle click on heart
  const handleHeartClick = (event) => {
    const heart = event.target;
    const isFilled = heart.classList.contains("filled");

    if (isFilled) {
      // If already filled, toggle back to empty
      heart.classList.remove("filled");
      heart.setAttribute("src", "assets/heart.png");
    } else {
      // If empty, toggle to filled
      heart.classList.add("filled");
      heart.setAttribute("src", "assets/heart filled.png");
    }
  };

  // Add event listeners to all hearts initially
  const hearts = document.querySelectorAll("img.heart");
  hearts.forEach((heart) => {
    heart.addEventListener("click", handleHeartClick);
  });
  // Handle show more/show less functionality
  const handleShowMore = (event) => {
    const showMoreButton = event.target;
    const descriptionDiv = showMoreButton.parentElement;
    // Toggle the 'less' class on the description div
    if (descriptionDiv.classList.contains("less")) {
      // Expand the description
      descriptionDiv.classList.remove("less");
      descriptionDiv.classList.add("more");
      showMoreButton.textContent = "show less";
    } else {
      // Collapse the description
      descriptionDiv.classList.remove("more");
      descriptionDiv.classList.add("less");
      showMoreButton.textContent = "show more";
    }
  };

  // Add event listeners to all elements with class 'showmore'
  const showMoreButtons = document.querySelectorAll(".showmore");
  showMoreButtons.forEach((button) => {
    button.addEventListener("click", handleShowMore);
  });
});
