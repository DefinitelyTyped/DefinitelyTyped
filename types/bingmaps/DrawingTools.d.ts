declare module Microsoft.Maps {
    /** An object that contains the event arguments for when the drawing mode changes in the drawing tools. **/
    export interface IDrawingModeChangedData {

        /** The shape being modified by the drawing tools. **/
        shape: IPrimitive;

        /** The new drawing mode. **/
        mode: DrawingTools.DrawingMode;
    }

    /**
     * The DrawingManager class manages the ability to draw and edit multiple shapes on the map. Shapes managed by this class are rendered on a separate drawing layer.
     * User can use a mouse or a touch screen to draw on the map. When they are done, pressing the escape button or any button on the toolbar will exit the current drawing mode.
     * This class does not have a publicly accessible constructor and can only be accessed using the showDrawingManager of the DrawingTools class.
     */
    export interface DrawingManager {
        /**
        * Adds a shapes to the layer, at the specified index if specified.
        • @param data The shape(s) to be added to the layer.
        • @param index The index at which to insert the shape into the layer.
        */
        add(data: IPrimitive | IPrimitive[], index?: number): void;

        /**
        * Disposes the drawing manager instance.
        */
        dispose(): void;

        /**
        * Resets the drawing manager and clears all shapes in the drawing layer.
        */
        clear(): void;

        /**
        * Gets the current drawing mode of the drawing manager.
        * @returns The current drawing mode of the drawing manager.
        */
        getDrawingMode(): DrawingTools.DrawingMode;

        /**
        * Gets an array of shapes that are in the layer. This can be used to iterate over the individual shapes.
        * @returns An array of shapes that are in the layer. This can be used to iterate over the individual shapes.
        */
        getPrimitives(): IPrimitive[];

        /**
        * Returns the index of the shape in the drawing layer.
        * @param primitive The shape to find the index of.
        * @param fromIndex The index to start the search from.
        * @returns The index of the shape in the drawing layer. Returns -1 if shape is not found.
        */
        indexOf(primitive: IPrimitive, fromIndex?: number): number;

        /**
        * Removes a shape from the layer and returns it.
        * @param primitive The shape to remove from the layer.
        * @returns The shape that was removed from the layer.
        */
        remove(primitive: IPrimitive): IPrimitive;

        /**
        * Removes a shape from the layer at the specified index.
        * @param index The index of the shape to remove from the layer.
        * @returns The shape that was removed from the layer.
        */
        removeAt(index: number): IPrimitive;

        /**
        * Sets the drawing mode of the drawing manager.
        * @param mode The drawing mode to set the DrawingManager to.
        */
        setDrawingMode(mode: DrawingTools.DrawingMode): void;

        /**
        * Replaces all shapes in the layer with the new array of shapes that have been provided.
        * @param primitives An array of shapes to add to the drawing layer.
        */
        setPrimitives(primitives: IPrimitive[]): void;
    }

    /**
    * Provides a set of tools for drawing and editing shapes on top of the map.
    * @requires The Microsoft.Maps.DrawingTools module.
    */
    export class DrawingTools {
        /**
         * @constructor
         * @requires The Microsoft.Maps.DrawingTools module.
         * @param map A map instanct to attach the drawing tools to.
         */
        constructor(map: Map);

        /**
        * Initializes the drawing layer and instructs it to create a new shape of a given type.
        * @param shapeType The type of new shape to create.
        * @param created A callback function that is fired after the initial shape is created.
        */
        public create(shapeType: DrawingTools.ShapeType, created?: (shape: IPrimitive) => void): void;

        /** Disposes the instance of the DrawingTools class. */
        public dispose(): void;

        /**
        * Adds a shape to the drawing layer and puts it into edit mode.
        * @param shape A shape to put into editting mode.
        */
        public edit(shape: IPrimitive): void;

        /**
         * Finishes any shape create / edit operation currently in progress, and returns the shape that was created or editted through a specified callback function.
         * @param finished A callback function to return the completed shape with.
         */
        public finish(finished?: (shape: IPrimitive) => void): void;

        /**
        * Creates a drawing manager which allows multi-shape editing and displays the toolbar.
        * @param callback A callback function that is triggered after the DrawingTools have loaded.
        */
        public showDrawingManager(callback?: (manager: DrawingManager) => void): void;
    }

    export module Events {
        /////////////////////////////////////
        /// addHandler Definitions
        ////////////////////////////////////

        /**
        * Attaches the handler for the event that is thrown by the target. Use the return object to remove the handler using the removeHandler method.
        * @param target The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.
        * @param eventName The type of event to attach. Supported Events:
        * drawingChanged, drawingChanging, drawingEnded, drawingModeChanged, drawingStarted
        * @param handler The callback function to handle the event when triggered.
        * @returns The handler id.
        */
        export function addHandler(target: DrawingTools, eventName: string, handler: (eventArg?: IPrimitive | IDrawingModeChangedData) => void): IHandlerId;

        /**
        * Attaches the handler for the event that is thrown by the target. Use the return object to remove the handler using the removeHandler method.
        * @param target The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.
        * @param eventName The type of event to attach. Supported Events:
        * disposed, drawingChanged, drawingChanging, drawingEnded, drawingErased, drawingModeChanged, drawingStarted
        * @param handler The callback function to handle the event when triggered.
        * @returns The handler id.
        */
        export function addHandler(target: DrawingManager, eventName: string, handler: (eventArg?: IPrimitive | DrawingTools.DrawingMode) => void): IHandlerId;

        /////////////////////////////////////
        /// addOne Definitions
        ////////////////////////////////////

        /**
        * Attaches the handler for the event that is thrown by the target, but only triggers the handler the first once after being attached.
        * @param target The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.
        * @param eventName The type of event to attach. Supported Events:
        * drawingChanged, drawingChanging, drawingEnded, drawingModeChanged, drawingStarted
        * @param handler The callback function to handle the event when triggered.
        */
        export function addOne(target: DrawingTools, eventName: string, handler: (eventArg?: IPrimitive | IDrawingModeChangedData) => void): void;

        /**
         * Attaches the handler for the event that is thrown by the target, but only triggers the handler the first once after being attached.
         * @param target The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.
         * @param eventName The type of event to attach. Supported Events:
         * disposed, drawingChanged, drawingChanging, drawingEnded, drawingErased, drawingModeChanged, drawingStarted
         * @param handler The callback function to handle the event when triggered.
         */
        export function addOne(target: DrawingManager, eventName: string, handler: (eventArg?: IPrimitive | DrawingTools.DrawingMode) => void): void;

        /////////////////////////////////////
        /// addThrottledHandler Definitions
        ////////////////////////////////////

        /**
        * Attaches the handler for the event that is thrown by the target, where the minimum interval between events (in milliseconds) is specified as a parameter.
        * @param target The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.
        * @param eventName The type of event to attach. Supported Events:
        * drawingChanged, drawingChanging, drawingEnded, drawingModeChanged, drawingStarted
        * @param handler The callback function to handle the event when triggered.
        * @returns The handler id.
        */
        export function addThrottledHandler(target: DrawingTools, eventName: string, handler: (eventArg?: IPrimitive | IDrawingModeChangedData) => void): IHandlerId;

        /**
         * Attaches the handler for the event that is thrown by the target, where the minimum interval between events (in milliseconds) is specified as a parameter.
         * @param target The object to attach the event to; Map, IPrimitive, Infobox, Layer, DrawingTools, DrawingManager, DirectionsManager, etc.
         * @param eventName The type of event to attach. Supported Events:
         * disposed, drawingChanged, drawingChanging, drawingEnded, drawingErased, drawingModeChanged, drawingStarted
         * @param handler The callback function to handle the event when triggered.
         * @param throttleInterval throttle interval (in ms)
         * @returns The handler id.
         */
        export function addThrottledHandler(target: DrawingManager, eventName: string, handler: (eventArg?: IPrimitive | DrawingTools.DrawingMode) => void, throttleInterval: number): IHandlerId;
    }

}

declare module Microsoft.Maps.DrawingTools {
    /**
    * The different drawing modes that the drawing manager can be set to.
    * @requires The Microsoft.Maps.DrawingTools module.
    */
    export enum DrawingMode {
        /** Edit an existing shape. Click on a shape to edit it. */
        edit,

        /** Erase and existing shape. Click on the shapes to erase them. */
        erase,

        /** Sets the drawing manager into an idle mode. */
        none,

        /** Allow the user to draw a polygon. */
        polygon,

        /** Allow the user to draw a polyline. */
        polyline,

        /** Allow the user to draw a pushpin. */
        pushpin
    }

    /**
    * The different types of shapes that are created or edited by the drawing tools.
    * @requires The Microsoft.Maps.DrawingTools module.
    */
    export enum ShapeType {
        /** A polygon shape type. */
        polygon,

        /** A polyline shape type. */
        polyline
    }
}