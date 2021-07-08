// Type definitions for react-textarea-autosize 4.3.0
// Project: https://github.com/andreypopp/react-textarea-autosize
// Definitions by: Alexey Svetliakov <https://github.com/asvetliakov>,
//                 Jerry Zou <https://github.com/zry656565>
//                 Rahul Sagore <https://github.com/Rahul-Sagore>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

declare module "react-textarea-autosize" {
    import * as React from "react";

    /**
     * <TextareaAutosize/> properties
     */
    export interface TextareaAutosizeProps extends React.HTMLProps<HTMLTextAreaElement> {
        /**
         * Current textarea value
         */
        value?: string | undefined;
        /**
         * Callback on value change
         * @param event
         */
        onChange?: ((event: React.ChangeEvent<HTMLTextAreaElement>) => void) | undefined;
        /**
         * Callback on height change
         * @param height
         */
        onHeightChange?: ((height: number) => void) | undefined;
        /**
         * Try to cache DOM measurements performed by component so that we don't
         * touch DOM when it's not needed.
         *
         * This optimization doesn't work if we dynamically style `<textarea />`
         * component.
         * @default false
         */
        useCacheForDOMMeasurements?: boolean | undefined;
        /**
         * Minimal number of rows to show.
         */
        rows?: number | undefined;
        /**
         * Alias for `rows`.
         */
        minRows?: number | undefined;
        /**
         * Maximum number of rows to show.
         */
        maxRows?: number | undefined;
        /**
         * Allows an owner to retrieve the DOM node.
         */
        inputRef?: ((node: HTMLTextAreaElement) => void) | React.RefObject<HTMLTextAreaElement> | undefined;
    }

    /**
     * <TextareaAutosize/>
     */
    export default class TextareaAutosize extends React.Component<TextareaAutosizeProps> { }

}
