import { IITC } from "./iitctypes";
import { Intel } from "./inteltypes";

declare global {
    /**
     * register a callback for an event
     * called when portal on map is selected/unselected
     */
    function addHook(event: "portalSelected", callback: (e: EventPortalSelected) => void): void;

    /**
     * register a callback for an event
     * this hook runs after data for any of the public chats has been received and processed, but not
     * yet been displayed. The data hash contains both the unprocessed raw ajax response as well as the processed
     * chat data that is going to be used for display.
     */
    function addHook(event: "publicChatDataAvailable", callback: (e: EventPublicChatDataAvailable) => void): void;

    /**
     * register a callback for an event
     * this hook runs after data for the faction chat has been received and processed, but not yet been
     * displayed. The data hash contains both the unprocessed raw ajax response as well as the processed chat data
     * that is going to be used for display.
     */
    function addHook(event: "factionChatDataAvailable", callback: (e: EventFactionChatDataAvailable) => void): void;

    /**
     * register a callback for an event
     * fired after the details in the sidebar have been (re-)rendered Provides data about the portal
     * that has been selected.
     */
    function addHook(event: "portalDetailsUpdated", callback: (e: EventPortalDetailsUpdated) => void): void;

    /**
     * register a callback for an event
     * called when the set of artifacts (including targets) has changed.
     */
    function addHook(event: "artifactsUpdated", callback: (e: EventArtifactsUpdated) => void): void;

    /**
     * register a callback for an event
     * called when we start refreshing map data
     */
    function addHook(event: "mapDataRefreshStart", callback: (e: EventMapDataRefreshStart) => void): void;

    /**
     * register a callback for an event
     * called just as we start to render data. has callback to inject cached entities into the map render
     */
    function addHook(event: "mapDataEntityInject", callback: (e: EventMapDataEntityInject) => void): void;

    /**
     * register a callback for an event
     * called when we complete the map data load
     */
    function addHook(event: "mapDataRefreshEnd", callback: (e: EventMapDataRefreshEnd) => void): void;

    /**
     * register a callback for an event
     * called when a portal has been received and is about to be added to its layer group.
     * Note that this does NOT mean it is already visible or will be, shortly after.
     * If a portal is added to a hidden layer it may never be shown at all.
     */
    function addHook(event: "portalAdded", callback: (e: EventPortalAdded) => void): void;

    /**
     * register a callback for an event
     * called when a link is about to be added to the map
     */
    function addHook(event: "linkAdded", callback: (e: EventLinkAdded) => void): void;

    /**
     * register a callback for an event
     * called when a field is about to be added to the map
     */
    function addHook(event: "fieldAdded", callback: (e: EventFieldAdded) => void): void;

    /**
     * register a callback for an event
     * called when a portal has been removed
     */
    function addHook(event: "portalRemoved", callback: (e: EventPortalRemoved) => void): void;

    /**
     * register a callback for an event
     * called when a link has been removed
     */
    function addHook(event: "linkRemoved", callback: (e: EventLinkRemoved) => void): void;

    /**
     * register a callback for an event
     * called when a field has been removed
     */
    function addHook(event: "fieldRemoved", callback: (e: EventFieldRemoved) => void): void;

    /**
     * register a callback for an event
     * called after each map data request finished.
     */
    function addHook(event: "requestFinished", callback: (e: EventRequestFinished) => void): void;
    function addHook(event: "nicknameClicked", callback: (e: EventNicknameClicked) => boolean): void;
    function addHook(event: "search", callback: (e: EventSearch) => void): void;

    /**
     * register a callback for an event
     * called after IITC and all plugins loaded
     * NOTE: if iitc is already loaded this event never happens. Check the @see iitcLoaded flag
     */
    function addHook(event: "iitcLoaded", callback: () => void): void;

    /**
     * register a callback for an event
     * alled when a request to load full portal detail completes.
     */
    function addHook(event: "portalDetailLoaded", callback: (e: EventPortalDetailLoaded) => void): void;

    /**
     * register a callback for an event
     * called when the current pane has changed. On desktop, this only selects the current chat pane; on mobile, it
     * also switches between map, info and other panes defined by plugins
     */
    function addHook(event: "paneChanged", callback: (e: EventPaneChanged) => void): void;

    /**
     * register a callback for an event
     * (user defined hooks)
     */
    function addHook(event: string, callback: HookCallback): void;

    /** remove a registered a callback */
    function removeHook(event: string, callback: HookCallback): void;

    /** trigger event */
    function runHooks(event: string, data: any): boolean;

    /** register a custom event */
    function pluginCreateHook(event: string): void;

    /** private hook table */
    var _hooks: { [event: string]: HookCallback[] };

    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    type HookCallback = (data: any) => boolean | void;

    interface EventPortalSelected {
        selectedPortalGuid: string;
        unselectedPortalGuid: string;
    }
    interface EventPublicChatDataAvailable {
        raw: any;
        result: Intel.ChatLine[];
        processed: any;
    }
    interface EventFactionChatDataAvailable {
        raw: any;
        result: Intel.ChatLine[];
        processed: any;
    }
    interface EventPortalDetailsUpdated {
        guid: string;
        portal: IITC.Portal;
        portalDetails: any /* class portalDetail */;
        portalData: IITC.PortalData;
    }
    interface EventArtifactsUpdated {
        old: any;
        new: any;
    }
    interface EventMapDataRefreshStart {
        bounds: L.LatLngBounds;
        mapZoom: number;
        dataZoom: number;
        minPortalLevel: number;
        tileBounds: L.LatLngBounds;
    }
    interface EventMapDataEntityInject {
        callback: (ents: any) => void;
    } // TODO: ents = portalDetailLoaded.ent
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface EventMapDataRefreshEnd {}
    interface EventPortalAdded {
        portal: IITC.Portal;
        previousData: IITC.PortalData;
    }
    interface EventLinkAdded {
        link: IITC.Link;
    }
    interface EventFieldAdded {
        field: IITC.Field;
    }
    interface EventPortalRemoved {
        portal: IITC.Portal;
        data: IITC.PortalData;
    }
    interface EventLinkRemoved {
        link: IITC.Link;
        data: IITC.LinkData;
    }
    interface EventFieldRemoved {
        field: IITC.Field;
        data: IITC.FieldData;
    }
    interface EventRequestFinished {
        success: boolean;
    }
    interface EventNicknameClicked {
        event: MouseEvent;
        nickname: string;
    }
    type EventSearch = any; /* class search.Query */
    type EventPaneChanged = string;

    type PortalDetailEnt = [/*guid*/ string, /*dict.timestamp*/ number, /*data.result*/ Intel.PortalDetails];
    type EventPortalDetailLoaded =
        | { guid: string; success: true; details: IITC.PortalDataDetail; ent: PortalDetailEnt }
        | { guid: string; success: false; details: never; ent: never };
}
