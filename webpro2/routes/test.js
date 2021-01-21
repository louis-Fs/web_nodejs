var express = require('express');
var router = express.Router();
var mysql = require('mysql');     //引入mysql模块
var connection = mysql.createConnection({      //创建mysql实例
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'root',
  database: 'source'
});
connection.connect();

router.get('/comment.html', function (req, res, next) {
  res.render('comment');
});
router.get('/contact.html', function (req, res, next) {
  res.render('contact');
});
router.get('/', function (req, res, next) {
  var sql1 = "SELECT * FROM house WHERE tag=?";
var data;
connection.query(sql1,[req.query.a] ,function (err, result) {
  if (err) {
    console.log('[INSERT ERROR]:', err.message);
  }
  var re = [];
    r = result;
    for (var i = 0; i < result.length; i++) {
      re.push(r[i]['city']);
      re.push(r[i]['tit']);
      re.push(r[i]['imgurl']);
      re.push(r[i]['tag']);
      re.push(r[i]['roomurl1']),
      re.push(r[i]['roomurl2']),
      re.push(r[i]['roomurl3']),
      re.push(r[i]['roomurl4']),
      re.push(r[i]['roomurl5'])
    }
    console.log(re);
  res.render('about',{data:re});
});
 
});
router.post('/', function (req, res) {
  
});

module.exports = router;
/* var result0;
  var sql = " SELECT * FROM cust  where nam =? ";
  connection.query(sql, [req.body.lg], function (err, result) {
    if (err) {
      console.log('[SELECT ERROR]:', err.message);
    }
    result0 = JSON.stringify(result);
    if (result0 == "[]") {
      var values = [
        [req.body.lg, req.body.pass, 100000000]
      ];
      var sql1 = "INSERT INTO cust(nam,pas,mon) VALUES ? ";
      connection.query(sql1, [values], function (err, result, fields) {
        if (err) {
          console.log('[INSERT ERROR]:', err.message);
        }
      });
      console.log("注册成功");
      //res.render('test',{name:req.body.user,pwd:req.body.pass, title: 'Express'} );
      res.render('res_su', { data: '注册成功' });
    } else {
      res.render('wrong1', { data: '账号已经存在' });
    }
  }); */