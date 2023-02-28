import Kahoot = require('../..');

declare class LiveBaseMessage {
    constructor(client: Kahoot, channel: string, data?: any);

    channel: string;
    clientId: undefined;
    data: {};
    ext: {};
}

export = LiveBaseMessage;
