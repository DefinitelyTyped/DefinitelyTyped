// Type definitions for port-numbers 5.0
// Project: https://github.com/silverwind/port-numbers#readme
// Definitions by: Alex Bradley <https://github.com/abradley>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface ServiceInfo {
    readonly name: string;
    readonly description: string;
}

export interface PortInfo {
    readonly port: number;
    readonly protocol: string;
    readonly description: string;
}

export function getService(port: number, protocol?: string): ServiceInfo | null;
export function getPort(service: string, protocol?: string): PortInfo | null;
