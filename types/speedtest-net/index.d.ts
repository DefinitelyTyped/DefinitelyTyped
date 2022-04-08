// Type definitions for speedtest-net 2.1
// Project: https://github.com/ddsol/speedtest.net#readme
// Definitions by: Florian Imdahl <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace exec {
    type CancelFunction = (setCancelHandler?: symbol, newHandler?: () => void) => boolean | void;
    type ProgressFunction = (event?: SpeedTestEvent) => void;

    interface BaseEvent {
        type: 'config' | 'log' | 'testStart' | 'ping' | 'download' | 'upload' | 'result';
    }

    /** Sent when the test is in the upload phase. */
    interface UploadEvent extends BaseEvent {
        /** Indicates the overall progress of the test as a fraction (0 to 1). */
        progress: number;
        timestamp: Date;
        type: 'upload';
        upload: DownloadUploadData;
    }

    interface DownloadEvent extends BaseEvent {
        download: DownloadUploadData;
        /** Indicates the overall progress of the test as a fraction (0 to 1). */
        progress: number;
        timestamp: Date;
        type: 'download';
    }

    interface DownloadUploadData {
        /** Bytes per second. */
        bandwidth: number;
        bytes: number;
        elapsed: number;
        /** Indicates the progress of the current test. */
        progress?: number;
    }

    interface PingData {
        /** Milliseconds */
        jitter: number;
        /** Milliseconds */
        latency: number;
        progress?: number;
    }

    /** Sent when the test is in the ping phase. */
    interface PingEvent extends BaseEvent {
        ping: PingData;
        /** Indicates the overall progress of the test as a fraction (0 to 1). */
        progress: number;
        timestamp: Date;
        type: 'ping';
    }

    interface SuiteData {
        global: {
            dynamic: {
                download: {
                    isScalingEnabled: boolean;
                    maxThreadCount: number;
                };
                stableStop: {
                    isEnabled: boolean;
                };
            };
            engine: {
                isUploadFirst: boolean;
                packetSizeBytes: number;
                testDurationSeconds: number;
                threadCount: number;
            };
        };
        testStage: {
            latency: {
                pingCount: number;
            };
            upload: {
                isClientPrimaryMeasureMethod: boolean;
                isServerUploadEnabled: boolean;
            };
        };
    }

    interface AppData {
        ispName: string;
        license: {
            message: string;
            version: string;
        };
        licenseKey: string;
        resultFormat: string;
        saveTestResultUrl: string;
        traceLevel: number;
    }

    /**
     * This event is only sent when the `verbosity` is 2 or greater. It contains
     * a bunch of information about the test.
     */
    interface ConfigEvent extends BaseEvent {
        app: AppData;
        /** Indicates the overall progress of the test as a fraction (0 to 1). */
        progress: number;
        servers: ServerData[];
        suite: SuiteData;
        type: 'config';
    }

    /**
     * These are various log messages. Only sent when `verbosity` is 1 or
     * greater. Higher verbosity leads to more messages. That's all I know.
     */
    interface LogEvent extends BaseEvent {
        /** Levels include `info` and `warning` and may include others. */
        level: string;
        message: string;
        /** Indicates the overall progress of the test as a fraction (0 to 1). */
        progress: number;
        timestamp: Date;
        type: 'log';
    }

    interface ResultEvent extends BaseEvent {
        download: DownloadUploadData;
        interface: InterfaceData;
        isp: string;
        packetLoss: number;
        ping: PingData;
        result: {
            id: string;
            url: string;
        };
        server: ServerData;
        timestamp: Date;
        type: 'result';
        upload: DownloadUploadData;
    }

    interface InterfaceData {
        externalIp: string;
        internalIp: string;
        isVpn: boolean;
        macAddr: string;
        name: string;
    }

    interface ServerData {
        country: string;
        host: string;
        host_functional?: string;
        id: number;
        ip: string;
        location: string;
        name: string;
        port: number;
        sponsor?: string;
    }

    /** This contains information about the test to be run. */
    interface TestStartEvent extends BaseEvent {
        interface: InterfaceData;
        isp: string;
        /** Indicates the overall progress of the test as a fraction (0 to 1). */
        progress: number;
        server: ServerData;
        timestamp: Date;
        type: 'testStart';
    }

    type SpeedTestEvent =
        | ConfigEvent
        | DownloadEvent
        | LogEvent
        | PingEvent
        | ResultEvent
        | TestStartEvent
        | UploadEvent;

    interface Options {
        /**
         * Set to `true` to accept the Ookla GDPR terms. This must be done
         * (at least) once on the system. If you have not accepted the Ookla
         * GDPR terms you can read their disclaimer by running the speedtest-net
         * CLI without the --accept-license option.
         */
        acceptGdpr?: boolean;
        /**
         * Set to `true` to accept the Ookla EULA, TOS and Privacy policy. This
         * must be done (at least) once on the system. If you have not accepted
         * the Ookla license terms, you can view the links to their agreements
         * by running the speedtest-net CLI without the --accept-license option.
         */
        acceptLicense?: boolean;
        /** Binary executable path of the Ookla speedtest CLI */
        binary?: string;
        /** Default '1.0.0' Binary executable version */
        binaryVersion?: string;
        /**
         * A cancellation function created with `speedTest.makeCancel()` to
         * cancel the test.
         */
        cancel?: CancelFunction;
        /** Server host to connect to */
        host?: string;
        /** Function to handle progress events */
        progress?: ProgressFunction;
        /** ID of the server to restrict the tests against. */
        serverId?: string;
        /** IP of the network interface to bind */
        sourceIp?: string;
        /** Log level for `{ type: log }` progress events */
        verbosity?: number;
    }

    function makeCancel(): CancelFunction;
    const defaultBinaryVersion: string;
}

declare function exec(options?: exec.Options): Promise<exec.ResultEvent>;

export = exec;
