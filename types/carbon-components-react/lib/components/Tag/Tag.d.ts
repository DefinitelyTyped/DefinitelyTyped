import * as React from "react";
import { ReactAttr } from "../../../typings/shared";

interface InheritedProps extends ReactAttr { }

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
    | "warm-gray";

export declare const types: TagTypeName[];

interface SharedProps {
    type?: TagTypeName,
}

export interface FilterTagProps extends InheritedProps, SharedProps {
    filter: true,
    onClose(event: React.MouseEvent<HTMLButtonElement>): void,
}

export interface ChipTagProps extends InheritedProps, SharedProps {
    filter?: false,
}

declare const Tag: React.FC<ChipTagProps | FilterTagProps>;

export default Tag;
