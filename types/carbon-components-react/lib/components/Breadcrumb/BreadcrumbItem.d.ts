import * as React from "react";
import { ReactLIAttr, ForwardRefReturn } from "../../../typings/shared";
import { LinkProps } from "../Link";

export interface BreadcrumbItemProps extends ReactLIAttr {
    isCurrentPage?: boolean,
    href?: LinkProps["href"],
}

declare const BreadcrumbItem: ForwardRefReturn<HTMLLIElement, BreadcrumbItemProps>;

export default BreadcrumbItem;
