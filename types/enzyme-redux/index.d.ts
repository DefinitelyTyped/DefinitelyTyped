import { ReactWrapper, ShallowWrapper } from "enzyme";
import { ReactElement } from "react";

export function shallowWithStore<P>(
    Component: ReactElement<P>,
    store: any,
): ShallowWrapper<P>;
export function mountWithStore<P>(
    Component: ReactElement<P>,
    store: any,
): ReactWrapper<P>;
export function shallowWithState<P>(
    Component: ReactElement<P>,
    state: any,
): ShallowWrapper<P>;
export function mountWithState<P>(
    Component: ReactElement<P>,
    state: any,
): ReactWrapper<P>;
