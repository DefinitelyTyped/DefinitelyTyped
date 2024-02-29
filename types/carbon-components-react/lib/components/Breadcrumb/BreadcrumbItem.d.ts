import * as React from "react";
import { ForwardRefReturn, ReactLIAttr } from "../../../typings/shared";
import { LinkProps } from "../Link";

export interface BreadcrumbItemProps extends ReactLIAttr {
    isCurrentPage?: boolean | undefined;
    href?: LinkProps["href"] | undefined;
}

declare const BreadcrumbItem: ForwardRefReturn<HTMLLIElement, BreadcrumbItemProps>;

export default BreadcrumbItem;
