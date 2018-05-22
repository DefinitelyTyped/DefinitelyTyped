// Type definitions for react-json-pretty 1.7
// Project: https://github.com/chenckang/react-json-pretty
// Definitions by: Karol Janyst <https://github.com/LKay>
//                 Jason Finch <https://github.com/Jafin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

import { ComponentClass, HTMLProps } from "react";

export as namespace JSONPretty;

export = JSONPretty;

declare const JSONPretty: JSONPretty;

type JSONPretty = ComponentClass < JSONPretty.JSONPrettyProps >;

declare namespace JSONPretty {
    interface JSONPrettyProps extends HTMLProps < JSONPretty > {
        json: {} | string;
        themeClassName?: string;
        replacer
            ?(key: string, value: any)
            : string;
    }
}
