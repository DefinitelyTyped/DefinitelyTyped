import { Jab } from "../jab/types";
import { Jch } from "./types";

declare function convertJchToJab(color: Omit<Jch, "mode">): Jab;

export default convertJchToJab;
