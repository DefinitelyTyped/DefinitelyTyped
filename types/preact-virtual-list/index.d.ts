// Type definitions for preact-virtual-list 0.3
// Project: https://github.com/developit/preact-virtual-list
// Definitions by: Reece Berens <https://github.com/reece-berens>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import {Component} from "preact";

interface Props {
    className?: string;
    data: any[];
    overscanCount?: number;
    renderRow: (row: any) => any;
    rowHeight: number;
    sync?: boolean;
    [otherProps: string]: any;
}

declare class VirtualList extends Component<Props> {
    constructor(props: Props);
}

export default VirtualList;
