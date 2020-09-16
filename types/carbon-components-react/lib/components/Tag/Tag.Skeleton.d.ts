import * as React from "react";
import { ReactAttr } from "../../../typings/shared";

interface InheritedProps extends ReactAttr<HTMLSpanElement> { }

export interface TagSkeletonProps extends InheritedProps { }

declare const TagSkeleton: React.FC<TagSkeletonProps>;

export default TagSkeleton;
