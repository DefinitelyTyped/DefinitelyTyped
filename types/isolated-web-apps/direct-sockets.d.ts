/**
 * Generated from:
 * - multicast_controller.idl
 * - socket_connection.idl
 * - socket_options.idl
 * - tcp_server_socket.idl
 * - tcp_socket.idl
 * - udp_message.idl
 * - udp_socket.idl
 *
 * @see https://github.com/WICG/direct-sockets/blob/main/docs/explainer.md
 */

/** @remarks Extended attributes: [Exposed=Window, DedicatedWorker, SharedWorker, ServiceWorker, ActiveScriptWrappable, SecureContext, IsolatedContext] */
declare global {
  class UDPSocket {
    /** @remarks Extended attributes: [CallWith=ScriptState, RaisesException, MeasureAs=UDPSocketConstructor] */
    constructor(options: UDPSocketOptions);
    /** @remarks Extended attributes: [CallWith=ScriptState, MeasureAs=UDPSocketOpenedAttribute] */
    readonly opened: Promise<UDPSocketOpenInfo>;
    /** @remarks Extended attributes: [CallWith=ScriptState, MeasureAs=UDPSocketClosedAttribute] */
    readonly closed: Promise<undefined>;
    /** @remarks Extended attributes: [CallWith=ScriptState, RaisesException, MeasureAs=UDPSocketCloseFunction] */
    close(): Promise<undefined>;
  }
}
export type UDPSocket = globalThis.UDPSocket;

export interface UDPMessage {
  data?: BufferSource;
  remoteAddress?: string;
  remotePort?: number;
  dnsQueryType?: SocketDnsQueryType;
}

/** @remarks Extended attributes: [Exposed=Window, DedicatedWorker, SharedWorker, ServiceWorker, ActiveScriptWrappable, SecureContext, IsolatedContext] */
declare global {
  class TCPSocket {
    /** @remarks Extended attributes: [CallWith=ScriptState, RaisesException, MeasureAs=TCPSocketConstructor] */
    constructor(remoteAddress: string, remotePort: number, options?: TCPSocketOptions);
    /** @remarks Extended attributes: [CallWith=ScriptState, MeasureAs=TCPSocketOpenedAttribute] */
    readonly opened: Promise<TCPSocketOpenInfo>;
    /** @remarks Extended attributes: [CallWith=ScriptState, MeasureAs=TCPSocketClosedAttribute] */
    readonly closed: Promise<undefined>;
    /** @remarks Extended attributes: [CallWith=ScriptState, RaisesException, MeasureAs=TCPSocketCloseFunction] */
    close(): Promise<undefined>;
  }
}
export type TCPSocket = globalThis.TCPSocket;

/** @remarks Extended attributes: [Exposed=Window, DedicatedWorker, SharedWorker, ServiceWorker, SecureContext, IsolatedContext] */
declare global {
  class TCPServerSocket {
    /** @remarks Extended attributes: [CallWith=ScriptState, RaisesException, MeasureAs=TCPServerSocketConstructor] */
    constructor(localAddress: string, options?: TCPServerSocketOptions);
    /** @remarks Extended attributes: [CallWith=ScriptState, MeasureAs=TCPServerSocketOpenedAttribute] */
    readonly opened: Promise<TCPServerSocketOpenInfo>;
    /** @remarks Extended attributes: [CallWith=ScriptState, MeasureAs=TCPServerSocketClosedAttribute] */
    readonly closed: Promise<undefined>;
    /** @remarks Extended attributes: [CallWith=ScriptState, RaisesException, MeasureAs=TCPServerSocketCloseFunction] */
    close(): Promise<undefined>;
  }
}
export type TCPServerSocket = globalThis.TCPServerSocket;

export type SocketDnsQueryType =
  | "ipv4"
  | "ipv6";

export interface SocketOptions {
  /** @remarks Extended attributes: [EnforceRange] */
  sendBufferSize?: number;
  /** @remarks Extended attributes: [EnforceRange] */
  receiveBufferSize?: number;
}

export interface TCPSocketOptions extends SocketOptions {
  /** @default false */
  noDelay?: boolean;
  /** @remarks Extended attributes: [EnforceRange] */
  keepAliveDelay?: number;
  dnsQueryType?: SocketDnsQueryType;
}

export interface UDPSocketOptions extends SocketOptions {
  remoteAddress?: string;
  /** @remarks Extended attributes: [EnforceRange] */
  remotePort?: number;
  localAddress?: string;
  /** @remarks Extended attributes: [EnforceRange] */
  localPort?: number;
  dnsQueryType?: SocketDnsQueryType;
  ipv6Only?: boolean;
  /** @remarks Extended attributes: [RuntimeEnabled=MulticastInDirectSockets] */
  multicastAllowAddressSharing?: boolean;
  /** @remarks Extended attributes: [RuntimeEnabled=MulticastInDirectSockets, EnforceRange] */
  multicastTimeToLive?: number;
  /** @remarks Extended attributes: [RuntimeEnabled=MulticastInDirectSockets] */
  multicastLoopback?: boolean;
}

export interface TCPServerSocketOptions {
  /** @remarks Extended attributes: [EnforceRange] */
  localPort?: number;
  /** @remarks Extended attributes: [EnforceRange] */
  backlog?: number;
  ipv6Only?: boolean;
}

export interface SocketOpenInfo {
  readable?: ReadableStream;
  writable?: WritableStream;
  remoteAddress?: string;
  remotePort?: number;
  localAddress?: string;
  localPort?: number;
}

export type TCPSocketOpenInfo = SocketOpenInfo;

export interface UDPSocketOpenInfo extends SocketOpenInfo {
  /** @remarks Extended attributes: [RuntimeEnabled=MulticastInDirectSockets] */
  multicastController?: MulticastController;
}

export interface TCPServerSocketOpenInfo {
  readable?: ReadableStream;
  localAddress?: string;
  localPort?: number;
}

/** @remarks Extended attributes: [RuntimeEnabled=MulticastInDirectSockets, Exposed=Window, DedicatedWorker, SharedWorker, ServiceWorker, SecureContext, IsolatedContext] */
declare global {
  interface MulticastController {
    /** @remarks Extended attributes: [CallWith=ScriptState, RaisesException, MeasureAs=MulticastControllerJoinGroupFunction] */
    joinGroup(ipAddress: string): Promise<undefined>;
    /** @remarks Extended attributes: [CallWith=ScriptState, RaisesException, MeasureAs=MulticastControllerLeaveGroupFunction] */
    leaveGroup(ipAddress: string): Promise<undefined>;
    /** @remarks Extended attributes: [MeasureAs=MulticastControllerJoinedGroupsAttribute] */
    readonly joinedGroups: readonly string[];
  }
}
export type MulticastController = globalThis.MulticastController;
