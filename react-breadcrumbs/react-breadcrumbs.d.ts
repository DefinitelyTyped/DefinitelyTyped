// Type definitions for react-breadcrumbs 1.3.16
// Project: https://github.com/svenanders/react-breadcrumbs
// Definitions by: Kostya Esmukov <https://github.com/KostyaEsmukov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference path="../react/react.d.ts"/>
///<reference path="../react-router/react-router.d.ts"/>

declare namespace ReactBreadcrumbs {
    import React = __React;


    interface BreadcrumbsProps extends React.Props<Breadcrumbs> {
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
        routes: ReactRouter.RouteConfig;
        setDocumentTitle?: boolean;
        params?: any;  // todo make it compatible with params of the ReactRouter.RouteComponentProps<P, R>
    }

    interface Breadcrumbs extends React.ComponentClass<BreadcrumbsProps> {}
    const Breadcrumbs: Breadcrumbs;
}

declare module 'react-breadcrumbs' {
    import Breadcrumbs = ReactBreadcrumbs.Breadcrumbs;

    export = Breadcrumbs;
}
