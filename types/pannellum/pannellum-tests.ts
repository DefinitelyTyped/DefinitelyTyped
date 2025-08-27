import "pannellum";

const hotspot: Pannellum.HotspotOptions = {
    id: "hs-main",
    pitch: 20,
    yaw: 30,
    type: "info",
};

const config: Pannellum.ConfigOptions = {
    type: "equirectangular",
    panorama: "360.jpg",
    autoLoad: true,
    hotSpots: [hotspot],
    strings: {
        loadingLabel: "Loading …",
    },
};

declare const view: HTMLElement;

// Test the global namespace
pannellum.viewer("view", config);
pannellum.viewer(view, config);
libpannellum.renderer(view);

// Test the window object namespace
window.pannellum.viewer("view", config);
window.pannellum.viewer(view, config);
window.libpannellum.renderer(view);

// Test Viewer class
declare const viewer: Pannellum.Viewer;
viewer.on("scenechange", (id) => console.log("Scene changed to", id));
viewer.off();
