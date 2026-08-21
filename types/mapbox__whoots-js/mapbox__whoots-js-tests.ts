import { getMercCoords, getTileBBox, getURL } from "@mapbox/whoots-js";

// $ExpectType string
getURL(
    "https://img.nj.gov/imagerywms/Natural2015",
    "Natural2015",
    154308,
    197167,
    19,
);

// $ExpectType string
getURL(
    "https://img.nj.gov/imagerywms/Natural2015",
    "Natural2015",
    154308,
    197167,
    19,
    {
        format: "image/png",
        service: "WMS",
        version: "1.1.1",
        request: "GetMap",
        srs: "EPSG:3857",
        width: 256,
        height: 256,
    },
);

// $ExpectType string
getTileBBox(1, 2, 3);

// $ExpectType [number, number]
getMercCoords(1, 2, 3);
