// Type definitions for react-breadcrumbs 2.1
// Project: https://github.com/svenanders/react-breadcrumbs
// Definitions by: Guo Yunhe <https://github.com/guoyunhe>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";
import { LocationDescriptor } from "history";

declare module "react-breadcrumbs" {
    interface Crumbs {}

    interface BreadcrumbsProps {
        className?: string;
        hidden?: boolean;
        setCrumbs?: (crumbs: Crumbs) => React.ReactNode;
        wrapper?: React.StatelessComponent | React.ComponentClass;
    }

    class Breadcrumbs extends React.Component<BreadcrumbsProps> {}

    interface BreadcrumbProps {
        data: LocationDescriptor & { title?: React.ReactNode };
        hidden?: boolean;
    }

    class Breadcrumb extends React.Component<BreadcrumbProps> {}
}
