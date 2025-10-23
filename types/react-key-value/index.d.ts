import * as React from "react";

export class KeyValue extends React.Component<KeyValueProps> {
    handleKeyItemChange(index: bigint, value: any): any;

    handleRemove(index: bigint): any;

    handleValueItemChange(index: bigint, value: any): any;

    render(): any;

    renderAddButton(): any;

    renderKeyItem(index: bigint, value: any): any;

    renderLabelText(text: string): any;

    renderRows(): any;

    renderValueItem(index: bigint, value: any): any;

    toJSON(): any;

    static displayName: string;
}

export interface KeyValueProps {
    rows?: Array<{ keyItem: string; valueItem: string }>;
    onChange?: (rows: Array<{ keyItem: string; valueItem: string }>) => void;
    customAddButtonRenderer?: (handleAddNew: () => any) => React.ReactElement;
    keyInputPlaceholder?: string;
    valueInputPlaceholder?: string;
    hideLabels?: boolean;
}
