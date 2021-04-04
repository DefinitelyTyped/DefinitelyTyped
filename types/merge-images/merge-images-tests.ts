import mergeImages = require("merge-images");

// $ExpectType Promise<string>
mergeImages(["/body.png", "/eyes.png", "/mouth.png"]);
mergeImages([
    { src: "body.png", x: 0, y: 0 },
    { src: "eyes.png", x: 32, y: 0 },
    { src: "mouth.png", x: 16, y: 0 },
]);
mergeImages([{ src: "body.png" }, { src: "eyes.png", opacity: 0.7 }, { src: "mouth.png", opacity: 0.3 }]);
mergeImages(["/body.png", "/eyes.png", "/mouth.png"], {
    width: 128,
    height: 128,
});
mergeImages(["/body.png", "/eyes.png", "/mouth.png"], {
    format: "image/jpeg",
});
mergeImages(["/body.png", "/eyes.png", "/mouth.png"], {
    quality: 1,
});
mergeImages(["/body.png", "/eyes.png", "/mouth.png"], {
    Canvas: null as any,
});
mergeImages(["/body.png", "/eyes.png", "/mouth.png"], {
    Image: null as any,
});
mergeImages(["/body.png", "/eyes.png", "/mouth.png"], {
    crossOrigin: "anonymous",
});
mergeImages(["/body.png", "/eyes.png", "/mouth.png"], {
    crossOrigin: "use-credentials",
});
mergeImages(["/body.png", "/eyes.png", "/mouth.png"], {
    crossOrigin: "",
});

mergeImages([Buffer.alloc(8), "/test.png"]);
