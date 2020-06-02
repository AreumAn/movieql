const ted = {
  id: "peaceB",
  name: "Ted",
  age: 25,
};

const resolvers = {
  Query: {
    user: () => ted,
  },
};

export default resolvers;
