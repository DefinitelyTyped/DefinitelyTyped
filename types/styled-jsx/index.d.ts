// Type definitions for styled-jsx 2.2
// Project: https://github.com/zeit/styled-jsx
// Definitions by: R1ZZU <https://github.com/R1ZZU>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.8

import "react";

declare module "react" {
    interface StyleHTMLAttributes<T> extends HTMLAttributes<T> {
        jsx?: boolean | undefined;
        global?: boolean | undefined;
    }
}
