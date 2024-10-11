import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/';

interface ParamsInt {
  data: {
    query: string;
    page: number;
    per_page: number;
    client_id: string;
  };
}

export const getImageGallery = async <T>(
  topic: string,
  currentPage: number
): Promise<T> => {
  const response = await axios.get<T>('/search/photos', {
    params: {
      query: topic,
      page: currentPage,
      per_page: 12,
      client_id: 'KjDIsgBCRQFc8bk42FNkPh8nD-Kf9Y7Q_8TKQDxW5As',
    },
  });
  return response.data;
};
