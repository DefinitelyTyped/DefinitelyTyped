// Type definitions for electron-prompt 1.3
// Project: https://github.com/p-sam/electron-prompt#readme
// Definitions by: Florian Keller <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

import { BrowserWindow } from 'electron';

declare namespace prompt {
    interface Options {
        /**
         * The local path of a CSS file to stylize the prompt window.
         * Defaults to `null`.
         */
        customStylesheet?: string | null;
        /** The height of the prompt window. Defaults to `130`. */
        height?: number;
        /**
         * The path to an icon image to use in the title bar. Defaults to `null`
         * and uses electron's icon.
         */
        icon?: string | null;
        /**
         * The attributes of the input field, analagous to the HTML attributes:
         * `{type: 'text', required: true}` -> `<input type="text" required>`.
         * Used if the type is `'input'`.
         */
        inputAttrs?: Record<string, any>;
        /**
         * The label which appears on the prompt for the input field. Defaults
         * to `'Please input a value:'`.
         */
        label?: string;
        /**
         * Whether the prompt window can be resized or not. Defaults to
         * `false`.
         */
        resizable?: boolean;
        /**
         * The items for the select dropdown if using the `'select'` type in the
         * format `'value'`: `'display text'`, where the value is what will be
         * given to the then block and the display text is what the user will
         * see.
         */
        selectOptions?: object;
        /** The title of the prompt window. Defaults to `'Prompt'`. */
        title?: string;
        /**
         * The type of input field, either `'input'` for a standard text input
         * field or 'select' for a dropdown type input. Defaults to `'input'`.
         */
        type?: `'input'` | 'select';
        /**
         * Whether the label should be interpreted as HTML or not. Defaults to
         * `false`.
         */
        useHtmlLabel?: boolean;
        /** The default value for the input field. Defaults to `null`. */
        value?: string | null;
        /** The width of the prompt window. Defaults to `370`. */
        width?: number;
    }
}

declare function prompt(options?: prompt.Options, parentBrowserWindow?: BrowserWindow): Promise<string | null>;

export = prompt;
