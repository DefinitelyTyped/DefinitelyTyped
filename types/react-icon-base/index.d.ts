// Type definitions for react-icon-base 2.1
// Project: https://github.com/gorangajic/react-icon-base#readme
// Definitions by: Alexandre Paré <https://github.com/apare>, Karol Janyst <https://github.com/LKay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";
import * as ReactDOM from "react-dom";

export interface IconBaseProps extends ReactDOM.SVGProps<ReactDOM.ReactSVGElement> {
    size?: string | number;
    style?: any;
    color?: string;
}

export default class IconBaseClass extends React.Component<IconBaseProps> {}
