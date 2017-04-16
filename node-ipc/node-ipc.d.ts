// Type definitions for node-persist
// Project: http://riaevangelist.github.io/node-ipc/
// Definitions by: Adam Ringhede <https://github.com/adamringhede>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


declare module nodeIPC {
  export var config: nodeIPC.Config
  export var server: nodeIPC.Server
  interface Socket {
    address: string
    port: number
  }
  interface Server  {
    start (): void
    on (message: string, callback: (data: any, socket: nodeIPC.Socket) => any): void
    emit (socket: nodeIPC.Socket, type: string, data: Object): void
    define: {
      listen: {
        [type: string]: string
      }
    }
  }
  export var of: {
    [id: string]: {
      on (type: string, callback: (data: any) => any): void
      emit (type: string, data: any): void
    }
  }
  export interface Config {
    /**
     * used for Unix Socket (Unix Domain Socket) namespacing. If not set
     * specifically, the Unix Domain Socket will combine the socketRoot,
     * appspace, and id to form the Unix Socket Path for creation or binding.
     * This is available incase you have many apps running on your system, you
     * may have several sockets with the same id, but if you change the appspace,
     * you will still have app specic unique sockets.
     */
    appspace?: string
    /**
     * The directory in which to create or bind to a Unix Socket
     */
    socketRoot?: string
    /**
     * The id of this socket or service
     */
    id?: string
    /**
     * The local or remote host on which TCP, TLS or UDP Sockets should connect
     */
    networkHost?: string
    /**
     * The default port on which TCP, TLS, or UDP sockets should connect
     */
    networkPort?: number
    /**
     * The default encoding for data sent on sockets
     */
    encoding?: string
    /**
     * Turn on/off logging default is false which means logging is on
     */
    silent?: boolean
    /**
     * This is the max number of connections allowed to a socket. It is
     * currently only being set on Unix Sockets. Other Socket types are using
     * the system defaults.
     */
    maxConnections?: number
    /**
     * This is the time in milliseconds a client will wait before trying to
     * reconnect to a server if the connection is lost. This does not effect UDP
     * sockets since they do not have a client server relationship like Unix
     * Sockets and TCP Sockets.
     */
    retry?: number
    /**
     * If set, it represents the maximum number of retries after each disconnect
     * before giving up and completely killing a specific connection
     */
    maxRetries?: number|boolean
    /**
     * Defaults to false mwaning clients will continue to retryt to connect to
     * servers indefinately at the retry interval. If set to any number the client
     * will stop retrying when that number is exceeded after each disconnect. If
     * set to 0, the client will NOT try to reconnect.
     */
    stopRetrying?: boolean
  }
  export function log (message: string, ...messages: string[]): void

  export function connectTo (id: string, callback?: () => any): void
  export function connectTo (id: string, path?:string, callback?: () => any): void

  export function connectToNet (id: string, port?: number, callback?: () => any): void
  export function connectToNet (id: string, host?: string, callback?: () => any): void
  export function connectToNet (id: string, callback?: () => any): void

  export function disconnect (id: string): void

  export function serve (path: string, callback: () => any): void

  export function serveNet (host?: string, port?: number, UDPType?: string, callback?: () => any): void
  export function serveNet (port?: number, UDPType?: string, callback?: () => any): void
  export function serveNet (UDPType?: string, callback?: () => any): void
  export function serveNet (callback?: () => any): void
}

export = nodeIPC
