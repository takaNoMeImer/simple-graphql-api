const mongoose = require('mongoose')
require('dotenv').config()

try {
    mongoose.connect(process.env.MONGODB)
    mongoose.set('strictQuery', true)
    console.log('Success connection');
} catch (error) {
    handleError(error)
    console.log('Error connection');
}

module.exports = { mongoose }