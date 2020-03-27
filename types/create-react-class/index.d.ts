// Type definitions for create-react-class 15.6
// Project: https://facebook.github.io/react/
// Definitions by: John Gozde <https://github.com/jgoz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { ComponentSpec, ClassicComponentClass } from "react";

declare namespace createReactClass {}
declare function createReactClass<P, S = {}>(spec: ComponentSpec<P, S>): ClassicComponentClass<P>;

export as namespace createReactClass;
export = createReactClass;
