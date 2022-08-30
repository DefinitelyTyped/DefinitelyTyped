import Kahoot = require('../..');
import LiveBaseMessage = require('./LiveBaseMessage');

declare class LiveTwoStepAnswer extends LiveBaseMessage {
    constructor(client: Kahoot, sequence: number[]);
}

export = LiveTwoStepAnswer;
