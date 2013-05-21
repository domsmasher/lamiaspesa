var DBM = require('../config/db'),
    utils = require('../config/utils'),
    moment = require('moment');

exports.newItem = function(req, res){
    res.render('index', { title: 'Express' });
};