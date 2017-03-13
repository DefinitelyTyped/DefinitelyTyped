import { ComponentClass, StatelessComponent } from "react";
import { RouterState } from "./Router";

interface Options {
    withRef?: boolean;
}

type ComponentConstructor<P> = ComponentClass<P> | StatelessComponent<P>;

export default function withRouter<P>(component: ComponentConstructor<P & {router: RouterState}>, options?: Options): ComponentClass<P>;
