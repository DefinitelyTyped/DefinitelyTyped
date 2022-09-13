// Type definitions for react-breadcrumbs 2.1
// Project: https://github.com/svenanders/react-breadcrumbs
// Definitions by: Guo Yunhe <https://github.com/guoyunhe>
//                 Kohei Matsubara <https://github.com/matsuby>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";
import { LocationDescriptor } from "history";

declare module "react-breadcrumbs" {
    interface Crumbs {}

    interface BreadcrumbsProps {
        className?: string | undefined;
        hidden?: boolean | undefined;
        separator?: React.ReactNode | undefined;
        setCrumbs?: ((crumbs: Crumbs) => React.ReactNode) | undefined;
        wrapper?: React.FunctionComponent | React.ComponentClass | undefined;
    }

    class Breadcrumbs extends React.Component<React.PropsWithChildren<BreadcrumbsProps>> {}

    interface BreadcrumbProps {
        data: LocationDescriptor & { title?: React.ReactNode | undefined };
        hidden?: boolean | undefined;
    }

    class Breadcrumb extends React.Component<React.PropsWithChildren<BreadcrumbProps>> {}
}
