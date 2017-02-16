// Type definitions for Awesomplete v1.1.0
// Project: https://leaverou.github.io/awesomplete/
// Definitions by: webbiesdk <https://github.com/webbiesdk/>, Ben Dixon <https://github.com/bmdixon/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class Awesomplete {
	constructor(input: Element | HTMLElement | string, o?: AwesompleteOptions);
	static all: Array<any>;
	static $$: (expr: string | NodeSelector, con?: any) => NodeList;
	static ITEM: (text: string, input: string) => HTMLElement;
	static $: {
		(expr: string|Element, con?: NodeSelector): string | Element;
		regExpEscape: (s: { replace: (arg0: RegExp, arg1: string) => void }) => any;
		create: (tag: string, o: any) => HTMLElement;
		fire: (target: EventTarget, type: string, properties: any) => any;
		siblingIndex: (el: Element) => number;
	};
	static FILTER_STARTSWITH: (text: string, input: string) => boolean;
	static FILTER_CONTAINS: (text: string, input: string) => boolean;
	static SORT_BYLENGTH: (a: number | any[], b: number | any[]) => number;
	static REPLACE: (text: any) => void;
	next: () => void;
	container: HTMLElement;
	select: (selected?: HTMLElement, originalTarget?: HTMLElement) => void;
	previous: () => void;
	index: number;
	opened: number;
	list: string | string[] | Element | { label: string, value: any }[] | [string, string][];
	input: HTMLElement | string;
	goto: (i: number) => void;
	ul: HTMLElement;
	close: () => void;
	evaluate: () => void;
	selected: boolean;
	open: () => void;
	status: HTMLElement;
}

interface AwesompleteOptions {
	list?: string | string[] | Element | { label: string, value: any }[] | [string, string][];
	minChars?: Number;
	maxItems?: Number;
	autoFirst?: boolean;
    data?: Function;
	filter?: Function;
	sort?: Function;
	item?: Function;
	replace?: Function;
}
