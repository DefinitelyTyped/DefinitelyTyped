import * as React from "react";
import { ReactButtonAttr } from "../../../typings/shared";

interface InheritedProps extends Omit<ReactButtonAttr, "type"> { }

export interface HeaderGlobalActionProps extends InheritedProps {
    isActive?: boolean,
}

declare const HeaderGlobalAction: React.FC<HeaderGlobalActionProps>;

export default HeaderGlobalAction;
