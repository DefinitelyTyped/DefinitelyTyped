import { Xyz50 } from "../xyz50/types";
import { Luv } from "./types";

declare function convertLuvToXyz50(color: Omit<Luv, "mode">): Xyz50;

export default convertLuvToXyz50;
