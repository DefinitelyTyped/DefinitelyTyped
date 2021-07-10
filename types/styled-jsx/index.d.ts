// Type definitions for styled-jsx 2.2
// Project: https://github.com/zeit/styled-jsx
// Definitions by: R1ZZU <https://github.com/R1ZZU>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import "react";

import * as css from "./css";
import * as server from "./server";

declare module "react" {
    interface StyleHTMLAttributes<T> extends HTMLAttributes<T> {
        jsx?: boolean | undefined;
        global?: boolean | undefined;
    }
}
