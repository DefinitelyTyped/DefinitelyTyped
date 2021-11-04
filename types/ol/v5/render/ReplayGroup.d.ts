import ReplayType from './ReplayType';
import VectorContext from './VectorContext';

export default class ReplayGroup {
    constructor();
    addDeclutter(group: boolean): any[];
    getReplay(zIndex: number | undefined, replayType: ReplayType): VectorContext;
    isEmpty(): boolean;
}
