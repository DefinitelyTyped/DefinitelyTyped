import * as React from "react";

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
