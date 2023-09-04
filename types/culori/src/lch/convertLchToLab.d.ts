import { Lab } from "../lab/types";
import { Lch } from "./types";

declare function convertLchToLab(color: Omit<Lch, "mode">): Lab;

export default convertLchToLab;
