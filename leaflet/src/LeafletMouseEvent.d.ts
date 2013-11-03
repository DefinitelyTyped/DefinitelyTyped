/// <reference path="LeafletEvent.d.ts" />
/// <reference path="LatLng.d.ts" />
/// <reference path="Point.d.ts" />
declare module L {

    export interface LeafletMouseEvent extends LeafletEvent {

        /**
          * The geographical point where the mouse event occured.
          */
        latlng: LatLng;
    
        /**
          * Pixel coordinates of the point where the mouse event occured relative to
          * the map layer.
          */
        layerPoint: Point;
    
        /**
          * Pixel coordinates of the point where the mouse event occured relative to
          * the map сontainer.
          */
        containerPoint: Point;
    
        /**
          * The original DOM mouse event fired by the browser.
          */
        originalEvent: MouseEvent;
    }
}
