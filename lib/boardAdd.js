var db = require('./db');
var qs = require('querystring');
var url = require('url');
var sanitizeHtml = require('sanitize-html');
exports.addBoard = function(req, res){
    var bTitle = req.param("title");
    var bContents = req.param("name");
    console.log("title : "+ bTitle);
    console.log("contents : "+ bContents);

    db.query(`INSERT INTO 
                DEGROW_BOARD_INFO VALUES 
                ('kth4893',default,'${bTitle}','${bContents}',default,default,default,default)`, function(error){
                if(error != null){
                    console.log("Insert Error ::  " + error);
                }
                else {
                    console.log("DB Insert Success!");
                }
            });
    /*
    db.query(`SELECT * FROM DEGROW_USER_INFO`, function(error, theveloper){
		if(error != null){
            console.log("error : " + error);   
        }
        else 
        {
            console.log("Query Result Cnt: " + theveloper.length);
        }
        var title = 'theveloper';
        var list = template.list(theveloper); 
        var html = template.HTML(title,list,`<p>Success Query TheVeloper</p>`);
        response.writeHead(200);
        response.end(html);
    
    });
    */
};


