module.exports = function (appmetrics) {
  //VARIAVEIS DE AMBIENTE
  require('dotenv').config();

  //BLUEBIRD PROMISES <3
  global.Promise = require('bluebird');
  
  var fs = require('fs');
  
  //IMPORTAÇÕES DE DEPENDENCIAS
  var express = require("express"),
    cors = require('cors'),
    bodyParser = require("body-parser");

  //CONFIGURAÇÃO DE CERTIFICADO DIGITAL  
  var https = require('https');

  //HTTP FOR DEVELOPMENT
  var http = require('http');
  
  //IMPORTAÇÃO MODELOS RESTFULL
  var verifyToken = require('./middleware/verifyToken');

  //INSTANCIA DO EXPRESS
  const app = express();
  
  //CAMADA DE PROTECAO CONTRA ATAQUES USANDO HTTP HEADERS
  const helmet = require('helmet')
  app.use(helmet())

  
  //AUTORIZANDO ORIGENS DE REQUISIÇÕES
  var whitelist = []
  if (process.env.NODE_ENV.indexOf('production') > -1) { 
    whitelist = []
  }else{
    whitelist = ['http://localhost', 'http://localhost:8080', 'localhost:8080', 'localhost', 'http://10.1.13.1:8080', 'http://10.1.13.1:8080/', '10.1.13.1']
  }

  var corsOptions = {
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true)
      } else {
        callback(('ACESSO BLOQUEADO BY CORS WEB POLICE'), false)
      }
    }
  }
  
  //CONFIGURANDO CORPO DE REQUISIÇÕES
  app.use(cors(corsOptions))
  app.use(bodyParser.urlencoded({limit: '100mb', extended: true }));
  app.use(bodyParser.json({limit: '100mb', extended: true }));
  app.use(bodyParser.text({type:'text'}));
  

  //VERIFICA SE ESTA EM PRODUCAO
if (process.env.NODE_ENV.indexOf('production') > -1) { 
  

} 
  //AMBIENTE DE DESENVOLVIMENTO
else {
   //INICANDO SERVIDOR
    var httpServer = http.createServer(app);

    //SOCKET INTEGRATION
    var socketIo = require('socket.io')

    var io = socketIo(httpServer); 

    app.set('socketio', io);

    io.sockets.on('connect', function (client) {
     
      client.send(client.id);
      client.on('disconnect', function () {
        
      });
    })

    //PORTA DE INICIALIZAÇÃO
    var port = process.env.PORT || 4200;

    //OUVINDO PORTA
    httpServer.listen(port, function () {
      console.log("    "); console.log("    ");
      console.log("///////////////////////////////////////////////////////////////")
      console.log("//                                                           //")
      console.log("//                      OFICINA5 1.0                         //")
      console.log('//     Worker Core Express executando na porta: ' + port + "         //")
      console.log("//                     Desenvolvimento                       //")
      console.log("//                                                           //")
      console.log("///////////////////////////////////////////////////////////////")
      console.log("    "); console.log("    ");
    });

  }

  //ROTAS AUTENTICADAS
  var apiRoutes = express.Router();
  apiRoutes.use(verifyToken);

  var newpost = require('./middleware/oficina5/newpost');
  var getposts = require('./middleware/oficina5/getposts');
  var getcomments = require('./middleware/oficina5/getcomments');
  var deletepost = require('./middleware/oficina5/deletepost');
  var patchpost = require('./middleware/oficina5/patchpost');
  
  app.post('/posts', newpost);
  app.get('/posts', getposts);
  app.get('/posts/:id', getposts);
  app.get('/posts/:id/comments', getcomments);
  app.get('/comments', getcomments);
  app.delete('/posts/:id', deletepost);
  app.patch('/posts/:id', patchpost);
  app.put('/posts/:id', patchpost);

  //ROUTE MIDDLEWARE PARA VERIFICAÇÃO DE TOKENS
  app.use('/restfull', apiRoutes);
};