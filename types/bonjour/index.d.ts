// Type definitions for bonjour 3.5
// Project: https://github.com/watson/bonjour
// Definitions by: Quentin Lampin <https://github.com/quentin-ol>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { RemoteInfo } from 'dgram';

declare function bonjour(opts?: bonjour.BonjourOptions): bonjour.Bonjour;
export = bonjour;
declare namespace bonjour {
    /**
     * Start a browser
     *
     * The browser listens for services by querying for PTR records of a given
     * type, protocol and domain, e.g. _http._tcp.local.
     *
     * If no type is given, a wild card search is performed.
     *
     * An internal list of online services is kept which starts out empty. When
     * ever a new service is discovered, it's added to the list and an "up" event
     * is emitted with that service. When it's discovered that the service is no
     * longer available, it is removed from the list and a "down" event is emitted
     * with that service.
     */
    interface Browser extends NodeJS.EventEmitter {
        services: RemoteService[];
        start(): void;
        update(): void;
        stop(): void;
        on(event: 'up' | 'down', listener: (service: RemoteService) => void): this;
        once(event: 'up' | 'down', listener: (service: RemoteService) => void): this;
        removeListener(event: 'up' | 'down', listener: (service: RemoteService) => void): this;
        removeAllListeners(event?: 'up' | 'down'): this;
    }
    interface BrowserOptions {
        type?: string | undefined;
        subtypes?: string[] | undefined;
        protocol?: string | undefined;
        txt?: { [key: string]: string } | undefined;
    }

    interface ServiceOptions {
        name: string;
        host?: string | undefined;
        port: number;
        type: string;
        subtypes?: string[] | undefined;
        protocol?: 'udp'|'tcp' | undefined;
        txt?: { [key: string]: string } | undefined;
        probe?: boolean | undefined;
    }

    interface BaseService {
        name: string;
        fqdn: string;
        host: string;
        port: number;
        type: string;
        protocol: string;
        subtypes: string[];
        txt: { [key: string]: string };
    }
    interface RemoteService extends BaseService {
        referer: RemoteInfo;
        rawTxt: Buffer;
        addresses: string[];
    }
    interface Service extends BaseService, NodeJS.EventEmitter {
        published: boolean;
        addresses: string[];

        stop(cb?: () => void): void;
        start(): void;
    }
    interface BonjourOptions {
        type?: 'udp4' | 'udp6' | undefined;
        multicast?: boolean | undefined;
        interface?: string | undefined;
        port?: number | undefined;
        ip?: string | undefined;
        ttl?: number | undefined;
        loopback?: boolean | undefined;
        reuseAddr?: boolean | undefined;
    }
    interface Bonjour {
        (opts?: BonjourOptions): Bonjour;
        publish(options: ServiceOptions): Service;
        unpublishAll(cb?: () => void): void;
        find(options: BrowserOptions, onUp?: (service: RemoteService) => void): Browser;
        findOne(options: BrowserOptions, cb?: (service: RemoteService) => void): Browser;
        destroy(): void;
    }
}
