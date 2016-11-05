// Type definitions for bonjour v3.5.0
// Project: https://github.com/watson/bonjour
// Definitions by: Quentin Lampin <https://github.com/quentin-ol/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface BonjourOptions {
    multicast?: boolean;
    interface?: string;
    port?: number;
    ip?: string;
    ttl?: number;
    loopback?: boolean;
    reuseAddr?: boolean;
}

export interface BrowserOptions {
    type?: string;
    subtypes?: string[];
    protocol?: string;
    txt?: Object;
}

export interface ServiceOptions {
    name: string;
    host?: string;
    port: number;
    type: string;
    subtypes?: string[];
    protocol?: 'udp'|'tcp';
    txt?: Object;
}

export interface Service {
    name: string;
    type: string;
    subtypes: string[];
    protocol: string;
    host: string;
    port: number;
    fqdn: string;
    rawTxt: Object;
    txt: Object;
    published: boolean;

    stop: (cb: ()=>any) => void;
    start: () => void;
}

export class Bonjour {

    constructor(opts: BonjourOptions);
    publish(options: ServiceOptions):Service;
    unpublishAll(cb: ()=>any): void;
    find(options:BrowserOptions, onUp: ()=>any): Browser;
    findOne(options:any, cb: (service: Service)=>any): Browser;
    destroy():void;
}

export class Browser {
    services: Service[];

    start():void;
    update():void;
    stop():void;
}

export function find(options: BrowserOptions, onUp?: ()=>any): Browser;
export function findOne(options: BrowserOptions): Browser;
