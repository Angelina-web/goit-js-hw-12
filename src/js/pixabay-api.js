import axios from 'axios';

export async function getImagesByQuery(query, page = 1) {
  const API_KEY = '50799853-cb389a837cb73f28ab1cf5f3e';
  const BASE_URL = 'https://pixabay.com/api/';
  const params = new URLSearchParams ({
    key: API_KEY,
    q: query.trim(),
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: 15,
  });

  const response = await axios.get(BASE_URL, { params });
  return response.data;
}
