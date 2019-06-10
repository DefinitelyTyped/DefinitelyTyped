// Type definitions for classnames 2.2
// Project: https://github.com/JedWatson/classnames
// Definitions by: Dave Keen <http://www.keendevelopment.ch>
//                 Adi Dahiya <https://github.com/adidahiya>
//                 Jason Killian <https://github.com/JKillian>
//                 Sean Kelley <https://github.com/seansfkelley>
//                 Michal Adamczyk <https://github.com/mradamczyk>
//                 Marvin Hagemeister <https://github.com/marvinhagemeister>
//                 Josh McCullough <https://github.com/joshmccullough>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { ClassValue } from './types';

type ClassNamesFn = (...classes: ClassValue[]) => string;

type ClassNamesExport = ClassNamesFn & { default: ClassNamesFn };

declare const classNames: ClassNamesExport;

export = classNames;
export as namespace classNames;
