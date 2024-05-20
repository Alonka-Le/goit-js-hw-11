const API_KEY = '43978098-d09fb7acba53d53ccd7df38b1';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchPhotosByQuery = (q = 'dog') => {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q,
    orientation: 'horizontal',
    image_type: 'photo',
    safesearch: true,
  });

  return fetch(`${BASE_URL}?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json();
  });
};
