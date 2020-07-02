/// <reference path="./Tunnel.d.ts" />

declare module 'guacamole-client' {
  /**
   * Guacamole Tunnel implemented over WebSocket via XMLHttpRequest.
   * @constructor
   * @param tunnelURL The URL of the WebSocket tunneling service.
   */
  export class WebSocketTunnel extends Tunnel {
    constructor(tunnelURL: string);
  }
}
