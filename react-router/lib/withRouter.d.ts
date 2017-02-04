import { ComponentClass, StatelessComponent } from "react";

interface Options {
    withRef?: boolean;
}

type ComponentConstructor<P> = ComponentClass<P> | StatelessComponent<P>;

export default function withRouter<P>(component: ComponentConstructor<P>, options?: Options): ComponentClass<P>;
