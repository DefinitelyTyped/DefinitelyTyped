// Type definitions for classnames 2.2
// Project: https://github.com/JedWatson/classnames
// Definitions by: Dave Keen <http://www.keendevelopment.ch>
//                 Adi Dahiya <https://github.com/adidahiya>
//                 Jason Killian <https://github.com/JKillian>
//                 Sean Kelley <https://github.com/seansfkelley/>
//                 Michal Adamczyk <https://github.com/mradamczyk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type ClassValue = string | number | ClassDictionary | ClassArray | undefined | null | false;

interface ClassDictionary {
	[id: string]: boolean | undefined | null;
}

interface ClassArray extends Array<ClassValue> { } // tslint:disable-line no-empty-interface

type ClassNamesFn = (...classes: ClassValue[]) => string;

declare const classNames: ClassNamesFn;

export = classNames;
