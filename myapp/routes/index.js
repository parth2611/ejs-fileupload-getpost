var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/process', function(req, res, next) {
  
  //req.body will print all the Body Contro Value
  console.log(req.body);
  //Store Textbox Value in Variable
  var mytxt1 = req.body.txt1;
  var mytxt2 = req.body.txt2;
  console.log("My Name is " + mytxt1);
  console.log("My Age is " + mytxt2);
  res.render('process', { title: "akash" });

});

router.get('/fileupload', function(req, res, next) {
  res.render('fileupload');
});

router.post('/fileuploadprocess', function(req, res, next) {
  //Debug
  console.log(req.files.file123);
  if (!req.files)
  return res.status(400).send('No files were uploaded.');

    //File Object
  let myfile = req.files.file123;
  let myfilename = req.files.file123.name;
  // Use the mv() method to place the file somewhere on your server
  myfile.mv("public/upload/"+myfilename, function(err) {
    if (err)
      return res.status(500).send(err);
   res.send('File uploaded!');
  });

});

module.exports = router;
