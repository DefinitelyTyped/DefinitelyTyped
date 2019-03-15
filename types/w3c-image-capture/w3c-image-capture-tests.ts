// Example 1 (from the spec):
const updateZoomAndTakePhoto = () => {
    let imageCapture: ImageCapture;

    const gotMedia = (mediastream: MediaStream) => {
        const video = document.querySelector('video');
        if (!video) {
            return;
        }
        video.srcObject = mediastream;

        const track = mediastream.getVideoTracks()[0];
        imageCapture = new ImageCapture(track);

        const capabilities = track.getCapabilities();
        // Check whether zoom is supported or not.
        if (!capabilities.zoom) {
            return;
        }

        // Map zoom to a slider element.
        const input = document.querySelector('input[type="range"]');
        if (!input) {
            return;
        }
        const inputRange = <HTMLInputElement> input;
        inputRange.min = capabilities.zoom.min.toString();
        inputRange.max = capabilities.zoom.max.toString();
        inputRange.step = capabilities.zoom.step.toString();
        inputRange.value = track.getSettings().zoom.toString();

        inputRange.oninput = (event) => {
            const input: HTMLInputElement = <HTMLInputElement> event.target;
            track.applyConstraints({advanced: [{zoom: Number(input.value)}]});
        };
        inputRange.hidden = false;
    };

    navigator.mediaDevices.getUserMedia({video: true})
        .then(gotMedia)
        .catch(err => console.error('getUserMedia() failed: ', err));

    const takePhoto = () => {
        imageCapture.takePhoto()
            .then(blob => {
                console.log(`Photo taken: ${blob.type}, ${blob.size}B`);

                const image = document.querySelector('img');
                if (!image) {
                    return;
                }
                image.src = URL.createObjectURL(blob);
            })
            .catch(err => console.error('takePhoto() failed: ', err));
    };
};

// Example 2 (from the spec):
const repeatGrab = () => {
    const canvas = <HTMLCanvasElement> document.querySelector('canvas');

    let interval: number;
    let track: MediaStreamTrack;

    const gotMedia = (mediastream: MediaStream) => {
        track = mediastream.getVideoTracks()[0];
        const imageCapture = new ImageCapture(track);
        interval = setInterval(() => {
            imageCapture.grabFrame()
                .then(processFrame)
                .catch(err => console.error('grabFrame() failed: ', err));
        }, 1000);
    };

    navigator.mediaDevices.getUserMedia({video: true})
        .then(gotMedia)
        .catch(err => console.error('getUserMedia() failed: ', err));

    const processFrame = (imgData: ImageBitmap) => {
        canvas.width = imgData.width;
        canvas.height = imgData.height;
        const context2D = canvas.getContext('2d');
        if (!context2D) {
            return;
        }
        context2D.drawImage(imgData, 0, 0);
    };

    const stopGrabFrame = (e: Event) => {
        clearInterval(interval);
        track.stop();
    };
};

// Example 3 (from the spec):
const grabAndPostProcessFrame = () => {
    const canvas = <HTMLCanvasElement> document.querySelector('canvas');

    let track: MediaStreamTrack;

    const gotMedia = (mediastream: MediaStream) => {
        track = mediastream.getVideoTracks()[0];
        const imageCapture = new ImageCapture(track);
        imageCapture.grabFrame()
            .then(processFrame)
            .catch(err => console.error('grabFrame() failed: ', err));
    };

    navigator.mediaDevices.getUserMedia({video: true})
        .then(gotMedia)
        .catch(err => console.error('getUserMedia() failed: ', err));

    const processFrame = (imageBitmap: ImageBitmap) => {
        track.stop();

        // |imageBitmap| pixels are not directly accessible: we need to paint
        // the grabbed frame onto a <canvas>, then getImageData() from it.
        const ctx = canvas.getContext('2d');
        if (!ctx) {
            return;
        }
        canvas.width = imageBitmap.width;
        canvas.height = imageBitmap.height;
        ctx.drawImage(imageBitmap, 0, 0);

        // Read back the pixels from the <canvas>, and invert the colors.
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

        const data = imageData.data;
        for (let i = 0; i < data.length; i += 4) {
            data[i] = 255 - data[i];     // red
            data[i + 1] = 255 - data[i + 1]; // green
            data[i + 2] = 255 - data[i + 2]; // blue
        }
        // Finally, draw the inverted image to the <canvas>
        ctx.putImageData(imageData, 0, 0);
    };
};

// Example 4 (from the spec):
const updateFocusAndTrakePhoto = () => {
    let imageCapture: ImageCapture;

    const gotMedia = (mediastream: MediaStream) => {
        const video = <HTMLVideoElement> document.querySelector('video');
        video.srcObject = mediastream;

        const track = mediastream.getVideoTracks()[0];
        imageCapture = new ImageCapture(track);

        const capabilities = track.getCapabilities();
        // Check whether focus distance is supported or not.
        if (!capabilities.focusDistance) {
            return;
        }

        // Map focus distance to a slider element.
        const input = <HTMLInputElement> document.querySelector('input[type="range"]');
        input.min = capabilities.focusDistance.min.toString();
        input.max = capabilities.focusDistance.max.toString();
        input.step = capabilities.focusDistance.step.toString();
        input.value = track.getSettings().focusDistance.toString();

        input.oninput = (event) => {
            track.applyConstraints({
                advanced: [{
                    focusMode: "manual",
                    focusDistance: Number((<HTMLInputElement> event.target).value)
                }]
            });
        };
        input.hidden = false;
    };

    navigator.mediaDevices.getUserMedia({video: true})
        .then(gotMedia)
        .catch(err => console.error('getUserMedia() failed: ', err));

    const takePhoto = () => {
        imageCapture.takePhoto()
            .then(blob => {
                console.log(`Photo taken: ${blob.type}, ${blob.size}B`);

                const image = <HTMLImageElement> document.querySelector('img');
                image.src = URL.createObjectURL(blob);
            })
            .catch(err => console.error('takePhoto() failed: ', err));
    };
};
