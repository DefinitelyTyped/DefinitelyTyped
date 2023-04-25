export class Connection {
    constructor({ roomId, peers, payload }: {
        roomId: any;
        peers: any;
        payload: any;
    });
    /**
     * @type {string}
     */
    id: string;
    /**
     * @type {string}
     */
    payload: string;
    meeting: ConnectionMeeting;
    close(): void;
}
import { ConnectionMeeting } from "./connectionMeeting";