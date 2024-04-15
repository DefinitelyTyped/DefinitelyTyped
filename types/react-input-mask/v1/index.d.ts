import * as React from "react";

declare namespace ReactInputMask {
    interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
        /**
         * Mask string. Format characters are:
         * * `9`: `0-9`
         * * `a`: `A-Z, a-z`
         * * `\*`: `A-Z, a-z, 0-9`
         *
         * Any character can be escaped with backslash, which usually will appear as double backslash in JS strings.
         * For example, German phone mask with unremoveable prefix +49 will look like `mask="+4\\9 99 999 99"` or `mask={"+4\\\\9 99 999 99"}`
         */
        mask: string;
        /**
         * Character to cover unfilled editable parts of mask. Default character is "_". If set to null, unfilled parts will be empty, like in ordinary input.
         */
        maskChar?: string | null | undefined;
        /**
         * Defines format characters with characters as keys and corresponding RegExp string as values. Default ones:
         * ```
         * {
         *   "9": "[0-9]",
         *   "a": "[A-Za-z]",
         *   "*": "[A-Za-z0-9]"
         * }```
         */
        formatChars?: { [key: string]: string } | undefined;
        /**
         * Show mask even in empty input without focus.
         */
        alwaysShowMask?: boolean | undefined;
        /**
         * Use inputRef instead of ref if you need input node to manage focus, selection, etc.
         */
        inputRef?: React.Ref<HTMLInputElement> | undefined;
    }
}

declare class ReactInputMask extends React.Component<ReactInputMask.Props> {
}

export default ReactInputMask;
