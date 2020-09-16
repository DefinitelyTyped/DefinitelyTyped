import * as React from "react";
import { ReactLIAttr } from "../../../typings/shared";
import { LinkProps } from "../Link";

interface InheritedProps extends ReactLIAttr {
    href?: LinkProps["href"],
}

export interface BreadcrumbItemProps extends InheritedProps {
    isCurrentPage?: boolean,
}

declare const BreadcrumbItem: React.FC<BreadcrumbItemProps>;

export default BreadcrumbItem;
