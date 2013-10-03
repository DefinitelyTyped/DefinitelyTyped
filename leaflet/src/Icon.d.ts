//// updated to 0.6.4
/// <reference path="IconOptions.d.ts" />
/// <reference path="Class.d.ts" />
declare module L {

    export class Icon extends Class {

        /**
          * Creates an icon instance with the given options.
          */
        constructor(options: IconOptions);

        /**
          * Creates an icon instance with the given options.
          */
        static icon(options: IconOptions): Icon;
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
