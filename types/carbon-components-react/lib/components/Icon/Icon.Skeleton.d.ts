import * as React from "react";
import { ReactAttr, ReactDivAttr } from "../../../typings/shared";

interface InheritedProps extends ReactDivAttr { }

export interface IconSkeletonProps extends InheritedProps { }

declare const IconSkeleton: React.FC<IconSkeletonProps>;

export default IconSkeleton;
