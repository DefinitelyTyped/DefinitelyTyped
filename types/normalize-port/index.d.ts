// Type definitions for normalize-port 1.0
// Project: https://github.com/aoberoi/normalize-port.js
// Definitions by: Alex Alonso <https://github.com/finaldes>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare module "normalize-port" {
    export = normalizePort;
}
declare function normalizePort(port: number): number | false;
declare function normalizePort(port: string | number): string | number | false;
