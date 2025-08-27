import { Xyz65 } from "../xyz65/types.js";
import { Jab } from "./types.js";

declare function convertJabToXyz65(color: Omit<Jab, "mode">): Xyz65;

export default convertJabToXyz65;
