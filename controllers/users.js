let users = [
  {
    id: 1,
    name: "James Berry",
    occupation: "Doctor",
    email: "jamesberry@gmail.com",
    age: 27,
  },
  {
    id: 2,
    name: "Sam Fisher",
    occupation: "Teacher",
    email: "samfisher@gmail.com",
    age: 25,
  },
  {
    id: 3,
    name: "John Smith",
    occupation: "Engineer",
    email: "johnsmith@gmail.com",
    age: 28,
  },
  {
    id: 4,
    name: "Peter Cash",
    occupation: "Electrician",
    email: "petercash@gmail.com",
    age: 27,
  },
  {
    id: 5,
    name: "Sonny Lee",
    occupation: "Producer",
    email: "sonnylee@gmail.com",
    age: 30,
  },
];

export const createUser = (req, res) => {
  const user = req.body;

  users.push(user);

  res.send(`User with the name ${user.name} added to the database!`);
};

export const getUsers = (req, res) => {
  res.send(users);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id != id);

  res.send(`User with the id ${id} deleted from the database.`);
};

export const getUser = (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id == id);

  res.send(foundUser);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, occupation, email, age } = req.body;

  const userToUpdate = users.find((user) => user.id == id);

  if (name) userToUpdate.name = name;
  if (occupation) userToUpdate.occupation = occupation;
  if (email) userToUpdate.email = email;
  if (age) userToUpdate.age = age;

  res.send(`User with the id ${id} has been updated`);
};
