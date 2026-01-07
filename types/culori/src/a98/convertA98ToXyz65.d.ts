import { Xyz65 } from "../xyz65/types.js";
import { A98 } from "./types.js";

declare function convertA98ToXyz65(color: Omit<A98, "mode">): Xyz65;

export default convertA98ToXyz65;
