const express = require('express');
const path = require('path');
const app = express();
const port = 8080;
// const morgan = require('morgan');
// const { engine } = require('express-handlebars');
app.use(express.json())
const mongoose = require('mongoose')
const db = require('./DB/ConnectDB')
const cors = require('cors')
const route = require('./routes')

app.use(cors())
db.Connect()

route(app)
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
