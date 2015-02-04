// Type definitions for jquery.autosize (un-versioned)
// Project: http://www.jacklmoore.com/autosize/
// Definitions by: Aaron T. King <https://github.com/kingdango>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts" />

interface AutosizeOptions {
	className?: string;
	append?: string;
	callback?: Function;
}

interface Autosize {
	(): JQuery;
	(options: AutosizeOptions): JQuery;
}

interface JQuery {
	autosize: Autosize;
}