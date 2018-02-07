// Type definitions for portscanner 2.1
// Project: https://github.com/baalexander/node-portscanner
// Definitions by: Douglas Duteil <https://github.com/douglasduteil>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type Status = 'open' | 'closed';

export type PortCallback = (error: Error | null, port: number) => void;
export type StatusCallback = (error: Error | null, port: Status) => void;

export interface Options {
    host?: string;
    timeout?: number;
}

export function checkPortStatus(port: number): Promise<Status>;

export function checkPortStatus(port: number, host: string): Promise<Status>;
export function checkPortStatus(port: number, opts: Options): Promise<Status>;
export function checkPortStatus(port: number, checkPortCallback: StatusCallback): void;

export function checkPortStatus(port: number, host: string, opts: Options): Promise<Status>;
export function checkPortStatus(port: number, host: string, checkPortCallback: StatusCallback): void;
export function checkPortStatus(port: number, opts: Options, checkPortCallback: StatusCallback): void;

export function checkPortStatus(port: number, host: string, opts: Options, checkPortCallback: StatusCallback): void;

export function findAPortNotInUse(portList: number[]): Promise<number>;
export function findAPortNotInUse(startPort: number): Promise<number>;

export function findAPortNotInUse(portList: number[], findPortCallback: PortCallback): void;
export function findAPortNotInUse(portList: number[], host: string): Promise<number>;
export function findAPortNotInUse(startPort: number, findPortCallback: PortCallback): void;
export function findAPortNotInUse(startPort: number, host: string): Promise<number>;
export function findAPortNotInUse(startPort: number, endPort: number): Promise<number>;

export function findAPortNotInUse(startPort: number, endPort: number, host: string): Promise<number>;
export function findAPortNotInUse(startPort: number, endPort: number, findPortCallback: PortCallback): void;

export function findAPortNotInUse(startPort: number, endPort: number, host: string, findPortCallback: PortCallback): void;

export function findAPortInUse(portList: number[]): Promise<number>;
export function findAPortInUse(startPort: number): Promise<number>;

export function findAPortInUse(portList: number[], findPortCallback: PortCallback): void;
export function findAPortInUse(portList: number[], host: string): Promise<number>;
export function findAPortInUse(startPort: number, findPortCallback: PortCallback): void;
export function findAPortInUse(startPort: number, host: string): Promise<number>;
export function findAPortInUse(startPort: number, endPort: number): Promise<number>;

export function findAPortInUse(startPort: number, endPort: number, host: string): Promise<number>;
export function findAPortInUse(startPort: number, endPort: number, findPortCallback: PortCallback): void;

export function findAPortInUse(startPort: number, endPort: number, host: string, findPortCallback: PortCallback): void;
