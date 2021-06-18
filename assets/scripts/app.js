const btnOpenModal = document.getElementById("add_movie");
const modal = document.getElementById("add-modal");
const cancelBtn = document.getElementById("cancel");
let backdrop = document.getElementById("backdrop");
const addMovie = document.getElementById('add');
const moviesCard = document.querySelector('#entry-text');
let ul = document.getElementById('movie-list');
localStorage.setItem('movies', '');
let movies = {};
let movieStore = [];

function listMovies(){
  if(movieStore.length === 0){
    moviesCard.style.display = 'hide';
  }
  // let li = document.createElement('li');
  ul.innerText = '';
}

function getMovies(){
  if(!localStorage.getItem('movies')){
    console.log('some');
  }

  let mvs = localStorage.getItem('movies');
  console.log(mvs);
}

/**
 within the modal
 */
addMovie.addEventListener('click', () => {
    const title = document.getElementById('title').value.trim();
    const img_url = document.getElementById('image-url').value.trim();
    const rating = document.getElementById('rating').value;
    if(isEmpty(title) || isEmpty(img_url)){
      alert('one is empty');
      // return;
    }
    if(rating < 1 || rating > 5 || isNaN(rating)){
      alert("A valid rating should be between 1 and 5");
      // return;
    }
    movies = {title:title, img: img_url, rating: rating}
    // movies.title = title;
    // movies.img = img_url;
    // movies.rating = rating;
    movieStore.push(movies);
    getMovies();
    localStorage.setItem('movies', JSON.stringify(movieStore));
    // alert(localStorage.getItem('movies'));

    showBackdrop();
    toggleModal();
})

btnOpenModal.addEventListener("click", () => {
  console.log(movieStore.length);
  toggleModal();
  showBackdrop();
});

function toggleModal(){
  modal.classList.toggle('visible');
}
function showBackdrop() {
  backdrop.classList.toggle("visible");
}
cancelBtn.addEventListener("click", () => {
showBackdrop();
  modal.classList.toggle("visible");
});
backdrop.addEventListener("click", () => {
showBackdrop();
  modal.classList.toggle("visible");
});

function isEmpty(str) {
  return (!str || str.length === 0 );
}


