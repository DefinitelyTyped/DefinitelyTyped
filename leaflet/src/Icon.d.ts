/// <reference path="IconOptions.d.ts" />
/// <reference path="Class.d.ts" />
declare module L {

    /**
      * Creates an icon instance with the given options.
      */
    function icon(options: IconOptions): Icon;

    export class Icon extends Class {

        /**
          * Creates an icon instance with the given options.
          */
        constructor(options: IconOptions);
    }

    module Icon {

        /**
          * L.Icon.Default extends L.Icon and is the blue icon Leaflet uses
          * for markers by default.
          */
        export class Default extends Icon {

            /**
              * Creates an icon instance with default options.
              */
            constructor(options: IconOptions);

            static imagePath: string;
        }
    }
}
