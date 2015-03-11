// Type definitions for app-router
// Project: https://github.com/erikringsmuth/app-router
// Definitions by: Louis Grignon <https://github.com/lgrignon>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module PolymerComponents {
	module App {
		export interface Router extends HTMLElement {
			init(): void;
			go(path: string, options?: { replace?: boolean }): void;
		}
	}
} 