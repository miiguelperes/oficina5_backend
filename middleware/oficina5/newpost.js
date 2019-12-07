var DB = require("../../database")("teste_oficina5"); 

var newPost = function (req, res) {

    var body = req.body;
    if(!body.userId || !body.title || !body.body){
        res.json({"Error" : true, "Message" : "Verifique os dados informados"});
        return;
    }
    var query = `INSERT INTO posts (userId, title, body) VALUES (${body.userId}, '${body.title}', '${body.body}')`;

    DB.query(query, {},function(err,rows){

        if(err) {
            res.json({"Error" : true, "Message" : err});
        } else {
            res.json({"Error" : false, "Message" : "Sucesso"});
        }
    })

};
module.exports = newPost;