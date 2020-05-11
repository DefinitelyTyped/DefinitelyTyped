import * as React from "react";
import { ReactDivAttr } from "../../../typings/shared";

interface InheritedProps extends ReactDivAttr { }

export interface TabsSkeletonProps extends InheritedProps { }

declare const TabsSkeleton: React.FC<TabsSkeletonProps>;

export default TabsSkeleton;
