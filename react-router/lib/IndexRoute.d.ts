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

type ComponentCallback = (err: any, component: RouteComponent) => void;
type ComponentsCallback = (err: any, components: RouteComponents) => void;

export interface IndexRouteProps {
    component?: RouteComponent;
    components?: RouteComponents;
    getComponent?(nextState: RouterState, callback: ComponentCallback): void;
    getComponents?(nextState: RouterState, callback: ComponentsCallback): void;
    onEnter?: EnterHook;
    onChange?: ChangeHook;
    onLeave?: LeaveHook;
}

type IndexRoute = ComponentClass<IndexRouteProps>;
declare const IndexRoute: IndexRoute;

export default IndexRoute;
