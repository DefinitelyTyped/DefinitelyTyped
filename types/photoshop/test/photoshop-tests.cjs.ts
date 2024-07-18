import photoshop from "photoshop";

photoshop.app.activeDocument; // $ExpectType Document
photoshop.app.documents; // $ExpectType Documents
photoshop.app.foregroundColor; // $ExpectType SolidColor
photoshop.action.batchPlay([], {}); // $ExpectType Promise<ActionDescriptor[]>
photoshop.imaging.getPixels({}); // $ExpectType Promise<GetPixelsResult>
photoshop.app.activeDocument.selection; // $ExpectType Selection
