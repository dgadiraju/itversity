var express = require('express');
var app = express();

var hbs = require('hbs');

var itvEngine = require('./itversity');
var userCount = 0;

var mongo = require('mongodb');
var monk = require('monk');
var db = monk('ec2-52-0-11-138.compute-1.amazonaws.com:27017/itv_metrics');

//var ipaddress = require('ipware')().get_ip;
app.set('view engine', 'html');
app.engine('html', hbs.__express);
app.use(express.bodyParser());

app.use(express.static('public'));

app.use(function(req,res,next){
    req.db = db;
    next();
});

app.get('/', function (req, res) {
    res.render('index', {title: "IT Versity", entries: itvEngine.getItvEntries()});
    userCount++;
    
    var collection = db.get("itv_visits");

    collection.update({_id: 1}, {$inc: {visit_count:1}});
    console.log("Visited " + userCount + " times");
//    console.log("ip address " + ipaddress);
    console.log("ip address " + req.connection.remoteAddress);
});

app.get('/about', function (req, res) {
    res.render('about', {title: "About Me"});
});

app.get('/article/:id', function (req, res) {
    var entry = itvEngine.getItvEntry(req.params.id);
    res.render('article', {title: entry.title, blog: entry});
});

app.listen(3000);
