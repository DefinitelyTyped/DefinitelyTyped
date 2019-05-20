// Type definitions for randomColor 0.5.2
// Project: https://github.com/davidmerfield/randomColor
// Definitions by: Mathias Feitzinger <https://github.com/feitzi>, Brady Liles <https://github.com/BradyLiles>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function randomColor(options?: RandomColorOptions): string | string[];

interface RandomColorOptions {
	hue?: number | string;
	luminosity?: "bright" | "light" | "dark" | "random";
	count?: number;
	seed?: number | string;
	format?: "hsvArray" | "hslArray" | "hsl" | "hsla" | "rgbArray" | "rgb" | "rgba" | "hex";
	alpha?: number;
}

declare module "randomcolor" {
	export = randomColor;
}
