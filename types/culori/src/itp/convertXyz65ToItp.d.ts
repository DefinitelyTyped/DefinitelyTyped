import { Xyz65 } from "../xyz65/types.js";
import { Itp } from "./types.js";

declare function convertXyz65ToItp(color: Omit<Xyz65, "mode">): Itp;

export default convertXyz65ToItp;
