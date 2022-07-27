const mongoose = require('mongoose')
async function Connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/Thien');
        console.log('connect successfully !!!');
    } catch (error) {
        console.log('connect failure !!!');
    }

}

module.exports = { Connect }