// generate docs: npx typedoc --mode file --includeDeclarations --excludeExternals  core/

// dependencies FIXME: triggers error
// export * as L from "leaflet";
import "leaflet";
import "spectrum";

// base
export * from "./core/constants";
export * from "./core/iitctypes";
export * from "./core/inteltypes";
export * from "./core/main";
export * from "./leafletExtentions";

// direct file conversation
export * from "./core/android"; // from mobile
export * from "./core/artifact";
export * from "./core/boot";
export * from "./core/chat";
export * from "./core/constants";
export * from "./core/data_cache";
export * from "./core/dialog";
export * from "./core/entity_decode";
export * from "./core/entity_info";
export * from "./core/extract_niantic_parameters";
export * from "./core/game_status";
export * from "./core/hooks";
export * from "./core/idle";
export * from "./core/location";
export * from "./core/map_data_calc_tools";
export * from "./core/map_data_debug";
export * from "./core/map_data_render";
export * from "./core/map_data_request";
export * from "./core/ornaments";
export * from "./core/panes";
export * from "./core/player_names";
export * from "./core/portal_data";
export * from "./core/portal_detail";
export * from "./core/portal_detail_display";
export * from "./core/portal_detail_display_tools";
export * from "./core/portal_highlighter";
export * from "./core/portal_info";
export * from "./core/portal_marker";
export * from "./core/redeeming";
export * from "./core/region_scoreboard";
export * from "./core/request_handling";
export * from "./core/search";
export * from "./core/send_request";
export * from "./core/smartphone";
export * from "./core/utils_file";
export * from "./core/utils_misc";
