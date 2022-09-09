const express = require('express');
const config = require('./config');
const userRouter = require('./users/users.router').router

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message: 'Bienvenido a mi API de equipos pokemon'})
})


app.use('/api/v1/users', userRouter)


app.listen(config.port, () => {
    console.log(`Server started at port ${config.port}`);
})
