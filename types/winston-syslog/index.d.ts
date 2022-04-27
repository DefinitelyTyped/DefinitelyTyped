// Type definitions for winston-syslog 2.4
// Project: https://github.com/winstonjs/winston-syslog, https://github.com/indexzero/winston-syslog
// Definitions by: Chris Barth <https://github.com/cjbarth>, Felix Hochgruber <https://github.com/felix-hoc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="node" />
import * as Transport from 'winston-transport';
import * as dgram from 'dgram';
import * as glossy from 'glossy';
import * as net from 'net';

export interface SyslogTransportOptions extends Transport.TransportStreamOptions {
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
    customProducer?: typeof glossy.Produce;
}

export interface SyslogTransportInstance extends Transport {
    producer: any;
    socket: dgram.Socket | net.Socket;

    connect(callback: (err: (true | null)) => any): void;

    new(options?: SyslogTransportOptions): SyslogTransportInstance;
}

export const Syslog: SyslogTransportInstance;
