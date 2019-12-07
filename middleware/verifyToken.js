
var jwt = require('jsonwebtoken'); // usado para criar, assinar e verificar tokens
var config = require('../config'); // obtenha nosso arquivo de configuração

/**
 * Esta API é usada para verificar o token de cada solicitação,
 * quando o cliente solicita com um token esta API decodifica que corresponde ao token existente e envia com
 * objeto decodificado.
 * Nós configuramos o currUser, ou seja, o usuário atual para o objeto req, para que possamos acessar algum outro lugar.
 * 
 */
 
var verifyToken=function (req, res,next) {
	
	var token = req.body.token || req.query.token || req.headers['token'];
	 if (token) {
		//verificar a chave e confere exp
		jwt.verify(token, config.secret, function (err, currUser) {
			if (err) {
				res.send(err);
			} else {
				// objeto decodificado
				req.currUser = currUser;
				next();
			}
		});
	}
	 else {
		res.status(401).send("Acesso Inválido");
	}
};
module.exports=verifyToken;