var DB = require("../../database")("teste_oficina5"); 

var newPost = function (req, res) {

    var params = req.params;
    var queryParams = req.query;

    if(!Number.isInteger(Number(params.id)) || typeof req.body === "undefined"){
        res.json({"Error" : true, "Message" : "Verifique os dados informados"});
        return;   
    }

    var query = `UPDATE posts SET ? WHERE id = ${params.id};`;

    DB.query(query, req.body, function(err,rows){

        if(err) {
            res.json({"Error" : true, "Message" : err});
        } else {
            res.json({"Error" : false, "Message" : "Sucesso"});
        }
    })

};
module.exports = newPost;