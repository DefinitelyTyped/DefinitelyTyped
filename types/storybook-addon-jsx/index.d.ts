// Type definitions for storybook-addon-jsx 5.3
// Project: https://github.com/storybooks/storybook
// Definitions by: James Newell <https://github.com/jameslnewell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import '@storybook/react';
import { ReactNode } from 'react';

declare module '@storybook/react' {
    interface Story {
        addWithJSX(kind: string, fn: () => ReactNode): Story;
    }
}
