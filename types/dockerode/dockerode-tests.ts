import Docker = require("dockerode");
import * as fs from "fs";

// Code samples from Dockerode 'Getting started'
const docker = new Docker();
const docker1 = new Docker({ socketPath: "/var/run/docker.sock" });
const docker2 = new Docker({ host: "http://192.168.1.10", port: 3000 });
const docker3 = new Docker({ protocol: "http", host: "127.0.0.1", port: 3000 });
const docker4 = new Docker({ host: "127.0.0.1", port: 3000 });

const docker5 = new Docker({
    host: "192.168.1.10",
    port: process.env.DOCKER_PORT || 2375,
    ca: "ca",
    cert: "cert",
    key: "key",
});

const docker6 = new Docker({
    protocol: "https", // you can enforce a protocol
    host: "192.168.1.10",
    port: process.env.DOCKER_PORT || 2375,
    ca: "ca",
    cert: "cert",
    key: "key",
});

const docker7 = new Docker({
    host: "192.168.1.10",
    port: process.env.DOCKER_PORT || 2375,
    ca: fs.readFileSync("ca.pem"),
    cert: fs.readFileSync("cert.pem"),
    key: fs.readFileSync("key.pem"),
    version: "v1.25", // required when Docker >= v1.13, https://docs.docker.com/engine/api/version-history/
});

const docker8 = new Docker({
    protocol: "https", // you can enforce a protocol
    host: "192.168.1.10",
    port: process.env.DOCKER_PORT || 2375,
    ca: fs.readFileSync("ca.pem"),
    cert: fs.readFileSync("cert.pem"),
    key: fs.readFileSync("key.pem"),
});

const docker9 = new Docker({
    Promise,
});

const docker10 = new Docker({
    protocol: "ssh", // SSH support is possible
    host: "192.168.1.10",
    port: 22,
    username: "test",
    sshAuthAgent: "/tmp/ssh-abcde/agent.12345",
});

const docker11 = new Docker({
    headers: {
        Host: "custom-host",
    },
});

const docker12 = new Docker({
    sshOptions: {
        host: "192.168.1.10",
        port: 3000,
        forceIPv4: true,
        forceIPv6: true,
    },
});

async function foo() {
    const containers = await docker7.listContainers({
        all: false,
        limit: 5,
        size: true,
        filters: undefined,
    });
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

    const volumes = await docker8.listVolumes({
        abortSignal: new AbortController().signal,
        digests: false,
        filters: undefined,
    });

    const nodes = await docker9.listNodes({
        abortSignal: undefined,
        filters: undefined,
    });
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
        filters: { event: ["pull"] },
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

const container = docker.getContainer("container-id");

container.inspect({ abortSignal: new AbortController().signal });

container.inspect((err, data) => {
    // NOOP
});

container.start({ abortSignal: new AbortController().signal }, (err, data) => {
    // NOOP
});

container.start((err, data) => {
    // NOOP
});

container.remove((err, data) => {
    // NOOP
});

container.remove({ v: true, force: false, link: true }, (err, data) => {
    // NOOP
});

container.logs((err, logs) => {
    // $ExpectType Buffer || Buffer<ArrayBufferLike>
    logs;
});

container.logs({}, (err, logs) => {
    // $ExpectType Buffer || Buffer<ArrayBufferLike>
    logs;
});

container.logs({ follow: true }, (err, logs) => {
    // $ExpectType ReadableStream
    logs;
});

container.logs({ follow: false }, (err, logs) => {
    // $ExpectType Buffer || Buffer<ArrayBufferLike>
    logs;
});

// $ExpectType Promise<Buffer> || Promise<Buffer<ArrayBufferLike>>
container.logs({ since: 0, until: 10, stdout: true, stderr: true });

// $ExpectType Promise<Buffer> || Promise<Buffer<ArrayBufferLike>>
container.logs({ since: "12345.987654321", until: "54321.123456789", stdout: true, stderr: true });

// $ExpectType Promise<ReadableStream>
container.logs({ follow: true });

// $ExpectType Promise<Buffer> || Promise<Buffer<ArrayBufferLike>>
container.logs({ follow: false });

container.stats((err, logs) => {
    // $ExpectType ContainerStats
    logs;
});

container.stats({}, (err, logs) => {
    // $ExpectType ContainerStats
    logs;
});

container.stats({ stream: true }, (err, logs) => {
    // $ExpectType ReadableStream
    logs;
});

container.stats({ stream: false }, (err, logs) => {
    // $ExpectType ContainerStats
    logs;
});

// $ExpectType Promise<ContainerStats>
container.stats();

// $ExpectType Promise<ContainerStats>
container.stats({});

// $ExpectType Promise<ContainerStats>
container.stats({ "one-shot": true });

// $ExpectType Promise<ReadableStream>
container.stats({ stream: true });

// $ExpectType Promise<ContainerStats>
container.stats({ stream: false });

container.wait({
    condition: "next-exit",
    abortSignal: new AbortController().signal,
});

// $ExpectType Promise<ReadWriteStream>
container.attach({
    detachKeys: "",
    hijack: false,
    logs: false,
    stream: false,
    stdin: false,
    stdout: false,
    stderr: false,
});

container.attach(
    {
        detachKeys: "",
        hijack: false,
        logs: false,
        stream: false,
        stdin: false,
        stdout: false,
        stderr: false,
    },
    (err, stream) => {
        // $ExpectType ReadWriteStream
        stream;
    },
);

container.stop({
    t: 0,
});

docker.listContainers((err, containers) => {
    containers.forEach(container => {
        docker.getContainer(container.Id).stop((err, data) => {
            // NOOP
        });
    });
});

docker.listNetworks({ abortSignal: new AbortController().signal }, (err, response) => {
    // NOOP
});

docker.listContainers({ abortSignal: new AbortController().signal }).then(containers => {
    return containers.map(container => docker.getContainer(container.Id));
});

docker.listImages({
    all: true,
    filters: "{\"dangling\":[\"true\"]}",
    digests: true,
    abortSignal: new AbortController().signal,
}).then(images => {
    return images.map(image => docker.getImage(image.Id));
});

docker.listImages({
    all: true,
    filters: { "dangling": ["true"] },
    digests: true,
    abortSignal: new AbortController().signal,
}).then(images => {
    return images.map(image => docker.getImage(image.Id));
});

docker.buildImage("archive.tar", { t: "imageName" }, (err, response) => {
    // NOOP
});

docker.buildImage({ context: ".", src: ["Dockerfile", "test.sh"] }, { t: "imageName" }, (err, response) => {
    // NOOP
});

docker.buildImage(
    "archive.tar",
    {
        registryconfig: {
            "https://index.docker.io/v1/": {
                username: "user",
                password: "pass",
            },
        },
    },
    (err, response) => {
        /* NOOP*/
    },
);

docker.buildImage(".", { nocache: true, version: "2" }, (err, response) => {
    // NOOP
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

docker.createContainer(
    {
        HostConfig: {
            DnsSearch: ["example.com"],
            CpuCount: 2,
            CpuPercent: 50,
            CpuRealtimePeriod: 0,
            CpuRealtimeRuntime: 0,
        },
    },
    (err, container) => {
        container.start((err, data) => {
            // NOOP
        });
    },
);

docker.createContainer(
    { Healthcheck: { Test: ["CMD", "true"], Interval: 10, Timeout: 10, Retries: 3, StartPeriod: 10 } },
    (err, container) => {
        container.start((err, data) => {
            // NOOP
        });
    },
);

docker.createNetwork({ Name: "networkName" }, (err, network) => {
    network.remove((err, data) => {
        // NOOP
    });
});

docker.createVolume();

docker.createVolume({ Name: "volumeName", abortSignal: new AbortController().signal });

docker.createVolume({
    Name: "volumeName",
    Driver: "local",
    DriverOpts: { device: "/dev/sda1" },
    Labels: { "com.example.some-label": "some-value" },
});

docker.createVolume({ Name: "volumeName" }, (err, volume) => {
    volume.remove((err, data) => {
        // NOOP
    });

    volume.remove({ abortSignal: new AbortController().signal }, (err, data) => {
        // NOOP
    });
});

docker.createNetwork({ Name: "networkName" }).then(network => {
    network.remove().then(response => {
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

docker.pruneVolumes({
    abortSignal: new AbortController().signal,
}, (err, response) => {
    // NOOP
});

docker.listVolumes({});

docker.createService(
    {
        Name: "network-name",
        Networks: [
            {
                Target: "network-target",
                Aliases: [],
            },
        ],
        TaskTemplate: {
            ContainerSpec: {
                Image: `my-image`,
                Env: ["my-env"],
            },
        },
        Mode: {
            Replicated: {
                Replicas: 1,
            },
        },
        EndpointSpec: {
            Ports: [
                {
                    Protocol: "tcp",
                    TargetPort: 80,
                },
            ],
        },
    },
    (err, response) => {
        /* NOOP */
    },
);

docker.listServices({ filters: JSON.stringify({ name: ["network-name"] }), status: true }).then(services => {
    return services.map(service => docker.getService(service.ID));
});

docker.listServices({ filters: { name: ["network-name"] } }).then(services => {
    return services.map(service => docker.getService(service.ID));
});

(async () => {
    // $ExpectType ReadableStream
    const pullStream = await docker.pull("hello-world", { authconfig: { username: "username", password: "password" } });

    // $ExpectType Image
    const pushImage = docker.getImage("hello-world");

    // $ExpectType ReadableStream
    const pushStream = await pushImage.push({ authconfig: { username: "username", password: "password" } });
});

const image = docker.getImage("imageName");
image.remove({ force: true, noprune: false, abortSignal: new AbortController().signal }, (err, response) => {
    // NOOP;
});

image.distribution({}, (err, response) => {
    // NOOP;
});

image.tag({ abortSignal: new AbortController().signal, repo: "hello/world", tag: "latest" });

image.distribution((err, response) => {
    // NOOP;
});

const plugin = docker.getPlugin("pluginName", "remoteName");
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

const secret = docker.getSecret("secretName");
secret.inspect((err, response) => {
    // NOOP
});

secret.remove((err, response) => {
    // NOOP
});

secret.update((err, response) => {
    // NOOP
});

const node = docker.getNode("nodeName");
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

docker.run(
    "ubuntu",
    ["bash", "-c", "uname -a"],
    process.stdout,
    { name: "foo", platform: "linux/amd64" },
    (err, data) => {
        console.log(data.StatusCode);
    },
);
