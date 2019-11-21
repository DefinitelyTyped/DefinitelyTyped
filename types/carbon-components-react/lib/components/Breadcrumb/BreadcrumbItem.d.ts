import * as React from "react";
import { ReactDivAttr } from "../../../typings/shared";
import { LinkProps } from "../Link";

interface InheritedProps extends ReactDivAttr {
    href?: LinkProps["href"],
}

export interface BreadcrumbItemProps extends InheritedProps {
    isCurrentPage?: boolean,
}

declare const BreadcrumbItem: React.FC<BreadcrumbItemProps>;

export default BreadcrumbItem;
