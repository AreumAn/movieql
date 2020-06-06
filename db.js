import axios from "axios";
const MOVIE_LIST = "https://yts.am/api/v2/list_movies.json";

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
