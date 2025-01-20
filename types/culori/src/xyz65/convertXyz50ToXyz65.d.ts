import { Xyz50 } from "../xyz50/types";
import { Xyz65 } from "./types";

declare function convertXyz50ToXyz65(color: Omit<Xyz50, "mode">): Xyz65;

export default convertXyz50ToXyz65;
