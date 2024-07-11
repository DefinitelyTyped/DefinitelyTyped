import { Xyz50 } from "../xyz50/types";
import { Luv } from "./types";

declare function convertXyz50ToLuv(color: Omit<Xyz50, "mode">): Luv;

export default convertXyz50ToLuv;
