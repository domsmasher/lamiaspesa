var DBM = require('../config/db'),
    UM = {};

DBM.users = DBM.db.collection('users');

exports.index = function (req, res) {
    res.redirect('/login/');
};

UM.manualLogin = function(user, pass, callback) {
    DBM.users.findOne({username:user}, function(e, u) {
        if (u === null){
            callback('user-not-found');
        } else{
            if (u.password === pass){
                callback(null, u);
            }	else{
                callback('invalid-password');
            }
        }
    });
};

exports.login = function (req, res) {
    res.render('login', { title: 'Hello', subheading: 'Please Login To Your Account' });
};


exports.access = function (req, res) {
    UM.manualLogin(req.param('user'), req.param('pass'), function(e, o){
        if (!o){
            res.send(e, 400);
        } else {
            req.session.user = o;
            res.redirect('/shop-items-list/');
        }
    });
};