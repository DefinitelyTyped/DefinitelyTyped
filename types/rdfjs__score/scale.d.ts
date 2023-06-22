import { ScoreFn, ScoreCb } from '.';

interface ScaleCriteria {
    score: ScoreCb;
    factor: number;
}

declare const scale: ScoreFn<[ScaleCriteria]>;
export default scale;
