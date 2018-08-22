// Type definitions for onoff 3.2.1
// Project: https://github.com/fivdi/onoff
// Definitions by: Marcel Ernst <https://github.com/marcel-ernst>
//                 Sebastian Gingter <https://github.com/gingters>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export = __ONOFF;

declare namespace __ONOFF {

	type Direction = 'in' | 'out' | 'high' | 'low';
	type DirectionResult = 'in' | 'out';
	type Edge = 'none' | 'rising' | 'falling' | 'both';
	type Value = 0 | 1;

	interface GpioOptions {
		debounceTimeout?: number;
		activeLow?: boolean;
		reconfigureDirection?: boolean;
	}

	class Gpio {
		constructor(gpio: number, direction: Direction);
		constructor(gpio: number, direction: Direction, edge: Edge);
		constructor(gpio: number, direction: Direction, edge: Edge, options: GpioOptions);
		constructor(gpio: number, direction: Direction, options: GpioOptions);

		read(cb: (err: Error, value: Value) => void): void;
		readSync(): Value;

		write(value: Value, cb?: (err: Error) => void): void;
		writeSync(value: Value): void;

		watch(cb: (err: Error, value: Value) => void): void;

		unwatch(cb?:(err: Error, value: Value) => void): void;
		unwatchAll(): void;

		direction(): DirectionResult;
		setDirection(value: DirectionResult): void;

		edge(): Edge;
		setEdge(value: Edge): void;

		activeLof(): boolean;
		setActiveLow(invert: boolean): void;

		unexport():void;

		static accessible: boolean;
		static HIGH: Value;
		static LOW: Value;
	}
}
