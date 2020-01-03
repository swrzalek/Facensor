var express = require('express');
var router = express.Router();
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
var faceapi = require('../service/faceapi')
var storage = multer.memoryStorage();
var upload = multer({storage: storage})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  
});

const accecptRequirments = () => {
  return (req, res, next) => {
    if(req.file.size > 5000000) {
      console.log(req.file.size);
      res.status(400).send('File does not meet the requirements!')
    } else {
      next();
    }
  }
};
router.post('/fapi/upload', upload.single('inputImage'), accecptRequirments(), function(req, res, next ) {
  faceapi.fapi(req.file.buffer).then(x => {
    if(x) {
      res.writeHead(200, {
        'Content-Type': 'image/jpeg',
        'Content-Length': x.length
       });
       res.end(x);
    }
    res.status(400).send('Face not recognised!')     
  }
  );
})

module.exports = router;
