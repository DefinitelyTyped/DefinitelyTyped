export {};

declare global {
    /** retrieves current position from map and stores it cookies */
    function storeMapPosition(): void;

    /**
     * either retrieves the last shown position from a cookie, from the
     * URL or if neither is present, via Geolocation. If that fails, it
     * returns a map that shows the whole world.
     */
    function getPosition(): void;
}
