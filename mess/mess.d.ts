// Type definitions for mess 0.1.2
// Project: https://github.com/bobrik/node-mess
// Definitions by: Wim Looman <https://github.com/Nemo157>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "mess" {
	function shuffle<T>(array: T[]): T[];
	export = shuffle;
}
