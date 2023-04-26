export class ConnectionParticipant {
    /**
     * @deprecated
     */
    id: string;
    /**
     * @deprecated
     */
    displayName: string;
    /**
     * @deprecated
     * @param  options
     */
    switchTo({ meetingId, payload, token }: { meetingId: string; payload: string; token: string }): Promise<void>;
}
