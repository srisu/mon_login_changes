var express = require('express');
var router = express.Router();

//var dialog = require('dialog');


/* GET users listing. 
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
*/




router.post('/createusr', function(req, res)
 {
  var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
  MongoClient.connect(url,{ useNewUrlParser: true },function(err, db,){
    if (err) throw err;
    var dbo = db.db("mydb");
  var myobj = { name: req.body.username, password: req.body.pass, email : req.body.email ,mobile: req.body.mobile };
dbo.collection("users").insertOne(myobj, function(err, resp)
 {
  if (err)
  console.log("error");
  else {
    //res.writeHead(200,{"Content-Type": "text/plain"});
    res.render('./success');
          console.log("insert success");
          db.close(); 
        }
      });
    });
  })
  




router.post('/auth', function (req, res)
{
  var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
  MongoClient.connect(url,{ useNewUrlParser: true },function(err, db,){
    if (err) throw err;
      var dbo = db.db("mydb");
  var query = {"name" : req.body.username};

  dbo.collection("users").find({ $and: [ { "name" : req.body.username }, { "password" : req.body.pass }]} ).toArray(function(err,docs)
  {
    if(err) 
    console.log(err)
    else{
      
      
      var rs = JSON.stringify (docs);
      if (rs.length < 4){
        res.render('./failure');
        console.log(docs);
      }
        
       else{
        res.render('./success');
      //console.log(docs);
      }
      
    }
    
  });
  });
})


module.exports = router;
