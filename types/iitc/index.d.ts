// Type definitions for IITC (Ingress Intel Total Conversation) 0.30
// Project: https://github.com/IITC-CE/ingress-intel-total-conversion
// Definitions by: McBen <https://github.com/McBen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.6

// generate docs: npx typedoc --mode file --includeDeclarations --excludeExternals  core/

// dependencies FIXME: triggers error
// export * as L from "leaflet";
import "leaflet";
import "spectrum";

// base
export * from "./leafletExtentions";
export * from "./core/main";
export * from "./core/constants";
export * from "./core/iitctypes";
export * from "./core/inteltypes";

// direct file conversation
export * from "./core/android"; // from mobile
export * from "./core/artifact";
export * from "./core/dialog";
export * from "./core/hooks";
export * from "./core/chat";
export * from "./core/utils_misc";
export * from "./core/data_cache";
export * from "./core/map_data_request";
export * from "./core/map_data_render";
export * from "./core/map_data_debug";
export * from "./core/player_names";
export * from "./core/entity_info";
export * from "./core/region_scoreboard";
export * from "./core/map_data_calc_tools";
export * from "./core/search";
export * from "./core/game_status";
export * from "./core/entity_decode";
export * from "./core/portal_data";
export * from "./core/portal_highlighter";
export * from "./core/portal_detail";
export * from "./core/portal_info";
export * from "./core/send_request";
export * from "./core/portal_marker";
export * from "./core/portal_detail_display";
export * from "./core/portal_detail_display_tools";
export * from "./core/smartphone";
export * from "./core/panes";
export * from "./core/extract_niantic_parameters";
export * from "./core/idle";
export * from "./core/utils_file";
export * from "./core/request_handling";
export * from "./core/redeeming";
export * from "./core/ornaments";
export * from "./core/location";
export * from "./core/boot";
export * from "./core/constants";
