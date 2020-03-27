import * as React from "react";

export interface AccordionSkeletonProps {
    count?: number,
    open?: boolean,
    uid?: any,
}

declare const AccordionSkeleton: React.FC<AccordionSkeletonProps>;

export default AccordionSkeleton;
