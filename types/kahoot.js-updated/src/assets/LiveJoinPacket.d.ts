import Kahoot = require('../..');
import LiveBaseMessage = require('./LiveBaseMessage');

declare class LiveJoinPacket extends LiveBaseMessage {
    constructor(client: Kahoot, name?: string);
}

export = LiveJoinPacket;
