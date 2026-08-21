import { LocationDescriptor } from "history";
import * as React from "react";

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
