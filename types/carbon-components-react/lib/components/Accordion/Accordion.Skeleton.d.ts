import * as React from "react";
import { ReactAttr } from "../../../typings/shared";

export interface AccordionSkeletonProps extends ReactAttr<HTMLUListElement> {
    align?: "end" | "start" | undefined;
    count?: number | undefined;
    open?: boolean | undefined;
    /**
     * @deprecated
     */
    uid?: any;
}

declare const AccordionSkeleton: React.FC<AccordionSkeletonProps>;

export default AccordionSkeleton;
