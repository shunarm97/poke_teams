const jwt = require('jsonwebtoken')

const authControlles = require('../auth/auth.controllers')

const loginUser = (req, res) => {
    const data = req.body

    if(!data.email || !data.password){
        return res.status(400).json({message:"missing data"})
    }

    const response = authControlles.login(data.email, data.password)

    if(response) {
        const token = jwt.sign({
            id: response.id,
            email:response.email
        }, 'academlo')
        res.status(200).json({message: 'tus credenciales son exitosas ', token})
    } else {
        return res.status(401).json({message: 'invalid credentials'})
    }
}


exports.loginUser = loginUser