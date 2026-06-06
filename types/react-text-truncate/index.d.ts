import * as React from "react";

declare namespace TextTruncate {
    interface TextTruncateProps {
        containerClassName?: string | undefined;
        /** @default "div" */
        element?: string | undefined;
        /** @default 1 */
        line?: number | boolean | undefined;
        onCalculated?: (() => void) | undefined;
        onTruncated?: (() => void) | undefined;
        onToggled?: ((truncated: boolean) => void) | undefined;
        /** @default "" */
        text?: string | undefined;
        /** @default "span" */
        textElement?: React.ReactNode | undefined;
        textTruncateChild?: React.ReactNode | undefined;
        /** @default "..." */
        truncateText?: string | undefined;
        /** @default 10 */
        maxCalculateTimes?: number | undefined;
    }
}

declare class TextTruncate extends React.Component<TextTruncate.TextTruncateProps> {}

export = TextTruncate;
