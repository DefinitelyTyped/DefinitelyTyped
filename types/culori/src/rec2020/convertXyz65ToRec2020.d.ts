import { Xyz65 } from "../xyz65/types.js";
import { Rec2020 } from "./types.js";

declare function convertXyz65ToRec2020(color: Omit<Xyz65, "mode">): Rec2020;

export default convertXyz65ToRec2020;
