// Type definitions for babel-plugin-glaze 0.5
// Project: https://github.com/kripod/glaze/blob/master/packages/babel-plugin-glaze/README.md
// Definitions by: Kristóf Poduszló <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import {} from 'react';

import { ThemedStyle } from 'glaze';

declare module 'react' {
    interface Attributes {
        sx?: ThemedStyle;
    }
}
