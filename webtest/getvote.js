var http = require('http')
var path1 = '/vote1205/vote?pid=10120&rid=231609&from=timeline&isappinstalled=0&callback=jsonp138181';
var xxx='';
var a=b=c=d=h=f=g=j='';
for(i=0;i<100;i++){
	a=parseInt(Math.random()*10+1);
	b=parseInt(Math.random()*10+1);
	c=parseInt(Math.random()*10+1);
	d=parseInt(Math.random()*10+1);
	g=parseInt(Math.random()*10+1);
	f=parseInt(Math.random()*10+1);
	h=parseInt(Math.random()*10+1);
	j=parseInt(Math.random()*10+1);
	xxx=a+''+b+''+c+''+d+''+h+''+f+''+g+''+j;
	var path2=path1+xxx;
	var options = {
		host: 'vote0.cztv.com',
		path: path2,
		method: 'GET'
	};

	var request_timeout = null;

	request_timeout = setTimeout(function() {
    	request_timeout = null;
    	access_req.abort();
    	console.log('mission abort!');
	}, 1000);

	var access_req = http.request(options, function(res){
		res.setEncoding('utf8');
		clearTimeout(request_timeout);
		res.on('data', function(chunk) {
			console.log('path:'+path2);
			console.log("Body chunk: " + chunk);
		}).on('error',function(e){
			console.log('path:'+path2);
			console.log("Got error:" + e.message);
		}).on('socket', function(socket){
			socket.setTimeout(myTimeout);
			socket.on('timeout', function(){
				access_req.abort();
			});
		});
	}).on('error', function(err) {
    	if(request_timeout) {
            clearTimeout(request_timeout);
        }
    	access_req.abort();
    });
	access_req.end();
}