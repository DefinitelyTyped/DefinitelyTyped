// Type definitions for react-scroll-into-view-if-needed 2.1
// Project: https://github.com/icd2k3/react-scroll-into-view-if-needed#readme
// Definitions by: Angus Fretwell <https://github.com/angusfretwell>
//                 Allan Pope <https://github.com/allanpope>
//                 Jonathan Ly <https://github.com/jonathanly>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

import * as React from 'react';
import * as ScrollIntoViewIfNeeded from 'scroll-into-view-if-needed';

export interface ReactScrollIntoViewIfNeededProps
    extends React.HTMLProps<HTMLElement> {
    options?: ScrollIntoViewIfNeeded.Options;
    active?: boolean;
    elementType?: keyof JSX.IntrinsicElements;
}

export default class ReactScrollIntoViewIfNeeded extends React.Component<
    ReactScrollIntoViewIfNeededProps
> {}
