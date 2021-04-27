import * as React from "react";
import { ReactAnchorAttr } from "../../../typings/shared";

export interface LinkProps extends ReactAnchorAttr { // this is a <p> element when disabled but accounting for it is useless
    disabled?: boolean,
    inline?: boolean,
    size?: "sm" | "md" | "lg",
    visited?: boolean,
}

declare const Link: React.FC<LinkProps>;

export default Link;
