import { Rgb } from "../rgb/types.js";
import { Cubehelix } from "./types.js";

declare function convertCubehelixToRgb(color: Omit<Cubehelix, "mode">): Rgb;

export default convertCubehelixToRgb;
