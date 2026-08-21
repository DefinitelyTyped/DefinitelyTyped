import * as React from "react";

declare function enhanceWithClickOutside<C extends React.ComponentClass<any>>(wrappedComponent: C): C;

declare namespace enhanceWithClickOutside {}
export = enhanceWithClickOutside;
