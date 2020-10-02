import * as React from "react";
import { ReactAnchorAttr } from "../../../typings/shared";

interface InheritedProps extends ReactAnchorAttr { }

export interface LinkProps extends InheritedProps {
    disabled?: boolean,
    inline?: boolean,
    visited?: boolean,
}

declare const Link: React.FC<LinkProps>;

export default Link;
