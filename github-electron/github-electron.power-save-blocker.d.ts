// Type definitions for Electron v0.37.2
// Project: http://electron.atom.io/
// Definitions by: jedmao <https://github.com/jedmao/>, rhysd <https://rhysd.github.io>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Electron {

	interface PowerSaveBlocker {
		start(type: string): number;
		stop(id: number): void;
		isStarted(id: number): boolean;
	}
}
