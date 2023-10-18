import * as React from "react";

export interface TextTruncateProps {
    containerClassName?: string | undefined;
    element?: string | undefined;
    line?: number | boolean | undefined;
    onCalculated?: (() => void) | undefined;
    onTruncated?: (() => void) | undefined;
    onToggled?: ((truncated: boolean) => void) | undefined;
    text?: string | undefined;
    textElement?: React.ReactNode | undefined;
    textTruncateChild?: React.ReactNode | undefined;
    truncateText?: string | undefined;
    maxCalculateTimes?: number | undefined;
}

declare class TextTruncate extends React.Component<TextTruncateProps> {}

export default TextTruncate;
