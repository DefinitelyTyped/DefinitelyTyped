export class ConnectionMeeting {
    constructor(roomId: any, peers: any);
    eventEmitter: EventEmitter;
    /**
     * @type {string}
     */
    id: string;
    /**
     * @type {Map<string, ConnectionParticipant>}
     */
    participants: Map<string, ConnectionParticipant>;
    participantJoin(peer: any): void;
    participantLeft(peerId: any): void;
    /**
     *
     * @param {string} message
     */
    sendChatMessage(message: string): void;
    sendChatMessageEvent({ participantId, message }: {
        participantId: any;
        message: any;
    }): void;
    end(): Promise<void>;
    /**
     * Add event listener
     * @param {EV_PARTICIPANT_JOINED | EV_PARTICIPANT_LEFT | EV_CHAT_MESSAGE} eventType
     * @param {Function} listener Callback function
     */
    on(eventType: "participant-joined" | "participant-left" | "chat-message", listener: Function): void;
    /**
     * Remove event listener
     * @param {EV_PARTICIPANT_JOINED | EV_PARTICIPANT_LEFT | EV_CHAT_MESSAGE} eventType
     * @param {Function} listener Callback function
     */
    off(eventType: "participant-joined" | "participant-left" | "chat-message", listener: Function): void;
}
import { EventEmitter } from "events";
import { ConnectionParticipant } from "./connectionParticipant";