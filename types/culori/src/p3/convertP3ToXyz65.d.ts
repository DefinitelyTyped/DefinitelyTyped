import { Xyz65 } from "../xyz65/types.js";
import { P3 } from "./types.js";

declare function convertP3ToXyz65(color: Omit<P3, "mode">): Xyz65;

export default convertP3ToXyz65;
