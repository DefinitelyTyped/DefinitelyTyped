// Type definitions for ip-to-int 0.3
// Project: https://github.com/joshuamarquez/node-ip-to-int#readme
// Definitions by: Cogi <https://github.com/dbwodlf3>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function ipInt(ip: string): { 
        "toInt": {(): number}
        "toIp": {(): string}
}