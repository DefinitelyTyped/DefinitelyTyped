import OpenSeadragon, {
    Button,
    ControlAnchor,
    Drawer,
    IIIFTileSource,
    MouseTracker,
    PreprocessEventHandler,
    Viewport,
} from "openseadragon";

// @ts-expect-error
OpenSeadragon.setString("abc", 123);

let viewer: OpenSeadragon.Viewer;
viewer = OpenSeadragon({});
viewer = OpenSeadragon({
    id: "id",
    prefixUrl: "prefixUrl",
    navigatorId: "navigatorId",
    navigatorBackground: "navigatorBackground",
    navigatorBorderColor: "navigatorBorderColor",
    navigatorDisplayRegionColor: "navigatorDisplayRegionColor",
    referenceStripScroll: "referenceStripScroll",
    referenceStripPosition: "referenceStripPosition",
    tabIndex: 0,
    blendTime: 0,
    defaultZoomLevel: 0,
    opacity: 0,
    degrees: 0,
    minZoomLevel: 0,
    maxZoomLevel: 0,
    minZoomImageRatio: 0,
    maxZoomPixelRatio: 0,
    smoothTileEdgesMinZoom: 0,
    minScrollDeltaTime: 0,
    pixelsPerWheelLine: 0,
    pixelsPerArrowPress: 0,
    visibilityRatio: 0,
    imageLoaderLimit: 0,
    clickTimeThreshold: 0,
    clickDistThreshold: 0,
    dblClickTimeThreshold: 0,
    dblClickDistThreshold: 0,
    springStiffness: 0,
    animationTime: 0,
    zoomPerClick: 0,
    zoomPerScroll: 0,
    zoomPerSecond: 0,
    navigatorSizeRatio: 0,
    navigatorOpacity: 0,
    controlsFadeDelay: 0,
    controlsFadeLength: 0,
    maxImageCacheCount: 0,
    timeout: 0,
    minPixelRatio: 0,
    initialPage: 0,
    referenceStripHeight: 0,
    referenceStripWidth: 0,
    referenceStripSizeRatio: 0,
    collectionRows: 0,
    collectionColumns: 0,
    collectionTileSize: 0,
    collectionTileMargin: 0,
    rotationIncrement: 0,
    debugMode: true,
    alwaysBlend: true,
    autoHideControls: true,
    immediateRender: true,
    preload: true,
    flipped: true,
    homeFillsViewer: true,
    panHorizontal: true,
    panVertical: true,
    constrainDuringPan: true,
    wrapHorizontal: true,
    wrapVertical: true,
    iOSDevice: true,
    autoResize: true,
    preserveImageSizeOnResize: true,
    showNavigator: true,
    navigatorMaintainSizeRatio: true,
    navigatorAutoResize: true,
    navigatorAutoFade: true,
    navigatorRotate: true,
    useCanvas: true,
    mouseNavEnabled: true,
    showNavigationControl: true,
    showZoomControl: true,
    showHomeControl: true,
    showFullPageControl: true,
    showRotationControl: true,
    showFlipControl: true,
    showSequenceControl: true,
    navPrevNextWrap: true,
    sequenceMode: true,
    preserveViewport: true,
    preserveOverlays: true,
    showReferenceStrip: true,
    collectionMode: true,
    ajaxWithCredentials: true,
    loadTilesWithAjax: true,
    imageSmoothingEnabled: true,
});

declare const buttonElement: Element;
viewer = OpenSeadragon({
    zoomInButton: "zoomInButton-id",
    zoomOutButton: "zoomOutButton-id",
    homeButton: "homeButton-id",
    fullPageButton: "fullPageButton-id",
    rotateLeftButton: "rotateLeftButton-id",
    rotateRightButton: "rotateRightButton-id",
    previousButton: "previousButton-id",
    nextButton: "nextButton-id",
});
viewer = OpenSeadragon({
    zoomInButton: buttonElement,
    zoomOutButton: buttonElement,
    homeButton: buttonElement,
    fullPageButton: buttonElement,
    rotateLeftButton: buttonElement,
    rotateRightButton: buttonElement,
    previousButton: buttonElement,
    nextButton: buttonElement,
});

// @ts-expect-error
viewer.addHandler("canvas-click", ({ fullScreen }) => {
    console.log(fullScreen);
});

const preProcessHandler: PreprocessEventHandler = ({ eventType }) => {
    // @ts-expect-error
    console.log(eventType === "open");
};

viewer.addHandler("tile-loaded", event => {
    console.log(event.eventSource);
});

viewer.addHandler("full-screen", event => {
    console.log(event.fullScreen);
});

viewer.addSimpleImage({ url: "2003rosen1799/0001q.jpg" });

viewer.addTiledImage({ tileSource: "2003rosen1799/0001q.jpg" });

const button = new Button({});

viewer.addControl(button.element, {
    anchor: ControlAnchor.TOP_LEFT,
});

const viewport = new Viewport({ margins: {} });

const element = new Element();

const drawer = new Drawer({ viewer, viewport, element });

const mouseTracker = new MouseTracker({ element });

const viewer3 = OpenSeadragon({
    id: "openseadragon",
    prefixUrl: "openseadragon/images/",
    showNavigator: false,
    tileSources: {
        type: "legacy-image-pyramid",
        levels: [
            {
                url: "2003rosen1799/0001q.jpg",
                height: 889,
                width: 600,
            },
        ],
    },
});

const iiifTileSource = new IIIFTileSource({
    tileFormat: "jpg",
});

const viewer4 = OpenSeadragon({
    // @ts-expect-error
    mouseNavEnabled: 2,
});

const viewer5 = OpenSeadragon({
    mouseNavEnabled: true,
});

viewer.addTiledImage({
    tileSource: {
        type: "image",
        url: "foo.jpg",
    },
    flipped: true,
});
