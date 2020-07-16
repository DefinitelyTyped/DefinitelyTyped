// Type definitions for default-gateway 3.0
// Project: https://github.com/silverwind/default-gateway#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
//                 Michele Della Mea <https://github.com/ArcaneDiver>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export const v4: DefaultGatewayFn;
export const v6: DefaultGatewayFn;

export interface DefaultGatewayFn {
    (): Promise<Gateway>;
    sync(): Gateway;
}

export interface Gateway {
    gateway: string;
    interface: string;
}
