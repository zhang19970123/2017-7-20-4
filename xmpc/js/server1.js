
var http=require('http');

var fs=require('fs');

var url=require('url');

http.createServer(function(req,res){
	
	var obj=url.parse(req.url,true).query;
	
	res.setHeader("Access-Control-Origin-Allow","*");
	
	res.writeHead(200,{"Content-Type":"text/plain; charset=utf-8"});
	
    var a=fs.readFileSync('../data/index.json');
    
	obj.callback=obj.callback||"name";
	
	a=obj.callback+"("+a+")";
	
	res.end(a);
	
}).listen(8080);
console.log('成功');
