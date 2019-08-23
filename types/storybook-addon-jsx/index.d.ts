// Type definitions for storybook-addon-jsx 5.4
// Project: https://github.com/storybooks/addon-jsx
// Definitions by: James Newell <https://github.com/jameslnewell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import '@storybook/react';
import { ReactNode, ReactElement } from 'react';

export type displayNameFunc = (element: ReactElement) => string;

declare module '@storybook/react' {
    interface Options {
        skip?: number;
        enableBeautify?: boolean;
        onBeforeRender?: (domString: string) => string;
        displayName?: string | displayNameFunc;
    }

    interface Story {
        addWithJSX(kind: string, fn: () => ReactNode, options?: Options): Story;
    }
}
