const musicRouter = require('./music')
const userRouter = require('./user')
function Router(app) {
    app.use('/music', musicRouter )
    app.use('/user', userRouter )
}
module.exports = Router