var express = require('express');
var router = express.Router();

//var dialog = require('dialog');


/* GET users listing. 
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
*/

router.get('/pay', function(req, res, next) {
  res.render('payment', { title: 'Express' });
});


router.post('/createusr', function(req, res)
 {
  var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
  MongoClient.connect(url,{ useNewUrlParser: true },function(err, db,){
    if (err) throw err;
    var dbo = db.db("mydb");
  var myobj = { name: req.body.username, password: req.body.pass, email : req.body.email ,mobile: req.body.mobile,type: req.body.type };
  //console.log(req.body.type);
dbo.collection("users").insertOne(myobj, function(err, resp)
 {
  if (err)
  console.log("error");
  else {
    //res.writeHead(200,{"Content-Type": "text/plain"});
    res.render('./suc-login');
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
  dbo.collection("users").find({ $and: [ { "name" : req.body.username }, { "password" : req.body.pass },{ "type" : req.body.typecheck }]} ).toArray(function(err,docs)
  {
    if(err) 
    console.log(err)
    else{
      
      
      var rs = JSON.stringify (docs);
      if (rs.length < 4){
        res.render('./failure');
        //console.log(docs);
      }
        
       else{
        res.render('./details');
      //console.log(docs);
      }
      
    }
    
  });
  });
})


router.post('/updtusr', function(req, res)
  {
   var MongoClient = require('mongodb').MongoClient;
 var url = "mongodb://localhost:27017/";
   MongoClient.connect(url,{ useNewUrlParser: true },function(err, db,){
     if (err) throw err;
     var dbo = db.db("mydb");
     dbo.collection("users").findOneAndUpdate({"mobile":req.body.mobile },
      {$set: {"city":req.body.address,"age":req.body.age,"license":req.body.license,"prefertime":req.body.timings}},(function(err,docs)
     {
       if(err) 
       console.log(err)
       else{
         //console.log(docs);
         var rs = JSON.stringify (docs);
         //console.log(docs.value);
         if (docs.value==null){
           res.render('./failure-upd');
         }
         else 
         {
           res.render('./payamt');
           db.close();
         }




     }
     })
 )}
   )});


module.exports = router;