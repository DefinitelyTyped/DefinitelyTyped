import { ScoreFn } from "./index.js";

declare const combine: ScoreFn & {
    prioritized: ScoreFn;
};
declare const prioritized: ScoreFn;

export default combine;
export { prioritized };
