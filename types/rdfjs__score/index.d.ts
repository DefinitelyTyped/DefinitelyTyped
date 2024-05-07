import { DatasetCore, Quad_Graph, Term } from "@rdfjs/types";

export { default as combine } from "./combine.js";
export { default as concat } from "./concat.js";
export { default as count } from "./count.js";
export { default as distinct } from "./distinct.js";
export { default as exists } from "./exists.js";
export { default as fallback } from "./fallback.js";
export { default as fixed } from "./fixed.js";
export { default as language } from "./language.js";
export { default as pageRank } from "./pageRank.js";
export { default as pathDepth } from "./pathDepth.js";
export { default as prioritized } from "./prioritized.js";
export { default as product } from "./product.js";
export { default as scale } from "./scale.js";
export { default as sort } from "./sort.js";
export { default as sortObjects } from "./sortObjects.js";
export { default as sum } from "./sum.js";
export { default as type } from "./type.js";

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
