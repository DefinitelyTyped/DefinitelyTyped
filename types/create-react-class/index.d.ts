import { ClassicComponentClass, ComponentSpec } from "react";

declare namespace createReactClass {}
declare function createReactClass<P, S = {}>(spec: ComponentSpec<P, S>): ClassicComponentClass<P>;

export as namespace createReactClass;
export = createReactClass;
