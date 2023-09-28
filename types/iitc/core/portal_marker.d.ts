import { IITC } from "./iitctypes";

export {};

declare global {
    function portalMarkerScale(): number;

    /**
     *  create a new marker. 'data' contain the IITC-specific entity data to be stored in the object options
     */
    function createMarker(latlng: L.LatLng, data: IITC.PortalData): IITC.Portal;

    function setMarkerStyle(marker: IITC.Portal, selected: boolean): void;

    function getMarkerStyleOptions(details: IITC.PortalOptions): L.PathOptions;
}
