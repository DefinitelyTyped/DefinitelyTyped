import { EventEmitter } from "events";

export class AccessManager extends EventEmitter {
    readonly expires?: Date | undefined;

    readonly identity?: string | undefined;

    readonly isExpired: boolean;

    readonly token: string;

    constructor(initialToken: string);

    updateToken(newToken: string): Promise<AccessManager>;

    on(type: "error", listener: (error: Error) => void): this;

    on(type: "tokenExpired" | "tokenWillExpire" | "tokenUpdated", listener: (manager: AccessManager) => void): this;
}
