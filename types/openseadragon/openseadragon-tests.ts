import OpenSeadragon, { Viewport, Drawer, MouseTracker, IIIFTileSource, Button, ControlAnchor, PreprocessEventHandler } from 'openseadragon';

// @ts-expect-error
OpenSeadragon.setString('abc', 123);

const viewer = OpenSeadragon({ id: 'viewerid' });

// @ts-expect-error
viewer.addHandler('canvas-click', ({ fullScreen }) => {
    console.log(fullScreen);
});

const preProcessHandler: PreprocessEventHandler = ({ eventType }) => {
    // @ts-expect-error
    console.log(eventType === 'open');
};

viewer.addHandler('tile-loaded', event => {
    console.log(event.eventSource);
});

viewer.addHandler('full-screen', event => {
    console.log(event.fullScreen);
});

viewer.addSimpleImage({ url: '2003rosen1799/0001q.jpg' });

viewer.addTiledImage({ tileSource: '2003rosen1799/0001q.jpg' });

const button = new Button({});

viewer.addControl(button.element, {
    anchor: ControlAnchor.TOP_LEFT,
});

const viewport = new Viewport({ margins: {} });

const element = new Element();

const drawer = new Drawer({ viewer, viewport, element });

const mouseTracker = new MouseTracker({ element });

const viewer3 = OpenSeadragon({
    id: 'openseadragon',
    prefixUrl: 'openseadragon/images/',
    showNavigator: false,
    tileSources: {
        type: 'legacy-image-pyramid',
        levels: [
            {
                url: '2003rosen1799/0001q.jpg',
                height: 889,
                width: 600,
            },
        ],
    },
});

const iiifTileSource = new IIIFTileSource({
    tileFormat: 'jpg',
});
