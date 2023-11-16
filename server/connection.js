const mongoose = require('mongoose')
require('dotenv').config();
const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@codepractoce.lquwesn.mongodb.net/UserData?retryWrites=true&w=majority`
const connection = mongoose.connect(uri).then(() => console.log('connected to cloud Atlas'))
.catch((err) => console.log(err))

module.exports = connection