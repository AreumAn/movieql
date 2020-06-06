import { getMovies, getMoive } from "../db";

const resolvers = {
  Query: {
    movies: (_, { limit, rating }) => getMovies(limit, rating),
    movie: (_, { id }) => getMoive(id),
  },
};

export default resolvers;
