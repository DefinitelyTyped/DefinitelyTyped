import { SafeString } from "./-private/handlebars";
export function htmlSafe(str: string): SafeString;
export function isHTMLSafe(str: any): str is SafeString;
