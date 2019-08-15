import { EventEmitter } from 'events';
import { ConnectionParams } from '../TeamSpeak3';

declare class TS3Query extends EventEmitter {
    constructor(config: ConnectionParams);

    /**
     * Handles any TeamSpeak Query Response Line
     * @param - error line from teamspeak
     */
    handleLine(line: string): void;

    /**
     * Handles the error line which finnishes a command
     * @param - error line from teamspeak
     */
    handleQueryError(line: string): void;

    /**
     * Handles an event which has been received from the TeamSpeak Server
     * @param - event line from TeamSpeak
     */
    handleQueryEvent(line: string): void;

    /**
     * Emits an Error which the given arguments
     * @param - arguments which gets passed to the error event
     */
    handleError(...args: any[]): void;

    /**
     * Sends keepalive to the TeamSpeak Server so the connection will not be closed
     */
    keepAlive(): void;

    /**
     * Whether Double Events should be handled or not
     * @param - Parameter enables or disables the Double Event Handling. Defaults to true.
     */
    handleDoubleEvents(b?: boolean): void;

    /**
     * Sends a command to the TeamSpeak Server.
     * @param - parameters which should get executed
     * @returns - a Promise object which returns the Information about the Query executed
     */
    execute(...args: any[]): Promise<any>;
}

export = TS3Query;
