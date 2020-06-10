import * as React from "react";

export type InputGroupAddonPosition = "before" | "after";

export type InputGroupTypes = "text" | "number" | "search";

export interface InputGroupAddonProps {
    className?: string;
    compact?: boolean;
    isButton?: boolean;
}

export type InputGroupProps = {
    className?: string;
    compact?: boolean;
    disabled?: boolean;
    disableStyles?: boolean;
    validationState?: {
        state?: 'error' | 'warning' | 'information' | 'success';
        text?: string;
    };
    props?: any;
} & { [x: string]: any };

declare class InputGroup extends React.Component<InputGroupProps> {
    static displayName: "InputGroup";
    static Addon: React.FunctionComponent<InputGroupAddonProps> & {displayName: "InputGroup.Addon"};
}

export default InputGroup;
