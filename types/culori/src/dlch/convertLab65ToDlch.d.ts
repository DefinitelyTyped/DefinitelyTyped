import { Lab65 } from "../lab65/types.js";
import { Dlch } from "./types.js";

declare function convertLab65ToDlch(color: Omit<Lab65, "mode">): Dlch;

export default convertLab65ToDlch;
