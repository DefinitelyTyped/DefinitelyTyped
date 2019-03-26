import * as React from "react";
import { RouteConfig, matchRoutes, MatchedRoute, renderRoutes, RouteConfigComponentProps } from "react-router-config";
import { BrowserRouter } from "react-router-dom";

const Root = ({ route }: RouteConfigComponentProps) => (
    <div>
        <h1>Root</h1>
        {/* child routes won't render without this */}
        {renderRoutes(route && route.routes)}
    </div>
);

const Home = ({ route }: RouteConfigComponentProps) => (
    <div>
        <h2>Home</h2>
    </div>
);

const Child = ({ route }: RouteConfigComponentProps<{ id: string }>) => (
    <div>
        <h2>Child</h2>
        {/* child routes won't render without this */}
        {route && renderRoutes(route.routes, null, {})}
    </div>
);

const GrandChild = () => (
    <div>
        <h3>Grand Child</h3>
    </div>
);

// route config
const routes: RouteConfig[] = [
    {
        component: Root,
        routes: [
            {
                path: "/",
                exact: true,
                component: Home
            },
            {
                path: "/child/:id",
                component: Child,
                routes: [{
                    path: "/child/:id/grand-child",
                    component: GrandChild
                }]
            }
        ]
    }
];

const branch: Array<MatchedRoute<{}>> = matchRoutes<{}>(routes, "/child/23");
// using the routes shown earlier, this returns
// [
//   routes[0],
//   routes[0].routes[1]
// ]

// pass this into ReactDOM.render
<BrowserRouter>{renderRoutes(routes)}</BrowserRouter>;
