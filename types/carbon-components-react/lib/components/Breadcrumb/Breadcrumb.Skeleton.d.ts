import * as React from "react";
import { ReactDivAttr } from "../../../typings/shared";

interface InheritedProps extends ReactDivAttr { }

export interface BreadcrumbSkeletonProps extends InheritedProps { }

declare const BreadcrumbSkeleton: React.FC<BreadcrumbSkeletonProps>;

export default BreadcrumbSkeleton;
