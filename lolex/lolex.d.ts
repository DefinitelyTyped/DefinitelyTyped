// Type definitions for lolex 1.2.1
// Project: https://github.com/sinonjs/lolex
// Definitions by: Wim Looman <https://github.com/Nemo157>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module 'lolex' {
	export interface Clock {
		setTimeout(callback: () => any, timeout: number): number;
		setInterval(callback: () => any, timeout: number): number;
		setImmediate(callback: () => any): number;

		clearTimeout(id: number): void;
		clearInterval(id: number): void;
		clearImmediate(id: number): void;

		tick(ms: number): void;
		uninstall(): void;
	}

	export function createClock(now?: number): Clock;

	export function install(now?: number, toFake?: string[]): Clock;
	export function install(context?: any, now?: number, toFake?: string[]): Clock;
}
