import express from "express";
const router = express.Router();


const users = [
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

router.get("/", (req, res) => {
  console.log(users);

  res.send(users);
});

export default router;