// Type definitions for next-redux-saga 3.0
// Project: https://github.com/bmealhouse/next-redux-saga
// Definitions by: Leo Cavalcante <https://github.com/leocavalcante>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import { ComponentType } from "react";

declare function nextReduxSaga<P = any>(arg: { async: boolean }): ((BaseComponent: ComponentType<P>) => ComponentType<P>);
declare function nextReduxSaga<P = any>(arg: ComponentType<P>): ComponentType<P>;

export = nextReduxSaga;
