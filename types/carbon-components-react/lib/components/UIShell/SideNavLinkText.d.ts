import * as React from "react";
import { ReactAttr, RequiresChildrenProps } from "../../../typings/shared";

export interface SideNavLinkTextProps extends Omit<ReactAttr<HTMLSpanElement>, "children">, RequiresChildrenProps { }

declare const SideNavLinkText: React.FC<SideNavLinkTextProps>;

export default SideNavLinkText;
