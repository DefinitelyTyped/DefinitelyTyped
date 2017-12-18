// Type definitions for jss 9.3
// Project: https://github.com/cssinjs/jss#readme
// Definitions by: Brenton Simpson <https://github.com/appsforartists>
//                 Oleg Slobodskoi <https://github.com/kof>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export interface Rule {
	className: string;
	selector: string;
	applyTo(element: HTMLElement): void;
	prop(key: string): string;
	prop(key: string, value: any): this;
	toJSON(): string;
}
export interface StyleSheet<T> {
	// Gives auto-completion on the rules declared in `createStyleSheet` without
	// causing errors for rules added dynamically after creation.
	classes: {
		[K in keyof T]: string;
	} & { [key: string]: string };
	options: any;
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
	addRule(name: string, style: Style, options?: Partial<RuleOptions>): Rule;
	/**
	 * Create and add rules.
	 * Will render also after Style Sheet was rendered the first time.
	 */
	addRules(styles: { [key: string]: Style }, options?: Partial<RuleOptions>): Rule[];
	/**
	 * Get a rule by name.
	 */
	getRule(name: string): Rule;
	/**
	 * Delete a rule by name.
	 * Returns `true`: if rule has been deleted from the DOM.
	 */
	deleteRule(name: string): boolean;
	/**
	 * Get index of a rule.
	 */
	indexOf(rule: Rule): number;
	/**
	 * Update the function values with a new data.
	 */
	update(data?: {}): this;
	update(name: string, data: {}): this;
	/**
	 * Convert rules to a CSS string.
	 */
	toString(options?: { indent?: number }): string;
}
export type GenerateClassName<T> = (rule: Rule, sheet?: StyleSheet<T>) => string;
export interface Style {
	[key: string]: any;
}
export interface JSSPlugin {
	[key: string]: () => Partial<{
		onCreateRule(name: string, style: Style, options: RuleOptions): Rule,
		onProcessRule(rule: Rule, sheet: StyleSheet<any>): void,
		onProcessStyle(style: Style, rule: Rule, sheet: StyleSheet<any>): Style,
		onProcessSheet(sheet: StyleSheet<any>): void,
		onChangeValue(value: any, prop: string, rule: Rule): any,
		onUpdate(data: {}, rule: Rule, sheet: StyleSheet<any>): void,
	}>;
}
export interface JSSOptions {
	createGenerateClassName(): GenerateClassName<any>;
	plugins: ReadonlyArray<JSSPlugin>;
	virtual: boolean;
	insertionPoint: string | HTMLElement;
}
export interface RuleFactoryOptions {
	selector: string;
	classes: { [key: string]: string };
	sheet: StyleSheet<any>;
	index: number;
	jss: JSS;
	generateClassName: GenerateClassName<any>;
}
export interface RuleOptions {
	index: number;
	className: string;
}
declare class JSS {
	constructor(options?: Partial<JSSOptions>);
	createStyleSheet<T>(
		styles: T,
		options?: Partial<{
			media: string,
			meta: string,
			link: boolean,
			element: HTMLStyleElement,
			index: number,
			generateClassName: GenerateClassName<T>,
			classNamePrefix: string,
		}>,
	): StyleSheet<T>;
	removeStyleSheet(sheet: StyleSheet<any>): this;
	setup(options?: Partial<JSSOptions>): this;
	use(plugin: JSSPlugin): this;
	createRule(style: Style, options?: Partial<RuleFactoryOptions>): Rule;
	createRule(name: string, style: Style, options?: Partial<RuleFactoryOptions>): Rule;
}
/**
 * Creates a new instance of JSS.
 */
export function create(options?: Partial<JSSOptions>): JSS;
declare const sharedInstance: JSS;
/**
 * A global JSS instance.
 */
export default sharedInstance;
