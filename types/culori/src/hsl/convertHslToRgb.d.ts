import { Rgb } from "../rgb/types";
import { Hsl } from "./types";

export default function convertHslToRgb(color: Omit<Hsl, "mode">): Rgb;
