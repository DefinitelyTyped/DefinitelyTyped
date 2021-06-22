// Type definitions for twilio-common 0.1
// Project: https://github.com/twilio/twilio-common.js, https://twilio.com
// Definitions by: William Lohan <https://github.com/gatimus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { EventEmitter } from 'events';

export class AccessManager extends EventEmitter {
    readonly expires?: Date;

    readonly identity?: string;

    readonly isExpired: boolean;

    readonly token: string;

    constructor(initialToken: string);

    updateToken(newToken: string): Promise<AccessManager>;

    on(type: 'error', listener: (error: Error) => void): this;

    on(type: 'tokenExpired' | 'tokenWillExpire' | 'tokenUpdated', listener: (manager: AccessManager) => void): this;
}
