var mongo = require('mongodb'),
    Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure,
    DBM = {},
    dbPort,
    dbHost,
    dbName;

if(process.env.VCAP_SERVICES) {
    var env = JSON.parse(process.env.VCAP_SERVICES);
    var credentials = env['mongodb-1.8'][0]['credentials'];
    dbPort = credentials.port;
    dbHost = credentials.hostname;
    dbName = credentials.db;
} else{
    dbPort = 27017;
    dbHost = 'localhost';
    dbName = 'test';
}

DBM.db = new Db(dbName, new Server(dbHost, dbPort, {auto_reconnect: true}, {}));
DBM.db.open(function(e, d){
    if (e) {
        console.log(e);
    }	else{
        console.log('connected to database :: ' + dbName);
    }
});

module.exports = DBM;