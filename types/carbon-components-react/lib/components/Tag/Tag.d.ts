import * as React from "react";
import { ReactAttr } from "../../../typings/shared";

interface InheritedProps extends ReactAttr<HTMLSpanElement> { }

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

export interface TagProps extends InheritedProps {
    type: TagTypeName,
}

declare const Tag: React.FC<TagProps>;

export default Tag;
