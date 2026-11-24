/// <reference types="node" />
import { IncomingMessage } from "http";

export = proxyAddr;

declare function proxyAddr(
    req: IncomingMessage,
    trust: proxyAddr.Address | readonly proxyAddr.Address[] | ((addr: string, i: number) => boolean),
): string;

declare namespace proxyAddr {
    function all(
        req: IncomingMessage,
        trust?: Address | readonly Address[] | ((addr: string, i: number) => boolean),
    ): string[];
    function compile(val: Address | readonly Address[]): (addr: string, i: number) => boolean;

    type Address = "loopback" | "linklocal" | "uniquelocal" | string;
}
