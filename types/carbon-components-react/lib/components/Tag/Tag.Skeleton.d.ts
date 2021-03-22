import * as React from "react";
import { ReactAttr } from "../../../typings/shared";

export interface TagSkeletonProps extends ReactAttr<HTMLSpanElement> { }

declare const TagSkeleton: React.FC<TagSkeletonProps>;

export default TagSkeleton;
