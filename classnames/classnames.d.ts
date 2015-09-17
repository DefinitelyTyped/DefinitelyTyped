// Type definitions for classnames
// Project: https://github.com/JedWatson/classnames
// Definitions by: Dave Keen <http://www.keendevelopment.ch>, Adi Dahiya <https://github.com/adidahiya>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface ClassDictionary {
	[id: string]: boolean;
}

interface ClassNamesFn {
	(...classes: (string | ClassDictionary)[]): string;
}

declare var classNames: ClassNamesFn;

declare module "classnames" {
	export = classNames
}
