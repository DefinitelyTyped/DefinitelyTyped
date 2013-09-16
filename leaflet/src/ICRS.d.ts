



declare module L {
    export interface ICRS {
        /**
          * Projection that this CRS uses.
          */
        projection: IProjection;
    
        /**
          * Transformation that this CRS uses to turn projected coordinates into screen
          * coordinates for a particular tile service.
          */
        transformation: Transformation;
    
        /**
          * Standard code name of the CRS passed into WMS services (e.g. 'EPSG:3857').
          */
        code: string;
    
        /**
          * Projects geographical coordinates on a given zoom into pixel coordinates.
          */
        latLngToPoint(latlng: LatLng, zoom: number): Point;
    
        /**
          * The inverse of latLngToPoint. Projects pixel coordinates on a given zoom
          * into geographical coordinates.
          */
        pointToLatLng(point: Point, zoom: number): LatLng;
    
        /**
          * Projects geographical coordinates into coordinates in units accepted
          * for this CRS (e.g. meters for EPSG:3857, for passing it to WMS services).
          */
        project(latlng: LatLng): Point;
    
        /**
          * Returns the scale used when transforming projected coordinates into pixel
          * coordinates for a particular zoom. For example, it returns 256 * 2^zoom for
          * Mercator-based CRS.
          */
        scale(zoom: number): number;
        
    }
    /**
      * This method restores the L global variale to the original value it had 
      * before Leaflet inclusion, and returns the real Leaflet namespace.
      */
} 
 
 
