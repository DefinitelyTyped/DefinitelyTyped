import * as React from "react";
import { ReactAttr } from "../../../typings/shared";

interface InheritedProps {
    children?: ReactAttr["children"]
    className?: ReactAttr["className"],
    title: NonNullable<ReactAttr["title"]>,
}

export interface SideNavDetailsProps extends InheritedProps { }

declare const SideNavDetails: React.FC<SideNavDetailsProps>;

export default SideNavDetails;
