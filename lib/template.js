var sanitizeHtml = require('sanitize-html');
 
module.exports = {
  HTML:function(title, list, body, control){
    return `
    <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      <a href="/author">author</a>
      ${list}
      ${control}
      ${body}
    </body>
    </html>
    `;
  },list:function(topics){
    var list = '<ul>';
    var i = 0;
    while(i < topics.length){
      list = list + `<li><a href="/?id=${topics[i].id}">${sanitizeHtml(topics[i].title)}</a></li>`;
      i = i + 1;
    }
    list = list+'</ul>';
    return list;
  },authorSelect:function(authors, author_id){
    var tag = '';
    var i = 0;
    while(i < authors.length){
      var selected = '';
      if(authors[i].id === author_id) {
        selected = ' selected';
      }
      tag += `<option value="${authors[i].id}"${selected}>${sanitizeHtml(authors[i].name)}</option>`;
      i++;
    }
    return `
      <select name="author">
        ${tag}
      </select>
    `
  },authorTable:function(authors){
    var tag = '<table>';
    var i = 0;
    while(i < authors.length){
        tag += `
            <tr>
                <td>${sanitizeHtml(authors[i].name)}</td>
                <td>${sanitizeHtml(authors[i].profile)}</td>
                <td><a href="/author/update?id=${authors[i].id}">update</a></td>
                <td>
                  <form action="/author/delete_process" method="post">
                    <input type="hidden" name="id" value="${authors[i].id}">
                    <input type="submit" value="delete">
                  </form>
                </td>
            </tr>
            `
        i++;
    }
    tag += '</table>';
    return tag;
  },searchForm:function(){
    const search_bar = 
    `
    <style>
    .search {
      display: grid;
      padding-bottom: 0px;
    }
    .search-bar {
      border: 1px solid #009900;
      float: left;
      font-size: 13px;
      margin: 10px 0 0 25px;
      padding: 5px;
      width: 140px;
    }
    .search-button {
      background: #009900;
      border: 1px solid #009900;
      border-left: none; /* Prevent double borders */
      color: white;
      cursor: pointer;	
      float: left;
      font-size: 13px;
      margin: 10px 0 25px 0;
      width: 60px;
      padding: 5px;
    }
    .search-button:hover {
        background: #006600;
    }
    .search-form {
      height: 45px;
    }
    </style>
    <form action="search" method="get" class="search-form">
      <input type="text" class="search-bar" name="query" placeholder="검색어를 입력하세요.">
      <input type="submit" class="search-button" value="Search" >
    </form>
    `;
    return search_bar;
  }
}