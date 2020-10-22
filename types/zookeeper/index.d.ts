// Type definitions for zookeeper 3.4
// Project: https://github.com/yfinkelstein/node-zookeeper#readme
// Definitions by: xialeistudio <https://github.com/xialeistudio>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />

type ACL = number | { perms: number, scheme: string, auth: string };

interface Stat {
    czxid: number;
    mzxid: number;
    ctime: number;
    mtime: number;
    version: number;
    cversion: number;
    aversion: number;
    ephemeralOwner: string;
    dataLength: number;
    numChildren: number;
    pzxid: number;
}

interface ConnectionOptions {
    connect?: string;
    timeout?: number;
    host_order_deterministic?: boolean;
    data_as_buffer?: boolean;
    debug_level?: number;
}

type child2_callback = (rc: number, error: string, children: string[], stat: Stat) => void;
type watch_callback = (type: number, state: number, path: string) => void;
type acl_callback = (rc: number, error: string, acl: ACL[], stat: Stat) => void;

type Callback<T> = (rc: number, error: string, value: T) => void;
export = Zookeeper;

declare class Zookeeper extends Client {
    constructor(options: ConnectionOptions);

    connect(callback: (e: Error | null, client: Client) => void): void;

    close(): void;
}

declare class Client {
    client_id?: string;
    client_password?: any;
    state?: number;
    timeout?: number;
    is_unrecoverable?: boolean;

    a_create(path: string, data: string | Buffer, flags: number, callback: Callback<string>): void;

    mkdirp(path: string, callback: (e?: Error) => void): void;

    a_exists(path: string, watch: boolean, callback: Callback<Stat>): void;

    a_get(path: string, watch: boolean, callback: Callback<Buffer | string>): void;

    a_get_children(path: string, watch: boolean, callback: Callback<string[]>): void;

    a_get_children2(path: string, watch: boolean, callback: child2_callback): void;

    a_set(path: string, data: Buffer | string, version: number, callback: Callback<Stat>): void;

    a_delete_(path: string, version: number, callback: Callback<void>): void;

    a_set_acl(path: string, version: number, acl: ACL[], callback: Callback<void>): void;

    a_get_acl(path: string, callback: acl_callback): void;

    add_auth(schema: string, auth: string, callback: Callback<void>): void;

    aw_exists(path: string, watch_callback: watch_callback, callback: Callback<Stat>): void;

    aw_get(path: string, watch_callback: watch_callback, callback: Callback<Buffer | string>): void;

    aw_get_children(path: string, watch_callback: watch_callback, callback: Callback<string[]>): void;

    aw_get_children2(path: string, watch_callback: watch_callback, callback: child2_callback): void;
}

declare namespace Zookeeper {
    // log levels
    const ZOO_LOG_LEVEL_ERROR = 1;
    const ZOO_LOG_LEVEL_WARN = 2;
    const ZOO_LOG_LEVEL_INFO = 3;
    const ZOO_LOG_LEVEL_DEBUG = 4;
    // acl permissions
    const ZOO_OPEN_ACL_UNSAFE: number;
    const ZOO_READ_ACL_UNSAFE: number;
    const ZOO_CREATOR_ALL_ACL: number;
    const ZOO_PERM_READ = 1;
    const ZOO_PERM_WRITE = 2;
    const ZOO_PERM_CREATE = 4;
    const ZOO_PERM_DELETE = 8;
    const ZOO_PERM_ADMIN = 16;
    const ZOO_PERM_ALL = 31;
    /** node is automatically removed when client session goes away */
    const ZOO_EPHEMERAL = 1;
    /** unique monotonically increasing sequence number is appended to the path name */
    const ZOO_SEQUENCE = 2;
}
