// Type definitions for jss 9.3
// Project: https://github.com/cssinjs/jss#readme
// Definitions by: Brenton Simpson <https://github.com/appsforartists>
//                 Oleg Slobodskoi <https://github.com/kof>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { CSSProperties } from 'react';
import { Observable } from 'rxjs';

export type PseudoCssKey =
	| ':active'
	| ':any'
	| ':checked'
	| ':default'
	| ':disabled'
	| ':empty'
	| ':enabled'
	| ':first'
	| ':first-child'
	| ':first-of-type'
	| ':fullscreen'
	| ':focus'
	| ':hover'
	| ':indeterminate'
	| ':in-range'
	| ':invalid'
	| ':last-child'
	| ':last-of-type'
	| ':left'
	| ':link'
	| ':only-child'
	| ':only-of-type'
	| ':optional'
	| ':out-of-range'
	| ':read-only'
	| ':read-write'
	| ':required'
	| ':right'
	| ':root'
	| ':scope'
	| ':target'
	| ':valid'
	| ':visited'
	// TODO
	// | ':dir()'
	// | ':lang()'
	// | ':not()'
	// | ':nth-child()'
	// | ':nth-last-child()'
	// | ':nth-last-of-type()'
	// | ':nth-of-type()'
	| '::after'
	| '::before'
	| '::cue'
	| '::first-letter'
	| '::first-line'
	| '::selection'
	| '::backdrop '
	| '::placeholder '
	| '::marker '
	| '::spelling-error '
	| '::grammar-error ';

export type PseudoCss = Partial<Record<PseudoCssKey, CSSProperties>>;

export interface JssProps {
	'@global'?: React.CSSProperties & PseudoCss;
	extend?: string;
	composes?: string | string[];
}

export type css = React.CSSProperties;

export interface JssExpand {
	animation:
		| {
				delay: css['animationDelay'];
				direction: css['animationDirection'];
				duration: css['animationDuration'];
				iterationCount: css['animationIterationCount'];
				name: css['animationName'];
				playState: css['animationPlayState'];
				timingFunction: any;
			}
		| css['animation'];
	background:
		| {
				attachment: css['backgroundAttachment'];
				color: css['backgroundColor'];
				image: css['backgroundImage'];
				position: css['backgroundPosition'] | number[]; // Can be written using array e.g. `[0 0]`
				repeat: css['backgroundRepeat'];
				size: Array<css['backgroundSize'] | css['backgroundSize']>; // Can be written using array e.g. `['center' 'center']`
			}
		| css['background'];
	border:
		| {
				color: css['borderColor'];
				style: css['borderStyle'];
				width: css['borderWidth'];
			}
		| css['border'];
	boxShadow:
		| {
				x: any;
				y: any;
				blur: any;
				spread: any;
				color: css['color'];
				inset?: 'inset'; // If you want to add inset you need to write "inset: 'inset'"
			}
		| css['boxShadow'];
	flex:
		| {
				basis: css['flexBasis'];
				direction: css['flexDirection'];
				flow: css['flexFlow'];
				grow: css['flexGrow'];
				shrink: css['flexShrink'];
				wrap: css['flexWrap'];
			}
		| css['flex'];
	font:
		| {
				family: css['fontFamily'];
				size: css['fontSize'];
				stretch: css['fontStretch'];
				style: css['fontStyle'];
				variant: css['fontVariant'];
				weight: css['fontWeight'];
			}
		| css['font'];
	listStyle:
		| {
				image: css['listStyleImage'];
				position: css['listStylePosition'];
				type: css['listStyleType'];
			}
		| css['listStyle'];
	margin:
		| {
				bottom: css['marginBottom'];
				left: css['marginLeft'];
				right: css['marginRight'];
				top: css['marginTop'];
			}
		| css['margin'];
	padding:
		| {
				bottom: css['paddingBottom'];
				left: css['paddingLeft'];
				right: css['paddingRight'];
				top: css['paddingTop'];
			}
		| css['padding'];
	outline:
		| {
				color: css['outlineColor'];
				style: 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset';
				width: any;
			}
		| css['outline'];
	textShadow:
		| {
				x: any;
				y: any;
				blur: any;
				color: css['color'];
			}
		| css['textShadow'];
	transition:
		| {
				delay: css['transitionDelay'];
				duration: css['transitionDuration'];
				property: css['transitionProperty'];
				timingFunction: css['transitionTimingFunction'];
			}
		| css['transition'];
}

export type JssExpandArr = { [k in keyof JssExpand]?: JssExpand[k] | Array<JssExpand[k]> };

export type SimpleStyle = React.CSSProperties & PseudoCss & JssProps & JssExpandArr;
export type Style = Observable<SimpleStyle> | SimpleStyle

export type Styles<Name extends string = any> = Record<Name, Style>;
export type Classes<Name extends string = any> = Record<Name, string>;

export interface Rule {
	className: string;
	selector: string;
	applyTo(element: HTMLElement): void;
	prop(key: string): string;
	prop(key: string, value: any): this;
	toJSON(): string;
}

export interface StyleSheet<Name extends string = any> {
	// Gives auto-completion on the rules declared in `createStyleSheet` without
	// causing errors for rules added dynamically after creation.
	classes: Classes<Name>;
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
	addRule(name: Name, style: Style, options?: Partial<RuleOptions>): Rule;
	/**
	 * Create and add rules.
	 * Will render also after Style Sheet was rendered the first time.
	 */
	addRules(styles: Partial<Styles<Name>>, options?: Partial<RuleOptions>): Rule[];
	/**
	 * Get a rule by name.
	 */
	getRule(name: Name): Rule;
	/**
	 * Delete a rule by name.
	 * Returns `true`: if rule has been deleted from the DOM.
	 */
	deleteRule(name: Name): boolean;
	/**
	 * Get index of a rule.
	 */
	indexOf(rule: Rule): number;
	/**
	 * Update the function values with a new data.
	 */
	update(data?: {}): this;
	update(name: Name, data: {}): this;
	/**
	 * Convert rules to a CSS string.
	 */
	toString(options?: { indent?: number }): string;
}
export type GenerateClassName<Name extends string = any> = (rule: Rule, sheet?: StyleSheet<Name>) => string;

export interface JSSPlugin {
	[key: string]: () => Partial<{
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
declare class JSS {
	constructor(options?: Partial<JSSOptions>);
	createStyleSheet<Name extends string>(
		styles: Partial<Styles<Name>>,
		options?: Partial<{
			media: string;
			meta: string;
			link: boolean;
			element: HTMLStyleElement;
			index: number;
			generateClassName: GenerateClassName<Name>;
			classNamePrefix: string;
		}>,
	): StyleSheet<Name>;
	removeStyleSheet(sheet: StyleSheet): this;
	setup(options?: Partial<JSSOptions>): this;
	use(plugin: JSSPlugin): this;
	createRule(style: Style, options?: RuleFactoryOptions): Rule;
	createRule<Name extends string>(name: Name, style: Style, options?: RuleFactoryOptions<Name>): Rule;
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
