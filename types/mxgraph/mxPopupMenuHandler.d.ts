/**
 * Copyright (c) 2006-2015, JGraph Ltd
 * Copyright (c) 2006-2015, Gaudenz Alder
 */
/**
 * Class: mxPopupMenuHandler
 * 
 * Event handler that creates popupmenus.
 * 
 * Constructor: mxPopupMenuHandler
 * 
 * Constructs an event handler that creates a <mxPopupMenu>.
 */
declare namespace mxgraph {
  export class mxPopupMenuHandler extends mxPopupMenu {

    constructor(graph: mxGraph, factoryMethod: (panningHandler: mxPanningHandler, cell: mxCell, me: mxMouseEvent) => any);

    /**
     * Variable: graph
     * 
     * Reference to the enclosing <mxGraph>.
     */
    graph: mxGraph;

    /**
     * Variable: selectOnPopup
     * 
     * Specifies if cells should be selected if a popupmenu is displayed for
     * them. Default is true.
     */
    selectOnPopup: boolean;

    /**
     * Variable: clearSelectionOnBackground
     * 
     * Specifies if cells should be deselected if a popupmenu is displayed for
     * the diagram background. Default is true.
     */
    clearSelectionOnBackground: boolean;

    /**
     * Variable: triggerX
     * 
     * X-coordinate of the mouse down event.
     */
    triggerX: number;

    /**
     * Variable: triggerY
     * 
     * Y-coordinate of the mouse down event.
     */
    triggerY: number;

    /**
     * Variable: screenX
     * 
     * Screen X-coordinate of the mouse down event.
     */
    screenX: number;

    /**
     * Variable: screenY
     * 
     * Screen Y-coordinate of the mouse down event.
     */
    screenY: number;

    /**
     * Function: init
     * 
     * Initializes the shapes required for this vertex handler.
     */
    init(): void;

    /**
     * Function: isSelectOnPopup
     * 
     * Hook for returning if a cell should be selected for a given <mxMouseEvent>.
     * This implementation returns <selectOnPopup>.
     */
    isSelectOnPopup(me: mxMouseEvent): boolean;

    /**
     * Function: mouseDown
     * 
     * Handles the event by initiating the panning. By consuming the event all
     * subsequent events of the gesture are redirected to this handler.
     */
    mouseDown(sender: any, me: mxMouseEvent): void;

    /**
     * Function: mouseMove
     * 
     * Handles the event by updating the panning on the graph.
     */
    mouseMove(sender: any, me: mxMouseEvent): void;

    /**
     * Function: mouseUp
     * 
     * Handles the event by setting the translation on the view or showing the
     * popupmenu.
     */
    mouseUp(sender: any, me: mxMouseEvent): void;

    /**
     * Function: getCellForPopupEvent
     * 
     * Hook to return the cell for the mouse up popup trigger handling.
     */
    getCellForPopupEvent(me: mxMouseEvent): mxCell;

    /**
     * Function: destroy
     * 
     * Destroys the handler and all its resources and DOM nodes.
     */
    destroy(): void;
  }
}