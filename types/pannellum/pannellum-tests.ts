import ".";

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
};

window.pannellum.viewer("view", config);
pannellum.viewer("view", config);

const view = document.getElementById("view")!;

window.pannellum.viewer(view, config);
pannellum.viewer(view, config);

window.libpannellum.renderer(view);
libpannellum.renderer(view);
