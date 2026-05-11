import { ComponentType } from "react";

declare function nextReduxSaga<P = any>(arg: { async: boolean }): (BaseComponent: ComponentType<P>) => ComponentType<P>;
declare function nextReduxSaga<P = any>(arg: ComponentType<P>): ComponentType<P>;

export = nextReduxSaga;
