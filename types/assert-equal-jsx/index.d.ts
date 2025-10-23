import * as React from "react";

declare namespace assertEqualJSX {
    interface AsssertOptions {
        sanitize?(str: string): string;
    }
}

declare function assertEqualJSX(
    actual: React.JSX.Element,
    expected: React.JSX.Element,
    opts?: assertEqualJSX.AsssertOptions,
): void;

export = assertEqualJSX;
