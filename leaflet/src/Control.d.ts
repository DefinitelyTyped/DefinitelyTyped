/// <reference path="IControl.d.ts" />
/// <reference path="ControlOptions.d.ts" />
/// <reference path="AttributionOptions.d.ts" />
/// <reference path="LayersOptions.d.ts" />
/// <reference path="ZoomOptions.d.ts" />
/// <reference path="ScaleOptions.d.ts" />
/// <reference path="Map.d.ts" />
/// <reference path="Class.d.ts" />
/// <reference path="IEventPowered.d.ts" />
/// <reference path="ILayer.d.ts" />
/// <reference path="LeafletEvent.d.ts" />
declare module L {

    export class Control extends Class implements IControl {

        /**
          * Creates a control with the given options.
          */
        constructor(options?: ControlOptions);

        /**
          * Sets the position of the control. See control positions.
          */
        setPosition(position: string): Control;

        /**
          * Returns the current position of the control.
          */
        getPosition(): string;

        /**
          * Adds the control to the map.
          */
        addTo(map: Map): Control;

        /**
          * Removes the control from the map.
          */
        removeFrom(map: Map): Control;

        /**
          * Returns the HTML container of the control.
          */
        getContainer(): HTMLElement;

        // IControl members

        /**
          * Should contain code that creates all the neccessary DOM elements for the
          * control, adds listeners on relevant map events, and returns the element
          * containing the control. Called on map.addControl(control) or control.addTo(map).
          */
        onAdd(map: Map): HTMLElement;

        /**
          * Optional, should contain all clean up code (e.g. removes control's event
          * listeners). Called on map.removeControl(control) or control.removeFrom(map).
          * The control's DOM container is removed automatically.
          */
        onRemove(map: Map): void;
    }

    module Control {

        export class Zoom extends L.Control {

            /**
              * Creates a zoom control.
              */
            constructor(options?: ZoomOptions);
        }

        export class Attribution extends L.Control {

            /**
              * Creates an attribution control.
              */
            constructor(options?: AttributionOptions);

            /**
              * Sets the text before the attributions.
              */
            setPrefix(prefix: string): Attribution;

            /**
              * Adds an attribution text (e.g. 'Vector data &copy; CloudMade').
              */
            addAttribution(text: string): Attribution;

            /**
              * Removes an attribution text.
              */
            removeAttribution(text: string): Attribution;

        }

        export class Layers extends L.Control implements IEventPowered<Layers> {

            /**
              * Creates an attribution control with the given layers. Base layers will be
              * switched with radio buttons, while overlays will be switched with checkboxes.
              */
            constructor(baseLayers?: any, overlays?: any, options?: LayersOptions);

            /**
              * Adds a base layer (radio button entry) with the given name to the control.
              */
            addBaseLayer(layer: ILayer, name: string): Layers;

            /**
              * Adds an overlay (checkbox entry) with the given name to the control.
              */
            addOverlay(layer: ILayer, name: string): Layers;

            /**
              * Remove the given layer from the control.
              */
            removeLayer(layer: ILayer): Layers;

            ////////////////
            //// Methods for events
            ////////////////
            addEventListener(type: string, fn: (e: LeafletEvent) => void, context?: any): Layers;
            addOneTimeEventListener(type: string, fn: (e: LeafletEvent) => void, context?: any): Layers;
            removeEventListener(type: string, fn?: (e: LeafletEvent) => void, context?: any): Layers;
            hasEventListeners(type: string): boolean;
            fireEvent(type: string, data?: any): Layers;
            on(type: string, fn: (e: LeafletEvent) => void, context?: any): Layers;
            once(type: string, fn: (e: LeafletEvent) => void, context?: any): Layers;
            off(type: string, fn?: (e: LeafletEvent) => void, context?: any): Layers;
            fire(type: string, data?: any): Layers; addEventListener(eventMap: any, context?: any): Layers;
            removeEventListener(eventMap?: any, context?: any): Layers;
            cleanAllEventListeners(): Layers
            on(eventMap: any, context?: any): Layers;
            off(eventMap?: any, context?: any): Layers;
        }

        export class Scale extends L.Control {

            /**
              * Creates an scale control with the given options.
              */
            constructor(options?: ScaleOptions);

        }
    }

    export class control {

        /**
          * Creates a control with the given options.
          */
        function (options?: ControlOptions): Control;

        /**
          * Creates a zoom control.
          */
        static zoom(options?: ZoomOptions): L.Control.Zoom;

        /**
          * Creates an attribution control.
          */
        static attribution(options?: AttributionOptions): L.Control.Attribution;

        /**
            * Creates an attribution control with the given layers. Base layers will be
            * switched with radio buttons, while overlays will be switched with checkboxes.
            */
        static layers(baseLayers?: any, overlays?: any, options?: LayersOptions): L.Control.Layers;

        /**
          * Creates an scale control with the given options.
          */
        static scale(options?: ScaleOptions): L.Control.Scale;
    }
}
