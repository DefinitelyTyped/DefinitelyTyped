// Type definitions for react-beforeunload 2.1
// Project: https://github.com/jacobbuck/react-beforeunload#readme
// Definitions by: nem035 <https://github.com/nem035>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export type UseBeforeunloadHandler = ((arg: Event) => string | undefined) | ((arg: Event) => void);

export function useBeforeunload(handler?: UseBeforeunloadHandler): void;

export const Beforeunload: React.FC<{
    children?: React.ReactNode;
    onBeforeunload: UseBeforeunloadHandler;
}>;
