import { getUsers, getById, addUser, deleteUser } from "../db";

const resolvers = {
  Query: {
    users: () => getUsers(),
    user: (_, { id }) => getById(id),
  },
  Mutation: {
    addUser: (_, { name, age, gender }) => addUser(name, age, gender),
    deleteUser: (_, { id }) => deleteUser(id),
  },
};

export default resolvers;
