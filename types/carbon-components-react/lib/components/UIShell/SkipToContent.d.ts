import * as React from "react";
import { ReactAnchorAttr } from "../../../typings/shared";

interface InheritedProps extends Omit<ReactAnchorAttr, "children"> {
    children?: string,
}

export interface SkipToContentProps extends InheritedProps { }

declare const SkipToContent: React.FC<SkipToContentProps>;

export default SkipToContent;
