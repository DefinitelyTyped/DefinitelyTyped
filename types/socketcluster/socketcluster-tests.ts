import * as fsutil from "socketcluster/fsutil";
import SocketCluster = require("socketcluster");
import { SCServer } from "socketcluster-server";
import { ChildProcess } from "child_process";
import path = require("path");
import * as minimist from "minimist";
import * as scHotReboot from "sc-hot-reboot";

////////////////////////////////////////////////////
/// SocketCluster tests
////////////////////////////////////////////////////

{
    const options: SCServer.SCServerOptions = { port: 80 };

    let sc = new SocketCluster();
    sc = new SocketCluster(options);
    sc = SocketCluster.create(options);

    sc.options = { environment: "prod" };

    sc.on(sc.EVENT_FAIL, err => {
        const error: Error = err;
    });
    sc.on(sc.EVENT_WARNING, warning => {
        const warn: Error = warning;
    });

    sc.on(sc.EVENT_READY, () => {});

    sc.on(sc.EVENT_WORKER_START, workerInfo => {
        const id: number = workerInfo.id;
        const pid: number = workerInfo.pid;
        const respawn: boolean = workerInfo.respawn;
    });
    sc.on(sc.EVENT_WORKER_EXIT, workerInfo => {
        const id: number = workerInfo.id;
        const pid: number = workerInfo.pid;
        const code: number = workerInfo.code;
        const signal: string = workerInfo.signal;
    });

    sc.on(sc.EVENT_BROKER_START, brokerInfo => {
        const id: number = brokerInfo.id;
        const pid: number = brokerInfo.pid;
        const respawn: boolean = brokerInfo.respawn;
    });
    sc.on(sc.EVENT_BROKER_EXIT, brokerInfo => {
        const id: number = brokerInfo.id;
        const pid: number = brokerInfo.pid;
        const code: number = brokerInfo.code;
        const signal: string = brokerInfo.signal;
    });

    sc.on(sc.EVENT_WORKER_CLUSTER_START, workerClusterInfo => {
        const pid: number = workerClusterInfo.pid;
        const childProcess: ChildProcess = workerClusterInfo.childProcess;
    });
    sc.on(sc.EVENT_WORKER_CLUSTER_READY, workerClusterInfo => {
        const pid: number = workerClusterInfo.pid;
        const childProcess: ChildProcess = workerClusterInfo.childProcess;
    });
    sc.on(sc.EVENT_WORKER_CLUSTER_EXIT, workerClusterInfo => {
        const pid: number = workerClusterInfo.pid;
        const code: number = workerClusterInfo.code;
        const signal: string = workerClusterInfo.signal;
        const childProcess: ChildProcess = workerClusterInfo.childProcess;
    });

    sc.sendToWorker(123, "test");
    sc.sendToWorker(222, "test 2", (err, responseData, workerId) => {
        if (!err) {
            sc.log(`Received ${responseData} from ${workerId}`);
        }
    });

    sc.sendToBroker(123, "test");
    sc.sendToBroker(222, "test 2", (err, responseData) => {
        if (!err) {
            sc.colorText(`Received ${responseData} from broker`, "yellow");
        }
    });

    sc.killWorkers({ immediate: true });
    sc.killBrokers();

    sc.destroy();
}

// Adapted from the socketcluster sample
{
    const argv = minimist(process.argv.slice(2));

    const workerControllerPath = argv.wc || process.env.SOCKETCLUSTER_WORKER_CONTROLLER;
    const brokerControllerPath = argv.bc || process.env.SOCKETCLUSTER_BROKER_CONTROLLER;
    const workerClusterControllerPath = argv.wcc || process.env.SOCKETCLUSTER_WORKERCLUSTER_CONTROLLER;
    const environment = process.env.ENV || "dev";

    const options: SCServer.SCServerOptions = {
        workers: Number(argv.w) || Number(process.env.SOCKETCLUSTER_WORKERS) || 1,
        brokers: Number(argv.b) || Number(process.env.SOCKETCLUSTER_BROKERS) || 1,
        port: Number(argv.p) || Number(process.env.SOCKETCLUSTER_PORT) || 8000,
        // You can switch to 'sc-uws' for improved performance.
        wsEngine: process.env.SOCKETCLUSTER_WS_ENGINE || "ws",
        appName: argv.n || process.env.SOCKETCLUSTER_APP_NAME || null,
        workerController: workerControllerPath || path.join(__dirname, "worker.js"),
        brokerController: brokerControllerPath || path.join(__dirname, "broker.js"),
        workerClusterController: workerClusterControllerPath || null,
        socketChannelLimit: Number(process.env.SOCKETCLUSTER_SOCKET_CHANNEL_LIMIT) || 1000,
        clusterStateServerHost: argv.cssh || process.env.SCC_STATE_SERVER_HOST || null,
        clusterStateServerPort: process.env.SCC_STATE_SERVER_PORT || null,
        clusterMappingEngine: process.env.SCC_MAPPING_ENGINE || null,
        clusterClientPoolSize: process.env.SCC_CLIENT_POOL_SIZE || null,
        clusterAuthKey: process.env.SCC_AUTH_KEY || null,
        clusterInstanceIp: process.env.SCC_INSTANCE_IP || null,
        clusterInstanceIpFamily: process.env.SCC_INSTANCE_IP_FAMILY || null,
        clusterStateServerConnectTimeout: Number(process.env.SCC_STATE_SERVER_CONNECT_TIMEOUT) || null,
        clusterStateServerAckTimeout: Number(process.env.SCC_STATE_SERVER_ACK_TIMEOUT) || null,
        clusterStateServerReconnectRandomness: Number(process.env.SCC_STATE_SERVER_RECONNECT_RANDOMNESS) || null,
        crashWorkerOnError: argv["auto-reboot"] !== false,
        // If using nodemon, set this to true, and make sure that environment is 'dev'.
        killMasterOnSignal: false,
        environment
    };

    const socketCluster = new SocketCluster(options);

    socketCluster.on(socketCluster.EVENT_WORKER_CLUSTER_START, workerClusterInfo => {
        console.log("   >> WorkerCluster PID:", workerClusterInfo.pid);
    });

    if (socketCluster.options.environment === "dev") {
        // This will cause SC workers to reboot when code changes anywhere in the app directory.
        // The second options argument here is passed directly to chokidar.
        // See https://github.com/paulmillr/chokidar#api for details.
        console.log(`   !! The sc-hot-reboot plugin is watching for code changes in the ${__dirname} directory`);
        scHotReboot.attach(socketCluster, {
            cwd: __dirname,
            ignored: ["public", "node_modules", "README.md", "Dockerfile", "server.js", "broker.js", /[\/\\]\./, "*.log"]
        });
    }
}

////////////////////////////////////////////////////
/// fsutil tests
////////////////////////////////////////////////////

{
    fsutil.fileExists("/path/to/folder", err => {});
    fsutil.fileExists(Buffer.from(""), err => {});

    const pathPromise: Promise<void> = fsutil.waitForFile("/path/to/folder", 100, 0, 100);
    const bufferPromise: Promise<void> = fsutil.waitForFile(Buffer.from(""), 0, 0, 0, "timeout");
}
