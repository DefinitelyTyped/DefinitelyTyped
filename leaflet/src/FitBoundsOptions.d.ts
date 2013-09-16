

declare module L {
    export interface FitBoundsOptions extends ZoomPanOptions {
        /**
          * Sets the amount of padding in the top left corner of a map container that
          * shouldn't be accounted for when setting the view to fit bounds. Useful if
          * you have some control overlays on the map like a sidebar and you don't
          * want them to obscure objects you're zooming to.
          *
          * Default value: [0, 0].
          */
        paddingTopLeft?: Point;
        /**
          * The same for bottom right corner of the map.
          * 
          * Default value: [0, 0].
          */
        paddingBottomRight?: Point;
        /**
          * Equivalent of setting both top left and bottom right padding to the same value.
          * 
          * Default value: [0, 0].
          */
        padding?: Point;
    }
} 
 
 
