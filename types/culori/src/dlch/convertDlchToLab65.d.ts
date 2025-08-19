import { Lab65 } from "../lab65/types.js";
import { Dlch } from "./types.js";

declare function convertDlchToLab65(color: Omit<Dlch, "mode">): Lab65;

export default convertDlchToLab65;
