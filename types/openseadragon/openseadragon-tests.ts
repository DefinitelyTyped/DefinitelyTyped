import Viewer, { Drawer, Viewport, MouseTracker } from 'openseadragon';

const viewer = new Viewer({ id: "viewerid" });

const viewport = new Viewport({ margins: {} });

const element = new Element();

const drawer = new Drawer({ viewer, viewport, element });

const mouseTracker = new MouseTracker({ element });
