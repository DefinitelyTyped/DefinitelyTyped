import { Jab } from "../jab/types.js";
import { Jch } from "./types.js";

declare function convertJchToJab(color: Omit<Jch, "mode">): Jab;

export default convertJchToJab;
