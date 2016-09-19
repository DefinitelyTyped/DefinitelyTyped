// Type definitions for randomColor 0.4.1
// Project: https://github.com/davidmerfield/randomColor
// Definitions by: Mathias Feitzinger <https://github.com/feitzi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace RandomColor {

 interface RandomColorStatic {

	() : string;

	(options : randomColorOptions): string;
}

interface randomColorOptions {
		hue? : string;
		luminosity? : string;		
		count? : string | number;
		seed?: string;
		format?: string;
	}
}

declare var randomColor: RandomColor.RandomColorStatic;

declare module 'randomcolor' {
    export = randomColor;
}