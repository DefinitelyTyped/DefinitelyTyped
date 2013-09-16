
declare module L {
    export class WMS {
        /**
          * Instantiates a WMS tile layer object given a base URL of the WMS service and
          * a WMS parameters/options object.
          */
        constructor(baseUrl: string, options: WMSOptions);
    
        /**
          * Merges an object with the new parameters and re-requests tiles on the current
          * screen (unless noRedraw was set to true).
          */
        setParams(params: WMS, noRedraw?: boolean): WMS;
    
    }
} 
 
 
