
var http = require("http");
var fs = require("fs");

http.createServer(function (req,res) {

    res.writeHead(200,{"Content-Type":"text/plain;charset=utf-8"});

    var a = fs.readFileSync("../data/index.json");

    /*
    * 服务器的原理是 函数执行，并且传递实参（参数格式一般为json格式）
    * */
    a = "foo("+a+")";

    res.end(a);

}).listen(8080);