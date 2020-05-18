import * as React from "react";

interface InheritedProps extends React.HTMLAttributes<HTMLUListElement> { }

export interface ProgressIndicatorSkeletonProps extends InheritedProps { }

declare const ProgressIndicatorSkeleton: React.FC<ProgressIndicatorSkeletonProps>;

export default ProgressIndicatorSkeleton;
