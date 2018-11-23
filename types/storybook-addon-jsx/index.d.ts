// Type definitions for storybook-addon-jsx 5.4
// Project: https://github.com/storybooks/storybook
// Definitions by: James Newell <https://github.com/jameslnewell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import '@storybook/react';
import { ReactNode } from 'react';

declare module '@storybook/react' {
    interface Options {
        skip?: number;
        enableBeautify?: boolean;
        onBeforeRender?: (domString: string) => string;
    }

    interface Story {
        addWithJSX(kind: string, fn: () => ReactNode, options?: Options): Story;
    }
}
