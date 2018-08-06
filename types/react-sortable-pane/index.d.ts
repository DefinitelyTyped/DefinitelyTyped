// Type definitions for react-sortable-pane 0.6
// Project: https://github.com/bokuweb/react-sortable-pane
// Definitions by: rhysd <https://github.com/rhysd>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export type PaneId = string | number;

export interface PaneSize {
    width: number;
    height: number;
}

export interface PaneProperty {
    id: PaneId;
    width: number | string;
    height: number | string;
    order: number;
}

export interface PaneResizeData {
    pane: PaneProperty;
    direction: 'x' | 'y' | 'xy';
    delta: PaneSize;
}

export interface SortablePaneProps {
    className?: string;
    style?: React.HTMLAttributes<HTMLElement>;
    direction?: 'horizontal' | 'vertical';
    margin?: number;
    zIndex?: number;
    grid?: [number, number];
    isSortable?: boolean;
    disableEffect?: boolean;
    dragHandleClassName?: string;
    onOrderChange?: (oldPanes: PaneProperty[], newPanes: PaneProperty[]) => void;
    onResizeStart?: (
        e: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>,
        id: PaneId,
        panes: PaneProperty[],
    ) => void;
    onResize?: (
        e: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>,
        id: PaneId,
        panes: PaneProperty[],
        data: PaneResizeData,
    ) => void;
    onResizeStop?: (
        e: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>,
        id: PaneId,
        panes: PaneProperty[],
        data: PaneResizeData,
    ) => void;
    onDragStart?: (
        e: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>,
        id: PaneId,
        panes: PaneProperty[],
    ) => void;
    onDragStop?: (
        e: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>,
        id: PaneId,
        panes: PaneProperty[],
    ) => void;
}

export class SortablePane extends React.Component<SortablePaneProps> {
    render(): JSX.Element;
}

export interface PaneProps {
    id: PaneId;
    width: string | number;
    height: string | number;
    minWidth?: string | number;
    minHeight?: string | number;
    maxWidth?: string | number;
    maxHeight?: string | number;
    className?: string;
    style?: React.HTMLAttributes<HTMLElement>;
    isResizable?: { x?: boolean; y?: boolean; xy?: boolean };
}

export class Pane extends React.Component<PaneProps> {
    render(): JSX.Element;
}
