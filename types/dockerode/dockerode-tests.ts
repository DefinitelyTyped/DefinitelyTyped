import * as Docker from 'dockerode';

// Code samples from Dockerode 'Getting started'
const docker = new Docker();
const docker1 = new Docker({ socketPath: '/var/run/docker.sock' });
const docker2 = new Docker({ host: 'http://192.168.1.10', port: 3000 });
const docker3 = new Docker({ protocol: 'http', host: '127.0.0.1', port: 3000 });
const docker4 = new Docker({ host: '127.0.0.1', port: 3000 });

const docker5 = new Docker({
  host: '192.168.1.10',
  port: process.env.DOCKER_PORT || 2375,
  ca: 'ca',
  cert: 'cert',
  key: 'key'
});

const docker6 = new Docker({
  protocol: 'https', // you can enforce a protocol
  host: '192.168.1.10',
  port: process.env.DOCKER_PORT || 2375,
  ca: 'ca',
  cert: 'cert',
  key: 'key'
});

const container = docker.getContainer('container-id');
container.inspect((err, data) => {
  // NOOP
});

container.start((err, data) => {
  // NOOP
});

container.remove((err, data) => {
  // NOOP
});

docker.listContainers((err, containers) => {
  containers.forEach(container => {
    docker
      .getContainer(container.Id)
      .stop((err, data) => {
        // NOOP
      });
  });
});

docker.buildImage('archive.tar', { t: 'imageName' }, (err, response) => {
  // NOOP
});

docker.createContainer({ Tty: true }, (err, container) => {
  container.start((err, data) => {
    // NOOP
  });
});