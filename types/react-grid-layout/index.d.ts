// Type definitions for react-grid-layout 0.14
// Project: https://github.com/STRML/react-grid-layout
// Definitions by: Andrew Birkholz <https://github.com/abirkholz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from "react";

export as namespace ReactGridLayout;
export = ReactGridLayout;

declare class ReactGridLayout extends React.Component<ReactGridLayout.DefaultProps, any> {
    constructor(props: any, context: any);

    componentDidMount(): void;
    componentWillReceiveProps(nextProps: any): void;
    containerHeight(): any;
    onDrag(i: number, x: number, y: number, _ref2: any): void;
    onDragStart(i: number, x: number, y: number, _ref: any): void;
    onDragStop(i: number, x: number, y: number, _ref3: any): void;
    onLayoutMaybeChanged(newLayout: any[], oldLayout: any[]): void;
    onResize(i: number, w: number, h: number, _ref5: any): void;
    onResizeStart(i: number, w: number, h: number, _ref4: any): void;
    onResizeStop(i: number, w: number, h: number, _ref6: any): void;
    placeholder(): any;
    processGridItem(child: any): any;
    render(): JSX.Element | null;

    static WidthProvider(ComposedComponent: any, ...args: any[]): any;
    static displayName: string;
}

declare namespace ReactGridLayout {
    interface CoreProps {
        autoSize?: boolean;
        className?: string;
        isDraggable?: boolean;
        isResizable?: boolean;
        layout?: any[];
        margin?: number[];
        maxRows?: number;
        rowHeight?: number;
        useCSSTransforms?: boolean;
        verticalCompact?: boolean;
        width?: number;

        onDrag?(layout: any, oldItem: any, newItem: any, placeholder: any, e: MouseEvent, element: HTMLElement): any;
        onDragStart?(layout: any, oldItem: any, newItem: any, placeholder: any, e: MouseEvent, element: HTMLElement): any;
        onDragStop?(layout: any, oldItem: any, newItem: any, placeholder: any, e: MouseEvent, element: HTMLElement): any;
        onResize?(layout: any, oldItem: any, newItem: any, placeholder: any, e: MouseEvent, element: HTMLElement): any;
        onResizeStart?(layout: any, oldItem: any, newItem: any, placeholder: any, e: MouseEvent, element: HTMLElement): any;
        onResizeStop?(layout: any, oldItem: any, newItem: any, placeholder: any, e: MouseEvent, element: HTMLElement): any;
    }

    interface DefaultProps extends CoreProps {
        cols?: number;
        onLayoutChange?(layout: any): any;
    }

    interface ResponsiveProps extends CoreProps {
        breakpoints: {lg: number, md: number, sm: number, xs: number, xxs: number};
        cols: {lg: number, md: number, sm: number, xs: number, xxs: number};
        layouts?: {};

        onBreakpointChange?(newBreakpoint: string, newCols: number): any;
        onLayoutChange?(currentLayout: any, allLayouts: any): any;
        onWidthChange?(containerWidth: number, margin: [number, number], cols: number, containerPadding: [number, number]): any;
    }

    class Responsive extends React.Component<ResponsiveProps, any> {
        constructor(...args: any[]);

        componentWillReceiveProps(nextProps: any): void;
        generateInitialState(): any;
        onWidthChange(nextProps: any): void;
        render(): JSX.Element | null;
    }

    namespace Responsive {
        namespace utils {
            function findOrGenerateResponsiveLayout(layouts: {}, breakpoints: {}, breakpoint: number, lastBreakpoint: number, cols: {}, verticalCompact: boolean): any;
            function getBreakpointFromWidth(breakpoints: {}, width: number): any;
            function getColsFromBreakpoint(breakpoint: number, cols: {}): any;
            function sortBreakpoints(breakpoints: {}): any;
        }
    }

    namespace utils {
        function autoBindHandlers(el: any, fns: any): any;
        function bottom(layout: any): any;
        function childrenEqual(a: any, b: any): any;
        function cloneLayout(layout: any): any;
        function cloneLayoutItem(layoutItem: any): any;
        function collides(l1: any, l2: any): any;
        function compact(layout: any, verticalCompact: any): any;
        function compactItem(compareWith: any, l: any, verticalCompact: any): any;
        function correctBounds(layout: any, bounds: any): any;
        function getAllCollisions(layout: any, layoutItem: any): any;
        function getFirstCollision(layout: any, layoutItem: any): any;
        function getLayoutItem(layout: any, id: any): any;
        function getStatics(layout: any): any;
        function moveElement(layout: any, l: any, x: any, y: any, isUserAction: any): any;
        function moveElementAwayFromCollision(layout: any, collidesWith: any, itemToMove: any, isUserAction: any): any;
        function perc(num: any): any;
        function setTopLeft(_ref2: any): any;
        function setTransform(_ref: any): any;
        function sortLayoutItemsByRowCol(layout: any): any;
        function synchronizeLayoutWithChildren(initialLayout: any, children: any, cols: any, verticalCompact: any): any;
        function validateLayout(layout: any, contextName: any): void;
    }
}
