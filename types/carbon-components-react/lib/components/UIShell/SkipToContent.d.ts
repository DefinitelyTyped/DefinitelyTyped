import * as React from "react";
import { ReactAnchorAttr } from "../../../typings/shared";

export interface SkipToContentProps extends Omit<ReactAnchorAttr, "children"> {
    children?: string,
}

declare const SkipToContent: React.FC<SkipToContentProps>;

export default SkipToContent;
