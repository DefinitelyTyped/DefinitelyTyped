import { isBMP, isGIF, isJPG, isPNG, isTIF } from "imtype";

let imTypeData = new Uint8Array([10, 20, 30, 40]);

let isBMPData = isBMP(imTypeData);
let isJPGData = isJPG(imTypeData);
let isPNGData = isPNG(imTypeData);
let isGIFData = isGIF(imTypeData);
let isTIFData = isTIF(imTypeData);
