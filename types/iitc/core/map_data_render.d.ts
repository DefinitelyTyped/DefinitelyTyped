import * as L from "leaflet";
import { IITC } from "./iitctypes";
import { Intel } from "./inteltypes";

/** class to handle rendering into leaflet the JSON data from the servers */
export class Render {
    portalMarkerScale?: number;

    private isRendering: boolean;

    /** object - represents the set of all deleted game entity GUIDs seen in a render pass */
    private deletedGuid: {};
    private seenPortalsGuid: {};
    private seenLinksGuid: {};
    private seenFieldsGuid: {};
    private bounds: L.LatLngBounds;
    private level: number;

    /** start a render pass. called as we start to make the batch of data requests to the servers */
    startRenderPass(level: number, bounds: L.LatLngBounds): void;

    clearPortalsOutsideBounds(bounds: L.LatLngBounds): void;
    clearFieldsOutsideBounds(bounds: L.LatLngBounds): void;

    /** process deleted entity list and entity data */
    processTileData(tiledata: any): void;

    processDeletedGameEntityGuids(deleted: {}): void;
    processGameEntities(entities: {}): void;

    /**
     * End a render pass. does any cleaning up required, postponed processing of data, etc. called when the render
     * is considered complete
     */
    endRenderPass(): void;

    bringPortalsToFront(): void;
    deleteEntity(guid: string): void;
    deletePortalEntity(guid: string): void;
    deleteLinkEntity(guid: string): void;
    deleteFieldEntity(guid: string): void;

    /**
     * intel no longer returns portals at anything but the closest zoom
     * stock intel creates 'placeholder' portals from the data in links/fields - IITC needs to do the same
     * we only have the portal guid, lat/lng coords, and the faction - no other data
     * having the guid, at least, allows the portal details to be loaded once it's selected. however,
     * no highlighters, portal level numbers, portal names, useful counts of portals, etc are possible
     */
    createPlaceholderPortalEntity(guid: string, latE6: number, lngE6: number, team: "E" | "R" | "N"): void;

    createPortalEntity(ent: Intel.PortalDetails): void;
    createFieldEntity(ent: Intel.FieldDetails): void;
    createLinkEntity(ent: Intel.LinkDetails): void;

    rescalePortalMarkers(): void;

    /** add the portal to the visible map layer */
    addPortalToMapLayer(portal: IITC.Portal): void;
    removePortalFromMapLayer(portal: IITC.Portal): void;
}
