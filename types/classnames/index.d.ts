// Type definitions for classnames 2.2
// Project: https://github.com/JedWatson/classnames
// Definitions by: Dave Keen <http://www.keendevelopment.ch>
//                 Adi Dahiya <https://github.com/adidahiya>
//                 Jason Killian <https://github.com/JKillian>
//                 Michal Adamczyk <https://github.com/mradamczyk>
//                 Marvin Hagemeister <https://github.com/marvinhagemeister>
//                 Josh McCullough <https://github.com/joshmccullough>
//                 uhyo <https://github.com/uhyo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { ClassValue, ClassNamesExport } from './types';

declare const classNames: ClassNamesExport;

export = classNames;
export as namespace classNames;

declare namespace classNames {
	type ClassValue = string | number | ClassDictionary | ClassArray | undefined | null | boolean;

	interface ClassDictionary {
		[id: string]: any;
	}

	// This is the only way I found to break circular references between ClassArray and ClassValue
	// https://github.com/Microsoft/TypeScript/issues/3496#issuecomment-128553540
	interface ClassArray extends Array<ClassValue> { } // tslint:disable-line no-empty-interface
}
