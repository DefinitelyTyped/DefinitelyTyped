import { Xyz65 } from "../xyz65/types";
import { Jab } from "./types";

declare function convertXyz65ToJab(color: Omit<Xyz65, "mode">): Jab;

export default convertXyz65ToJab;
