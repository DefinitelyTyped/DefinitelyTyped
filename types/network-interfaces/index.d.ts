// Type definitions for network-interfaces 1.1
// Project: https://github.com/Wizcorp/network-interfaces#readme
// Definitions by: Anders Westberg <https://github.com/anderswestberg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function toIp(interfaceName: string, options: {}): string;
export function toIps(interfaceName: string, options: {}): string[];
export function fromIp(ip: string, options: {}): string;
export function getInterface(options: {}): string;
export function getInterfaces(options: {}): string[];
