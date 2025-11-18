async function testGetAllScreensMedia() {
    if (navigator.mediaDevices && navigator.mediaDevices.getAllScreensMedia) {
        try {
            const promise = navigator.mediaDevices.getAllScreensMedia();
            
            // $ExpectType Promise<MediaStream[]>
            promise;

            const streams = await promise;

            // $ExpectType MediaStream[]
            streams;

            // $ExpectType number
            streams.length;

        } catch (error) {
            // $ExpectType any
            error; 
        }
    }
}

// // ------------- Test MediaDevices -------------
// async function testMediaDevices() {
//     const mediaDevices = navigator.mediaDevices;
//     // $ExpectType MediaDevices
//     mediaDevices;

//     // ondevicechange
//     mediaDevices.ondevicechange = (ev: Event) => {
//         // $ExpectType Event
//         ev;
//     };
//     mediaDevices.ondevicechange = null;

//     // enumerateDevices
//     const devices = await mediaDevices.enumerateDevices();
//     // $ExpectType MediaDeviceInfo[]
//     devices;
//     if (devices.length > 0) {
//         // $ExpectType MediaDeviceKind
//         devices[0].kind;
//     }

//     // getSupportedConstraints
//     const supportedConstraints = mediaDevices.getSupportedConstraints();
//     // $ExpectType MediaTrackSupportedConstraints
//     supportedConstraints;
//     // $ExpectType boolean | undefined
//     supportedConstraints.width;

//     // getUserMedia
//     const userMediaConstraints: UserMediaStreamConstraints = { video: true, audio: false };
//     const userStream = await mediaDevices.getUserMedia(userMediaConstraints);
//     // $ExpectType MediaStream
//     userStream;

//     // @ts-expect-error invalid constraints
//     await mediaDevices.getUserMedia({ invalid: true });

//     // getDisplayMedia
//     const controller = new CaptureController();
//     const displayOptions: DisplayMediaStreamOptions = {
//         video: true,
//         audio: true,
//         preferCurrentTab: true,
//         controller,
//         selfBrowserSurface: "include",
//         systemAudio: "exclude",
//         windowAudio: "window",
//         surfaceSwitching: "include",
//         monitorTypeSurfaces: "exclude",
//     };
//     const displayStream = await mediaDevices.getDisplayMedia(displayOptions);
//     // $ExpectType MediaStream
//     displayStream;

//     // $ExpectType Promise<MediaStream>
//     mediaDevices.getDisplayMedia(); // No options

//     // getAllScreensMedia
//     if (mediaDevices.getAllScreensMedia) {
//         const allScreensStreams = await mediaDevices.getAllScreensMedia();
//         // $ExpectType MediaStream[]
//         allScreensStreams;
//     }

//     // selectAudioOutput
//     if (mediaDevices.selectAudioOutput) {
//         const audioOutputOptions: AudioOutputOptions = { deviceId: "some-device-id" };
//         const audioOutputInfo = await mediaDevices.selectAudioOutput(audioOutputOptions);
//         // $ExpectType MediaDeviceInfo
//         audioOutputInfo;
//         // $ExpectType Promise<MediaDeviceInfo>
//         mediaDevices.selectAudioOutput();
//     }

//     // setCaptureHandleConfig
//     if (mediaDevices.setCaptureHandleConfig) {
//         const config: CaptureHandleConfig = {
//             exposeOrigin: true,
//             handle: "myHandle",
//             permittedOrigins: ["https://example.com"],
//         };
//         // $ExpectType void
//         mediaDevices.setCaptureHandleConfig(config);
//         mediaDevices.setCaptureHandleConfig(); // No options
//         mediaDevices.setCaptureHandleConfig({ handle: "tool", permittedOrigins: [] });

//         // @ts-expect-error wrong type for permittedOrigins
//         mediaDevices.setCaptureHandleConfig({ permittedOrigins: "https://example.com" });
//     }

//     // setPreferredSinkId
//     if (mediaDevices.setPreferredSinkId) {
//         const result = await mediaDevices.setPreferredSinkId("default");
//         // $ExpectType void
//         result;
//     }
// }