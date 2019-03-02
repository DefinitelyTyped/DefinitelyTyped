// Type definitions for teddy 0.4
// Project: https://github.com/rooseveltframework/teddy
// Definitions by: Benjamin Lannon <https://github.com/lannonbr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

// compiles a template
export function compile(template: string): string;

// parses a template
export function render(template: string, model: object): string;

// mutator method to set template root param; must be a string
export function setTemplateRoot(path: string): void;

// mutator method to set verbosity param. takes human-readable string argument and converts it to an integer for more efficient checks against the setting
export function setVerbosity(n: number | string): void;

// turn on or off the setting to cache template renders
export function cacheRenders(b: boolean): void;

// mutator method to set default caches param: the number of cached versions of each templates to store by default if cacheRenders is enabled
export function setDefaultCaches(n: number): void;

// mutator method to set max caches for a given registered template
export function setMaxCaches(template: string, n: number): void;

// mutator method to set a whitelist of templates to cache, e.g. { "myTemplate.html": maxCaches} where maxCaches is an integer
export function setCacheWhitelist(o: object): void;

// mutator method to set a blacklist of templates not to cache as an array
export function setCacheBlacklist(templateArray: ReadonlyArray<string>): void;

// sets all params to their default values
export function setDefaultParams(): void;

// invalidates cache of a given template and model combination
// if no model is supplied, deletes all caches of the given template
export function flushCache(template: string, model?: object): void;

// mutator method to set max passes param: the number of times the parser can iterate over the template
export function setMaxPasses(n: number): void;

// turn on or off the setting to compile templates at every render
export function compileAtEveryRender(b: boolean): void;

// turn on or off the setting to minify templates using teddy's internal minifier
export function minify(b: boolean): void;

// default values for parameters sent to teddy
export let params: object;

// compiled templates are stored as object collections, e.g. { "myTemplate.html": "<p>some markup</p>"}
export let templates: object;

// cache of fully rendered temmplates, e.g. { "myTemplate.html": "<p>some markup</p>"}
export let renderedTemplates: object;
