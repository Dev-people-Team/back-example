var db = require('./db');
var template = require('./template.js');
var url = require('url');
var qs = require('querystring');
var sanitizeHtml = require('sanitize-html');
 
exports.home = function(request, response){
    db.query(`SELECT * FROM topic`, function(error,topics){
        var title = 'Main';
        var description = template.searchForm();
        var list = template.list(topics);
        var html = template.HTML(title, list,
          `<h2>${title}</h2>${description}`,
          `<a href="/create">create</a>`
        );
        response.writeHead(200);
        response.end(html);
    });
}
 
exports.page = function(request, response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    db.query(`SELECT * FROM topic`, function(error,topics){
        if(error){
          throw error;
        }
        db.query(`SELECT * FROM topic LEFT JOIN author ON topic.author_id=author.id WHERE topic.id=?`,[queryData.id], function(error2, topic){
          if(error2){
            throw error2;
          }
         var title = topic[0].title;
         var description = topic[0].description;
         var searchHtml = template.searchForm();
         console.log(searchHtml);
         var list = template.list(topics);
         var html = template.HTML(title, list,
           `
           <h2>${sanitizeHtml(title)}</h2>
           ${sanitizeHtml(description)}
           <p>by ${sanitizeHtml(topic[0].name)}</p>
           ${searchHtml}
           `,
           ` <a href="/create">create</a>
               <a href="/update?id=${queryData.id}">update</a>
               <form action="delete_process" method="post">
                 <input type="hidden" name="id" value="${queryData.id}">
                 <input type="submit" value="delete">
               </form>`
            
         );
         response.writeHead(200);
         response.end(html);
        })
     });
}
 
exports.create = function(request, response){
    db.query(`SELECT * FROM topic`, function(error,topics){
        db.query('SELECT * FROM author', function(error2, authors){
          var title = 'Create';
          var list = template.list(topics);
          var html = template.HTML(sanitizeHtml(title), list,
            `
            <form action="/create_process" method="post">
              <p><input type="text" name="title" placeholder="title"></p>
              <p>
                <textarea name="description" placeholder="description"></textarea>
              </p>
              <p>
                ${template.authorSelect(authors)}
              </p>
              <p>
                <input type="submit">
              </p>
            </form>
            `,
            `<a href="/create">create</a>`
          );
          response.writeHead(200);
          response.end(html);
        });
      });
}
 
exports.create_process = function(request, response){
    var body = '';
      request.on('data', function(data){
          body = body + data;
      });
      request.on('end', function(){
          var post = qs.parse(body);
          db.query(`
            INSERT INTO topic (title, description, created, author_id) 
              VALUES(?, ?, NOW(), ?)`,
            [post.title, post.description, post.author], 
            function(error, result){
              if(error){
                throw error;
              }
              response.writeHead(302, {Location: `/?id=${result.insertId}`});
              response.end();
            }
          )
      });
}
 
exports.update = function(request, response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    db.query('SELECT * FROM topic', function(error, topics){
        if(error){
          throw error;
        }
        db.query(`SELECT * FROM topic WHERE id=?`,[queryData.id], function(error2, topic){
          if(error2){
            throw error2;
          }
          db.query('SELECT * FROM author', function(error2, authors){
            var list = template.list(topics);
            var html = template.HTML(sanitizeHtml(topic[0].title), list,
              `
              <form action="/update_process" method="post">
                <input type="hidden" name="id" value="${topic[0].id}">
                <p><input type="text" name="title" placeholder="title" value="${sanitizeHtml(topic[0].title)}"></p>
                <p>
                  <textarea name="description" placeholder="description">${sanitizeHtml(topic[0].description)}</textarea>
                </p>
                <p>
                  ${template.authorSelect(authors, topic[0].author_id)}
                </p>
                <p>
                  <input type="submit">
                </p>
              </form>
              `,
              `<a href="/create">create</a> <a href="/update?id=${topic[0].id}">update</a>`
            );
            response.writeHead(200);
            response.end(html);
          });
           
        });
      });
}
 
exports.update_process = function(request, response){
    var body = '';
      request.on('data', function(data){
          body = body + data;
      });
      request.on('end', function(){
          var post = qs.parse(body);
          db.query('UPDATE topic SET title=?, description=?, author_id=? WHERE id=?', [post.title, post.description, post.author, post.id], function(error, result){
            response.writeHead(302, {Location: `/?id=${post.id}`});
            response.end();
          })
      });
}
 
exports.delete_process = function(request, response){
    var body = '';
      request.on('data', function(data){
          body = body + data;
      });
      request.on('end', function(){
          var post = qs.parse(body);
          db.query('DELETE FROM topic WHERE id = ?', [post.id], function(error, result){
            if(error){
              throw error;
            }
            response.writeHead(302, {Location: `/`});
            response.end();
          });
      });
}

exports.search = function(request, response){
    var _url = request.url;
    var searchQuery =sanitizeHtml(url.parse(_url, true).query.query);
    console.log(searchQuery);
    db.query(`SELECT id, title, SUBSTRING(description, 1, 100) as description FROM topic WHERE title LIKE ?`, '%' + searchQuery + '%', function(err, result){
        console.log(result);
        var view = ``
        for(var i in result){
            if (result[i].description.length === 100){
                var description = result[i].description + ' ...';
            } else {
                var description = result[i].description;
            };
            view += `
            <div class="search-result">
                <h3 class="search-title"><a href="/?id=${result[i].id}">${result[i].title}</a></h3>
                <p class="search-desc"></p>${description}</p>
            </div>`;
        }
        var html = template.HTML(sanitizeHtml('Select'), view,
            `
            <form action="/search_process" method="post">
            </form>
            `,
            `<a href="/search">search result</a>`
        );
        response.writeHead(200);
        response.end(html);
    });


    // db.query(`SELECT * FROM topic`, function(error,topics){
    //     db.query('SELECT * FROM author', function(error2, authors){
    //       var title = 'Create';
    //       var list = template.list(topics);
          
    //       var html = template.HTML(sanitizeHtml(title), list,
    //         `
    //         <form action="/search_process" method="post">
    //           <p><input type="text" name="title" placeholder="title"></p>
    //           <p>
    //             <textarea name="description" placeholder="description"></textarea>
    //           </p>
    //           <p>
    //             ${template.authorSelect(authors)}
    //           </p>
    //           <p>
    //             <input type="submit">
    //           </p>
    //         </form>
    //         `,
    //         `<a href="/search">create</a>`
    //       );
    //       response.writeHead(200);
    //       response.end(html);
    //     });
    //   });
}
 
exports.search_process = function(request, response){
    var body = '';
      request.on('data', function(data){
          body = body + data;
      });
      request.on('end', function(){
          var post = qs.parse(body);
          db.query(`
            INSERT INTO topic (title, description, created, author_id) 
              VALUES(?, ?, NOW(), ?)`,
            [post.title, post.description, post.author], 
            function(error, result){
              if(error){
                throw error;
              }
              response.writeHead(302, {Location: `/?id=${result.insertId}`});
              response.end();
            }
          )
      });
}