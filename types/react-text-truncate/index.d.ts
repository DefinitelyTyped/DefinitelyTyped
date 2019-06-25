// Type definitions for react-text-truncate 0.14
// Project: https://github.com/ShinyChang/react-text-truncate
// Definitions by: Adrien Antoine <https://github.com/adriantoine>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export interface TextTruncateProps {
    containerClassName?: string;
    element?: string;
    line?: number | boolean;
    onCalculated?: () => void;
    onTruncated?: () => void;
    onToggled?: (truncated: boolean) => void;
    text?: string;
    textElement?: React.ReactNode;
    textTruncateChild?: React.ReactNode;
    truncateText?: string;
    maxCalculateTimes?: number;
}

declare class TextTruncate extends React.Component<TextTruncateProps> {}

export default TextTruncate;
