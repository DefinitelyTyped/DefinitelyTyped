import { htmlSafe as templateHtmlSafe, isHTMLSafe as templateIsHTMLSafe } from "@ember/template";

export function camelize(str: string): string;
export function capitalize(str: string): string;
export function classify(str: string): string;
export function dasherize(str: string): string;
export function decamelize(str: string): string;
export function loc(template: string, args?: string[]): string;
export function underscore(str: string): string;
export function w(str: string): string[];

// eslint-disable-next-line @definitelytyped/no-declare-current-package
declare module "@ember/string" {
    function htmlSafe(...args: Parameters<typeof templateHtmlSafe>): ReturnType<typeof templateHtmlSafe>;
    function isHTMLSafe(...args: Parameters<typeof templateIsHTMLSafe>): ReturnType<typeof templateIsHTMLSafe>;
}
