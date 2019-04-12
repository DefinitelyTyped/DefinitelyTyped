/**
 * Copyright (c) 2006-2015, JGraph Ltd
 * Copyright (c) 2006-2015, Gaudenz Alder
 */
/**
 * Class: mxGuide
 *
 * Implements the alignment of selection cells to other cells in the graph.
 * 
 * Constructor: mxGuide
 * 
 * Constructs a new guide object.
 */

declare namespace mxgraph {
  export class mxGuide {
    constructor(graph: mxGraph, states: mxCellState[]);

    /**
     * Variable: graph
     *
     * Reference to the enclosing <mxGraph> instance.
     */
    graph: mxGraph;

    /**
     * Variable: states
     * 
     * Contains the <mxCellStates> that are used for alignment.
     */
    states: mxCellState[];

    /**
     * Variable: horizontal
     *
     * Specifies if horizontal guides are enabled. Default is true.
     */
    horizontal: boolean;

    /**
     * Variable: vertical
     *
     * Specifies if vertical guides are enabled. Default is true.
     */
    vertical: boolean;

    /**
     * Variable: vertical
     *
     * Holds the <mxShape> for the horizontal guide.
     */
    guideX: mxShape;

    /**
     * Variable: vertical
     *
     * Holds the <mxShape> for the vertical guide.
     */
    guideY: mxShape;

    /**
     * Function: setStates
     * 
     * Sets the <mxCellStates> that should be used for alignment.
     */
    setStates(states: mxCellState[]): void;

    /**
     * Function: isEnabledForEvent
     * 
     * Returns true if the guide should be enabled for the given native event. This
     * implementation always returns true.
     */
    isEnabledForEvent(evt: Event): boolean;

    /**
     * Function: getGuideTolerance
     * 
     * Returns the tolerance for the guides. Default value is gridSize / 2.
     */
    getGuideTolerance(): number;

    /**
     * Function: createGuideShape
     * 
     * Returns the mxShape to be used for painting the respective guide. This
     * implementation returns a new, dashed and crisp <mxPolyline> using
     * <mxConstants.GUIDE_COLOR> and <mxConstants.GUIDE_STROKEWIDTH> as the format.
     * 
     * Parameters:
     * 
     * horizontal - Boolean that specifies which guide should be created.
     */
    createGuideShape(horizontal: boolean): mxPolyline;

    /**
     * Function: move
     * 
     * Moves the <bounds> by the given <mxPoint> and returnt the snapped point.
     */
    move(bounds: mxRectangle, delta: mxPoint, gridEnabled: boolean, clone: boolean): mxPoint;

    /**
     * Function: hide
     * 
     * Hides all current guides.
     */
    getGuideColor(state: mxCellState, horizontal: any): string;

    /**
     * Function: hide
     * 
     * Hides all current guides.
     */
    hide(): void;

    /**
     * Function: setVisible
     * 
     * Shows or hides the current guides.
     */
    setVisible(visible: boolean): void;

    /**
     * Function: destroy
     * 
     * Destroys all resources that this object uses.
     */
    destroy(): void;
  }
}