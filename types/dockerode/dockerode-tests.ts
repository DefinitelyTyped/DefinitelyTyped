import Docker = require('dockerode');
import * as fs from 'fs';

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
    key: 'key',
});

const docker6 = new Docker({
    protocol: 'https', // you can enforce a protocol
    host: '192.168.1.10',
    port: process.env.DOCKER_PORT || 2375,
    ca: 'ca',
    cert: 'cert',
    key: 'key',
});

const docker7 = new Docker({
    host: '192.168.1.10',
    port: process.env.DOCKER_PORT || 2375,
    ca: fs.readFileSync('ca.pem'),
    cert: fs.readFileSync('cert.pem'),
    key: fs.readFileSync('key.pem'),
    version: 'v1.25', // required when Docker >= v1.13, https://docs.docker.com/engine/api/version-history/
});

const docker8 = new Docker({
    protocol: 'https', // you can enforce a protocol
    host: '192.168.1.10',
    port: process.env.DOCKER_PORT || 2375,
    ca: fs.readFileSync('ca.pem'),
    cert: fs.readFileSync('cert.pem'),
    key: fs.readFileSync('key.pem'),
});

const docker9 = new Docker({
    Promise,
});

const docker10 = new Docker({
    protocol: 'ssh', // SSH support is possible
    host: '192.168.1.10',
    port: 22,
    username: 'test',
    sshAuthAgent: '/tmp/ssh-abcde/agent.12345',
});

async function foo() {
    const containers = await docker7.listContainers();
    for (const container of containers) {
        const foo = await docker7.getContainer(container.Id);
        const inspect = await foo.inspect();
    }

    const images = await docker5.listImages();
    for (const image of images) {
        const imageSharedSize: number = image.SharedSize;
        const imageContainers: number = image.Containers;
        const foo = await docker5.getImage(image.Id);
        const inspect = await foo.inspect();
        await foo.remove();
    }
}

docker.getEvents(
    {
        since: new Date().getTime() / 1000,
        filters: `{ "event": ["pull"] }`,
    },
    (err, stream) => {
        // NOOP
    },
);

docker.getEvents(
    {
        since: new Date().getTime() / 1000,
        filters: { event: ['pull'] },
    },
    (err, stream) => {
        // NOOP
    },
);

docker.getEvents((err, stream) => {
    // NOOP
});

docker.getEvents().then(stream => {
    // NOOP
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

container.remove({v: true, force: false, link: true}, (err, data) => {
    // NOOP
});

const abortController = new AbortController();
container.wait({
    condition: 'next-exit',
    abortSignal: abortController.signal
});

docker.listContainers((err, containers) => {
    containers.forEach(container => {
        docker.getContainer(container.Id).stop((err, data) => {
            // NOOP
        });
    });
});

docker.listContainers().then(containers => {
    return containers.map(container => docker.getContainer(container.Id));
});

docker.listImages({ all: true, filters: '{"dangling":["true"]}', digests: true}).then(images => {
    return images.map(image => docker.getImage(image.Id));
});

docker.buildImage('archive.tar', { t: 'imageName' }, (err, response) => {
    // NOOP
});

docker.buildImage({ context: '.', src: ['Dockerfile', 'test.sh'] }, { t: 'imageName' }, (err, response) => {
    // NOOP
});

docker.buildImage(
    'archive.tar',
    {
        registryconfig: {
            'https://index.docker.io/v1/': {
                username: 'user',
                password: 'pass'
            }
        }
    },
    (err, response) => {
        /* NOOP*/
    });

docker.createContainer({ Tty: true }, (err, container) => {
    container.start((err, data) => {
        // NOOP
    });
});

docker.createContainer({ HostConfig: { Init: true } }, (err, container) => {
    container.start((err, data) => {
        // NOOP
    });
});

docker.createContainer({ HostConfig: { DnsSearch: ['example.com'], CpuCount: 2, CpuPercent: 50, CpuRealtimePeriod: 0, CpuRealtimeRuntime: 0 } }, (err, container) => {
    container.start((err, data) => {
        // NOOP
    });
});

docker.createContainer({ Healthcheck: { Test: ["CMD", "true"], Interval: 10, Timeout: 10, Retries: 3, StartPeriod: 10 } }, (err, container) => {
    container.start((err, data) => {
        // NOOP
    });
});

docker.createNetwork({Name: 'networkName'},  (err, network) => {
    network.remove((err, data) => {
        // NOOP
    });
});

docker.createVolume();

docker.createVolume({Name: 'volumeName'});

docker.createVolume({Name: 'volumeName', Driver: 'local', DriverOpts: {device: '/dev/sda1'}, Labels: {'com.example.some-label': 'some-value'}});

docker.createVolume({Name: 'volumeName'}, (err, volume) => {
    volume.remove((err, data) => {
        // NOOP
    });
});

docker.createNetwork({Name: 'networkName'}).then((network) => {
    network.remove().then((response) => {
        // NOOP
    });
});

docker.pruneContainers((err, response) => {
    // NOOP
});

docker.pruneImages((err, response) => {
    // NOOP
});

docker.pruneNetworks((err, response) => {
    // NOOP
});

docker.pruneVolumes((err, response) => {
    // NOOP
});

docker.createService({
    Name: 'network-name',
    Networks: [{
        Target: "network-target",
        Aliases: [],
    }],
    TaskTemplate: {
        ContainerSpec: {
            Image: `my-image`,
            Env: ['my-env']
        }
    },
    Mode: {
        Replicated: {
            Replicas: 1
        }
    },
    EndpointSpec: {
        Ports: [{
            Protocol: "tcp",
            TargetPort: 80
        }]
    }
}, (err, response) => { /* NOOP */ });

docker.listServices({ filters: { name: ['network-name'] } }).then(services => {
    return services.map(service => docker.getService(service.ID));
});

const image = docker.getImage('imageName');
image.remove({force: true, noprune: false}, (err, response) => {
    // NOOP;
});

image.distribution({}, (err, response) => {
    // NOOP;
});

image.distribution((err, response) => {
    // NOOP;
});

const plugin = docker.getPlugin('pluginName', 'remoteName');
plugin.configure((err, response) => {
    // NOOP;
});

plugin.disable((err, response) => {
    // NOOP
});

plugin.enable((err, response) => {
    // NOOP
});

plugin.inspect((err, response) => {
    // NOOP
});

plugin.privileges((err, response) => {
    // NOOP
});

plugin.pull({}, (err, response) => {
    // NOOP
});

plugin.push((err, response) => {
    // NOOP
});

plugin.remove((err, response) => {
    // NOOP
});

plugin.upgrade({}, (err, response) => {
    // NOOP
});

const secret = docker.getSecret('secretName');
secret.inspect((err, response) => {
    // NOOP
});

secret.remove((err, response) => {
    // NOOP
});

secret.update((err, response) => {
    // NOOP
});

const node = docker.getNode('nodeName');
node.inspect((err, reponse) => {
    // NOOP
});

node.inspect().then(response => {
    // NOOP
});

node.update({}, (err, response) => {
    // NOOP
});

node.update((err, response) => {
    // NOOP
});

node.update({}).then(response => {
    // NOOP;
});

node.remove({}, (err, response) => {
    // NOOP
});

node.remove((err, response) => {
    // NOOP
});

node.remove({}).then(response => {
    // NOOP;
});
