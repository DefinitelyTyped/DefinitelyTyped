import Kahoot = require('../..');
import LiveBaseMessage = require('./LiveBaseMessage');

declare class LiveJoinTeamPacket extends LiveBaseMessage {
    constructor(client: Kahoot, team: string[]);
}

export = LiveJoinTeamPacket;
