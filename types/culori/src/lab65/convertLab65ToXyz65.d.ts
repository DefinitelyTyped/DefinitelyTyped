import { Xyz65 } from "../xyz65/types";
import { Lab65 } from "./types";

declare function convertLab65ToXyz65(color: Omit<Lab65, "mode">): Xyz65;

export default convertLab65ToXyz65;
