import { Rgb } from "../rgb/types.js";
import { Cubehelix } from "./types.js";

declare function convertRgbToCubehelix(color: Omit<Rgb, "mode">): Cubehelix;

export default convertRgbToCubehelix;
