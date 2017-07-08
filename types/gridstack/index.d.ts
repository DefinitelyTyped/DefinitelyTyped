// Type definitions for Gridstack
// Project: http://troolee.github.io/gridstack.js/
// Definitions by: Pascal Senn <https://github.com/PascalSenn/>, Ricky Blankenaufulland <https://github.com/ZoolWay/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

interface JQuery {
    gridstack (options: IGridstackOptions): JQuery;
    data(key: "gridstack"): GridStack;
}

interface GridStack {
    /**
     * Creates new widget and returns it.
     *
     *   Widget will be always placed even if result height is more than actual grid height. You need to use willItFit method before calling addWidget for additional check.
     *
     * @param {string | HTMLElement | JQuery} el widget to add
     * @param {number} x widget position x
     * @param {number} y widget position y
     * @param {number} width  widget dimension width
     * @param {number} height widget dimension height
     * @param {boolean} autoPosition if true then x, y parameters will be ignored and widget will be places on the first available position
     */
    addWidget(el: string | HTMLElement | JQuery, x?: number, y?: number, width?: number, height?: number, autoPosition?: boolean, minWidth?: number, maxWidth?: number, minHeight?: number, maxHeight?: number, id?: number): JQuery
    /**
    * Initializes batch updates. You will see no changes until commit method is called.
    */
    batchUpdate():void
    /**
    * Gets current cell height.
    */
    cellHeight():number
    /**
    * Update current cell height. This method rebuilds an internal CSS style sheet. Note: You can expect performance issues if call this method too often.
    * @param {number} val the cell height
    */
    cellHeight(val:number):void
    /**
    * Gets current cell width.
    */
    cellWidth():number
    /**
    * Finishes batch updates. Updates DOM nodes. You must call it after batchUpdate.
    */
    commit():void
    /**
    * Destroys a grid instance.
    */
    destroy(): void
    /*
    * Disables widgets moving/resizing.
    */
    disable(): void
    /*
    * Enables widgets moving/resizing.
    */
    enable(): void
    /*
    * Get the position of the cell under a pixel on screen.
    * @param  {MousePosition}  position the position of the pixel to resolve in absolute coordinates, as an object with top and leftproperties
    */
    getCellFromPixel(position: MousePosition): CellPosition,
    /*
    * Checks if specified area is empty.
    * @param {number} x the position x.
    * @param {number} y the position y.
    * @param {number} width the width of to check
    * @param {number} height the height of to check
    */
    isAreaEmpty(x: number, y: number, width: number, height: number): void
    /*
    * Locks/unlocks widget.
    * @param {HTMLElement} el widget to modify.
    * @param {boolean} val if true widget will be locked.
    */
    locked(el: HTMLElement, val: boolean): void
    /*
    * Set the minWidth for a widget.
    * @param {HTMLElement} el widget to modify.
    * @param {number} val A numeric value of the number of columns
    */
    minWidth(el: HTMLElement, val: number): void
    /*
    * Set the minHeight for a widget.
    * @param {HTMLElement} el widget to modify.
    * @param {number} val A numeric value of the number of rows
    */
    minHeight(el: HTMLElement, val: number): void
     /*
    * Enables/Disables moving.
    * @param {HTMLElement} el widget to modify.
    * @param {number} val if true widget will be draggable.
    */
    movable(el: HTMLElement, val: boolean): void
    /**
    * Changes widget position
    * @param {HTMLElement} el  widget to modify
    * @param {number} x new position x. If value is null or undefined it will be ignored.
    * @param {number} y new position y. If value is null or undefined it will be ignored.
    *
    */
    move(el: HTMLElement, x: number, y: number): void
    /**
    * Removes widget from the grid.
    * @param {HTMLElement} el  widget to modify
    * @param {boolean} detachNode if false DOM node won't be removed from the tree (Optional. Default true).
    */
    removeWidget(el: HTMLElement, detachNode?: boolean): void
    /**
    * Removes all widgets from the grid.
    */
    removeAll(): void
    /**
    * Changes widget size
    * @param {HTMLElement} el  widget to modify
    * @param {number} width new dimensions width. If value is null or undefined it will be ignored.
    * @param {number} height  new dimensions height. If value is null or undefined it will be ignored.
    */
    resize(el: HTMLElement, width: number, height: number): void
    /**
    * Enables/Disables resizing.
    * @param {HTMLElement} el  widget to modify
    * @param {boolean} val  if true widget will be resizable.
    */
    resizable(el: HTMLElement, val: boolean): void
    /**
    * Toggle the grid static state. Also toggle the grid-stack-static class.
    * @param {boolean} staticValue if true the grid become static.
    */
    setStatic(staticValue: boolean): void
    /**
    * Updates widget position/size.
    * @param {HTMLElement} el  widget to modify
    * @param {number} x new position x. If value is null or undefined it will be ignored.
    * @param {number} y new position y. If value is null or undefined it will be ignored.
    * @param {number} width new dimensions width. If value is null or undefined it will be ignored.
    * @param {number} height  new dimensions height. If value is null or undefined it will be ignored.
    */
    update(el: HTMLElement, x: number, y: number, width: number, height: number): void
    /**
    * Returns true if the height of the grid will be less the vertical constraint. Always returns true if grid doesn't have height constraint.
    * @param {number} x new position x. If value is null or undefined it will be ignored.
    * @param {number} y new position y. If value is null or undefined it will be ignored.
    * @param {number} width new dimensions width. If value is null or undefined it will be ignored.
    * @param {number} height  new dimensions height. If value is null or undefined it will be ignored.
    * @param {boolean} autoPosition  if true then x, y parameters will be ignored and widget will be places on the first available position
    */
    willItFit(x: number, y: number, width: number, height: number, autoPosition:boolean):boolean


}
/**
* Defines the coordiantes of a object
*/
interface MousePosition {
    top: number,
    left:number,
}
/**
*   Defines the position of a cell inside the grid
*/
interface CellPosition {
    x: number,
    y:number
}
declare namespace GridStackUI {
    interface Utils {
        /**
        * Sorts array of nodes
        *@param nodes array to sort
        *@param dir 1 for asc, -1 for desc (optional)
        *@param width width of the grid. If undefined the width will be calculated automatically (optional).
        **/
        sort(nodes: HTMLElement[], dir: number, width: number): void
    }
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
    cellHeight?: number;
    /**
     * allows to override jQuery UI draggable options. (default: { handle: '.grid-stack-item-content', scroll: true, appendTo: 'body' })
     */
    draggable?: {};
    /**
    * draggable handle selector (default: '.grid-stack-item-content')
    */
    handle?: string;
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
    /**
    * allows to override jQuery UI resizable options. (default: { autoHide: true, handles: 'se' })
    */
    resizable?: {};
    /**
    * makes grid static (default false).If true widgets are not movable/ resizable.You don't even need jQueryUI draggable/resizable. A CSS class grid-stack-static is also added to the container.
    */
    staticGrid?: boolean;
    /**
    * vertical gap size (default: 20)
    */
    verticalMargin?: number;
    /**
    * amount of columns (default: 12)
    */
    width?: number;
}
