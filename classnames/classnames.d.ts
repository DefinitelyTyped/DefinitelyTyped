// Type definitions for classnames
// Project: https://github.com/JedWatson/classnames
// Definitions by: Dave Keen <http://www.keendevelopment.ch>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface ClassDictionary {
	[id: string]: boolean;
}

declare module "classnames" {
	function classNames(...classes: (string|ClassDictionary)[]): string;
	export = classNames
}