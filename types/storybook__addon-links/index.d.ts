// Type definitions for @storybook/addon-links 3.3
// Project: https://github.com/storybooks/storybook
// Definitions by: Joscha Feth <https://github.com/joscha>,
//                 Jesse Pinho <https://github.com/jessepinho>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export type LinkToFunction = (...args: any[]) => string;

export function linkTo<T>(
  book: string | LinkToFunction,
  kind?: string | LinkToFunction
): () => void;

export function hrefTo(kind: string, story: string): Promise<string>;
