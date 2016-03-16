﻿// Type definitions for Gridstack v0.2.5
// Project: http://troolee.github.io/gridstack.js/
// Definitions by: David Deutsch <https://github.com/DavidKDeutsch/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jqueryui/jqueryui.d.ts" />

interface JQuery {
    gridstack(options: GridStack.IGridstackOptions): JQuery;
    data(key: 'gridstack'): GridStack.GridStack;
    data(key: '_gridstack_node'): GridStack.GridStackNode;
}

declare namespace GridStack {
    type GridStackElement = string | Element | JQuery | {};

    interface HasPositionInfo {
        x: number | string;
        y: number | string;
        width: number | string;
        height: number | string;
    }

    interface GridStackNode extends HasPositionInfo {
        autoPosition: boolean;
        locked: boolean;
        noMove: boolean;
        noResize: boolean;
        maxHeight: number | string;
        maxWidth: number | string;
        minWidth: number | string;
        minHeight: number | string;
        id: string;
        el: JQuery;
    }

    interface Utils {
        isIntercepted(a: HasPositionInfo, b: HasPositionInfo): boolean;
        sort(nodes: GridStackNode[], direction: number, width: number): GridStackNode[];
        createStylesheet(id: string): CSSStyleSheet;
        removeStylesheet(id: string): void;
        insertCSSRule(sheet: CSSStyleSheet, selector: string, rules: string, index?: number): void;
        toBool(arg: any): boolean;
        parseHeight(str: string): { height: number, unit: string };

    }

    interface GridStackStatic {
        new (el: GridStackElement, opts: IGridstackOptions): GridStack;
        Utils: Utils;
        GridStackEngine: GridStackEngineStatic;
    }

    interface GridStack {
        /**
        * Creates new widget, adds it to the grid and DOM, and returns it.
        *
        *   Widget will be always placed even if result height is more than actual grid height. You need to use willItFit method before calling addWidget for additional check.
        * 
        * @param {GridStackElement} el widget to add
        * @param {number} x widget position x
        * @param {number} y widget position y
        * @param {number} width  widget dimension width
        * @param {number} height widget dimension height
        * @param {boolean} autoPosition if true then x, y parameters will be ignored and widget will be places on the first available position
        */
        addWidget(el: GridStackElement, x?: number, y?: number, width?: number, height?: number, autoPosition?: boolean, minWidth?: number,
            maxWidth?: number, minHeight?: number, maxHeight?: number, id?: string): JQuery
        /**
        * Creates new widget, adds it to the grid, and returns it.
        *
        * @param {GridStackElement} el widget to create
        */
        makeWidget(el: GridStackElement): JQuery
        /**
        * Initializes batch updates. You will see no changes until commit method is called.
        */
        batchUpdate(): void
        /**
        * Gets current cell height.
        */
        cellHeight(): number
        /**
        * Update current cell height. This method rebuilds an internal CSS style sheet. Note: You can expect performance issues if call this method too often.
        * @param {number|string} val the cell height
        */
        cellHeight(val: number | string, noUpdate?: boolean): void
        /**
        * Gets current cell width.
        */
        cellWidth(): number
        /**
        * Finishes batch updates. Updates DOM nodes. You must call it after batchUpdate.
        */
        commit(): void
        /**
        * Destroys a grid instance.
        */
        destroy(detachGrid?: boolean): void
        /*
        * Disables widgets moving/resizing.
        */
        disable(): void
        /*
        * Enables widgets moving/resizing.
        */
        enable(): void

        enableMove(enable: boolean, includeNewWidgets: boolean): void;

        enableResize(enable: boolean, includeNewWidgets: boolean): void;

        /*
        * Get the position of the cell under a pixel on screen.
        * @param  {MousePosition}  position the position of the pixel to resolve in absolute coordinates, as an object with top and leftproperties
        */
        getCellFromPixel(position: MousePosition, useOffset?: boolean): CellPosition;
        /*
        * Checks if specified area is empty.
        * @param {number} x the position x.
        * @param {number} y the position y. 
        * @param {number} width the width of to check
        * @param {number} height the height of to check
        */
        isAreaEmpty(x: number, y: number, width: number, height: number): boolean;
        /*
        * Locks/unlocks widget.
        * @param {GridStackElement} el widget to modify.
        * @param {boolean} val if true widget will be locked.
        */
        locked(el: GridStackElement, val: boolean): this;

        maxHeight(el: GridStackElement, val: number): this;

        maxWidth(el: GridStackElement, val: number): this;

        /*
        * Set the minWidth for a widget.
        * @param {GridStackElement} el widget to modify.
        * @param {number} val A numeric value of the number of columns
        */
        minWidth(el: GridStackElement, val: number): this;
        /*
        * Set the minHeight for a widget.
        * @param {GridStackElement} el widget to modify.
        * @param {number} val A numeric value of the number of rows
        */
        minHeight(el: GridStackElement, val: number): this;
        /*
        * Enables/Disables moving.
        * @param {GridStackElement} el widget to modify.
        * @param {number} val if true widget will be draggable.
        */
        movable(el: GridStackElement, val: boolean): this;
        /**
        * Changes widget position
        * @param {GridStackElement} el  widget to modify
        * @param {number} x new position x. If value is null or undefined it will be ignored.
        * @param {number} y new position y. If value is null or undefined it will be ignored.
        * 
        */
        move(el: GridStackElement, x: number, y: number): void;
        /**
        * Removes widget from the grid.
        * @param {GridStackElement} el  widget to modify
        * @param {boolean} detachNode if false DOM node won't be removed from the tree (Optional. Default true).
        */
        removeWidget(el: GridStackElement, detachNode?: boolean): void;
        /**
        * Removes all widgets from the grid.
        * @param {boolean} detachNode if false DOM node won't be removed from the tree (Optional. Default true).
        */
        removeAll(detachNode?: boolean): void;
        /**
        * Changes widget size
        * @param {GridStackElement} el  widget to modify
        * @param {number} width new dimensions width. If value is null or undefined it will be ignored.
        * @param {number} height  new dimensions height. If value is null or undefined it will be ignored.
        */
        resize(el: GridStackElement, width: number, height: number): void;
        /**
        * Enables/Disables resizing.
        * @param {GridStackElement} el  widget to modify
        * @param {boolean} val  if true widget will be resizable.
        */
        resizable(el: GridStackElement, val: boolean): this;

        setAnimation(enable: boolean): void;

        setGridWidth(gridWidth: number, doNotPropagate?: boolean): void;

        /**
        * Toggle the grid static state. Also toggle the grid-stack-static class.
        * @param {boolean} staticValue if true the grid become static.
        */
        setStatic(staticValue: boolean): void
        /**
        * Updates widget position/size.
        * @param {GridStackElement} el  widget to modify
        * @param {number} x new position x. If value is null or undefined it will be ignored.
        * @param {number} y new position y. If value is null or undefined it will be ignored.
        * @param {number} width new dimensions width. If value is null or undefined it will be ignored.
        * @param {number} height  new dimensions height. If value is null or undefined it will be ignored.
        */
        update(el: GridStackElement, x: number, y: number, width: number, height: number): void
        /**
        * Returns true if the height of the grid will be less the vertical constraint. Always returns true if grid doesn't have height constraint.
        * @param {number} x new position x. If value is null or undefined it will be ignored.
        * @param {number} y new position y. If value is null or undefined it will be ignored.
        * @param {number} width new dimensions width. If value is null or undefined it will be ignored.
        * @param {number} height  new dimensions height. If value is null or undefined it will be ignored.
        * @param {boolean} autoPosition  if true then x, y parameters will be ignored and widget will be places on the first available position
        */
        willItFit(x: number, y: number, width: number, height: number, autoPosition: boolean): boolean

        verticalMargin(val: number | string, noUpdate?: boolean): void;
        verticalMargin(): number;
    }
    /**
    * Defines the coordiantes of a object
    */
    interface MousePosition {
        top: number,
        left: number,
    }
    /**
    *   Defines the position of a cell inside the grid 
    */
    interface CellPosition {
        x: number,
        y: number
    }

    /**
    * Gridstack Options
    * Defines the options for a Gridstack 
    */
    interface IGridstackOptions {
        /**
            * if true the resizing handles are shown even if the user is not hovering over the widget (default: false)
            */
        alwaysShowResizeHandle?: boolean;
        /**
            * turns animation on (default: true)
            */
        animate?: boolean;
        /**
            * if false gridstack will not initialize existing items (default: true)
            */
        auto?: boolean;
        /**
            *  one cell height (default: 60)
            */
        cellHeight?: number | 'auto';

        cellHeightUnit?: string;

        disableDrag?: boolean;

        disableResize?: boolean;

        /**
        * allows to override jQuery UI draggable options. (default: { handle: '.grid-stack-item-content', scroll: true, appendTo: 'body' })
        */
        draggable?: JQueryUI.DraggableOptions;
        /**
        * draggable handle selector (default: '.grid-stack-item-content')
        */
        handle?: string;

        handleClass?: string;

        /**
        * maximum rows amount.Default is 0 which means no maximum rows
        */
        height?: number;
        /** 
        * enable floating widgets (default: false) See example
        */
        float?: boolean;
        /**
        * widget class (default: 'grid-stack-item')
        */
        itemClass?: string;
        /** 
        * minimal width.If window width is less, grid will be shown in one - column mode (default: 768)
        */
        minWidth?: number;
        /**
        * class for placeholder (default: 'grid-stack-placeholder')
        */
        placeholderClass?: string;

        placeholderText?: string;


        /**
        * allows to override jQuery UI resizable options. (default: { autoHide: true, handles: 'se' })
        */
        resizable?: JQueryUI.ResizableOptions;

        removable?: boolean;

        removeTimeout?: number;

        rtl?: boolean | 'auto';

        /**
        * makes grid static (default false).If true widgets are not movable/ resizable.You don't even need jQueryUI draggable/resizable. A CSS class grid-stack-static is also added to the container.
        */
        staticGrid?: boolean;
        /**
        * vertical gap size (default: 20)
        */
        verticalMargin?: number;

        verticalMarginUnit?: string;

        /**
        * amount of columns (default: 12)
        */
        width?: number;
    }

    interface GridStackEngine {
        batchUpdate(): void;
        commit(): void;
        isAreaEmpty(x: number, y: number, width: number, height: number): boolean;
        cleanNodes(): void;
        getDirtyNodes(): GridStackNode[];
        addNode(node: GridStackNode, triggerAddEvent: boolean): GridStackNode;
        removeNode(node: GridStackNode, detatchNode: boolean): void;
        canMoveNode(node: GridStackNode, x: number, y: number, width: number, height: number): boolean;
        canBePlacedWithRespectToHeight(node: GridStackNode): boolean;
        moveNode(node: GridStackNode, x: number, y: number, width: number, height: number, noPack: boolean): GridStackNode;
        getGridHeight(): number;
        beginUpdate(node: GridStackNode): void;
        endUpdate(): void;
    }

    interface GridStackEngineStatic {
        new (width: number, onchange?: (nodes: GridStackNode[]) => any, floatMode?: boolean, height?: number, items?: GridStackNode[]): GridStackEngine;
    }
}

declare var GridStackUI: GridStack.GridStackStatic;

