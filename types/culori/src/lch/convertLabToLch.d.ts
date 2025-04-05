import { FindColorByMode } from "../common.js";
import { Lab } from "../lab/types.js";

declare function convertLabToLch<M extends "dlch" | "lch65" | "oklch" | "lch" = "lch">(
    color: Omit<Lab, "mode">,
    mode?: M,
): FindColorByMode<M>;

export default convertLabToLch;
