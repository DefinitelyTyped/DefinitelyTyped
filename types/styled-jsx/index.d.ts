// Type definitions for styled-jsx 2.2.1
// Project: https://github.com/zeit/styled-jsx
// Definitions by: R1ZZU <https://github.com/R1ZZU>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from "react";

declare module "react" {
    interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {
        jsx?: boolean;
        global?: boolean;
    }
}
