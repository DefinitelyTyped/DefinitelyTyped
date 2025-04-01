import { LAB, RGB, XYZ } from "../../types";

export function XYZtoRGB(argument: XYZ): RGB;
export function XYZtoRGB(x: number, y: number, z: number): RGB;

export function LABtoXYZ(argument: LAB): XYZ;
export function LABtoXYZ(l: number, a: number, b: number): XYZ;

export function LABtoRGB(argument: LAB): RGB;
export function LABtoRGB(l: number, a: number, b: number): RGB;
