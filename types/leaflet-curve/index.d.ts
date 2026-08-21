import * as L from "leaflet";

declare module "leaflet" {
    class Curve extends Path {
        /*
         * Return path
         */
        getPath(): Array<string | Array<[]>>;
        /*
         * Set path
         */
        setPath(): Curve;
        /*
         * Get bounds
         */
        getBounds(): LatLngBounds;
        /*
         * Get center
         */
        getCenter(): LatLng;
    }
    /*
     * Drawing Bezier curves and other complex shapes.
     */
    function curve(path: any[], options?: PathOptions): Curve;
}
