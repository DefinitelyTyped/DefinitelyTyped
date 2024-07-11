import { Rgb } from "../rgb/types";
import { Hsi } from "./types";

export default function convertHsiToRgb(color: Omit<Hsi, "mode">): Rgb;
