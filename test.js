/*
var http = require('http');
var url = require('url');
var theveloper = require('./lib/theveloper');
*/
var express = require('express');
var http    = require('http');
var bodyParser = require('body-parser');
var boardAdd   = require('./lib/boardAdd');
var app = express();
app.use(express.json());
app.use(express.static(__dirname + '/'));
app.use(bodyParser.urlencoded({ extended : false }));
app.post('/board_regist',function(req,res){
    console.log("board_regist Start!");
    boardAdd.addBoard(req,res);
});

app.listen(3001,function(){
    console.log("Server On!");
    
});



/*
var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    
    if(pathname === '/'){
        if(queryData.id === undefined){
            theveloper.home(request, response);
            
        } else {
        	theveloper.page(request, response);
        }
    } else if (pathname === '/theveloper'){
		console.log("go to /lib/theveloper.js");
    }
});
app.listen(3001);
*/