import { Xyz65 } from "../xyz65/types.js";
import { Jab } from "./types.js";

declare function convertXyz65ToJab(color: Omit<Xyz65, "mode">): Jab;

export default convertXyz65ToJab;
