// Type definitions for randomColor 0.5.2
// Project: https://github.com/davidmerfield/randomColor
// Definitions by: Mathias Feitzinger <https://github.com/feitzi>, Brady Liles <https://github.com/BradyLiles>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function randomColor(options?: RandomColorOptionsSingle): string;
declare function randomColor(options?: RandomColorOptionsMultiple): string[];

interface RandomColorOptionsSingle {
	hue?: number | string;
	luminosity?: "bright" | "light" | "dark" | "random";
	seed?: number | string;
	format?: "hsvArray" | "hslArray" | "hsl" | "hsla" | "rgbArray" | "rgb" | "rgba" | "hex";
	alpha?: number;
}

interface RandomColorOptionsMultiple extends RandomColorOptionsSingle {
	count: number;
}

declare module "randomcolor" {
	export = randomColor;
}
