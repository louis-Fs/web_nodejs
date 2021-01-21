var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser');
var mysql = require('mysql');     //引入mysql模块
var connection = mysql.createConnection({      //创建mysql实例
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'root',
  database: 'source'
});
connection.connect();
router.use(bodyparser.urlencoded({ extended: false }));
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});
router.get('/city.html', function (req, res, next) {
  var ress;
  var sql1 = "SELECT * FROM house WHERE city=? and buy=0 ORDER BY RAND() LIMIT 50";
  connection.query(sql1, [req.query.city], function (err, result) {
    if (err) {
      console.log('[INSERT ERROR]:', err.message);
    }
    var r = [];
    ress = result;
    for (var i = 0; i < result.length; i++) {
      var re = [];
      re.push(ress[i]['city']);
      re.push(ress[i]['tit']);
      re.push(ress[i]['imgurl']);
      re.push(ress[i]['tag']);
      r.push(re);
    }
    res.render('city', { data:r});
  });

});
router.get('/xqxq.html', function (req, res, next) {
  res.render('xqxq');
});
router.get('/aby.html', function (req, res, next) {
  res.render('aby');
});
router.get('/aibiyin.html', function (req, res, next) {
  res.render('aibiyin');
});
router.get('/ditu.html', function (req, res, next) {
  res.render('ditu');
});
router.post('/', function (req, res) {
  var result0;
  var result1;
  var result2;
  var sql = " SELECT * FROM cust  where nam =? ";
  connection.query(sql, [req.body.user], function (err, result) {
    if (err) {
      console.log('[SELECT ERROR]:', err.message);
    }
    result0 = JSON.stringify(result);
    if (result0 != "[]") {
      console.log(result0.split(/"/, 10)[9] + req.body.pass);
      if (result0.split(/"/, 10)[9] == req.body.pass) {

        res.render('home', { data: '11' });
      } else {
        res.render('wrong', { data: '密码有误' });
      }

    } else {
      res.render('wrong', { data: '账号不存在' });
    }
  });
});

module.exports = router;
