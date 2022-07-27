const express = require('express');
const router = express.Router();
const MusicController = require('../app/Controllers/MusicController')

router.get('/', MusicController.show)
router.post('/insert', MusicController.insert)
router.get('/search/:slug', MusicController.search)
router.get('/edit/:id', MusicController.edit)
router.delete('/delete/:id', MusicController.delete)
router.put('/update/:id', MusicController.update)

module.exports = router