import * as React from "react";

export type LocalizationEditorProps = {
    control: {
        buttonProps?: { [x: string]: any };
        inputProps?: { [x: string]: any };
        labelProps?: { [x: string]: any };
        label?: string;
        placeholder?: string;
        language?: string;
    };
    menu: Array<{
        inputProps?: { [x: string]: any };
        placeholder?: string;
        language?: string;
    }>;
    className?: string;
    compact?: boolean;
    disableStyles?: boolean;
    id?: string;
    inputClassName?: string;
    listProps?: any;
    popoverProps?: any;
    textarea?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

declare const LocalizationEditor: React.FunctionComponent<LocalizationEditorProps> & {
    displayName: "LocalizationEditor";
};

export default LocalizationEditor;
