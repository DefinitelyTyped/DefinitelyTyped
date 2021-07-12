import * as React from "react";
import { ReactAnchorAttr } from "../../../typings/shared";

export interface LinkProps extends ReactAnchorAttr { // this is a <p> element when disabled but accounting for it is useless
    disabled?: boolean | undefined,
    inline?: boolean | undefined,
    renderIcon?: React.ComponentType | undefined;
    size?: "sm" | "md" | "lg" | undefined,
    visited?: boolean | undefined,
}

declare const Link: React.FC<LinkProps>;

export default Link;
