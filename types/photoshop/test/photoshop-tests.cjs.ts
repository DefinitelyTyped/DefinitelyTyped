import photoshop from "photoshop";

photoshop.app.activeDocument; // $ExpectType Document
photoshop.app.foregroundColor; // $ExpectType SolidColor
photoshop.action.batchPlay([], {}); // $ExpectType Promise<ActionDescriptor[]>
