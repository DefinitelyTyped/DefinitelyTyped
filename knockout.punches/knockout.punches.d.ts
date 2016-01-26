// Type definitions for knockout.punches 0.5.1
// Project: https://github.com/mbest/knockout.punches
// Definitions by: Stephen Lautier <https://github.com/johnnyreilly>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../knockout/knockout.d.ts" />

interface KnockoutPunchesStatic {
	enableAll(): void;
}

interface KnockoutStatic {
	punches: KnockoutPunchesStatic;
}

declare module "knockout.punches" {
	export = punches;
}

declare var punches: KnockoutPunchesStatic;