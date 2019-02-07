// Type definitions for react-click-outside 3.0
// Project: https://github.com/kentor/react-click-outside
// Definitions by: Christian Rackerseder <https://github.com/screendriver>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8
import * as React from "react";

declare function enhanceWithClickOutside<P = {}>(wrappedComponent: React.ComponentClass<P>): React.ComponentClass<P>;

declare namespace enhanceWithClickOutside { }
export = enhanceWithClickOutside;
