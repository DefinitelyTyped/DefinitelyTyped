import * as React from "react";
import { ReactAttr } from "../../../typings/shared";

export interface BreadcrumbProps extends ReactAttr {
    noTrailingSlash?: boolean,
}

declare const Breadcrumb: React.FC<BreadcrumbProps>;

export default Breadcrumb;
