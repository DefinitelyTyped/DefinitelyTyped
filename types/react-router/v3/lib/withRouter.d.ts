import { ComponentClass, StatelessComponent } from "react";
import { InjectedRouter, Params } from "./Router";
import { Location } from "history";
import { PlainRoute } from "./Route";

interface Options {
    withRef?: boolean;
}

export interface WithRouterProps {
    location: Location;
    params: Params;
    router: InjectedRouter;
    routes: Array<PlainRoute>;
}

type ComponentConstructor<P> = ComponentClass<P> | StatelessComponent<P>;

declare function withRouter<P, S>(component: ComponentConstructor<P & WithRouterProps> & S, options?: Options): ComponentClass<P> & S;
declare function withRouter<P>(component: ComponentConstructor<P & WithRouterProps>, options?: Options): ComponentClass<P>;

export default withRouter;
