export {};

declare global {
    function setupLargeImagePreview(): void;

    /**
     * adds listeners to the layer chooser such that a long press hides
     * all custom layers except the long pressed one.
     */
    function setupLayerChooserSelectOne(): void;

    /** Setup the function to record the on/off status of overlay layerGroups */
    function setupLayerChooserStatusRecorder(): void;

    function setupStyles(): void;
    function setupIcons(): void;
    function createDefaultBaseMapLayers(): void;
    function setupMap(): void;

    /** adds a base layer to the map. done separately from the above, so that plugins that add base layers can be the default */
    function setMapBaseLayer(): void;

    /**
     * renders player details into the website. Since the player info is
     * included as inline script in the original site, the data is static
     * and cannot be updated.
     */
    function setupPlayerStat(): void;

    function setupSidebarToggle(): void;
    function setupTooltips(): void;
    function setupLayerChooserApi(): void;
    function extendLeaflet(): void;

    // BOOTING ///////////////////////////////////////////////////////////
    function prepPluginsToLoad(): void;
    function boot(): void;

    /**
     * OMS doesn't cancel the original click event, so the topmost marker will get a click event while spiderfying.
     * Also, OMS only supports a global callback for all managed markers. Therefore, we will use a custom event that gets fired
     * for each marker.
     */
    function setupOMS(): void;
    function registerMarkerForOMS(marker: L.Marker): void;
}
