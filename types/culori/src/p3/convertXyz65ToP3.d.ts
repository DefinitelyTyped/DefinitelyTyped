import { Xyz65 } from "../xyz65/types.js";
import { P3 } from "./types.js";

declare function convertXyz65ToP3(color: Omit<Xyz65, "mode">): P3;

export default convertXyz65ToP3;
