import { Rgb } from "../rgb/types";
import { Hsi } from "./types";

export default function convertRgbToHsi(color: Omit<Rgb, "mode">): Hsi;
