export const user = [
  {
    id: 1,
    name: "Ted",
    age: 25,
  },
  {
    id: 2,
    name: "Amy",
    age: 20,
  },
  {
    id: 3,
    name: "Dave",
    age: 30,
  },
];

export const getById = (id) => {
  const filteredUser = user.filter((user) => user.id === id);
  return filteredUser[0];
};
