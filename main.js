// Functionality of menu button
const menuButton = document.querySelector('.menuBtn');
const menuList = document.querySelector('.nav_links');

menuButton.addEventListener('click',show);

function show() {
    if (menuList.style.display === 'none') {
        menuList.style.display = 'block';
        menuList.style.transition = 'all 0.5s ease';
        menuButton.style.transform = 'rotate(90deg)';
        menuButton.style.transition = 'all 0.5s ease';
    } else {
        menuList.style.display = 'none';
        menuButton.style.transform = 'rotate(0)';
        menuButton.style.transitsion = 'all 0.5s ease';
    }
}
//Functionality of to top Button
// Get a reference to the "To Top" button element
const toTopButton = document.getElementById('toTopButton');

// Show/hide the button based on the user's scroll position
window.addEventListener('scroll', function() {
  if (window.pageYOffset > 100) {
    toTopButton.style.display = 'block';
  } else {
    toTopButton.style.display = 'none';
  }
});

// Add smooth scroll behavior when the button is clicked
toTopButton.addEventListener('click', function() {
  // Scroll to the top of the page smoothly
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

  