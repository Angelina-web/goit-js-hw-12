import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const lightbox = new SimpleLightbox('.gallery a');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-button');

export function createGallery(images) {
  const markup = images
    .map(
      ({
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
      <li class="gallery-item">
      <a href="${largeImageURL}">
          <img src="${webformatURL}" alt="${tags}" />
        </a>
        <div class="info">
        <ul>
          <li>Likes: ${likes}</li>
          <li>Views: ${views}</li>
          <li>Comments: ${comments}</li>
          <li>Downloads: ${downloads}</li>
          </ul>
        </div>
      </li>
    `
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  if (loader) {
    loader.classList.remove('hidden');
  }
}

export function hideLoader() {
  if (loader) {
    loader.classList.add('hidden');
  }
}

export function showLoadMoreButton() {
  loadMoreBtn.classList.remove('hidden');
}

export function hideLoadMoreButton() {
  loadMoreBtn.classList.add('hidden');
}
