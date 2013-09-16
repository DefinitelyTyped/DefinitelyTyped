


declare module L {
    export class MultiPolyline extends FeatureGroup {
        /**
          * Instantiates a multi-polyline object given an array of arrays of geographical
          * points (one for each individual polyline) and optionally an options object.
          */
        constructor(latlngs: LatLng[][], options?: PolylineOptions);
    
    }
} 
 
 
