/// <reference path="./OutputStream.d.ts" />
/// <reference path="./Status.d.ts" />

declare module 'guacamole-client' {
  /**
   * A writer which automatically writes to the given output stream with text
   * data.
   *
   * @constructor
   * @param stream The stream that data will be written to.
   */
  export class StringWriter {
    constructor(stream: OutputStream);

    /**
     * Sends the given text.
     * @param text The text to send.
     */
    sendText(text: string): void;

    /**
     * Signals that no further text will be sent, effectively closing the
     * stream.
     */
    sendEnd(): void;

    /**
     * Fired for received data, if acknowledged by the server.
     * @event
     * @param {Guacamole.Status} status The status of the operation.
     */
    onack: null | ((status: Status) => void);
  }
}
