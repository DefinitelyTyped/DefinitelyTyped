import StaticMaps = require("staticmaps");

// Initialization
const map = new StaticMaps({
    width: 100,
    height: 100,
});
new StaticMaps({
    width: 100,
    height: 100,
    paddingX: 1,
    paddingY: 1,
    tileUrl: "https://tile.server/{x}/{y}/{z}",
    tileSize: 50,
    tileSubdomains: ["a", "b", "c"],
    tileLayers: [
        {
            tileSubdomains: ["a", "b", "c"],
            tileUrl: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        },
        {
            tileSubdomains: ["a", "b", "c"],
            tileUrl: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        },
    ],
    tileRequestLimit: 2,
    tileRequestTimeout: 2000,
    tileRequestHeader: {
        Authorization: "Bearer token",
    },
    zoomRange: {
        min: 2,
        max: 17,
    },
    maxZoom: 17,
    reverseY: true,
});

// addMarker
map.addMarker({
    coord: [13.437524, 52.4945528],
    img: "./marker.png", // can also be a URL
    height: 48,
    width: 48,
});
map.addMarker({
    coord: [13.437524, 52.4945528],
    img: "./marker.png", // can also be a URL
    height: 48,
    width: 48,
    drawHeight: 24,
    drawWidth: 24,
    resizeMode: "cover",
    offsetX: 24,
    offsetY: 48,
});

// addLine
map.addLine({
    coords: [
        [13.399259, 52.482659],
        [13.387849, 52.477144],
        [13.40538, 52.510632],
    ],
});
map.addLine({
    coords: [
        [13.399259, 52.482659],
        [13.387849, 52.477144],
        [13.40538, 52.510632],
    ],
    color: "#0000FFBB",
    width: 3,
});

// addPolygon
map.addPolygon({
    coords: [
        [13.399259, 52.482659],
        [13.387849, 52.477144],
        [13.40538, 52.510632],
        [13.399259, 52.482659],
    ],
    color: "#0000FFBB",
    width: 3,
    fill: "#0000FFBB",
});
map.addPolygon({
    coords: [
        [13.399259, 52.482659],
        [13.387849, 52.477144],
        [13.40538, 52.510632],
        [13.399259, 52.482659],
    ],
});

// addMultiPolygon
map.addMultiPolygon({
    coords: [
        [
            [13.399259, 52.482659],
            [13.387849, 52.477144],
            [13.40538, 52.510632],
            [13.399259, 52.482659],
        ],
    ],
    color: "#0000FFBB",
    width: 3,
    fill: "#0000FFBB",
});
map.addMultiPolygon({
    coords: [
        [
            [13.399259, 52.482659],
            [13.387849, 52.477144],
            [13.40538, 52.510632],
            [13.399259, 52.482659],
        ],
    ],
});

// addText
map.addText({
    coord: [13.437524, 52.4945528],
    text: "My Text",
});
map.addText({
    anchor: "end",
    coord: [13.437524, 52.4945528],
    text: "My Text",
    size: 50,
    width: 1,
    fill: "#000000",
    color: "#ffffff",
    font: "Calibri",
    offsetX: 50,
    offsetY: 100,
});

// addCircle
map.addCircle({
    coord: [13.437524, 52.4945528],
    radius: 50,
});
map.addCircle({
    coord: [13.437524, 52.4945528],
    radius: 100,
    color: "#ffffff",
    width: 5,
    fill: "#000000",
});

// render
map.render();
map.render([13.437524, 52.4945528], 15);

// Save image
map.image.save().then().catch();
map.image.save("my-staticmap-image.png", { compressionLevel: 9 }).then().catch();

// Buffer image
map.image
    .buffer()
    .then(buffer => buffer.toString())
    .catch();
map.image
    .buffer("image/jpeg", { quality: 75 })
    .then(buffer => buffer.toString())
    .catch();
