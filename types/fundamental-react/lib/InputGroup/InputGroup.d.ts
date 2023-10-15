import * as React from "react";

export type InputGroupAddonPosition = "before" | "after";

export type InputGroupTypes = "text" | "number" | "search";

export interface InputGroupAddonProps {
    className?: string | undefined;
    compact?: boolean | undefined;
    isButton?: boolean | undefined;
    children?: React.ReactNode;
}

export type InputGroupProps = {
    className?: string | undefined;
    compact?: boolean | undefined;
    disabled?: boolean | undefined;
    disableStyles?: boolean | undefined;
    validationState?: {
        state?: "error" | "warning" | "information" | "success" | undefined;
        text?: string | undefined;
    } | undefined;
    props?: any;
} & { [x: string]: any };

declare class InputGroup extends React.Component<InputGroupProps> {
    static displayName: "InputGroup";
    static Addon: React.FunctionComponent<InputGroupAddonProps> & { displayName: "InputGroup.Addon" };
}

export default InputGroup;
