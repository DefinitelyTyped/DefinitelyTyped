import * as Eris from "eris";
import { EventEmitter } from "events";

export interface Cluster {
    shards: number;
    maxShards: number;
    firstShardID: number;
    lastShardID: number;
    mainFile: any;
    clusterID: number;
    clusterCount: number;
    guilds: number;
    users: number;
    uptime: number;
    exclusiveGuilds: number;
    largeGuilds: number;
    voiceChannels: number;
    shardsStats: any[];
    app: any;
    bot: Eris.Client | null;
    test: boolean;

    constructor: () => Cluster;

    logOverride: (message: string) => string;

    spawn: () => undefined;

    connect: (
        firstShardID: number,
        lastShardID: number,
        maxShards: number,
        token: string,
        type: any,
        clientOptions: Eris.ClientOptions,
    ) => undefined;

    loadCode: (bot: Eris.Client) => undefined;

    startStats: (bot: Eris.Client) => undefined;
}

export class Master extends EventEmitter {
    constructor(
        token: string,
        mainFile: string,
        options: {
            clientOptions: Eris.ClientOptions;
            shards?: number | undefined;
            firstShardID?: number | undefined;
            lastShardID?: number | undefined;
            clusters?: number | undefined;
            clusterTimeout?: number | undefined;
            stats?: boolean | undefined;
            statsInterval?: number | undefined;
            name?: string | undefined;
            guildsPerShard?: number | undefined;
            webhooks?: {
                cluster?: any;
                shard?: any;
            } | undefined;
            debug?: boolean | undefined;
        },
    );

    isMaster(): boolean;

    startStats(): undefined;

    executeStats(clusters: any, stat: number): undefined;

    start(): number;

    launch(test: any): number;

    chunk(shards: any, clusterCount: number): any;

    connectShards(): undefined;

    sendWebhook(type: any, embed: any): undefined;

    printLogo(): undefined;

    restartCluster(worker: any, code: string, signal: any): undefined;

    calculateShards(): Promise<any>;

    fetchInfo(start: number, type: any, value: any): undefined;

    broadcast(start: number, message: string): undefined;

    sendTo(cluster: Cluster, message: string): undefined;
}

export abstract class Base {
    protected bot: Eris.Client;
    protected clusterID: number;
    protected ipc: {
        register(event: string, callback: () => any): void;
        unregister(event: string): void;
        broadcast(name: string, message: any): void;
        sendTo(cluster: number, name: string, message: any): void;
        fetchUser(id: string): Promise<Eris.User>;
        fetchGuild(id: string): Promise<Eris.Guild>;
        fetchChannel(id: string): Promise<Eris.Channel>;
    };

    constructor(setup: { bot: Eris.Client; clusterID: number });

    restartCluster(clusterID: number): undefined;

    abstract launch(): any;
}
