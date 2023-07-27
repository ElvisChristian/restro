//nav toggler
// let navToggler = document.querySelector('.nav-toggler');
// let linksContainer = document.querySelector('.links-container');

// navToggler.addEventListener('click', () => {
//     navToggler.classList.toggle('active');
//     linksContainer.classList.toggle('active');
// })

let navToggler = document.querySelector('.nav-toggler');
let linksContainer = document.querySelector('.links-container');

// show/hide the menu when the button is clicked
navToggler.addEventListener('click', () => {
  navToggler.classList.toggle('active');
  linksContainer.classList.toggle('active');
});

// hide the menu when a click event occurs outside the menu
document.addEventListener('click', (event) => {
  if (
    !navToggler.contains(event.target) &&
    !linksContainer.contains(event.target)
  ) {
    navToggler.classList.remove('active');
    linksContainer.classList.remove('active');
  }
});

// about us review slider

let reviews = document.querySelectorAll('.review-wrapper');

let currentReviews = [0, 2];

let updateReviewSlider = (cards) => {
  cards.forEach((card_index) => {
    reviews[card_index].classList.add('active');
  });
};

setInterval(() => {
  currentReviews.forEach((card_index, i) => {
    reviews[card_index].classList.remove('active');

    currentReviews[i] = card_index >= reviews.length - 1 ? 0 : card_index + 1;
  });

  setTimeout(() => {
    updateReviewSlider(currentReviews);
  }, 500);
}, 5000);

updateReviewSlider(currentReviews);

// FAQ

let faqs = [...document.querySelectorAll('.faq')];

faqs.map((faq) => {
  let ques = faq.querySelector('.question-box');

  ques.addEventListener('click', () => {
    faq.classList.toggle('active');
  });
});

// dish slider
let dishSlider = document.querySelector('.disc-slide');

let rotationVal = 0;

setInterval(() => {
  rotationVal += 120;

  dishSlider.style.transform = `translateY(-50%) rotate(${rotationVal}deg)`;
}, 4000);


AOS.init();
