// Type definitions for Dojo v1.9
// Project: http://dojotoolkit.org
// Definitions by: Michael Van Sickle <https://github.com/vansimke>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="dojo.d.ts" />
declare module dojox {

    module mdnd {
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/mdnd/AreaManager.html
         *
         * Drag And Drop manager
         * 
         */
        class AreaManager {
            constructor();
            /**
             * CSS class enabled an area if areaClass is defined
             * 
             */
            "areaClass": string;
            /**
             * Enable the refresh of registered areas on drag start.
             * 
             */
            "autoRefresh": boolean;
            /**
             * CSS class enabled a drag handle.
             * 
             */
            "dragHandleClass": string;
            /**
             * To add an item programmatically.
             * 
             * @param area a node corresponding to the D&D Area             
             * @param node the node which has to be treated.             
             * @param index the place in the area             
             * @param notCheckParent             
             */
            addDragItem(area: HTMLElement, node: HTMLElement, index: number, notCheckParent: boolean): any;
            /**
             * Destroy the component.
             * 
             */
            destroy(): void;
            /**
             * find the nearest target area according to coordinates.
             * Coordinates are representing by an object : for example, {'x':10,'y':10}
             * 
             * @param coords an object encapsulating X and Y position             
             * @param size an object encapsulating the area size             
             */
            findCurrentIndexArea(coords: Object, size: Object): any;
            /**
             * Initialize the manager by calling the registerByClass method
             * 
             */
            init(): void;
            /**
             * Search the right place to insert the dropIndicator and display the dropIndicator.
             * 
             * @param coords an object encapsulating X and Y position             
             * @param size an object encapsulating width and height values             
             */
            placeDropIndicator(coords: Object, size: Object): any;
            /**
             * Register all Dnd Areas identified by the attribute areaClass :
             * insert Dnd Areas using the specific sort of dropMode.
             * 
             */
            registerByClass(): void;
            /**
             * To register Dnd Area : insert the DndArea using the specific sort of dropMode.
             * 
             * @param area a DOM node corresponding to the Dnd Area             
             * @param notInitAreas if false or undefined, init the areas.             
             */
            registerByNode(area: HTMLElement, notInitAreas: boolean): void;
            /**
             * Delete a moveable item programmatically. The node is removed from the area.
             * 
             * @param area A node corresponding to the DndArea.             
             * @param node The node which has to be treated.             
             */
            removeDragItem(area: HTMLElement, node: HTMLElement): any;
            /**
             * Unregister a D&D Area and its children into the AreaManager.
             * 
             * @param area A node corresponding to the D&D Area.             
             */
            unregister(area: HTMLElement): any;
            /**
             * Occurs when the dojo.dnd.Moveable.onDrag is fired.
             * Search the nearest target area and called the placeDropIndicator
             * 
             * @param node The node which is dragged             
             * @param coords an object encapsulating X and Y position             
             * @param size an object encapsulating width and height values             
             * @param mousePosition coordinates of mouse             
             */
            onDrag(node: HTMLElement, coords: Object, size: Object, mousePosition: Object): void;
            /**
             * Optionally called by the getTargetArea method of TargetFinder class.
             * 
             * @param coords coordinates of the dragged Node.             
             * @param size size of the dragged Node.             
             */
            onDragEnter(coords: Object, size: Object): void;
            /**
             * Optionally called by the getTargetArea method of TargetFinder class.
             * 
             * @param coords coordinates of the dragged Node.             
             * @param size size of the dragged Node.             
             */
            onDragExit(coords: Object, size: Object): void;
            /**
             * Initialize the drag (see dojox.mdnd.Moveable.initOffsetDrag())
             * 
             * @param node The node which is about to be dragged             
             * @param coords an object encapsulating X and Y position             
             * @param size an object encapsulating width and height values             
             */
            onDragStart(node: HTMLElement, coords: Object, size: Object): void;
            /**
             * Drop the dragged item where the dropIndicator is displayed.
             * 
             * @param node The node which is about to be dropped             
             */
            onDrop(node: HTMLElement): void;
            /**
             * Cancel the drop.
             * The dragNode returns into the source.
             * 
             */
            onDropCancel(): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/mdnd/AutoScroll.html
         *
         * Activate scrolling while dragging a widget.
         * 
         */
        class AutoScroll {
            constructor();
            /**
             * default mouse move offset
             * 
             */
            "interval": number;
            /**
             * Default mouse margin
             * 
             */
            "marginMouse": number;
            /**
             * 
             */
            "recursiveTimer": number;
            /**
             * Check if an autoScroll have to be launched.
             * 
             * @param e             
             */
            checkAutoScroll(e: Event): void;
            /**
             * 
             */
            destroy(): void;
            /**
             * Set the visible part of the window. Varies accordion to Navigator.
             * 
             */
            getViewport(): void;
            /**
             * 
             */
            init(): void;
            /**
             * Set the hightest heigh and width authorized scroll.
             * 
             */
            setAutoScrollMaxPage(): void;
            /**
             * set the node which is dragged
             * 
             * @param node node to scroll             
             */
            setAutoScrollNode(node: HTMLElement): void;
            /**
             * Stop the autoscroll.
             * 
             */
            stopAutoScroll(): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/mdnd/DropIndicator.html
         *
         * DropIndicator managment for DnD.
         * 
         */
        class DropIndicator {
            constructor();
            /**
             * the drop indicator node
             * 
             */
            "node": HTMLElement;
            /**
             * destroy the dropIndicator
             * 
             */
            destroy(): void;
            /**
             * Place the DropIndicator in the right place
             * 
             * @param area the dnd targer area node             
             * @param nodeRef node where the dropIndicator have to be placed into the area             
             * @param size             
             */
            place(area: HTMLElement, nodeRef: HTMLElement, size: Object): any;
            /**
             * remove the DropIndicator (not destroy)
             * 
             */
            remove(): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/mdnd/LazyManager.html
         *
         * This class allows to launch a drag and drop dojo on the fly.
         * 
         */
        class LazyManager {
            constructor();
            /**
             * cancel a drag and drop dojo on the fly.
             * 
             */
            cancelDrag(): void;
            /**
             * 
             */
            destroy(): void;
            /**
             * 
             * @param draggedNode             
             */
            getItem(draggedNode: HTMLElement): Object;
            /**
             * launch a dojo drag and drop on the fly.
             * 
             * @param e             
             * @param draggedNode               Optional            
             */
            startDrag(e: Event, draggedNode: HTMLElement): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/mdnd/Moveable.html
         *
         * Allow end-users to track a DOM node into the web page
         * 
         * @param params Hash of parameters     
         * @param node The draggable node     
         */
        class Moveable {
            constructor(params: Object, node: HTMLElement);
            /**
             * The user clicks on the handle, but the drag action will really begin
             * if he tracks the main node to more than 3 pixels.
             * 
             */
            "dragDistance": number;
            /**
             * The node on which the user clicks to drag the main node.
             * 
             */
            "handle": HTMLElement;
            /**
             * A flag to control a drag action if a form element has been focused.
             * If true, the drag action is not executed.
             * 
             */
            "skip": boolean;
            /**
             * Delecte associated events
             * 
             */
            destroy(): void;
            /**
             * Initialize the gap between main node coordinates and the clicked point.
             * Call the onDragStart method.
             * 
             * @param e A DOM event             
             */
            initOffsetDrag(e: Event): void;
            /**
             * identify the type of target node associated with a DOM event.
             * 
             * @param e a DOM event             
             */
            isFormElement(e: Event): any;
            /**
             * Stub function.
             * Notes : border box model for size value, margin box model for coordinates
             * 
             * @param node a DOM node             
             * @param coords position of the main node (equals to css left/top properties)             
             * @param size an object encapsulating width and height values             
             * @param mousePosition coordiantes of mouse             
             */
            onDrag(node: HTMLElement, coords: Object, size: Object, mousePosition: Object): void;
            /**
             * Stub function
             * Notes : Coordinates don't contain margins
             * 
             * @param node a DOM node             
             */
            onDragEnd(node: HTMLElement): void;
            /**
             * Stub function.
             * Notes : border box model
             * 
             * @param node a DOM node             
             * @param coords absolute position of the main node             
             * @param size an object encapsulating width an height values             
             */
            onDragStart(node: HTMLElement, coords: Object, size: Object): void;
            /**
             * Occurs when the user moves the mouse after clicking on the
             * handle.
             * Determinate when the drag action will have to begin (see
             * dragDistance).
             * 
             * @param e A DOM event             
             */
            onFirstMove(e: Event): void;
            /**
             * Occurs when the user clicks on the handle node.
             * Skip the drag action if a specific node is targeted.
             * Listens to mouseup and mousemove events on to the HTML document.
             * 
             * @param e a DOM event             
             */
            onMouseDown(e: Event): void;
            /**
             * Occurs when the user releases the mouse
             * Calls the onDragEnd method.
             * 
             * @param e a DOM event             
             */
            onMouseUp(e: Event): void;
            /**
             * Occurs when the user moves the mouse.
             * Calls the onDrag method.
             * 
             * @param e a DOM event             
             */
            onMove(e: Event): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/mdnd/PureSource.html
         *
         * A Source Object, which can be used only as a DnD source.
         * A Source can contained several dnd items.
         * A dnd item is not a source.
         * 
         * @param node Node or node's id to build the source on.     
         * @param params       OptionalAny property of this class may be configured via the paramsobject which is mixed-in to the 'dojo.dnd.Source' instance.     
         */
        class PureSource extends dojo.dnd.Selector {
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
            "copyOnly": boolean;
            /**
             * The DOM node the mouse is currently hovered over
             * 
             */
            "current": HTMLElement;
            /**
             * 
             */
            "generateText": boolean;
            /**
             * 
             */
            "horizontal": boolean;
            /**
             * 
             */
            "isSource": boolean;
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
             * 
             */
            "targetState": string;
            /**
             * 
             */
            "withHandles": boolean;
            /**
             * removes all data items from the map
             * 
             */
            clearItems(): void;
            /**
             * Returns true, if we need to copy items, false to move.
             * It is separated to be overwritten dynamically, if needed.
             * 
             * @param keyPressed The "copy" was pressed.             
             */
            copyState(keyPressed: boolean): any;
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
             * Prepares the object to be garbage-collected.
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
             * Markup methods.
             * 
             * @param params ???             
             * @param node ???             
             */
            markupFactory(params: Object, node: HTMLElement): any;
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
             * Topic event processor for /dnd/cancel, called to cancel the Dnd
             * operation.
             * 
             */
            onDndCancel(): void;
            /**
             * Event processor for onmousedown.
             * 
             * @param e Mouse event.             
             */
            onMouseDown(e: Event): void;
            /**
             * Event processor for onmousemove.
             * 
             * @param e Mouse event.             
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
             * Event processor for onmouseup.
             * 
             * @param e Mouse event             
             */
            onMouseUp(e: Event): void;
            /**
             * Called once, when mouse is out our container.
             * 
             */
            onOutEvent(): void;
            /**
             * Called once, when mouse is over our container.
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
        module adapter {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/mdnd/adapter/DndFromDojo.html
             *
             * Allow communication between Dojo dnd items and DojoX D&D areas
             * 
             */
            class DndFromDojo {
                constructor();
                /**
                 * size by default of dropIndicator (display only into a D&D Area)
                 * 
                 */
                "dropIndicatorSize": Object;
                /**
                 * Check if a dragNode is accepted into a dojo target.
                 * 
                 * @param node The dragged node.             
                 * @param accept Object containing the type accepted for a target dojo.             
                 */
                isAccepted(node: HTMLElement, accept: Object): any;
                /**
                 * Subscribe to somes topics of dojo drag and drop.
                 * 
                 */
                subscribeDnd(): void;
                /**
                 * Unsubscribe to some topics of dojo drag and drop.
                 * 
                 */
                unsubscribeDnd(): void;
                /**
                 * Called when the mouse enters or exits of a source dojo.
                 * 
                 * @param source the dojo source/target             
                 */
                onDndSource(source: Object): void;
                /**
                 * Occurs when the user drages an DOJO dnd item inside a D&D dojoX area.
                 * 
                 */
                onDragEnter(): void;
                /**
                 * Occurs when the user leaves a D&D dojoX area after dragging an DOJO dnd item over it.
                 * 
                 */
                onDragExit(): void;
                /**
                 * Occurs when the "/dnd/start" topic is published.
                 * 
                 * @param source the source which provides items             
                 * @param nodes the list of transferred items             
                 * @param copy copy items, if true, move items otherwise             
                 */
                onDragStart(source: Object, nodes: any[], copy: boolean): void;
                /**
                 * Occurs when the user leaves a D&D dojox area after dragging an DOJO dnd item over it.
                 * 
                 * @param source the source which provides items             
                 * @param nodes the list of transferred items             
                 * @param copy copy items, if true, move items otherwise             
                 */
                onDrop(source: Object, nodes: any[], copy: boolean): void;
                /**
                 * Occurs when the "/dnd/cancel" topic is published.
                 * 
                 */
                onDropCancel(): void;
                /**
                 * Occurs when the user moves the mouse.
                 * 
                 * @param e the DOM event             
                 */
                onMouseMove(e: Event): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/mdnd/adapter/DndToDojo.html
             *
             * Allow communication between an item of dojox D&D area to a target dojo.
             * 
             */
            class DndToDojo {
                constructor();
                /**
                 * Return true if the dragged node is accepted.
                 * This method has to be overwritten according to registered target.
                 * 
                 * @param draggedNode             
                 * @param target             
                 */
                isAccepted(draggedNode: HTMLElement, target: Object): boolean;
                /**
                 * Refresh the coordinates of all registered dojo target.
                 * 
                 */
                refresh(): void;
                /**
                 * Refresh the coordinates of registered dojo target with a specific type.
                 * 
                 * @param type A String to identify dojo targets.             
                 */
                refreshByType(type: String): void;
                /**
                 * Register a target dojo.
                 * The target is represented by an object containing :
                 * 
                 * the dojo area node
                 * the type reference to identify a group node
                 * the coords of the area to enable refresh position
                 * 
                 * @param area The DOM node which has to be registered.             
                 * @param type A String to identify the node.             
                 * @param dojoTarget True if the dojo D&D have to be enable when mouse is hover the registered target dojo.             
                 */
                register(area: HTMLElement, type: String, dojoTarget: boolean): void;
                /**
                 * Unregister all targets dojo.
                 * 
                 */
                unregister(): void;
                /**
                 * Unregister a target dojo.
                 * 
                 * @param area The DOM node of target dojo.             
                 */
                unregisterByNode(area: HTMLElement): void;
                /**
                 * Unregister several targets dojo having the same type passing in parameter.
                 * 
                 * @param type A String to identify dojo targets.             
                 */
                unregisterByType(type: String): void;
                /**
                 * Call when the mouse enters in a registered dojo target.
                 * 
                 * @param e The current Javascript Event.             
                 */
                onDragEnter(e: Event): void;
                /**
                 * Call when the mouse exit of a registered dojo target.
                 * 
                 * @param e current javscript event             
                 */
                onDragExit(e: Event): void;
                /**
                 * Called when an onmouseup event is loaded on a registered target dojo.
                 * 
                 * @param e Event object.             
                 */
                onDrop(e: Event): void;
                /**
                 * Call when the mouse moving after an onStartDrag of AreaManger.
                 * Check if the coordinates of the mouse is in a dojo target.
                 * 
                 * @param e Event object.             
                 */
                onMouseMove(e: Event): void;
            }
        }

        module dropMode {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/mdnd/dropMode/DefaultDropMode.html
             *
             * Enabled a type of calcul for Dnd.
             * Default class to find the nearest target.
             * 
             */
            class DefaultDropMode {
                constructor();
                /**
                 * Add a DnD Area into an array sorting by the x position.
                 * 
                 * @param areas array of areas             
                 * @param object data type of a DndArea             
                 */
                addArea(areas: any[], object: Object): any;
                /**
                 * 
                 */
                destroy(): void;
                /**
                 * return coordinates of the draggable item
                 * return for:
                 * 
                 * X point : the middle
                 * Y point : search if the user goes up or goes down with his mouse.
                 * Up : top of the draggable item
                 * Down : bottom of the draggable item
                 * 
                 * @param coords an object encapsulating X and Y position             
                 * @param size an object encapsulating width and height values             
                 * @param mousePosition coordinates of mouse             
                 */
                getDragPoint(coords: Object, size: Object, mousePosition: Object): any;
                /**
                 * Return the index where the drop has to be placed.
                 * 
                 * @param targetArea a DnD area object             
                 * @param coords coordinates [x,y] of the draggable item             
                 */
                getDropIndex(targetArea: Object, coords: Object): any;
                /**
                 * get the nearest DnD area.
                 * Coordinates are basically provided by the getDragPoint method.
                 * 
                 * @param areaList a list of DnD areas objects             
                 * @param coords coordinates [x,y] of the dragItem             
                 * @param currentIndexArea an index representing the active DnD area             
                 */
                getTargetArea(areaList: any[], coords: Object, currentIndexArea: number): any;
                /**
                 * initialize the horizontal line in order to determinate the drop zone.
                 * 
                 * @param area the DnD area             
                 */
                initItems(area: Object): void;
                /**
                 * take into account the drop indicator DOM element in order to compute horizontal lines
                 * 
                 * @param area a DnD area object             
                 * @param indexItem index of a draggable item             
                 * @param size dropIndicator size             
                 * @param added boolean to know if a dropIndicator has been added or deleted             
                 */
                refreshItems(area: Object, indexItem: number, size: Object, added: boolean): void;
                /**
                 * Refresh intervals between areas to determinate the nearest area to drop an item.
                 * Algorithm :
                 * the marker should be the vertical line passing by the
                 * central point between two contiguous areas.
                 * Note:
                 * If the page has only one targetArea, it's not necessary to calculate coords.
                 * 
                 * @param areaList array of areas             
                 */
                updateAreas(areaList: any[]): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/mdnd/dropMode/OverDropMode.html
             *
             * Default class to find the nearest target only if the mouse is over an area.
             * 
             */
            class OverDropMode {
                constructor();
                /**
                 * Add a D&D Area into an array sorting by the x position.
                 * 
                 * @param areas array of areas             
                 * @param object data type of a DndArea             
                 */
                addArea(areas: any[], object: Object): any;
                /**
                 * 
                 */
                destroy(): void;
                /**
                 * return coordinates of the draggable item.
                 * 
                 * For X point : the x position of mouse
                 * For Y point : the y position of mouse
                 * 
                 * @param coords an object encapsulating X and Y position             
                 * @param size an object encapsulating width and height values             
                 * @param mousePosition coordinates of mouse             
                 */
                getDragPoint(coords: Object, size: Object, mousePosition: Object): any;
                /**
                 * Return the index where the drop has to be placed.
                 * 
                 * @param targetArea a D&D area object.             
                 * @param coords coordinates [x,y] of the draggable item.             
                 */
                getDropIndex(targetArea: Object, coords: Object): any;
                /**
                 * get the nearest D&D area.
                 * 
                 * @param areaList a list of D&D areas objects             
                 * @param coords coordinates [x,y] of the dragItem (see getDragPoint())             
                 * @param currentIndexArea an index representing the active D&D area             
                 */
                getTargetArea(areaList: any[], coords: Object, currentIndexArea: number): any;
                /**
                 * initialize the horizontal line in order to determinate the drop zone.
                 * 
                 * @param area the D&D area.             
                 */
                initItems(area: Object): void;
                /**
                 * take into account the drop indicator DOM element in order to compute horizontal lines
                 * 
                 * @param area a D&D area object             
                 * @param indexItem index of a draggable item             
                 * @param size dropIndicator size             
                 * @param added boolean to know if a dropIndicator has been added or deleted             
                 */
                refreshItems(area: Object, indexItem: number, size: Object, added: boolean): void;
                /**
                 * refresh areas position and size to determinate the nearest area to drop an item
                 * the area position (and size) is equal to the postion of the domNode associated.
                 * 
                 * @param areaList array of areas             
                 */
                updateAreas(areaList: any[]): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/mdnd/dropMode/VerticalDropMode.html
             *
             * Enabled a type of calcul for Dnd.
             * Default class to find the nearest target.
             * 
             */
            class VerticalDropMode {
                constructor();
                /**
                 * Add a DnD Area into an array sorting by the x position.
                 * 
                 * @param areas array of areas             
                 * @param object data type of a DndArea             
                 */
                addArea(areas: any[], object: Object): any;
                /**
                 * 
                 */
                destroy(): void;
                /**
                 * return coordinates of the draggable item
                 * return for:
                 * 
                 * X point : the middle
                 * Y point : search if the user goes up or goes down with his mouse.
                 * Up : top of the draggable item
                 * Down : bottom of the draggable item
                 * 
                 * @param coords an object encapsulating X and Y position             
                 * @param size an object encapsulating width and height values             
                 * @param mousePosition coordinates of mouse             
                 */
                getDragPoint(coords: Object, size: Object, mousePosition: Object): any;
                /**
                 * Return the index where the drop has to be placed.
                 * 
                 * @param targetArea a DnD area object             
                 * @param coords coordinates [x,y] of the draggable item             
                 */
                getDropIndex(targetArea: Object, coords: Object): any;
                /**
                 * get the nearest DnD area.
                 * Coordinates are basically provided by the getDragPoint method.
                 * 
                 * @param areaList a list of DnD areas objects             
                 * @param coords coordinates [x,y] of the dragItem             
                 * @param currentIndexArea an index representing the active DnD area             
                 */
                getTargetArea(areaList: any[], coords: Object, currentIndexArea: number): any;
                /**
                 * initialize the horizontal line in order to determinate the drop zone.
                 * 
                 * @param area the DnD area             
                 */
                initItems(area: Object): void;
                /**
                 * take into account the drop indicator DOM element in order to compute horizontal lines
                 * 
                 * @param area a DnD area object             
                 * @param indexItem index of a draggable item             
                 * @param size dropIndicator size             
                 * @param added boolean to know if a dropIndicator has been added or deleted             
                 */
                refreshItems(area: Object, indexItem: number, size: Object, added: boolean): void;
                /**
                 * Refresh intervals between areas to determinate the nearest area to drop an item.
                 * Algorithm :
                 * the marker should be the vertical line passing by the
                 * central point between two contiguous areas.
                 * Note:
                 * If the page has only one targetArea, it's not necessary to calculate coords.
                 * 
                 * @param areaList array of areas             
                 */
                updateAreas(areaList: any[]): void;
            }
        }

    }

}

declare module "dojox/mdnd/AutoScroll" {
    var exp: dojox.mdnd.AutoScroll
    export=exp;
}
declare module "dojox/mdnd/DropIndicator" {
    var exp: dojox.mdnd.DropIndicator
    export=exp;
}
declare module "dojox/mdnd/AreaManager" {
    var exp: dojox.mdnd.AreaManager
    export=exp;
}
declare module "dojox/mdnd/LazyManager" {
    var exp: dojox.mdnd.LazyManager
    export=exp;
}
declare module "dojox/mdnd/Moveable" {
    var exp: dojox.mdnd.Moveable
    export=exp;
}
declare module "dojox/mdnd/PureSource" {
    var exp: dojox.mdnd.PureSource
    export=exp;
}
declare module "dojox/mdnd/adapter/DndFromDojo" {
    var exp: dojox.mdnd.adapter.DndFromDojo
    export=exp;
}
declare module "dojox/mdnd/adapter/DndToDojo" {
    var exp: dojox.mdnd.adapter.DndToDojo
    export=exp;
}
declare module "dojox/mdnd/dropMode/DefaultDropMode" {
    var exp: dojox.mdnd.dropMode.DefaultDropMode
    export=exp;
}
declare module "dojox/mdnd/dropMode/OverDropMode" {
    var exp: dojox.mdnd.dropMode.OverDropMode
    export=exp;
}
declare module "dojox/mdnd/dropMode/VerticalDropMode" {
    var exp: dojox.mdnd.dropMode.VerticalDropMode
    export=exp;
}
