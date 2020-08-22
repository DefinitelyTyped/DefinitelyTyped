import * as React from "react";
import { ReactAttr } from "../../../typings/shared";

interface InheritedProps extends ReactAttr<HTMLUListElement> { }

export interface AccordionSkeletonProps extends InheritedProps {
    align?: "end" | "start";
    count?: number,
    open?: boolean,
    /**
     * @deprecated
     */
    uid?: any,
}

declare const AccordionSkeleton: React.FC<AccordionSkeletonProps>;

export default AccordionSkeleton;
