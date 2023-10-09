import * as React from "react";
import { ReactAttr } from "../../../typings/shared";

export interface SkeletonTextProps extends ReactAttr<HTMLParagraphElement> {
    heading?: boolean | undefined;
    lineCount?: number | undefined;
    paragraph?: boolean | undefined;
    width?: string | undefined;
}

declare const SkeletonText: React.FC<SkeletonTextProps>;

export default SkeletonText;
