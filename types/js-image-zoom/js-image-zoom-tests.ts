import ImageZoom = require("js-image-zoom");

const container = document.getElementById("container")!;

new ImageZoom(container, { width: 400, height: 250, zoomWidth: 500, img: "../1.jpg" });
new ImageZoom(container, {
    width: 400,
    height: 250,
    zoomWidth: 500,
    img: "../1.jpg",
    offset: { vertical: 0, horizontal: 10 },
});
new ImageZoom(container, {
    width: 400,
    height: 250,
    scale: 1.5,
    img: "../1.jpg",
    offset: { vertical: 0, horizontal: 10 },
});
new ImageZoom(container, {
    width: 400,
    height: 250,
    scale: 1.5,
    img: "../1.jpg",
    offset: { vertical: 0, horizontal: 10 },
    zoomStyle: "opacity:0.1;",
});
new ImageZoom(container, {
    width: 400,
    scale: 1.5,
    img: "../1.jpg",
    offset: { vertical: 0, horizontal: 10 },
    zoomStyle: "opacity:0.1;",
});

new ImageZoom(container, {
    width: 400,
    scale: 1.5,
    img: "../1.jpg",
    offset: { vertical: 0, horizontal: 10 },
    zoomStyle: "opacity:0.1;",
    zoomLensStyle: "opacity: 0.6;background-color: red;",
});
new ImageZoom(container, {
    width: 400,
    scale: 1.5,
    img: "../1.jpg",
    offset: { vertical: 0, horizontal: 10 },
    zoomStyle: "opacity:0.1;",
});
new ImageZoom(container, {
    width: 0,
    height: 250,
    scale: 1.5,
    img: "../1.jpg",
    offset: { vertical: 0, horizontal: 10 },
});
new ImageZoom(container, { fillContainer: true, img: "../1.jpg" });
new ImageZoom(container, { width: 400, height: 250, zoomWidth: 500, img: "../1.jpg" }).kill();
