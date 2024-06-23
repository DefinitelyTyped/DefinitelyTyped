/// <reference types="node" />

import { Socket } from "net";

export type FunctionsNames<T> = { [K in keyof T]: T[K] extends (...args: any[]) => any ? K : never }[keyof T] & string;
export type ArgsType<T> = T extends (...args: infer A) => any ? A : never;
export type UnPromise<T> = T extends Promise<infer R> ? R : T;
export type MergePromise<T> = Promise<UnPromise<T>>;

export default class BeanstalkdClient {
    host?: string | undefined;
    port?: number | undefined;
    options?: {} | undefined;

    closed: boolean;
    protocol: BeanstalkdProtocol;

    constructor(host?: string, port?: number, options?: {});

    /**
     * Prepare a command which will be applied on the Client.
     *
     * @param command The command to prepare.
     * @param expected The expected reply.
     */
    static addCommand(command: string, expected: string): void;

    /**
     * Prepare a command which will be applied on the Client.
     *
     * @param command The command to prepare.
     * @param expected The expected reply.
     */
    static addYamlCommand(command: string, expected: string): void;

    /**
     * Connect the Client to the configured Server.
     */
    connect(): Promise<this & BeanstalkdCaller> & BeanstalkdCaller;

    /**
     * Close the Client connection.
     */
    quit(): Promise<void>;

    /**
     * Calling unref() on a socket will allow the program to exit if this is the only active socket in the event system.
     * If the socket is already unrefed calling unref() again will have no effect.
     */
    unref(): void;

    /**
     * Delete the specified job. Responds with null if successful, a string error otherwise.
     * This is the only method not named identically to its beanstalkd counterpart, because delete is a reserved word in Javascript.
     *
     * @param id The job id to delete.
     */
    destroy(id: number): Promise<void>;

    /**
     * Execute a command on Beanstalkd protocol.
     *
     * @param command Command name to execute.
     * @param args Arguments for the command.
     * @param writer The Writer to use for this command.
     * @param reader The Reader to use for this command.
     */
    _command(
        command: string,
        args: any[],
        writer: BasicWriter,
        reader: BasicReader | YamlReader,
    ): Promise<any>;

    // #region Connection events

    /**
     * Listen on given event.
     *
     * @param event The event to listen on.
     * @param listeners The listeners for this event.
     */
    on(event: string, ...listeners: Array<(...args: any[]) => void>): void;
    /**
     * The connect event is triggered when the connection is ready.
     * The drain event is triggered when connection drains.
     * The end event is triggered when connection ends.
     * The timeout event is triggered when connection timeout.
     *
     * @param event The event to listen on.
     * @param listeners Listeners for the event.
     */
    on(event: "connect" | "drain" | "end" | "timeout", ...listeners: Array<() => void>): void;
    /**
     * The error event is triggered when an error occured on the connection.
     *
     * @param event The event to listen on.
     * @param listeners Listeners for the error event.
     */
    on(event: "error", ...listeners: Array<(err: Error) => void>): void;
    /**
     * The close event is triggered when connection closes.
     *
     * @param event The event to listen on.
     * @param listener Listeners for the close event.
     */
    on(event: "close", ...listeners: Array<(had_error: boolean) => void>): void;
    /**
     * The data event is triggered when socket receives data.
     *
     * @param event The event to listen on.
     * @param listener Listeners for the data event.
     */
    on(event: "data", ...listeners: Array<(data: Buffer) => void>): void;
    /**
     * The lookup event is triggered when connection performs a lookup on a new address.
     *
     * @param event The event to listen on.
     * @param listener Listeners for the lookup event.
     */
    on(
        event: "lookup",
        ...listeners: Array<(err: Error, address: string, family: string | number, host: string) => void>
    ): void;

    // #endregion

    // #region Commands

    /**
     * Use the specified tube.
     * Reponds with the name of the tube being used.
     *
     * @param tube Tube name to use.
     */
    use(tube: string): Promise<string>;

    /**
     * Responds with the name of the tube currently being used by the client.
     */
    listTubeUsed(): Promise<string>;

    /**
     * Submit a job with the specified priority (smaller integers are higher priority), delay in seconds, and allowed time-to-run in seconds.
     * The payload contains the job data the server will return to clients reserving jobs; it can be either a Buffer object or a string.
     * No processing is done on the data. Responds with the id of the newly-created job.
     *
     * @param priority Priority of the job.
     * @param delay Delay of the job in seconds.
     * @param ttr Time-to-run of the job in seconds.
     * @param payload The job payload.
     */
    put(priority: number, delay: number, ttr: number, payload?: string | Buffer): Promise<string>;

    /**
     * Peek at the data for the job at the top of the ready queue of the tube currently in use.
     * Responds with the job id and payload of the next job, or 'NOT_FOUND' if there are no qualifying jobs in the tube.
     * The payload is a Buffer object.
     */
    peekReady(): Promise<[string, Buffer]>;

    /**
     * Peek at the data for the delayed job with the shortest delay in the tube currently in use.
     * Responds with the job id and payload of the next job, or 'NOT_FOUND' in err if there are no qualifying jobs in the tube.
     * The payload is a Buffer object.
     */
    peekDelayed(): Promise<[string, Buffer]>;

    /**
     * Peek at the data for the next buried job in the tube currently in use.
     * Responds with the job id and payload of the next job, or 'NOT_FOUND' in err if there are no qualifying jobs in the tube.
     * The payload is a Buffer object.
     */
    peekBuried(): Promise<[string, Buffer]>;

    /**
     * Watch the named tube.
     * Responds with the number of tubes currently watched by the client.
     *
     * @param tube The Tube name to watch.
     */
    watch(tube: string): Promise<number>;

    /**
     * Ignore the named tube.
     * Responds with the number of tubes currently watched by the client.
     *
     * @param tube The Tube name to ignore.
     */
    ignore(tube: string): Promise<number>;

    /**
     * Responds with an array containing the names of the tubes currently watched by the client.
     */
    listTubeWatched(): Promise<string[]>;

    /**
     * Reserve a job.
     * Responds with the id and the job data.
     * The payload is a Buffer object.
     */
    reserve(): Promise<[string, Buffer]>;

    /**
     * Reserve a job, waiting the specified number of seconds before timing out.
     * err contains the string "TIMED_OUT" if the specified time elapsed before a job became available.
     * Payload is a buffer.
     *
     * @param seconds Timeout in seconds.
     */
    reserveWithTimeout(seconds: number): Promise<void>;

    /**
     * Inform the server that the client is still processing a job, thus requesting more time to work on it.
     *
     * @param id The job id to reset TTR on.
     */
    touch(id: number): Promise<void>;

    /**
     * Delete the specified job. Responds with null if successful, a string error otherwise.
     * This is the only method not named identically to its beanstalkd counterpart, because delete is a reserved word in Javascript.
     *
     * @param id The job id to delete.
     */
    delete(id: number): Promise<void>;

    /**
     * Release the specified job and assign it the given priority and delay (in seconds).
     *
     * @param id The job id to release.
     * @param priority The new priority in seconds.
     * @param delay The new delay in seconds.
     */
    release(id: number, priority: number, delay: number): Promise<void>;

    /**
     * Bury the specified job and assign it the given priority. Responds with null if successful, a string error otherwise.
     *
     * @param id The job id to bury.
     * @param priority The new priority to assign.
     */
    bury(id: number, priority: number): Promise<void>;

    /**
     * Kick at most maxToKick delayed and buried jobs back into the active queue.
     * Responds with the number of jobs kicked.
     *
     * @param maxToKick Max number of job to kick and bury.
     */
    kick(maxToKick: number): Promise<number>;

    /**
     * Kick the specified job id. Responds with NOT_FOUND if the job was not found.
     * Supported in beanstalkd versions >= 1.6.
     *
     * @param id The job id to kick.
     */
    kickJob(id: number): Promise<void>;

    /**
     * Peek at the data for the specified job.
     * Payload is a Buffer object.
     *
     * @param id The job id to peek.
     */
    peek(id: number): Promise<Buffer>;

    /**
     * Pause the named tube for the given number of seconds.
     * No new jobs may be reserved from the tube while it is paused.
     *
     * @param tube The name of the tube to pause.
     * @param delay The pause duration (in seconds).
     */
    pauseTube(tube: string, delay: number): Promise<void>;

    /**
     * List all the existing tubes. Responds with an array of tube names.
     */
    listTubes(): Promise<string[]>;

    /**
     * Request statistics for the specified job.
     * Responds with a hash containing information about the job.
     *
     * @param id The job id to request stats for.
     */
    statsJob(id: number): Promise<BeanstalkdJobStats>;

    /**
     * Request statistics for the specified tube.
     * Responds with a hash containing information about the tube.
     *
     * @param tube The name of the Tube to request stats for.
     */
    statsTube(tube: string): Promise<BeanstalkdTubeStats>;

    /**
     * Request statistics for the beanstalkd server.
     * Responds with a hash containing information about the server.
     */
    stats(): Promise<BeanstalkdStats>;

    // #endregion
}

export interface BeanstalkdCaller {
    call<K extends Exclude<FunctionsNames<BeanstalkdClient>, "on" | "unref" | "call">>(
        fn: K,
        ...args: ArgsType<Required<BeanstalkdClient>[K]>
    ): MergePromise<ReturnType<Required<BeanstalkdClient>[K]>> & BeanstalkdCaller;
}

export interface BeanstalkdProtocol {
    add(signature: string, key: string): void;
    addCommand(signature: string): void;
    addType(key: string, type: any): void;
    addReply(signature: string): void;

    reset(): void;

    build(identifier: string, args: any[], key: string): Buffer;
    buildCommand(command: string, args: any[]): Buffer;
    buildreply(reply: string, args: any[]): Buffer;
    buildPut(args: any[]): Buffer;

    parse(buffer: Buffer, key: string): [Buffer | null, BeanstalkdProtocolCommand | BeanstalkdProtocolReply | null];
    parseCommand(buffer: Buffer): [Buffer | null, BeanstalkdProtocolCommand | null];
    parseReply(buffer: Buffer): [Buffer | null, BeanstalkdProtocolReply | null];
}

export interface BeanstalkdProtocolCommand {
    command: string;
    args: any[];
}

export interface BeanstalkdProtocolReply {
    reply: string;
    args: any[];
}

export type BeanstalkdJobState = "ready" | "delayed" | "reserved" | "buried";

export interface BeanstalkdJobStats {
    /** The job id. */
    id: string;
    /** The name of the tube that contains this job. */
    tube: string;
    /** The job state. */
    state: string;
    /** The priority value set by the put, release, or bury commands. */
    pri: number;
    /** The time in seconds since the put command that created this job. */
    age: number;
    /** The integer number of seconds to wait before putting this job in the ready queue. */
    delay: number;
    /** Time to run: The integer number of seconds a worker is allowed to run this job. */
    ttr: number;
    /**
     * The number of seconds left until the server puts this job into the ready queue.
     * This number is only meaningful if the job is reserved or delayed.
     * If the job is reserved and this amount of time elapses before its state changes, it is considered to have timed out.
     */
    "time-left": number;
    /**
     * The number of the earliest binlog file containing this job.
     * If -b wasn't used, this will be 0.
     */
    file: number;
    /** The number of times this job has been reserved. */
    reserves: number;
    /** The number of times this job has timed out during a reservation. */
    timeouts: number;
    /** The number of times a client has released this job from a reservation. */
    releases: number;
    /** The number of times this job has been buried. */
    buries: number;
    /** The number of times this job has been kicked. */
    kicks: number;
}

export interface BeanstalkdTubeStats {
    /** The tube's name. */
    name: string;
    /** The number of ready jobs with priority < 1024 in this tube. */
    "current-jobs-urgent": number;
    /** The number of jobs in the ready queue in this tube. */
    "current-jobs-ready": number;
    /** The number of jobs reserved by all clients in this tube. */
    "current-jobs-reserved": number;
    /** The number of delayed jobs in this tube. */
    "current-jobs-delayed": number;
    /** The number of buried jobs in this tube. */
    "current-jobs-buried": number;
    /** The cumulative count of jobs created in this tube in the current beanstalkd process. */
    "total-jobs": number;
    /** The number of open connections that are currently using this tube. */
    "current-using": number;
    /** The number of open connections that have issued a reserve command while watching this tube but not yet received a response. */
    "current-waiting": number;
    /** The number of open connections that are currently watching this tube. */
    "current-watching": number;
    /** The number of seconds the tube has been paused for. */
    pause: number;
    /** The cumulative number of delete commands for this tube. */
    "cmd-delete": number;
    /** The cumulative number of pause-tube commands for this tube. */
    "cmd-pause-tube": number;
    /** The number of seconds until the tube is un-paused. */
    "pause-time-left": number;
}

export interface BeanstalkdStats {
    /** The number of ready jobs with priority < 1024. */
    "current-jobs-urgent": number;
    /** The number of jobs in the ready queue. */
    "current-jobs-ready": number;
    /** The number of jobs reserved by all clients. */
    "current-jobs-reserved": number;
    /** The number of delayed jobs. */
    "current-jobs-delayed": number;
    /** The number of buried jobs. */
    "current-jobs-buried": number;
    /** The cumulative number of put commands. */
    "cmd-put": number;
    /** The cumulative number of peek commands. */
    "cmd-peek": number;
    /** The cumulative number of peek-ready commands. */
    "cmd-peek-ready": number;
    /** The cumulative number of peek-delayed commands. */
    "cmd-peek-delayed": number;
    /** The cumulative number of peek-buried commands. */
    "cmd-peek-buried": number;
    /** The cumulative number of reserve commands. */
    "cmd-reserve": number;
    /** The cumulative number of use commands. */
    "cmd-use": number;
    /** The cumulative number of watch commands. */
    "cmd-watch": number;
    /** The cumulative number of ignore commands. */
    "cmd-ignore": number;
    /** The cumulative number of delete commands. */
    "cmd-delete": number;
    /** The cumulative number of release commands. */
    "cmd-release": number;
    /** The cumulative number of bury commands. */
    "cmd-bury": number;
    /** The cumulative number of kick commands. */
    "cmd-kick": number;
    /** The cumulative number of stats commands. */
    "cmd-stats": number;
    /** The cumulative number of stats-job commands. */
    "cmd-stats-job": number;
    /** The cumulative number of stats-tube commands. */
    "cmd-stats-tube": number;
    /** The cumulative number of list-tubes commands. */
    "cmd-list-tubes": number;
    /** The cumulative number of list-tube-used commands. */
    "cmd-list-tube-used": number;
    /** The cumulative number of list-tubes-watched commands. */
    "cmd-list-tubes-watched": number;
    /** The cumulative number of pause-tube commands. */
    "cmd-pause-tube": number;
    /** The cumulative count of times a job has timed out. */
    "job-timeouts": number;
    /** The cumulative count of jobs created. */
    "total-jobs": number;
    /** The maximum number of bytes in a job. */
    "max-job-size": number;
    /** The number of currently-existing tubes. */
    "current-tubes": number;
    /** The number of currently open connections. */
    "current-connections": number;
    /** The number of open connections that have each issued at least one put command. */
    "current-producers": number;
    /** The number of open connections that have each issued at least one reserve command. */
    "current-workers": number;
    /** The number of open connections that have issued a reserve command but not yet received a response. */
    "current-waiting": number;
    /** The cumulative count of connections. */
    "total-connections": number;
    /** The process id of the server. */
    pid: string;
    /** The version string of the server. */
    version: string;
    /** The cumulative user CPU time of this process in seconds and microseconds. */
    "rusage-utime": number;
    /** The cumulative system CPU time of this process in seconds and microseconds. */
    "rusage-stime": number;
    /** The number of seconds since this server process started running. */
    uptime: number;
    /** The index of the oldest binlog file needed to store the current jobs. */
    "binlog-oldest-index": number;
    /** The index of the current binlog file being written to. If binlog is not active this value will be 0. */
    "binlog-current-index": number;
    /** The maximum size in bytes a binlog file is allowed to get before a new binlog file is opened. */
    "binlog-max-size": number;
    /** The cumulative number of records written to the binlog. */
    "binlog-records-written": number;
    /** The cumulative number of records written as part of compaction. */
    "binlog-records-migrated": number;
    /** Set to "true" if the server is in drain mode, "false" otherwise. */
    draining: boolean;
    /** A random id string for this server process, generated every time beanstalkd process starts. */
    id: string;
    /** The hostname of the machine as determined by uname. */
    hostname: string;
    /** The OS version as determined by uname */
    os: string;
    /** The machine architecture as determined by uname */
    platform: string;
}

export interface BasicReader {
    parseData(data: string): any;
    handle(protocol: BeanstalkdProtocol, data: any, resolve: (data?: any) => void, reject: (err?: any) => any): Buffer;
}

export interface YamlReader extends BasicReader {
    parseData(data: string): object;
}

export interface Writer {
    command: string;
}

export interface BasicWriter extends Writer {
    handle(protocol: BeanstalkdProtocol, connection: Socket, ...args: any[]): Promise<any>;
}
