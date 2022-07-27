const Music = require('../Models/Music')

class MusicController {
    show(req,res,next) {
        Music.find({})
            .then(music => {
                res.json(music)
            })
            .catch(next)
    }

    insert(req, res, next) {
        const song = new Music(req.body)
        song.save()
            .then(() => res.send('insert data'))
            .catch(next)
    }

    delete(req, res, next) {
        const id = req.params.id
        Music.findByIdAndRemove(id).exec()
            .then(() => res.send('deleted'))
            .catch(next)
    }

    edit(req, res, next) {
        Music.findById(req.params.id)
            .then((music) => res.json(music))
            .catch(next)
    }

    update(req, res, next) {
        const id = req.params.id
        Music.findByIdAndUpdate(id,req.body).exec()
            .then(() => res.send('updated'))
            .catch(next)
    }

    search(req, res, next) {
        var regex = new RegExp(req.params.slug, 'i')
        // Music.find({ singer: regex}).then(data => {
        //     res.status(200).json(data)
        // })
        Music.find(
            {
                "$or": [
                    { name: regex },
                    { singer: regex }
                ]
            }
        )
            .then(data => {
            res.json(data)
        })
    }

    
}

module.exports = new MusicController