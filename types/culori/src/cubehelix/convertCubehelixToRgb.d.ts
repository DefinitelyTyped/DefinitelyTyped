import { Rgb } from "../rgb/types";
import { Cubehelix } from "./types";

declare function convertCubehelixToRgb(color: Omit<Cubehelix, "mode">): Rgb;

export default convertCubehelixToRgb;
