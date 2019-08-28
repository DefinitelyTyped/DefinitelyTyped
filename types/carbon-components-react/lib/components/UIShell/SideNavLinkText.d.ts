import * as React from "react";
import { ReactAttr, RequiresChildrenProps } from "../../../typings/shared";

interface InheritedProps extends
    Omit<ReactAttr<HTMLSpanElement>, "children">,
    RequiresChildrenProps
{ }

export interface SideNavLinkTextProps extends InheritedProps { }

declare const SideNavLinkText: React.FC<SideNavLinkTextProps>;

export default SideNavLinkText;
