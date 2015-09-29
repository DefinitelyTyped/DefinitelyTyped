// Type definitions for React Router 0.13.3
// Project: https://github.com/rackt/react-router
// Definitions by: Yuichi Murata <https://github.com/mrk21>, Václav Ostrožlík <https://github.com/vasek17>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference path='../react/react.d.ts' />

declare namespace ReactRouter {


    interface RouterProps {
        history?: any;
    }
    interface Router extends __React.ReactElement<RouterProps> { }


    interface RouteProps {
        path ?: string;
        component ?: __React.ComponentClass<any>;
        components ?: __React.ComponentClass<any>[];
    }
    interface Route extends __React.ReactElement<RouteProps> {}


    interface IndexRouteProps {
        component?: __React.ComponentClass<any>;
        components?: __React.ComponentClass<any>[];
    }
    interface IndexRoute extends __React.ReactElement<IndexRouteProps> {}


    interface RedirectRouteProps {
        from?: string;
        to?: string;
        query?: {};
    }
    interface RedirectRoute extends __React.ReactElement<RedirectRouteProps> {}


    interface LinkProps extends __React.HTMLAttributes {
        to: string;
        query?: {};
        state?: {};
        activeClassName?: string;
        activeStyle?: {};
        onClick?: any;
        others?: {};
    }
    interface Link extends __React.ReactElement<LinkProps> {
        handleClick(event: any): void;
        getHref(): string;
        getClassName(): string;
        getActiveState(): boolean;
    }

}

declare module "react-router" {

    var Router: __React.ComponentClass<ReactRouter.RouterProps>;

    var Route: __React.ComponentClass<ReactRouter.RouteProps>;

    var IndexRoute: __React.ComponentClass<ReactRouter.IndexRouteProps>;

    var RedirectRoute: __React.ComponentClass<ReactRouter.RedirectRouteProps>;

    var Link: __React.ComponentClass<ReactRouter.LinkProps>;

    export { Router, Route, IndexRoute, RedirectRoute, Link };

    export default Router;

}
