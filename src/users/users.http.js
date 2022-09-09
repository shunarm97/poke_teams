const { restart } = require('nodemon')
const userControllers = require('./users.controllers')

const getAll = (req, res) => {
    const data = userControllers.getAllUsers()
    return res.status(200).json({items: data.length, users: data})
}

const getById = (req, res) => {
    const id = req.params.id
    const data= userControllers.getUserById(id)
    if(data) {
        return res.status(200).json(data)
    } else {
        return res.status(404).json({message: "invalid id"})
    }
}

const register = (req, res) => {
    const data = req.body
    if(
        !data.name ||
        !data.email ||
        !data.password
    ) {
        return res.status(400).json({message: 'all finds must be completed',
        field: {
            name: 'string',
            email: 'example@example.com',
            password: 'example'
        }})
    } else {
        const response = userControllers.createUser(data)
        return res.status(201).json({message: `user created succesfully with ${response.id}`,
        user: response
     })
    }
}

const remove = (req, res) => {
    const id = req.params.id
    const data = userControllers.deleteUser(id)

    if(data) {
        return res.status(204).json()
    } else {
        return res.status(400).json({message: 'invalid id'})
    }
}

const edit = (req, res) => {
    const data = req.body
    const id = req.params.id
    if(
        !data.name ||
        !data.email ||
        !data.password
    ) {
        return res.status(400).json({message: 'all finds must be completed',
        field: {
            name: 'string',
            email: 'example@example.com',
            password: 'example'
        }})
    } else {
        const response = userControllers.editUser(id, data)
        return res.status(200).json({message: 'users edited succesfully',
        user: response
        })
    }
}



module.exports = {
    getAll,
    getById,
    register,
    remove,
    edit
}