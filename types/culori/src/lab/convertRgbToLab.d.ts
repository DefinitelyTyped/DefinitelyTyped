import { Rgb } from "../rgb/types";
import { Lab } from "./types";

declare function convertRgbToLab(color: Omit<Rgb, "mode">): Lab;

export default convertRgbToLab;
