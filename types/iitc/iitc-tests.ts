import "iitc";
import * as L from "leaflet";

// TODO: split in separated files

// Hook
addHook("search", () => {});
window.addHook("search", () => {});

// Dialog
dialog({ html: "test" });

// android
android.copy("test");

// Leaflet - extentions
const layer = L.geodesicPolyline([]); // $ExpectType GeodesicPolyline
if (layer instanceof L.GeodesicPolyline) {}

// main
if (plugin.drawTools) {}
if (window.plugin.drawTools) {}

// constants
const color = TEAM_ENL;

// artifacts
artifact.showArtifactList();

// chat
chat.show("all");
