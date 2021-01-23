// Type definitions for react-multiline-clamp 1.0.6
// Project: https://github.com/mikelpmc/react-multiline-clamping
// Definitions by: Debananda Mohanty <https://github.com/Debananda>
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
