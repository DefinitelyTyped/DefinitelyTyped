/// <reference path="PanOptions.d.ts" />
/// <reference path="ZoomOptions.d.ts" />
declare module L {

    export interface ZoomPanOptions {

        /**
          * If true, the map view will be completely reset (without any animations).
          *
          * Default value: false.
          */
        reset?: boolean;

        /**
          * Sets the options for the panning (without the zoom change) if it occurs.
          */
        pan?: PanOptions;

        /**
          * Sets the options for the zoom change if it occurs.
          */
        zoom?: ZoomOptions;

        /**
          * An equivalent of passing animate to both zoom and pan options (see below).
          */
        animate?: boolean;
    }
}
