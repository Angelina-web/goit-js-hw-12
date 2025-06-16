import axios from 'axios';

export default function getImagesByQuery(query) {
  const API_KEY = '50799853-cb389a837cb73f28ab1cf5f3e';
  const BASE_URL = 'https://pixabay.com/api/';
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  return axios.get(BASE_URL, { params }).then(response => response.data);
}
