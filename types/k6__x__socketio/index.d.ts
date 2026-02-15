
declare module "k6/x/socketio" {
  interface SocketIOOptions {
    /**
     * Socket.IO path (default: "/socket.io/")
     */
    path?: string;
    /**
     * Namespace to connect to (default: "/")
     * Example: "/chat"
     */
    namespace?: string;
    /**
     * Auth payload sent in the connect packet
     */
    auth?: Record<string, any>;
    /**
     * Query parameters appended to the URL
     */
    query?: Record<string, any>;
    /**
     * Passed directly to k6/ws.connect
     */
    params?: {
      /** Request headers. */
      headers?: { [name: string]: string };

      /**
       * Compression algorithm. The only supported algorithm is `deflate`.
       * If the option is left unset or empty, it defaults to no compression.
       */
      compression?: string;

      /** Response time metric tags. */
      tags?: { [name: string]: string };
    };
  }

  /**
   * Socket.IO socket wrapper
   *
   * Provides Socket.IO-like API on top of k6/ws WebSocket connection.
   * Socket.IO-specific methods (on, emit, send) override the original k6/ws methods.
   * All other k6/ws socket methods are available as-is via the wrapper.
   */
  interface Socket {
    /**
         * Register an event handler (Socket.IO version)
         * Overrides the original k6/ws on() method
         *
         * @param event - Event name ("connect", "disconnect", or custom event)
         * @param handler - Handler function that receives event data
         */
    on(event: string, handler: (data?: any) => void): void;

    /**
      * Emit an event to the server (Socket.IO specific)
      *
      * @param event - Event name
      * @param data - Optional data to send with the event
      */
    emit(event: string, data?: any): void;

    /**
      * Send data (Socket.IO version - alias for emit("message", data))
      * Overrides the original k6/ws send() method
      *
      * @param data - Data to send
      */
    send(data: any): void;

    /**
      * Close connection.
      * https://grafana.com/docs/k6/latest/javascript-api/k6-ws/socket/socket-close/
      *
      * @param code - WebSocket status code.
      * @example
      * socket.close();
      */
    close(code?: number): void;
  }

  /**
   * Connect to a Socket.IO server
   *
   * @param host - Base URL such as "http://localhost:4000" or "wss://example.com"
   * @param options - Optional configuration
   * @param handler - Optional callback function called with a Socket.IO-like socket wrapper
   * @returns The underlying k6/ws.connect result
   *
   * @example
   * ```typescript
   * import { io } from "k6/x/socketio";
   *
   * io("http://localhost:4000", {}, (socket) => {
   *   socket.on("connect", () => {
   *     socket.emit("hello", { payload: "hi from k6" });
   *   });
   * });
   * ```
   */
  function io(
    host: string,
    options?: SocketIOOptions,
    handler?: (socket: Socket) => void
  ): any;

  export { io, Socket, SocketIOOptions };
}

declare module "xk6-socketio" {
  import { io, Socket, SocketIOOptions } from "k6/x/socketio";
  export { io, Socket, SocketIOOptions };
}