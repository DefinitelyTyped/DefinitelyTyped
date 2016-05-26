// Type definitions for popper.js v0.4.0
// Project: https://github.com/FezVrasta/popper.js/
// Definitions by: rhysd <https://rhysd.github.io>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Popper {
	export interface PopperOptions {
		placement?: string;
		gpuAcceleration?: boolean;
		offset?: number;
		boundariesElement?: string | Element;
		boundariesPadding?: number;
		preventOverflowOrder?: ("left" | "right" | "top" | "bottom")[];
		flipBehavior?: string | string[];
		modifiers?: string[];
		modifiersIgnored?: string[];
		removeOnDestroy?: boolean;
		arrowElement?: string | Element;
	}
	export class Modifiers {
		applyStyle(data: Object): Object;
		shift(data: Object): Object;
		preventOverflow(data: Object): Object;
		keepTogether(data: Object): Object;
		flip(data: Object): Object;
		offset(data: Object): Object;
		arrow(data: Object): Object;
	}
	export interface Data {
		placement: string;
		offsets: {
			popper: {
				position: string;
				top: number;
				left: number;
			};
		};
	}
}

declare class Popper {
	public modifiers: Popper.Modifiers;
	public placement: string;

	constructor(reference: Element, popper: Element | Object, options?: Popper.PopperOptions);

	destroy(): void;
	update(): void;
	onCreate(cb: (data: Popper.Data) => void): this;
	onUpdate(cb: (data: Popper.Data) => void): this;
	parse(config: Object): Element;
	runModifiers(data: Object, modifiers: string[], ends: Function): void;
	isModifierRequired(): boolean;
}

declare module "popper.js" {
	export = Popper;
}
