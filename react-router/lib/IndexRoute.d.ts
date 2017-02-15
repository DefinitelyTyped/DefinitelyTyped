import { ComponentClass, ClassAttributes } from "react";
import { LocationState } from "history";
import {
    EnterHook,
    ChangeHook,
    LeaveHook,
    RouteComponent,
    RouteComponents,
    RouterState
} from "react-router";

type ComponentCallback = (err: any, component: RouteComponent) => undefined;
type ComponentsCallback = (err: any, components: RouteComponents) => undefined;

export interface IndexRouteProps {
    component?: RouteComponent;
    components?: RouteComponents;
    getComponent?(nextState: RouterState, callback: ComponentCallback): undefined;
    getComponents?(nextState: RouterState, callback: ComponentsCallback): undefined;
    onEnter?: EnterHook;
    onChange?: ChangeHook;
    onLeave?: LeaveHook;
}

type IndexRoute = ComponentClass<IndexRouteProps>;
declare const IndexRoute: IndexRoute;

export default IndexRoute;
