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
                    
                    db.query(`SELECT NVL(MAX(BOARD_CHANGE_SNO)+1,0) AS SNO
                              FROM  DEGROW_BOARD_INFO_HIS
                              WHERE USER_ID = 'kth4893' 
                              AND   BOARD_CODE = '1' 
                              AND   BOARD_TITLE = '${bTitle}'`, function(error,boardAdd){
                                if(error != null){
                                    console.log("Select Error ::  " + error);
                                }
                                else{
                                    console.log("Select Success ::  " + boardAdd[0].SNO);
                                    var boardSno = boardAdd[0].SNO
                                    console.log("Board_History Insert Start ");
                                    db.query(`INSERT INTO DEGROW_BOARD_INFO_HIS
                                              VALUES (
                                                  'kth4893'   , 
                                                    DEFAULT   ,
                                                '${bTitle}'   ,
                                                '${boardSno}' ,
                                                '${bContents}',
                                                 DEFAULT      ,
                                                 DEFAULT)`,function(error){
                                        if(error != null){
                                            console.log("Insert Error ::  " + error);
                                        }
                                        else{
                                            console.log("Board_History Insert Success ");
                                        }
                                    });
                                }
                            });
                }
            });
};


