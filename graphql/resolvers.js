import { getMovies, getMoive, getSuggestions } from "../db";

const resolvers = {
  Query: {
    movies: (_, { limit, rating }) => getMovies(limit, rating),
    movie: (_, { id }) => getMoive(id),
    movieSuggestions: (_, { id }) => getSuggestions(id),
  },
};

export default resolvers;
