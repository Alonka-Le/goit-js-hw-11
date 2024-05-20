import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const createGalleryItemMarkup = images => {
  return images
    .map(
      ({ webformatURL, tags, likes, views, comments, downloads }) =>
        `<div>
        <img
          src="${webformatURL}"
          alt="${tags}"
          class="gallery-img"
        />
       <ul class="content">
        <li class="text-content">Likes: ${likes}</li>
        <li class="text-content">Views: ${views}</li>
        <li class="text-content">Comments: ${comments}</li>
        <li class="text-content">Downloads: ${downloads}</li>
    </ul>
      </div>`
    )
    .join('');
};
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
