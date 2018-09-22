// Type definitions for jss 9.5
// Project: https://github.com/cssinjs/jss#readme
// Definitions by: Brenton Simpson <https://github.com/appsforartists>
//                 Oleg Slobodskoi <https://github.com/kof>
//                 Thomas Crockett <https://github.com/pelotom>
//                 Sebastian Silbermann <https://github.com/eps1lon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Style } from './css';

export type Styles<Name extends string = any> = Record<Name, Style>;
export type Classes<Name extends string = any> = Record<Name, string>;

export interface ToCssOptions {
	indent?: number;
}

export interface Rule {
	className: string;
	selector: string;
	applyTo(element: HTMLElement): void;
	prop(key: string): string;
	prop(key: string, value: any): this;
	toJSON(): string;
}

export interface StyleSheet<RuleName extends string = any> {
	// Gives auto-completion on the rules declared in `createStyleSheet` without
	// causing errors for rules added dynamically after creation.
	classes: Classes<RuleName>;
	options: RuleOptions;
	linked: boolean;
	attached: boolean;
	/**
	 * Attach renderable to the render tree.
	 */
	attach(): this;
	/**
	 * Remove renderable from render tree.
	 */
	detach(): this;
	/**
	 * Add a rule to the current stylesheet.
	 * Will insert a rule also after the stylesheet has been rendered first time.
	 */
	addRule(style: Style, options?: Partial<RuleOptions>): Rule;
	addRule(name: RuleName, style: Style, options?: Partial<RuleOptions>): Rule;
	/**
	 * Create and add rules.
	 * Will render also after Style Sheet was rendered the first time.
	 */
	addRules(styles: Partial<Styles<RuleName>>, options?: Partial<RuleOptions>): Rule[];
	/**
	 * Get a rule by name.
	 */
	getRule(name: RuleName): Rule;
	/**
	 * Delete a rule by name.
	 * Returns `true`: if rule has been deleted from the DOM.
	 */
	deleteRule(name: RuleName): boolean;
	/**
	 * Get index of a rule.
	 */
	indexOf(rule: Rule): number;
	/**
	 * Update the function values with a new data.
	 */
	update(data?: {}): this;
	update(name: RuleName, data: {}): this;
	/**
	 * Convert rules to a CSS string.
	 */
	toString(options?: ToCssOptions): string;
}
export type GenerateClassName<Name extends string = any> = (rule: Rule, sheet?: StyleSheet<Name>) => string;

export interface JSSPlugin {
	[key: string]: Partial<{
		onCreateRule(name: string, style: Style, options: RuleOptions): Rule;
		onProcessRule(rule: Rule, sheet: StyleSheet): void;
		onProcessStyle(style: Style, rule: Rule, sheet: StyleSheet): Style;
		onProcessSheet(sheet: StyleSheet): void;
		onChangeValue(value: any, prop: string, rule: Rule): any;
		onUpdate(data: {}, rule: Rule, sheet: StyleSheet): void;
	}>;
}
export interface JSSOptions {
	createGenerateClassName(): GenerateClassName;
	plugins: ReadonlyArray<JSSPlugin>;
	virtual: boolean;
	insertionPoint: string | HTMLElement;
}
export interface RuleFactoryOptions<Name extends string = any> {
	selector: string;
	classes: Classes<Name>;
	sheet: StyleSheet<Name>;
	index: number;
	jss: JSS;
	generateClassName: GenerateClassName<Name>;
}
export interface RuleOptions {
	index: number;
	className: string;
}
export declare class SheetsRegistry {
	constructor();
	registry: ReadonlyArray<StyleSheet>;
	readonly index: number;
	add(sheet: StyleSheet): void;
	reset(): void;
	remove(sheet: StyleSheet): void;
	toString(options?: ToCssOptions): string;
}
export type CreateStyleSheetOptions<Name extends string = any> = Partial<{
	media: string;
	meta: string;
	link: boolean;
	element: HTMLStyleElement;
	index: number;
	generateClassName: GenerateClassName<Name>;
	classNamePrefix: string;
}>;
export declare class JSS {
	constructor(options?: Partial<JSSOptions>);
	createStyleSheet<Name extends string>(
		styles: Partial<Styles<Name>>,
		options?: CreateStyleSheetOptions<Name>,
	): StyleSheet<Name>;
	removeStyleSheet(sheet: StyleSheet): this;
	setup(options?: Partial<JSSOptions>): this;
	use(...plugins: JSSPlugin[]): this;
	createRule(style: Style, options?: RuleFactoryOptions): Rule;
	createRule<Name extends string>(name: Name, style: Style, options?: RuleFactoryOptions<Name>): Rule;
}
/**
 * Creates a new instance of JSS.
 */
export function create(options?: Partial<JSSOptions>): JSS;
export function createGenerateClassName(): GenerateClassName;
declare const sharedInstance: JSS;
/**
 * A global JSS instance.
 */
export default sharedInstance;
