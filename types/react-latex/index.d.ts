// Type definitions for react-latex 2.0
// Project: https://github.com/zzish/react-latex
// Definitions by: Federico Grandi <https://github.com/EndBug>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';

interface LatexProps {
    children?: string;
    displayMode?: boolean;
    leqno?: boolean;
    fleqn?: boolean;
    throwOnError?: boolean;
    errorColor?: string;
    macros?: Record<any, any>;
    minRuleThickness?: number;
    colorIsTextColor?: boolean;
    maxSize?: number;
    maxExpand?: number;
    strict?: boolean | string | ((...args: any[]) => any);
    trust?: boolean | ((...args: any[]) => any);
}

declare class Latex extends React.Component<LatexProps> {}

export = Latex;
