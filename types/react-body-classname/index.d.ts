// Type definitions for react-body-classname 1.1
// Project: https://github.com/iest/react-body-classname
// Definitions by: Mohamed Hegazy <https://github.com/mhegazy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

export = BodyClassName;

declare class BodyClassName extends React.Component<{ children?: React.ReactElement, className: string }> {
    static canUseDOM: boolean;
    static displayName: string;
    static peek(): any;
    static rewind(): any;
}
