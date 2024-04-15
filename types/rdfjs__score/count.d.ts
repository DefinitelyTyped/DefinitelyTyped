import { ScoreFn } from "./index.js";

type CountCriteria = Record<"subject" | "predicate" | "object" | "graph", boolean>;

declare const count: ScoreFn<[] | [CountCriteria]>;
export default count;
