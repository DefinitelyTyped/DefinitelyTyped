import { BrowserWindow } from "electron";

declare namespace prompt {
    interface ButtonLabels {
        ok?: string | undefined;
        cancel?: string | undefined;
    }

    interface Options {
        /**
         * Whether the window should always stay on top of other windows.
         * Defaults to `false`.
         */
        alwaysOnTop?: boolean | undefined;
        /**
         * The text for the OK/cancel buttons. Properties are `ok` and `cancel`.
         * Defaults to `null`.
         */
        buttonLabels?: ButtonLabels | null | undefined;
        /**
         * The local path of a CSS file to stylize the prompt window.
         * Defaults to `null`.
         */
        customStylesheet?: string | null | undefined;
        /**
         * The height of the prompt window. Defaults to `130`.
         */
        height?: number | undefined;
        /**
         * The path to an icon image to use in the title bar.
         * Defaults to `null` and uses electron's icon.
         */
        icon?: string | null | undefined;
        /**
         * The attributes of the input field, analagous to the HTML attributes:
         * `{type: 'text', required: true}` -> `<input type="text" required>`.
         * Used if the type is `input`.
         */
        inputAttrs?: Record<string, string> | undefined;
        /**
         * The label which appears on the prompt for the input field.
         * Defaults to `Please input a value:`.
         */
        label?: string | undefined;
        /**
         * Whether to show the menubar or not. Defaults to `false`.
         */
        menuBarVisible?: boolean | undefined;
        /**
         * The minimum allowed height for the prompt window.
         * Same default value as `height`.
         */
        minHeight?: number | undefined;
        /**
         * The minimum allowed width for the prompt window.
         * Same default value as `width`.
         */
        minWidth?: number | undefined;
        /**
         * Whether the prompt window can be resized or not
         * (also sets `useContentSize`). Defaults to `false`.
         */
        resizable?: boolean | undefined;
        /**
         * The items for the select dropdown if using the 'select' type in the
         * format 'value': 'display text', where the value is what will be given
         * to the then block and the display text is what the user will see.
         */
        selectOptions?: Record<string, string> | null | undefined;
        /**
         * Whether to show the prompt window icon in taskbar. Defaults to true.
         */
        skipTaskbar?: boolean | undefined;
        /**
         * The title of the prompt window. Defaults to 'Prompt'.
         */
        title?: string | undefined;
        /**
         * The type of input field, either `input` for a standard text input
         * field or `select` for a dropdown type input. Defaults to `input`.
         */
        type?: "input" | "select" | undefined;
        /**
         * Whether the label should be interpreted as HTML or not.
         * Defaults to `false`.
         */
        useHtmlLabel?: boolean | undefined;
        /**
         * The default value for the input field. Defaults to `null`.
         */
        value?: string | null | undefined;
        /**
         * The width of the prompt window. Defaults to `370`.
         */
        width?: number | undefined;
    }
}

declare function prompt(options?: prompt.Options, parentBrowserWindow?: BrowserWindow): Promise<string | null>;

export = prompt;
