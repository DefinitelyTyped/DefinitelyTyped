// Type definitions for ip-to-int 0.3.1
// Project: https://github.com/joshuamarquez/node-ip-to-int
// Definitions by: Ryu JaeIL <https://github.com/dbwodlf3>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare module 'ip-to-int' {
    function ipInt(ip: string): { 
        "toInt": {(): number}
        "toIp": {(): string}
    }

    export = ipInt
}