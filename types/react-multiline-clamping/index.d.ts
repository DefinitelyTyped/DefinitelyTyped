// Type definitions for react-multiline-clamping x.x
// Project: https://github.com/baz/foo (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
// Definitions by: Debananda Mohanty <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Component } from 'react';

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

export default class Clamp extends Component<ClampProps> {}
