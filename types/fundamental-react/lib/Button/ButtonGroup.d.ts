import * as React from "react";

export type ButtonGroupProps = {
    customStyles?: {[x: string]: any};
    disabled?: boolean;
    disableStyles?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

declare const ButtonGroup: React.FunctionComponent<ButtonGroupProps> & {
    displayName: "ButtonGroup"
};

export default ButtonGroup;
