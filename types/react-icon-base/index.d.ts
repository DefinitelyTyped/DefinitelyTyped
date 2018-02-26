// Type definitions for react-icon-base 2.1
// Project: https://github.com/gorangajic/react-icon-base#readme
// Definitions by: Alexandre Paré <https://github.com/apare>, Karol Janyst <https://github.com/LKay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

import * as React from "react";

export interface IconBaseProps extends React.SVGProps<React.ReactSVGElement> {
    size?: string | number;
}

export default class IconBaseClass extends React.Component<IconBaseProps> {}
