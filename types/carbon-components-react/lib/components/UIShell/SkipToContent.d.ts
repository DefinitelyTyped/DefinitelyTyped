import React = require("react");
import { ReactAnchorAttr } from "../../../typings/shared";

export interface SkipToContentProps extends Omit<ReactAnchorAttr, "children"> {
    children?: string | undefined;
}

declare const SkipToContent: React.FC<SkipToContentProps>;

export default SkipToContent;
