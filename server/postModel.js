const { Timestamp } = require('mongodb')
const mongoose = require('mongoose')
const schema = mongoose.Schema(
    {
        username: 'String',
        password: 'String',
        email: 'String',
        solved: 'String'
    },
    {timestamps: true}
)

const Post = mongoose.model('Post', schema);
module.exports = Post;
