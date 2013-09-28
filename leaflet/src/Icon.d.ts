/// <reference path="IconOptions.d.ts" />
/// <reference path="IconDefault.d.ts" />
//// updated to 0.6.4
declare module L {

    export class Icon {
        /**
          * Creates an icon instance with the given options.
          */
        constructor(options: IconOptions);

        static Default: IconDefault;
    }
}
