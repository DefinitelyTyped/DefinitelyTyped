import * as fsutil from "socketcluster/fsutil";
import SocketCluster = require("socketcluster");
import { SCServer } from "socketcluster-server";
import { ChildProcess } from "child_process";

////////////////////////////////////////////////////
/// SocketCluster tests
////////////////////////////////////////////////////

{
    const options: SCServer.SCServerOptions = { port: 80 };

    let sc = new SocketCluster();
    sc = new SocketCluster(options);
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
