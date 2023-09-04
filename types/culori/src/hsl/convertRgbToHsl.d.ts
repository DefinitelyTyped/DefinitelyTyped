import { Rgb } from "../rgb/types";
import { Hsl } from "./types";

export default function convertRgbToHsl(color: Omit<Rgb, "mode">): Hsl;
