import { Rgb } from "../rgb/types";
import { Hsv } from "./types";

export default function convertHsvToRgb(color: Omit<Hsv, "mode">): Rgb;
