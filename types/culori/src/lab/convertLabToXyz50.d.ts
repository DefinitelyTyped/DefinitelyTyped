import { Xyz50 } from "../xyz50/types";
import { Lab } from "./types";

declare function convertLabToXyz50(color: Omit<Lab, "mode">): Xyz50;

export default convertLabToXyz50;
