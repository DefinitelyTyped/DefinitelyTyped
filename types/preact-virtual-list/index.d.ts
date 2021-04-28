// Type definitions for preact-virtual-list 0.3
// Project: https://github.com/developit/preact-virtual-list
// Definitions by: Reece Berens <https://github.com/reece-berens>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import {Comopnent} from "preact";

interface Props {
    className?: string;
    data: any;
    overscanCount?: number;
    renderRow: (row: any) => Component<any>;
    rowHeight: number;
    sync?: boolean;
    [otherProps: string]: any;
}

/*~ Write your module's methods and properties in this class */
declare class VirtualList {
    constructor(someParam?: string);
}

export default VirtualList;