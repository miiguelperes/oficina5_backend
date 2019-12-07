var DB = require("../../database")("teste_oficina5"); 

var deletePost = function (req, res) {
    
    var params = req.params;
    var queryParams = req.query;

    if(!Number.isInteger(Number(params.id))){
        res.json({"Error" : true, "Message" : "Verifique os dados informados"});
        return;   
    }

    var query = `DELETE FROM posts WHERE id = ${params.id}`
    
    DB.query(query, {},function(err,rows){

        if(err) {
            res.json({"Error" : true, "Message" : err});
        } else {
            res.json({"Error" : false, "Message" : "Deletado com sucesso"});
        }
    })

};
module.exports = deletePost;