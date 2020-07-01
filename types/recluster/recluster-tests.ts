import recluster = require('recluster');
import path = require('path');

const cluster = recluster(path.join(__dirname, 'server.js'));
cluster.run();

cluster.on('exit', (worker) => {
    console.log('Hello worker', worker);
});

process.on('SIGUSR2', () => {
  cluster.reload();
});
