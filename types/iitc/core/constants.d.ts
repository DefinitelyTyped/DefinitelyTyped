import { IITC, PortalGUID } from "./iitctypes";

export {};

declare global {
    const script_info: any;
    const iitcBuildDate: string;

    // CONFIG OPTIONS ////////////////////////////////////////////////////
    const REFRESH: number; /** @default = 30; // refresh view every 30s (base time) */
    const ZOOM_LEVEL_ADJ: number; /** @default = 5; // add 5 seconds per zoom level */
    const ON_MOVE_REFRESH: number; /** @default = 2.5;  //refresh time to use after a movement event */
    const MINIMUM_OVERRIDE_REFRESH:
        number; /** @default = 10; //limit on refresh time since previous refresh, limiting repeated move refresh rate */
    const REFRESH_GAME_SCORE: number; /** @default = 15 * 60; // refresh game score every 15 minutes */
    const MAX_IDLE_TIME: number; /** @default = 15 * 60; // stop updating map after 15min idling */
    const HIDDEN_SCROLLBAR_ASSUMED_WIDTH: number; /** @default = 20; */
    const SIDEBAR_WIDTH: number; /** @default = 300; */

    // how many pixels to the top before requesting new data
    const CHAT_REQUEST_SCROLL_TOP: number; /** @default = 200; */
    const CHAT_SHRINKED: number; /** @default = 60; */

    // Minimum area to zoom ratio that field MU's will display
    const FIELD_MU_DISPLAY_AREA_ZOOM_RATIO: number; /** @default 0.001; */

    // Point tolerance for displaying MU's
    const FIELD_MU_DISPLAY_POINT_TOLERANCE: number; /** @default = 60 */

    const COLOR_SELECTED_PORTAL: string; /** @default '#f0f' */

    /**
     * Team colors
     * @default ['#FF6600','#0088FF','#03DC03']
     */
    const COLORS: [string, string, string];
    const COLORS_LVL: string[]; /** @default ['#000',...,'#9627F4'] */
    const COLORS_MOD: {}; /** @default {VERY_RARE:'#b08cff',RARE:'#73a8ff',COMMON:'#8cffbf'} */

    const MOD_TYPE: {}; // { RES_SHIELD: 'Shield', MULTIHACK: 'Multi-hack', FORCE_AMP: 'Force Amp', HEATSINK: 'Heat Sink', TURRET: 'Turret', LINK_AMPLIFIER: 'Link Amp' };

    // circles around a selected portal that show from where you can hack
    // it and how far the portal reaches (i.e. how far links may be made
    // from this portal)
    const ACCESS_INDICATOR_COLOR: string; // = 'orange';
    const RANGE_INDICATOR_COLOR: string; // = 'red'

    // min zoom for intel map - should match that used by stock intel
    const MIN_ZOOM: number; // = 3;

    // used when zoom level is not specified explicitly (must contain all the portals)
    const DEFAULT_ZOOM: number; // = 15;

    const DEFAULT_PORTAL_IMG: string; // '//commondatastorage.googleapis.com/ingress.com/img/default-portal-image.png';
    const NOMINATIM: string; // '//nominatim.openstreetmap.org/search?format=json&polygon_geojson=1&q=';

    // INGRESS CONSTANTS /////////////////////////////////////////////////
    // http://decodeingress.me/2012/11/18/ingress-portal-levels-and-link-range/
    const RESO_NRG: number[]; /** @default [0,1000,1500,2000,2500,3000,4000,5000,6000] */
    const HACK_RANGE: number; /** @default 40 in meters, max. distance from portal to be able to access it */
    const OCTANTS: string[]; /** @default ['E', 'NE', 'N', 'NW', 'W', 'SW', 'S', 'SE'] */
    const OCTANTS_ARROW: string[]; /** @default ['→', '↗', '↑', '↖', '←', '↙', '↓', '↘'] */
    const DESTROY_RESONATOR: number; /** @default 75 AP for destroying portal */
    const DESTROY_LINK: number; /** @default 187  AP for destroying link */
    const DESTROY_FIELD: number; /** @default 750 AP for destroying field */
    const CAPTURE_PORTAL: number; /** @default 500 AP for capturing a portal */
    const DEPLOY_RESONATOR: number; /** @default 125 AP for deploying a resonator */
    const COMPLETION_BONUS: number; /** @default 250; AP for deploying all resonators on portal */
    const UPGRADE_ANOTHERS_RESONATOR: number; /** @default 65; AP for upgrading another's resonator */
    const MAX_PORTAL_LEVEL: number; /** @default 8 */
    const MAX_RESO_PER_PLAYER: number[]; /** @default [0, 8, 4, 4, 4, 2, 2, 1, 1] */

    // OTHER MORE-OR-LESS CONSTANTS //////////////////////////////////////
    /** Team constants */
    const TEAM_ENL: number; /** @default 2 */
    const TEAM_RES: number; /** @default 1 */
    const TEAM_NONE: number; /** @default 0 */

    /** Team CSS = ['none', 'res', 'enl'] */
    const TEAM_TO_CSS: [string, string, string];

    /** ['Neutral', 'Resistance', 'Enlightened'] */
    const TEAM_NAMES: [string, string, string];

    // STORAGE ///////////////////////////////////////////////////////////
    // global constiables used for storage. Most likely READ ONLY. Proper
    // way would be to encapsulate them in an anonymous function and write
    // getters/setters, but if you are careful enough, this works.
    var refreshTimeout: any; // = undefined;
    var urlPortal: any; // = null;
    var urlPortalLL: any; // = null;

    /** guid of current selected portal */
    var selectedPortal: PortalGUID | null;

    var portalRangeIndicator: any; // = null;
    var portalAccessIndicator: any; // = null;
    var mapRunsUserAction: any; // = false;

    const portalsFactionLayers: L.LayerGroup;
    const linksFactionLayers: L.LayerGroup;
    const fieldsFactionLayers: L.LayerGroup;

    /** list of all loaded portals */
    var portals: { [guid: string /* PortalGUID */]: IITC.Portal };

    /** list of all loaded links */
    var links: { [guid: string /* LinkGUID */]: IITC.Link };

    /** list of all fields */
    var fields: { [guid: string /* FieldGUID */]: IITC.Field };

    // contain current status(on/off) of overlay layerGroups.
    // But you should use isLayerGroupDisplayed(name) to check the status
    var overlayStatus: {};
}
