import { Xyz50 } from "../xyz50/types.js";
import { Lab } from "./types.js";

declare function convertLabToXyz50(color: Omit<Lab, "mode">): Xyz50;

export default convertLabToXyz50;
