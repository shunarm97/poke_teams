const router = require('express').Router()

const { register } = require('../users/users.http')
const {loginUser} = require('./auth.http')

router.post('/login', loginUser)

router.post('/register', register)

exports.router = router