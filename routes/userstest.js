var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.get('/', function (req, res, next) {
	var obj;
	fs.readFile('./db/usertest.json', 'utf8', function (err, data) {
		if (err) throw err;
		obj = JSON.parse(data);
		res.render('userstest', {
			title: 'Users List',
			data: obj.lists
		});
	});
});

module.exports = router;
