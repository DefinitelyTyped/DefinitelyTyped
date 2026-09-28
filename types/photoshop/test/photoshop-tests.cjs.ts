import photoshop from "photoshop";

photoshop.app.activeDocument; // $ExpectType Document | null
photoshop.app.documents; // $ExpectType Documents
photoshop.app.foregroundColor; // $ExpectType SolidColor
photoshop.action.batchPlay([], {}); // $ExpectType Promise<ActionDescriptor[]>
photoshop.imaging.getPixels({}); // $ExpectType Promise<GetPixelsResult>
photoshop.app.activeDocument?.selection; // $ExpectType Selection | undefined

const doc = photoshop.app.activeDocument;
if (doc) {
    doc.width; // $ExpectType number
    doc.backgroundLayer; // $ExpectType Layer | null
    doc.activeLayers[0].name; // $ExpectType string
    doc.selection.bounds; // $ExpectType Bounds | null
    doc.createTextLayer({ contents: "Title", position: { x: 100, y: 200 } }); // $ExpectType Promise<Layer | null>
    doc.generativeUpscale(photoshop.constants.GenerativeUpscaleModel.FIREFLY, { scale: 4 }); // $ExpectType Promise<void>
    doc.createLayer(photoshop.constants.LayerKind.TEXT, { name: "Caption", contents: "Hello" }); // $ExpectType Promise<Layer | null>
    doc.selection.selectPolygon([{ x: 0, y: 0 }, { x: 10, y: 0 }, { x: 5, y: 10 }]); // $ExpectType Promise<void>
}

photoshop.app.documents.getByName("Untitled"); // $ExpectType Document
photoshop.app.documents.add({ width: 800, height: 600, mode: photoshop.constants.NewDocumentMode.RGB }); // $ExpectType Promise<Document | null>
photoshop.app.convertUnits(72, photoshop.constants.Units.POINTS, photoshop.constants.Units.INCHES); // $ExpectType number
photoshop.action.batchPlaySync([], { synchronousExecution: true }); // $ExpectType ActionDescriptor[]
const modalResult = photoshop.core.executeAsModal(async (context) => {
    context.isCancelled; // $ExpectType boolean
}, { commandName: "Update document" });
modalResult; // $ExpectType Promise<void>

photoshop.app.preferences.enhancedControls.enableHapticFeedback; // $ExpectType boolean
photoshop.app.preferences.enhancedControls.activeHapticEvents; // $ExpectType string[]

const notifications = photoshop.app.preferences.notifications;
notifications.quietMode; // $ExpectType boolean
notifications.showFeatureOnboarding = true;
// @ts-expect-error Notification preferences must be boolean.
notifications.showFeatureOnboarding = "yes";

// @ts-expect-error Width must be numeric.
photoshop.app.documents.add({ width: "800" });
// @ts-expect-error Active haptic events are read-only.
photoshop.app.preferences.enhancedControls.activeHapticEvents = [];

if (doc) {
    // @ts-expect-error Upscale scale must be numeric.
    doc.generativeUpscale(photoshop.constants.GenerativeUpscaleModel.FIREFLY, { scale: "4" });
}
