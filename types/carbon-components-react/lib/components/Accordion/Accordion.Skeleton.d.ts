import * as React from "react";
import { ReactAttr } from "../../../typings/shared";

export interface AccordionSkeletonProps extends  ReactAttr<HTMLUListElement> {
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
