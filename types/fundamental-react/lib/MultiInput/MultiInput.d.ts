import * as React from "react";

export type MultiInputProps = {
    data: any[];
    buttonProps?: any;
    className?: string;
    compact?: boolean;
    disabled?: boolean;
    disableStyles?: boolean;
    inputProps?: any;
    listProps?: any;
    placeholder?: string;
    popoverProps?: any;
    tagProps?: any;
    validationState?: {
      state?: any,
      text?: string
    };
    onTagsUpdate?: (...args: any[]) => any;
} & { [x: string]: any };

declare class MultiInput extends React.Component<MultiInputProps> {}

export default MultiInput;
