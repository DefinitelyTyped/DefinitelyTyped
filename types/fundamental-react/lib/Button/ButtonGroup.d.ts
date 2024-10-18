import * as React from "react";

export type ButtonGroupProps = {
    disabled?: boolean | undefined;
    disableStyles?: boolean | undefined;
} & React.HTMLAttributes<HTMLDivElement>;

declare const ButtonGroup: React.FunctionComponent<ButtonGroupProps> & {
    displayName: "ButtonGroup";
};

export default ButtonGroup;
