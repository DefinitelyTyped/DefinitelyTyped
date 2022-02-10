// Type definitions for react-drag-listview 0.1
// Project: https://github.com/raisezhang/react-drag-listview
// Definitions by: hirohe <https://github.com/hirohe>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export interface DragListViewProps {
    onDragEnd: (fromIndex: number, toIndex: number) => void;
    handleSelector?: string;
    nodeSelector?: string;
    ignoreSelector?: string;
    enableScroll?: boolean;
    scrollSpeed?: number;
    lineClassName?: string;
}

declare class ReactDragListView extends React.Component<DragListViewProps> {
}

declare class ReactDragColumnView extends ReactDragListView {
}

declare const DragListView: typeof ReactDragListView & {  DragColumn: typeof ReactDragColumnView };
export default DragListView;
