import * as React from "react";
import { ReactAttr } from "../../../typings/shared";

export interface SkeletonTextProps extends ReactAttr<HTMLParagraphElement> {
    heading?: boolean,
    lineCount?: number,
    paragraph?: boolean,
    width?: string,
}

declare const SkeletonText: React.FC<SkeletonTextProps>;

export default SkeletonText;
