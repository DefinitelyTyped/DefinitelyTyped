





declare module L {
    export class Control implements IControl {
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
        static Zoom: new () => Zoom;
    
        static Attribution: new () => Attribution;
    
        static Layers: new () => Layers;
    
        static Scale: new () => Scale;
        ////////////
        //// IControl members
        ////////////
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
} 
 
 
