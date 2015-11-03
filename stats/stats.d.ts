// Type definitions for Stats.js r14
// Project: http://github.com/mrdoob/stats.js
// Definitions by: Nicky Lenaers <https://github.com/nicky-lenaers>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare class Stats {

	REVISION: number;

	domElement: HTMLDivElement;
	
	// 0: fps, 1: ms
	setMode(value: number): void;
	
	begin(): void;
	
	end(): number;
	
	update(): void;
}

declare var stats: Stats;

declare module "stats" {
  export = stats;
}