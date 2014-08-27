// Type definitions for ansicolors
// Project: https://github.com/thlorenz/ansicolors
// Definitions by: rogierschouten <https://github.com/rogierschouten>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "ansicolors" {
	var colors: {[index: string]: (s: string) => string;};
	export = colors;
}
