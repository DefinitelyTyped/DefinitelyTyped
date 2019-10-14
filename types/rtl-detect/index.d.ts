// Type definitions for rtl-detect 1.0
// Project: https://github.com/shadiabuhilal/rtl-detect
// Definitions by: imprevo <https://github.com/imprevo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function getLangDir(strLocale: string): 'ltr' | 'rtl';
export function isRtlLang(strLocale: string): boolean | undefined;
