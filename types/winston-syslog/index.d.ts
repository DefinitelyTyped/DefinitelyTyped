// Type definitions for winston-syslog 2.0
// Project: https://github.com/winstonjs/winston-syslog, https://github.com/indexzero/winston-syslog
// Definitions by: Chris Barth <https://github.com/cjbarth>, Felix Hochgruber <https://github.com/felix-hoc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import * as Transport from 'winston-transport';
import * as dgram from 'dgram';
import * as net from 'net';

export interface SyslogTransportOptions extends Transport.TransportStreamOptions {
    host?: string;
    port?: number;
    path?: string;
    protocol?: string;
    pid?: number;
    facility?: string;
    localhost?: string;
    type?: string;
    app_name?: string;
    eol?: string;
}

export interface SyslogTransportInstance extends Transport {
    producer: any;
    socket: dgram.Socket | net.Socket;

    connect(callback: (err: (true | null)) => any): void;

    new(options?: SyslogTransportOptions): SyslogTransportInstance;
}

export const Syslog: SyslogTransportInstance;
