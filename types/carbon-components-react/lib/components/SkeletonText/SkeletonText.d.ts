import * as React from "react";
import { ReactAttr } from "../../../typings/shared";

interface InheritedProps extends ReactAttr<HTMLParagraphElement> { }

export interface SkeletonTextProps extends InheritedProps {
    heading?: boolean,
    lineCount?: number,
    paragraph?: boolean,
    width?: string,
}

declare const SkeletonText: React.FC<SkeletonTextProps>;

export default SkeletonText;
