var DB = require("../../database")("teste_oficina5"); 

var getcomments = function (req, res) {
    
    var params = req.params;
    var query = req.query;
    if(typeof params.id === "undefined" && typeof query.postId === "undefined"){
        res.json({"Error" : true, "Message" : "Verifique os dados informados"});
        return;   
    }

    var query = `
    SELECT * FROM comments C 
        JOIN posts P ON C.postId = P.id 
        WHERE P.id = ${params.id || query.postId} 
    `;
    
    DB.query(query, {},function(err,rows){

        if(err) {
            res.json({"Error" : true, "Message" : err});
        } else {
            res.json({"Error" : false, "Message" : "Sucesso", "Data" : rows});
        }
    })

};
module.exports = getcomments;