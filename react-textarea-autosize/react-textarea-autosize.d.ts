// Type definitions for react-textarea-autosize 4.0.3
// Project: https://github.com/andreypopp/react-textarea-autosize
// Definitions by: Alexey Svetliakov <https://github.com/asvetliakov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../react/react.d.ts" />


declare module "react-textarea-autosize" {
    import * as React from "react";

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
        onChange?: (event: React.FormEvent) => void;
        /**
         * Callback on height change
         * @param height
         */
        onHeightChange?: (height: number) => void;
        /**
         * Try to cache DOM measurements performed by component so that we don't
         * touch DOM when it's not needed.
         *
         * This optimization doesn't work if we dynamically style <textarea />
         * component.
         * @default false
         */
        useCacheForDOMMeasurements?: boolean;
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
    }

    /**
     * <TextareaAutosize/>
     */
    export default class TextareaAutosize extends React.Component<TextareaAutosizeProps, any> { }

}
