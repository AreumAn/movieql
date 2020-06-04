export let users = [
  {
    id: 0,
    name: "Andrea",
    age: 27,
    gender: "female",
  },
  {
    id: 1,
    name: "Ted",
    age: 25,
    gender: "female",
  },
  {
    id: 2,
    name: "Amy",
    age: 20,
    gender: "female",
  },
  {
    id: 3,
    name: "Dave",
    age: 30,
    gender: "male",
  },
  {
    id: 4,
    name: "Dave",
    age: 18,
    gender: "male",
  },
  {
    id: 5,
    name: "Eric",
    age: 28,
    gender: "male",
  },
  {
    id: 6,
    name: "Sam",
    age: 22,
    gender: "male",
  },
  {
    id: 7,
    name: "Anne",
    age: 21,
    gender: "Female",
  },
];

export const getUsers = () => users;

export const getById = (id) => {
  const filteredUser = users.filter((user) => user.id === id);
  return filteredUser[0];
};

export const addUser = (name, age, gender) => {
  const newUser = {
    id: users.length + 1,
    name,
    age,
    gender,
  };
  users.push(newUser);
  return newUser;
};
