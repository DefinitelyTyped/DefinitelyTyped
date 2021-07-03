// Type definitions for react-column-resizer 1.1
// Project: https://github.com/nik-m2/react-column-resizer#readme
// Definitions by: ibrahim <https://github.com/ibrahim-13>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Component } from 'react';

export interface ResizerProps {
    className?: string;
    disabled?: boolean;
    minWidth?: number;
}

export default class ColumnResizer extends Component<ResizerProps> {}
