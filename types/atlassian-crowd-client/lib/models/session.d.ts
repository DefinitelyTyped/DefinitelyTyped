export = Session;
declare class Session {
    readonly token: string;
    readonly createdAt: Date;
    readonly expiresAt: Date;

    constructor(token: string, createdAt: Date, expiresAt: Date);
    toCrowd(): SessionObj;
    static fromCrowd(obj: SessionObj): Session;
}

interface SessionObj {
    readonly token: string;
    readonly "created-date": number;
    readonly "expiry-date": number;
}
