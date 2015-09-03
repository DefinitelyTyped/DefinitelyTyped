// Type definitions for request-ip
// Project: https://github.com/pbojinov/request-ip
// Definitions by: Adam Babcock <https://github.com/mrhen>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "request-ip" {
    interface Request {
        headers: {
            'x-client-ip'?: string;
            'x-forwarded-for'?: string;
            'x-real-ip'?: string;
            'x-cluster-client-ip'?: string;
            'x-forwarded'?: string;
            'forwarded-for'?: string;
            'forwarded'?: string;
        };
        connection: {
            remoteAddress?: string;
            socket?: {
                remoteAddress?: string
            };
        };
        info?: {
            remoteAddress?: string
        };
        socket?: {
            remoteAddress?: string
        };
    }

    export function getClientIp(req:Request):string;
}
