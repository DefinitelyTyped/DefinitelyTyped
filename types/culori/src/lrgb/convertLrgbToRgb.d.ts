import { FindColorByMode, Mode } from "../common";
import { Lrgb } from "./types";

declare function convertLrgbToRgb<M extends Mode = "rgb">(color: Omit<Lrgb, "mode">, mode?: M): FindColorByMode<M>;

export default convertLrgbToRgb;
