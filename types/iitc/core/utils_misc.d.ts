import * as L from "leaflet";

declare global {
    /**
     * Show about dialog
     *
     * Plugins metadata come from 2 sources:
     * - buildName, pluginId, dateTimeVersion: inserted in plugin body by build script
     *   (only standard plugins)
     * - script.name/version/description: from GM_info object, passed to wrapper
     *   `script` may be not available if userscript manager does not provede GM_info
     *   (atm: IITC-Mobile for iOS)
     */
    function aboutIITC(): void;

    function layerGroupLength(layerGroup: L.LayerGroup): number;

    /** retrieves parameter from the URL?query=string. */
    function getURLParam(param: string): string;

    /**
     * read cookie by name.
     * https://stackoverflow.com/a/5639455/1684530 by cwolves
     */
    function readCookie(name: string): string;

    function writeCookie(name: string, val: string): void;

    function eraseCookie(name: string): void;

    /**
     * certain values were stored in cookies, but we're better off using localStorage instead - make it easy to convert
     */
    function convertCookieToLocalStorage(name: string): void;

    /**
     * add thousand separators to given number.
     * https://stackoverflow.com/a/1990590/1684530 by Doug Neiner.
     */
    function digits(d: number | string): string;

    function zeroPad(num: number, pad: number): string;

    function unixTimeToString(time?: string | number | Date, full?: boolean): string;

    /**
     * convert time to string
     * converts a javascript time to a precise date and time (optionally with millisecond precision)
     * formatted in ISO-style YYYY-MM-DD hh:mm:ss.mmm - but using local timezone
     */
    function unixTimeToDateTimeString(ticks: number | string | Date, millisecond?: boolean): string;

    /** convert time to string */
    function unixTimeToHHmm(time: number | string | Date): string;

    /** format time difference */
    function formatInterval(seconds: number, maxTerms?: number): string;

    function rangeLinkClick(): void;
    function showPortalPosLinks(lat: number, lng: number, name?: string): void;

    function isTouchDevice(): boolean;

    function androidCopy(text: string): boolean;

    function getCurrentZoomTileParameters(): any; // return getMapZoomTileParameters()

    /** returns number of pixels left to scroll down before reaching the bottom. */
    function scrollBottom(element: string | JQuery): number;

    function zoomToAndShowPortal(guid: string, latlng: L.LatLng): void;

    function selectPortalByLatLng(lat: number | L.LatLng | [number, number], lng?: number): void;

    /**
     * escape a javascript string, so quotes and backslashes are escaped with a backslash
     * (for strings passed as parameters to html onclick="..." for example)
     */
    function escapeJavascriptString(str: string): string;

    /** escape special characters, such as tags */
    function escapeHtmlSpecialChars(str: string): string;

    function prettyEnergy(nrg: number): string;

    function uniqueArray(arr: any[]): any[];

    function genFourColumnTable(blocks: any[]): string;

    /** converts given text with newlines (\n) and tabs (\t) to a HTML table automatically. */
    function convertTextToTableMagic(text: string): string;

    /**
     * Given 3 sets of points in an array[3]{lat, lng} returns the area of the triangle
     * NOTE: not geodesic area!
     */
    function calcTriArea(p: [L.LatLng, L.LatLng, L.LatLng]): number;

    /** Update layerGroups display status to window.overlayStatus and localStorage 'ingress.intelmap.layergroupdisplayed' */
    function updateDisplayedLayerGroup(name: string, display: boolean): void;

    /**
     * Read layerGroup status from window.overlayStatus if it was added to map,
     * read from cookie if it has not added to map yet.
     * @return 'defaultDisplay' if both overlayStatus and cookie didn't have the record
     */
    function isLayerGroupDisplayed(name: string, defaultDisplay: boolean): boolean;

    function addLayerGroup(name: string, layerGroup: L.LayerGroup, defaultDisplay?: boolean): void;

    function removeLayerGroup(layerGroup: L.LayerGroup): void;

    function clampLatLng(latlng: L.LatLng): L.LatLng;

    function clampLatLngBounds(bounds: L.LatLngBounds): L.LatLngBounds;

    /**
     * Makes the permalink for the portal with specified latlng, possibly including current map view.
     * Portal latlng can be omitted to create mapview-only permalink.
     * @param option:
     * - includeMapView: Boolean = null
     * Use to add zoom level and latlng of current map center.
     * - fullURL: Boolean = null
     * Use to make absolute fully qualified URL (default: relative link).
     */
    function makePermalink(latlng: L.LatLng, options?: {}): string;

    // TODO: String.prototype.capitalize = (): string;
    // TODO: String.prototype.startsWith = (string): boolean;
}
