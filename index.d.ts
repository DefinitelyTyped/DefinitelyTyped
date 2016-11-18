// Type definitions for Cytoscape.js 2.4.2
// Project: http://js.cytoscape.org/
// Definitions by:  Fabian Schmidt and Fred Eisele <https://github.com/phreed>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// 
// Translation from Objects in help to Typescript interface.
// http://js.cytoscape.org/#notation/functions
//

/**
 * cy   --> Cy.Instance
 *  the core
 * ele  --> Cy.CollectionFirst
 *  a collection of a single element (node or edge)
 * eles --> Cy.Collection
 *  a collection of one or more elements (nodes and edges)
 * node --> Cy.CollectionFirstNode
 *  a collection of a single node
 * nodes -> Cy.CollectionNodes
 *  a collection of one or more nodes
 * edge --> Cy.CollectionFirstEdge
 *  a collection of a single edge
 * edges -> Cy.CollectionEdges
 *  a collection of one or more edges
 * 
 * The library makes a distinction between input and output parameters
 *  due to the dynamic behaviour of the Cytoscape library.
 * 
 * For a input parameter it will always expect:
 *  - Cy.Collection
 *      The input can be any element (node and edge) collection.
 *  - Cy.CollectionNodes
 *      The input must be a node collection.
 *  - Cy.CollectionEdges
 *      The input must be a edge collection.
 *  - Cy.CollectionFirst
 *      The input must be a single element.
 *  - Cy.CollectionFirstNode
 *      The inut must be a single node.
 *  - Cy.CollectionFirstEdge
 *      The input must be a single edge.
 *
 * For a output of a function it will always give:
 *  - Cy.CollectionElements
 *      The output is a collection of node and edge elements OR single element.
 *  - Cy.CollectionEdges
 *      The output is a collection of edge elements OR single edge.
 *  - Cy.CollectionNodes
 *      The output is a collection of node elements OR single node.
 */


declare namespace Cy {
    /**
     * See http://js.cytoscape.org/#selectors for details about writing selectors.
     */
    type Selector = string;

    /**
     * Possbile values are 'additive' or 'single'.
     */
    type SelectionType = string;

    /**
    * Possible values are 'nodes' or 'edges'.
    */
    type ElementGroup = string;

    /**
     * Possible values are 'x' or 'y'.
     */
    type PositionDimension = string;

    /**
     * Usually temp or nonserialisable data can be stored.
     */
    type Scratchpad = any;

    type MinumumSpanningTree = any;

    /**
     * The output is a collection of node and edge elements OR single element.
     */
    interface CollectionElements extends
        CollectionEdges, CollectionNodes, CollectionFirstElement {
        //Intentionally empty.
    }
    /**
     * edges -> Cy.CollectionEdges
     *  a collection of one or more edges
     * 
     * The output is a collection of edge elements OR single edge.
     */
    interface CollectionEdges extends Collection, CollectionFirstEdge,
        CollectionEdgesTraversing { }
    /**
     *  nodes -> Cy.CollectionNodes
     *  a collection of one or more nodes
     * 
     * The output is a collection of node elements OR single node.
     */
    interface CollectionNodes extends Collection, CollectionFirstNode,
        CollectionNodesMetadata, CollectionNodesPosition, CollectionNodesTraversing, CollectionNodesCompound { }

    /**
     * eles --> Cy.Collection
     *  a collection of one or more elements (nodes and edges)
     * 
     * The input can be any element (node and edge) collection.
     */
    interface Collection extends CollectionFirst,
        CollectionManipulation, CollectionEvents, CollectionData, CollectionPosition,
        CollectionLayout, CollectionSelection, CollectionStyle, CollectionAnimation,
        CollectionComparision, CollectionIteration, CollectionBuildingUnion, CollectionAlgorithms { }

    interface CollectionFirstElement extends CollectionFirstEdge, CollectionFirstNode {
        //Intentionally empty.
    }
    /**
     *  edge --> Cy.CollectionFirstEdge
     *  a collection of a single edge
     */
    interface CollectionFirstEdge extends CollectionFirst,
        CollectionFirstEdgeData, CollectionFirstEdgeTraversing { }

    /**
     *  node --> Cy.CollectionFirstNode
     *  a collection of a single node
     */
    interface CollectionFirstNode extends CollectionFirst,
        CollectionFirstNodeMetadata, CollectionFirstNodePosition, CollectionFirstNodeCompound { }

    /**
     * ele  --> Cy.CollectionFirst
     * a collection of a single element (node or edge)
     */
    interface CollectionFirst extends
        CollectionFirstManipulation, CollectionFirstData, CollectionFirstPosition,
        CollectionFirstSelection, CollectionFirstStyle, CollectionFirtsAnimation { }

    /**
     * http://js.cytoscape.org/#collection/graph-manipulation
     */
    interface CollectionManipulation {
        /**
         * Remove the elements from the graph.
         * http://js.cytoscape.org/#eles.remove
         */
        remove(): CollectionElements;

        /**
         * Put removed elements back into the graph.
         * http://js.cytoscape.org/#eles.restore
         */
        restore(): CollectionElements;

        /**
         * Get a new collection containing clones (i.e. copies) of the elements in the calling collection.
         * http://js.cytoscape.org/#eles.clone
         */
        clone(): CollectionElements;
        /**
         * Get a new collection containing clones (i.e. copies) of the elements in the calling collection.
         * http://js.cytoscape.org/#eles.clone
         */
        copy(): CollectionElements;

        /**
         * Effectively move edges to different nodes. The modified (actually new) elements are returned.
         * http://js.cytoscape.org/#eles.move
         */
        move(location: { source?: string, target?: string }): CollectionEdges;
        /**
         * Effectively move nodes to different parent node. The modified (actually new) elements are returned.
         * http://js.cytoscape.org/#eles.move
         */
        move(location: { parent: string }): CollectionNodes;
    }

    /**
     * 
     * http://js.cytoscape.org/#collection/events
     */
    interface CollectionEvents {
        /**
         * http://js.cytoscape.org/#eles.on
         */
        on(events: string, selector: string, data: any, handler: EventHandler): void;
        on(events: string, selector: string, handler: EventHandler): void;
        on(events: string, data: any, handler: EventHandler): void;
        on(events: string, handler: EventHandler): void;
        /**
         * http://js.cytoscape.org/#eles.promiseOn
         * alias: pon
         */
        promiseOn(events: string, selector?: string): Promise<EventHandler>;
        pon(events: string, selector?: string): Promise<EventHandler>;

        /**
         * @param events A space separated list of event names.
         * @param selector [optional] A delegate selector to specify child elements for which the handler is triggered.
         * @param data [optional] A plain object which is passed to the handler in the event object argument.
         * @param function(event) The handler function that is called when one of the specified events occurs. 
         * @param event The event object.
         * http://js.cytoscape.org/#eles.one
         */
        one(events: string, selector: string, data: any, handler: EventHandler): void;
        one(events: string, selector: string, handler: EventHandler): void;
        one(events: string, data: any, handler: EventHandler): void;
        one(events: string, handler: EventHandler): void;
        /**
         * http://js.cytoscape.org/#eles.once
         */
        once(events: string, selector: string, data: any, handler: EventHandler): void;
        once(events: string, selector: string, handler: EventHandler): void;
        once(events: string, data: any, handler: EventHandler): void;
        once(events: string, handler: EventHandler): void;
        /**
         * http://js.cytoscape.org/#eles.off
         * alias unbind, unlisten, removeListener
         */
        off(events: string, selector?: string, handler?: EventHandler): void;
        /**
         * http://js.cytoscape.org/#eles.trigger
         * alias: emit
         */
        trigger(events: string, extra?: string[]): void;
    }

    /**
     * http://js.cytoscape.org/#collection/data
     * 
     * The following fields are immutable:
     * id: The id field is used to uniquely identify an element in the graph.
     * source & target : These fields define an edge's relationship to nodes, and this relationship can not be changed after creation.
     * parent: The parent field defines the parent (compound) node.
     * 
     * 
     */
    interface CollectionData {

        /**
         * Remove developer-defined data associated with the elements.
         * http://js.cytoscape.org/#eles.removeData
         */
        removeData(): CollectionElements;
        /**
         * Remove developer-defined data associated with the elements.
         * 
         * @param names A space-separated list of fields to delete.
         */
        removeData(names: string): CollectionElements;

        /**
         * Remove developer-defined data associated with the elements.
         */
        removeAttr(): CollectionElements;
        /**
         * Remove developer-defined data associated with the elements.
         * 
         * @param names A space-separated list of fields to delete.
         */
        removeAttr(names: string): CollectionElements;

        /**
         * Get an array of the plain JavaScript object representation of all elements in the collection.
         */
        jsons(): string[];
    }
    interface CollectionNodesMetadata {
        //http://js.cytoscape.org/#collection/metadata

        /**
         * Get the maximum degree of the nodes in the collection.
         * 
         * For a node, the degree is the number of edge connections it has. Each time a node is referenced as source or target of an edge in the graph, that counts as an edge connection.
         * 
         * For a set of nodes, the the total degree is the total number of edge connections to nodes in the set.
         * 
         * @param includeLoops A boolean, indicating whether loops are to be included in degree calculations.
         */
        maxDegree(includeLoops: boolean): number;
        /**
         * Get the minimum indegree of the nodes in the collection.
         * 
         * For a node, the indegree is the number of incoming edge connections it has. Each time a node is referred to as target of an edge in the graph, that counts as an incoming edge connection.
         * 
         * For a set of nodes, the the total degree is the total number of edge connections to nodes in the set.
         * 
         * @param includeLoops A boolean, indicating whether loops are to be included in degree calculations.
         */
        minIndegree(includeLoops: boolean): number;
        /**
         * Get the maximum indegree of the nodes in the collection.
         * 
         * For a node, the indegree is the number of incoming edge connections it has. Each time a node is referred to as target of an edge in the graph, that counts as an incoming edge connection.
         * 
         * For a set of nodes, the the total degree is the total number of edge connections to nodes in the set.
         * 
         * @param includeLoops A boolean, indicating whether loops are to be included in degree calculations.
         */
        maxIndegree(includeLoops: boolean): number;
        /**
         * Get the minimum outdegree of the nodes in the collection.
         * 
         * For a node, the outdegree is the number of outgoing edge connections it has. Each time a node is referred to as source of an edge in the graph, that counts as an outgoing edge connection.
         * 
         * For a set of nodes, the the total degree is the total number of edge connections to nodes in the set.
         * 
         * @param includeLoops A boolean, indicating whether loops are to be included in degree calculations.
         */
        minOutdegree(includeLoops: boolean): number;
        /**
         * Get the maximum outdegree of the nodes in the collection.
         * 
         * For a node, the outdegree is the number of outgoing edge connections it has. Each time a node is referred to as source of an edge in the graph, that counts as an outgoing edge connection.
         * 
         * For a set of nodes, the the total degree is the total number of edge connections to nodes in the set.
         * 
         * @param includeLoops A boolean, indicating whether loops are to be included in degree calculations.
         */
        maxOutdegree(includeLoops: boolean): number;
    }
    interface CollectionPosition {
        //http://js.cytoscape.org/#collection/position--dimensions

        /**
         * Get the bounding box of the elements in model coordinates.
         * 
         * @param options An object containing options for the function.
         */
        boundingBox(options: BoundingBoxOptions): { x1: number, x2: number, y1: number, y2: number, w: number, h: number };
        /**
         * Get the bounding box of the elements in model coordinates.
         * 
         * @param options An object containing options for the function.
         */
        boundingbox(options: BoundingBoxOptions): { x1: number, x2: number, y1: number, y2: number, w: number, h: number };

        /**
         * Get the bounding box of the elements in rendered coordinates.
         * 
         * @param options An object containing options for the function.
         */
        renderedBoundingBox(options: BoundingBoxOptions): { x1: number, x2: number, y1: number, y2: number, w: number, h: number };
        /**
         * Get the bounding box of the elements in rendered coordinates.
         * 
         * @param options An object containing options for the function.
         */
        renderedBoundingbox(options: BoundingBoxOptions): { x1: number, x2: number, y1: number, y2: number, w: number, h: number };
    }
    interface CollectionNodesPosition {
        //http://js.cytoscape.org/#collection/position--dimensions

        /**
         * Set the positions functionally.
         * 
         * @param callback A callback function that returns the position to set for each element.
         * i - The index of the element when iterating over the elements in the collection.
         * ele - The element being iterated over for which the function should return a position to set.
         */
        positions(callback: (i: number, ele: CollectionNodes) => Position): CollectionNodes;
        /**
         * Set positions for all nodes based on a single position object.
         * 
         * @param pos An object specifying name-value pairs representing dimensions to set.
         */
        positions(pos: Position): CollectionNodes;

        /**
        * Set the positions functionally.
        * 
        * @param callback A callback function that returns the position to set for each element.
        * i - The index of the element when iterating over the elements in the collection.
        * ele - The element being iterated over for which the function should return a position to set.
        */
        modelPositions(callback: (i: number, ele: CollectionNodes) => Position): CollectionNodes;
        /**
         * Set positions for all nodes based on a single position object.
         * 
         * @param pos An object specifying name-value pairs representing dimensions to set.
         */
        modelPositions(pos: Position): CollectionNodes;

        /**
        * Set the positions functionally.
        * 
        * @param callback A callback function that returns the position to set for each element.
        * i - The index of the element when iterating over the elements in the collection.
        * ele - The element being iterated over for which the function should return a position to set.
        */
        points(callback: (i: number, ele: CollectionNodes) => Position): CollectionNodes;
        /**
         * Set positions for all nodes based on a single position object.
         * 
         * @param pos An object specifying name-value pairs representing dimensions to set.
         */
        points(pos: Position): CollectionNodes;

        /**
        * Allow the user to grab the nodes.
        */
        grabify(): CollectionNodes;

        /**
         * Disallow the user to grab the nodes.
         */
        ungrabify(): CollectionNodes;

        /**
         * Lock the nodes such that their positions can not be changed.
         */
        lock(): CollectionNodes;
        /**
         * Unlock the nodes such that their positions can be changed.
         */
        unlock(): CollectionNodes;
    }
    /**
     * http://js.cytoscape.org/#collection/layout
     */
    interface CollectionLayout {
        /**
        * Run a layout on the elements in the calling collection, algorithmically positioning the nodes.
        * This function is useful for running a layout on a subset of the elements in the graph.
        * 
        * @param options The layout options.
        */
        layout(options: LayoutOptions): CollectionElements;

        /**
         * Get a new layout, which can be used to algorithmically position the nodes in the collection.
         * This function is useful for running a layout on a subset of the elements in the graph, perhaps in parallel to other layouts.
         * 
         * You must specify options.name with the name of the layout you wish to use.
         * 
         * Note: that you must call layout.run() in order for it to affect the graph.
         * 
         * @param options The layout options.
         */
        makeLayout(options: LayoutOptions): LayoutInstance;
        /**
         * Get a new layout, which can be used to algorithmically position the nodes in the collection.
         * This function is useful for running a layout on a subset of the elements in the graph, perhaps in parallel to other layouts.
         * 
         * You must specify options.name with the name of the layout you wish to use.
         * 
         * Note: that you must call layout.run() in order for it to affect the graph.
         * 
         * @param options The layout options.
         */
        createLayout(options: LayoutOptions): LayoutInstance;
    }
    interface CollectionSelection {
        // http://js.cytoscape.org/#collection/selection

        /**
         * Make the elements selected (NB other elements outside the collection are not affected).
         */
        select(): CollectionElements;

        /**
         * Make the elements not selected (NB other elements outside the collection are not affected).
         */
        unselect(): CollectionElements;
        /**
        * Make the elements not selected (NB other elements outside the collection are not affected).
        */
        deselect(): CollectionElements;

        /**
         * Make the selection states of the elements mutable.
         */
        selectify(): CollectionElements;

        /**
         * Make the selection states of the elements immutable.
         */
        unselectify(): CollectionElements;
    }
    /**
     * http://js.cytoscape.org/#collection/style
     */
    interface CollectionStyle {

        /**
         * Add classes to elements.
         * 
         * @param classes A space-separated list of class names to add to the elements.
         */
        addClass(classes: string): CollectionElements;

        /**
         * Remove classes from elements.
         * 
         * @param classes A space-separated list of class names to remove from the elements.
         */
        removeClass(classes: string): CollectionElements;

        /**
         * Toggle whether the elements have the specified classes.
         * 
         * @param classes A space-separated list of class names to toggle on the elements.
         * @param toggle [optional] Instead of automatically toggling, adds the classes on truthy values or removes them on falsey values.
         */
        toggleClass(classes: string, toggle?: boolean): CollectionElements;

        /**
         * Add classes to the elements, and then remove the classes after a specified duration.
         * 
         * @param classes A space-separated list of class names to flash on the elements.
         * @param duration [optional] The duration in milliseconds that the classes should be added on the elements. After the duration, the classes are removed.
         */
        flashClass(classes: string, duration?: number): CollectionElements;


        /**
        * Get a name-value pair object containing visual style properties and their values for the element.
        */
        style(): Css.Node | Css.Edge;
        /**
         * Get a particular style property value.
         * 
         * @param name The name of the visual style property to get.
         */
        style(name: string): Css.Node | Css.Edge;

        /**
         * Get a name-value pair object containing visual style properties and their values for the element.
         */
        css(): Css.Node | Css.Edge;
        /**
         * Get a particular style property value.
         * 
         * @param name The name of the visual style property to get.
         */
        css(name: string): Css.Node | Css.Edge;

        /**
         * Get a name-value pair object containing visual style properties and their values for the element.
         */
        bypass(): Css.Node | Css.Edge;
        /**
         * Get a particular style property value.
         * 
         * @param name The name of the visual style property to get.
         */
        bypass(name: string): Css.Node | Css.Edge;


        /**
         * Set the specified visual style property for the elements.
         * 
         * You should use this function very sparingly, because it overrides the style of an element, despite the state and classes that it has. In general, it's much better to specify a better stylesheet at initialisation that reflects your application state rather than programmatically modifying style.
         * 
         * If you would like to remove a particular overridden style property, set null to it.
         * 
         * @param name The name of the property to set.
         * @param value The value to set to the visual style property.
         */
        style(name: string, value: string): CollectionElements;
        /**
         * Set several visual style properties at once for the elements.
         * 
         * You should use this function very sparingly, because it overrides the style of an element, despite the state and classes that it has. In general, it's much better to specify a better stylesheet at initialisation that reflects your application state rather than programmatically modifying style.
         * 
         * If you would like to remove a particular overridden style property, set null to it.
         * 
         * @param props An object with name-value pairs representing properties to set on the elements.
         */
        style(props: Css.Node | Css.Edge): CollectionElements;

        /**
         * Set the specified visual style property for the elements.
         * 
         * You should use this function very sparingly, because it overrides the style of an element, despite the state and classes that it has. In general, it's much better to specify a better stylesheet at initialisation that reflects your application state rather than programmatically modifying style.
         * 
         * If you would like to remove a particular overridden style property, set null to it.
         * 
         * @param name The name of the property to set.
         * @param value The value to set to the visual style property.
         */
        css(name: string, value: string): CollectionElements;
        /**
         * Set several visual style properties at once for the elements.
         * 
         * You should use this function very sparingly, because it overrides the style of an element, despite the state and classes that it has. In general, it's much better to specify a better stylesheet at initialisation that reflects your application state rather than programmatically modifying style.
         * 
         * If you would like to remove a particular overridden style property, set null to it.
         * 
         * @param props An object with name-value pairs representing properties to set on the elements.
         */
        css(props: Css.Node | Css.Edge): CollectionElements;

        /**
         * Set the specified visual style property for the elements.
         * 
         * You should use this function very sparingly, because it overrides the style of an element, despite the state and classes that it has. In general, it's much better to specify a better stylesheet at initialisation that reflects your application state rather than programmatically modifying style.
         * 
         * If you would like to remove a particular overridden style property, set null to it.
         * 
         * @param name The name of the property to set.
         * @param value The value to set to the visual style property.
         */
        bypass(name: string, value: string): CollectionElements;
        /**
         * Set several visual style properties at once for the elements.
         * 
         * You should use this function very sparingly, because it overrides the style of an element, despite the state and classes that it has. In general, it's much better to specify a better stylesheet at initialisation that reflects your application state rather than programmatically modifying style.
         * 
         * If you would like to remove a particular overridden style property, set null to it.
         * 
         * @param props An object with name-value pairs representing properties to set on the elements.
         */
        bypass(props: Css.Node | Css.Edge): CollectionElements;

        /**
         * Removes all overridden style of the elements.
         */
        removeStyle(): CollectionElements;
        /**
         * Removes particular overridden style properties of the elements.
         * 
         * @param names A space-separated list of property names for which overridden styles will be removed.
         */
        removeStyle(names: string): CollectionElements;
        /**
         * Removes all overridden style of the elements.
         */
        removeCss(): CollectionElements;
        /**
         * Removes particular overridden style properties of the elements.
         * 
         * @param names A space-separated list of property names for which overridden styles will be removed.
         */
        removeCss(names: string): CollectionElements;
        /**
         * Removes all overridden style of the elements.
         */
        removeBypass(): CollectionElements;
        /**
         * Removes particular overridden style properties of the elements.
         * 
         * @param names A space-separated list of property names for which overridden styles will be removed.
         */
        removeBypass(names: string): CollectionElements;
    }
    interface CollectionAnimation {
        // http://js.cytoscape.org/#collection/animation

        /**
         * Animate the elements.
         * 
         * Note that you can specify only one of position and renderedPosition: You can not animate to two positions at once.
         * 
         * @param anis An object containing the details of the animation.
         * position - A position to which the elements will be animated.
         * renderedPosition - A rendered position to which the elements will be  animated.
         * style - An object containing name-value pairs of style properties to animate.
         * @param options An object containing animation options.
         * duration - The duration of the animation in milliseconds.
         * queue - A boolean indicating whether to queue the animation.
         * complete - A function to call when the animation is done.
         * step - A function to call each time the animation steps.
         */
        animate(anis: {
            postion?: Position,
            renderedPosition?: Position,
            style?: Css.Node | Css.Edge
        }, options?: {
            duration?: number,
            queue?: boolean,
            complete?: () => void,
            step?: () => void
        }): CollectionElements;

        /**
         * Add a delay between animations for the elements.
         * 
         * @param duration How long the delay should be in milliseconds.
         * @param complete A function to call when the delay is complete.
         */
        delay(duration: number, complete?: () => void): CollectionElements;

        /**
         * Stop all animations that are currently running.
         * 
         * @param clearQueue A boolean, indicating whether the queue of animations should be emptied.
         * @param jumpToEnd A boolean, indicating whether the currently-running animations should jump to their ends rather than just stopping midway.
         */
        stop(clearQueue?: boolean, jumpToEnd?: boolean): CollectionElements;

        /**
         * Remove all queued animations for the elements.
         */
        clearQueue(): CollectionElements;
    }
    interface CollectionComparision {
        // http://js.cytoscape.org/#collection/comparison

        /**
        * Determine whether this collection contains exactly the same elements as another collection.
        * 
        * @param eles The other elements to compare to.
        */
        same(eles: Collection): boolean;

        /**
         * Determine whether this collection contains any of the same elements as another collection.
         * 
         * @param eles The other elements to compare to.
         */
        anySame(eles: Collection): boolean;

        /**
         * Determine whether all elements in the specified collection are in the neighbourhood of the calling collection.
         * 
         * @param eles The other elements to compare to.
         */
        allAreNeighbors(eles: Collection): boolean;
        /**
         * Determine whether all elements in the specified collection are in the neighbourhood of the calling collection.
         * 
         * @param eles The other elements to compare to.
         */
        allAreNeighbours(eles: Collection): boolean;

        /**
         * Determine whether any element in this collection matches a selector.
         * 
         * @param selector The selector to match against.
         */
        is(selector: Selector): boolean;

        /**
         * Determine whether all elements in the collection match a selector.
         * @param selector The selector to match against.
         */
        allAre(selector: Selector): boolean;

        /**
         * Determine whether any element in this collection satisfies the specified test function.
         * 
         * @param test The test function that returns truthy values for elements that satisfy the test and falsey values for elements that do not satisfy the test.
         * ele - The current element.
         * i - The index of the current element.
         * eles - The collection of elements being tested.
         * @param thisArg [optional] The value for this within the test function.
         */
        some(test: (ele: CollectionElements, i: number, eles: CollectionElements) => boolean, thisArg?: any): boolean;

        /**
         * Determine whether all elements in this collection satisfy the specified test function.
         * 
         * @param test The test function that returns truthy values for elements that satisfy the test and falsey values for elements that do not satisfy the test.
         * ele - The current element.
         * i - The index of the current element.
         * eles - The collection of elements being tested.
         * @param thisArg [optional] The value for this within the test function.
         */
        every(test: (ele: CollectionElements, i: number, eles: CollectionElements) => boolean, thisArg?: any): boolean;
    }
    interface CollectionIteration {
        // http://js.cytoscape.org/#collection/iteration

        /**
         * Get the number of elements in the collection.
         */
        size(): number;
        /**
         * Get the number of elements in the collection.
         */
        length: number;

        /**
         * Get whether the collection is empty, meaning it has no elements.
         */
        empty(): boolean;
        /**
         * Get whether the collection is nonempty, meaning it has elements.
         */
        nonempty(): boolean;

        /**
         * Iterate over the elements in the collection.
         * 
         * Note that although this function is convenient in some cases, it is less efficient than making your own loop.
         * 
         * @param each The function executed each iteration.
         * i - The index of the element in the collection.
         * ele - The element at the current index.
         */
        each(each: (i: number, ele: CollectionElements) => void): void;

        /**
         * Iterate over the elements in the collection using an implementation like the native array function namesake.
         * 
         * This function behaves like Array.prototype.forEach() with minor changes for convenience:
         * You can exit the iteration early by returning false in the iterating function. The Array.prototype.forEach() implementation does not support this, but it is included anyway on account of its utility.
         * 
         * @param each The function executed each iteration.
         * ele - The current element.
         * i - The index of the current element.
         * eles - The collection of elements being iterated.
         * @param thisArg [optional] The value for this within the iterating function.
         */
        forEach(each: (ele: CollectionElements, i: number, eles: CollectionElements) => void | boolean, thisArg?: any): void;

        /**
         * Get an element at a particular index in the collection.
         * 
         * You may use eles[i] in place of eles.eq(i) as a more performant alternative.
         * 
         * @param index The index of the element to get.
         */
        eq(index: number): CollectionElements;
        /**
        * Get an element at a particular index in the collection.
        * 
        * @param index The index of the element to get.
        */
        [index: number]: CollectionElements;
        /**
         * Get the first element in the collection.
         */
        first(): CollectionElements;
        /**
         * Get the last element in the collection.
         */
        last(): CollectionElements;

        /**
         * Get a subset of the elements in the collection based on specified indices.
         * 
         * @param start [optional] An integer that specifies where to start the selection. The first element has an index of 0. Use negative numbers to select from the end of an array.
         * @param end [optional] An integer that specifies where to end the selection. If omitted, all elements from the start position and to the end of the array will be selected. Use negative numbers to select from the end of an array.
         */
        slice(start?: number, end?: number): CollectionElements;
    }
    interface CollectionBuildingUnion {
        /**
        * Get a new collection, resulting from adding the collection with another one
        * 
        * @param eles The elements to add.
        */
        (eles: Collection): CollectionElements;
        /**
         * Get a new collection, resulting from adding the collection with another one
         * 
         * @param elesArray An array of elements to add.
         */
        (elesArray: Collection[]): CollectionElements;
        /**
         * Get a new collection, resulting from adding the collection with another one
         * 
         * @param selector Elements in the graph matching this selector are added.
         */
        (selector: Selector): CollectionElements;
    }
    interface CollectionBuildingDifference {
        /**
        * Get a new collection, resulting from the collection without some specified elements.
        * 
        * @param eles The elements that will not be in the resultant collection.
        */
        (eles: Collection): CollectionElements;
        /**
         * Get a new collection, resulting from the collection without some specified elements.
         * 
         * @param selector Elements from the calling collection matching this selector will not be in the resultant collection.
         */
        (selector: Selector): CollectionElements;
    }
    interface CollectionBuildingIntersection {
        /**
        * Get the elements in both this collection and another specified collection.
        * 
        * @param eles The elements to intersect with.
        */
        (eles: Collection): CollectionElements;
        /**
         * Get the elements in both this collection and another specified collection.
         * 
         * @param selector A selector representing the elements to intersect with. All elements in the graph matching the selector are used as the passed collection.
         */
        (selector: Selector): CollectionElements;
    }
    interface CollectionSymmetricDifference {
        /**
        * Get the elements that are in the calling collection or the passed collection but not in both.
        * 
        * @param eles The elements to apply the symmetric difference with.
        */
        (eles: Collection): CollectionElements;
        /**
         * Get the elements that are in the calling collection or the passed collection but not in both.
         * 
         * @param selector A selector representing the elements to apply the symmetric difference with. All elements in the graph matching the selector are used as the passed collection.
         */
        (selector: Selector): CollectionElements;
    }
    interface CollectionBuildingUnion {
        // http://js.cytoscape.org/#collection/building--filtering

        union: CollectionBuildingUnion;
        //[index: "u"]: CollectionBuildingUnion;
        add: CollectionBuildingUnion;
        //[index: "+"]: CollectionBuildingUnion;
        or: CollectionBuildingUnion;
        //[index: "|"]: CollectionBuildingUnion;

        difference: CollectionBuildingDifference;
        //[index: "\\"]: CollectionBuildingDifference;
        not: CollectionBuildingDifference;
        //[index: "!"]: CollectionBuildingDifference;
        relativeComplement(): CollectionBuildingDifference;
        //[index: "-"]: CollectionBuildingDifference;

        /**
         * Get all elements in the graph that are not in the calling collection.
         */
        absoluteComplement(): CollectionElements;
        /**
         * Get all elements in the graph that are not in the calling collection.
         */
        abscomp(): CollectionElements;
        /**
         * Get all elements in the graph that are not in the calling collection.
         */
        complement(): CollectionElements;

        intersection: CollectionBuildingIntersection;
        intersect: CollectionBuildingIntersection;
        and: CollectionBuildingIntersection;
        //[index: "n"]: CollectionBuildingIntersection;
        //[index: "&"]: CollectionBuildingIntersection;
        //[index: "."]: CollectionBuildingIntersection;

        symmetricDifference: CollectionSymmetricDifference;
        symdiff: CollectionSymmetricDifference;
        xor: CollectionSymmetricDifference;
        //[index: "^"]: CollectionSymmetricDifference;
        //[index: "(+)"]: CollectionSymmetricDifference;
        //[index: "(-)"]: CollectionSymmetricDifference;

        //[index: string]: CollectionBuildingDifference |CollectionBuildingUnion | CollectionBuildingIntersection | CollectionSymmetricDifference;

        /**
        * Perform a traditional left/right diff on the two collections.
        * 
        * @param eles The elements on the right side of the diff.
        */
        diff(eles: Collection): CollectionElements;
        /**
         * Perform a traditional left/right diff on the two collections.
         * 
         * @param selector A selector representing the elements on the right side of the diff. All elements in the graph matching the selector are used as the passed collection.
         * @return This function returns a plain object of the form { left, right, both } where
         * left - is the set of elements only in the calling (i.e. left) collection,
         * right - is the set of elements only in the passed (i.e. right) collection, and
         * both - is the set of elements in both collections.
         */
        diff(selector: Selector): {
            left: CollectionElements,
            right: CollectionElements,
            both: CollectionElements
        };

        /**
         * Get a new collection containing elements that are accepted by the specified filter.
         * 
         * @param selector The selector to match against.
         */
        filter(selector: Selector): CollectionElements;
        /**
         * Get a new collection containing elements that are accepted by the specified filter.
         * 
         * @filter selector The filter function that returns true for elements to include.
         * i - The index of the current element being considered.
         * ele - The element being considered.
         */
        filter(filter: (i: number, ele: CollectionElements) => boolean): CollectionElements;
        /**
         * Get the nodes that match the specified selector.
         * 
         * @param selector The selector to match against.
         */
        nodes(selector: Selector): CollectionNodes;
        /**
         * Get the edges that match the specified selector.
         * 
         * @param selector The selector to match against.
         */
        edges(selector: Selector): CollectionEdges;

        /**
         * Get a new collection containing elements that are accepted by the specified filter, using an implementation like the standard array namesake.
         * 
         * @param filter The filter function that returns truthy values for elements to include and falsey values for elements to exclude.
         * ele - The current element.
         * i - The index of the current element.
         * eles - The collection of elements being filtered.
         * @param thisArg [optional] The value for this within the iterating function.
         */
        filterFn(filter: (ele: CollectionElements, i: number, eles: CollectionElements) => boolean, thisArg?: any): CollectionElements;
        /**
         * Get a new collection containing elements that are accepted by the specified filter, using an implementation like the standard array namesake.
         * 
         * @param filter The filter function that returns truthy values for elements to include and falsey values for elements to exclude.
         * ele - The current element.
         * i - The index of the current element.
         * eles - The collection of elements being filtered.
         * @param thisArg [optional] The value for this within the iterating function.
         */
        fnFilter(filter: (ele: CollectionElements, i: number, eles: CollectionElements) => boolean, thisArg?: any): CollectionElements;
        /**
         * Get a new collection containing elements that are accepted by the specified filter, using an implementation like the standard array namesake.
         * 
         * @param filter The filter function that returns truthy values for elements to include and falsey values for elements to exclude.
         * ele - The current element.
         * i - The index of the current element.
         * eles - The collection of elements being filtered.
         * @param thisArg [optional] The value for this within the iterating function.
         */
        stdFilter(filter: (ele: CollectionElements, i: number, eles: CollectionElements) => boolean, thisArg?: any): CollectionElements;

        /**
         * Get a new collection containing the elements sorted by the specified comparison function.
         * 
         * @param sort The sorting comparison function that returns a negative number for ele1 before ele2, 0 for ele1 same as ele2, or a positive number for ele1 after ele2.
         */
        sort(sort: (ele1: CollectionElements, ele2: CollectionElements) => number): CollectionElements;

        /**
         * Get an array containing values mapped from the collection.
         * 
         * @param fn The function that returns the mapped value for each element.
         * ele - The current element.
         * i - The index of the current element.
         * eles - The collection of elements being mapped.
         * @param thisArg [optional] The value for this within the iterating function.
         */
        map(fn: (ele: CollectionElements, i: number, eles: CollectionElements) => any, thisArg?: any): any[];

        /**
         * Find a minimum value in a collection.
         * 
         * @param fn The function that returns the value to compare for each element.
         * ele - The current element.
         * i - The index of the current element.
         * eles - The collection of elements being mapped.
         * @param thisArg [optional] The value for this within the iterating function.
         */
        min(fn: (ele: CollectionElements, i: number, eles: CollectionElements) => any, thisArg?: any): {
            /**
             * The minimum value found.
             */
            value: any,
            /**
             * The element that corresponds to the minimum value.
             */
            ele: CollectionElements
        };

        /**
         * Find a maximum value and the corresponding element.
         * 
         * @param fn The function that returns the value to compare for each element.
         * ele - The current element.
         * i - The index of the current element.
         * eles - The collection of elements being mapped.
         * @param thisArg [optional] The value for this within the iterating function.
         */
        max(fn: (ele: CollectionElements, i: number, eles: CollectionElements) => any, thisArg?: any): {
            /**
             * The maximum value found.
             */
            value: any,
            /**
             * The element that corresponds to the maximum value.
             */
            ele: CollectionElements
        };
    }
    interface CollectionTraversing {
        // http://js.cytoscape.org/#collection/traversing

        /**
        * Get the open neighbourhood of the elements.
        * 
        * The neighbourhood returned by this function is a bit different than the traditional definition of a "neighbourhood": This returned neighbourhood includes the edges connecting the collection to the neighbourhood. This gives you more flexibility.
        * An open neighbourhood is one that does not include the original set of elements. If unspecified, a neighbourhood is open by default.
        * 
        * @param selector [optional] An optional selector that is used to filter the resultant collection.
        */
        neighborhood(selector?: Selector): CollectionElements;
        /**
         * Get the open neighbourhood of the elements.
         * 
         * The neighbourhood returned by this function is a bit different than the traditional definition of a "neighbourhood": This returned neighbourhood includes the edges connecting the collection to the neighbourhood. This gives you more flexibility.
         * An open neighbourhood is one that does not include the original set of elements. If unspecified, a neighbourhood is open by default.
         * 
         * @param selector [optional] An optional selector that is used to filter the resultant collection.
         */
        openNeighborhood(selector?: Selector): CollectionElements;
        /**
         * Get the closed neighbourhood of the elements.
         * 
         * The neighbourhood returned by this function is a bit different than the traditional definition of a "neighbourhood": This returned neighbourhood includes the edges connecting the collection to the neighbourhood. This gives you more flexibility.
         * A closed neighbourhood is one that does include the original set of elements.
         * 
         * @param selector [optional] An optional selector that is used to filter the resultant collection.
         */
        closedNeighborhood(selector?: Selector): CollectionElements;
    }
    interface CollectionEdgesTraversing {
        // http://js.cytoscape.org/#collection/traversing

        /**
         * Get the nodes connected to the edges in the collection
         * 
         * @param selector [optional] An optional selector that is used to filter the resultant collection.
         */
        connectedNodes(selector?: Selector): CollectionNodes;

        /**
         * Get source nodes connected to the edges in the collection.
         * 
         * @param selector [optional] An optional selector that is used to filter the resultant collection.
         */
        sources(selector?: Selector): CollectionNodes;

        /**
         * Get target nodes connected to the edges in the collection.
         * 
         * @param selector [optional] An optional selector that is used to filter the resultant collection.
         */
        targets(selector?: Selector): CollectionNodes;

        /**
         * Get edges parallel to those in the collection.
         * 
         * Two edges are said to be parallel if they connect the same two nodes. Any two parallel edges may connect nodes in the same direction, in which case the edges share the same source and target. They may alternatively connect nodes in the opposite direction, in which case the source and target are reversed in the second edge.
         * That is:
         * - edge1.source().id() === edge2.source().id() 
         *   && edge1.target().id() === edge2.target().id()
         * OR
         * - edge1.source().id() === edge2.target().id() 
         *   && edge1.target().id() === edge2.source().id()
         * 
         * @param selector [optional] An optional selector that is used to filter the resultant collection.
         */
        parallelEdges(selector?: Selector): CollectionEdges;

        /**
         * Get edges codirected to those in the collection.
         * 
         * Two edges are said to be codirected if they connect the same two nodes in the same direction: The edges have the same source and target.
         * That is:
         * - edge1.source().id() === edge2.source().id() 
         *   && edge1.target().id() === edge2.target().id()
     
         * @param selector [optional] An optional selector that is used to filter the resultant collection.
         */
        codirectedEdges(selector?: Selector): CollectionEdges;
    }
    interface CollectionNodesTraversing {
        // http://js.cytoscape.org/#collection/traversing

        /**
         * Get the edges connecting the collection to another collection. Direction of the edges does not matter.
         * 
         * @param eles The other collection.
         */
        edgesWith(eles: Collection): CollectionEdges;
        /**
         * Get the edges connecting the collection to another collection. Direction of the edges does not matter.
         * 
         * @param selector The other collection, specified as a selector which is matched against all elements in the graph.
         */
        edgesWith(selector: Selector): CollectionEdges;

        /**
         * Get the edges coming from the collection (i.e. the source) going to another collection (i.e. the target).
         * 
         * @param eles The other collection.
         */
        edgesTo(eles: Collection): CollectionEdges;
        /**
         * Get the edges coming from the collection (i.e. the source) going to another collection (i.e. the target).
         * 
         * @param selector The other collection, specified as a selector which is matched against all elements in the graph.
         */
        edgesTo(selector: Selector): CollectionEdges;

        /**
         * Get the edges connected to the nodes in the collection.
         * 
         * @param selector [optional] An optional selector that is used to filter the resultant collection.
         */
        connectedEdges(selector?: Selector): CollectionEdges;

        /**
         * From the set of calling nodes, get the nodes which are leaves (i.e. no outgoing edges, as in a directed acyclic graph).
         * 
         * @param selector [optional] An optional selector that is used to filter the resultant collection.
         */
        leaves(selector?: Selector): CollectionNodes;

        /**
         * Get edges (and their targets) coming out of the nodes in the collection.
         * 
         * @param selector [optional] An optional selector that is used to filter the resultant collection.
         */
        outgoers(selector?: Selector): CollectionEdges;

        /**
         * Recursively get edges (and their targets) coming out of the nodes in the collection (i.e. the outgoers, the outgoers' outgoers, ...).
         * 
         * @param selector [optional] An optional selector that is used to filter the resultant collection.
         */
        successors(selector?: Selector): CollectionEdges;

        /**
         * Get edges (and their sources) coming into the nodes in the collection.
         * 
         * @param selector [optional] An optional selector that is used to filter the resultant collection.
         */
        incomers(selector?: Selector): CollectionEdges;

        /**
         * Recursively get edges (and their sources) coming into the nodes in the collection (i.e. the incomers, the incomers' incomers, ...).
         * 
         * @param selector [optional] An optional selector that is used to filter the resultant collection.
         */
        predecessors(selector?: Selector): CollectionEdges;
    }

    type WeightFn = (edge: CollectionEdges) => number;

    interface SearchBreadthFirstOptions {
        /**
         * The root nodes (selector or collection) to start the search from.
         */
        roots: Selector | Collection;
        /**
         * A handler function that is called when a node is visited in the search. The handler returns true when it finds the desired node, and it returns false to cancel the search.
         * i - The index indicating this node is the ith visited node.
         * depth - How many edge hops away this node is from the root nodes.
         * v - The current node.
         * e - The edge connecting the previous node to the current node.
         * u - The previous node.
         */
        visit?: (i: number, depth: number, v: CollectionNodes, e: CollectionEdges, u: CollectionNodes) => boolean;
        /**
         * A boolean indicating whether the algorithm should only go along edges from source to target (default false).
         */
        directed?: boolean;
    }
    interface SearchBreadthFirstResult {
        /**
         * The path of the search.
         * - The path returned includes edges such that if path[i] is a node, then path[i - 1] is the edge used to get to that node.
         */
        path: CollectionElements;
        /**
         * The node found by the search
         * - If no node was found, then found is empty.
         * - If your handler function returns false, then the only the path up to that point is returned.
         */
        found: CollectionNodes;
    }
    /**
     * http://js.cytoscape.org/#eles.dijkstra
     */
    interface SearchDijkstraOptions {
        /**
         * The root node (selector or collection) where the algorithm starts.
         */
        root: Selector | Collection;

        /**
         * A function that returns the positive numeric weight for this edge.
         * 
         * If no weight function is defined, a constant weight of 1 is used for each edge.
         */
        weight?: WeightFn;

        /**
         * A boolean indicating whether the algorithm should only go along edges from source to target (default false).
         */
        directed?: boolean;
    }
    /**
     * http://js.cytoscape.org/#eles.dijkstra
     */
    interface SearchDijkstraResult {
        /**
         * Returns the distance from the source node to node.
         */
        distanceTo: (node: CollectionFirstNode) => number;

        /**
         * Returns a collection containing the shortest path from the source node to node.
         * The path starts with the source node and includes the edges between the nodes in the path such that if pathTo(node)[i] is an edge, then pathTo(node)[i-1] is the previous node in the path and pathTo(node)[i+1] is the next node in the path.
         */
        pathTo: (node: CollectionFirstNode) => Collection;
    }
    /**
     * http://js.cytoscape.org/#eles.aStar
     */
    interface SearchAStarOptions {
        root: Selector | Collection;
        goal: Selector | Collection;
        weight?: WeightFn;
        heuristic?: (node: CollectionNodes) => number;
        directed?: boolean;
    }
    /**
     * http://js.cytoscape.org/#eles.aStar
     */
    interface SearchAStarResult {
        found: boolean;
        distance: number;
        path: Collection;
    }

    /**
     * http://js.cytoscape.org/#eles.floydWarshall
     */
    interface SearchFloydWarshallOptions {
        weight: WeightFn;
        directed?: boolean;
    }
    /**
     * http://js.cytoscape.org/#eles.floydWarshall
     */
    interface SearchFloydWarshallResult {
        /**
       * Returns the distance from the source node to node.
       */
        distance: (fromNode: CollectionFirstNode | Selection, toNode: CollectionFirstNode | Selection) => number;

        /**
         * Returns a collection containing the shortest path from the source node to node.
         * The path starts with the source node and includes the edges between the nodes in the path such that if pathTo(node)[i] is an edge, then pathTo(node)[i-1] is the previous node in the path and pathTo(node)[i+1] is the next node in the path.
         */
        path: (fromNode: CollectionFirstNode | Selection, toNode: CollectionFirstNode | Selection) => Collection;
    }


    /**
     * http://js.cytoscape.org/#eles.bellmanFord
     */
    interface SearchBellmanFordOptions {
        /**
        The root node (selector or collection) where the search starts.
        */
        "root": any;
        /**
         * A function that returns the positive numeric weight for this edge.
        */
        "weight"?: WeightFn;
        /**
         * Indicating whether the algorithm should only go along 
         * edges from source to target (default false).
         */
        "directed": boolean;
    }
    /**
     * http://js.cytoscape.org/#eles.bellmanFord
     */
    interface SearchBellmanFordResult {
        /** 
         * function that computes the shortest path from root node to the argument node
         * (either objects or selector string) 
        */
        pathTo: (node: CollectionFirstNode | Selection) => Collection;

        /**
         *  function that computes the shortest distance from root node to argument node
         * (either objects or selector string) 
         * */
        distanceTo: (node: CollectionFirstNode | Selection) => number;

        /* true/false. If true, pathTo and distanceTo will be undefined */
        hasNegativeWeightCycle: boolean;
    }

    /**
     * http://js.cytoscape.org/#eles.kruskal
     */
    type SearchKruskalOptions = WeightFn;
    /**
     * http://js.cytoscape.org/#eles.kruskal
     */
    type SearchKruskalResult = MinumumSpanningTree;

    /**
     * http://js.cytoscape.org/#eles.kargerStein
     */
    interface SearchKargerSteinOptions {
        /**
         * 
         */
    }
    /**
     * http://js.cytoscape.org/#eles.kargerStein
     */
    interface SearchKargerSteinResult {
        /** Collection of edges that are in the cut */
        cut: any;
        /** Collection of nodes that are in the first partition */
        partition1: any;
        /** Collection of nodes that are in the second partition */
        partition2: any;
    }

    /**
     * http://js.cytoscape.org/#eles.pageRank
     */
    interface SearchPageRankOptions {
        /** Numeric parameter for the algorithm. */
        "dampingFactor"?: number;
        /** Numeric parameter that represents the required precision. */
        "precision": number;
        /** Maximum number of iterations to perform. */
        "iterations"?: number;
    }
    /**
     * http://js.cytoscape.org/#eles.pageRank
     */
    interface SearchPageRankResult {
        /**
         * function that computes the rank of a given node 
         * (either object or selector string) 
         */
        "rank": (node: CollectionFirstElement) => number;
    }

    /**
     * http://js.cytoscape.org/#eles.degreeCentrality
     */
    interface SearchDegreeCentralityOptions extends SearchDegreeCentralityNormalizedOptions {
        /**
         * The root node (selector or collection) for which 
         * the centrality calculation is made.
         */
        "root": any;
    }
    /**
     * For options.directed: false, this function returns an object of the following form:
     */
    interface SearchDegreeCentralityUndirectedResult {
        /* the degree centrality of the root node */
        "degree": number;
    }
    /**
     * For options.directed: true, this function returns an object of the following form:
     */
    interface SearchDegreeCentralityDirectedResult {
        /* the indegree centrality of the root node */
        "indegree": number;
        /* the outdegree centrality of the root node */
        "outdegree": number;
    }

    /**
     * 
     */
    interface SearchDegreeCentralityNormalizedOptions {
        /** function(edge) [optional] A function that returns the weight for this edge. */
        "weight"?: WeightFn;
        /** The alpha value for the centrality calculation, ranging on [0, 1]. 
         * With value 0 (default), disregards edge weights and solely uses 
         * number of edges in the centrality calculation. 
         * With value 1, disregards number of edges and solely uses 
         * the edge weights in the centrality calculation. */
        "alpha"?: number;
        /** 
         * A boolean indicating whether the directed indegree 
         * and outdegree centrality is calculated (true) or 
         * whether the undirected centrality is calculated (false, default).
         */
        "directed"?: boolean;
    }


    /**
     * http://js.cytoscape.org/#eles.closenessCentrality
     */
    interface SearchClosenessCentralityOptions extends
        SearchClosenessCentralityNormalizedOptions {
        /**
         * The root node (selector or collection) for which 
         * the centrality calculation is made.
         */
        "root": any;
    }
    /**
     * http://js.cytoscape.org/#eles.closenessCentrality
     */
    type SearchClosenessCentralityResult = number;

    /**
     * http://js.cytoscape.org/#eles.closenessCentralityNormalized
     */
    interface SearchClosenessCentralityNormalizedOptions {
        /**
         * A function that returns the weight for this edge.
         */
        "weight"?: WeightFn;
        /**
         * A boolean indicating whether the algorithm 
         * operates on edges in a directed manner from 
         * source to target (true) or whether the algorithm 
         * operates in an undirected manner (false, default).
         */
        "directed"?: boolean;
        /**
         * A boolean indicating whether the algorithm 
         * calculates the harmonic mean (true, default) 
         * or the arithmetic mean (false) of distances. 
         * The harmonic mean is very useful for graphs 
         * that are not strongly connected.
         */
        "harmonic"?: boolean;
    }
    /**
     * 
     */
    interface SearchClosenessCentralityNormalizedResult {
        /**
         * returns the normalised closeness centrality of the specified node
         */
        (node: CollectionFirstNode): number;
    }

    /**
     * http://js.cytoscape.org/#eles.betweennessCentrality
     */
    interface SearchBetweennessCentralityOptions {
        /**
         * A function that returns the weight for this edge.
         */
        "weight"?: WeightFn;
        /**
         * A boolean indicating whether the algorithm 
         * operates on edges in a directed manner from 
         * source to target (true) or whether the algorithm 
         * operates in an undirected manner (false, default).
         */
        "directed"?: boolean;
    }
    /**
     * http://js.cytoscape.org/#eles.betweennessCentrality
     */
    interface SearchBetweennessCentralityResult {
        /* returns the betweenness centrality of the specified node */
        "betweenness": (node: any) => number;

        /* returns the normalised betweenness centrality of the specified node */
        "betweennessNormalized": (node: any) => number;
    }

    /**
     * 
     */
    interface SearchOptions {
        /**
         * 
         */
    }
    /**
     * 
     */
    interface SearchResult {
        /**
         * 
         */
    }

    /**
     * 
     */
    interface SearchOptions {
        /**
         * 
         */
    }
    /**
     * 
     */
    interface SearchResult {
        /**
         * 
         */
    }

    /**
     * 
     */
    interface SearchOptions {
        /**
         * 
         */
    }
    /**
     * 
     */
    interface SearchResult {
        /**
         * 
         */
    }



    /**
     * http://js.cytoscape.org/#collection/algorithms
     */
    interface CollectionAlgorithms {

        /**
         * Perform a breadth-first search within the elements in the collection.
         * 
         * Note that this function performs a breadth-first search on only the subset of the graph in the calling collection.
         */
        breadthFirstSearch(options: SearchBreadthFirstOptions): SearchBreadthFirstResult;

        /**
         * Perform a breadth-first search within the elements in the collection.
         * 
         * Note that this function performs a breadth-first search on only the subset of the graph in the calling collection.
         */
        bfs(options: SearchBreadthFirstOptions): SearchBreadthFirstResult;

        /**
         * Perform a depth-first search within the elements in the collection.
         * 
         * Note that this function performs a depth-first search on only the subset of the graph in the calling collection.
         */
        depthFirstSearch(options: SearchBreadthFirstOptions): SearchBreadthFirstResult;

        /**
         * Perform a depth-first search within the elements in the collection.
         * 
         * Note that this function performs a depth-first search on only the subset of the graph in the calling collection.
         */
        dfs(options: SearchBreadthFirstOptions): SearchBreadthFirstResult;

        /**
         * Perform Dijkstra's algorithm on the elements in the collection. This finds the shortest paths to all other nodes in the collection from the root node.
         * 
         * Note that this function performs Dijkstra's algorithm on only the subset of the graph in the calling collection.
         * http://js.cytoscape.org/#eles.dijkstra
         * 
         */
        dijkstra(options: SearchDijkstraOptions): SearchDijkstraResult;

        /**
         * Perform the A* search algorithm on the elements in the collection. 
         * This finds the shortest path from the root node to the goal node.
         * http://js.cytoscape.org/#eles.aStar
         */
        aStar(options: SearchAStarOptions): SearchAStarResult;

        /**
         * Perform the Bellman-Ford search algorithm on the elements in the collection. 
         * This finds the shortest path from the starting node to all other nodes in the collection.
         * http://js.cytoscape.org/#eles.bellmanFord
         */
        bellmanFord(options: SearchBellmanFordOptions): SearchBellmanFordResult;

        /**
         * Perform Kruskal's algorithm on the elements in the collection, 
         * returning the minimum spanning tree, assuming undirected edges.
         * http://js.cytoscape.org/#eles.kruskal
         */
        Kruskal(options: SearchKruskalOptions): SearchKruskalResult;

        /**
         * Finds the minimum cut in a graph using the Karger-Stein algorithm. 
         * The optimal result is found with a high probability, 
         * but without guarantee.
         * http://js.cytoscape.org/#eles.kargerStein
         */
        kargerStein(options: SearchKargerSteinOptions): SearchKargerSteinResult;
        /**
         * Rank the nodes in the collection using the Page Rank algorithm.
         * http://js.cytoscape.org/#eles.pageRank
         */
        pageRank(options: SearchPageRankOptions): SearchPageRankResult;
        /**
         * Considering only the elements in the calling collection, 
         * calculate the degree centrality of the specified root node.
         * http://js.cytoscape.org/#eles.degreeCentrality
         */
        degreeCentrality(options: SearchDegreeCentralityOptions):
            SearchDegreeCentralityUndirectedResult | SearchDegreeCentralityUndirectedResult;
        /**
         * Considering only the elements in the calling collection, 
         * calculate the normalised degree centrality of the nodes.
         * http://js.cytoscape.org/#eles.degreeCentralityNormalized
         */
        degreeCentralityNormalized(options: SearchDegreeCentralityNormalizedOptions):
            SearchDegreeCentralityUndirectedResult | SearchDegreeCentralityUndirectedResult;
        /**
         * Considering only the elements in the calling collection, 
         * calculate the closeness centrality of the specified root node.
         * http://js.cytoscape.org/#eles.closenessCentrality
         */
        clossenessCentrality(options: SearchClosenessCentralityOptions): SearchClosenessCentralityResult;
        /**
         * Considering only the elements in the calling collection, 
         * calculate the normalised degree centrality of the nodes.
         * http://js.cytoscape.org/#eles.degreeCentralityNormalized
         */
        closenessCentralityNormalized(options: SearchClosenessCentralityNormalizedOptions):
            SearchClosenessCentralityNormalizedResult;
        /**
         * Considering only the elements in the calling collection, 
         * calculate the betweenness centrality of the nodes.
         * http://js.cytoscape.org/#eles.betweennessCentrality
         */
        betweennessCentrality(options: SearchBetweennessCentralityOptions):
            SearchBetweennessCentralityResult;
    }
    interface CollectionNodesCompound {
        // http://js.cytoscape.org/#collection/compound-nodes

        /**
         * Get the compound parent node of each node in the collection.
         * 
         * @param selector [optional] A selector used to filter the resultant collection.
         */
        parent(selector?: Selector): CollectionNodes;

        /**
         * Get all compound ancestor nodes (i.e. parents, parents' parents, etc.) of each node in the collection.
         * 
         * @param selector [optional] A selector used to filter the resultant collection.
         */
        parents(selector?: Selector): CollectionNodes;
        /**
         * Get all compound ancestor nodes (i.e. parents, parents' parents, etc.) of each node in the collection.
         * 
         * @param selector [optional] A selector used to filter the resultant collection.
         */
        ancestors(selector?: Selector): CollectionNodes;

        /**
         * Get all compound ancestors common to all the nodes in the collection, starting with the closest and getting progressively farther.
         * 
         * You can get the closest common ancestor via 
         *   nodes.commonAncestors().first() 
         * and the farthest via 
         *   nodes.commonAncestors().last()
         * , because the common ancestors are in descending order of closeness.
         * 
         * @param selector [optional] A selector used to filter the resultant collection
         */
        commonAncestors(selector?: Selector): CollectionNodes;

        /**
         * Get all orphan (i.e. has no compound parent) nodes in the calling collection.
         * 
         * @param selector [optional] A selector used to filter the resultant collection.
         */
        orphans(selector?: Selector): CollectionNodes;

        /**
         * Get all nonorphan (i.e. has a compound parent) nodes in the calling collection.
         * 
         * @param selector [optional] A selector used to filter the resultant collection.
         */
        nonorphans(selector?: Selector): CollectionNodes;

        /**
         * Get all compound child (i.e. direct descendant) nodes of each node in the collection.
         * 
         * @param selector [optional] A selector used to filter the resultant collection.
         */
        children(selector?: Selector): CollectionNodes;

        /**
         * Get all compound descendant (i.e. children, children's children, etc.) nodes of each node in the collection.
         * 
         * @param selector [optional] A selector used to filter the resultant collection.
         */
        descendants(selector?: Selector): CollectionNodes;

        /**
         * Get all sibling (i.e. same compound parent) nodes of each node in the collection.
         * 
         * @param selector [optional] A selector used to filter the resultant collection.
         */
        siblings(selector?: Selector): CollectionNodes;
    }

    interface CollectionFirstManipulation {
        /**
           * Get whether the element has been removed from the graph.
           * http://js.cytoscape.org/#ele.removed
           */
        removed(): boolean;
        /**
         * Get whether the element is inside the graph (i.e. not removed).
         * http://js.cytoscape.org/#ele.inside
         */
        inside(): boolean;
    }

    /**
     * The following fields are immutable:
     * id : The id field is used to uniquely identify an element in the graph.
     * source & target : These fields define an edge’s relationship to nodes, and this relationship can not be changed after creation.
     * parent : The parent field defines the parent (compound) node.
     * 
     * http://js.cytoscape.org/#collection/data
     */
    interface CollectionFirstData {
        /**
        * Get all data for the element.
        */
        data(): any;
        /**
         * Get a particular data field for the element.
         */
        data(name: string): any;
        /**
         * Set a particular data field for the element.
         */
        data(name: string, value: any): void;
        /**
         * Update multiple data fields at once via an object.
         */
        data(obj: any): void;

        /**
         * Get the entire scratchpad object for the element, where temporary or non-JSON data can be stored. App-level scratchpad data should use namespaces prefixed with underscore, like '_foo'.
         */
        scratch(): Scratchpad;
        /**
         * Get the scratchpad at a particular namespace, where temporary or non-JSON data can be stored. App-level scratchpad data should use namespaces prefixed with underscore, like '_foo'.
         * 
         * @param namespace A namespace string.
         */
        scratch(namespace: string): Scratchpad;
        /**
         * Set the scratchpad at a particular namespace, where temporary or non-JSON data can be stored. App-level scratchpad data should use namespaces prefixed with underscore, like '_foo'.
         * 
         * @param namespace A namespace string.
         * @param value The value to set at the specified namespace.
         */
        scratch(namespace: string, value: any): Scratchpad;

        /**
         * Remove scratchpad data. You should remove scratchpad data only at your own namespaces.
         * 
         * @param namespace A namespace string.
         */
        removeScratch(namespace: string): void;

        /**
         * A shortcut to get the ID of an element.
         */
        id(): string;

        /**
         * Get the element's plain JavaScript object representation.
         */
        json(): string;

        /**
         * Get the group string that defines the type of the element.
         * 
         * The group strings are 'nodes' for nodes and 'edges' for edges. In general, you should be using ele.isEdge() and ele.isNode() instead of ele.group().
         */
        group(): ElementGroup;

        /**
         * Get whether the element is a node.
         */
        isNode(): boolean;

        /**
         * Get whether the element is an edge.
         */
        isEdge(): boolean;
    }
    interface CollectionFirstEdgeData {
        //http://js.cytoscape.org/#collection/data

        /**
         * Get whether the edge is a loop (i.e. source same as target).
         */
        isLoop(): boolean;

        /**
         * Get whether the edge is simple (i.e. source different than target).
         */
        isSimple(): boolean;
    }
    interface CollectionFirstNodeMetadata {
        //http://js.cytoscape.org/#collection/metadata

        /**
         * Get the degree of a node.
         * 
         * For a node, the degree is the number of edge connections it has. Each time a node is referenced as source or target of an edge in the graph, that counts as an edge connection.
         * 
         * @param includeLoops A boolean, indicating whether loops are to be included in degree calculations.
         */
        degree(includeLoops: boolean): number;
        /**
         * Get the indegree of a node.
         * 
         * For a node, the indegree is the number of incoming edge connections it has. Each time a node is referred to as target of an edge in the graph, that counts as an incoming edge connection.
         * 
         * @param includeLoops A boolean, indicating whether loops are to be included in degree calculations.
         */
        indegree(includeLoops: boolean): number;
        /***
         * Get the outdegree of a node.
         * 
         * For a node, the outdegree is the number of outgoing edge connections it has. Each time a node is referred to as source of an edge in the graph, that counts as an outgoing edge connection.
         * 
         * @param includeLoops A boolean, indicating whether loops are to be included in degree calculations.
         */
        outdegree(includeLoops: boolean): number;
    }
    interface CollectionFirstNodePosition {
        //http://js.cytoscape.org/#collection/position--dimensions

        /**
        * Get the (model) position of a node.
        */
        position(): Position;
        /**
         * Get the value of a specified position dimension.
         * 
         * @param dimension The position dimension to get.
         */
        position(dimension: PositionDimension): Position;
        /**
         * Set the value of a specified position dimension.
         * 
         * @param dimension The position dimension to set.
         * @param value The value to set to the dimension.
         */
        position(dimension: PositionDimension, value: number): CollectionNodes;
        /**
         * Set the position using name-value pairs in the specified object.
         * 
         * @param pos An object specifying name-value pairs representing dimensions to set.
         */
        position(pos: Position): CollectionNodes;

        /**
         * Get the (model) position of a node.
         */
        modelPosition(): Position;
        /**
         * Get the value of a specified position dimension.
         * 
         * @param dimension The position dimension to get.
         */
        modelPosition(dimension: PositionDimension): Position;
        /**
         * Set the value of a specified position dimension.
         * 
         * @param dimension The position dimension to set.
         * @param value The value to set to the dimension.
         */
        modelPosition(dimension: PositionDimension, value: number): CollectionNodes;
        /**
         * Set the position using name-value pairs in the specified object.
         * 
         * @param pos An object specifying name-value pairs representing dimensions to set.
         */
        modelPosition(pos: Position): CollectionNodes;

        /**
         * Get the (model) position of a node.
         */
        point(): Position;
        /**
         * Get the value of a specified position dimension.
         * 
         * @param dimension The position dimension to get.
         */
        point(dimension: PositionDimension): Position;
        /**
         * Set the value of a specified position dimension.
         * 
         * @param dimension The position dimension to set.
         * @param value The value to set to the dimension.
         */
        point(dimension: PositionDimension, value: number): CollectionNodes;
        /**
         * Set the position using name-value pairs in the specified object.
         * 
         * @param pos An object specifying name-value pairs representing dimensions to set.
         */
        point(pos: Position): CollectionNodes;

        /**
         * Get the rendered (on-screen) position of a node.
         */
        renderedPosition(): Position;
        /**
         * Get the value of a specified rendered posisition dimension.
         * 
         * @param dimension The position dimension to get.
         */
        renderedPosition(dimension: PositionDimension): number;
        /**
         * Set the value of a specified rendered posisition dimension.
         * 
         * @param dimension The position dimension to get.
         * @param value The value to set to the dimension.
         */
        renderedPosition(dimension: PositionDimension, value: number): CollectionNodes;
        /**
         * Set the rendered position using name-value pairs in the specified object.
         * 
         * @param pos An object specifying name-value pairs representing dimensions to set.
         */
        renderedPosition(pos: Position): CollectionNodes;

        /**
         * Get the rendered (on-screen) position of a node.
         */
        renderedPoint(): Position;
        /**
         * Get the rendered (on-screen) position of a node.
         * 
         * @param dimension The position dimension to get.
         */
        renderedPoint(dimension: PositionDimension): number;
        /**
         * Set the value of a specified rendered posisition dimension.
         * 
         * @param dimension The position dimension to get.
         * @param value The value to set to the dimension.
         */
        renderedPoint(dimension: PositionDimension, value: number): CollectionNodes;
        /**
         * Set the rendered position using name-value pairs in the specified object.
         * 
         * @param pos An object specifying name-value pairs representing dimensions to set.
         */
        renderedPoint(pos: Position): CollectionNodes;

        /**
         * Get the position of a node, relative to its compound parent.
         */
        relativePosition(): Position;
        /**
         * Get the position of a node, relative to its compound parent.
         * 
         * @param dimension The position dimension to get.
         */
        relativePosition(dimension: PositionDimension): number;
        /**
         * Set the value of a specified relative posisition dimension.
         * 
         * @param dimension The position dimension to get.
         * @param value The value to set to the dimension.
         */
        relativePosition(dimension: PositionDimension, value: number): CollectionNodes;
        /**
         * Set the relative position using name-value pairs in the specified object.
         * 
         * @param pos An object specifying name-value pairs representing dimensions to set.
         */
        relativePosition(pos: Position): CollectionNodes;

        /**
         * Get the position of a node, relative to its compound parent.
         */
        relativePoint(): Position;
        /**
         * Get the position of a node, relative to its compound parent.
         * 
         * @param dimension The position dimension to get.
         */
        relativePoint(dimension: PositionDimension): number;
        /**
         * Set the value of a specified relative posisition dimension.
         * 
         * @param dimension The position dimension to get.
         * @param value The value to set to the dimension.
         */
        relativePoint(dimension: PositionDimension, value: number): CollectionNodes;
        /**
         * Set the relative position using name-value pairs in the specified object.
         * 
         * @param pos An object specifying name-value pairs representing dimensions to set.
         */
        relativePoint(pos: Position): CollectionNodes;
    }
    interface CollectionFirstPosition {
        // http://js.cytoscape.org/#collection/position--dimensions

        /**
         * Get the width of the element.
         */
        width(): number;
        /**
         * Get the outer width of the element (includes width & border).
         */
        outerWidth(): number;
        /**
         * Get the width of the element in rendered dimensions.
         */
        renderedWidth(): number;
        /**
         * Get the outer width of the element (includes width & border) in rendered dimensions.
         */
        renderedOuterWidth(): number;

        /**
         * Get the height of the element.
         */
        height(): number;
        /**
         * Get the outer height of the element (includes height & border).
         */
        outerHeight(): number;
        /**
         * Get the height of the element in rendered dimensions.
         */
        renderedHeight(): number;
        /**
         * Get the outer height of the element (includes height & border) in rendered dimensions.
         */
        renderedOuterHeight(): number;

        /**
         * Gets whether the element is active (e.g. on user tap, grab, etc).
         */
        active(): boolean;
    }
    /**
     *  http://js.cytoscape.org/#collection/selection
     */
    interface CollectionFirstSelection {

        /**
         * Get whether the element is selected.
         */
        selected(): boolean;

        /**
         * Get whether the element's selection state is mutable.
         */
        selectable(): boolean;
    }
    /**
     * http://js.cytoscape.org/#collection/style
     */
    interface CollectionFirstStyle {


        /**
         * Get whether an element has a particular class.
         * 
         * @param className The name of the class to test for.
         */
        hasClass(className: string): boolean;

        ///**
        //* Get a name-value pair object containing visual style properties and their values for the element.
        //*/
        //style(): Css.ElementCss;
        ///**
        // * Get a particular style property value.
        // * 
        // * @param name The name of the visual style property to get.
        // */
        //style(name: string): Css.ElementCss;

        ///**
        // * Get a name-value pair object containing visual style properties and their values for the element.
        // */
        //css(): Css.ElementCss;
        ///**
        // * Get a particular style property value.
        // * 
        // * @param name The name of the visual style property to get.
        // */
        //css(name: string): Css.ElementCss;

        ///**
        // * Get a name-value pair object containing visual style properties and their values for the element.
        // */
        //bypass(): Css.ElementCss;
        ///**
        // * Get a particular style property value.
        // * 
        // * @param name The name of the visual style property to get.
        // */
        //bypass(name: string): Css.ElementCss;

        /**
         * Get a name-value pair object containing rendered visual style properties and their values for the element.
         */
        renderedStyle(): Css.Node | Css.Edge;
        /**
         * Get a particular rendered style property value.
         * 
         * @param name The name of the visual style property to get.
         */
        renderedStyle(name: string): Css.Node | Css.Edge;
        /**
         * Get a name-value pair object containing rendered visual style properties and their values for the element.
         */
        renderedCss(): Css.Node | Css.Edge;
        /**
         * Get a particular rendered style property value.
         * 
         * @param name The name of the visual style property to get.
         */
        renderedCss(name: string): Css.Node | Css.Edge;

        /**
         * Get whether the element is visible.
         */
        visible(): boolean;
        /**
         * Get whether the element is hidden.
         */
        hidden(): boolean;

        /**
         * Get the effective opacity of the element (i.e. on-screen opacity), which takes into consideration parent node opacity.
         */
        effectiveOpacity(): number;

        /**
         * Get whether the element's effective opacity is completely transparent, which takes into consideration parent node opacity.
         */
        transparent(): boolean;
    }
    /**
     * http://js.cytoscape.org/#collection/animation
     */
    interface CollectionFirtsAnimation {
        /**
         * Get whether the element is currently being animated.
         */
        animated(): boolean;
    }
    /**
     * http://js.cytoscape.org/#collection/traversing
     */
    interface CollectionFirstEdgeTraversing {
        /**
         * Get source node of this edge.
         * 
         * @param selector [optional] An optional selector that is used to filter the resultant collection.
         */
        source(selector?: Selector): CollectionNodes;

        /**
         * Get target node of this edge.
         * 
         * @param selector [optional] An optional selector that is used to filter the resultant collection.
         */
        target(selector?: Selector): CollectionNodes;
    }
    interface CollectionFirstNodeCompound {
        // http://js.cytoscape.org/#collection/compound-nodes

        /**
         * Get whether the node is a compound parent (i.e. a node containing one or more child nodes)
         */
        isParent(): boolean;

        /**
         * Get whether the node is a compound child (i.e. contained within a node)
         */
        isChild(): boolean;
    }

    interface ElementsDefinition {
        nodes: NodeDefinition[];
        edges: EdgeDefinition[];
    }

    interface ElementDefinition {
        group?: ElementGroup;
        data: NodeDataDefinition | EdgeDataDefinition;
        /**
         * Scratchpad data (usually temp or nonserialisable data)
         */
        scatch?: Scratchpad;
        /**
         * The model position of the node (optional on init, mandatory after)
         */
        position?: Position;
        /**
         * can alternatively specify position in rendered on-screen pixels
         */
        renderedPosition?: Position;
        /**
         * Whether the element is selected (default false)
         */
        selected?: boolean;
        /**
         * Whether the selection state is mutable (default true)
         */
        selectable?: boolean;
        /**
         * When locked a node's position is immutable (default false)
         */
        locked?: boolean;
        /**
         * Wether the node can be grabbed and moved by the user
         */
        grabbable?: boolean;
        /**
         * a space separated list of class names that the element has
         */
        classes?: string;
        style?: CSSStyleDeclaration;
        /**
         * you should only use `style`/`css` for very special cases; use classes instead
         */
        css?: Css.Node | Css.Edge;
    }
    interface ElementDataDefinition {
        /**
         * elided id => autogenerated id
         */
        id?: string;
        position?: Position;
    }
    interface EdgeDefinition extends ElementDefinition {
        data: EdgeDataDefinition;
    }
    interface EdgeDataDefinition extends ElementDataDefinition { /**
         * the source node id (edge comes from this node)
         */
        source: string;
        /**
         * the target node id (edge goes to this node)
         */
        target: string;
    }
    interface NodeDefinition extends ElementDefinition {
        data: NodeDataDefinition;
    }
    interface NodeDataDefinition extends ElementDataDefinition {
        parent?: string;
    }

    /**
     * http://js.cytoscape.org/#cy.style
     */
    interface Stylesheet {
        selector: string;
        css: Css.Node | Css.Edge;
    }

    interface ElementStylesheet extends Stylesheet {
        json(): any;
    }

    /**
     * Style in Cytoscape.js follows CSS conventions as closely as possible. 
     * In most cases, a property has the same name and behaviour as its corresponding CSS namesake. 
     * However, the properties in CSS are not sufficient to specify the style of some parts of the graph. 
     * In that case, additional properties are introduced that are unique to Cytoscape.js.
     * 
     * For simplicity and ease of use, specificity rules are completely ignored in stylesheets. 
     * For a given style property for a given element, the last matching selector wins.
     * 
     * http://js.cytoscape.org/#style
     */
    export namespace Css {

        type Colour = string;

        /**
         * The shape of the node’s body. 
         * Note that each shape fits within the specified width and height, 
         * and so you may have to adjust width and height 
         * if you desire an equilateral shape 
         * (i.e. width !== height for several equilateral shapes).
         * 'polygon' is a custom polygon specified via shape-polygon-points.
         */
        type NodeShape = 'rectangle' | 'roundrectangle' | 'ellipse' | 'triangle'
            | "pentagon" | "hexagon" | "heptagon" | "octagon" | "star"
            | "diamond" | "vee" | "rhomboid" | "polygon";

        /**
        * A space-separated list of numbers ranging on [-1, 1], 
        * representing alternating x and y values (i.e. x1 y1 x2 y2, x3 y3 ...). 
        * This represents the points in the polygon for the node’s shape. 
        * The bounding box of the node is given by (-1, -1), (1, -1), (1, 1), (-1, 1).
        */
        type ShapePolygonPoints = string;

        /**
         * The line style; may be solid, dotted, dashed, or double
         */
        type LineStyle = "solid" | "dotted" | "dashed" | "double";

        /**
         * http://js.cytoscape.org/#style/node-body
         */
        export interface Node extends PaddingNode {
            "label"?: string
            /**
             * The width of the node’s body. 
             * This property can take on the special value label 
             * so the width is automatically based on the node’s label.
             */
            "width"?: number | "label";
            /**
             * The height of the node’s body. 
             * This property can take on the special value label 
             * so the height is automatically based on the node’s label.
             */
            "height"?: number | "label";
            /**
             * The shape of the node’s body.
             */
            "shape"?: NodeShape
            "shape-polygon-points"?: ShapePolygonPoints;

            "opacity"?: number

            "backgroundColor"?: Colour
            /**
             * The colour of the node’s body.
             */
            "background-color"?: Colour
            /**
             * Blackens the node’s body for values from 0 to 1; 
             * whitens the node’s body for values from 0 to -1.
             */
            "background-blacken"?: number
            /**
             * The opacity level of the node’s background colour.
             */
            "background-opacity"?: number
            /**
             * The size of the node’s border.
             */
            "border-width"?: number
            /**
             * The style of the node’s border.
             */
            "border-style"?: LineStyle
            /**
             * The colour of the node’s border.
             */
            "border-color"?: Colour
            /** 
             * The opacity of the node’s border.
             * A value between [0 1].
             */
            "border-opacity"?: number

            "text-opacity"?: number
        }

        /**
         * A padding defines an addition to a node’s dimension. 
         * For example, padding-left adds to a node’s outer (i.e. total) width. 
         * This can be used to add spacing around the label of width: label; height: label; nodes, 
         * or it can be used to add spacing between a compound node parent and its children.
         */
        export interface PaddingNode {
            "padding-left"?: string
            "padding-right"?: string
            "padding-top"?: string
            "padding-bottom"?: string
        }



        // export interface ElementCss extends CSSStyleDeclaration { }

        /**
         * A background image may be applied to a node’s body:
         * 
         * http://js.cytoscape.org/#style/background-image
         */
        export interface BackgroundImage {
            /** 
             * The URL that points to the image that should be used as the node’s background.
             * PNG, JPG, and SVG are supported formats.
             * You may use a data URI to use embedded images, 
             * thereby saving a HTTP request.
             */
            "background-image"?: string;
            /** 
             * The opacity of the background image. [0 1]
             */
            "background-image-opacity"?: number;
            /** 
             * Specifies the width of the image.
             * A percent value (e.g. 50%) may be used to set 
             * the image width relative to the node width.
             * If used in combination with background- fit, 
             * then this value overrides the width of the image 
             * in calculating the fitting — thereby overriding the aspect ratio.
             * The auto value is used by default, which uses the width of the image.
             */
            "background-width"?: number | string;
            /** 
             * Specifies the height of the image.
             * A percent value (e.g. 50%) may be used to set the image 
             * height relative to the node height.
             * If used in combination with background- fit, 
             * then this value overrides the height of the image in calculating 
             * the fitting — thereby overriding the aspect ratio.
             * The auto value is used by default, which uses the height of the image.
             */
            "background-height"?: number | string;
            /** 
             * How the background image is fit to the node; 
             * may be none for original size, 
             * contain to fit inside node, 
             * or cover to cover the node.
             */
            "background-fit"?: "none" | "contain" | "cover";
            /** 
             * Whether to repeat the background image; 
             * may be no-repeat, repeat-x, repeat-y, or repeat.
             */
            "background-repeat"?: "no-repeat" | "repeat-x" | "repeat-y" | "repeat";
            /** 
             * The x position of the background image, 
             * measured in percent(e.g. 50%) or pixels (e.g. 10px).
             */
            "background-position-x"?: number | string;
            /** 
             * The y position of the background image, 
             * measured in percent(e.g. 50%) or pixels (e.g. 10px).
             */
            "background-position-y"?: number | string;
            /** 
             * How background image clipping is handled; 
             * may be node for clipped to node shape or none for no clipping.
             */
            "background-clip"?: "clipped" | "none";
        }

        /**
         * These properties allow you to create pie chart backgrounds on nodes. 
         * Note that 16 slices maximum are supported per node, 
         * so in the properties 1 <= i <= 16. 
         * Of course, you must specify a numerical value for each property in place of i. 
         * Each nonzero sized slice is placed in order of i, 
         * starting from the 12 o’clock position and working clockwise.
         * 
         * You may find it useful to reserve a number to a particular 
         * colour for all nodes in your stylesheet. 
         * Then you can specify values for pie-i-background-size 
         * accordingly for each node via a mapper. 
         * This would allow you to create consistently coloured 
         * pie charts in each node of the graph based on element data.
         * 
         * http://js.cytoscape.org/#style/pie-chart-background
         */
        export interface PieChartBackground {
            /** 
             * The diameter of the pie, measured as a percent of node size (e.g. 100%) or an absolute length (e.g. 25px).
             */
            "pie-size": string;
            /** 
             * The colour of the node’s ith pie chart slice.
             */
            "pie-i-background-color": Colour;
            /** 
             * The size of the node’s ith pie chart slice, measured in percent (e.g. 25% or 25).
             */
            "pie-i-background-size": number;
            /** 
             * The opacity of the node’s ith pie chart slice.
             */
            "pie-i-background-opacity": number;
        }

        export interface Edge extends EdgeLine, EdgeArror { }

        /**
         * These properties affect the styling of an edge’s line:
         * 
         * http://js.cytoscape.org/#style/edge-line
         */
        export interface EdgeLine {
            /** 
             * The width of an edge’s line.
             */
            "width"?: number | "label";
            /** 
             * The curving method used to separate two or more edges between two nodes; 
             * may be 
             *  - haystack (default, very fast, bundled straight edges for which loops and compounds are unsupported), 
             *  - bezier(bundled curved edges), 
             *  - unbundled - bezier(curved edges for use with manual control points), or 
             *  - segments (a series of straight lines).
             * Note that haystack edges work best with ellipse, rectangle, or similar nodes.
             * Smaller node shapes, like triangle, will not be as aesthetically pleasing.
             * Also note that edge arrows are unsupported for haystack edges.
             */
            "curve-style"?: "haystack" | "bezier" | "unbundled" | "segments";
            /** 
             * The colour of the edge’s line.
             */
            "line-color"?: Colour;
            /** 
             * The style of the edge’s line.
             */
            "line-style"?: LineStyle;
        }

        /**
         * For automatic, bundled bezier edges (curve - style: bezier):
         * 
         * http://js.cytoscape.org/#style/bezier-edges
         */
        export interface BezierEdges {
            /** 
             * From the line perpendicular from source to target, 
             * this value specifies the distance between successive bezier edges.
             */
            "control-point-step-size": number;
            /** 
             * A single value that overrides "control-point-step-size" with a manual value.
             * Because it overrides the step size, bezier edges with the same value will overlap.
             * Thus, it’s best to use this as a one- off value for particular edges if need be.
             */
            "control-point-distance": number;
            /** 
             * A single value that weights control points along the line from source to target.
             * The value usually ranges on [0, 1], with 
             * 0 towards the source node and 
             * 1 towards the target node — 
             * but larger or smaller values can also be used.
             */
            "control-point-weight": number;
            /** 
             * With value intersection (default), 
             * the line from source to target for "control-point-weight" is 
             * from the outside of the source node’s shape to the outside of 
             * the target node’s shape.With value node- position, 
             * the line is from the source position to the target position.
             * The "node-position" option makes calculating edge points easier 
             * — but it should be used carefully because you can create invalid 
             * points that intersection would have automatically corrected.
             */
            "edge-distances": number;
        }
        /**
         * Unbundled bezier edges
         * For bezier edges with manual control points (curve - style: unbundled - bezier):
         *  
         * http://js.cytoscape.org/#style/unbundled-bezier-edges
         */
        export interface UnbundledBezierEdges {
            /** 
             * A series of values that specify for each control point the 
             * distance perpendicular to a line formed 
             * from source to target, e.g. -20 20 - 20.
             */
            "control-point-distances": string;
            /** 
             * A series of values that weights control points along 
             * a line from source to target, e.g. 0.25 0.5 0.75.
             * A value usually ranges on [0, 1], with 
             * 0 towards the source node and 
             * 1 towards the target node 
             * — but larger or smaller values can also be used.
             */
            "control-point-weights": string;
            /** 
             * With value intersection (default), 
             * the line from source to target for "control-point-weights" 
             * is from the outside of the source node’s shape to the 
             * outside of the target node’s shape.
             * With value 
             * "node-position", the line is from the source position to the target position.
             * The "node-position" option makes calculating edge points easier 
             * — but it should be used carefully because you can create 
             * invalid points that intersection would have automatically corrected.
             */
            "edge-distances": number;
        }
        /**
         * Haystack edges 
         * Loop edges and compound parent nodes are not supported by haystack edges.
         * Haystack edges are a more performant replacement for plain, straight line edges.
         * 
         * For fast, straight line edges (curve - style: haystack):
         * http://js.cytoscape.org/#style/haystack-edges
         */
        export interface HaystackEdges {
            /** 
             * A value between 0 and 1 inclusive that indicates the relative radius used to position haystack edges on their connected nodes.The outside of the node is at 1, and the centre of the node is at 0.
             */
            "haystack-radius": number;
        }
        /**
         * Segments edges
         * For edges made of several straight lines (curve - style: segments):
         * http://js.cytoscape.org/#style/segments-edges
         */
        export interface SegmentsEdges {
            /** 
             * A series of values that specify for each segment point the distance perpendicular to a line formed from source to target, e.g. -20 20 - 20.
             */
            "segment-distances": string;
            /** 
             * A series of values that weights segment points along a line from source to target, e.g. 0.25 0.5 0.75.A value usually ranges on [0, 1], with 0 towards the source node and 1 towards the target node — but larger or smaller values can also be used.
             */
            "segment-weights": string;
            /** 
             * With value 
             *  * "intersection" (default), the line from source to target 
             *  * for "segment-weights" is from the outside of the source node’s shape to the outside of the target node’s shape.
             *  * With value "node-position", the line is from the source position to the target position.
             * The "node-position" option makes calculating edge points easier 
             * — but it should be used carefully because you can create 
             * invalid points that intersection would have automatically corrected.
             */
            "edge-distances": "intersection" | "segment-weights" | "node-position";
        }
        export type ArrowShape = "tee" | "triangle" | "triangle-tee" |
            "triangle-backcurve" | "square" | "circle" | "diamond" | "none";

        export type ArrowFill = "filled" | "hollow";

        /**
         * Edge arrow 
         *  * <pos>-arrow-color : The colour of the edge’s source arrow.
         *  * <pos>-arrow-shape : The shape of the edge’s source arrow.
         *  * <pos>-arrow-fill : The fill state of the edge’s source arrow.
         * 
         * For each edge arrow property above, replace <pos> with one of
         *  * source : Pointing towards the source node, at the end of the edge.
         *  * mid-source : Pointing towards the source node, at the middle of the edge.
         *  * target : Pointing towards the target node, at the end of the edge.
         *  * mid-target: Pointing towards the target node, at the middle of the edge.
         * 
         * Only mid arrows are supported on haystack edges.
         * http://js.cytoscape.org/#style/edge-arrow
         */
        export interface EdgeArror {
            /** The colour of the edge’s source arrow. */
            "source-arrow-color"?: Colour;
            /** The colour of the edge’s "mid-source" arrow. */
            "mid-source-arrow-color"?: Colour;
            /** The colour of the edge’s target arrow. */
            "target-arrow-color"?: Colour;
            /** The colour of the edge’s "mid-target" arrow. */
            "mid-target-arrow-color"?: Colour;

            /** The shape of the edge’s source arrow. */
            "source-arrow-shape"?: ArrowShape;
            /** The shape of the edge’s mid-source arrow. */
            "mid-source-arrow-shape"?: ArrowShape;
            /** The shape of the edge’s target arrow. */
            "target-arrow-shape"?: ArrowShape;
            /** The shape of the edge’s mid-target arrow. */
            "mid-target-arrow-shape"?: ArrowShape;

            /** The fill state of the edge’s source arrow. */
            "source-arrow-fill"?: ArrowFill;
            /** The fill state of the edge’s mid-source arrow. */
            "mid-source-arrow-fill"?: ArrowFill;
            /** The fill state of the edge’s target arrow. */
            "target-arrow-fill"?: ArrowFill;
            /** The fill state of the edge’s mid-target arrow. */
            "mid-target-arrow-fill"?: ArrowFill;
        }


        /**
         * http://js.cytoscape.org/#style/visibility
         */
        export interface Visibility {
            /** 
             * Whether to display the element; may be element for displayed or none for not displayed.
             * Note that a "display: none" bezier edge does not take up space in its bundle.
             */
            "display": "none" | "displayed";
            /** 
             * Whether the element is visible; may be visible or hidden.
             * Note that a "visibility : hidden" bezier edge still takes up space in its bundle.
             */
            "visibility": "none" | "visible";
            /** 
             * The opacity of the element, ranging from 0 to 1. 
             * Note that the opacity of a compound node parent affects the effective opacity of its children.
             */
            "opacity": number;
            /** 
             * An integer value that affects the relative draw order of elements.
             * In general, an element with a higher "z-index" will be drawn on top of an element with a lower "z-index".
             * Note that edges are under nodes despite "z-index", except when necessary for compound nodes.
             */
            "z-index": number;
        }

        /** https://developer.mozilla.org/en-US/docs/Web/CSS/font-style */
        export type FontStyle = "normal" | "italic" | "oblique";

        /** https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight */
        export type FontWeight = number | "normal" | "bold" | "lighter" | "bolder";

        /** http://js.cytoscape.org/#style/labels */
        export type TextTranformation = "none" | "uppercase" | "lowercase";

        /**
         * Labels
         * Label text:
         * 
         * http://js.cytoscape.org/#style/labels
         */
        export interface Labels {
            /** 
             * The text to display for an element’s label.
             */
            "label": string;
            /** 
             * The text to display for an edge’s source label.
             */
            "source-label": string;
            /** 
             * The text to display for an edge’s target label.
             */
            "target-label": string;
            /**
            Basic font styling:
            */
            /** 
             * The colour of the element’s label.
             */
            "color": Colour;
            /** 
             * The opacity of the label text, including its outline.
             */
            "text-opacity": number;
            /** 
             * A comma-separated list of font names to use on the label text.
             */
            "font-family": string;
            /** 
             * The size of the label text.
             * https://developer.mozilla.org/en-US/docs/Web/CSS/font-family
             */
            "font-size": number;
            /** 
             * A CSS font style to be applied to the label text.
             * https://developer.mozilla.org/en-US/docs/Web/CSS/font-style
             */
            "font-style": FontStyle;
            /** 
             * A CSS font weight to be applied to the label text.
             */
            "font-weight": FontWeight;
            /** 
             * A transformation to apply to the label text.
             */
            "text-transform": TextTranformation;

            /** 
             * Wrapping text:
             */

            /** 
             * A wrapping style to apply to the label text; may be 
             *  * "none" for no wrapping (including manual newlines ) or 
             *  * "wrap" for manual and/ or autowrapping.
             */
            "text-wrap": "none" | "wrap";
            /** 
             * The maximum width for wrapped text, 
             * applied when "text-wrap" is set to wrap.
             * For only manual newlines (i.e.\n), set a very large 
             * value like 1000px such that only your newline characters would apply.
             */
            "text-max-width": string;

            /**
             * Node label alignment:
             */

            /** 
             * The vertical alignment of a node’s label.
             */
            "text-halign": "left" | "center" | "right";
            /** 
             * The vertical alignment of a node’s label.
             */
            "text-valign": "top" | "center" | "bottom";

            /**
             * Edge label alignment:
             */

            /** 
             * For the source label of an edge, how far from the source node the label should be placed.
             */
            "source-text-offset": number;
            /** 
             * For the target label of an edge, how far from the target node the label should be placed.
             */
            "target-text-offset": number;
            /**
             * Margins:
             */

            /** 
             * A margin that shifts the label along the x- axis.
             */
            "text-margin-x": number;
            /** 
             * A margin that shifts the label along the y- axis.
             */
            "text-margin-y": number;
            /** 
             * (For the source label of an edge.)
             */
            "source-text-margin-x": number;
            /** 
             * (For the source label of an edge.)
             */
            "source-text-margin-y": number;
            /** 
             * (For the target label of an edge.)
             */
            "target-text-margin-x": number;
            /** 
             * (For the target label of an edge.)
             */
            "target-text-margin-y": number;
            /**
             * Rotating text:
             */

            /** 
             * A rotation angle that is applied to the label.
             *  * For edges, the special value autorotate can be used to align the label to the edge.
             *  * For nodes, the label is rotated along its anchor point on the node, so a label margin may help for some usecases.
             *  * The special value none can be used to denote 0deg.
             *  * Rotations works best with left- to - right text.
             */
            "text-rotation": number;

            /** 
             * (For the source label of an edge.)
             */
            "source-text-rotation": number;
            /** 
             * (For the target label of an edge.)
             */
            "target-text-rotation": number;

            /**
             * Outline:
             */

            /** 
             * The colour of the outline around the element’s label text.
             */
            "text-outline-color": Colour;
            /** 
             * The opacity of the outline on label text.
             */
            "text-outline-opacity": number;
            /** 
             * The size of the outline on label text.
             */
            "text-outline-width": number;
            /**
             * Shadow:
             */
            /** 
             * The shadow blur distance.
             */
            "text-shadow-blur": number;
            /** 
             * The colour of the shadow.
             */
            "text-shadow-color": Colour;
            /** 
             * The x offset relative to the text where the shadow will be displayed, can be negative.
             * If you set blur to 0, add an offset to view your shadow.
             */
            "text-shadow-offset-x": number;
            /** 
             * The y offset relative to the text where the shadow will be displayed, can be negative.
             * If you set blur to 0, add an offset to view your shadow.
             */
            "text-shadow-offset-y": number;
            /** 
             * The opacity of the shadow on the text; the shadow is disabled for 0 (default value).
             */
            "text-shadow-opacity": number;

            /**
             * Background:
             */

            /** 
             * A colour to apply on the text background.
             */
            "text-background-color": Colour;
            /** 
             * The opacity of the label background; the background is disabled for 0 (default value).
             */
            "text-background-opacity": number;
            /** 
             * The shape to use for the label background.
             */
            "text-background-shape": "ractangle" | "roundrectangle";

            /**
             * Border:
             */

            /** 
             * The width of the border around the label; the border is disabled for 0 (default value).
             */
            "text-border-opacity": number;
            /** 
             * The width of the border around the label.
             */
            "text-border-width": number;
            /** 
             * The style of the border around the label.
             */
            "text-border-style": LineStyle;
            /** 
             * The colour of the border around the label.
             */
            "text-border-color": Colour;

            /**
             * Interactivity:
             */

            /** 
             * If zooming makes the effective font size of the label smaller than this, then no label is shown.Note that because of performance optimisations, the label may be shown at font sizes slightly smaller than this value.This effect is more pronounced at larger screen pixel ratios.However, it is guaranteed that the label will be shown at sizes equal to or greater than the value specified.
             */
            "min-zoomed-font-size": number;
            /** 
             * Whether events should occur on an element if the label receives an event.
             * You may want a style applied to the text onactive so you know the text is activatable.
             */
            "text-events": "yes" | "no";


        }

        /**
         * http://js.cytoscape.org/#style/events
         */
        export interface Events {
            /** 
             * Whether events should occur on an element (e.g.tap, mouseover, etc.).
             *  * For "no", the element receives no events and events simply pass through to the core/viewport.
             */
            "events": "yes" | "no";
            /** 
             *  Whether events should occur on an element if the label receives an event.
             * You may want a style applied to the text on active so you know the text is activatable.
             */
            "text-events": "yes" | "no";
        }

        /**
         * These properties allow for the creation of overlays on top of nodes or edges, 
         * and are often used in the :active state.
         * http://js.cytoscape.org/#style/overlay
         */
        export interface Overlay {
            /** 
             * The colour of the overlay.
             */
            "overlay-color": Colour;
            /** 
             * The area outside of the element within which the overlay is shown.
             */
            "overlay-padding": number;
            /** 
             * The opacity of the overlay.
             */
            "overlay-opacity": number;
        }
        /**
         * These properties allow for the creation of shadows on nodes or edges. 
         * Note that shadow-blur could seriously impact performance on large graph.
         * http://js.cytoscape.org/#style/shadow
         */
        export interface Shadow {
            /**
             * The shadow blur, note that if greater than 0, this could impact performance.
             */
            "shadow-blur": number;
            /** 
             * The colour of the shadow.
             */
            "shadow-color": Colour;
            /** 
             * The x offset relative to the node/edge where the shadow will be displayed, can be negative. If you set blur to 0, add an offset to view your shadow.
             */
            "shadow-offset-x": number;
            /** 
             * The y offset relative to the node/edge where the shadow will be displayed, can be negative. If you set blur to 0, add an offset to view your shadow.
             */
            "shadow-offset-y": number;
            /** 
             * The opacity of the shadow.
             */
            "shadow-opacity": number;
        }

        /**
         * Transition animation 
         */
        export type TransitionTimingFunction = "linear" | "spring" | "cubic-bezier" | "ease" | "ease-in" | "ease-out" |
            "ease-in-out" | "ease-in-sine" | "ease-out-sine" | "ease-in-out-sine" | "ease-in-quad" |
            "ease-out-quad" | "ease-in-out-quad" | "ease-in-cubic" | "ease-out-cubic" |
            "ease-in-out-cubic" | "ease-in-quart" | "ease-out-quart" | "ease-in-out-quart" |
            "ease-in-quint" | "ease-out-quint" | "ease-in-out-quint" | "ease-in-expo" |
            "ease-out-expo" | "ease-in-out-expo" | "ease-in-circ" | "ease-out-circ" | "ease-in-out-circ";

        /**
         * http://js.cytoscape.org/#style/transition-animation
         */
        export interface TransitionAnimation {
            /** 
             * A comma separated list of style properties to animate in this state.
             */
            "transition-property": string;
            /** 
             * The length of the transition in seconds(e.g. 0.5s).
             */
            "transition-duration": number;
            /** 
             * The length of the delay in seconds before the transition occurs (e.g. 250ms).
             */
            "transition-delay": number;
            /** 
             * An easing function that controls the animation progress curve (a visualisation of easings serves as a reference).
             */
            "transition-timing-function": TransitionTimingFunction;
        }

        /**
         * Core 
         * These properties affect UI global to the graph, and apply only to the core. 
         * You can use the special core selector string to set these properties.
         * http://js.cytoscape.org/#style/core
         */
        export interface Core {
            /**
             * Indicator:
             */

            /** 
             * The colour of the indicator shown when the background is grabbed by the user.
             */
            "active-bg-color": Colour;
            /** 
             * The opacity of the active background indicator.
             */
            "active-bg-opacity": number;
            /** 
             * The size of the active background indicator.
             */
            "active-bg-size": number;
            /**
             * Selection box:
             */
            /** 
             * The background colour of the selection box used for drag selection.
             */
            "selection-box-color": Colour;
            /** 
             * The colour of the border on the selection box.
             */
            "selection-box-border-color": Colour;
            /** 
             * The size of the border on the selection box.
             */
            "selection-box-border-width": number;
            /** 
             * The opacity of the selection box.
             */
            "selection-box-opacity": number;
            /**
             * Texture during viewport gestures:
             */
            /** 
             * The colour of the area outside the viewport texture when initOptions.textureOnViewport === true.
             */
            "outside-texture-bg-color": Colour;
            /** 
             * The opacity of the area outside the viewport texture.
             */
            "outside-texture-bg-opacity": number;

        }
    }

    /**
     * http://js.cytoscape.org/#events
     */
    namespace Events {
        /**
         * Events passed to handler callbacks are similar to jQuery event 
         * objects in that they wrap native event objects, mimicking their API.
         * 
         * http://js.cytoscape.org/#events/event-object
         */
        export interface EventObject {
            /**
             * Fields:
             */
            /** 
             * a reference to the corresponding core instance
             */
            "cy": Instance;
            /** 
             * indicates the element or core that first caused the event
             */
            "cyTarget": CollectionElements;
            /** 
             * the event type string (e.g. "tap")
             */
            "type": string;
            /** 
             * the event namespace string (e.g. "foo" for "foo.tap")
             */
            "namespace": string;
            /** 
             * additional data object passed by .trigger()
             */
            "data": string;
            /** 
             * Unix epoch time of event
             */
            "timeStamp": string;
            /**
             * Fields for only user input device events:
             */
            /** 
             * indicates the model position of the event
             */
            "cyPosition": string;
            /** 
             * indicates the rendered position of the event
             */
            "cyRenderedPosition": string;
            /** 
             * the original user input device event object
             */
            "originalEvent": string;
            /**
             * Fields for only layout events:
             */

            /** 
             * indicates the corresponding layout that triggered the event 
             * (useful if running multiple layouts simultaneously)
             */
            "layout": string;
        }

        /**
         * User input device events
         * 
         * http://js.cytoscape.org/#events/user-input-device-events
         */
        /**
         * These are normal browser events that you can bind to via Cytoscape.js. 
         * You can bind these events to the core and to collections.
         */
        export type NormalBrowserEvent =
            "mousedown" | // when the mouse button is pressed
            "mouseup" | // when the mouse button is released
            "click" | // after mousedown then mouseup
            "mouseover" | // when the cursor is put on top of the target
            "mouseout" | // when the cursor is moved off of the target
            "mousemove" | // when the cursor is moved somewhere on top of the target
            "touchstart" | // when one or more fingers starts to touch the screen
            "touchmove" | // when one or more fingers are moved on the screen
            "touchend"; // when one or more fingers are removed from the screen
        /**
         * There are also some higher level events that you can use so you 
         * don’t have to bind to different events for mouse-input 
         * devices and for touch devices.
         */
        export type HighLevelInputEvent =
            "tapstart" | "vmousedown" | // normalised tap start event (either mousedown or touchstart)
            "tapdrag" | "vmousemove" | // normalised move event (either touchmove or mousemove)
            "tapdragover" | // normalised over element event (either touchmove or mousemove/mouseover)
            "tapdragout" | // normalised off of element event (either touchmove or mousemove/mouseout)
            "tapend" | "vmouseup" | // normalised tap end event (either mouseup or touchend)
            "tap" | "vclick" | // normalised tap event (either click, or touchstart followed by touchend without touchmove)
            "taphold" | // normalised tap hold event
            "cxttapstart" | // normalised right-click mousedown or two-finger tapstart
            "cxttapend" | // normalised right-click mouseup or two-finger tapend
            "cxttap" | // normalised right-click or two-finger tap
            "cxtdrag" | // normalised mousemove or two-finger drag after cxttapstart but before cxttapend
            "cxtdragover" | // when going over a node via cxtdrag
            "cxtdragout" | // when going off a node via cxtdrag
            "boxstart" | // when starting box selection
            "boxend" | // when ending box selection
            "boxselect" | // triggered on elements when selected by box selection
            "box"; // triggered on elements when inside the box on boxend

        /**
         * These events are custom to Cytoscape.js. 
         * You can bind to these events for collections.
         * 
         * http://js.cytoscape.org/#events/collection-events
         */
        export type CollectionEvent =
            "add" | // when an element is added to the graph
            "remove" | // when an element is removed from the graph
            "select" | // when an element is selected
            "unselect" | // when an element is unselected
            "lock" | // when an element is locked
            "unlock" | // when an element is unlocked
            "grab" | // when an element is grabbed by the mouse cursor or a finger on a touch input
            "drag" | // when an element is grabbed and then moved
            "free" | // when an element is freed (i.e. let go from being grabbed)
            "position" | // when an element changes position
            "data" | // when an element’s data is changed
            "scratch" | // when an element’s scratchpad data is changed
            "style"; // when an element’s style is changed

        /**
         * These events are custom to Cytoscape.js, 
         * and they occur on the core.
         * 
         * http://js.cytoscape.org/#events/graph-events
         */
        export type GraphEvent =
            "layoutstart" | // when a layout starts running
            "layoutready" | // when a layout has set initial positions for all the nodes (but perhaps not final positions)
            "layoutstop" | // when a layout has finished running completely or otherwise stopped running
            "ready" | // when a new instance of Cytoscape.js is ready to be interacted with
            "pan" | // when the viewport is panned
            "zoom"; // when the viewport is zoomed
    }


    interface Renderer {
        /**
         * The name of the renderer to use. By default, the 'canvas' renderer is used. If you build and register your own renderer, then you can specify its name here.
         */
        name: string;
    }

    /**
     *  cy   --> Cy.Instance
     *   the core
     * http://js.cytoscape.org/#core
     */
    interface Instance extends InstanceEvent, InstanceViewPort, InstanceAnimation, InstanceLayout, InstanceStyle, InstanceExport {
        /**
         * Add elements to the graph and return them.
         */
        add(eleObj: ElementDefinition): CollectionElements;
        /**
         * Add elements to the graph and return them.
         */
        add(eleObjs: ElementDefinition[]): CollectionElements;
        /**
         * Add elements to the graph and return them.
         */
        add(eles: Collection): CollectionElements;

        /**
         * Remove elements from the graph and return them.
         */
        remove(eles: Collection): CollectionElements;
        /**
         * Remove elements in the graph matching the specified selector.
         */
        remove(selector: Selector): CollectionElements;

        /**
         * Get an empty collection.
         */
        collection(): CollectionElements;
        /**
         * Get a collection from elements in the graph matching the specified selector.
         */
        collection(selector: Selector): CollectionElements;
        /**
         * Get a collection from an array of elements.
         */
        collection(elesArray: CollectionElements[]): CollectionElements;

        /**
         * Get an element from its ID in a very performant way.
         */
        getElementById(id: string): CollectionElements;

        /**
         * Get elements in the graph matching the specified selector.
         */
        $(selector: Selector): CollectionElements;
        /**
         * Get elements in the graph.
         */
        elements(): CollectionElements;
        /**
         * Get elements in the graph matching the specified selector.
         */
        elements(selector: Selector): CollectionElements;
        /**
         * Get nodes in the graph.
         */
        nodes(): CollectionNodes;
        /**
         * Get nodes in the graph matching the specified selector.
         */
        nodes(selector: Selector): CollectionNodes;
        /**
         * Get edges in the graph.
         */
        edges(): CollectionEdges;
        /**
         * Get edges in the graph matching the specified selector.
         */
        edges(selector: Selector): CollectionEdges;
        /**
         * Get elements in the graph matching the specified selector.
         */
        filter(selector: Selector): CollectionElements;
        /**
         * Get elements in the graph matching the specified filter function.
         */
        filter(filter: (i: number, ele: CollectionFirst) => boolean): CollectionElements;

        /**
         * Allow for manipulation of elements without triggering multiple style calculations or multiple redraws.
         * 
         *  A callback within which you can make batch updates to elements.
         */
        batch(callback: () => void): void;
        /**
         * Allow for manipulation of elements without triggering multiple style calculations or multiple redraws.
         * Starts batching manually (useful for asynchronous cases).
         */
        startBatch(): void;
        /**
         * Allow for manipulation of elements without triggering multiple style calculations or multiple redraws.
         * Ends batching manually (useful for asynchronous cases).
         */
        endBatch(): void;

        /**
         * A convenience function to explicitly destroy the instance.
         */
        destroy(): void;
    }

    interface EventObject {
        /**
         * Holds a reference to the originator of the event (core or element)
         */
        cyTarget: CollectionElements;
        data: any;
    }

    /** 
     * A function which is run in response to the generation of an EventObject.
     */
    interface EventHandler {
        (evt: EventObject): void;
    }

    /**
     *  http://js.cytoscape.org/#core/events
     */
    interface InstanceEvent {

        /**
         * Bind to events that occur in the graph.
         *
         * @param events A space separated list of event names.
         * @param handler The handler function that is called when one of the specified events occurs.
         */
        on(events: string, handler: EventHandler): void;
        /**
         * Bind to events that occur in the graph.
         *
         * @param events A space separated list of event names.
         * @param handler The handler function that is called when one of the specified events occurs.
         * @param selector A selector to specify elements for which the handler is triggered.
         */
        on(events: string, selector: Selector, handler: EventHandler): void;
        /**
         * Bind to events that occur in the graph.
         *
         * @param events A space separated list of event names.
         * @param handler The handler function that is called when one of the specified events occurs.
         * @param selector A selector to specify elements for which the handler is triggered.
         * @param data A plain object which is passed to the handler in the event object argument.
         */
        on(events: string, selector: Selector, data: any, handler: EventHandler): void;
        /**
         * Bind to events that occur in the graph.
         *
         * @param eventsMap A map of event names to handler functions.
         * @param selector A selector to specify elements for which the handler is triggered.
         * @param data A plain object which is passed to the handler in the event object argument.
         */
        on(eventsMap: {
            [value: string]: EventHandler
        }, selector?: Selector, data?: any): void;

        /**
         * Bind to events that occur in the graph.
         *
         * @param events A space separated list of event names.
         * @param handler The handler function that is called when one of the specified events occurs.
         */
        bind(events: string, handler: EventHandler): void;
        /**
         * Bind to events that occur in the graph.
         *
         * @param events A space separated list of event names.
         * @param handler The handler function that is called when one of the specified events occurs.
         * @param selector A selector to specify elements for which the handler is triggered.
         */
        bind(events: string, selector: Selector, handler: EventHandler): void;
        /**
         * Bind to events that occur in the graph.
         *
         * @param events A space separated list of event names.
         * @param handler The handler function that is called when one of the specified events occurs.
         * @param selector A selector to specify elements for which the handler is triggered.
         * @param data A plain object which is passed to the handler in the event object argument.
         */
        bind(events: string, selector: Selector, data: any, handler: EventHandler): void;
        /**
         * Bind to events that occur in the graph.
         *
         * @param eventsMap A map of event names to handler functions.
         * @param selector A selector to specify elements for which the handler is triggered.
         * @param data A plain object which is passed to the handler in the event object argument.
         */
        bind(eventsMap: {
            [value: string]: EventHandler
        }, selector?: Selector, data?: any): void;

        /**
         * Bind to events that occur in the graph.
         *
         * @param events A space separated list of event names.
         * @param handler The handler function that is called when one of the specified events occurs.
         */
        listen(events: string, handler: EventHandler): void;
        /**
         * Bind to events that occur in the graph.
         *
         * @param events A space separated list of event names.
         * @param handler The handler function that is called when one of the specified events occurs.
         * @param selector A selector to specify elements for which the handler is triggered.
         */
        listen(events: string, selector: Selector, handler: EventHandler): void;
        /**
         * Bind to events that occur in the graph.
         *
         * @param events A space separated list of event names.
         * @param handler The handler function that is called when one of the specified events occurs.
         * @param selector A selector to specify elements for which the handler is triggered.
         * @param data A plain object which is passed to the handler in the event object argument.
         */
        listen(events: string, selector: Selector, data: any, handler: EventHandler): void;
        /**
         * Bind to events that occur in the graph.
         *
         * @param eventsMap A map of event names to handler functions.
         * @param selector A selector to specify elements for which the handler is triggered.
         * @param data A plain object which is passed to the handler in the event object argument.
         */
        listen(eventsMap: {
            [value: string]: EventHandler
        }, selector?: Selector, data?: any): void;

        /**
         * Bind to events that occur in the graph.
         *
         * @param events A space separated list of event names.
         * @param handler The handler function that is called when one of the specified events occurs.
         */
        addListener(events: string, handler: EventHandler): void;
        /**
         * Bind to events that occur in the graph.
         *
         * @param events A space separated list of event names.
         * @param handler The handler function that is called when one of the specified events occurs.
         * @param selector A selector to specify elements for which the handler is triggered.
         */
        addListener(events: string, selector: Selector, handler: EventHandler): void;
        /**
         * Bind to events that occur in the graph.
         *
         * @param events A space separated list of event names.
         * @param handler The handler function that is called when one of the specified events occurs.
         * @param selector A selector to specify elements for which the handler is triggered.
         * @param data A plain object which is passed to the handler in the event object argument.
         */
        addListener(events: string, selector: Selector, data: any, handler: EventHandler): void;
        /**
         * Bind to events that occur in the graph.
         *
         * @param eventsMap A map of event names to handler functions.
         * @param selector A selector to specify elements for which the handler is triggered.
         * @param data A plain object which is passed to the handler in the event object argument.
         */
        addListener(eventsMap: {
            [value: string]: EventHandler
        }, selector?: Selector, data?: any): void;

        /**
         * Bind to events that occur in the graph, and trigger the handler only once.
         *
         * @param events A space separated list of event names.
         * @param handler The handler function that is called when one of the specified events occurs.
         */
        one(events: string, handler: EventHandler): void;
        /**
         * Bind to events that occur in the graph, and trigger the handler only once.
         *
         * @param events A space separated list of event names.
         * @param handler The handler function that is called when one of the specified events occurs.
         * @param selector A selector to specify elements for which the handler is triggered.
         */
        one(events: string, selector: Selector, handler: EventHandler): void;
        /**
         * Bind to events that occur in the graph, and trigger the handler only once.
         *
         * @param events A space separated list of event names.
         * @param handler The handler function that is called when one of the specified events occurs.
         * @param selector A selector to specify elements for which the handler is triggered.
         * @param data A plain object which is passed to the handler in the event object argument.
         */
        one(events: string, selector: Selector, data: any, handler: EventHandler): void;
        /**
         * Bind to events that occur in the graph, and trigger the handler only once.
         *
         * @param eventsMap A map of event names to handler functions.
         * @param selector A selector to specify elements for which the handler is triggered.
         * @param data A plain object which is passed to the handler in the event object argument.
         */
        one(eventsMap: {
            [value: string]: EventHandler
        }, selector?: Selector, data?: any): void;

        /**
         * Remove event handlers.
         * @param events A space separated list of event names.
         * @param selector [optional] The same selector used to bind to the events.
         * @param handler [optional] A reference to the handler function to remove.
         */
        off(events: string, selector?: Selector, handler?: EventHandler): void;

        /**
         * Remove event handlers.
         * @param eventsMap A map of event names to handler functions to remove.
         * @param selector [optional] The same selector used to bind to the events.
         */
        off(eventsMap: {
            [value: string]: EventHandler
        }, selector?: Selector): void;

        /**
         * Remove event handlers.
         * @param events A space separated list of event names.
         * @param selector [optional] The same selector used to bind to the events.
         * @param handler [optional] A reference to the handler function to remove.
         */
        unbind(events: string, selector?: Selector, handler?: EventHandler): void;

        /**
         * Remove event handlers.
         * @param eventsMap A map of event names to handler functions to remove.
         * @param selector [optional] The same selector used to bind to the events.
         */
        unbind(eventsMap: {
            [value: string]: EventHandler
        }, selector?: Selector): void;

        /**
         * Remove event handlers.
         * @param events A space separated list of event names.
         * @param selector [optional] The same selector used to bind to the events.
         * @param handler [optional] A reference to the handler function to remove.
         */
        unlisten(events: string, selector?: Selector, handler?: EventHandler): void;

        /**
         * Remove event handlers.
         * @param eventsMap A map of event names to handler functions to remove.
         * @param selector [optional] The same selector used to bind to the events.
         */
        unlisten(eventsMap: {
            [value: string]: EventHandler
        }, selector?: Selector): void;

        /**
         * Remove event handlers.
         * @param events A space separated list of event names.
         * @param selector [optional] The same selector used to bind to the events.
         * @param handler [optional] A reference to the handler function to remove.
         */
        removeListener(events: string, selector?: Selector, handler?: EventHandler): void;

        /**
         * Remove event handlers.
         *
         * @param eventsMap A map of event names to handler functions to remove.
         * @param selector [optional] The same selector used to bind to the events.
         */
        removeListener(eventsMap: {
            [value: string]: EventHandler
        }, selector?: Selector): void;

        /**
         * Trigger one or more events.
         *
         * @param events A space separated list of event names to trigger.
         * @param extraParams [optional] An array of additional parameters to pass to the handler.
         */
        trigger(events: string, extraParams?: any[]): void;

        /**
         * Trigger one or more events.
         *
         * @param events A space separated list of event names to trigger.
         * @param extraParams [optional] An array of additional parameters to pass to the handler.
         */
        emit(events: string, extraParams?: any[]): void;

        /**
         * Get whether the initial render event has occurred (useful for plugins etc).
         *
         * This function returns whether the initrender event has occurred on the graph, meaning that the renderer has drawn the graph at least once. This is useful when you need to grab image data from the core, as this function will let you know whether that data is available yet: You can not grab the graph scene if it has not yet been rendered.
         */
        initrender(): boolean;

        /**
         * Run a handler function every time a frame is rendered.
         *
         * @param handler The handler function to call on each frame.
         */
        onRender(handler: () => void): void;

        /**
         * Remove handlers function bound via cy.onRender().
         *
         * @param handler [optional] A reference to the handler function to remove. All handlers are removed if this is unspecified.
         */
        offRender(handler?: () => void): void;

        /**
         * Run a callback as soon as the graph becomes ready. If the graph is already ready, then the callback is called immediately.
         * @param fn The callback run as soon as the graph is ready, inside which this refers to the core (cy).
         */
        ready(fn: () => void): void;
    }

    /**
     *  http://js.cytoscape.org/#layouts/layout-events
     */
    interface LayoutEvents {
        /**
       * Bind to events that occur in the graph.
       *
       * @param events A space separated list of event names.
       * @param handler The handler function that is called when one of the specified events occurs.
       * 
       * alias: bind, listen, addListener
       */
        on(events: string, handler: EventHandler): void;

        /**
         * Bind to events that occur in the graph.
         *
         * @param events A space separated list of event names.
         * @param handler The handler function that is called when one of the specified events occurs.
         * @param data A plain object which is passed to the handler in the event object argument.
         */
        on(events: string, data: any, handler: EventHandler): void;
        /**
         * Get a promise that is resolved with the first of any of the specified events triggered on the layout.
         * http://js.cytoscape.org/#layout.promiseOn
         * alias: pon
         */
        promiseOn(events: string): Promise<EventHandler>;
        pon(events: string): Promise<EventHandler>;
        /**
         * Bind to events that are emitted by the layout, and trigger the handler only once.
         */
        /**
        * Bind to events that occur in the graph, and trigger the handler only once.
        *
        * @param events A space separated list of event names.
        * @param handler The handler function that is called when one of the specified events occurs.
        */
        one(events: string, handler: EventHandler): void;

        /**
         * Bind to events that occur in the graph, and trigger the handler only once.
         *
         * @param events A space separated list of event names.
         * @param handler The handler function that is called when one of the specified events occurs.
         * @param data A plain object which is passed to the handler in the event object argument.
         */
        one(events: string, data: any, handler: EventHandler): void;

        /**
         * Remove event handlers.
         * @param events A space separated list of event names.
         * @param selector [optional] The same selector used to bind to the events.
         * @param handler [optional] A reference to the handler function to remove.
         */
        off(events: string, handler?: EventHandler): void;
        /**
        * Trigger one or more events.
        *
        * @param events A space separated list of event names to trigger.
        * @param extraParams [optional] An array of additional parameters to pass to the handler.
        */
        trigger(events: string, extraParams?: any[]): void;
    }

    interface InstanceViewPort {
        // http://js.cytoscape.org/#core/viewport-manipulation

        /**
         * Pan the graph to the centre of a collection.
         *
         * @param eles The collection to centre upon.
         */
        center(eles?: Collection): CollectionElements;

        /**
         * Pan and zooms the graph to fit to a collection.
         *
         * @param eles [optional] The collection to fit to.
         * @param padding [optional] An amount of padding (in pixels) to have around the graph
         */
        fit(eles?: Collection, padding?: number): CollectionElements;

        /**
         * Reset the graph to the default zoom level and panning position.
         */
        reset(): CollectionElements;

        /**
         * Get the panning position of the graph.
         */
        pan(): Position;

        /**
         * Set the panning position of the graph.
         *
         * @param renderedPosition The rendered position to pan the graph to.
         */
        pan(renderedPosition?: Position): void;

        /**
         * Relatively pan the graph by a specified rendered position vector.
         *
         * @param renderedPosition The rendered position vector to pan the graph by.
         */
        panBy(renderedPosition: Position): void;

        /**
         * Get whether panning is enabled. If cy.boxSelectionEnabled() === true, then the user must taphold to initiate panning.
         */
        panningEnabled(): boolean;

        /**
         * Set whether panning is enabled. If cy.boxSelectionEnabled() === true, then the user must taphold to initiate panning.
         *
         * @param bool A truthy value enables panning; a falsey value disables it.
         */
        panningEnabled(bool: boolean): void;

        /**
         * Get whether panning by user events (e.g. dragging the graph background) is enabled. If cy.boxSelectionEnabled() === true, then the user must taphold to initiate panning.
         */
        userPanningEnabled(): boolean;

        /**
         * Set whether panning by user events (e.g. dragging the graph background) is enabled. If cy.boxSelectionEnabled() === true, then the user must taphold to initiate panning.
         *
         * @param bool A truthy value enables user panning; a falsey value disables it.
         */
        userPanningEnabled(bool: boolean): void;

        /**
         * Get the zoom level.
         */
        zoom(): number;
        /**
         * Set the zoom level.
         *
         * @param level The zoom level to set.
         */
        zoom(level: number): void;
        /**
         * Set the zoom level.
         *
         * @param options The options for zooming.
         */
        zoom(options: ZoomOptions): void;

        /**
         * Get whether zooming is enabled.
         */
        zoomingEnabled(): boolean;
        /**
         * Set whether zooming is enabled.
         *
         * @param bool A truthy value enables zooming; a falsey value disables it.
         */
        zoomingEnabled(bool: boolean): void;

        /**
         * Get whether zooming by user events (e.g. mouse wheel, pinch-to-zoom) is enabled.
         */
        userZoomingEnabled(): boolean;
        /**
         * Set whether zooming by user events (e.g. mouse wheel, pinch-to-zoom) is enabled.
         *
         * @param bool A truthy value enables user zooming; a falsey value disables it.
         */
        userZoomingEnabled(bool: boolean): void;

        /**
         * Get the minimum zoom level.
         */
        minZoom(): number;
        /**
         * Set the minimum zoom level.
         *
         * @param zoom The new minimum zoom level to use.
         */
        minZoom(zoom: number): void;

        /**
         * Get the maximum zoom level.
         */
        maxZoom(): number;
        /**
         * Set the maximum zoom level.
         *
         * @param zoom The new maximum zoom level to use.
         */
        maxZoom(zoom: number): void;

        /**
         * Set the viewport state (pan & zoom) in one call.
         *
         * @param zoom The zoom level to set.
         * @param pan The pan to set (a rendered position).
         */
        viewport(zoom: number, pan: Position): void;

        /**
         * Get whether box selection is enabled. 
         * If enabled, the user must hold left-click to initiate panning.
         */
        boxSelectionEnabled(): boolean;
        /**
         * Set whether box selection is enabled. 
         * If enabled, the user must hold left-click to initiate panning.
         *
         * @param bool A truthy value enables box selection; a falsey value disables it.
         */
        boxSelectionEnabled(bool: boolean): void;

        /**
         * Get the on-screen width of the viewport in pixels.
         */
        width(): number;

        /**
         * Get the on-screen height of the viewport in pixels.
         */
        height(): number;

        /**
         * Get the extent of the viewport, a bounding box in model 
         * coordinates that lets you know what model positions are visible in the viewport.
         */
        extent(): {
            x1: number, y1: number, x2: number, y2: number, w: number, h: number
        };

        /**
         * Get whether nodes are automatically locked 
         * (i.e. if true, nodes are locked despite their individual state).
         */
        autolock(): boolean;
        /**
         * Set whether nodes are automatically locked 
         * (i.e. if true, nodes are locked despite their individual state).
         *
         * @param bool A truthy value enables autolocking; a falsey value disables it.
         */
        autolock(bool: boolean): void;

        /**
         * Get whether nodes are automatically ungrabified 
         * (i.e. if true, nodes are ungrabbale despite their individual state).
         */
        autoungrabify(): boolean;
        /**
         * Set whether nodes are automatically ungrabified 
         * (i.e. if true, nodes are ungrabbale despite their individual state).
         *
         * @param bool A truthy value enables autolocking; a falsey value disables it.
         */
        autoungrabify(bool: boolean): void;

        /**
         * Get whether nodes are automatically unselectified 
         * (i.e. if true, nodes are unselectable despite their individual state).
         */
        autounselectify(): boolean;
        /**
         * Set whether nodes are automatically unselectified 
         * (i.e. if true, nodes are unselectable despite their individual state).
         *
         * @param bool A truthy value enables autolocking; a falsey value disables it.
         */
        autounselectify(bool: boolean): void;

        /**
         * Force the renderer to redraw (i.e. draw a new frame).
         *
         * This function forces the renderer to draw a new frame. 
         * It is useful for very specific edgecases, such as in certain UI plugins, 
         * but it should not be needed for most developers.
         */
        forceRender(): void;

        /**
         * Force the renderer to recalculate the viewport bounds.
         *
         * If your code resizes the graph's dimensions or position 
         * (i.e. by changing the style of the HTML DOM element that holds the graph), 
         * you will want to call cy.resize() to have the graph resize and redraw itself.
         *
         * Cytoscape.js can not automatically monitor the bounding box of the viewport, 
         * as querying the DOM for those dimensions can be expensive. 
         * Although cy.resize() is automatically called for you on the window's resize event, 
         * there is no resize or style event for arbitrary DOM elements.
         */
        resize(): CollectionElements;
    }

    interface InstanceAnimation {
        // http://js.cytoscape.org/#core/animation

        /**
         * Get whether the viewport is currently being animated.
         */
        animated(): boolean;

        /**
         * Animate the viewport.
         * 
         * @param anis An object containing the details of the animation.
         * zoom A zoom level to which the graph will be animated.
         * pan A panning position to which the graph will be animated.
         * panBy A relative panning position to which the graph will be animated.
         * fit An object containing fitting options from which the graph will be animated.
         * eles Elements or a selector to which the viewport will be fitted.
         * padding Padding to use with the fitting.
         * center An object containing centring options from which the graph will be animated.
         * eles Elements or a selector to which the viewport will be centred.
         * @param options An object containing animation options.
         * duration - The duration of the animation in milliseconds.
         * queue - A boolean indicating whether to queue the animation.
         * complete - A function to call when the animation is done.
         * step - A function to call each time the animation steps.
         */
        animate(anis: {
            zoom?: number,
            pan?: Position,
            panBy?: Position,
            fit?: {
                eles: Collection,
                padding?: number
            },
            center?: {
                eles: Collection
            }
        }, options?: {
            duration?: number,
            queue?: boolean,
            complete?: () => void,
            step?: () => void
        }): Cy.Instance;

        /**
         * Add a delay between animations for the viewport.
         * 
         * @param duration How long the delay should be in milliseconds.
         * @param complete A function to call when the delay is complete.
         */
        delay(duration: number, complete?: () => void): Cy.Instance;

        /**
         * Stop all viewport animations that are currently running.
         * 
         * @param clearQueue A boolean, indicating whether the queue of animations should be emptied.
         * @param jumpToEnd A boolean, indicating whether the currently-running animations should jump to their ends rather than just stopping midway.
         */
        stop(clearQueue?: boolean, jumpToEnd?: boolean): Cy.Instance;

        /**
         * Remove all queued animations for the viewport.
         */
        clearQueue(): Cy.Instance;
    }

    /**
     * http://js.cytoscape.org/#core/layout
     */
    interface InstanceLayout {
        /**
         * Run a layout, which algorithmically positions the nodes in the graph.
         * For layouts included with Cytoscape.js, you can find their 
         * options documented in the Layouts section. 
         * For external layouts, please refer to their accompanying documentation.
         * 
         * An analogue to run a layout on a subset of the graph exists as eles.layout().
         * http://js.cytoscape.org/#cy.layout
         */
        layout(layout: LayoutOptions): void;
        /**
         * Get a new layout, which can be used to algorithmically 
         * position the nodes in the graph.
         * 
         * You must specify options.name with the name of the layout you wish to use.
         * 
         * This function creates and returns a layout object. 
         * You may want to keep a reference to the layout for more advanced usecases, 
         * such as running multiple layouts simultaneously.
         * Note that you must call layout.run() in order for it to affect the graph.
         * An analogue to make a layout on a subset of the graph exists as eles.makeLayout().
         */
        makeLayout(options: LayoutOptions): void;
    }

    /**
     * Get the entry point to modify the visual style of the graph after initialisation.
     * http://js.cytoscape.org/#core/style
     */
    interface InstanceStyle {
        /**
         * Get the current style object.
         */
        style(): ElementStylesheet | string;
        /**
         * Assign a new stylesheet to replace the existing one.
         */
        style(sheet: StyleSheet): StyleSheet;

    }

    interface InstanceExport {
        /**
         * Export the current graph view as a PNG image in Base64 representation.
         */
        png(): string;
        /**
         * Export the current graph view as a PNG image in Base64 representation.
         */
        png(options: ExportOptions): string;

        /**
         * Export the current graph view as a JPG image in Base64 representation.
         */
        jpg(): string;
        /**
         * Export the current graph view as a JPG image in Base64 representation.
         */
        jpg(options: ExportOptions): string;

        /**
         * Export the current graph view as a JPG image in Base64 representation.
         */
        jpeg(): string;
        /**
         * Export the current graph view as a JPG image in Base64 representation.
         */
        jpeg(options: ExportOptions): string;

        /**
         * Export the graph as JSON, the same format used at initialisation.
         */
        json(): string;
    }

    interface Position {
        x: number;
        y: number;
    }

    /**
     * Layouts have a set of functions available to them, 
     * which allow for more complex behaviour than the primary run-one-layout-at-a-time usecase. 
     * A new, developer accessible layout can be made via cy.makeLayout().
     * http://js.cytoscape.org/#layouts/layout-manipulation
     */
    interface LayoutInstance {
        /**
         * Start running the layout.
         * http://js.cytoscape.org/#layout.run
         */
        run(): void;
        /**
         * Start running the layout.
         * alias: run()
         */
        start(): void;

        /**
         * Stop running the (asynchronous/discrete) layout.
         * http://js.cytoscape.org/#layout.stop
         */
        stop(): void;
    }


    /**
     * The function of a layout is to set the positions on the nodes in the graph. 
     * Layouts are extensions of Cytoscape.js such that it is possible for 
     * anyone to write a layout without modifying the library itself.
     * 
     * Several layouts are included with Cytoscape.js by default, and 
     * their options are described in the sections that follow with 
     * the default values specified. 
     * Note that you must set options.name to the name of the layout 
     * to specify which one you want to run.
     * 
     * Each layout has its own algorithm for setting the position for each node. 
     * This algorithm influences the overall shape of the graph and the lengths of the edges. 
     * A layout’s algorithm can be customised by setting its options. 
     * Therefore, edge lengths can be controlled by setting the layout options appropriately.
     * 
     * For force-directed (physics) layouts, 
     * there is generally an option to set a weight to each edge to affect the relative edge lengths. 
     * Edge length can also be affected by options like spacing factors, angles, and overlap avoidance. 
     * Setting edge length depends on the particular layout, and 
     * some layouts will allow for more precise edge lengths than others.
     * 
     * http://js.cytoscape.org/#layouts
     * 
     * The default is 'grid'.
     */
    type LayoutOptionTypeNames = "null" | "random" | "preset"
        | "grid" | "circle" | "concentric" | "breadthfirst" | "cose";

    interface LayoutOptions {
        /** one of the available names */
        name: LayoutOptionTypeNames;
        /** Called on 'layoutready' */
        ready?: () => void;
        /** Called on 'layoutstop' */
        stop?: () => void;
    }

    /**
     * The null layout puts all nodes at (0, 0). It’s useful for debugging.
     * http://js.cytoscape.org/#layouts/null
     */
    interface NullLayoutOptions extends LayoutOptions {
    }

    interface AbstractLayoutBounds {
        /** upper left */
        x1: number;
        y1: number;
    }
    interface AbsoluteLayoutBounds extends AbstractLayoutBounds {
        x2: number;
        y2: number
    }
    interface RelativeLayoutBounds extends AbstractLayoutBounds {
        w: number;
        h: number
    }
    interface AbstractFiniteLayoutOptions extends LayoutOptions {
        /** [default: true] whether to fit to viewport */
        fit?: boolean;
        /** [default: 30] fit padding */
        padding?: number;
        /** [default: undefined] constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h } */
        boundingBox?: undefined | AbstractLayoutBounds;
    }
    interface AbstractAnimateLayoutOptions {
        /** [default: false] whether to transition the node positions */
        animate?: boolean;
        /** [default: 500] duration of animation in ms if enabled */
        animationDuration?: number;
        /** [default: undefined] easing of animation if enabled */
        animationEasing?: undefined | any;
    }
    /**
     * The random layout puts nodes in random positions within the viewport.
     * http://js.cytoscape.org/#layouts/random
     */
    interface RandomLayoutOptions extends AbstractFiniteLayoutOptions, AbstractAnimateLayoutOptions {
    }
    /**
     * The preset layout puts nodes in the positions you specify manually.
     * http://js.cytoscape.org/#layouts/preset
     */
    interface PresetLayoutOptions extends AbstractFiniteLayoutOptions, AbstractAnimateLayoutOptions {
        /** [default: undefined] map of (node id) => (position obj); or function(node){ return somPos; } */
        positions: undefined | any;
        /** [default: undefined] the zoom level to set (prob want fit = false if set) */
        zoom: undefined | number;
        /** [default: undefined] the pan level to set (prob want fit = false if set) */
        pan: undefined | number;
    }

    /**
     * The grid layout puts nodes in a well-spaced grid.
     * (the default)
     */
    interface GridLayoutOptions extends AbstractFiniteLayoutOptions, AbstractAnimateLayoutOptions {
        /** [default: true] prevents node overlap, may overflow boundingBox if not enough space */
        avoidOverlap?: boolean;
        /** [default: 10] extra spacing around nodes when avoidOverlap: true */
        avoidOverlapPadding?: number;
        /** [default: false] uses all available space on false, uses minimal space on true */
        condense?: boolean;
        /** [default: undefined] force num of rows in the grid */
        rows?: undefined | number;
        /** [default: undefined]  force num of columns in the grid */
        cols?: undefined | number;
        /** [default: => elem.{row: col:}]  returns { row, col } for element */
        position?: () => { row: number, col: number };
        /** [default: undefined]  a sorting function to order the nodes; e.g. function(a, b){ return a.data('weight') - b.data('weight') } */
        sort?: (a: any, b: any) => number;
    }

    interface CircleLayoutOptions extends AbstractFiniteLayoutOptions, AbstractAnimateLayoutOptions {
        /** [default: true]  prevents node overlap, may overflow boundingBox and radius if not enough space */
        avoidOverlap?: boolean;
        /** [default: undefined]  the radius of the circle */
        radius?: undefined | number;
        /** [default: 3/4 turn]  where nodes start in radians */
        startAngle?: number;
        /** [default: undefined]  how many radians should be between the first and last node (defaults to full circle) */
        sweep?: undefined | number;
        /** [default: true]  whether the layout should go clockwise (true) or counterclockwise/anticlockwise (false) */
        clockwise?: boolean;
        /** [default: undefined]  a sorting function to order the nodes; e.g. function(a, b){ return a.data('weight') - b.data('weight') }           */
        sort?: (a: any, b: any) => number;
    }

    /**
     * The concentric layout positions nodes in concentric circles, 
     * based on a metric that you specify to segregate the nodes into levels. 
     * This layout sets the concentric value in ele.scratch().
     * http://js.cytoscape.org/#layouts/concentric
     */
    interface ConcentricLayoutOptions extends CircleLayoutOptions {
        /** [default: false]  whether levels have an equal radial distance betwen them, may cause bounding box overflow */
        equidistant?: boolean;
        /** [default: 10]  min spacing between outside of nodes (used for radius adjustment) */
        minNodeSpacing?: number;
        /** [default: undefined]  height of layout area (overrides container height) */
        height?: undefined | number;
        /** [default: undefined]  width of layout area (overrides container width) */
        width?: undefined | number;
        /** [default: => node.degree()]  returns numeric value for each node, placing higher nodes in levels towards the centre */
        concentric?: (node: any) => number;
        /** [default: => node.maxDegree * 1/4]  the variation of concentric values in each level */
        levelWidth?: (nodes: any) => number;
    }
    /**
     * The breadthfirst layout puts nodes in a hierarchy, based on a breadthfirst traversal of the graph.
     * http://js.cytoscape.org/#layouts/breadthfirst
     */
    interface BreadthFirstLayoutOptions extends AbstractFiniteLayoutOptions, AbstractAnimateLayoutOptions {
        /** [default: false] whether the tree is directed downwards (or edges can point in any direction if false) */
        directed?: boolean;
        /** [default: false] put depths in concentric circles if true, put depths top down if false */
        circle?: boolean
        /** [default: 1.75] positive spacing factor, larger => more space between nodes (N.B. n/a if causes overlap) */
        spacingFactor?: number;
        /** [default: true]  prevents node overlap, may overflow boundingBox if not enough space */
        avoidOverlap?: boolean;
        /** [default: undefined]  the roots of the trees */
        roots?: undefined | any;
        /** [default: 0]  how many times to try to position the nodes in a maximal way (i.e. no backtracking) */
        maximalAdjustments?: number;
    }
    /**
     * The cose (Compound Spring Embedder) layout uses a physics simulation to lay out graphs. 
     * It works well with noncompound graphs and it has additional logic to support compound graphs well.
     * It was implemented by Gerardo Huck as part of Google Summer of Code 2013 
     * (Mentors: Max Franz, Christian Lopes, Anders Riutta, Ugur Dogrusoz).
     * Based on the article “A layout algorithm for undirected compound graphs” 
     * by Ugur Dogrusoz, Erhan Giral, Ahmet Cetintas, Ali Civril and Emek Demir.
     * The cose layout is very fast and produces good results. 
     * The cose-bilkent extension is an evolution of the algorithm that is more 
     * computationally expensive but produces near-perfect results.
     */
    interface CoseLayoutOptions extends AbstractFiniteLayoutOptions, AbstractAnimateLayoutOptions {
        /** Number of iterations between consecutive screen positions update
         * (0 -> only updated on the end) [default: 20] */
        refresh?: number;
        /** Randomize the initial positions of the nodes (true) or use existing positions (false) [default: false] */
        randomize?: boolean;
        /** Extra spacing between components in non-compound graphs [default: false] */
        componentSpacing?: boolean;
        /** Node repulsion (non overlapping) multiplier [default: 100] */
        nodeRepulsion?: (node: any) => number;
        /** Node repulsion (overlapping) multiplier [default: => 400,000] */
        nodeOverlap?: number;
        /** Ideal edge (non nested) length[default: => 10] */
        idealEdgeLength?: (edge: any) => number;
        /** Divisor to compute edge forces [default: => 100] */
        edgeElasticity?: (edge: any) => number;
        /** Nesting factor (multiplier) to compute ideal edge length for nested edges [default: 5] */
        nestingFactor?: number;
        /** Gravity force (constant) [default: 80] */
        gravity?: number;
        /** Maximum number of iterations to perform [default: 1000] */
        numIter?: number;
        /** Initial temperature (maximum node displacement) [default: 200] */
        initialTemp?: number;
        /** Cooling factor (how the temperature is reduced between consecutive iterations [default: 0.95] */
        coolingFactor?: number;
        /** Lower temperature threshold (below this point the layout will end) [default: 10] */
        minTemp?: number;
        /** Whether to use threading to speed up the layout [default: true] */
        useMultitasking?: boolean;
    }

    interface CytoscapeOptions {
        // very commonly used options:
        /** 
         * A HTML DOM element in which the graph should be rendered.
         * This is optional if Cytoscape.js is run headlessly or if you initialise using jQuery (in which case your jQuery object already has an associated DOM element).
         * 
         * The default is undefined.
         */
        container?: HTMLElement;
        /**
         * The [[Stylesheet]] used to style the graph. For convenience, this option can alternatively be specified as a promise that resolves to the stylesheet.
         */
        style?: Stylesheet[] | Promise<Stylesheet[]>;
        /**
         * An array of [[Elements]] specified as plain objects. For convenience, this option can alternatively be specified as a promise that resolves to the elements JSON.
         */
        elements?: ElementsDefinition | ElementDefinition[] | Promise<ElementsDefinition> | Promise<ElementDefinition[]>;
        /**
         * A plain object that specifies layout options. Which layout is initially run is specified by the name field. Refer to a layout's documentation for the options it supports. If you want to specify your node positions yourself in your elements JSON, you can use the preset layout — by default it does not set any positions, leaving your nodes in their current positions (e.g. specified in options.elements at initialisation time)
         */
        layout?: LayoutOptions;
        /**
         * A callback function that is called when Cytoscape.js has loaded the graph and the layout has specified initial positions of the nodes. After this point, rendering can happen, the user can interact with the graph, et cetera.
         */
        ready?: (evt: any) => void;

        // initial viewport state:
        /**
         * The initial zoom level of the graph. Make sure to disable viewport manipulation options, such as fit, in your layout so that it is not overridden when the layout is applied. You can set options.minZoom and options.maxZoom to set restrictions on the zoom level.
         * 
         * The default value is 1.
         */
        zoom?: number;
        /**
         * The initial panning position of the graph. Make sure to disable viewport manipulation options, such as fit, in your layout so that it is not overridden when the layout is applied.
         */
        pan?: Position;

        // interaction options?:
        /**
         * A minimum bound on the zoom level of the graph. The viewport can not be scaled smaller than this zoom level.
         * 
         * The default value is 1e-50.
         */
        minZoom?: number;
        /**
         * A maximum bound on the zoom level of the graph. The viewport can not be scaled larger than this zoom level.
         * 
         * The default value is 1e50.
         */
        maxZoom?: number;
        /**
         * Whether zooming the graph is enabled, both by user events and programmatically.
         * 
         * The default value is true.
         */
        zoomingEnabled?: boolean;
        /**
         * Whether user events (e.g. mouse wheel, pinch-to-zoom) are allowed to zoom the graph. Programmatic changes to zoom are unaffected by this option.
         * 
         * The default value is true.
         */
        userZoomingEnabled?: boolean;
        /**
         * Whether panning the graph is enabled, both by user events and programmatically.
         * 
         * The default value is true.
         */
        panningEnabled?: boolean;
        /**
         * Whether user events (e.g. dragging the graph background) are allowed to pan the graph. Programmatic changes to pan are unaffected by this option.
         * 
         * The default value is true.
         */
        userPanningEnabled?: boolean;
        /**
         * Whether box selection (i.e. drag a box overlay around, and release it to select) is enabled. If enabled, the user must taphold to pan the graph.
         * 
         * The default value is false.
         */
        boxSelectionEnabled?: boolean;
        /**
         * A string indicating the selection behaviour from user input. By default, this is set automatically for you based on the type of input device detected. On touch devices, 'additive' is default — a new selection made by the user adds to the set of currenly selected elements. On mouse-input devices, 'single' is default — a new selection made by the user becomes the entire set of currently selected elements (i.e. the previous elements are unselected).
         * 
         * The default value is (isTouchDevice ? 'additive' : 'single').
         */
        selectionType?: SelectionType;
        /**
         * A nonnegative integer that indicates the maximum allowable distance that a user may move during a tap gesture, on touch devices and desktop devices respectively. This makes tapping easier for users. These values have sane defaults, so it is not advised to change these options unless you have very good reason for doing so. Larger values will almost certainly have undesirable consequences.
         * 
         * The default value is is 8.
         */
        touchTapThreshold?: number;
        /**
         * A nonnegative integer that indicates the maximum allowable distance that a user may move during a tap gesture, on touch devices and desktop devices respectively. This makes tapping easier for users. These values have sane defaults, so it is not advised to change these options unless you have very good reason for doing so. Larger values will almost certainly have undesirable consequences.
         * 
         * The default value is 4.
         */
        desktopTapThreshold?: number;
        /**
         * Whether nodes should be locked (not draggable at all) by default (if true, overrides individual node state).
         * 
         * The default value is false.
         */
        autolock?: boolean;
        /**
         * Whether nodes should be ungrabified (not grabbable by user) by default (if true, overrides individual node state).
         * 
         * The default value is false.
         */
        autoungrabify?: boolean;
        /**
         * Whether nodes should be unselectified (immutable selection state) by default (if true, overrides individual element state).
         * 
         * The default value is false.
         */
        autounselectify?: boolean;

        // rendering options:
        /**
         * A convenience option that initialises the instance to run headlessly. You do not need to set this in environments that are implicitly headless (e.g. Node.js). However, it is handy to set headless: true if you want a headless instance in a browser.
         * 
         * The default value is false.
         */
        headless?: boolean;
        /**
         * A boolean that indicates whether styling should be used. For headless (i.e. outside the browser) environments, display is not necessary and so neither is styling necessary — thereby speeding up your code. You can manually enable styling in headless environments if you require it for a special case. Note that it does not make sense to disable style if you plan on rendering the graph.
         * 
         * The default value is true.
         */
        styleEnabled?: boolean;
        /**
         * When set to true, the renderer does not render edges while the viewport is being manipulated. This makes panning, zooming, dragging, et cetera more responsive for large graphs.
         * 
         * The default value is false.
         */
        hideEdgesOnViewport?: boolean;
        /**
         * hen set to true, the renderer does not render labels while the viewport is being manipulated. This makes panning, zooming, dragging, et cetera more responsive for large graphs.
         * 
         * The default value is false.
         */
        hideLabelsOnViewport?: boolean;
        /**
         * When set to true, the renderer uses a texture (if supported) during panning and zooming instead of drawing the elements, making large graphs more responsive.
         * 
         * The default value is false.
         */
        textureOnViewport?: boolean;
        /**
         * When set to true, the renderer will use a motion blur effect to make the transition between frames seem smoother. This can significantly increase the perceived performance for a large graphs.
         * 
         * The default value is false.
         */
        motionBlur?: boolean;
        /**
         * When motionBlur: true, this value controls the opacity of motion blur frames. Higher values make the motion blur effect more pronounced.
         * 
         * The default value is 0.2.
         */
        motionBlurOpacity?: number;
        /**
         * Changes the scroll wheel sensitivity when zooming. This is a multiplicative modifier. So, a value between 0 and 1 reduces the sensitivity (zooms slower), and a value greater than 1 increases the sensitivity (zooms faster).
         * 
         * The default value is 1.
         */
        wheelSensitivity?: number;
        /**
         * Overrides the screen pixel ratio with a manually set value (1.0 or 0.666 recommended, if set). This can be used to increase performance on high density displays by reducing the effective area that needs to be rendered. If you want to use the hardware's actual pixel ratio at the expense of performance, you can set pixelRatio: 'auto'.
         * 
         * The default value is 1.
         */
        pixelRatio?: number;
        /**
         * A callback function that is called when Cytoscape.js has rendered its first frame. This is useful for grabbing screenshots etc after initialision, but in general you should use ready instead.
         */
        initrender?: (evt: any) => void;
        /**
         *  A plain object containing options for the renderer to be used. The options.renderer.name field specifies which renderer is used. You need not specify anything for the renderer option, unless you want to specify one of the rendering options.
         */
        renderer?: Renderer;
    }

    interface ExportOptions {
        /**
         * The background colour of the image (transparent by default).
         */
        bg?: string;
        /**
         * Whether to export the current viewport view (false, default) or the entire graph (true).
         */
        full?: boolean;
        /**
         * This value specifies a positive number that scales the size of the resultant image.
         */
        scale?: number;
        /**
         * Specifies the scale automatically in combination with maxHeight such that the resultant image is no wider than maxWidth.
         */
        maxWidth?: number;
        /**
         * Specifies the scale automatically in combination with maxWidth such that the resultant image is no taller than maxHeight.
         */
        maxHeight?: number;
    }

    interface BoundingBoxOptions {
        /**
         * A boolean indicating whether to include nodes in the bounding box.
         */
        includeNodes: boolean;
        /**
         * A boolean indicating whether to include edges in the bounding box.
         */
        includeEdges: boolean;
        /**
         * A boolean indicating whether to include labels in the bounding box.
         */
        includeLabels: boolean;
    }

    interface ZoomOptions {
        /**
         * The zoom level to set.
         */
        level: number;
        /**
         * The position about which to zoom.
         */
        position?: Position;
        /**
         * The rendered position about which to zoom.
         */
        renderedPosition?: Position;
    }

    interface Static {
        (options?: CytoscapeOptions): Instance;
        (extensionName: string, foo: string, bar: any): Instance;
        version: string;

        Promise<T>(): Cy.Promise<T>;
    }

    enum PromiseState {
        STATE_PENDING = 0,
        STATE_FULFILLED = 1,
        STATE_REJECTED = 2

    }

    interface Promise<T> {
        id: string;
        state: PromiseState;
        fulfillValue: T;
        rejectReason: any;
        onFulfilled: any[];
        onRejected: any[];

        fulfill(value: T): Promise<T>;
        reject(error: any): Promise<any>;
        then<U>(onFulfilled?: (value: T) => U | Promise<U>, onRejected?: (error: any) => U | Promise<U>): Promise<U>;
        then<U>(onFulfilled?: (value: T) => U | Promise<U>, onRejected?: (error: any) => void): Promise<U>;
    }
}

declare module "cytoscape" {
    export = cytoscape;
}

declare var cytoscape: Cy.Static;
