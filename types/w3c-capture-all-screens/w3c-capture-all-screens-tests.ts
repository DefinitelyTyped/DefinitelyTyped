import { ScreenDetailed } from "w3c-capture-all-screens";

async function testGetAllScreensMedia() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getAllScreensMedia) {
        return;
    }

    // $ExpectType MediaStream[]
    const streams = await navigator.mediaDevices.getAllScreensMedia();

    // @ts-expect-error - arguments are not accepted
    await navigator.mediaDevices.getAllScreensMedia({ video: true });
}

function testScreenCaptureTrack(track: MediaStreamTrack) {
    // Check if the track has the method (type narrowing)
    if ("screenDetailed" in track) {
        // Cast to the interface that has the method
        const screenTrack = track as ScreenCaptureMediaStreamTrack;

        // $ExpectType ScreenDetailed
        const details = screenTrack.screenDetailed();

        testScreenDetailed(details);
    }
}

function testScreenDetailed(details: ScreenDetailed) {
    // $ExpectType number
    details.availLeft;
    // $ExpectType number
    details.availTop;
    // $ExpectType number
    details.left;
    // $ExpectType number
    details.top;
    // $ExpectType boolean
    details.isPrimary;
    // $ExpectType boolean
    details.isInternal;
    // $ExpectType number
    details.devicePixelRatio;
    // $ExpectType string
    details.label;

    // Inheritance Check: It should also be a valid Screen object
    // $ExpectType number
    details.width;
    // $ExpectType number
    details.height;

    // @ts-expect-error - readonly property cannot be assigned
    details.isPrimary = false;

    // @ts-expect-error - property does not exist
    details.nonExistentProperty;
}
