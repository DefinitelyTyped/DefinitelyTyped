export class Connection {
    constructor({ roomId, peers, payload }: { roomId: any; peers: any; payload: any });
    /**
     * @deprecated
     * @type {string}
     */
    id: string;
    /**
     * @deprecated
     * @type {string}
     */
    payload: string;
    /**
     * @deprecated
     */
    meeting: ConnectionMeeting;
    /**
     * @deprecated
     */
    close(): void;
}
import { ConnectionMeeting } from './connectionMeeting';
