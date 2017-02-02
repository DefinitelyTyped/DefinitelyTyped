// Type definitions for react-icon-base 2.0
// Project: https://github.com/gorangajic/react-icon-base#readme
// Definitions by: Alexandre Paré <https://github.com/apare>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import * as React from 'react';

export interface IconBaseProps {
    color?: string;
    size?: string | number;
    style?: React.CSSProperties;
}

export default class IconBase extends React.Component<IconBaseProps, any> {

}