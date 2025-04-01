import { HSL, HSV, RGB } from "../../types";

export function HUEtoRGB(p: number, q: number, t: number): number;

export function HSLtoHSV(argument: HSL): HSV;
export function HSLtoHSV(h: number, s: number, l: number): HSV;

export function HSLtoRGB(argument: HSL): RGB;
export function HSLtoRGB(h: number, s: number, l: number): RGB;
