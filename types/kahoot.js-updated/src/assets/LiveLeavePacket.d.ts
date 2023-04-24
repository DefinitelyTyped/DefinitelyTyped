import Kahoot = require('../..');
import LiveBaseMessage = require('./LiveBaseMessage');

declare class LiveLeavePacket extends LiveBaseMessage {
    constructor(client: Kahoot);
}

export = LiveLeavePacket;
