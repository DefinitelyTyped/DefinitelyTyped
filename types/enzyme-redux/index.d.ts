// Type definitions for enzyme-redux 0.2
// Project: https://github.com/Knegusen/enzyme-redux#readme
// Definitions by: Dennis Axelsson <https://github.com/knegusen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { ReactWrapper, ShallowWrapper } from 'enzyme';
import { ReactElement } from 'react';

export function shallowWithStore<P>(
    Component: ReactElement<P>,
    store: any
): ShallowWrapper<P>;
export function mountWithStore<P>(
    Component: ReactElement<P>,
    store: any
): ReactWrapper<P>;
export function shallowWithState<P>(
    Component: ReactElement<P>,
    state: any
): ShallowWrapper<P>;
export function mountWithState<P>(
    Component: ReactElement<P>,
    state: any
): ReactWrapper<P>;
