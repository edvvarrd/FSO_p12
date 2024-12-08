require('dotenv').config()

const mongoURL = process.env.NODE_ENV === 'test' ? process.env.TEST_MONGODB_URL : process.env.MONGODB_URL
const PORT = process.env.PORT || 3000
module.exports = { mongoURL, PORT }
