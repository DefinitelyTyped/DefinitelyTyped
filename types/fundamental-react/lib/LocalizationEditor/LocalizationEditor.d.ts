import * as React from "react";

export type LocalizationEditorProps = {
    control: {
        buttonProps?: { [x: string]: any } | undefined;
        inputProps?: { [x: string]: any } | undefined;
        labelProps?: { [x: string]: any } | undefined;
        label?: string | undefined;
        placeholder?: string | undefined;
        language?: string | undefined;
    };
    menu: Array<{
        inputProps?: { [x: string]: any } | undefined;
        placeholder?: string | undefined;
        language?: string | undefined;
    }>;
    className?: string | undefined;
    compact?: boolean | undefined;
    disableStyles?: boolean | undefined;
    id?: string | undefined;
    inputClassName?: string | undefined;
    listProps?: any;
    popoverProps?: any;
    textarea?: boolean | undefined;
} & React.HTMLAttributes<HTMLDivElement>;

declare const LocalizationEditor: React.FunctionComponent<LocalizationEditorProps> & {
    displayName: "LocalizationEditor";
};

export default LocalizationEditor;
