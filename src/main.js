import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchPhotosByQuery } from './js/pixabay-api.js';
import { createGalleryItemMarkup } from './js/render-functions.js';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const loaderEl = document.querySelector('.js-loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

function onSearchFormSubmit(event) {
  event.preventDefault();
  const searchQuery = event.target.elements.searchKeyword.value.trim();

  if (searchQuery === '') {
    galleryEl.innerHTML = '';
    event.target.reset();
    iziToast.show({
      title: '✖',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      backgroundColor: 'red',
      position: 'topRight',
      titleColor: 'white',
      titleSize: '16px',
      titleLineHeight: '1.5',
      messageColor: 'white',
      messageSize: '16px',
      messageLineHeight: '1.5',
    });

    return;
  }
  galleryEl.innerHTML = '';
  loaderEl.classList.remove('is-hidden');
  fetchPhotosByQuery(searchQuery)
    .then(imagesData => {
      galleryEl.innerHTML = createGalleryItemMarkup(imagesData.hits);
      lightbox.refresh();
      if (!imagesData.hits || imagesData.hits.length === 0) {
        iziToast.show({
          title: '✖',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          backgroundColor: 'red',
          position: 'topRight',
          titleColor: 'white',
          titleSize: '16px',
          titleLineHeight: '1.5',
          messageColor: 'white',
          messageSize: '16px',
          messageLineHeight: '1.5',
        });
      }
    })
    .catch(error => console.log(error))
    .finally(() => {
      event.target.reset();
      loaderEl.classList.add('is-hidden');
    });
}

searchFormEl.addEventListener('submit', onSearchFormSubmit);
