import * as React from "react";
import { ReactDivAttr } from "../../../typings/shared";

interface InheritedProps extends ReactDivAttr { }

export interface PaginationSkeletonProps extends InheritedProps { }

declare const PaginationSkeleton: React.FC<PaginationSkeletonProps>;

export default PaginationSkeleton;
