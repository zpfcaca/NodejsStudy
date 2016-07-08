//var http = require("http");
//var fs = require("fs");
//
//var str='{"id":"123",name:"jack",arg:11111}';
//
//function onRequest(request, response){
//console.log("Request received.");
//response.writeHead(200,{"Content-Type":'text/plain','charset':'utf-8','Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods':'PUT,POST,GET,DELETE,OPTIONS'});//可以解决跨域的请求
////response.writeHead(200,{"Content-Type":'application/json',            'Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods':'PUT,POST,GET,DELETE,OPTIONS'});
////response.write("Hello World 8888\n");
//
//str=fs.readFileSync('data.txt');
//response.write(str);
//response.end();
//}
//var app = express.createServer();
//http.createServer(onRequest).listen(8888);
//
//console.log("Server has started.port on 8888\n");
//console.log("test data: "+str.toString());

var http = require('http');
var fs = require('fs');
var util = require('util');
var querystring = require('querystring');

fs.readFile('./index.html', function(err, html) {
	if (err) {
		throw err;
	}

	http.createServer(function(request, response) {

		// console.log('Request received: ');
		//  util.log(util.inspect(request)) // this line helps you inspect the request so you can see whether the data is in the url (GET) or the req body (POST)
		// util.log('\n\nRequest recieved: \nmethod: ' + request.method + '\nurl: ' + request.url) // this line logs just the method and url

		//返回的值
		//response.end(request.url);

		var info = '';
		request.addListener('data', function(chunk) {
				info += chunk;
			})
			.addListener('end', function() {
				info = querystring.parse(info);
				response.end("返回的值:" + info.id);

				//      if(info.name == 'a' && info.pwd =='1'){  
				//          res.end('login success ' + info.name);  
				//      }else{  
				//          res.end('login failed ' + info.name);  
				//      }  
			})

		//      response.writeHeader(200, {"Content-Type": "text/html"});    
		//      response.write(html);    
		//      response.end();    
	}).listen(8000);
});