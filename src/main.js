import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const input = form.elements['search-text'];
const loadMoreBtn = document.querySelector('.load-button');

let page = 1;
let query = '';
const perPage = 15;
let totalHits = 0;

hideLoadMoreButton();
clearGallery();

form.addEventListener('submit', async event => {
  event.preventDefault();

  query = input.value.trim();
  page = 1;

  if (!query) {
    iziToast.error({ message: 'Please enter a search term!' });
    return;
  }
  hideLoadMoreButton();
  clearGallery();
  showLoader();

  try {
    const images = await getImagesByQuery(query, page);
    const { hits, totalHits: total } = images;
    totalHits = total;

    if (hits.length === 0) {
      iziToast.info({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }

    createGallery(hits);
    page += 1;

    if (totalHits > perPage) {
      showLoadMoreButton();
    }
  } catch (error) {
    iziToast.error({ message: 'Error fetching data. Try again later.' });
  } finally {
    hideLoader();
  }
  form.reset();
});

loadMoreBtn.addEventListener('click', async () => {
  showLoader();
  hideLoadMoreButton();

  try {
    const images = await getImagesByQuery(query, page);
    const { hits } = images;
    createGallery(hits);
    page += 1;

    if (page * perPage >= totalHits) {
      hideLoadMoreButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
      });
    } else {
      showLoadMoreButton();
    }

    setTimeout(() => {
      const { height: cardHeight } = document
        .querySelector('.gallery-item')
        .getBoundingClientRect();

      window.scrollBy({
        top: cardHeight * 3,
        behavior: 'smooth',
      });
    }, 100);
  } catch (error) {
    iziToast.error({ message: 'Error fetching data. Try again later.' });
  } finally {
    hideLoader();
  }
});
