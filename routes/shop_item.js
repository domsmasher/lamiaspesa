var DBM = require('../config/db'),
    utils = require('../config/utils'),
    moment = require('moment'),
    shop_item;

DBM.shop_item = DBM.db.collection('shop_item');

var getItems = function (next) {
    DBM.shop_item.count(function (e, number){
        shop_item = number;
        next();
    });

};

exports.newItem = function (req, res) {
    if (req.session.user){
        res.render('addItem', { title: 'Add new item!', okTitle: ''});
    } else {
        res.redirect('/login/');
    }
};

exports.saveItem = function (req, res) {

    utils.wait([getItems],  function () {
        var object_to_insert = {
            id: (+shop_item + 1),
            name: req.body.name,
            area: req.body.area,
            priority: req.body.priority,
            shop: req.body.shop,
            insert_date: new Date(),
            modify_date: new Date()
        };

        DBM.shop_item.insert( object_to_insert, {safe:true}, function(err){
            if(err) {
                console.log('ERRORE');
            }
            res.render('addItem', { title: 'Add a new recipe!', okTitle: 'Well done!' });
        });
    });
};

exports.list = function(req, res){
    DBM.shop_item.find().toArray(function (err, recipes) {
        var fakeJson = { lists: recipes };
        res.json(fakeJson);
    });
};