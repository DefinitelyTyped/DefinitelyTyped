// Type definitions for normalize-port 1.16
// Project: git@github.com:aoberoi/normalize-port.js.git
// Definitions by: Alex Alonso <https://github.com/finaldes>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare module "normalize-port" {
    export = normalizePort;
}
declare function normalizePort(port: any): number;
