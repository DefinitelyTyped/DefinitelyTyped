// Type definitions for mongodb-memory-server 1.8
// Project: https://github.com/nodkz/mongodb-memory-server
// Definitions by: Dmitry Rogozhny <https://github.com/dmitryrogozhny>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="node" />

import { ChildProcess } from "child_process";

import MongoMemoryServer = _MongoMemoryServer.MongoMemoryServer;
import MongoInstance = _MongoInstance.MongodbInstance;
import MongoBinary = _MongoBinary.MongoBinary;

export default MongoMemoryServer;
export { MongoMemoryServer, MongoInstance, MongoBinary };

// exports from the ./util/MongoBinary.js.flow file
declare namespace _MongoBinary {
    interface MongoBinaryCache {
        [version: string]: string;
    }

    interface MongoBinaryOpts {
        version?: string;
        downloadDir?: string;
        platform?: string;
        arch?: string;
        debug?: boolean | ((...args: any[]) => any);
    }

    // disable error for a class with all static functions,
    // so the TypeScript declaration would map the implementation with flow types for easier support.
    // tslint:disable-next-line:no-unnecessary-class
    class MongoBinary {
        static cache: MongoBinaryCache;

        static getPath(opts?: MongoBinaryOpts): Promise<string>;
        static hasValidBinPath(files: string[]): boolean;
    }
}

// exports from the ./util/MongoInstance.js.flow file
declare namespace _MongoInstance {
    interface MongodOps {
        // instance options
        instance: {
            port: number,
            storageEngine?: string,
            dbPath: string,
            debug?: boolean | ((...args: any[]) => any),
        };

        // mongo binary options
        binary?: _MongoBinary.MongoBinaryOpts;

        // child process spawn options
        spawn?: {
            cwd?: string,
            env?: object,
            argv0?: string,
            stdio?: string | any[],
            detached?: boolean,
            uid?: number,
            gid?: number,
            shell?: boolean | string,
        };

        debug?: boolean | ((...args: any[]) => any);
    }

    class MongodbInstance {
        static childProcessList: ChildProcess[];

        opts: MongodOps;
        debug: ((...args: any[]) => any);
        childProcess: ChildProcess;
        killerProcess: ChildProcess;
        instanceReady: ((...args: any[]) => any);
        instanceFailed: ((...args: any[]) => any);

        static run(opts: MongodOps): Promise<MongodbInstance>;

        constructor(opts: MongodOps);

        prepareCommandArgs(): string[];
        run(): Promise<MongodbInstance>;
        kill(): Promise<MongodbInstance>;
        getPid(): number | undefined;
        _launchMongod(mongoBin: string): ChildProcess;
        _launchKiller(parentPid: number, childPid: number): ChildProcess;
        errorHandler(err: string): void;
        closeHandler(code: number): void;
        stderrHandler(message: string | Buffer): void;
        stdoutHandler(message: string | Buffer): void;
    }
}

// exports from the MongoMemoryServer.js.flow file
declare namespace _MongoMemoryServer {
    interface MongoMemoryServerOptsT {
        instance: {
            port?: number,
            dbPath?: string,
            dbName?: string,
            storageEngine?: string,
            debug?: boolean | ((...args: any[]) => any),
        };
        binary: {
            version?: string,
            downloadDir?: string,
            platform?: string,
            arch?: string,
            debug?: boolean | ((...args: any[]) => any),
        };
        debug?: boolean;
        spawn: any;
        autoStart?: boolean;
    }

    interface MongoInstanceDataT {
        port: number;
        dbPath: string;
        dbName: string;
        uri: string;
        storageEngine: string;
        instance: _MongoInstance.MongodbInstance;
        childProcess: ChildProcess;
        tmpDir?: {
            name: string,
            removeCallback: ((...args: any[]) => any),
        };
    }

    class MongoMemoryServer {
        isRunning: boolean;
        runningInstance: Promise<MongoInstanceDataT> | undefined;
        opts: MongoMemoryServerOptsT;
        debug: ((...args: any[]) => any);

        constructor(opts?: Partial<MongoMemoryServerOptsT>);

        start(): Promise<boolean>;
        _startUpInstance(): Promise<MongoInstanceDataT>;
        stop(): Promise<boolean>;
        getInstanceData(): Promise<MongoInstanceDataT>;
        getUri(otherDbName?: string | boolean): Promise<string>;
        getConnectionString(otherDbName?: string | boolean): Promise<string>;
        getPort(): Promise<number>;
        getDbPath(): Promise<string>;
        getDbName(): Promise<string>;
    }
}
