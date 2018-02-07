// Type definitions for @storybook/addon-links 3.0
// Project: https://github.com/storybooks/storybook
// Definitions by: Joscha Feth <https://github.com/joscha>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from 'react';

export type LinkToFunction = (...args: any[]) => string;

export function linkTo<T>(book: string | LinkToFunction, kind?: string | LinkToFunction): React.MouseEventHandler<T>;
