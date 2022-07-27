const mongoose = require('mongoose')
// const slug = require('mongoose-slug-generator')
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

// mongoose.plugin(slug)
const Music = new Schema({
    name: { type: String, maxLength: 255 },
    singer: { type: String, maxLength: 600 },
    author: { type: String, maxLength: 255 },
    links: { type: String, slug: 'name', unique: true },
    poster: { type: String },
    year: {type: Number}

});

module.exports = mongoose.model('Music', Music)