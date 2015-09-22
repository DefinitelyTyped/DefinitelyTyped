// Type definitions for sanitize-html 1.6.0
// Project: https://github.com/punkave/sanitize-html
// Definitions by: Rogier Schouten <https://github.com/rogierschouten>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


declare module "sanitize-html" {

	function sanitizeHtml(s: string, opts?: {
		allowedTags?: string[];
		allowedSchemes?: string[];
		allowedAttributes?: { [index: string]: string[] };
		allowedClasses?: { [index: string]: string[] };
		transformTags?: { [index: string]: any };
		exclusiveFilter?: {
			[index: string]: (frame: {
				tag: string;
				attribs: { [index: string]: string };
				text: string;
				tagPosition: number;
			}) => boolean
		};

	}): string;

	export = sanitizeHtml;
}
