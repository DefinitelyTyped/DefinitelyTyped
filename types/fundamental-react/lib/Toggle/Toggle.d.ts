import * as React from "react";

export type ToggleSize = "xs" | "s" | "m" | "l";

export type ToggleProps = {
    checked?: boolean;
    className?: string;
    disabled?: boolean;
    id?: string;
    inputProps?: { [x: string]: any };
    labelProps?: { [x: string]: any };
    size?: ToggleSize;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
} & { [x: string]: any };

declare class Toggle extends React.Component<ToggleProps> {}

export default Toggle;
