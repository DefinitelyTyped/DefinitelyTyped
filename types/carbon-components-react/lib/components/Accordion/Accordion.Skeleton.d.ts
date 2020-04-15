import * as React from "react";

export interface AccordionSkeletonProps {
    align?: "end" | "start";
    className?: string;
    count?: number,
    open?: boolean,
    uid?: any,
}

declare const AccordionSkeleton: React.FC<AccordionSkeletonProps>;

export default AccordionSkeleton;
