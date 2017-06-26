// Type definitions for portscanner 2.1
// Project: https://github.com/baalexander/node-portscanner
// Definitions by: Douglas Duteil <https://github.com/douglasduteil>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'portscanner' {
    type Status = 'open' | 'closed';

    type PortCallback = (error: Error | null, port: number) => void;
    type StatusCallback = (error: Error | null, port: Status) => void;

    interface Options {
        host?: string;
        timeout?: number;
    }

    function checkPortStatus(port: number): Promise<Status>;

    function checkPortStatus(port: number, host: string): Promise<Status>;
    function checkPortStatus(port: number, opts: Options): Promise<Status>;
    function checkPortStatus(port: number, checkPortCallback: StatusCallback): void;

    function checkPortStatus(port: number, host: string, opts: Options): Promise<Status>;
    function checkPortStatus(port: number, host: string, checkPortCallback: StatusCallback): void;
    function checkPortStatus(port: number, opts: Options, checkPortCallback: StatusCallback): void;

    function checkPortStatus(port: number, host: string, opts: Options, checkPortCallback: StatusCallback): void;

    function findAPortNotInUse(portList: number[]): Promise<number>;
    function findAPortNotInUse(startPort: number): Promise<number>;

    function findAPortNotInUse(portList: number[], findPortCallback: PortCallback): void;
    function findAPortNotInUse(portList: number[], host: string): Promise<number>;
    function findAPortNotInUse(startPort: number, findPortCallback: PortCallback): void;
    function findAPortNotInUse(startPort: number, host: string): Promise<number>;
    function findAPortNotInUse(startPort: number, endPort: number): Promise<number>;

    function findAPortNotInUse(startPort: number, endPort: number, host: string): Promise<number>;
    function findAPortNotInUse(startPort: number, endPort: number, findPortCallback: PortCallback): void;

    function findAPortNotInUse(startPort: number, endPort: number, host: string, findPortCallback: PortCallback): void;

    function findAPortInUse(portList: number[]): Promise<number>;
    function findAPortInUse(startPort: number): Promise<number>;

    function findAPortInUse(portList: number[], findPortCallback: PortCallback): void;
    function findAPortInUse(portList: number[], host: string): Promise<number>;
    function findAPortInUse(startPort: number, findPortCallback: PortCallback): void;
    function findAPortInUse(startPort: number, host: string): Promise<number>;
    function findAPortInUse(startPort: number, endPort: number): Promise<number>;

    function findAPortInUse(startPort: number, endPort: number, host: string): Promise<number>;
    function findAPortInUse(startPort: number, endPort: number, findPortCallback: PortCallback): void;

    function findAPortInUse(startPort: number, endPort: number, host: string, findPortCallback: PortCallback): void;
}
