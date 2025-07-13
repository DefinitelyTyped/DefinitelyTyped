import Webcam from "webcamjs";

// Examples from https://github.com/jhuckaby/webcamjs/blob/master/DOCS.md

const myCanvas = document.createElement("canvas");
const myContext = myCanvas.getContext("2d")!;

Webcam.attach("#my_camera");

function take_snapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("my_result")!.innerHTML = "<img src=\"" + data_uri + "\"/>";
    });
}

Webcam.set("flip_horiz", true);

Webcam.set({
    width: 320,
    height: 240,
    dest_width: 640,
    dest_height: 480,
    image_format: "jpeg",
    jpeg_quality: 90,
    force_flash: false,
    flip_horiz: true,
    fps: 45,
});

Webcam.attach("#my_camera");

Webcam.snap(function(data_uri) {
    document.getElementById("my_result")!.innerHTML = "<img src=\"" + data_uri + "\"/>";
});

Webcam.snap(function(data_uri, canvas, context) {
    // copy image to my own canvas
    myContext?.drawImage(canvas, 0, 0);
    // $ExpectType string
    data_uri;
    // $ExpectType CanvasRenderingContext2D
    context;
});

Webcam.snap(function() {
    // the webcam image is now in your own canvas
}, myCanvas);

Webcam.set({
    width: 320,
    height: 240,
});

Webcam.set({
    width: 320,
    height: 240,
    dest_width: 640,
    dest_height: 480,
});

Webcam.set({
    width: 320,
    height: 240,
    crop_width: 240,
    crop_height: 240,
});

Webcam.set({
    width: 320,
    height: 240,
    flip_horiz: true,
});

Webcam.set("swfURL", "/path/to/the/webcam.swf");

Webcam.reset();

Webcam.on("load", function() {
    // library is loaded
});

Webcam.on("live", function() {
    // camera is live, showing preview image
    // (and user has allowed access)
});

Webcam.on("error", function(err) {
    // an error occurred (see 'err')
    // $ExpectType Error
    err;
    if (err instanceof Webcam.errors.FlashError) {
        // $ExpectType FlashError
        err;
        err.stack;
    }
    if (err instanceof Webcam.errors.WebcamError) {
        // $ExpectType WebcamError
        err;
        err.stack;
    }
});

Webcam.snap(function(data_uri) {
    // snap complete, image data is in 'data_uri'

    Webcam.upload(data_uri, "myscript.php", function(code, text) {
        // Upload complete!
        // 'code' will be the HTTP response code from the server, e.g. 200
        // 'text' will be the raw response content
        // $ExpectType number
        code;
        // $ExpectType string
        text;
        var username = "jhuckaby";
        var image_fmt = "jpeg";
        var url = "myscript.php?username=" + username + "&format=" + image_fmt;
        Webcam.upload(data_uri, url, function(code, text) {
            // $ExpectType number
            code;
            // $ExpectType string
            text;
        });
    });
});

Webcam.snap(function(data_uri) {
    Webcam.on("uploadProgress", function(progress) {
        // Upload in progress
        // 'progress' will be between 0.0 and 1.0
        // $ExpectType number
        progress;
    });

    Webcam.on("uploadComplete", function(code, text) {
        // Upload complete!
        // 'code' will be the HTTP response code from the server, e.g. 200
        // 'text' will be the raw response content
        // $ExpectType number
        code;
        // $ExpectType string
        text;
    });

    Webcam.upload(data_uri, "myscript.php");
});

Webcam.snap(function(data_uri) {
    var raw_image_data = data_uri.replace(/^data\:image\/\w+\;base64\,/, "");

    document.createElement("input")!.value = raw_image_data;
    document.createElement("form")!.submit();
});

Webcam.set("constraints", {
    width: {
        min: 1280,
    },
    height: {
        min: 720,
    },
    frameRate: {
        min: 30,
        ideal: 60,
    },
});

Webcam.set("constraints", {
    width: 1280,
    height: 720,
});

// Other tests

Webcam.off("error", err => {
    // $ExpectType Error
    err;
});
Webcam.off("live", () => {});
Webcam.off("load", () => {});
Webcam.off("uploadComplete", (status, text) => {
    // $ExpectType number
    status;
    // $ExpectType string
    text;
});
Webcam.off("uploadProgress", (progress) => {
    // $ExpectType number
    progress;
});

Webcam.freeze();
Webcam.unfreeze();
