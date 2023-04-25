export class ConnectionParticipant {
    constructor({ id, displayName }: {
        id: any;
        displayName: any;
    }, connectionRoomId: any);
    /**
     * @type {string}
     */
    id: string;
    /**
     * @type {string}
     */
    displayName: string;
    /**
     *@param {{meetingId: string, payload: string, token:string }} options
     */
    switchTo({ meetingId, payload, token }: {
        meetingId: string;
        payload: string;
        token: string;
    }): Promise<void>;
}
//# sourceMappingURL=connectionParticipant.d.ts.map