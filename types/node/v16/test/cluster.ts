import { connect } from 'net';
import * as cluster from 'node:cluster'; // requires synthetic default imports, is this worth it?
cluster.fork();
Object.keys(cluster.workers!).forEach(key => {
    const worker = cluster.workers![key];
    if (worker && worker.isDead()) {
        console.log('worker %d is dead', worker.process.pid);
    }
    worker!.send('test', () => { });
    worker!.send('', connect({ port: 1 }));
    worker!.send('', connect({ port: 1 }), { keepOpen: true }, () => { });
});

cluster.on('setup', (settings: cluster.ClusterSettings) => { });

{
    cluster.setupPrimary({
        args: ['1'],
    });
}

{
    const workers: NodeJS.Dict<cluster.Worker> = cluster.workers!;
}
