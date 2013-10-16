var http = require('http')
  , path1 = '/vote1205/vote?pid=10120&rid=230397&from=timeline&isappinstalled=0&callback=jsonp138185'
  , abortCount = 0;
function urlget(callback) {
    var options = { host: 'vote0.cztv.com',
            path: path2,
            method: 'GET' };

    var req = null, request_timeout = null;
    request_timeout = setTimeout(function() {
    	request_timeout = null;
    	req.abort();
    	//console.log('mission abort!');
	}, 2000);
//
    req = http.request(options, function(res) {
        clearTimeout(request_timeout);
        var chunks = [], length = 0;
        res.on('data', function(chunk) {
            length += chunk.length;
            chunks.push(chunk);
        }).on('end', function() {
            var data = new Buffer(length), pos = 0
              , l = chunks.length;
            for(var i = 0; i < l; i++) {
                chunks[i].copy(data, pos);
                pos += chunks[i].length;
            }
            res.body = data;
            callback(null, res);
        }).on('error', function(err) {
            callback(err, res);
        });
    }).on('error', function(err) {
        if(request_timeout) {
            clearTimeout(request_timeout);
            callback(err);
            abortCount = abortCount + 1;
        }
    });
    req.end();
}

var util = require('util');
var xxx=''
, a=b=c=d=h=f=g=j='';
for(i=0;i<200;i++){
	a=parseInt(Math.random()*10+1);
	b=parseInt(Math.random()*10+1);
	c=parseInt(Math.random()*10+1);
	d=parseInt(Math.random()*10+1);
	g=parseInt(Math.random()*10+1);
	f=parseInt(Math.random()*10+1);
	h=parseInt(Math.random()*10+1);
	j=parseInt(Math.random()*10+1);
	xxx=a+''+b+''+c+''+d+''+h+''+f+''+g+''+j;
	path2 = path1 + xxx;

	urlget(function(err, res) {
//	    console.log('\nGET', path2);
	    if(err) {
//	        console.log('error:', util.inspect(err, true), '\nResponse:\n', res ? res.headers : null);
	    } else {
//	        console.log('Headers:\n', res.headers, '\nBody:\n', res.body.toString());
//			console.log("成功");
	    }
	});
}



