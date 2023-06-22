import * as cluster from 'node:cluster';

cluster.fork();
Object.keys(cluster.workers).forEach(key => {
    const worker = cluster.workers[key];
    if (worker && worker.isDead()) {
        console.log('worker %d is dead', worker.process.pid);
    }
});

cluster.on('setup', (settings: cluster.ClusterSettings) => {});
