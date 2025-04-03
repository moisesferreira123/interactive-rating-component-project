// Rating state
const submit = document.querySelector('.submit-button');
const ratingButtons = document.querySelectorAll('.rating-button');
let rating = 10;

document.addEventListener('click', (e) => {
  const el = e.target;
  if(el.classList.contains('rating-button')){
    if(rating<6) {
      ratingButtons[rating-1].classList.remove('rating-button-actived');
      ratingButtons[rating-1].classList.add('rating-button');
    }
    el.classList.remove('rating-button');
    el.classList.add('rating-button-actived');
    rating = Number(el.innerText);
    if(!submit.classList.contains('submit-button-actived')){
      submit.classList.add('submit-button-actived')
    }
  }
  if(el.classList.contains('submit-button-actived')){
    sessionStorage.setItem("rating", rating);
    window.location.href = "../html/thank-you-state.html";
  }
});
