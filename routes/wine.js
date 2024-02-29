var express = require('express');
var router = express.Router();
const wineCtrl = require('../controllers/wine')

// all of these routes are prepended with /wine
// because of this line of code in the server.js
// app.use('/wine', wineRouter);


router.get('/', wineCtrl.index)

router.get('/new', wineCtrl.new)

router.post('/', wineCtrl.create)

router.delete('/:id', wineCtrl.delete)

router.get('/:id/edit', wineCtrl.edit)

module.exports = router;