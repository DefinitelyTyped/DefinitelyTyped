import { Xyz65 } from "../xyz65/types.js";
import { Itp } from "./types.js";

declare function convertItpToXyz65(color: Omit<Itp, "mode">): Xyz65;

export default convertItpToXyz65;
