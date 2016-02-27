// Type definitions for inline-css
// Project: https://github.com/jonkemp/inline-css
// Definitions by: Philip Spain <https://github.com/philipisapain>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../bluebird/bluebird.d.ts" />

declare module 'inline-css' {
	import Promise = require('bluebird');

	module InlineCss {
		export interface Options {
			url:string;
			extraCss?:string;
			applyStyleTags?:boolean;
			applyLinkTags?:boolean;
			removeStyleTags?:boolean;
			removeLinkTags?:boolean;
			preserveMediaQueries?:boolean;
			applyWidthAttributes?:boolean;
			applyTableAttributes?:boolean;
		}
	}

	function InlineCss(html:string, options:InlineCss.Options):Promise<string>;

	export = InlineCss;
}
