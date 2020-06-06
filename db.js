import axios from "axios";
const BASE_URL = "https://yts.am/api/v2/";
const MOVIE_LIST = `${BASE_URL}list_movies.json`;
const MOVIE_DETAIL = `${BASE_URL}movie_details.json`;

export const getMovies = async (limit, rating) => {
  let REQUEST_URL = MOVIE_LIST;
  if (limit > 0) {
    REQUEST_URL += `?limit=${limit}`;
  }
  if (rating > 0) {
    REQUEST_URL += `&minimum_rating=${rating}`;
  }
  const {
    data: {
      data: { movies },
    },
  } = await axios(REQUEST_URL);
  return movies;
};

export const getMoive = async (id) => {
  const {
    data: {
      data: { movie },
    },
  } = await axios(MOVIE_DETAIL, {
    params: {
      movie_id: id,
    },
  });
  return movie;
};
