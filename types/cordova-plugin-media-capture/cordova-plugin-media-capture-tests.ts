console.log('Supported audio modes are: ' + JSON.stringify(navigator.device.capture.supportedAudioModes));

navigator.device.capture.captureAudio(
    (captures: MediaFile[]) => { console.log(captures.length + ' captured'); },
    (err: CaptureError) => { alert('Error ' + err.message); },
    {
        limit: 3,
        duration: 10
    }
);

