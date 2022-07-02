import * as React from "react";
import { ReactAttr, ForwardRefReturn } from "../../../typings/shared";

export interface BreadcrumbProps extends ReactAttr {
    noTrailingSlash?: boolean | undefined,
}

declare const Breadcrumb: ForwardRefReturn<HTMLElement, BreadcrumbProps>;

export default Breadcrumb;
