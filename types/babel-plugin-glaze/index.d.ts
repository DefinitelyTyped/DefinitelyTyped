// Type definitions for babel-plugin-glaze 0.5
// Project: https://github.com/kripod/glaze/blob/master/packages/babel-plugin-glaze/README.md
// Definitions by: Kristóf Poduszló <https://github.com/kripod>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.8

import { ThemedStyle } from 'glaze';
import {} from 'react';

declare module 'react' {
    interface Attributes {
        sx?: ThemedStyle;
    }
}
