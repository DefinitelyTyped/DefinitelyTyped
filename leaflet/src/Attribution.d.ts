declare module L {
    export class Attribution extends Control {
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
} 
 
 
