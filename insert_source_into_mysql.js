var fs = require('fs');
var mysql = require('mysql');     //引入mysql模块
var connection = mysql.createConnection({      //创建mysql实例
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'source'
});
connection.connect();
/* var city='chengdu';
var sql = "SELECT * from house where city='"+city+"' and buy=0 ORDER BY RAND() LIMIT 20";
connection.query(sql, function (err, result) {
    if (err) {
      console.log('[SELECT ERROR]:', err.message);
    }
    if(result.length<10){
        console.log(546565);
    }
    console.log(JSON.stringify(result));  //数据库查询结果返回到result中
  }); */
 var citygroup = ['chengdu',
    'chongqing', 'guangzhou',
    'hangzhou', 'shanghai',
    'wuhan', 'xian', 'beijing'
]
citygroup.forEach(city => {
    var lineReader = require('readline').createInterface({
        input: fs.createReadStream('city/' + city + '.txt') // 建立 txt 文件的读取流
    });
    
    lineReader.on('line', function (line) {  //按行对读取流内容进行操作
        var rst = line.split(/,/, 3);
        var n = rst.length;
        //console.log(rst);
        //console.log(rst[1]);
        if (n == 3) {
            var tag = rst[2].match((/[0-9]+/g));
            if (tag != null) {
                if (tag.length == 1) {
                    if (tag[0].length > 4) {
                        var values = [
                            [city,rst[0], rst[1], tag[0], 0]
                        ];
                        var sql1 = "INSERT INTO house(city,tit,imgurl,tag,buy) VALUES ? ";
                        connection.query(sql1, [values], function (err, result, fields) {
                            if (err) {
                                consolse.log('[INSERT ERROR]:', err.message);
                            }
                        });
                        var sql = 'SELECT * FROM house';
                        connection.query(sql, function (err, result) {
                            if (err) {
                                console.log('[SELECT ERROR]:', err.message);
                            }
                            console.log(result);  //数据库查询结果返回到result中
                        });
                    }
                }
            }

        }
    });
}); 
/* connection.end(function (err) { }); */