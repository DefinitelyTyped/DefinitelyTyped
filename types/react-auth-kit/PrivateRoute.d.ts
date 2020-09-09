import * as React from 'react';
import { RouteProps } from 'react-router-dom';
interface PrivateRouteProps extends RouteProps {
    loginPath: string;
}
/**
 * Private Route for Components
 *
 * @remarks
 * This Component is based on {@link https://reactrouter.com/web/api/Route | reactrouter.Route}.
 * So you need to install react-route-dom before use it
 *
 * @param props
 */
declare const PrivateRoute: React.FunctionComponent<PrivateRouteProps>;
export default PrivateRoute;
