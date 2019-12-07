//IMPORTAÇÃO DO BALANCEADOR DE CARGA
var cluster = require('cluster');

var workers = [];

const setupServer = (isClusterRequired) => {
  // Se for um processo mestre, inicia a configuração do processo do worker
  if (isClusterRequired && cluster.isMaster) {
    setupWorkerProcesses();
  } else {
    // Serviço do worker
    require('./server')(false);
  }
};

const setupWorkerProcesses = () => {
  // Calculando a quantidade de cores da maquina
  
  let numCores = require('os').cpus().length;

  console.log("    "); console.log("    ");
  console.log("///////////////////////////////////////////////////////////////")
  console.log("//                                                           //")
  console.log("//                      OFICINA5 1.0                         //")
  console.log("//                                                           //")
  console.log('//            Master cluster inicializou ' + numCores + ' workers           //')
  console.log("//                                                           //")
  console.log("///////////////////////////////////////////////////////////////")
  console.log("    "); console.log("    ");
  console.log("    "); console.log("    ");

  // Se interando da quantidade de núcleos a serem utilizados
  for (let i = 0; i < numCores; i++) {
    workers.push(cluster.fork());

    workers[i].on('message', function (message) {
      console.log(message);
    });
  }

  // Processo criado e executando, com id anexado
  cluster.on('online', function (worker) {
    
    console.log('Worker com o ID  ' + worker.process.pid + ' está em funcionamento.');
  });

  // Se algum processo worker morrer, inicie um novo simplesmente dando outro ID
  cluster.on('exit', function (worker, code, signal) {
    console.log('Worker ' + worker.process.pid + ' apresentou falhas com o codigo: ' + code + ', e signal: ' + signal);
    console.log('Iniciando um novo worker');
    cluster.fork();
    workers.push(cluster.fork());

    workers[workers.length - 1].on('message', function (message) {
      console.log(message);
    });
  });
};

setupServer(true);