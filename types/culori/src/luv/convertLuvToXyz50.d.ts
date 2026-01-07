import { Xyz50 } from "../xyz50/types.js";
import { Luv } from "./types.js";

declare function convertLuvToXyz50(color: Omit<Luv, "mode">): Xyz50;

export default convertLuvToXyz50;
