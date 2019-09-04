// Type definitions for next-nprogress 1.4
// Project: https://github.com/sergiodxa/next-nprogress#readme
// Definitions by: Ovyerus <https://github.com/Ovyerus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { NProgressOptions } from 'nprogress';
import { Component, ComponentType } from 'react';

export default function withNProgress(
    delayMs?: number,
    options?: Partial<NProgressOptions>
): <P extends object>(Page: ComponentType<P>) => ComponentType<P>;
