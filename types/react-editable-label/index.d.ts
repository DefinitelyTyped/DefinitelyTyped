import * as React from "react";

export interface EditableLabelProps {
    initialValue: string;
    save: (value: string) => void;
    disableKeys?: boolean;
    inputClass?: string;
    labelClass?: string;
    inputName?: string;
    inputId?: string;
}

export function EditableLabel(props: EditableLabelProps): React.JSX.Element;
