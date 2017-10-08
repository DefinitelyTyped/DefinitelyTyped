// Type definitions for create-react-class 15.6
// Project: https://facebook.github.io/react/
// Definitions by: Asana <https://asana.com>, AssureSign <http://www.assuresign.com>, Microsoft <https://microsoft.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { ComponentSpec, ClassicComponentClass } from "react";

declare namespace createReactClass {}
declare function createReactClass<P, S>(spec: ComponentSpec<P, S>): ClassicComponentClass<P>;

export as namespace createReactClass;
export = createReactClass;
