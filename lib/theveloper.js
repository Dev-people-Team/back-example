var db = require('./db');
var template = require('./template.js');
var qs = require('querystring');
var url = require('url');
var sanitizeHtml = require('sanitize-html');
exports.home = function(request, response){
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
    });``
    /*
    db.query(`SELECT * FROM topic`, function(error,topics){
        db.query(`SELECT * FROM author`, function(error2,authors){
            var title = 'theveloper';
            var list = template.list(topics);
            var html = template.HTML(title, list,
            `
            ${template.authorTable(authors)}
            <style>
                table{
                    border-collapse: collapse;
                }
                td{
                    border:1px solid black;
                }
            </style>
            <form action="/author/create_process" method="post">
                <p>
                    <input type="text" name="name" placeholder="name">
                </p>
                <p>
                    <textarea name="profile" placeholder="description"></textarea>
                </p>
                <p>
                    <input type="submit"  value="create">
                </p>
            </form>
            `,
            ``
            );
            response.writeHead(200);
            response.end(html);
        });
    });
    */
}