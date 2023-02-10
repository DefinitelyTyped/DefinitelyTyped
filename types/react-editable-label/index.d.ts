// Type definitions for react-editable-label 1.3
// Project: https://github.com/markbiek/react-editable-label
// Definitions by: markbiek <https://github.com/markbiek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.1

import { Component } from 'react';

export type LabelSaveFunction = (value: string) => void;

export interface EditableLabelProps {
    initialValue: string;
    save: LabelSaveFunction;
    labelClass?: string;
    inputClass?: string;
    inputName?: string;
    inputId?: string;
    disableKeys?: boolean;
}

export default class EditableLabel extends Component<EditableLabelProps, any> {}
