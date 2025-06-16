import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const lightbox = new SimpleLightbox('.gallery a');

export function createGallery(images) {
  const markup = images
    .map(
      img => `
      <li class="gallery-item">
      <a href="${img.largeImageURL}">
          <img src="${img.webformatURL}" alt="${img.tags}" />
        </a>
        <div class="info">
        <ul>
          <li>Likes: ${img.likes}</li>
          <li>Views: ${img.views}</li>
          <li>Comments: ${img.comments}</li>
          <li>Downloads: ${img.downloads}</li>
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
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.style.display = 'block';
  }
}

export function hideLoader() {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.style.display = 'none';
  }
}
