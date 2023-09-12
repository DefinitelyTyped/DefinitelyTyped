import * as React from "react";
import { ForwardRefReturn, ReactAttr } from "../../../typings/shared";

export interface BreadcrumbProps extends ReactAttr {
    noTrailingSlash?: boolean | undefined;
}

declare const Breadcrumb: ForwardRefReturn<HTMLElement, BreadcrumbProps>;

export default Breadcrumb;
