export class ConnectionMeeting {
    /**
     * @deprecated
     * @type {string}
     */
    id: string;
    /**
     * @deprecated
     * @type {Map<string, ConnectionParticipant>}
     */
    participants: Map<string, ConnectionParticipant>;
    /**
     * @deprecated
     * @param peer
     */
    participantJoin(peer: any): void;
    /**
     * @deprecated
     * @param peer
     */
    participantLeft(peerId: any): void;
    /**
     * @deprecated
     * @param {string} message
     */
    sendChatMessage(message: string): void;
    /**
     * @deprecated
     * @param peer
     */
    sendChatMessageEvent({ participantId, message }: { participantId: any; message: any }): void;
    /**
     * @deprecated
     * @param peer
     */
    end(): Promise<void>;
    /**
     * @deprecated
     * Add event listener
     * @param {EV_PARTICIPANT_JOINED | EV_PARTICIPANT_LEFT | EV_CHAT_MESSAGE} eventType
     * @param {Function} listener Callback function
     */
    on(eventType: 'participant-joined' | 'participant-left' | 'chat-message', listener: Function): void;
    /**
     * @deprecated
     * Remove event listener
     * @param {EV_PARTICIPANT_JOINED | EV_PARTICIPANT_LEFT | EV_CHAT_MESSAGE} eventType
     * @param {Function} listener Callback function
     */
    off(eventType: 'participant-joined' | 'participant-left' | 'chat-message', listener: Function): void;
}
import { ConnectionParticipant } from './connectionParticipant';
