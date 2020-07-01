import * as React from "react";
import { ReactAttr } from "../../../typings/shared";

interface InheritedProps extends ReactAttr { }

export interface BreadcrumbProps extends InheritedProps {
    noTrailingSlash?: boolean,
}

declare const Breadcrumb: React.FC<BreadcrumbProps>;

export default Breadcrumb;
