// Type definitions for @rdfjs/score 0.1
// Project: https://github.com/rdfjs-base/score
// Definitions by: tpluscode <https://github.com/tpluscode>
//                 Jesse Wright <https://github.com/jeswr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import { DatasetCore, Quad_Graph, Term } from '@rdfjs/types';

export { default as combine } from './combine';
export { default as concat } from './concat';
export { default as count } from './count';
export { default as distinct } from './distinct';
export { default as exists } from './exists';
export { default as fallback } from './fallback';
export { default as fixed } from './fixed';
export { default as language } from './language';
export { default as pageRank } from './pageRank';
export { default as pathDepth } from './pathDepth';
export { default as prioritized } from './prioritized';
export { default as product } from './product';
export { default as scale } from './scale';
export { default as sort } from './sort';
export { default as sortObjects } from './sortObjects';
export { default as sum } from './sum';
export { default as type } from './type';

export interface Pointers {
    dataset: DatasetCore;
    graph?: Quad_Graph;
    terms?: Term[];
}

export interface Score extends Pointers {
    score: number;
}

export interface ScoreCb {
    (arg: { dataset: DatasetCore; graph: Quad_Graph; terms?: Term[] }): Score[];
}

export interface ScoreFn<T extends unknown[] = [ScoreCb[]]> {
    (...args: T): (ptrs: Pointers) => Score[];
}
