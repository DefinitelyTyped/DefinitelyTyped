// Type definitions for react-multiline-clamping 1.0.6
// Project: https://github.com/baz/foo (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
// Definitions by: Debananda Mohanty <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';

export interface ClampProps {
    lines: number;
    maxLines?: number;
    withTooltip?: boolean;
    withToggle?: boolean;
    texts?: {
        showMore: string;
        showLess: string;
    };
    onShowMore?: () => void;
}

export default class Clamp extends React.Component<ClampProps> {}
