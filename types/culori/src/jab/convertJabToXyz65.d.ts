import { Xyz65 } from "../xyz65/types";
import { Jab } from "./types";

declare function convertJabToXyz65(color: Omit<Jab, "mode">): Xyz65;

export default convertJabToXyz65;
