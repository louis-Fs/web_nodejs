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
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('res');
});
router.post('/', function (req, res) {
  var result0;
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
  });
});

module.exports = router;
