import { Rgb } from "../rgb/types";
import { Hwb } from "./types";

export default function convertRgbToHwb(color: Omit<Rgb, "mode">): Hwb;
