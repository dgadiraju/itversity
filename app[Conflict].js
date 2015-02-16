var express = require('express');
var app = express();

var hbs = require('hbs');

var itvEngine = require('./itversity');
var userCount = 0;

var mongo = require('mongodb');
var monk = require('monk');
var db = monk('ec2-52-0-11-138.compute-1.amazonaws.com:27017/itv_metrics');

var dateFormat = require('dateformat');

app.set('view engine', 'html');
app.engine('html', hbs.__express);
app.use(express.bodyParser());

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('index', {title: "IT Versity", entries: itvEngine.getItvEntries()});
    userCount++;
    
    var collection = db.get("itv_visits");
    var all = 1;
    collection.updateById(all, {$inc: {visit_count:1}});

    var now = new Date();
    var date = Number(dateFormat(now, "yyyymmdd"));
    collection.update({'_id': date}, {$inc: {visit_count:1}}, {upsert: true});

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
