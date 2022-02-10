// Type definitions for react-drag-listview 0.1
// Project: https://github.com/raisezhang/react-drag-listview
// Definitions by: hirohe <https://github.com/hirohe>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export interface DragListViewProps {
    // on drag end callback, required
    onDragEnd: (fromIndex: number, toIndex: number) => void;
    // get drag handle cssQuery
    handleSelector?: string;
    // get drag item cssQuery
    nodeSelector?: string;
    // ignore node list
    ignoreSelector?: string;
    // whether use auto scroll for dragging
    enableScroll?: boolean;
    // scroll speed
    scrollSpeed?: number;
    // get dragLine's className, css properties must be use !important
    lineClassName?: string;
}

declare class ReactDragListView extends React.Component<DragListViewProps> {
}

declare class ReactDragColumnView extends ReactDragListView {
}

declare const DragListView: typeof ReactDragListView & {  DragColumn: typeof ReactDragColumnView };
export default DragListView;
