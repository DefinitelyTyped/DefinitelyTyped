/// <reference path="./baseTypes.d.ts" />

declare namespace AV {
	abstract class Filter {
		constructor(context: { }, key);

		process(buffer: TypedArray): void;
	}

	const VolumeFilter: typeof Filter;
	const BalanceFilter: typeof Filter;
}
