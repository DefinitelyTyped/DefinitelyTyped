// Type definitions for app-router
// Project: https://github.com/erikringsmuth/app-router
// Definitions by: Louis Grignon <https://github.com/lgrignon>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference path="polymer.d.ts"/>

declare module PolymerComponents {
	module App {
		export interface Router extends PolymerElement, HTMLElement {
			init(): void;
			go(path: string, options?: { replace?: boolean }): void;
		}
	}
} 