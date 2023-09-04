import { Xyz65 } from "../xyz65/types";
import { A98 } from "./types";

declare function convertXyz65ToA98(color: Omit<Xyz65, "mode">): A98;

export default convertXyz65ToA98;
