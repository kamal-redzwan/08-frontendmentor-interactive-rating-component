const card = document.querySelector('.card');
const ratings = document.querySelectorAll('.rating');
const submit = document.querySelector('.submit');

let ratingNum;

ratings.forEach((rating) => {
  // add click event listener to the rating button
  rating.addEventListener('click', function () {
    // remove selected class to the other rating button if they have the class
    ratings.forEach((rating) => rating.classList.remove('selected'));

    // add selected class to the clicked button
    rating.classList.add('selected');

    // add the text content to the variable ratingNum
    ratingNum = rating.textContent;
    // console.log(ratingNum);
  });
});

function thankYou() {
  const thankYouCard = null;
}
