import fs from "fs"
import express, { Request, Response } from "express";

const app = express();
//
// app.use(express.json());

const PORT = 5100;
app.listen(PORT, () => {
  console.log(`Server has started on PORT ${PORT} 🚀🚀🚀`);
});

// app.post()
// app.put()
// app.patch()
// app.delete()

// app.get('/welcome', (req, res)=>{
//     console.log('WELCOME!!!!');
//     res.send('WELCOME');
//     res.end()
// });

const users = [
  {
    name: "Oleh",
    age: 19,
    gender: "male",
  },
  {
    name: "Anton",
    age: 22,
    gender: "female",
  },
  {
    name: "Anya",
    age: 25,
    gender: "female",
  },
  {
    name: "Ilizavetta",
    age: 35,
    gender: "female",
  },
  {
    name: "Cocos",
    age: 70,
    gender: "mixed",
  },
];

// якщо хочемо отримати всіх юзера
app.get("/users", (req: Request, res: Response) => {
  res.json(users);
});

// якщо хочемо отримати одного юзера (фільтрація)
app.get("/users/:userId", (req, res) => {
  const { userId } = req.params;
  const user = users[+userId - 1];

  res.json(user);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// створити юзера
app.post("/users", (req, res) => {
  const body = req.body;
  users.push(body);
  console.log(body);

  res.status(201).json({
    message: "User created!",
  });
});
//якщо ми хочемо оновити юзера
app.put("/users/:userId", (req, res) => {
  const { userId } = req.params;
  const updatedUser = req.body;

  users[+userId] = updatedUser;

  res.status(200).json({
    message: "User updated",
    data: users[+userId],
  });
});
//якщо ми хочемо видалити юзера
app.delete("/users/:userId", (req, res) => {
  const { userId } = req.params;

  users.splice(+userId, 1);

  res.status(200).json({
    message: "User deleted",
  });
});
