import Config from "./config";
import * as modules from "./modules";
import * as taglibFinder from "./taglib-finder";
import * as taglibLoader from "./taglib-loader";
import * as taglibLookup from "./taglib-lookup";

export const isVDOMSupported: true;
export const builder: any;
export const defaultOptions: Config;
export const config: Config;

export function createBuilder(options: any): any;

export function compileFile(filename: string, optionsOrCallback?: any, callback?: any): any;

export function compile(src: any, filename: string, optionsOrCallback: any, callback?: any): any;

export function compileForBrowser(src: any, filename: string, optionsOrCallback: any, callback?: any): any;

export function compileFileForBrowser(filename: string, optionsOrCallback?: any, callback?: any): any;

export function parseRaw(templateSrc: any, filename: string): any;

export function createInlineCompiler(filename: string, userOptions?: any): any;

export function checkUpToDate(templateFile: any, templateJsFile: any): boolean;

export function getLastModified(path: string, optionsOrCallback: any, callback: any): void;

export function createWalker(options: any): any;

export function configure(newConfig?: Config): void;

export function clearCaches(): void;

export function buildTaglibLookup(dirname: string): taglibLookup.TaglibLookup;

export function registerTaglib(filePath: string): void;

export { modules, taglibFinder, taglibLoader, taglibLookup };
