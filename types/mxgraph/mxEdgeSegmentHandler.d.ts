/**
 * Copyright (c) 2006-2015, JGraph Ltd
 * Copyright (c) 2006-2015, Gaudenz Alder
 */
declare namespace mxgraph {
  export class mxEdgeSegmentHandler extends mxEdgeHandler {
    constructor(state: mxCellState);

    /**
     * Function: getCurrentPoints
     * 
     * Returns the current absolute points.
     */
    getCurrentPoints(): mxPoint[];

    /**
     * Function: getPreviewPoints
     * 
     * Updates the given preview state taking into account the state of the constraint handler.
     */
    getPreviewPoints(point: mxPoint): mxPoint[];

    /**
     * Function: updatePreviewState
     * 
     * Overridden to perform optimization of the edge style result.
     */
    updatePreviewState(edge: mxCell, point: mxPoint, terminalState: mxCellState, me: mxMouseEvent): void;

    /**
     * Overriden to merge edge segments.
     */
    connect(edge: mxCell, terminal: mxCell, isSource: boolean, isClone: boolean, me: mxMouseEvent): mxCell;

    /**
     * Function: getTooltipForNode
     * 
     * Returns no tooltips.
     */
    getTooltipForNode(node: any): string;

    /**
     * Function: createBends
     * 
     * Adds custom bends for the center of each segment.
     */
    start(x: number, y: number, index: number): void;

    /**
     * Function: createBends
     * 
     * Adds custom bends for the center of each segment.
     */
    createBends(): mxShape[];
    /**
     * Function: redraw
     * 
     * Overridden to invoke <refresh> before the redraw.
     */
    redraw(): void;

    /**
     * Function: redrawInnerBends
     * 
     * Updates the position of the custom bends.
     */
    redrawInnerBends(p0: mxPoint, pe: mxPoint): void;
  }
}