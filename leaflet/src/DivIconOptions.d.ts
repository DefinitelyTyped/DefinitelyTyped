/// <reference path="Point.d.ts" />
declare module L {

    export interface DivIconOptions {

        /**
          * Size of the icon in pixels. Can be also set through CSS.
          */
        iconSize?: Point;
    
        /**
          * The coordinates of the "tip" of the icon (relative to its top left corner).
          * The icon will be aligned so that this point is at the marker's geographical
          * location. Centered by default if size is specified, also can be set in CSS
          * with negative margins.
          */
        iconAnchor?: Point;
    
        /**
          * A custom class name to assign to the icon.
          *
          * Default value: 'leaflet-div-icon'.
          */
        className?: string;
    
        /**
          * A custom HTML code to put inside the div element.
          *
          * Default value: ''.
          */
        html?: string;
    
    }
}
