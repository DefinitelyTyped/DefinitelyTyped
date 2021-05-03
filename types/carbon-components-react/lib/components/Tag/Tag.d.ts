import * as React from "react";
import { ReactAttr, ReactDivAttr, FCProps, FCReturn } from "../../../typings/shared";

export type TagTypeName =
    "red"
    | "magenta"
    | "purple"
    | "blue"
    | "cyan"
    | "teal"
    | "green"
    | "gray"
    | "cool-gray"
    | "warm-gray"
    | "high-contrast";

export declare const types: TagTypeName[];

interface SharedProps {
    disabled?: boolean;
    size?: "sm" | "md";
    type?: TagTypeName,
}

export interface FilterTagProps extends ReactDivAttr, SharedProps {
    filter: true,
    onClose?(event: React.MouseEvent<HTMLButtonElement>): void,
}

// div or button, HTMLElement will need to be casted
export interface ChipTagProps extends ReactAttr, SharedProps {
    filter?: false,
    renderIcon?: React.ComponentType<any>;
}

declare function Tag(props: FCProps<FilterTagProps>): FCReturn;
// tslint:disable:unified-signatures
declare function Tag(props: FCProps<ChipTagProps>): FCReturn;

export default Tag;
