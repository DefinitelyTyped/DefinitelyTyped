import * as React from "react";

export type LocalizationEditorProps = {
    /* A collection of properties to apply to the `<label>`, `<input>`/`<textarea>` and `<button>` elements. */
    control: {
        buttonProps?: { [x: string]: any };
        inputProps?: { [x: string]: any };
        labelProps?: { [x: string]: any };
        /* Localized text for the `<label>` element. */
        label?: string;
        placeholder?: string;
        /* Text to display on the `<button>` element. Meant to be the language of the text in the `<input>`/`<textarea>` element. */
        language?: string;
    };
    /* An array of objects that represent the values of the elements in the dropdown menu. The shape of the objects in the array is `{ placeholder: string, language: string, inputProps: object }`. */
    menu: Array<{
        inputProps?: { [x: string]: any };
        placeholder?: string;
        language?: string;
    }>;
    className?: string;
    compact?: boolean;
    customStyles?: {[x: string]: any};
    disableStyles?: boolean;
    id?: string;
    listProps?: { [x: string]: any };
    popoverProps?: { [x: string]: any };
    /* Set to **true** to enable a Localization Editor with a textarea. */
    textarea?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

declare const LocalizationEditor: React.FunctionComponent<LocalizationEditorProps> & {
    displayName: "LocalizationEditor";
};

export default LocalizationEditor;
