// Type definitions for axe-core 2.0.5
// Project: https://github.com/dequelabs/axe-core
// Definitions by: Marcy Sutton <https://github.com/marcysutton>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace axe {

	export type ImpactValue = "minor" | "moderate" | "serious" | "critical";

	export type TagValue = "wcag2a" | "wcag2aa" | "section508" | "best-practice";

	export type ReporterVersion = "v1" | "v2";

	export type RunOnlyType = "rule" | "rules" | "tag" | "tags";

	export interface ElementContext {
		node?: Object,
		selector?: string,
		include?: any[],
		exclude?: any[]
	}
	export interface RunOnly {
		type: RunOnlyType,
		value?: {
			include?: string[],
			exclude?: string[]
		}
		values?: TagValue[]
	}
	export interface AxeResults {
		url: string,
		timestamp: string,
		passes: Pass[],
		violations: Violation[]
	}
	export interface Pass {
		description: string,
		help: string,
		helpUrl: string,
		id: string,
		impact: ImpactValue,
		tags: TagValue[],
		nodes: NodeResult[]
	}
	export interface Violation {
		description: string,
		help: string,
		helpUrl: string,
		id: string,
		impact: ImpactValue,
		tags: TagValue[],
		nodes: NodeResult[]
	}
	export interface NodeResult {
		html: string,
		impact: ImpactValue,
		target: string[],
		any: CheckResult[],
		all: CheckResult[],
		none: CheckResult[]
	}
	export interface CheckResult {
		id: string,
		impact: string,
		message: string,
		data: any,
		relatedNodes?: RelatedNode[]
	}
	export interface RelatedNode {
		target: string[],
		html: string
	}
	export interface Spec {
		branding?: {
			brand: string,
			application: string
		},
		reporter?: ReporterVersion,
		checks?: Check[],
		rules?: Rule[]
	}
	export interface Check {
		id: string,
		evaluate: Function,
		after?: Function,
		options?: any,
		matches?: string,
		enabled?: boolean
	}
	export interface Rule {
		id: string,
		selector?: string,
		excludeHidden?: boolean,
		enabled?: boolean,
		pageLevel?: boolean,
		any?: string[],
		all?: string[],
		none?: string[],
		tags?: string[],
		matches?: string
	}
	export interface AxePlugin {
		id: string,
		run(...args:any[]): any,
		commands: {
			id: string,
			callback(...args:any[]): void
		}[],
		cleanup?(callback:Function): void
	}

	export let plugins: any

	/**
	 * Starts analysis on the current document and its subframes
	 *
	 * @param  {Object}   context  The `Context` specification object @see Context
	 * @param  {Array}    options  Options passed into rules or checks, temporarily modifyint them.
	 * @param  {Function} callback The function to invoke when analysis is complete.
	 * @returns {Object}  results  The aXe results object
	 */
	export function a11yCheck(context: ElementContext, options: {runOnly?: RunOnly, rules?: Object}, callback: (results:AxeResults) => void): AxeResults

	/**
	 * Method for configuring the data format used by aXe. Helpful for adding new
	 * rules, which must be registered with the library to execute.
	 * @param  {Spec}       Spec Object with valid `branding`, `reporter`, `checks` and `rules` data
	 */
	export function configure(spec: Spec): void

	/**
	 * Searches and returns rules that contain a tag in the list of tags.
	 * @param  {Array}  tags  Optional array of tags
	 * @return {Array}  Array of rules
	 */
	export function getRules(tags?: string[]): Object[]

	/**
	 * Restores the default axe configuration
	 */
	export function reset(): void

	/**
	 * Function to register a plugin configuration in document and its subframes
	 * @param  {Object}    plugin    A plugin configuration object
	 */
	export function registerPlugin(plugin: AxePlugin): void

	/**
	 * Function to clean up plugin configuration in document and its subframes
	 */
	export function cleanup(): void

}

// axe is also available as a module
declare module "axe-core" {
    export = axe;
}
