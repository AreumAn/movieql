import { user, getById } from "../db";

const resolvers = {
  Query: {
    users: () => user,
    user: (_, { id }) => getById(id),
  },
};

export default resolvers;
