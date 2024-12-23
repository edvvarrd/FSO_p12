const usersRouter = require('express').Router()
const User = require('../models/user')
const bcrypt = require('bcryptjs')

usersRouter.post('/', async (request, response) => {
	const { username, name, password } = request.body
	if (!password) {
		return response.status(400).json({
			error: 'User validation failed: password is required.',
		})
	} else if (password.length < 3) {
		return response.status(400).json({
			error: 'User validation failed: password is too short.',
		})
	}
	const saltRounds = 10
	const passwordHash = await bcrypt.hash(password, saltRounds)

	const user = new User({
		username,
		name,
		passwordHash,
	})

	const savedUser = await user.save()

	response.status(201).json(savedUser)
})

usersRouter.get('/', async (request, response) => {
	const users = await User.find({}).populate('blogs', { user: 0 })
	response.json(users)
})
module.exports = usersRouter
