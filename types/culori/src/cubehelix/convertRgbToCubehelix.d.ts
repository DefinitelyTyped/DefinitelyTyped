import { Rgb } from "../rgb/types";
import { Cubehelix } from "./types";

declare function convertRgbToCubehelix(color: Omit<Rgb, "mode">): Cubehelix;

export default convertRgbToCubehelix;
