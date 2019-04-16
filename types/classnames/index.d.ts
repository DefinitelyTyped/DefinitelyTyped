// Type definitions for classnames 2.2
// Project: https://github.com/JedWatson/classnames
// Definitions by: Dave Keen <http://www.keendevelopment.ch>
//                 Adi Dahiya <https://github.com/adidahiya>
//                 Jason Killian <https://github.com/JKillian>
//                 Sean Kelley <https://github.com/seansfkelley>
//                 Michal Adamczyk <https://github.com/mradamczyk>
//                 Marvin Hagemeister <https://github.com/marvinhagemeister>
//				   Josh McCullough <https://github.com/joshmccullough>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export type ClassValue = string | number | ClassDictionary | ClassArray | undefined | null | boolean;

export interface ClassDictionary {
	[id: string]: any;
}

// This is the only way I found to break circular references between ClassArray and ClassValue
// https://github.com/Microsoft/TypeScript/issues/3496#issuecomment-128553540
export interface ClassArray extends Array<ClassValue> { } // tslint:disable-line no-empty-interface

type ClassNamesFn = (...classes: ClassValue[]) => string;

type ClassNamesExport = ClassNamesFn & { default: ClassNamesFn };

declare const classNames: ClassNamesExport;

export default classNames;
export as namespace classNames;
