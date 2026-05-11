import { FieldGUID, LinkGUID, PortalGUID } from "./iitctypes";
export {};

declare global {
    /**
     * Get Links of portal
     * search through the links data for all that link from or to a portal. returns an object with separate lists of in
     * and out links. may or may not be as accurate as the portal details, depending on how much data the API returns
     */
    function getPortalLinks(guid: PortalGUID): { in: LinkGUID[]; out: LinkGUID[] };
    function getPortalLinksCount(guid: PortalGUID): number;

    /**
     * Get Fields of portal
     * search through the fields for all that reference a portal
     */
    function getPortalFields(guid: PortalGUID): FieldGUID[];
    function getPortalFields(guid: PortalGUID): number;

    /**
     * find the lat/lon for a portal, using any and all available data
     * (we have the list of portals, the cached portal details, plus links and fields as sources of portal locations)
     */
    function findPortalLatLng(guid: PortalGUID): L.LatLng | undefined;

    /** find guid by position E6 */
    function findPortalGuidByPositionE6(latE6: number, lngE6: number): PortalGUID | null;
    function pushPortalGuidPositionCache(guid: PortalGUID, latE6: number, lngE6: number): void;

    /**
     * get the AP gains from a portal, based only on the brief summary data from portals, links and fields
     * not entirely accurate - but available for all portals on the screen
     */
    function getPortalApGain(guid: PortalGUID): number | undefined;

    /**
     * given counts of resonators, links and fields, calculate the available AP
     * doesn't take account AP for resonator upgrades or AP for adding mods
     */
    function portalApGainMaths(resCount: number, linkCount: number, fieldCount: number): {
        friendlyAp: number;
        enemyAp: number;
        destroyAp: number;
        destroyResoAp: number;
        captureAp: number;
    };
}
