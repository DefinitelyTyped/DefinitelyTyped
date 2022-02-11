// Type definitions for react-drag-listview 0.1
// Project: https://github.com/raisezhang/react-drag-listview
// Definitions by: hirohe <https://github.com/hirohe>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';

export interface DragListViewProps {
    // on drag end callback, required
    onDragEnd: (fromIndex: number, toIndex: number) => void;
    // get drag handle cssQuery
    handleSelector?: string | undefined;
    // get drag item cssQuery
    nodeSelector?: string | undefined;
    // ignore node list
    ignoreSelector?: string | undefined;
    // whether use auto scroll for dragging
    enableScroll?: boolean | undefined;
    // scroll speed
    scrollSpeed?: number | undefined;
    // get dragLine's className, css properties must be use !important
    lineClassName?: string | undefined;
}

declare class ReactDragListView extends React.Component<DragListViewProps> {
}

declare class ReactDragColumnView extends ReactDragListView {
}

declare const DragListView: typeof ReactDragListView & {  DragColumn: typeof ReactDragColumnView };
export default DragListView;
