// Type definitions for yup-locale-pl 0.1
// Project: https://github.com/bkostrowiecki/yup-locale-pl
// Definitions by: Radosław Grochowski <https://github.com/radoslawgrochowski>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { setLocale } from 'yup';

type LocaleObject = Parameters<typeof setLocale>[0];
declare const locale: LocaleObject;
export = locale;
