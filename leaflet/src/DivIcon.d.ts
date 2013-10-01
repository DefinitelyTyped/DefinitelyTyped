//// updated to 0.6.4
/// <reference path="DivIconOptions.d.ts" />
declare module L {

    export class DivIcon extends Icon {

        /**
          * Creates a div icon instance with the given options.
          */
        constructor(options: DivIconOptions);

        /**
          * Creates a div icon instance with the given options.
          */
        static divIcon(options: DivIconOptions): DivIcon;
    
    }
}
