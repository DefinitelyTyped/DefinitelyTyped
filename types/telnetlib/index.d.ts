// Type definitions for telnetlib 1.0
// Project: https://github.com/cadpnq/telnetlib
// Definitions by: Martin Badin <https://github.com/martin-badin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as net from 'net';
import * as events from 'events';

export as namespace telnetlib;

export enum Commands {
    EOR = 239,
    SE = 240,
    NOP = 241,
    DM = 242,
    BRK = 243,
    IP = 244,
    AO = 245,
    AYT = 246,
    EC = 247,
    EL = 248,
    GA = 249,
    SB = 250,
    WILL = 251,
    WONT = 252,
    DO = 253,
    DONT = 254,
    IAC = 255,
}

export enum OptionState {
    NO = 'NO',
    YES = 'YES',
    WANTNO = 'WANTNO',
    WANTYES = 'WANTYES',
}

export enum Q {
    EMPTY = 'EMPTY',
    OPPOSITE = 'OPPOSITE',
}

export enum Where {
    REMOTE = 'REMOTE',
    LOCAL = 'LOCAL',
}

export enum State {
    DATA = 'DATA',
    IAC = 'IAC',
    WILL = 'WILL',
    WONT = 'WONT',
    DO = 'DO',
    DONT = 'DONT',
    SB = 'SB',
    SBIAC = 'SBIAC',
}

export enum Reason {
    DATA = 'DATA',
    GA = 'GA',
    EOR = 'EOR',
    CHUNK = 'CHUNK',
}

/**
 * @see {@link https://github.com/cadpnq/telnetlib/blob/main/src/TelnetSocket/TelnetSocket.js}
 */
export class TelnetSocket extends net.Socket {
    constructor(socket: net.Socket, options: Options);

    enableRemote(option: TelnetOption, timeout?: number): void;
    disableRemote(option: TelnetOption, timeout?: number): void;

    enableLocal(option: TelnetOption, timeout?: number): void;
    disableLocal(option: TelnetOption, timeout?: number): void;

    getOption<T extends TelnetOption>(code: T): T;

    negotiate(): Promise<any>;
}

/**
 * @see {@link https://github.com/cadpnq/telnetlib/blob/main/src/Options/TelnetOption.js}
 */
export class TelnetOption extends events.EventEmitter {
    constructor(socet: net.Socket, code: number);

    get us(): OptionState;
    set us(us: OptionState);

    get him(): OptionState;
    set him(him: OptionState);

    enabled(at: At): void;
    disabled(at: At): void;

    subnegotiation(buffer: any): void;

    handleWill(): void;
    handleWont(): void;
    handleDo(): void;
    handleDont(): void;
}

/**
 * @see {@link https://github.com/cadpnq/telnetlib/blob/main/src/Options/GMCP.js}
 */
export class GMCP extends TelnetOption {
    constructor(socket: net.Socket);

    send(packageName: string, messageName: string, data?: {}): void;
}

/**
 * @see {@link https://github.com/cadpnq/telnetlib/blob/main/src/Options/MCCP.js}
 */
export class MCCP extends TelnetOption {
    endCompression(callback?: () => {}): void;
}

/**
 * @see {@link https://github.com/cadpnq/telnetlib/blob/main/src/Options/NAWS.js}
 */
export class NAWS extends TelnetOption {
    constructor(socket: net.Socket);

    sendResize(width?: number, height?: number): void;
}

/**
 * @see {@link https://github.com/cadpnq/telnetlib/blob/main/src/Options/SGA.js}
 */
export class SGA extends TelnetOption {
    constructor(socket: net.Socket);
}

/**
 * @see {@link https://github.com/cadpnq/telnetlib/blob/main/src/options.js}
 */
export class TRANSMIT_BINARY extends TelnetOption {}
export class ECHO extends TelnetOption {}

export interface Options<T extends TelnetOption = TelnetOption> {
    localOptions?: T[];
    receiveBuffermax?: number;
    remoteOptions?: T[];
    subnegotiationBufferMax?: number;
}

export type At = 'LOCAL' | 'REMOTE';

export const options: {
    ECHO: ECHO;
    GMCP: GMCP;
    MCCP: MCCP;
    NAWS: NAWS;
    SGA: SGA;
    TRANSMIT_BINARY: TRANSMIT_BINARY;
};

export const constants: {
    commands: Commands;
    options: {};
    optionState: OptionState;
    q: Q;
    reason: Reason;
    state: State;
    where: Where;
};

/**
 * @see {@link https://github.com/cadpnq/telnetlib#telnetlibcreateserveroptions-handler}
 */
export function createServer(connectionListener?: (socket: net.Socket) => void): net.Server;
export function createServer(
    options?: net.ServerOpts & Options,
    connectionListener?: (socket: net.Socket & TelnetSocket) => void,
): net.Server;

/**
 * @see {@link https://github.com/cadpnq/telnetlib#telnetlibcreateconnectionoptions-handler}
 */
export function createConnection(
    options: (net.NetConnectOpts & Options) | string,
    connectionListener?: () => void,
): TelnetSocket;
export function createConnection(port: number, host?: string, connectionListener?: () => void): TelnetSocket;

/**
 * @see {@link https://github.com/cadpnq/telnetlib/blob/main/src/options.js}
 */
export function getOption<T extends TelnetOption>(code: T): T;
export function defineOption(name: string, code: number, handler?: TelnetOption): void;
