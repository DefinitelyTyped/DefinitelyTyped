// Type definitions for Dojo v1.9
// Project: http://dojotoolkit.org
// Definitions by: Michael Van Sickle <https://github.com/vansimke>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare namespace dojox {

    namespace dnd {
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/dnd/BoundingBoxController.html
         *
         * Allows the user draw bounding boxes around nodes on the page.
         * Publishes to the "/dojox/dnd/bounding" topic to tell the selector to check
         * to see whether any dnd items fall within the coordinates of the bounding box
         *
         * @param sources an array of dojox.dnd.Selectors which need to be aware ofthe positioning of the bounding box.
         * @param domNode the DOM node or id which represents the bounding box on the page.
         */
        class BoundingBoxController {
            constructor(sources: dojox.dnd.Selector[], domNode: String);
            /**
             * Override-able by the client as an extra check to ensure that a bounding
             * box is viable. In some instances, it might not make sense that
             * a mouse down -> mouse move -> mouse up interaction represents a bounding box.
             * For example, if a dialog is open the client might want to suppress a bounding
             * box. This function could be used by the client to ensure that a bounding box is only
             * drawn on the document when certain conditions are met.
             *
             * @param evt the mouse event which caused this callback to fire.
             */
            boundingBoxIsViable(evt: Object): boolean;
            /**
             * prepares this object to be garbage-collected
             *
             */
            destroy(): void;
            /**
             * Override-able by the client as an extra check to ensure that a bounding
             * box should begin to be drawn. If the client has any preconditions to when a
             * bounding box should be drawn, they should be included in this method.
             *
             * @param evt the mouse event which caused this callback to fire.
             */
            shouldStartDrawingBox(evt: Object): boolean;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/dnd/Selector.html
         *
         *
         * @param node node or node's id to build the selector on
         * @param params       Optionala dictionary of parameters
         */
        class Selector extends dojo.dnd.Selector {
            constructor(node: HTMLElement, params?: Object);
            /**
             * Indicates whether to allow dnd item nodes to be nested within other elements.
             * By default this is false, indicating that only direct children of the container can
             * be draggable dnd item nodes
             *
             */
            "allowNested": boolean;
            /**
             *
             */
            "conservative": boolean;
            /**
             * The DOM node the mouse is currently hovered over
             *
             */
            "current": HTMLElement;
            /**
             * Map from an item's id (which is also the DOMNode's id) to
             * the dojo/dnd/Container.Item itself.
             *
             */
            "map": Object;
            /**
             * The set of id's that are currently selected, such that this.selection[id] == 1
             * if the node w/that id is selected.  Can iterate over selected node's id's like:
             *
             * for(var id in this.selection)
             *
             */
            "selection": Object;
            /**
             *
             */
            "singular": boolean;
            /**
             *
             */
            "skipForm": boolean;
            /**
             * removes all data items from the map
             *
             */
            clearItems(): void;
            /**
             * creator function, dummy at the moment
             *
             */
            creator(): void;
            /**
             * deletes all selected items
             *
             */
            deleteSelectedNodes(): Function;
            /**
             * removes a data item from the map by its key (id)
             *
             * @param key
             */
            delItem(key: String): void;
            /**
             * deselects a node
             *
             * @param node Node to deselect (id or DOM Node)
             */
            deselectNode(node: String): Function;
            /**
             * deselects a node
             *
             * @param node Node to deselect (id or DOM Node)
             */
            deselectNode(node: HTMLElement): Function;
            /**
             * prepares the object to be garbage-collected
             *
             */
            destroy(): void;
            /**
             *
             * @param type
             * @param event
             */
            emit(type: any, event: any): any;
            /**
             * iterates over a data map skipping members that
             * are present in the empty object (IE and/or 3rd-party libraries).
             *
             * @param f
             * @param o               Optional
             */
            forInItems(f: Function, o: Object): String;
            /**
             * iterates over selected items;
             * see dojo/dnd/Container.forInItems() for details
             *
             * @param f
             * @param o               Optional
             */
            forInSelectedItems(f: Function, o: Object): void;
            /**
             * returns a list (an array) of all valid child nodes
             *
             */
            getAllNodes(): any;
            /**
             * returns a data item by its key (id)
             *
             * @param key
             */
            getItem(key: String): any;
            /**
             * returns a list (an array) of selected nodes
             *
             */
            getSelectedNodes(): any;
            /**
             * inserts an array of new nodes before/after an anchor node
             *
             * @param data Logical representation of the object being dragged.If the drag object's type is "text" then data is a String,if it's another type then data could be a different Object,perhaps a name/value hash.
             * @param before insert before the anchor, if true, and after the anchor otherwise
             * @param anchor the anchor node to be used as a point of insertion
             */
            insertNodes(data: Object, before: boolean, anchor: HTMLElement): Function;
            /**
             * inserts new data items (see dojo/dnd/Container.insertNodes() method for details)
             *
             * @param addSelected all new nodes will be added to selected items, if true, no selection change otherwise
             * @param data a list of data items, which should be processed by the creator function
             * @param before insert before the anchor, if true, and after the anchor otherwise
             * @param anchor the anchor node to be used as a point of insertion
             */
            insertNodes(addSelected: boolean, data: any[], before: boolean, anchor: HTMLElement): Function;
            /**
             * checks if node is selected
             *
             * @param node Node to check (id or DOM Node)
             */
            isSelected(node: String): any;
            /**
             * checks if node is selected
             *
             * @param node Node to check (id or DOM Node)
             */
            isSelected(node: HTMLElement): any;
            /**
             *
             * @param params
             * @param node
             * @param Ctor
             */
            markupFactory(params: any, node: any, Ctor: any): any;
            /**
             *
             * @param type
             * @param listener
             */
            on(type: any, listener: any): any;
            /**
             * selects all items
             *
             */
            selectAll(): any;
            /**
             * selects nodes by bounding box
             *
             * @param left Left coordinate of the bounding box
             * @param top Top coordinate of the bounding box
             * @param right Right coordinate of the bounding box
             * @param bottom Bottom coordinate of the bounding box
             * @param add               OptionalIf true, node is added to selection, otherwise currentselection is removed, and node will be the only selection.
             */
            selectByBBox(left: number, top: number, right: number, bottom: number, add: boolean): Function;
            /**
             * selects a node
             *
             * @param node Node to select (id or DOM Node)
             * @param add               OptionalIf true, node is added to selection, otherwise currentselection is removed, and node will be the only selection.
             */
            selectNode(node: String, add: boolean): Function;
            /**
             * selects a node
             *
             * @param node Node to select (id or DOM Node)
             * @param add               OptionalIf true, node is added to selection, otherwise currentselection is removed, and node will be the only selection.
             */
            selectNode(node: HTMLElement, add: boolean): Function;
            /**
             * unselects all items
             *
             */
            selectNone(): any;
            /**
             * associates a data item with its key (id)
             *
             * @param key
             * @param data
             */
            setItem(key: String, data: any): void;
            /**
             * shifts the currently selected dnd item forwards and backwards.
             * One possible use would be to allow a user select different
             * dnd items using the right and left keys.
             *
             * @param toNext If true, we select the next node, otherwise the previous one.
             * @param add               OptionalIf true, add to selection, otherwise current selection isremoved before adding any nodes.
             */
            shift(toNext: boolean, add: boolean): void;
            /**
             * collects valid child items and populate the map
             *
             */
            startup(): void;
            /**
             * sync up the node list with the data map
             *
             */
            sync(): Function;
            /**
             * event processor for onmousedown
             *
             * @param e mouse event
             */
            onMouseDown(e: Event): void;
            /**
             * event processor for onmousemove
             *
             * @param e mouse event
             */
            onMouseMove(e: Event): void;
            /**
             * event processor for onmouseout
             *
             * @param e mouse event
             */
            onMouseOut(e: Event): void;
            /**
             * event processor for onmouseover or touch, to mark that element as the current element
             *
             * @param e mouse event
             */
            onMouseOver(e: Event): void;
            /**
             * event processor for onmouseup
             *
             * @param e mouse event
             */
            onMouseUp(e: Event): void;
            /**
             * this function is called once, when mouse is out of our container
             *
             */
            onOutEvent(): void;
            /**
             * this function is called once, when mouse is over our container
             *
             */
            onOverEvent(): void;
            /**
             * event processor for onselectevent and ondragevent
             *
             * @param e mouse event
             */
            onSelectStart(e: Event): void;
        }
    }

}
declare module "dojox/dnd/BoundingBoxController" {
    var exp: dojox.dnd.BoundingBoxController
    export=exp;
}
declare module "dojox/dnd/Selector" {
    var exp: dojox.dnd.Selector
    export=exp;
}
