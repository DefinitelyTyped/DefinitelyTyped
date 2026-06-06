import { Xyz50 } from "../xyz50/types.js";
import { Luv } from "./types.js";

declare function convertXyz50ToLuv(color: Omit<Xyz50, "mode">): Luv;

export default convertXyz50ToLuv;
