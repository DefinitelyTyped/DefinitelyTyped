/**
 * Copyright (c) 2006-2015, JGraph Ltd
 * Copyright (c) 2006-2015, Gaudenz Alder
 */
/**
 * Class: mxSelectionCellsHandler
 *
 * An event handler that manages cell handlers and invokes their mouse event
 * processing functions.
 *
 * Group: Events
 *
 * Event: mxEvent.ADD
 *
 * Fires if a cell has been added to the selection. The <code>state</code>
 * property contains the <mxCellState> that has been added.
 *
 * Event: mxEvent.REMOVE
 *
 * Fires if a cell has been remove from the selection. The <code>state</code>
 * property contains the <mxCellState> that has been removed.
 *
 * Parameters:
 *
 * graph - Reference to the enclosing <mxGraph>.
 */

declare namespace mxgraph {
    export class mxSelectionCellsHandler extends mxEventSource {
        constructor(graph: mxGraph);

        /**
         * Variable: graph
         *
         * Reference to the enclosing <mxGraph>.
         */
        graph: mxGraph;

        /**
         * Variable: enabled
         *
         * Specifies if events are handled. Default is true.
         */
        enabled: boolean;

        /**
         * Variable: refreshHandler
         *
         * Keeps a reference to an event listener for later removal.
         */
        refreshHandler: any;

        /**
         * Variable: maxHandlers
         *
         * Defines the maximum number of handlers to paint individually. Default is 100.
         */
        maxHandlers: number;

        /**
         * Variable: handlers
         *
         * <mxDictionary> that maps from cells to handlers.
         */
        handlers: mxDictionary<any>;

        /**
         * Function: isEnabled
         *
         * Returns <enabled>.
         */
        isEnabled(): boolean;

        /**
         * Function: setEnabled
         *
         * Sets <enabled>.
         */
        setEnabled(value: boolean): void;

        /**
         * Function: getHandler
         *
         * Returns the handler for the given cell.
         */
        getHandler(cell: mxCell): any;

        /**
         * Function: reset
         *
         * Resets all handlers.
         */
        reset(): void;

        /**
         * Function: refresh
         *
         * Reloads or updates all handlers.
         */
        refresh(): void;

        /**
         * Function: isHandlerActive
         *
         * Returns true if the given handler is active and should not be redrawn.
         */
        isHandlerActive(handler: any): boolean;

        /**
         * Function: updateHandler
         *
         * Updates the handler for the given shape if one exists.
         */
        updateHandler(state: mxCellState): void;

        /**
         * Function: mouseDown
         *
         * Redirects the given event to the handlers.
         */
        mouseDown(sender: Event, me: Event): void;

        /**
         * Function: mouseMove
         *
         * Redirects the given event to the handlers.
         */
        mouseMove(sender: Event, me: Event): void;

        /**
         * Function: mouseUp
         *
         * Redirects the given event to the handlers.
         */
        mouseUp(sender: Event, me: Event): void;

        /**
         * Function: destroy
         *
         * Destroys the handler and all its resources and DOM nodes.
         */
        destroy(): void;
    }
}