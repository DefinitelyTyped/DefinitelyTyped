import { Lab } from "../lab/types.js";
import { Lch } from "./types.js";

declare function convertLchToLab(color: Omit<Lch, "mode">): Lab;

export default convertLchToLab;
