const User = require('../Models/User')
class UserController{
    create(req, res, next) {
        User.findOne({ username: req.body.username })
            .then(data => {
                if (data) {
                    res.send('tài khoản này đã tồn tại!!!')
                }
                else {                  
                    const user = new User(req.body)
                    user.save()
                        .then(() => res.send('insert data'))
                        .catch(next)
                }
            })
    }

    login(req, res, next) {
        
        User.findOne({
            username: req.body.username,
            password: req.body.password
        })
            .then(data => {
                if (data) {
                    res.json(data)
                    res.send('Đăng nhập thành công')
                }
                else {
                   res.status(500).json('Tên tài khoản hoặc mật khẩu không đúng')
                }
            })
    }

    show(req, res, next)
    {
        User.find({})
            .then(user => res.json(user))
            .catch(next)
    }

    searchUsername(req, res, next)
    {
        
        User.findOne({ username: req.params.username })
            .then(user => res.json(user))
            .catch(next)
    }

}

module.exports = new UserController