import * as React from "react";

declare namespace assertEqualJSX {
    interface AsssertOptions {
        sanitize?(str: string): string;
    }
}

declare function assertEqualJSX(actual: JSX.Element, expected: JSX.Element, opts?: assertEqualJSX.AsssertOptions): void;

export = assertEqualJSX;
