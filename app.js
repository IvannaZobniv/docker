const express = require('express');
const service = require('./fs.service');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const PORT = 5100;
app.listen(PORT, ()=>{
    console.log(`Server has started on PORT ${PORT} 🚀🚀🚀`);
});
app.get('/welcome', (req, res)=>{
    // console.log('WELCOME!!!!');
    res.send('WELCOME');
    // res.end()
});

// якщо хочемо отримати всіх юзерів
app.get('/users', async (req, res) => {
    const users = await service.reader();
    res.json(users);
});

// створити юзера
// app.post('/users', async(req, res)=>{
//     const {name, age ,gender} = req.body;
//
//     const users = await service.reader();
//     const newUser ={
//         id:users[users.length-1]?.id+1 || 1,
//         name,
//         age ,
//         gender,
//     }
//
//     users.push(newUser);
//     await service.writer(users);
//
//     res.status(201).json(newUser);
// })


// створити юзера з валідацією
app.post('/users', async(req, res)=>{
    const {name, age ,gender} = req.body;

    if (!name||name.length <= 2){
        res.status(400).json('Short name');
    }
    if (!age|| !Number.isInteger(age)|| Number.isNaN(age)){
        res.status(400).json('Is not a number');
    }
    if (!gender|| (gender !== 'male'&& gender !== 'female')){
        res.status(400).json('There is no such gender!');
    }
    const users = await service.reader();
    const newUser ={
        id:users[users.length-1]?.id+1 || 1,
        name,
        age ,
        gender,
    }
    users.push(newUser);
    await service.writer(users);
    res.status(201).json(newUser);
})

// якщо хочемо отримати одного юзера (фільтрація)
app.get('/users/:userId', async (req, res)=>{
    const { userId } = req.params;

    const users = await service.reader();
    const user = users.find((user) => user.id === + userId);

    if (!user){
        res.status(422).json(`User with id: ${userId} not found`);
    }
    res.json(user);
});

//якщо ми хочемо оновити юзера
app.put('/users/:userId', async (req, res)=>{
    const { userId } = req.params;
    const {name, age, gender} = req.body;

    if (name && name.length <= 2){
        res.status(400).json('Short name');
    }
    if (age && !Number.isInteger(age)|| Number.isNaN(age)){
        res.status(400).json('Is not a number');
    }
    if (gender && (gender !== 'male'&& gender !== 'female')){
        res.status(400).json('There is no such gender!');
    }

    const users = await service.reader();
    const index = users.findIndex((user)=>user.id === +userId);

    if(index ===-1){
        res.status(422).json(`User with id: ${userId} not found`);
    }
    users[index] = {...users[index],...req.body};
    await service.writer(users)
    res.status(201).json(users[index])
});

//якщо ми хочемо видалити юзера
app.delete('/users/:userId', async (req, res)=>{
    const { userId } = req.params;

    const users = await service.reader();
    const index = users.findIndex((user)=>user.id === +userId);
    if(index ===-1){
        res.status(422).json(`User with id: ${userId} not found`);
    }
    users.splice(index, 1);
    await service.writer(users);

    res.sendStatus(204)
})










