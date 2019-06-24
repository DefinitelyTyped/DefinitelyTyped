import ReplayType from './ReplayType';
import VectorContext from './VectorContext';

export default class ReplayGroup {
    constructor();
    addDeclutter(group: boolean): any[];
    getReplay(zIndex: number, replayType: ReplayType): VectorContext;
    isEmpty(): boolean;
}
