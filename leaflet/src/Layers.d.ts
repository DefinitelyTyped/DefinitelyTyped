




declare module L {
    export class Layers extends Control implements IEventPowered<Layers> {
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
        fire(type: string, data?: any): Layers;addEventListener(eventMap: any, context?: any): Layers;
        removeEventListener(eventMap?: any, context?: any): Layers;
        cleanAllEventListeners(): Layers
        on(eventMap: any, context?: any): Layers;
        off(eventMap?: any, context?: any): Layers;
    }
} 
 
 
