// Type definitions for react-click-outside 3.0
// Project: https://github.com/kentor/react-click-outside
// Definitions by: Christian Rackerseder <https://github.com/screendriver>
//                 Roman Nuritdinov <https://github.com/Ky6uk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8
import * as React from "react";

declare function enhanceWithClickOutside<C extends React.ComponentClass<any>>(wrappedComponent: C): C;

declare namespace enhanceWithClickOutside { }
export = enhanceWithClickOutside;
