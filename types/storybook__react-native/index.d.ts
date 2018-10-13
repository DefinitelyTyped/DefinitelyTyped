// Type definitions for @storybook/react-native 3.0
// Project: https://github.com/storybooks/storybook
// Definitions by: Joscha Feth <https://github.com/joscha>
//                 Anton Izmailov <https://github.com/wapgear>
//                 Alec Hill <https://github.com/alechill>
//                 Kyle Roach <https://github.com/iRoachie>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export interface StorybookUIOptions {
    onDeviceUI?: boolean;
    disableWebsockets?: boolean;
    secured?: boolean;
    host?: string;
    port?: number;
    query?: string;
}

export function getStorybookUI(
    options: StorybookUIOptions
): React.ComponentClass;

export * from '@storybook/react';
