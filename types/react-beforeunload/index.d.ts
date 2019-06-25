// Type definitions for react-beforeunload 2.1
// Project: https://github.com/jacobbuck/react-beforeunload#readme
// Definitions by: nem035 <https://github.com/nem035>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export function useBeforeunload(handler?: (arg?: Event) => string | void): void;

export const Beforeunload: React.FC<{
    children?: React.ReactNode;
    onBeforeunload: (arg?: Event) => string | void;
}>;
