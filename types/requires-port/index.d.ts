export = requiresPort;

declare function requiresPort(port: string | number, protocol: requiresPort.Protocol): boolean;
declare function requiresPort(port: string | number, protocol: string): boolean; // tslint:disable-line:unified-signatures

declare namespace requiresPort {
    type Protocol = "http" | "https" | "ws" | "wss" | "ftp" | "gopher" | "file";
}
