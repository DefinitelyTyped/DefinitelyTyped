// Type definitions for react-router 3.0
// Project: https://github.com/rackt/react-router
// Definitions by: Sergey Buturlakin <https://github.com/sergey-buturlakin>
//                 Yuichi Murata <https://github.com/mrk21>
//                 Václav Ostrožlík <https://github.com/vasek17>
//                 Nathan Brown <https://github.com/ngbrown>
//                 Alex Wendland <https://github.com/awendland>
//                 Kostya Esmukov <https://github.com/KostyaEsmukov>
//                 John Reilly <https://github.com/johnnyreilly>
//                 Karol Janyst <https://github.com/LKay>
//                 Dovydas Navickas <https://github.com/DovydasNavickas>
//                 Ross Allen <https://github.com/ssorallen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export {
    ChangeHook,
    EnterHook,
    InjectedRouter,
    LeaveHook,
    ParseQueryString,
    RouteComponent,
    RouteComponents,
    RouteComponentProps,
    RouteConfig,
    RoutePattern,
    RouterProps,
    RouterState,
    RedirectFunction,
    StringifyQuery
} from "react-router/lib/Router";
export { LinkProps } from "react-router/lib/Link";
export { IndexLinkProps } from "react-router/lib/IndexLink";
export { RouteProps, PlainRoute } from "react-router/lib/Route";
export { IndexRouteProps } from "react-router/lib/IndexRoute";
export { RedirectProps } from "react-router/lib/Redirect";
export { IndexRedirectProps } from "react-router/lib/IndexRedirect";
export { WithRouterProps } from "react-router/lib/withRouter";

/* components */
export { default as Router } from "react-router/lib/Router";
export { default as Link } from "react-router/lib/Link";
export { default as IndexLink } from "react-router/lib/IndexLink";
export { default as withRouter } from "react-router/lib/withRouter";

/* components (configuration) */
export { default as IndexRedirect } from "react-router/lib/IndexRedirect";
export { default as IndexRoute } from "react-router/lib/IndexRoute";
export { default as Redirect } from "react-router/lib/Redirect";
export { default as Route } from "react-router/lib/Route";

/* utils */
export { createRoutes } from "react-router/lib/RouteUtils";
export { default as RouterContext } from "react-router/lib/RouterContext";
export { routerShape, locationShape } from "react-router/lib/PropTypes";
export { default as match } from "react-router/lib/match";
export { default as useRouterHistory } from "react-router/lib/useRouterHistory";
export { formatPattern } from "react-router/lib/PatternUtils";
export { default as applyRouterMiddleware } from "react-router/lib/applyRouterMiddleware";

/* histories */
export { default as browserHistory } from "react-router/lib/browserHistory";
export { default as hashHistory } from "react-router/lib/hashHistory";
export { default as createMemoryHistory } from "react-router/lib/createMemoryHistory";
