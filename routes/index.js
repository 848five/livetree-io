var express = require('express');
var io = require('socket.io');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res) {
	 console.log('index.js -----------');
	 res.render('index');
	
});

module.exports = router;
