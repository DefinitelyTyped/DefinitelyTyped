// Type definitions for classnames
// Project: https://github.com/JedWatson/classnames
// Definitions by: Dave Keen <http://www.keendevelopment.ch>, Adi Dahiya <https://github.com/adidahiya>, Jason Killian <https://github.com/JKillian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "classnames" {
    export type ClassValue = string | number | ClassDictionary | ClassArray | undefined | null | false;

    export interface ClassDictionary {
        [id: string]: boolean | undefined | null;
    }

    export interface ClassArray extends Array<ClassValue> { }

    export interface ClassNamesFn {
        (...classes: ClassValue[]): string;
    }
    
    var classNames: ClassNamesFn;
	export default classNames
}
