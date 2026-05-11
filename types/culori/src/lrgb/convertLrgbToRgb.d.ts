import { FindColorByMode, Mode } from "../common.js";
import { Lrgb } from "./types.js";

declare function convertLrgbToRgb<M extends Mode = "rgb">(color: Omit<Lrgb, "mode">, mode?: M): FindColorByMode<M>;

export default convertLrgbToRgb;
