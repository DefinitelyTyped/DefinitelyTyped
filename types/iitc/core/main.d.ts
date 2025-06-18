import * as jQuery from "jquery";
import { FieldGUID, IITC, LinkGUID, PortalGUID } from "./iitctypes";
import { Intel } from "./inteltypes";
import { MapDataRequest } from "./map_data_request";

declare global {
    /** All iitc Pluigns */
    var plugin: any;

    /** iitc-Pluigns setup/initialize function */
    var bootPlugins: BootCallback[];
    type BootCallback = () => void;

    /** if true iitc main script was already loaded (plugin need to trigger setup on iths own) */
    var iitcLoaded: boolean;

    /** the Leaflet Map */
    var map: L.Map;

    /** google-api */
    var gapi: any;

    /** Layer visibilty control */
    var layerChooser: L.Control.Layers;

    /** Info about current player/agent */
    var PLAYER: Intel.PlayerInfo;

    /** Request handler */
    var mapDataRequest: MapDataRequest;
    var DEFAULT_MAX_IDLE_TIME: number;
    var DEFAULT_REFRESH: number;

    function startRefreshTimeout(): void;

    /** Load & show Portal Details Window */
    function renderPortalDetails(guid: PortalGUID | null): void;

    /** Make sure Portal is visible in Window */
    function zoomToAndShowPortal(guid: PortalGUID, position: L.LatLng): void;

    /** Create Portal-Marker */
    function createMarker(position: L.LatLng, options: IITC.PortalOptions): L.CircleMarker;

    // Map Stuff
    function selectPortalByLatLng(lat: number, lng: number): void;

    /** add Layergroup to leaflets layer-chooser */
    function addLayerGroup(name: string, layer: L.LayerGroup, defaultVisibile: boolean, groupname?: string): void;

    /** remove a layer */
    function removeLayerGroup(layer: L.LayerGroup): void;

    /** get layer visiblity */
    function isLayerGroupDisplayed(name: string, defaultDisplay?: boolean): boolean;

    /** set layer visiblity */
    function updateDisplayedLayerGroup(name: string, display: boolean): void;

    /** escape Html string */
    function escapeHtmlSpecialChars(name: string): string;

    /** prepare marker for OverlappingMarkerSpiderfier */
    function registerMarkerForOMS(marker: L.Marker): void;

    /** convert team string to id */
    function teamStringToId(team: string): number;

    // Android
    function useAndroidPanes(): boolean;
    var currentPane: string;
    function show(paneID: string): void;

    /** update status bar */
    function renderUpdateStatus(): void;
}
