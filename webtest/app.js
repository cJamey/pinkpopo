//app.js

var http=require('http');

http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/html'});
	res.write('<h1>Pinkpopo的世界</h1>');
	res.end('<p>等待pinkpopo更新最新的款式</p>');
}).listen(3000);

console.log("Http Server Is Listening at Port 3000.");