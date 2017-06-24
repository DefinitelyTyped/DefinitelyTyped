// Type definitions for react-icon-base 2.0
// Project: https://github.com/gorangajic/react-icon-base#readme
// Definitions by: Alexandre Paré <https://github.com/apare>, Karol Janyst <https://github.com/LKay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from "react";

export = IconBaseClass;

declare namespace IconBaseClass {
    interface IconBaseProps {
        color?: string;
        size?: string | number;
        style?: React.CSSProperties;
        viewBox?: string;
    }
}

declare class IconBaseClass extends React.Component<IconBaseClass.IconBaseProps> {}
