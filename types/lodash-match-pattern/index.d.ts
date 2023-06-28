// Type definitions for lodash-match-pattern 2.3
// Project: https://github.com/mjhm/lodash-match-pattern#readme
// Definitions by: Daniel Kneip <https://github.com/daedal-knickerbockers>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as _ from 'lodash';

declare module 'lodash' {
    interface LoDashStatic {
        isDateString(s: any): boolean;
        isSize(s: any, n: any): boolean;
        isOmitted: any;
        isDefined(s: any): boolean;
        isPrinted(s: any, label: any): boolean;
        filterPattern(s: any, pattern: any): any;
        setMemo(s: any, key: any): any;
        isSetAsMemo(s: any, key: any): boolean;
        getMemoHash(): {};
        isEqualToMemo(s: any, key: any): any;
        isNotEqualToMemo(s: any, key: any): boolean;
        clearMemos(s: any): any;
        extractUrls(s: any): any;
    }
}

declare function matchPattern(sourceData: any, targetPattern: object | string): string | null;
declare namespace matchPattern {
    function use(newLodashModule: _.LoDashStatic): void;
    function getLodashModule(): _.LoDashStatic;
}

export = matchPattern;
