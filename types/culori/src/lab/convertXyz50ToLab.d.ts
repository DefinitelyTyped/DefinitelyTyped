import { Xyz50 } from "../xyz50/types.js";
import { Lab } from "./types.js";

declare function convertXyz50ToLab(color: Omit<Xyz50, "mode">): Lab;

export default convertXyz50ToLab;
