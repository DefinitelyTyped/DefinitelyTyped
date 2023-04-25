export class ConnectionParticipant {
    constructor(
        {
            id,
            displayName,
        }: {
            id: any;
            displayName: any;
        },
        connectionRoomId: any,
    );
    /**
     * @deprecated
     * @type {string}
     */
    id: string;
    /**
     * @deprecated
     * @type {string}
     */
    displayName: string;
    /**
     * @deprecated
     *@param {{meetingId: string, payload: string, token:string }} options
     */
    switchTo({ meetingId, payload, token }: { meetingId: string; payload: string; token: string }): Promise<void>;
}
//# sourceMappingURL=connectionParticipant.d.ts.map
