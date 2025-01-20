import { Rgb } from "../rgb/types";
import { Hsv } from "./types";

export default function convertRgbToHsv(color: Omit<Rgb, "mode">): Hsv;
