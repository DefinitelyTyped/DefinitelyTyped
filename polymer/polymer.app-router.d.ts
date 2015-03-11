declare module PolymerComponents {
	module App {
		export interface Router extends HTMLElement {
			init(): void;
			go(path: string, options?: { replace?: boolean }): void;
		}
	}
} 