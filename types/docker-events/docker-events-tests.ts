import * as Dockerode from 'dockerode';
import * as DockerEvents from 'docker-events';

const emitter = new DockerEvents({
    docker: new Dockerode(),
});

emitter.on('destroy', (message: object) => {
    console.log('Container destroyed: %j', message);
    emitter.stop();
});

emitter.start();
