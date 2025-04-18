import { Jab } from "../jab/types.js";
import { Jch } from "./types.js";

declare function convertJabToJch(color: Omit<Jab, "mode">): Jch;

export default convertJabToJch;
