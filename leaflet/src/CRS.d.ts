/// <reference path="ICRS.d.ts" />
declare module L {

    export class CRS {

        /**
          * The most common CRS for online maps, used by almost all free and commercial
          * tile providers. Uses Spherical Mercator projection. Set in by default in
          * Map's crs option.
          */
        static EPSG3857: ICRS;
    
        /**
          * A common CRS among GIS enthusiasts. Uses simple Equirectangular projection.
          */
        static EPSG4326: ICRS;
    
        /**
          * Rarely used by some commercial tile providers. Uses Elliptical Mercator
          * projection.
          */
        static EPSG3395: ICRS;
    
        /**
          * A simple CRS that maps longitude and latitude into x and y directly. May be
          * used for maps of flat surfaces (e.g. game maps). Note that the y axis should
          * still be inverted (going from bottom to top).
          */
        static Simple: ICRS;
    
    }
}
