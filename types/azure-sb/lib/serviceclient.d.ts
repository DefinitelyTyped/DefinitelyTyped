/// <reference types="node" />
import EventEmitter = NodeJS.EventEmitter;
declare class ServiceClient extends EventEmitter {
    public host: string;
    public port: number;
    public protocol: string;
}
export = ServiceClient;
