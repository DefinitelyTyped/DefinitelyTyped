import * as React from "react";

export type ButtonGroupProps = {
    disabled?: boolean;
    disableStyles?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

declare const ButtonGroup: React.FunctionComponent<ButtonGroupProps> & {
    displayName: "ButtonGroup"
};

export default ButtonGroup;
