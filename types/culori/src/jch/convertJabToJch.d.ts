import { Jab } from "../jab/types";
import { Jch } from "./types";

declare function convertJabToJch(color: Omit<Jab, "mode">): Jch;

export default convertJabToJch;
