import * as score from "./index.js";

export interface ScoreFactory {
    score: typeof score;
}

interface FactoryCtor {
    new(): ScoreFactory;
}
declare const factoryCtor: FactoryCtor;
export default factoryCtor;
