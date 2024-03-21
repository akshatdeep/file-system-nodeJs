var express = require('express');
var router = express.Router();
const path = require('path')
const fs = require("fs");
const { render } = require('ejs');


const globlepath = path.join(__dirname,"../","public","uploads","")



/* GET home page. */
router.get('/', function(req, res, next) {
  const filename =fs.readdirSync(globlepath)
  res.render('index',{filename:filename});
  
});

router.get("/file/:filename",(req, res)=>{
    
})


router.post('/create', function(req, res, next) {
  const {filename} = req.body
  fs.writeFileSync(path.join(globlepath,filename),"")
  res.render("index")
});





module.exports = router;
