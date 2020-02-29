import OpenSeadragon, { Viewport, Drawer, MouseTracker } from 'openseadragon';

const viewer = OpenSeadragon({ id: "viewerid" });

viewer.addHandler('tile-loaded', (event) => {
    console.log(event.eventSource);
});

viewer.addHandler('full-screen', (event) => {
    console.log(event.fullScreen);
});

const viewport = new Viewport({ margins: {} });

const element = new Element();

const drawer = new Drawer({ viewer, viewport, element });

const mouseTracker = new MouseTracker({ element });
