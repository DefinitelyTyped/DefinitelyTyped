


declare module L {
    export class MultiPolygon extends FeatureGroup {
        /**
          * Instantiates a multi-polyline object given an array of latlngs arrays (one
          * for each individual polygon) and optionally an options object (the same
          * as for MultiPolyline).
          */
        constructor(latlngs: LatLng[][], options?: PolylineOptions);
    
    }
} 
 
 
