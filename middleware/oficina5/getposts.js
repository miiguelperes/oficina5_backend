var DB = require("../../database")("teste_oficina5"); 

var getPost = function (req, res) {
    
    var params = req.params;
    var queryParams = req.query;
    var query = `SELECT * FROM posts `
    if(typeof params.id === "undefined" &&  typeof queryParams.userId === "undefined" ){
        
    }else{
        query +=  ` WHERE userId = ${params.id || queryParams.userId};` ;
    }
    
    DB.query(query, {},function(err,rows){

        if(err) {
            res.json({"Error" : true, "Message" : err});
        } else {
            res.json({"Error" : false, "Message" : "Sucesso", "Data" : rows});
        }
    })

};
module.exports = getPost;