// Type definitions for react-json-pretty 1.3
// Project: https://github.com/chenckang/react-json-pretty
// Definitions by: Karol Janyst <https://github.com/LKay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { ComponentClass, HTMLProps } from "react";

export as namespace JSONPretty;

export = JSONPretty;

declare const JSONPretty: JSONPretty;
type JSONPretty = ComponentClass<JSONPretty.JSONPrettyProps>;

declare namespace JSONPretty {
    interface JSONPrettyProps extends HTMLProps<JSONPretty> {
        json: {} | string;
    }
}
