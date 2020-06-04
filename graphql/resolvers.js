import { getUsers, getById, addUser } from "../db";

const resolvers = {
  Query: {
    users: () => getUsers(),
    user: (_, { id }) => getById(id),
  },
  Mutation: {
    addUser: (_, { name, age, gender }) => addUser(name, age, gender),
  },
};

export default resolvers;
