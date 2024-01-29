import { Rgb } from "culori";
import type { TakeColorChannels } from "culori/src/common";

const okhsl1: TakeColorChannels<"okhsl"> = { h: 30, s: 0.5, l: 1, alpha: 0.25 };
const okhsl2: TakeColorChannels<"okhsl"> = { h: 30, s: 0.5, l: 1 };
const okhsl3: TakeColorChannels<"okhsl"> = { s: 0.5, l: 1 };
const hsl1: TakeColorChannels<"hsl"> = { s: 0.5, l: 1 };

declare let rgb1: Rgb;
declare let rgbChannels1: TakeColorChannels<"rgb">;

rgbChannels1 = rgb1;

// @ts-expect-error
rgb1 = rgbChannels1; // 'mode' property missing

// @ts-expect-error
const hsl2: TakeColorChannels<"hsl"> = { h: 30, s: 0.5 }; // Property 'l' is missing in type '{ h: number; s: number; }' but required in type 'TakeColorChannels<"hsl">'.

// @ts-expect-error
const hsl3: TakeColorChannels<"hsl"> = { l: 1 }; // Property 's' is missing in type '{ l: number; }' but required in type 'TakeColorChannels<"hsl">'.
