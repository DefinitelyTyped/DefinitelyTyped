// Type definitions for proxy-addr 2.0
// Project: https://github.com/jshttp/proxy-addr#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
import { IncomingMessage } from 'http';

export = proxyAddr;

declare function proxyAddr(req: IncomingMessage, trust: proxyAddr.Address | proxyAddr.Address[] | ((addr: string, i: number) => boolean)): string;

declare namespace proxyAddr {
    function all(req: IncomingMessage, trust?: Address | Address[] | ((addr: string, i: number) => boolean)): string[];
    function compile(val: Address | Address[]): (addr: string, i: number) => boolean;

    type Address = 'loopback' | 'linklocal' | 'uniquelocal' | string;
}
