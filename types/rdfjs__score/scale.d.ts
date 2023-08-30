import { ScoreCb, ScoreFn } from "./index.js";

interface ScaleCriteria {
    score: ScoreCb;
    factor: number;
}

declare const scale: ScoreFn<[ScaleCriteria]>;
export default scale;
