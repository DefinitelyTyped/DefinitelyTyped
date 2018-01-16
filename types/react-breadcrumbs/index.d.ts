// Type definitions for react-breadcrumbs 1.3
// Project: https://github.com/svenanders/react-breadcrumbs
// Definitions by: Kostya Esmukov <https://github.com/KostyaEsmukov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import * as React from "react";
import * as ReactRouter from "react-router";

export = Breadcrumbs;
type Breadcrumbs = React.ComponentClass<Breadcrumbs.Props>;
declare const Breadcrumbs: Breadcrumbs;

declare namespace Breadcrumbs {
    interface Props extends React.ClassAttributes<Breadcrumbs> {
        separator?: string | JSX.Element;
        displayMissing?: boolean;
        prettify?: boolean;
        displayMissingText?: string;
        displayName?: string;
        breadcrumbName?: string;
        wrapperElement?: string;
        wrapperClass?: string;
        itemElement?: string;
        itemClass?: string;
        customClass?: string;
        activeItemClass?: string;
        excludes?: string[];
        hideNoPath?: boolean;
        routes: ReactRouter.Router.RouteConfig;
        setDocumentTitle?: boolean;
        params?: any;  // todo make it compatible with params of the ReactRouter.RouteComponentProps<P, R>
    }
}
