var express = require('express');
var router = express.Router();
const wineCtrl = require('../controllers/wine')
const isLoggedIn = require('../config/auth')

// all of these routes are prepended with /wine
// because of this line of code in the server.js
// app.use('/wine', wineRouter);


router.get('/', isLoggedIn, wineCtrl.index)

router.get('/new', wineCtrl.new)

router.post('/', wineCtrl.create)

router.delete('/:id', wineCtrl.delete)

router.get('/:id/edit', wineCtrl.edit)

router.put('/:id', wineCtrl.update)

module.exports = router;
