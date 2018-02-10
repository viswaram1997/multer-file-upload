var chalk =require("chalk"),
  bodyParser = require("body-parser"),
  express = require("express"),
  cors = require("cors")
  multer= require('multer'),
  path = require('path');
  var fs = require('fs');
  var nanoid = require('nanoid')
let app=express();
app.use(bodyParser.json());
app.use(cors());

var  storage = multer.diskStorage({
  destination: path.join(__dirname, '/uploads'),
  filename: function (req, file, cb) {
      cb(null,  nanoid(10)+path.extname(file.originalname));
  }
});
var upload = multer({storage: storage});
app.post('/fileupload',upload.single('file'),(req,res)=>{
  var path=req.file.path;
    res.json({path});

} )
app.get('/',(req,res)=>{
  console.log("viswa")
})


app.set('port', process.env.PORT || 7000);
app.set('host', process.env.HOST || '192.168.43.160');

app.listen(app.get('port'),  function(){
  console.log("Express server listening on port " + app.get('port')+ app.get('host'));
});
