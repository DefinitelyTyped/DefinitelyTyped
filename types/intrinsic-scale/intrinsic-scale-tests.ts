import { cover, contain } from "intrinsic-scale";

const intrinsicScale = cover(100, 100, 50, 50);
const { x, y, width, height } = contain(1, 2, 3, 4);
