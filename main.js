// const observerOptions = {
//   rootMargin: '0px',
//   threshold: 0.2
// };

// const observer = new IntersectionObserver((entries, observer) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('show');
//       observer.unobserve(entry.target);
//     }
//   });
// }, observerOptions);

// const sections = document.querySelectorAll('section');

// sections.forEach(section => {
//   const cards = section.querySelectorAll('.aboutUs_card, .services_card, .location_card, .location_info');
//   cards.forEach(card => {
//     observer.observe(card);
//   });
// });

// // Functionality of menu button
// const menuButton = document.querySelector('.menuBtn');
// const menuList = document.querySelector('.nav_links');

// menuButton.addEventListener('click',show);

// function show() {
//     if (menuList.style.display === 'none') {
//         menuList.style.display = 'block';
//         menuList.style.transition = 'all 0.5s ease';
//         menuButton.style.transform = 'rotate(90deg)';
//         menuButton.style.transition = 'all 0.5s ease';
//     } else {
//         menuList.style.display = 'none';
//         menuButton.style.transform = 'rotate(0)';
//         menuButton.style.transitsion = 'all 0.5s ease';
//     }
// }
// //Functionality of to top Button
// // Get a reference to the "To Top" button element
// const toTopButton = document.getElementById('toTopButton');

// // Show/hide the button based on the user's scroll position
// window.addEventListener('scroll', function() {
//   if (window.pageYOffset > 100) {
//     toTopButton.style.display = 'block';
//   } else {
//     toTopButton.style.display = 'none';
//   }
// });

// // Add smooth scroll behavior when the button is clicked
// toTopButton.addEventListener('click', function() {
//   // Scroll to the top of the page smoothly
//   window.scrollTo({
//     top: 0,
//     behavior: 'smooth'
//   });
// });

// // Apply animation to the header when the page loads
// window.addEventListener('DOMContentLoaded', () => {
//   const header = document.querySelector('header');
//   header.classList.add('animate-slide-in');
// });

// // Apply animation to welcome cards when the page loads
// window.addEventListener('DOMContentLoaded', () => {
//   const welcomeCards = document.querySelectorAll('.welcome_card');
//   welcomeCards.forEach((card, index) => {
//     setTimeout(() => {
//       card.classList.add('animate-slide-in');
//     }, index * 200); // Delay each card animation for a smooth effect
//   });
// });

// // Function to check if an element is in the viewport
// function isElementInViewport(element) {
//   const rect = element.getBoundingClientRect();
//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// }

// // Function to handle intersection changes
// function handleIntersection(entries, observer) {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('show');
//       observer.unobserve(entry.target);
//     }
//   });
// }

// // Create Intersection Observer instance
// const observer = new IntersectionObserver(handleIntersection, {
//   threshold: 0.2, // Adjust threshold as needed
// });

// // Select the elements to animate
// const animateElements = document.querySelectorAll('.animate-scroll');

// // Observe each animate element
// animateElements.forEach((element) => {
//   if (isElementInViewport(element)) {
//     element.classList.add('show');
//   } else {
//     observer.observe(element);
//   }
// });

// // Reveal elements that are already in viewport on page load
// window.addEventListener('DOMContentLoaded', () => {
//   animateElements.forEach((element) => {
//     if (isElementInViewport(element)) {
//       element.classList.add('show');
//     }
//   });
// });

// // Reveal elements when scrolling
// window.addEventListener('scroll', () => {
//   animateElements.forEach((element) => {
//     if (isElementInViewport(element)) {
//       element.classList.add('show');
//     }
//   });
// });


const observerOptions = {
  threshold: 0.2
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

const sections = document.querySelectorAll('section');

sections.forEach(section => {
  const cards = section.querySelectorAll('.aboutUs_card, .services_card, .location_card, .location_info');
  cards.forEach(card => {
    observer.observe(card);
  });
});

const menuButton = document.querySelector('.menuBtn');
const menuList = document.querySelector('.nav_links');

menuButton.addEventListener('click', () => {
  menuList.style.display = menuList.style.display === 'none' ? 'block' : 'none';
  menuList.style.transition = 'all 0.5s ease';
  menuButton.style.transform = menuList.style.display === 'none' ? 'rotate(0)' : 'rotate(90deg)';
  menuButton.style.transition = 'all 0.5s ease';
});

const toTopButton = document.getElementById('toTopButton');

window.addEventListener('scroll', () => {
  toTopButton.style.display = window.pageYOffset > 100 ? 'block' : 'none';
});

toTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

const header = document.querySelector('header');
header.classList.add('animate-slide-in');

const welcomeCards = document.querySelectorAll('.welcome_card');
welcomeCards.forEach((card, index) => {
  setTimeout(() => {
    card.classList.add('animate-slide-in');
  }, index * 200);
});

const animateElements = document.querySelectorAll('.animate-scroll');

animateElements.forEach((element) => {
  if (isElementInViewport(element)) {
    element.classList.add('show');
  } else {
    observer.observe(element);
  }
});

window.addEventListener('DOMContentLoaded', () => {
  animateElements.forEach((element) => {
    if (isElementInViewport(element)) {
      element.classList.add('show');
    }
  });
});

window.addEventListener('scroll', () => {
  animateElements.forEach((element) => {
    if (isElementInViewport(element)) {
      element.classList.add('show');
    }
  });
});

function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}



function animateOnScroll() {
  const aboutPageCards = document.querySelectorAll('.aboutUs_container, .services_container, .location_container');
  const windowHeight = window.innerHeight;

  welcomeCards.forEach((card) => {
    const cardPosition = card.getBoundingClientRect().top;

    if (cardPosition - windowHeight <= 0) {
      card.style.animation = 'fade-in 1s forwards';
    }
  });
}

window.addEventListener('scroll', animateOnScroll);
