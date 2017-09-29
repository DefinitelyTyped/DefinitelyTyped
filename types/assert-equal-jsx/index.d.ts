// Type definitions for assert-equal-jsx 1.0
// Project: https://github.com/thejameskyle/assert-equal-jsx
// Definitions by: Josh Toft <https://github.com/seryl>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from 'react';

declare namespace assertEqualJSX {
	interface AsssertOptions {
		sanitize?(str: string): string;
	}
}

declare function assertEqualJSX(actual: JSX.Element, expected: JSX.Element, opts?: assertEqualJSX.AsssertOptions): void;

export = assertEqualJSX;
