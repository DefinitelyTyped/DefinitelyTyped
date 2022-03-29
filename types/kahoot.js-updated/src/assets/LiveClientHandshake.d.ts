import Kahoot = require('../..');
import LiveBaseMessage = require('./LiveBaseMessage');

declare class LiveClientHandshake extends LiveBaseMessage {
    constructor(
        number: string | number,
        message: {
            l: number;
            o: number;
            readonly tc: number;
        },
        client: Kahoot,
    );
}

export = LiveClientHandshake;
