// Type definitions for react-json-pretty 1.7
// Project: https://github.com/chenckang/react-json-pretty
// Definitions by: Karol Janyst <https://github.com/LKay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { ComponentClass, HTMLAttributes } from 'react';

export as namespace JSONPretty;

export = JSONPretty;

declare const JSONPretty: JSONPretty;
type JSONPretty = ComponentClass<JSONPretty.JSONPrettyProps>;

declare namespace JSONPretty {
    interface JSONPrettyProps extends HTMLAttributes<HTMLPreElement> {
        json: any;
        replacer?(this: any, key: string, value: any): any;
        space?: number;
        themeClassName?: string;
    }
}
