import { Xyz65 } from "../xyz65/types.js";
import { Lab65 } from "./types.js";

declare function convertXyz65ToLab65(color: Omit<Xyz65, "mode">): Lab65;

export default convertXyz65ToLab65;
