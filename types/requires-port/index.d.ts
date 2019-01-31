// Type definitions for requires-port 1.0
// Project: https://github.com/unshiftio/requires-port
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = requiresPort;

declare function requiresPort(port: string | number, protocol: requiresPort.Protocol): boolean;
declare function requiresPort(port: string | number, protocol: string): boolean; // tslint:disable-line:unified-signatures

declare namespace requiresPort {
    type Protocol = 'http' | 'https' | 'ws' | 'wss' | 'ftp' | 'gopher' | 'file';
}
