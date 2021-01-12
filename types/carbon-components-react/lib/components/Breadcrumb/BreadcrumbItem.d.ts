import * as React from "react";
import { ReactLIAttr } from "../../../typings/shared";
import { LinkProps } from "../Link";

export interface BreadcrumbItemProps extends ReactLIAttr {
    isCurrentPage?: boolean,
    href?: LinkProps["href"],
}

declare const BreadcrumbItem: React.FC<BreadcrumbItemProps>;

export default BreadcrumbItem;
