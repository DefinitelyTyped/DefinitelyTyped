import photoshop from "photoshop";

photoshop.app.activeDocument; // $ExpectType Document
photoshop.action.batchPlay([], {}); // $ExpectType Promise<ActionDescriptor[]>
