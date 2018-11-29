var express = require('express');
var path = require('path');
var mysql=require('mongodb');
var sqlstring=require('sqlstring');
var app=express();
var bp=require('body-parser');

//database connection
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');





// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
MongoClient.connect(url,{ useNewUrlParser: true },function(err, db,) {
  if (err) throw err;
  console.log("Connection Success");
  db.close();
});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
app.listen(1337,function(){
  console.log('Node.js server running @localhost:1337')
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);


app.get('/index', function(req, res){
  res.render('index');
});



module.exports = app;
