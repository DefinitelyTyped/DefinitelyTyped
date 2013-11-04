/// <reference path="Icon.d.ts" />
/// <reference path="DivIconOptions.d.ts" />
declare module L {

    /**
      * Creates a div icon instance with the given options.
      */
    function divIcon(options: DivIconOptions): DivIcon;

    export class DivIcon extends Icon {

        /**
          * Creates a div icon instance with the given options.
          */
        constructor(options: DivIconOptions);
    }
}
