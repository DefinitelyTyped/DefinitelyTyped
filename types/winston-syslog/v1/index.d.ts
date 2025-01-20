import * as winston from "winston";
export interface SyslogTransportOptions extends winston.GenericTextTransportOptions {
    host?: string | undefined;
    port?: number | undefined;
    path?: string | undefined;
    protocol?: string | undefined;
    pid?: number | undefined;
    facility?: string | undefined;
    localhost?: string | undefined;
    type?: string | undefined;
    app_name?: string | undefined;
    eol?: string | undefined;
}
export class Syslog extends winston.Transport implements winston.TransportInstance {
}
declare module "winston" {
    interface Transports {
        Syslog: Syslog;
    }
}
