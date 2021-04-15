// Type definitions for react-textarea-autosize 4.3.1
// Project: https://github.com/andreypopp/react-textarea-autosize
// Definitions by: Alexey Svetliakov <https://github.com/asvetliakov>,
//                 Jerry Zou <https://github.com/zry656565>
//                 Rahul Sagore <https://github.com/Rahul-Sagore>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8
declare module "react-textarea-autosize" {
    import * as React from "react";

    type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;
    type Style = Omit<NonNullable<TextareaProps["style"]>, "maxHeight" | "minHeight"> & {
        height?: number;
    };
    export type TextareaHeightChangeMeta = {
        rowHeight: number;
    };

    export type OnHeightChangeHandler = (height: number, meta?: TextareaHeightChangeMeta) => void;

    /**
     * <TextareaAutosize/> properties
     */
    export interface TextareaAutosizeProps extends React.HTMLProps<HTMLTextAreaElement> {
        /**
         * Current textarea value
         */
        value?: string;
        /**
         * Callback on value change
         * @param event
         */
        onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
        /**
         * Callback on height change
         * @param number height
         * @param meta TextareaHeightChangeMeta
         */
        onHeightChange?: OnHeightChangeHandler;
        /**
         * Try to cache DOM measurements performed by component so that we don't
         * touch DOM when it's not needed.
         *
         * This optimization doesn't work if we dynamically style `<textarea />`
         * component.
         * @default false
         */
        cacheMeasurements?: boolean;
        /**
         * Minimal number of rows to show.
         */
        rows?: number;
        /**
         * Alias for `rows`.
         */
        minRows?: number;
        /**
         * Maximum number of rows to show.
         */
        maxRows?: number;
        /**
         * Allows an owner to retrieve the DOM node.
         */
        inputRef?: ((node: HTMLTextAreaElement) => void) | React.RefObject<HTMLTextAreaElement>;
        /**
         * Style attribute forwarded to `textarea`
         */
        style?: Style;
    }

    /**
     * <TextareaAutosize/>
     */
    export default class TextareaAutosize extends React.Component<TextareaAutosizeProps> {}
}
