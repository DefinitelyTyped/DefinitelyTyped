import * as React from "react";

export type MultiInputProps = {
    data: any[];
    buttonProps?: any;
    className?: string | undefined;
    compact?: boolean | undefined;
    disabled?: boolean | undefined;
    disableStyles?: boolean | undefined;
    inputProps?: any;
    listProps?: any;
    placeholder?: string | undefined;
    popoverProps?: any;
    tagProps?: any;
    validationState?: {
        state?: any;
        text?: string | undefined;
    } | undefined;
    onTagsUpdate?: ((...args: any[]) => any) | undefined;
} & { [x: string]: any };

declare class MultiInput extends React.Component<MultiInputProps> {}

export default MultiInput;
