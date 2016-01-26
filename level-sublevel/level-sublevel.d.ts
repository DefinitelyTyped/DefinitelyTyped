// Type definitions for level-sublevel
// Project: https://github.com/dominictarr/level-sublevel
// Definitions by: Bas Pennings <https://github.com/basp/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../levelup/levelup.d.ts" />

interface Hook {
	(ch: any, add: (op: Batch|boolean) => void): void;
}

interface Batch {
	prefix?: Sublevel;
}

interface Sublevel extends LevelUp {
	sublevel(key: string): Sublevel;
	pre(hook: Hook): Function;
}

declare module "level-sublevel" {
	function sublevel(levelup: LevelUp): Sublevel;
	export = sublevel;		
}