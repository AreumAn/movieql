import axios from "axios";
const BASE_URL = "https://yts.am/api/v2/";
const MOVIE_LIST = `${BASE_URL}list_movies.json`;
const MOVIE_DETAIL = `${BASE_URL}movie_details.json`;

export const getMovies = async (limit, rating) => {
  const {
    data: {
      data: { movies },
    },
  } = await axios(MOVIE_LIST, {
    params: {
      limit,
      minimum_rating: rating,
    },
  });
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
