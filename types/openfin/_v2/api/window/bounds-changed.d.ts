import { Reply } from '../base';
export default class BoundsChangedReply extends Reply<'window', 'bounds-changed'> {
    changeType: BoundsChangeType;
    deferred: boolean;
    height: number;
    width: number;
    top: number;
    left: number;
}
export declare const enum BoundsChangeType {
    POSITION = 0,
    SIZE = 1,
    POSITION_AND_SIZE = 2
}
