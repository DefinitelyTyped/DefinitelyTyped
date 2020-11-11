declare namespace google.maps.geometry {
    namespace encoding {
        function decodePath(encodedPath: string): LatLng[];

        function encodePath(path: LatLng[] | MVCArray<LatLng>): string;
    }

    /**
     * Utility functions for computing geodesic angles, distances and areas.
     * The default radius is Earth's radius of 6378137 meters.
     */
    namespace spherical {
        /**
         * Returns the area of a closed path.
         * The computed area uses the same units as the radius.
         * The radius defaults to the Earth's radius in meters,
         * in which case the area is in square meters.
         */
        function computeArea(path: LatLng[] | MVCArray<LatLng>, radius?: number): number;

        /**
         * Returns the distance, in meters, between two LatLngs.
         * You can optionally specify a custom radius.
         * The radius defaults to the radius of the Earth.
         */
        function computeDistanceBetween(from: LatLng, to: LatLng, radius?: number): number;

        /**
         * Returns the heading from one LatLng to another LatLng.
         * Headings are expressed in degrees clockwise from North within the range
         * [-180,180).
         */
        function computeHeading(from: LatLng, to: LatLng): number;

        /**
         * Returns the length of the given path.
         */
        function computeLength(path: LatLng[] | MVCArray<LatLng>, radius?: number): number;

        /**
         * Returns the LatLng resulting from moving a distance from an origin in
         * the specified heading (expressed in degrees clockwise from north).
         */
        function computeOffset(from: LatLng, distance: number, heading: number, radius?: number): LatLng;

        /**
         * Returns the location of origin when provided with a LatLng destination,
         * meters travelled and original heading. Headings are expressed in
         * degrees clockwise from North. This function returns null when no
         * solution is available.
         */
        function computeOffsetOrigin(to: LatLng, distance: number, heading: number, radius?: number): LatLng;

        /**
         * Returns the signed area of a closed path. The signed area may be used
         * to determine the orientation of the path. The computed area uses the
         * same units as the radius. The radius defaults to the Earth's radius in
         * meters, in which case the area is in square meters.
         */
        function computeSignedArea(loop: LatLng[] | MVCArray<LatLng>, radius?: number): number;

        /**
         * Returns the LatLng which lies the given fraction of the way between the
         * origin LatLng and the destination LatLng.
         */
        function interpolate(from: LatLng, to: LatLng, fraction: number): LatLng;
    }

    namespace poly {
        function containsLocation(point: LatLng, polygon: Polygon): boolean;

        function isLocationOnEdge(point: LatLng, poly: Polygon | Polyline, tolerance?: number): boolean;
    }
}
