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

export interface FilterTagProps extends ReactDivAttr {
    filter: true,
    onClose?(event: React.MouseEvent<HTMLButtonElement>): void,
    type?: TagTypeName,
}

export interface ChipTagProps extends ReactAttr<HTMLSpanElement> {
    filter?: false,
    type?: TagTypeName,
}

declare function Tag(props: FCProps<FilterTagProps>): FCReturn;
// tslint:disable:unified-signatures
declare function Tag(props: FCProps<ChipTagProps>): FCReturn;

export default Tag;
