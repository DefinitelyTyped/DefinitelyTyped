import { TypedArray } from "./baseTypes";

export class Filter {
	constructor();
	constructor(context: object, key: string);

	process(buffer: TypedArray): void;
}

export class VolumeFilter extends Filter {
}

export class BalanceFilter extends Filter {
}
