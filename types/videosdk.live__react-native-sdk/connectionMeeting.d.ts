export class ConnectionMeeting {
    /**
     * @deprecated
     */
    id: string;
    /**
     * @deprecated
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
     * @param eventType
     * @param listener Callback function
     */
    on(eventType: 'participant-joined' | 'participant-left' | 'chat-message', listener: (data: any) => void): void;
    /**
     * @deprecated
     * Remove event listener
     * @param eventType
     * @param listener Callback function
     */
    off(eventType: 'participant-joined' | 'participant-left' | 'chat-message', listener: (data: any) => void): void;
}
import { ConnectionParticipant } from './connectionParticipant';
