import { ComponentClass, StatelessComponent } from "react";

interface Options {
    withRef?: boolean;
}

type ComponentConstructor<P> = ComponentClass<P> | StatelessComponent<P>;

declare function withRouter<P, S>(component: ComponentConstructor<P> & S, options?: Options): ComponentClass<P> & S;
declare function withRouter<P>(component: ComponentConstructor<P>, options?: Options): ComponentClass<P>;

export default withRouter;
