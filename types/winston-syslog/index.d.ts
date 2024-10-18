/// <reference types="node" />
import * as dgram from "dgram";
import * as glossy from "glossy";
import * as net from "net";
import * as Transport from "winston-transport";

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

    connect(callback: (err: true | null) => any): void;

    new(options?: SyslogTransportOptions): SyslogTransportInstance;
}

export const Syslog: SyslogTransportInstance;
