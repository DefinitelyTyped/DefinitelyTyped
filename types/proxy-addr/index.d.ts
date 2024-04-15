/// <reference types="node" />
import { IncomingMessage } from "http";

export = proxyAddr;

declare function proxyAddr(
    req: IncomingMessage,
    trust: proxyAddr.Address | proxyAddr.Address[] | ((addr: string, i: number) => boolean),
): string;

declare namespace proxyAddr {
    function all(req: IncomingMessage, trust?: Address | Address[] | ((addr: string, i: number) => boolean)): string[];
    function compile(val: Address | Address[]): (addr: string, i: number) => boolean;

    type Address = "loopback" | "linklocal" | "uniquelocal" | string;
}
