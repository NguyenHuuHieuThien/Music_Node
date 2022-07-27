const mongoose = require('mongoose')
// const slug = require('mongoose-slug-generator')
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

// mongoose.plugin(slug)
const User = new Schema({
    username: { type: String, maxLength: 255 },
    password: { type: String, maxLength: 600 },
    role: { type: String, default:'user' },
});

module.exports = mongoose.model('User', User)