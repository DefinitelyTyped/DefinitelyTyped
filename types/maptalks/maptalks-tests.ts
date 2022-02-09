import { Coordinate, Geometry, VectorLayer } from "maptalks";
import maptalks = require("maptalks");

const map5 = new maptalks.Map("map", {
    center: [-0.113049, 51.498568],
    zoom: 14,
    pitch: 45,
    // allow map to drag pitching, true by default
    dragPitch: true,
    // allow map to drag rotating, true by default
    dragRotate: true,
    // enable map to drag pitching and rotating at the same time, false by default
    dragRotatePitch: true,
    // attribution: true,
    zoomControl: true, //  add zoom control
    scaleControl: true, //  add scale control
    overviewControl: true, //  add overview control
    centerCross: true,
    minZoom: 14, //  set map's min zoom to 14
    maxZoom: 14, //  set map's max zoom to 14
    attribution: {
        content: "&copy BoudlessGeo",
    },
    baseLayer: new maptalks.GroupTileLayer("base", [
        new maptalks.TileLayer("base", {
            renderer: "canvas", //  set TileLayer's renderer to canvas
            crossOrigin: "anonymous",
            urlTemplate: "https:// {s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
            subdomains: ["a", "b", "c", "d"],
            attribution:
                '&copy; <a href="http:// osm.org">OpenStreetMap</a> contributors, &copy; <a href="https:// carto.com/">CARTO</a>',
        }),
        new maptalks.WMSTileLayer("wms", {
            urlTemplate: "https:// demo.boundlessgeo.com/geoserver/ows",
            crs: "EPSG:3857",
            layers: "ne:ne",
            styles: "",
            version: "1.3.0",
            format: "image/png",
            transparent: true,
            uppercase: true,
        }),
    ]),

    layers: [
        new maptalks.TileLayer("boudaries", {
            urlTemplate: "https:// {s}.basemaps.cartocdn.com/dark_only_labels/{z}/{x}/{y}.png",
            subdomains: ["a", "b", "c", "d"],
        }),
        new maptalks.VectorLayer("v"),
    ],
});

map5.setPitch(30);
map5.setBearing(20);

function reset() {
    requestAnimationFrame(() => {
        map5.setPitch(0);
        map5.setBearing(0);
    });
}

new maptalks.control.Toolbar({
    items: [
        {
            item: "pause",
            click() {},
        },
        {
            item: "start",
            click() {},
        },
        {
            item: "reset",
            click() {
                reset();
            },
        },
    ],
}).addTo(map5);

function up() {
    map5.panBy([0, -200]);
}

function down() {
    map5.panBy([0, 200]);
}

function left() {
    map5.panBy([-200, 0]);
}

function right() {
    map5.panBy([200, 0]);
}

function toCoordinate() {
    const symbol = {
        markerType: "x",
        markerLineColor: "#f00",
        markerLineWidth: 4,
        markerWidth: 20,
        markerHeight: 20,
    };
    const coordinate = map5.getCenter().add(0.008, 0.008);
    (<VectorLayer> map5.getLayer("v")).clear().addGeometry(new maptalks.Marker(coordinate, { symbol }));
    map5.panTo(coordinate);
}

new maptalks.control.Toolbar({
    items: [
        {
            item: "↑",
            click: up,
        },
        {
            item: "↓",
            click: down,
        },
        {
            item: "←",
            click: left,
        },
        {
            item: "→",
            click: right,
        },
        {
            item: "pan to",
            click: toCoordinate,
        },
    ],
}).addTo(map5);

map5.on("zoomend moving moveend", getStatus);

getStatus();

function getStatus(): void {}
const center = map5.getCenter();
const polygon2222 = new maptalks.Polygon(
    [center.add(-0.005, 0.005), center.add(0.005, 0.005), center.add(0.005, -0.005), center.add(-0.005, -0.005)],
    {
        symbol: {
            polygonFill: "#fff",
            polygonOpacity: 0.5,
        },
    },
);
(<VectorLayer> map5.getLayer("v")).addGeometry(polygon2222);

function fitExtent() {
    //  fit map's extent to polygon's
    //  0 is the zoom offset
    map5.fitExtent(polygon.getExtent(), 0);
}
const extent = map5.getExtent();
//  set map's max extent to map's extent at zoom 14
map5.setMaxExtent(extent);

map5.setZoom(map5.getZoom() - 2, { animation: false });

(<VectorLayer> map5.getLayer("v")).addGeometry(
    new maptalks.Polygon(extent.toArray(), {
        symbol: { polygonOpacity: 0, lineWidth: 5 },
    }),
);
//  or you can set zoom limit by
map5.setMinZoom(14).setMaxZoom(14);
map5.on("click", (param: any) => {
    const infoDom = document.getElementById("info");
    if (infoDom) {
        infoDom.innerHTML = "info";
    }
});

new maptalks.Map("map1", {
    center: map5.getCenter(),
    zoom: map5.getZoom(),
    draggable: false, //  disable draggble
    scrollWheelZoom: false, //  disable scroll wheel zoom
    dblClickZoom: false, //  disable doubleclick
    baseLayer: new maptalks.TileLayer("base1", {
        urlTemplate: "https:// {s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
        subdomains: ["a", "b", "c", "d"],
        attribution:
            '&copy; <a href="http:// osm.org">OpenStreetMap</a> contributors, &copy; <a href="https:// carto.com/">CARTO</a>',
    }),
});

map5.on("moving moveend", (e: any) => {
    map1.setCenter(e.target.getCenter());
});

map5.on("zooming zoomend", (e: any) => {
    map1.setCenterAndZoom(e.target.getCenter(), e.target.getZoom());
});

map5.on("pitch", (e: any) => {
    map1.setPitch(e.target.getPitch());
});

map5.on("rotate", (e: any) => {
    map1.setBearing(e.target.getBearing());
});

new maptalks.control.Toolbar({
    position: "top-right",
    items: [
        {
            item: "move me",
            click() {},
        },
    ],
}).addTo(map5);
map5.on("moving moveend zoomend", update);

update();

function update() {
    const coorEle = document.getElementById("coordinate");
    if (coorEle) {
        coorEle.innerHTML = "coordiante info";
    }
}
new maptalks.VectorLayer("v", new maptalks.Marker(map5.getCenter())).addTo(map5);
//  Export map to an image
//  External image(tiles, marker images) hosts need to support CORS
function save() {
    const data = map5.toDataURL({
        mimeType: "image/jpeg", //  or 'image/png'
        save: true, //  to pop a save dialog
        fileName: "map", //  file name
    });
}
let mousePosition: any;

map5.on("mousemove", (e: any) => {
    mousePosition = e.containerPoint;
    map5.getRenderer().setToRedraw();
});

map5.on("mouseout", () => {
    mousePosition = null;
    map5.getRenderer().setToRedraw();
});

map5.on("renderend", (e: any) => {
    if (!mousePosition) {
        return;
    }
});

// draw image data into a canvas, and clip it by a circle with diameter of size
function createMagCircle(imageData: ImageData, size: number) {
    const magImg = document.createElement("canvas");
    const magCircle = document.createElement("canvas");

    magImg.width = magImg.height = magCircle.width = magCircle.height = size;
    const canvasRenderContext = magImg.getContext("2d");
    if (canvasRenderContext) {
        canvasRenderContext.putImageData(imageData, 0, 0);
    }

    const ctx = magCircle.getContext("2d");
    if (ctx) {
        ctx.beginPath();
        ctx.arc(size / 2, size / 2, size / 2, 0, 2 * Math.PI);
        //  clip canvas
        ctx.clip();
        ctx.drawImage(magImg, 0, 0);
    }

    return magCircle;
}
const arcUrl = "https:// services.arcgisonline.com/arcgis/rest/services/ESRI_Imagery_World_2D/MapServer";

maptalks.SpatialReference.loadArcgis(arcUrl + "?f=pjson", (err: any, conf: any) => {
    if (err) {
        throw new Error(err);
    }
    const ref = conf.spatialReference;
    ref.projection = "EPSG:4326";

    new maptalks.Map("map", {
        center: [121, 0],
        zoom: 1,
        minZoom: 1,
        maxZoom: 16,
        spatialReference: ref,
        baseLayer: new maptalks.TileLayer("base", {
            tileSystem: conf.tileSystem,
            tileSize: conf.tileSize, //  [512, 512]
            urlTemplate: arcUrl + "/tile/{z}/{y}/{x}",
            attribution: `&copy; <a target="_blank" href="${arcUrl}">ArcGIS</a>`,
        }),
    });
});
const url =
    "https:// t0.tianditu.gov.cn/vec_c/wmts?request=GetCapabilities&service=wmts&tk=de0dc270a51aaca3dd4e64d4f8c81ff6";

maptalks.SpatialReference.loadWMTS(url, (err: any, conf: any) => {
    if (err) {
        throw new Error(err);
    }
    const params = conf[0];
    params.urlTemplate += "&tk=de0dc270a51aaca3dd4e64d4f8c81ff6";
    const spatialReference = params.spatialReference;
    const tileLayer = new maptalks.TileLayer("tilelayer", params);

    new maptalks.Map("map", {
        center: [114.3404041441181, 30.548730054693106],
        zoom: 10,
        spatialReference,
        baseLayer: tileLayer,
    });
});
//  A complete customized TileLayer
const resolutions = [];
const dd = 2 * 6378137 * Math.PI;
for (let i = 0; i < 21; i++) {
    resolutions[i] = dd / (256 * Math.pow(2, i));
}

const map28 = new maptalks.Map("map", {
    center: [-0.113049, 51.498568],
    zoom: 13,
    //  a custom version of default web-mercator spatial reference
    //  map's spatial reference definition
    spatialReference: {
        projection: "EPSG:3857", //  geo projection, can be a string or a function
        resolutions,
        fullExtent: {
            //  map's full extent
            top: 6378137 * Math.PI,
            left: -6378137 * Math.PI,
            bottom: -6378137 * Math.PI,
            right: 6378137 * Math.PI,
        },
    },
    baseLayer: new maptalks.TileLayer("base", {
        urlTemplate: "https:// {s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
        subdomains: ["a", "b", "c", "d"],
        attribution:
            '&copy; <a href="http:// osm.org">OpenStreetMap</a> contributors, &copy; <a href="https:// carto.com/">CARTO</a>',
        tileSystem: [1, -1, -20037508.34, 20037508.34], //  tile system
        minZoom: 1,
        maxZoom: 20,
    }),
});
const baseLayer = new maptalks.TileLayer("base", {
    urlTemplate: "https:// {s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
    subdomains: ["a", "b", "c", "d"],
    attribution:
        '&copy; <a href="http:// osm.org">OpenStreetMap</a> contributors, &copy; <a href="https:// carto.com/">CARTO</a>',
});

// generate tile url
baseLayer.getTileUrl = (x, y, z) => {
    return `${x}/${y}/${z}`;
};

baseLayer.on("renderercreate", (e: any) => {
    // load tile image
    //    img(Image): an Image object
    //    url(String): the url of the tile
    e.renderer.loadTileImage = (img: any, url: any) => {
        // mocking getting image's base64
        // replace it by your own, e.g. load from sqlite database
        const remoteImage = new Image();
        remoteImage.crossOrigin = "anonymous";
        remoteImage.onload = () => {
            const base64 = getBase64Image(remoteImage);
            img.src = base64;
        };
        remoteImage.src = url;
    };
});

function getBase64Image(img: any) {
    const canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    const ctx = canvas.getContext("2d");
    if (ctx) {
        ctx.drawImage(img, 0, 0);
    }

    const dataURL = canvas.toDataURL("image/png");
    return dataURL;
}

const map29 = new maptalks.Map("map", {
    center: [-0.113049, 51.498568],
    zoom: 11,
    baseLayer,
});
const map30 = new maptalks.Map("map", {
    center: [-0.113049, 51.498568],
    zoom: 11,
    attribution: {
        content:
            '&copy; <a href="http:// osm.org">OpenStreetMap</a> contributors, &copy; <a href="https:// carto.com/">CARTO</a>, &copy ESRI',
    },
    baseLayer: new maptalks.TileLayer("base", {
        urlTemplate:
            "https:// server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.jpg",
    }),
});

map30.addLayer(
    new maptalks.TileLayer("carto", {
        opacity: 0.6, //  TileLayer's opacity, 0-1
        urlTemplate: "https:// {s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
        subdomains: ["a", "b", "c", "d"],
        attribution:
            '&copy; <a href="http:// osm.org">OpenStreetMap</a> contributors, &copy; <a href="https:// carto.com/">CARTO</a>',
    }),
);

const tileLayer = new maptalks.TileLayer("carto", {
    urlTemplate: "https:// {s}.tile.openstreetmap5.org/{z}/{x}/{y}.png",
    subdomains: ["a", "b", "c"],
    //  fragment shader from webglfundamentals.org
    //  https:// webglfundamentals.org/webgl/lessons/webgl-image-processing.html
    fragmentShader: [
        "precision mediump float;" +
            "uniform sampler2D u_image;" +
            "uniform vec2 u_textureSize;" +
            "uniform float u_kernel[9];" +
            "uniform float u_opacity;" +
            "uniform float u_kernelWeight;" +
            "varying vec2 v_texCoord;" +
            "void main() {" +
            "vec2 onePixel = vec2(1.0, 1.0) / u_textureSize;" +
            "vec4 colorSum =" +
            "texture2D(u_image, v_texCoord + onePixel * vec2(-1, -1)) * u_kernel[0] +" +
            "texture2D(u_image, v_texCoord + onePixel * vec2( 0, -1)) * u_kernel[1] +" +
            "texture2D(u_image, v_texCoord + onePixel * vec2( 1, -1)) * u_kernel[2] +" +
            "texture2D(u_image, v_texCoord + onePixel * vec2(-1,  0)) * u_kernel[3] +" +
            "texture2D(u_image, v_texCoord + onePixel * vec2( 0,  0)) * u_kernel[4] +" +
            "texture2D(u_image, v_texCoord + onePixel * vec2( 1,  0)) * u_kernel[5] +" +
            "texture2D(u_image, v_texCoord + onePixel * vec2(-1,  1)) * u_kernel[6] +" +
            "texture2D(u_image, v_texCoord + onePixel * vec2( 0,  1)) * u_kernel[7] +" +
            "texture2D(u_image, v_texCoord + onePixel * vec2( 1,  1)) * u_kernel[8] ;" +
            "gl_FragColor = vec4((colorSum / u_kernelWeight).rgb, 1) * u_opacity;" +
            "}",
    ].join("\n"),
});

tileLayer.on("canvascreate", (e: any) => {
    //  set uniform values in shader
    const gl = e.gl;
    const program = gl.program;
    const textureSizeLocation = gl.getUniformLocation(program, "u_textureSize");
    const kernelLocation = gl.getUniformLocation(program, "u_kernel[0]");
    const kernelWeightLocation = gl.getUniformLocation(program, "u_kernelWeight");
    // kernels of sobelVertical in the original example
    const kernels = [1, 0, -1, 2, 0, -2, 1, 0, -1];
    gl.uniform2f(textureSizeLocation, 256, 256);
    gl.uniform1fv(kernelLocation, new Float32Array(kernels));
    gl.uniform1f(kernelWeightLocation, computeKernelWeight(kernels));
});

const map211 = new maptalks.Map("map1", {
    center: [-0.113049, 51.498568],
    zoom: 4,
    attribution: {
        content: "&copy OpenStreetMap",
    },
    baseLayer: tileLayer,
});

function computeKernelWeight(kernel: any) {
    const weight = kernel.reduce((prev: any, curr: any) => {
        return prev + curr;
    });
    return weight <= 0 ? 1 : weight;
}

//  original
const map2111 = new maptalks.Map("map0", {
    center: [-0.113049, 51.498568],
    zoom: 4,
    attribution: {
        content: "&copy OpenStreetMap",
    },
    baseLayer: new maptalks.TileLayer("base", {
        urlTemplate: "https:// {s}.tile.openstreetmap5.org/{z}/{x}/{y}.png",
        subdomains: ["a", "b", "c"],
    }),
});
// Jianghan district's boundary, from boundary.js
const boundary = [
    [
        [114.28039004422378, 30.597258563674494],
        [114.280751671522, 30.597182229947677],
    ],
];
const mask = new maptalks.Polygon(boundary, {
    symbol: [
        {
            lineColor: "#ccc",
            lineWidth: 8,
            polygonFillOpacity: 0,
        },
        {
            lineColor: "#404040",
            lineWidth: 6,
            polygonFillOpacity: 0,
        },
    ],
});

// Copy the mask to add as mask's outline
const outline = mask.copy();

const maskedLayer = new maptalks.TileLayer("masked", {
    urlTemplate: (x, y, z, domain) => {
        return "https:// {s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png";
    },
    subdomains: ["a", "b", "c", "d"],
})
    .setMask(mask) //  set boundary as the mask to the tilelayer
    .addTo(map5);

// District's name
const title = new maptalks.Marker(mask.getCenter(), {
    symbol: {
        textName: "JiangHan District",
        textFaceName: "sans-serif",
        textSize: 32,
        textFill: "#1bbc9b",
        textHaloFill: "#fff",
        textHaloRadius: 5,
        textDx: -30,
    },
});
new maptalks.VectorLayer("v", [outline, title]).addTo(map5);

const map213 = new maptalks.Map("map", {
    center: [105.08052356963802, 36.04231948670001],
    zoom: 4,
    minZoom: 1,
    maxZoom: 18,
    spatialReference: {
        projection: "EPSG:4326",
    },
    baseLayer: new maptalks.TileLayer("base", {
        tileSystem: [1, -1, -180, 90],
        urlTemplate:
            "http:// t{s}.tianditu.com/DataServer?T=vec_c&x={x}&y={y}&l={z}&tk=de0dc270a51aaca3dd4e64d4f8c81ff6",
        subdomains: ["1", "2", "3", "4", "5"],
        attribution: `&copy; <a target="_blank" href="http:// www.tianditu.cn">Tianditu</a>`,
    }),
    layers: [
        new maptalks.TileLayer("road", {
            urlTemplate:
                "http:// t{s}.tianditu.com/DataServer?T=cva_c&x={x}&y={y}&l={z}&tk=de0dc270a51aaca3dd4e64d4f8c81ff6",
            subdomains: ["1", "2", "3", "4", "5"],
            opacity: 1,
        }),
    ],
});
const map214 = new maptalks.Map("map", {
    center: [0, 0],
    zoom: 4,
    spatialReference: {
        projection: "identity",
        resolutions: [32, 16, 8, 4, 2, 1],
        fullExtent: {
            top: 10000,
            left: -10000,
            bottom: -10000,
            right: 10000,
        },
    },
});

const soccerField = [
    //  field
    new maptalks.Rectangle([-400, 260], 800, 520, {
        symbol: {
            lineWidth: 2,
            lineColor: "#fff",
            polygonFill: "rgb(0, 129, 0)",
        },
    }),

    //  halfway line
    new maptalks.LineString(
        [
            [0, -260],
            [0, 260],
        ],
        {
            symbol: {
                lineColor: "#fff",
                lineWidth: 2,
            },
        },
    ),

    //  center circle
    new maptalks.Circle([0, 0], 70, {
        symbol: {
            lineColor: "#fff",
            lineWidth: 2,
        },
    }),

    //  penalty arc
    new maptalks.Sector([-315, 0], 60, -60, 60, {
        symbol: {
            lineColor: "#fff",
            lineWidth: 2,
        },
    }),

    //  penalty arc
    new maptalks.Sector([315, 0], 60, 120, 240, {
        symbol: {
            lineColor: "#fff",
            lineWidth: 2,
        },
    }),

    //  penalty area
    new maptalks.Rectangle([-400, 155], 120, 310, {
        symbol: {
            lineColor: "#fff",
            lineWidth: 2,
            polygonFill: "rgb(0, 129, 0)",
        },
    }),

    //  penalty area
    new maptalks.Rectangle([400 - 120, 155], 120, 310, {
        symbol: {
            lineColor: "#fff",
            lineWidth: 2,
            polygonFill: "rgb(0, 129, 0)",
        },
    }),

    //  goal area
    new maptalks.Rectangle([-400, 68], 42, 136, {
        symbol: {
            lineColor: "#fff",
            lineWidth: 2,
        },
    }),

    //  goal area
    new maptalks.Rectangle([400 - 42, 68], 42, 136, {
        symbol: {
            lineColor: "#fff",
            lineWidth: 2,
        },
    }),

    //  penalty mark
    new maptalks.Marker([315, 0], {
        symbol: {
            markerType: "ellipse",
            markerWidth: 2,
            markerHeight: 2,
            markerFill: "#fff",
            markerLineColor: "#fff",
        },
    }),

    //  penalty mark
    new maptalks.Marker([-315, 0], {
        symbol: {
            markerType: "ellipse",
            markerWidth: 2,
            markerHeight: 2,
            markerFill: "#fff",
            markerLineColor: "#fff",
        },
    }),
];

new maptalks.VectorLayer("field", soccerField).addTo(map5);
const map215 = new maptalks.Map("map", {
    center: [105.08052356963802, 36.04231948670001],
    zoom: 5,
    minZoom: 1,
    maxZoom: 19,
    spatialReference: {
        projection: "baidu",
    },
    baseLayer: new maptalks.TileLayer("base", {
        urlTemplate: "http:// online{s}.map5.bdimg.com/onlinelabel/?qt=tile&x={x}&y={y}&z={z}&styles=pl&scaler=1&p=1",
        subdomains: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        attribution: '&copy; <a target="_blank" href="http:// map5.baidu.com">Baidu</a>',
    }),
});

//  EPSG:3857's proj definition
const proj3857 =
    "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs";
// <script type="text/javascript" src="proj4.js"></script>
const proj4Fun = (name: string, proj: string): any => {};
const proj4 = proj4Fun("WGS84", proj3857);

//  define a custom projection object
const projection = {
    code: "proj4-merc", //  code of the projection

    project(c: any) {
        //  from wgs84 to EPSG3857
        const pc = proj4.forward(c.toArray());
        return new maptalks.Coordinate(pc);
    },

    unproject(pc: any) {
        //  from EPSG3857 to wgs84
        const c = proj4.inverse(pc.toArray());
        return new maptalks.Coordinate(c);
    },
};

new maptalks.Map("map", {
    center: [-0.113049, 51.498568],
    zoom: 13,
    //  spatial reference definition
    spatialReference: {
        projection, //  geo projection, defined by proj4js
        resolutions: [
            //  map's zoom levels and resolutions
            156543.03392804097,
            78271.51696402048,
            9135.75848201024,
            19567.87924100512,
            9783.93962050256,
            4891.96981025128,
            2445.98490512564,
            1222.99245256282,
            611.49622628141,
            305.748113140705,
            152.8740565703525,
            76.43702828517625,
            38.21851414258813,
            19.109257071294063,
            9.554628535647032,
            4.777314267823516,
            2.388657133911758,
            1.194328566955879,
            0.5971642834779395,
            0.29858214173896974,
        ],
        fullExtent: {
            //  map's full extent
            top: 6378137 * Math.PI,
            left: -6378137 * Math.PI,
            bottom: -6378137 * Math.PI,
            right: 6378137 * Math.PI,
        },
    },
    baseLayer: new maptalks.TileLayer("base", {
        urlTemplate: "https:// {s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
        subdomains: ["a", "b", "c", "d"],
        attribution:
            '&copy; <a href="http:// osm.org">OpenStreetMap</a> contributors, &copy; <a href="https:// carto.com/">CARTO</a>',
    }),
});
const geometries33333 = maptalks.GeoJSON.toGeometry("");
const symbol = {
    lineColor: "#fff",
    lineWidth: 0.5,
    polygonOpacity: 1,
    polygonFill: "#747474",
};
new maptalks.VectorLayer("v", geometries33333, { geometryEvents: false, enableSimplify: false })
    .forEach((geo: Geometry) => {
        geo.setSymbol(symbol);
    })
    .addTo(map5);
new maptalks.Map("map", {
    center: [-0.113049, 51.498568],
    zoom: 9,
    minZoom: 4,
    maxZoom: 18,
    spatialReference: {
        projection: "EPSG:4326",
    },
    baseLayer: new maptalks.TileLayer("base", {
        spatialReference: {
            projection: "EPSG:3857",
            //  other properties necessary for spatial reference
        },
        urlTemplate: "https:// {s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
        subdomains: ["a", "b", "c", "d"],
        attribution:
            '&copy; <a href="http:// osm.org">OpenStreetMap</a> contributors, &copy; <a href="https:// carto.com/">CARTO</a>',
    }),
});
new maptalks.Map("map", {
    center: [105.08052356963802, 36.04231948670001],
    zoom: 5,
    minZoom: 1,
    maxZoom: 19,
    baseLayer: new maptalks.TileLayer("base", {
        urlTemplate: "https:// {s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
        subdomains: ["a", "b", "c", "d"],
        attribution:
            '&copy; <a href="http:// osm.org">OpenStreetMap</a> contributors, &copy; <a href="https:// carto.com/">CARTO</a>',

        //  css filter
        cssFilter: "sepia(100%) invert(90%)",
    }),
});
const point2 = new maptalks.Marker([-0.113049, 51.498568], {
    visible: true,
    editable: true,
    cursor: "pointer",
    shadowBlur: 0,
    shadowColor: "black",
    draggable: false,
    dragShadow: false, //  display a shadow during dragging
    drawOnAxis: null, //  force dragging stick on a axis, can be: x, y
    symbol: {
        textFaceName: "sans-serif",
        textName: "MapTalks",
        textFill: "#34495e",
        textHorizontalAlignment: "right",
        textSize: 40,
    },
});

new maptalks.VectorLayer("vector", point2).addTo(map5);
const line1 = new maptalks.LineString(
    [
        [-0.131049, 51.498568],
        [-0.107049, 51.498568],
    ],
    {
        arrowStyle: null, //  arrow-style : now we only have classic
        arrowPlacement: "vertex-last", //  arrow's placement: vertex-first, vertex-last, vertex-firstlast, point
        visible: true,
        editable: true,
        cursor: null,
        shadowBlur: 0,
        shadowColor: "black",
        draggable: false,
        dragShadow: false, //  display a shadow during dragging
        drawOnAxis: null, //  force dragging stick on a axis, can be: x, y
        symbol: {
            lineColor: "#1bbc9b",
            lineWidth: 3,
        },
    },
);

new maptalks.VectorLayer("vector", line1).addTo(map5);
const polygon2 = new maptalks.Polygon(
    [
        [
            [-0.131049, 51.498568],
            [-0.107049, 51.498568],
            [-0.107049, 51.493568],
            [-0.131049, 51.493568],
            [-0.131049, 51.498568],
        ],
    ],
    {
        visible: true,
        editable: true,
        cursor: "pointer",
        shadowBlur: 0,
        shadowColor: "black",
        draggable: false,
        dragShadow: false, //  display a shadow during dragging
        drawOnAxis: null, //  force dragging stick on a axis, can be: x, y
        symbol: {
            lineColor: "#34495e",
            lineWidth: 2,
            polygonFill: "rgb(135,196,240)",
            polygonOpacity: 0.6,
        },
    },
);
const c = new maptalks.Coordinate(-0.113049, 51.498568);
new maptalks.VectorLayer("vector", polygon2).addTo(map5);
const marker22 = new maptalks.Marker(c.add(-0.018, 0.007), {
    symbol: {
        textFaceName: "sans-serif",
        textName: "MapTalks",
        textFill: "#34495e",
        textHorizontalAlignment: "right",
        textSize: 40,
    },
});

const line2 = new maptalks.LineString([c.add(-0.018, 0.005), c.add(0.006, 0.005)], {
    symbol: {
        lineColor: "#1bbc9b",
        lineWidth: 3,
    },
});
const polygon3 = new maptalks.Polygon(
    [c.add(-0.018, 0.004), c.add(0.006, 0.004), c.add(0.006, -0.001), c.add(-0.018, -0.001), c.add(-0.018, 0.004)],
    {
        symbol: {
            lineColor: "#34495e",
            lineWidth: 2,
            polygonFill: "rgb(135,196,240)",
            polygonOpacity: 0.6,
        },
    },
);

const collection2 = new maptalks.GeometryCollection([marker22, line2, polygon3]);

new maptalks.VectorLayer("vector", collection2).addTo(map5);
const center2 = new maptalks.Coordinate(-0.113049, 51.498568);
const map35 = new maptalks.Map("map", {
    center: center2,
    zoom: 14,
    baseLayer: new maptalks.TileLayer("base", {
        urlTemplate: "https:// {s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
        subdomains: ["a", "b", "c", "d"],
        attribution:
            '&copy; <a href="http:// osm.org">OpenStreetMap</a> contributors, &copy; <a href="https:// carto.com/">CARTO</a>',
    }),
});

const multipoint = new maptalks.MultiPoint(
    [
        [-0.131049, 51.498568],
        [-0.107049, 51.498568],
        [-0.107049, 51.493568],
        [-0.131049, 51.493568],
        [-0.131049, 51.498568],
    ],
    {
        visible: true,
        editable: true,
        cursor: "pointer",
        shadowBlur: 0,
        shadowColor: "black",
        draggable: false,
        dragShadow: false, //  display a shadow during dragging
        drawOnAxis: null, //  force dragging stick on a axis, can be: x, y
        symbol: {
            textFaceName: "sans-serif",
            textName: "point",
            textFill: "#34495e",
            textHorizontalAlignment: "right",
            textSize: 40,
        },
    },
);

new maptalks.VectorLayer("vector", multipoint).addTo(map35);
const multiline = new maptalks.MultiLineString(
    [
        [
            [-0.131049, 51.503568],
            [-0.107049, 51.503568],
        ],
        [
            [-0.131049, 51.498568],
            [-0.107049, 51.498568],
        ],
        [
            [-0.131049, 51.493568],
            [-0.107049, 51.493568],
        ],
    ],
    {
        arrowStyle: null, //  arrow-style : now we only have classic
        arrowPlacement: "vertex-last", //  arrow's placement: vertex-first, vertex-last, vertex-firstlast, point
        visible: true,
        editable: true,
        cursor: null,
        shadowBlur: 0,
        shadowColor: "black",
        draggable: false,
        dragShadow: false, //  display a shadow during dragging
        drawOnAxis: null, //  force dragging stick on a axis, can be: x, y
        symbol: {
            lineColor: "#1bbc9b",
            lineWidth: 3,
        },
    },
);

new maptalks.VectorLayer("vector", multiline).addTo(map5);
const multiPolygon = new maptalks.MultiPolygon(
    [
        [
            [
                [-0.131049, 51.503568],
                [-0.107049, 51.503568],
                [-0.107049, 51.501568],
                [-0.131049, 51.501568],
            ],
        ],
        [
            [
                [-0.131049, 51.498568],
                [-0.107049, 51.498568],
                [-0.107049, 51.496568],
                [-0.131049, 51.496568],
            ],
        ],
        [
            [
                [-0.131049, 51.493568],
                [-0.107049, 51.493568],
                [-0.107049, 51.491568],
                [-0.131049, 51.491568],
            ],
        ],
    ],
    {
        visible: true,
        editable: true,
        cursor: null,
        shadowBlur: 0,
        shadowColor: "black",
        draggable: false,
        dragShadow: false, //  display a shadow during dragging
        drawOnAxis: null, //  force dragging stick on a axis, can be: x, y
        symbol: {
            lineColor: "#34495e",
            lineWidth: 2,
            polygonFill: "rgb(135,196,240)",
            polygonOpacity: 0.6,
        },
    },
);

new maptalks.VectorLayer("vector", multiPolygon).addTo(map5);
const rectangle = new maptalks.Rectangle(center.add(-0.018, 0.012), 800, 700, {
    symbol: {
        lineColor: "#34495e",
        lineWidth: 2,
        polygonFill: "#34495e",
        polygonOpacity: 0.4,
    },
});
const circle = new maptalks.Circle(center.add(0.002, 0.008), 500, {
    symbol: {
        lineColor: "#34495e",
        lineWidth: 2,
        polygonFill: "#1bbc9b",
        polygonOpacity: 0.4,
    },
});
const sector = new maptalks.Sector(center.add(-0.013, -0.001), 900, 240, 300, {
    symbol: {
        lineColor: "#34495e",
        lineWidth: 2,
        polygonFill: "rgb(135,196,240)",
        polygonOpacity: 0.4,
    },
});

const ellipse = new maptalks.Ellipse(center.add(0.003, -0.005), 1000, 600, {
    symbol: {
        lineColor: "#34495e",
        lineWidth: 2,
        polygonFill: "rgb(216,115,149)",
        polygonOpacity: 0.4,
    },
});

new maptalks.VectorLayer("vector").addGeometry([rectangle, circle, sector, ellipse]).addTo(map5);
const arc = new maptalks.ArcCurve(
    [
        c.add(-0.0202, 0.0081),
        c.add(-0.0269, 0.0069),
        c.add(-0.0369, 0.0032),
        c.add(-0.0314, -0.003),
        c.add(-0.0278, -0.008),
        c.add(-0.022, -0.009),
    ],
    {
        symbol: getSymbol("Arc"),
    },
);

const quad = new maptalks.QuadBezierCurve(
    [
        c.add(-0.0102, 0.0081),
        c.add(-0.0169, 0.0069),
        c.add(-0.0211, 0.0032),
        c.add(-0.0214, -0.0033),
        c.add(-0.0178, -0.0086),
        c.add(-0.012, -0.0095),
    ],
    {
        symbol: getSymbol("Quadratic\nBézier"),
    },
);

const cubic = new maptalks.CubicBezierCurve(
    [
        c.add(-0.0002, 0.0081),
        c.add(-0.0069, 0.0069),
        c.add(-0.0069, 0.0032),
        c.add(-0.0114, -0.0033),
        c.add(-0.0078, -0.0086),
        c.add(-0.002, -0.0095),
    ],
    {
        symbol: getSymbol("Cubic\nBézier"),
    },
);

new maptalks.VectorLayer("vector", [arc, quad, cubic]).addTo(map5);

function getSymbol(title: string) {
    return [
        {
            lineColor: "#34495e",
            lineWidth: 3,
        },
        {
            markerType: "ellipse",
            markerWidth: 8,
            markerHeight: 8,
            markerFill: "#f00",
            markerPlacement: "vertex",
        },
        {
            textName: title,
            textFill: "#f00",
            textWeight: "bold",
            textHaloColor: "#fff",
            textHaloRadius: 3,
            textSize: 20,
            textWrapCharacter: "\n",
        },
    ];
}
const label2 = new maptalks.Label("label without box", [-0.126049, 51.496568], {
    draggable: true,
    textSymbol: {
        textFaceName: "monospace",
        textFill: "#34495e",
        textHaloFill: "#fff",
        textHaloRadius: 4,
        textSize: 18,
        textWeight: "bold",
        textVerticalAlignment: "top",
    },
});

const labelBox = new maptalks.Label("label with box", [-0.109049, 51.496568], {
    draggable: true,
    boxStyle: {
        padding: [12, 8],
        verticalAlignment: "top",
        horizontalAlignment: "left",
        minWidth: 200,
        minHeight: 30,
        symbol: {
            markerType: "square",
            markerFill: "rgb(135,196,240)",
            markerFillOpacity: 0.9,
            markerLineColor: "#34495e",
            markerLineWidth: 1,
        },
    },
    textSymbol: {
        textFaceName: "monospace",
        textFill: "#34495e",
        textHaloFill: "#fff",
        textHaloRadius: 4,
        textSize: 18,
        textWeight: "bold",
        textVerticalAlignment: "top",
    },
});

new maptalks.VectorLayer("vector", [labelBox, label2]).addTo(map5);
const textbox2 = new maptalks.TextBox(
    "This is a textbox, with very long content", //  content
    [-0.113049, 51.498568], //  coordinate
    200, //  width
    90, //  height
    {
        draggable: true,
        textStyle: {
            wrap: true, //  auto wrap text
            padding: [12, 8], //  padding of textbox
            verticalAlignment: "top",
            horizontalAlignment: "right",
            symbol: {
                textFaceName: "monospace",
                textFill: "#34495e",
                textHaloFill: "#fff",
                textHaloRadius: 4,
                textSize: 18,
                textWeight: "bold",
            },
        },
        boxSymbol: {
            //  box's symbol
            markerType: "square",
            markerFill: "rgb(135,196,240)",
            markerFillOpacity: 0.9,
            markerLineColor: "#34495e",
            markerLineWidth: 1,
        },
    },
);

new maptalks.VectorLayer("vector", textbox2).addTo(map5);
const layer3 = new maptalks.VectorLayer("vector").addTo(map5);

//  blue circle
const src = new maptalks.Marker([-0.128449, 51.503568], {
    symbol: {
        markerType: "ellipse",
        markerFill: "rgb(135,196,240)",
        markerFillOpacity: 0.8,
        markerLineColor: "#fff",
        markerLineWidth: 3,
        markerWidth: 120,
        markerHeight: 120,
    },
});

//  red circle
const dst = new maptalks.Marker([-0.102149, 51.503568], {
    draggable: true,
    symbol: [
        {
            markerType: "ellipse",
            markerFill: "rgb(216,115,149)",
            markerFillOpacity: 0.8,
            markerLineColor: "#fff",
            markerLineWidth: 3,
            markerWidth: 70,
            markerHeight: 70,
        },
        {
            textName: "Drag\nMe",
            textSize: 18,
            textFill: "#fff",
            textWrapCharacter: "\n",
        },
    ],
});

//  connector line
const line3 = new maptalks.ConnectorLine(src, dst, {
    showOn: "always", // 'moving', 'click', 'mouseover', 'always'
    arrowStyle: "classic",
    arrowPlacement: "vertex-last", //  'vertex-last', // vertex-first, vertex-last, vertex-firstlast, point
    symbol: {
        lineColor: "#34495e",
        lineWidth: 2,
    },
});

layer3.addGeometry([src, dst, line3]);

const src2 = src.copy().translate(0, -0.01);
const dst2 = dst.copy().translate(0, -0.01);
//  Arc Connector Line
const line4 = new maptalks.ArcConnectorLine(src2, dst2, {
    arcDegree: 90,
    showOn: "always",
    symbol: {
        lineColor: "#34495e",
        lineWidth: 2,
    },
});

layer3.addGeometry([src2, dst2, line4]);
const copyLayer = new maptalks.VectorLayer("copy").addTo(map5);

const rect = new maptalks.Rectangle([-0.121049, 51.50656], 800, 600, {
    symbol: {
        lineColor: "#fff",
        lineWidth: 2,
        polygonFill: "rgb(216,115,149)",
        polygonOpacity: 0.7,
    },
}).addTo(layer3);

let counter = 1;
function copy() {
    //  copy with translation of [0.003, -0.003]
    rect.copy()
        .translate(0.003 * counter, -0.003 * counter)
        .addTo(copyLayer);
    counter++;
}

function clear() {
    counter = 1;
    copyLayer.clear();
}
const marker314 = new maptalks.Marker(map5.getCenter(), {
    symbol: [
        {
            markerType: "square",
            markerFill: "rgba(216,115,149,0.8)",
            markerWidth: 120,
            markerHeight: 120,
        },
        {
            textName: "Click\non Me",
            textSize: 18,
        },
    ],
}).addTo(layer3);

addListen();

function addListen() {
    // mousemove and touchmove is annoying, so not listening to it.
    marker.on("mousedown mouseup click dblclick contextmenu touchstart touchend", onEvent);
}
function removeListen() {
    // mousemove and touchmove is annoying, so not listening to it.
    marker.off("mousedown mouseup click dblclick contextmenu touchstart touchend", onEvent);
}

const events: any[] = [];

function onEvent(param: any) {
    events.push(param);
    let content = "";
    for (let i = events.length - 1; i >= 0; i--) {
        content +=
            events[i].type +
            `on
            ${events[i].coordinate
                .toArray()
                .map((c: Coordinate) => {
                    return c.toFixed(5);
                })
                .join()}
            <br>`;
    }
    const ele = document.getElementById("events");
    if (ele) {
        ele.innerHTML = `<div>${content}</div>`;
    }

    // return false to stop event propagation
    return false;
}
const marker315 = new maptalks.Marker(map5.getCenter(), {
    symbol: {
        textFaceName: "sans-serif",
        textName: "FLASH\nME",
        textFill: "#34495e",
        textSize: 40,
        textHaloColor: "white",
        textHaloRadius: 8,
    },
});

new maptalks.VectorLayer("vector", marker315).addTo(map5);

function flash() {
    marker.flash(
        200, // flash interval in ms
        5, //  count
        () => {
            //  callback when flash end
            alert("flash ended");
        },
    );
}
const point4 = new maptalks.Marker([-0.113049 - 0.018, 51.498568 + 0.003], {
    symbol: {
        textFaceName: "sans-serif",
        textName: "MapTalks",
        textFill: "#34495e",
        textHorizontalAlignment: "right",
        textSize: 40,
    },
    properties: {
        foo: "marker",
    },
});
const line16 = new maptalks.LineString(
    [
        [-0.131049, 51.499568],
        [-0.107049, 51.499568],
    ],
    {
        symbol: {
            lineColor: "#1bbc9b",
            lineWidth: 3,
        },
        properties: {
            foo: "linestring",
        },
    },
);
const polygon4 = new maptalks.Polygon(
    [
        [-0.131049, 51.498568],
        [-0.107049, 51.498568],
        [-0.107049, 51.493568],
        [-0.131049, 51.493568],
        [-0.131049, 51.498568],
    ],
    {
        symbol: {
            lineColor: "#34495e",
            lineWidth: 2,
            polygonFill: "rgb(135,196,240)",
            polygonOpacity: 0.6,
        },
        properties: {
            foo: "polygon",
        },
    },
);

const collection = new maptalks.GeometryCollection([line16, polygon4, point4], {
    visible: true,
    editable: true,
    cursor: null,
    shadowBlur: 0,
    shadowColor: "black",
    draggable: false,
    dragShadow: false,
    drawOnAxis: null,
});

new maptalks.VectorLayer("vector", collection).addTo(map5);

//  filter
function filter() {
    //  condition can be a mapbox filter or a function
    const filtered = collection.filter(["==", "foo", "polygon"]);
    filtered.forEach((polygon: Geometry) => {
        polygon.updateSymbol({
            polygonFill: "#f00",
        });
    });
}
//  point with altitude
const point41 = new maptalks.Marker([-0.113049, 51.498568], {
    properties: {
        altitude: 400,
    },
});

//  same point without altitude
const point0 = new maptalks.Marker([-0.113049, 51.498568]).updateSymbol({
    markerOpacity: 0.5,
    markerFill: "#bbb",
});

new maptalks.VectorLayer("vector", [point0, point41], {
    enableAltitude: true, //  enable altitude
    altitudeProperty: "altitude", //  altitude property in properties, default by 'altitude'
}).addTo(map5);

new maptalks.VectorLayer("vector", null, {
    enableAltitude: true,
    //  draw altitude
    drawAltitude: {
        lineWidth: 1,
        lineColor: "#000",
    },
}).addTo(map5);

map5.setPitch(60);

// line with one altitude
const line431 = new maptalks.LineString(
    [
        [-0.131049, 51.498568],
        [-0.107049, 51.498568],
        [-0.093049, 51.498568],
    ],
    {
        symbol: {
            lineColor: "#1bbc9b",
            lineWidth: 3,
            textName: "{altitude}",
            textPlacement: "vertex",
        },
        properties: {
            altitude: 200, // altitude for all vertexes
        },
    },
);

//  line with seperate alitutdes
const line432 = new maptalks.LineString(
    [
        [-0.131049, 51.498568],
        [-0.107049, 51.498568],
        [-0.093049, 51.498568],
    ],
    {
        properties: {
            altitude: [400, 600, 1200], // seperate altitude for each vertex
        },
        symbol: {
            lineColor: "rgb(135,196,240)",
            lineWidth: 3,
            textName: "{altitude}",
            textPlacement: "vertex",
        },
    },
);

//  line without alitutde
const line433 = new maptalks.LineString(
    [
        [-0.131049, 51.498568],
        [-0.107049, 51.498568],
        [-0.093049, 51.498568],
    ],
    {
        symbol: {
            lineColor: "#000",
            lineDasharray: [10, 5, 5],
            lineWidth: 3,
            textName: "0",
            textPlacement: "vertex",
        },
    },
);

new maptalks.VectorLayer("vector", [line433, line431, line432], { enableAltitude: true }).addTo(map5);

const line44 = new maptalks.LineString(
    [
        [-0.131049, 51.498568],
        [-0.107049, 51.498568],
        [-0.101049, 51.498568],
    ],
    {
        symbol: {
            lineColor: "#1bbc9b",
            lineWidth: 3,
        },
        properties: {
            altitude: [100, 400, 1200],
        },
    },
);

//  same line without alitutde
const line440 = new maptalks.LineString(
    [
        [-0.131049, 51.498568],
        [-0.107049, 51.498568],
    ],
    {
        symbol: {
            lineColor: "#000",
            lineDasharray: [10, 5, 5],
            lineWidth: 3,
        },
    },
);

new maptalks.VectorLayer("vector", [line44], {
    enableAltitude: true,
    drawAltitude: {
        polygonFill: "#1bbc9b",
        polygonOpacity: 0.3,
        lineWidth: 0,
    },
}).addTo(map5);

const rectangle2 = new maptalks.Rectangle(center.add(-0.018, 0.012), 800, 700, {
    symbol: {
        lineColor: "#34495e",
        lineWidth: 2,
        polygonFill: "#34495e",
        polygonOpacity: 0.4,
    },
    properties: {
        altitude: 100,
    },
});

const circle2 = new maptalks.Circle(center.add(0.002, 0.008), 500, {
    symbol: {
        lineColor: "#34495e",
        lineWidth: 2,
        polygonFill: "#1bbc9b",
        polygonOpacity: 0.4,
    },
    properties: {
        altitude: 800,
    },
});
const sector2 = new maptalks.Sector(center.add(-0.013, -0.001), 900, 240, 300, {
    symbol: {
        lineColor: "#34495e",
        lineWidth: 2,
        polygonFill: "rgb(135,196,240)",
        polygonOpacity: 0.4,
    },
    properties: {
        altitude: 600,
    },
});

const ellipse2 = new maptalks.Ellipse(center.add(0.003, -0.005), 1000, 600, {
    symbol: {
        lineColor: "#34495e",
        lineWidth: 2,
        polygonFill: "rgb(216,115,149)",
        polygonOpacity: 0.4,
    },
    properties: {
        altitude: 400,
    },
});

const layer = new maptalks.VectorLayer("vector", null, { enableAltitude: true })
    .addGeometry([rectangle, circle, sector, ellipse])
    .addTo(map5);

//  draw shadows
const shadowSymbol = {
    lineColor: "#bbb",
    lineDasharray: [10, 5, 5],
    lineWidth: 2,
    polygonFill: "#bbb",
    polygonOpacity: 0.4,
};
const shadows: any = [];
layer.forEach((geo: Geometry) => {
    shadows.push(geo.copy().setSymbol(shadowSymbol));
});
new maptalks.VectorLayer("shadows", shadows).addTo(map5).bringToBack();

new maptalks.Marker(center.sub(0.009, 0), {
    symbol: {
        markerFile: "1.png",
        markerWidth: 28,
        markerHeight: 40,
        markerDx: 0,
        markerDy: 0,
        markerOpacity: 1,
    },
}).addTo(layer);

const marker2 = new maptalks.Marker(center.sub(0.006, 0), {
    symbol: {
        markerFile: "2.png",
        markerWidth: 28,
        markerHeight: 40,
        markerDx: 0,
        markerDy: 0,
        markerOpacity: 1,
    },
}).addTo(layer);

const marker3 = new maptalks.Marker(center.sub(0.003, 0), {
    symbol: {
        markerFile: "3.png",
        markerWidth: 28,
        markerHeight: 40,
        markerDx: 0,
        markerDy: 0,
        markerOpacity: 1,
    },
}).addTo(layer);

const marker4 = new maptalks.Marker(center, {
    symbol: {
        markerFile: "4.png",
        markerWidth: 28,
        markerHeight: 40,
        markerDx: 0,
        markerDy: 0,
        markerOpacity: 1,
    },
}).addTo(layer);

const marker5 = new maptalks.Marker(center.add(0.003, 0), {
    symbol: {
        markerFile: "5.png",
        markerWidth: 28,
        markerHeight: 40,
        markerDx: 0,
        markerDy: 0,
        markerOpacity: 1,
    },
}).addTo(layer);

const marker6 = new maptalks.Marker(center.add(0.006, 0), {
    symbol: {
        markerFile: "6.png",
        markerWidth: 28,
        markerHeight: 40,
        markerDx: 0,
        markerDy: 0,
        markerOpacity: 1,
    },
}).addTo(layer);
new maptalks.Marker([-0.113049, 51.49856], {
    symbol: [
        {
            markerFile: "avatar.jpg",
            markerWidth: 29,
            markerHeight: 29,
            markerDy: -20,
        },
        {
            markerFile: "marker.png",
        },
    ],
}).addTo(layer);
new maptalks.Marker(c.sub(0.02, 0), {
    symbol: {
        markerType: "ellipse",
        markerFill: "rgb(135,196,240)",
        markerFillOpacity: 1,
        markerLineColor: "#34495e",
        markerLineWidth: 3,
        markerLineOpacity: 1,
        markerLineDasharray: [],
        markerWidth: 40,
        markerHeight: 40,
        markerDx: 0,
        markerDy: 0,
        markerOpacity: 1,
    },
}).addTo(layer);
new maptalks.Marker(c.sub(0.015, 0), {
    symbol: {
        markerType: "cross",
        markerFill: "rgb(135,196,240)",
        markerFillOpacity: 1,
        markerLineColor: "#34495e",
        markerLineWidth: 3,
        markerLineOpacity: 1,
        markerLineDasharray: [],
        markerWidth: 40,
        markerHeight: 40,
        markerDx: 0,
        markerDy: 0,
        markerOpacity: 1,
    },
}).addTo(layer);
new maptalks.Marker([-0.109049, 51.49856], {
    symbol: {
        markerType: "ellipse",
        markerFill: {
            type: "linear",
            places: [0, 0, 1, 1],
            colorStops: [
                [0.0, "#fff"],
                [0.5, "#fff27e"],
                [1, "#f87e4b"],
            ],
        },
        markerLineWidth: 0,
        markerWidth: 100,
        markerHeight: 100,
    },
}).addTo(layer);
new maptalks.Marker([-0.113049, 51.49856], {
    symbol: {
        markerType: "path",
        markerPath: getTigerPath(),
        markerPathWidth: 540,
        markerPathHeight: 580,
        //  'markerFill': '#6fa8dc', //  will override tiger path's style properties
        //  'markerLineColor' : 12,
        markerWidth: 400,
        markerHeight: 400,
        markerDy: 200,
        markerDx: 0,
    },
}).addTo(layer);
function getTigerPath(): string {
    return "";
}

new maptalks.Marker(center.add(0.01, 0), {
    symbol: {
        textName: "m4",
        textSize: 14,
        markerFile: "m4.png",
        markerHorizontalAlignment: "middle", //  left, middle(default), right
        markerVerticalAlignment: "middle", //  top, middle, bottom(default)
    },
}).addTo(layer);
new maptalks.Marker([-0.113049, 51.49856], {
    properties: {
        name: "Hello\nMapTalks",
    },
    symbol: {
        textFaceName: "sans-serif",
        textName: "{name}", // value from name in geometry's properties
        textWeight: "normal", // 'bold', 'bolder'
        textStyle: "normal", // 'italic', 'oblique'
        textSize: 40,
        textFont: null, // same as CanvasRenderingContext2D.font, override textName, textWeight and textStyle
        textFill: "#34495e",
        textOpacity: 1,
        textHaloFill: "#fff",
        textHaloRadius: 5,
        textWrapWidth: null,
        textWrapCharacter: "\n",
        textLineSpacing: 0,

        textDx: 0,
        textDy: 0,

        textHorizontalAlignment: "middle", // left | middle | right | auto
        textVerticalAlignment: "middle", //  top | middle | bottom | auto
        textAlign: "center", // left | right | center | auto
    },
}).addTo(layer);
new maptalks.LineString([map5.getCenter().sub(0.1, 0), map5.getCenter().add(0.1, 0)], {
    symbol: {
        linePatternFile: "line-pattern.png",
        lineWidth: 20,
    },
}).addTo(layer);
new maptalks.LineString([map5.getCenter().sub(0.1, 0), map5.getCenter().add(0.1, 0), map5.getCenter().add(0.1, -0.1)], {
    arrowStyle: "classic", //  we only have one arrow style now
    arrowPlacement: "vertex-firstlast", // vertex-first, vertex-last, vertex-firstlast, point
    symbol: {
        lineColor: "#1bbc9b",
        lineWidth: 8,
    },
}).addTo(layer);
new maptalks.LineString(
    [
        c.add(-0.0202, 0.0081),
        c.add(-0.0269, 0.0069),
        c.add(-0.0369, 0.0032),
        c.add(-0.0314, -0.003),
        c.add(-0.0278, -0.008),
        c.add(-0.022, -0.009),
    ],
    {
        symbol: {
            lineColor: "#f00",
            shadowBlur: 10,
            shadowOffsetX: 10,
            shadowOffsetY: 10,
        },
    },
)
    .translate(0.04, 0)
    .addTo(layer);
new maptalks.Marker(map5.getCenter(), {
    symbol: [
        {
            markerType: "ellipse",
            markerFill: "#fff",
            markerFillOpacity: 1,
            markerWidth: 20,
            markerHeight: 20,
            markerLineWidth: 0,
        },
        {
            markerType: "ellipse",
            markerFill: "#1bc8ff",
            markerFillOpacity: 0.9,
            markerWidth: 55,
            markerHeight: 55,
            markerLineWidth: 0,
        },
        {
            markerType: "ellipse",
            markerFill: "#0096cd",
            markerFillOpacity: 0.8,
            markerWidth: 91,
            markerHeight: 91,
            markerLineWidth: 0,
        },
        {
            markerType: "ellipse",
            markerFill: "#0096cd",
            markerFillOpacity: 0.3,
            markerWidth: 130,
            markerHeight: 130,
            markerLineWidth: 0,
        },
        {
            markerType: "ellipse",
            markerFill: "#0096cd",
            markerFillOpacity: 0.2,
            markerWidth: 172,
            markerHeight: 172,
            markerLineWidth: 0,
        },
    ],
}).addTo(layer);
new maptalks.ui.UIMarker([-0.113049, 51.49856], {
    draggable: true,
    single: false,
    content: '<div class="text_marker">HTML Marker</div>',
});
marker2.addTo(map5).show();
new maptalks.Marker(map5.getCenter(), {
    symbol: {
        textName: "Layer is added.",
        textWeight: "bold",
        textSize: 50,
        textFill: "#1bbc9b",
        textHaloFill: "#fff",
        textHaloRadius: 5,
    },
});
new maptalks.VectorLayer("vector", [marker2]).addTo(map5);

map5.addLayer(layer);
map5.removeLayer(layer);
layer.show();
layer.hide();
const rect11 = new maptalks.Rectangle(map5.getCenter().add(-0.025, 0.005), 1600, 1000, {
    symbol: [
        {
            lineColor: "#34495e",
            lineWidth: 3,
            polygonFill: "#1bbc9b",
        },
        {
            textName: "70%",
            textWeight: "bold",
            textSize: 30,
            textFill: "#fff",
        },
    ],
});

const rect2 = rect11
    .copy()
    .translate([0.03, 0])
    .updateSymbol([{}, { textName: "40%" }]);

const layer1 = new maptalks.VectorLayer("vector1", [rect11], {
    opacity: 0.7,
}).addTo(map5);

const layer2 = new maptalks.VectorLayer("vector2", [rect2], {
    opacity: 0.4,
}).addTo(map5);
layer1.bringToBack();
layer2.bringToFront();

map5.on("mousemove", (e: any) => {
    if (!layer.getMask()) {
        layer.setMask(
            new maptalks.Marker(e.coordinate, {
                symbol: {
                    markerType: "ellipse",
                    markerWidth: 200,
                    markerHeight: 200,
                },
            }),
        );
    } else {
        (<maptalks.Marker> layer.getMask()).setCoordinates(e.coordinate);
    }
});

const marker55 = new maptalks.Marker(
    center, // .add(-0.018,0.007).toArray(),
    {
        symbol: {
            textFaceName: '"microsoft yahei",arial,sans-serif',
            textName: "MapTalks",
            textFill: "#34495e",
            textHorizontalAlignment: "right",
            textSize: 40,
        },
    },
);
const polyline55 = new maptalks.LineString(
    [
        center, // .add(-0.018,0.005).toArray(),
        center.add(0.006, 0.005).toArray(),
    ],
    {
        symbol: {
            lineColor: "#1bbc9b",
            lineWidth: 3,
        },
    },
);
const polygon55 = new maptalks.Polygon(
    [
        center.add(-0.018, 0.004).toArray(),
        center.add(0.006, 0.004).toArray(),
        center.add(0.006, -0.001).toArray(),
        center.add(-0.018, -0.001).toArray(),
        center.add(-0.018, 0.004).toArray(),
    ],
    {
        id: "cc",
        symbol: {
            lineColor: "#34495e",
            lineWidth: 2,
            polygonFill: "rgb(135,196,240)",
            polygonOpacity: 0.6,
        },
    },
);

new maptalks.VectorLayer("vector").addGeometry([marker55, polyline55, polygon55]).addTo(map5);
new maptalks.VectorLayer("vector")
    .setStyle({
        filter: ["count", ">=", 0],
        symbol: getSymbol("#747474"),
    })
    .addTo(map5);
const rect3 = new maptalks.Rectangle(map5.getCenter().sub(0.025, 0.0035), 1200, 1000, {
    symbol: [
        {
            lineColor: "#34495e",
            lineWidth: 3,
            polygonFill: "#1bbc9b",
            polygonOpacity: 1,
        },
        {
            textName: "3",
            textWeight: "bold",
            textSize: 30,
            textFill: "#fff",
        },
    ],
});

const rect22 = rect3
    .copy()
    .translate([0.006, 0.006])
    .updateSymbol([{ polygonFill: "rgb(216,115,149)" }, { textName: "2" }]);

const rect1 = rect22
    .copy()
    .translate([0.006, 0.006])
    .updateSymbol([{ polygonFill: "rgb(135,196,240)" }, { textName: "1" }]);

//  sort to 3,2,1
function sort1() {
    rect3.bringToFront();
    rect1.bringToBack();
}

// sort to 1,2,3
function sort2() {
    rect1.setZIndex(3);
    rect2.setZIndex(2);
    rect3.setZIndex(1);
}

(<VectorLayer> map5.getLayer("v")).addGeometry([rect3, rect2, rect1]);

const canvasLayer = new maptalks.CanvasLayer("c", {
    forceRenderOnMoving: true,
    forceRenderOnZooming: true,
});

canvasLayer.prepareToDraw = (/* context */) => {
    return ["foo", "bar"];
};

//  param1 and param2 are prepareToDraw's return values.
canvasLayer.draw = function(context, view, param1, param2) {
    const size = map5.getSize();
    const str222 = `${param1},${param2}`;
    context.fillStyle = "#f00";
    context.font = "bolder 50px sans-serif";
    const len = context.measureText(str222);
    context.fillText(str222, size.width / 2 - len.width / 2, size.height / 2);
    this.completeRender();
};

// draw when map is interacting
canvasLayer.drawOnInteracting = function(context, view, param1, param2) {
    this.draw(context, view, param1, param2);
};

map5.addLayer(canvasLayer);
//  An animated particle circle
const particles = new maptalks.ParticleLayer("c", {
    forceRenderOnMoving: true,
});
//  circle's radius in meters
const radius = 1000;

particles.getParticles = (t: number) => {
    map5.coordinateToContainerPoint(center);
};

map5.addLayer(particles);

new maptalks.Marker(center, {
    symbol: {
        markerType: "cross",
        markerWidth: 10,
        markerHeight: 10,
        markerLineWidth: 2,
    },
}).addTo(map5.getLayer("v"));

new maptalks.Circle(center, 1000, {
    symbol: {
        lineColor: "#fff",
        lineWidth: 6,
        lineOpacity: 0.2,
        polygonOpacity: 0,
    },
}).addTo(map5.getLayer("v"));
const layerOrder = ["earth", "landuse", "water", "roads", "building"];
//  draw mapzen's geojson vector tile with CanvasTileLayer
const canvasTile = new maptalks.CanvasTileLayer("tile", {
    urlTemplate: "https:// tile.mapzen.com/mapzen/vector/v1/all/{z}/{x}/{y}.json?api_key=mapzen-cGRKZj",
    attribution: '&copy; <a href="https:// mapzen.com/" target="_blank">mapzen</a>',
});
canvasTile.drawTile = (canvas, tileContext, onComplete) => {
    maptalks.Ajax.getJSON(tileContext.url, (err: any, data: any) => {
        if (err) {
            throw err;
        }
        const layers = [];
        let loaded = 0;
        function onLayerLoaded() {
            loaded++;
            if (loaded === layers.length) {
                onComplete(null);
            }
        }
        const mapzenStyle = getMapZenStyle();
        // prepare a VectorLayer per mapzen's layer
        for (let i = 0, l = layerOrder.length; i < l; i++) {
            const name = layerOrder[i];
            if (!data[name]) {
                continue;
            }
            const style = mapzenStyle[name];
            layers.push(
                new maptalks.VectorLayer(name, maptalks.GeoJSON.toGeometry(data[name]), {
                    style,
                    enableSimplify: false,
                    geometryEvents: false,
                }).on("layerload", onLayerLoaded),
            );
        }
        // create a map instance on tile's canvas
        new maptalks.Map(canvas, {
            center: tileContext.center,
            zoom: tileContext.z,
            layers,
        });
    });
};
new maptalks.Map("map", {
    center: [-122.12258202067433, 38.080679835385574],
    zoom: 9,
    centerCross: true,
    baseLayer: canvasTile,
});

function getMapZenStyle(): any {
    return {
        roads: [
            {
                filter: ["==", "kind", "highway"],
                symbol: [
                    {
                        lineColor: "grey",
                        lineWidth: 7,
                    },
                    {
                        lineColor: "#cc6666",
                        lineWidth: 4,
                    },
                ],
            },
            {
                filter: ["==", "kind", "minor_road"],
                symbol: {
                    lineColor: "lightgrey",
                    lineWidth: 3,
                },
            },
            {
                filter: true,
                symbol: {
                    lineColor: "lightgrey",
                    lineWidth: 2,
                },
            },
        ],

        buildings: [
            {
                filter: true,
                symbol: {
                    lineColor: "#000",
                    polygonFill: "#fff",
                },
            },
        ],

        water: [
            {
                filter: ["==", "$type", "Point"],
                symbol: {
                    markerOpacity: 0,
                    markerType: "ellipse",
                    markerFill: "#88bbee",
                    markerWidth: 4,
                    markerHeight: 4,
                },
            },

            {
                filter: true,
                symbol: {
                    lineColor: "#88bbee",
                    polygonFill: "#88bbee",
                },
            },
        ],

        earth: [
            {
                filter: ["==", "$type", "Point"],
                symbol: {
                    markerOpacity: 0,
                    markerType: "ellipse",
                    markerFill: "#ddeeee",
                    markerWidth: 4,
                    markerHeight: 4,
                },
            },
            {
                filter: true,
                symbol: {
                    lineColor: "#ddeeee",
                    polygonFill: "#ddeeee",
                },
            },
        ],

        landuse: [
            {
                filter: ["==", "$type", "Point"],
                symbol: {
                    markerOpacity: 0,
                    markerType: "ellipse",
                    markerFill: "#aaffaa",
                    markerWidth: 4,
                    markerHeight: 4,
                },
            },
            {
                filter: true,
                symbol: {
                    lineColor: "#aaffaa",
                    polygonFill: "#aaffaa",
                },
            },
        ],
    };
}

const layer616 = new maptalks.TileLayer("light", {
    urlTemplate: "https:// {s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
    subdomains: ["a", "b", "c", "d"],
    attribution:
        '&copy; <a href="http:// osm.org">OpenStreetMap</a> contributors, &copy; <a href="https:// carto.com/">CARTO</a>',
    //  force layer to render when map is zooming and moving
    forceRenderOnMoving: true,
    forceRenderOnZooming: true,
});

new maptalks.Map("map", {
    center: [121.4, 37.5],
    zoom: 13,
    baseLayer: new maptalks.TileLayer("base", {
        urlTemplate: "https:// {s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png",
        subdomains: ["a", "b", "c", "d"],
    }),
    layers: [layer616],
});

const swipe = document.getElementById("swipe");

const renderer = layer616.getRenderer();
const canvasGetter = renderer.getCanvasImage;
// override renderer's default method to get layer canvas image
renderer.getCanvasImage = () => {
    const dpr = map5.getDevicePixelRatio();
    // original layer canvas image
    const layerImage = canvasGetter.call(renderer);
    if (!layerImage || !layerImage.image) {
        return layerImage;
    }
    // drawn width after layer is erased by swipper
    const ctx = renderer.context;
    //  const width = renderer.canvas.width * (swipe.value / 100);
    const width = renderer.canvas.width;
    const height = ctx.canvas.height;

    // copy drawn rect of original layer canvas
    const drawnRect = document.createElement("canvas");
    drawnRect.width = width;
    drawnRect.height = ctx.canvas.height;
    const drawnRect2dContext = drawnRect.getContext("2d");
    if (drawnRect2dContext) {
        drawnRect2dContext.drawImage(layerImage.image, 0, 0);
    }

    // clear the erased part
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    // draw a white background to cover the bottom layers when zooming
    ctx.beginPath();
    ctx.rect(0, 0, width / dpr, height / dpr);
    ctx.fillStyle = "#fff";
    ctx.fill();

    // draw the drawn part on layer's canvas
    ctx.drawImage(drawnRect, 0, 0, width / dpr, height / dpr);
    layerImage.image = ctx.canvas;
    return layerImage;
};

//  swipe.addEventListener('input', function () {
//    // const layer redraw self in the next frame
//    layer.getRenderer().setToRedraw();
//  });
const imageLayer = new maptalks.ImageLayer("images", [
    {
        url: "1.png",
        extent: [-0.11854216406254636, 51.50043810048564, -0.09081885168461667, 51.50994770979011],
        opacity: 1,
    },
    {
        url: "2.png",
        extent: [-0.10343596289067136, 51.50797115663946, -0.07897421667485105, 51.51876102463089],
        opacity: 1,
    },
]);

map5.addLayer(imageLayer);
const map71 = new maptalks.Map("map", {
    center: [-0.113049, 51.498568],
    zoom: 14,
    draggable: false, // disable drag
    dragPan: false, // disable drag panning
    dragRotate: false, // disable drag rotation
    dragPitch: false, // disable drag pitch
    scrollWheelZoom: false, // disable wheel zoom
    touchZoom: false, // disable touchzoom
    doubleClickZoom: false, // disable doubleclick zoom
    baseLayer: new maptalks.TileLayer("base", {
        urlTemplate: "https:// {s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
        subdomains: ["a", "b", "c", "d"],
        attribution:
            '&copy; <a href="http:// osm.org">OpenStreetMap</a> contributors, &copy; <a href="https:// carto.com/">CARTO</a>',
    }),
});
function dragOn() {
    map5.config("draggable", true);
}
function dragOff() {
    map5.config("draggable", false);
}
function zoomOn() {
    map5.config("zoomable", true);
}
function zoomOff() {
    map5.config("zoomable", false);
}
function scrollOn() {
    map5.config("scrollWheelZoom", true);
}
function scrollOff() {
    map5.config("scrollWheelZoom", false);
}
function touchZoomOn() {
    map5.config("touchZoom", true);
}
function touchZoomOff() {
    map5.config("touchZoom", false);
}
function dblClickOn() {
    map5.config("doubleClickZoom", true);
}
function dblClickOff() {
    map5.config("doubleClickZoom", false);
}

const items = [
    ["Drag", dragOn, dragOff],
    ["Zoom", zoomOn, zoomOff],
    ["ScrollWheel", scrollOn, scrollOff],
    ["TouchZoom", touchZoomOn, touchZoomOff],
    ["DblClick", dblClickOn, dblClickOff],
].map(value => {
    return {
        item: value[0],
        children: [
            {
                item: "ON",
                click: value[1],
            },
            {
                item: "OFF",
                click: value[2],
            },
        ],
    };
});

new maptalks.control.Toolbar({
    items,
}).addTo(map5);
const distanceTool = new maptalks.DistanceTool({
    symbol: {
        lineColor: "#34495e",
        lineWidth: 2,
    },
    vertexSymbol: {
        markerType: "ellipse",
        markerFill: "#1bbc9b",
        markerLineColor: "#000",
        markerLineWidth: 3,
        markerWidth: 10,
        markerHeight: 10,
    },

    labelOptions: {
        textSymbol: {
            textFaceName: "monospace",
            textFill: "#fff",
            textLineSpacing: 1,
            textHorizontalAlignment: "right",
            textDx: 15,
            markerLineColor: "#b4b3b3",
            markerFill: "#000",
        },
        boxStyle: {
            padding: [6, 2],
            symbol: {
                markerType: "square",
                markerFill: "#000",
                markerFillOpacity: 0.9,
                markerLineColor: "#b4b3b3",
            },
        },
    },
    clearButtonSymbol: [
        {
            markerType: "square",
            markerFill: "#000",
            markerLineColor: "#b4b3b3",
            markerLineWidth: 2,
            markerWidth: 15,
            markerHeight: 15,
            markerDx: 20,
        },
        {
            markerType: "x",
            markerWidth: 10,
            markerHeight: 10,
            markerLineColor: "#fff",
            markerDx: 20,
        },
    ],
    language: "en-US",
}).addTo(map5);

const areaTool = new maptalks.AreaTool({
    symbol: {
        lineColor: "#1bbc9b",
        lineWidth: 2,
        polygonFill: "#fff",
        polygonOpacity: 0.3,
    },
    vertexSymbol: {
        markerType: "ellipse",
        markerFill: "#34495e",
        markerLineColor: "#1bbc9b",
        markerLineWidth: 3,
        markerWidth: 10,
        markerHeight: 10,
    },
    labelOptions: {
        textSymbol: {
            textFaceName: "monospace",
            textFill: "#fff",
            textLineSpacing: 1,
            textHorizontalAlignment: "right",
            textDx: 15,
        },
        boxStyle: {
            padding: [6, 2],
            symbol: {
                markerType: "square",
                markerFill: "#000",
                markerFillOpacity: 0.9,
                markerLineColor: "#b4b3b3",
            },
        },
    },
    clearButtonSymbol: [
        {
            markerType: "square",
            markerFill: "#000",
            markerLineColor: "#b4b3b3",
            markerLineWidth: 2,
            markerWidth: 15,
            markerHeight: 15,
            markerDx: 22,
        },
        {
            markerType: "x",
            markerWidth: 10,
            markerHeight: 10,
            markerLineColor: "#fff",
            markerDx: 22,
        },
    ],
    language: "",
}).addTo(map5);

const drawTool = new maptalks.DrawTool({
    mode: "Point",
})
    .addTo(map5)
    .disable();

drawTool.on("drawend", (param: any) => {
    console.log(param.geometry);
    layer.addGeometry(param.geometry);
});

const itemsc = [
    "Point",
    "LineString",
    "Polygon",
    "Circle",
    "Ellipse",
    "Rectangle",
    "FreeHandLineString",
    "FreeHandPolygon",
].map(value => {
    return {
        item: value,
        click() {
            drawTool.setMode(value).enable();
        },
    };
});

const toolbar = new maptalks.control.Toolbar({
    items: [
        {
            item: "Shape",
            children: itemsc,
        },
        {
            item: "Disable",
            click() {
                drawTool.disable();
            },
        },
        {
            item: "Clear",
            click() {
                layer.clear();
            },
        },
    ],
}).addTo(map5);

const marker56 = new maptalks.Marker(center.add(-0.018, 0.007).toArray(), {
    draggable: true,
    symbol: {
        textFaceName: '"microsoft yahei",arial,sans-serif',
        textName: "Try to Drag Us",
        textFill: "#34495e",
        textHorizontalAlignment: "right",
        textSize: 40,
    },
});
const polyline = new maptalks.LineString([center.add(-0.018, 0.005).toArray(), center.add(0.006, 0.005).toArray()], {
    draggable: true,
    symbol: {
        lineColor: "#1bbc9b",
        lineWidth: 5,
    },
});
const polygon56 = new maptalks.Polygon(
    [
        center.add(-0.018, 0.004).toArray(),
        center.add(0.006, 0.004).toArray(),
        center.add(0.006, -0.001).toArray(),
        center.add(-0.018, -0.001).toArray(),
        center.add(-0.018, 0.004).toArray(),
    ],
    {
        draggable: true,
        symbol: {
            lineColor: "#34495e",
            lineWidth: 2,
            polygonFill: "rgb(135,196,240)",
            polygonOpacity: 0.6,
        },
    },
);

const geometriesc = [marker56, polyline, polygon56];
new maptalks.VectorLayer("vector").addGeometry(geometriesc).addTo(map5);
const point = new maptalks.Marker([-0.113049, 51.498568], {
    visible: true,
    editable: true,
    cursor: "pointer",
    shadowBlur: 0,
    shadowColor: "black",
    draggable: false,
    dragShadow: false, //  display a shadow during dragging
    drawOnAxis: null, //  force dragging stick on a axis, can be: x, y
    symbol: {
        markerType: "ellipse",
        markerWidth: 40,
        markerHeight: 40,
        markerFill: "rgb(216,115,149)",
        markerLineColo: "#fff",
    },
});

new maptalks.VectorLayer("vector", point).addTo(map5);

startEdit();

function startEdit() {
    point.startEdit();
}

function endEdit() {
    point.endEdit();
}
const line = new maptalks.LineString(
    [
        [-0.131049, 51.498568],
        [-0.107049, 51.498568],
    ],
    {
        arrowStyle: null, //  arrow-style : now we only have classic
        arrowPlacement: "vertex-last", //  arrow's placement: vertex-first, vertex-last, vertex-firstlast, point
        visible: true,
        editable: true,
        cursor: null,
        shadowBlur: 0,
        shadowColor: "black",
        draggable: false,
        dragShadow: false, //  display a shadow during dragging
        drawOnAxis: null, //  force dragging stick on a axis, can be: x, y
        symbol: {
            lineColor: "#1bbc9b",
            lineWidth: 3,
        },
    },
);

new maptalks.VectorLayer("vector", line).addTo(map5);

startEditLine();

function startEditLine() {
    line.startEdit();
}

function endEditLine() {
    line.endEdit();
}
const polygon57 = new maptalks.Polygon(
    [
        [
            [-0.131049, 51.498568],
            [-0.107049, 51.498568],
            [-0.107049, 51.493568],
            [-0.131049, 51.493568],
            [-0.131049, 51.498568],
        ],
    ],
    {
        visible: true,
        editable: true,
        cursor: "pointer",
        shadowBlur: 0,
        shadowColor: "black",
        draggable: false,
        dragShadow: false, //  display a shadow during dragging
        drawOnAxis: null, //  force dragging stick on a axis, can be: x, y
        symbol: {
            lineColor: "#34495e",
            lineWidth: 2,
            polygonFill: "rgb(135,196,240)",
            polygonOpacity: 0.6,
        },
    },
);

new maptalks.VectorLayer("vector", polygon57).addTo(map5);

startEditPolygon();

function startEditPolygon() {
    polygon.startEdit();
}

function endEditPolygon() {
    polygon.endEdit();
}

const rectangle3 = new maptalks.Rectangle(center.add(-0.018, 0.012), 800, 700, {
    symbol: {
        lineColor: "#34495e",
        lineWidth: 2,
        polygonFill: "#34495e",
        polygonOpacity: 0.4,
    },
});
const circle3 = new maptalks.Circle(center.add(0.002, 0.008), 500, {
    symbol: {
        lineColor: "#34495e",
        lineWidth: 2,
        polygonFill: "#1bbc9b",
        polygonOpacity: 0.4,
    },
});

const ellipse3 = new maptalks.Ellipse(center.add(0.003, -0.005), 1000, 600, {
    symbol: {
        lineColor: "#34495e",
        lineWidth: 2,
        polygonFill: "rgb(216,115,149)",
        polygonOpacity: 0.4,
    },
});

new maptalks.VectorLayer("vector").addGeometry([rectangle, circle, ellipse]).addTo(map5);

startEditcc();

function startEditcc() {
    rectangle.startEdit();
    circle.startEdit();
    ellipse.startEdit();
}

function endEditcc() {
    rectangle.endEdit();
    circle.endEdit();
    ellipse.endEdit();
}
const textbox = new maptalks.TextBox(
    "This is a textbox, with very long content", //  content
    [-0.113049, 51.498568], //  coordinate
    200, //  width
    90, //  height
    {
        draggable: true,
        textStyle: {
            wrap: true, //  auto wrap text
            padding: [12, 8], //  padding of textbox
            verticalAlignment: "top",
            horizontalAlignment: "right",
            symbol: {
                textFaceName: "monospace",
                textFill: "#34495e",
                textHaloFill: "#fff",
                textHaloRadius: 4,
                textSize: 18,
                textWeight: "bold",
            },
        },
        boxSymbol: {
            //  box's symbol
            markerType: "square",
            markerFill: "rgb(135,196,240)",
            markerFillOpacity: 0.9,
            markerLineColor: "#34495e",
            markerLineWidth: 1,
        },
    },
);

new maptalks.VectorLayer("vector", textbox).addTo(map5);

startEditTextBox();

function startEditTextBox() {
    textbox.startEdit();
}

function endEditTextBox() {
    textbox.endEdit();
}
const label = new maptalks.Label("label with box", [-0.117, 51.496], {
    textSymbol: {
        textFaceName: "sans-serif",
        textFill: "#fff",
        textSize: 18,
    },
    boxStyle: {
        padding: [12, 8],
        symbol: {
            markerType: "square",
            markerFillOpacity: 0.9,
            markerLineColor: "#34495e",
            markerFill: "#34495e",
            markerLineWidth: 1,
        },
    },
}).addTo(layer);

label.startEditText();
label.endEditText();
map5.on("click", (e: any) => {
    // reset colors
    layer.forEach((g: Geometry) => {
        g.updateSymbol({
            markerFill: "#0e595e",
        });
    });
    // identify
    map5.identify(
        {
            coordinate: e.coordinate,
            layers: [layer],
        },
        (geos: Geometry[]) => {
            if (geos.length === 0) {
                return;
            }
            geos.forEach(g => {
                g.updateSymbol({
                    markerFill: "#f00",
                });
            });
        },
    );
});

// prepare data
map5.animateTo(
    {
        center: [-74.10704772446428, 40.66032606133018],
        zoom: 18,
        pitch: 65,
        bearing: 360,
    },
    {
        duration: 7000,
    },
);

const polygon = new maptalks.Polygon(
    [
        [
            [-0.131049, 51.498568],
            [-0.107049, 51.498568],
            [-0.107049, 51.493568],
            [-0.131049, 51.493568],
            [-0.131049, 51.498568],
        ],
    ],
    {
        visible: false,
        symbol: {
            lineColor: "#34495e",
            lineWidth: 2,
            polygonFill: "rgb(135,196,240)",
            polygonOpacity: 0.6,
        },
    },
);

new maptalks.VectorLayer("vector", polygon).addTo(map5);

replay();

function replay() {
    polygon.hide();
    // polygon's animateShow
    polygon.animateShow(
        {
            duration: 1500,
            easing: "out",
        },
        (frame: maptalks.animation.Frame) => {
            if (frame.state.playState === "finished") {
                console.log("finished");
            }
        },
    );
}

const targetStyles = {
    symbol: {
        markerWidth: 200,
        markerHeight: 200,
    },
};

//  animate by maptalks.animation.Animation
const player = maptalks.animation.Animation.animate(
    targetStyles,
    {
        duration: 1000,
        easing: "out",
    },
    //  callback of each frame
    (frame: maptalks.animation.Frame) => {
        if (frame.state.playState === "running") {
            marker.updateSymbol(frame.styles.symbol);
        }
    },
);

setTimeout(() => {
    player.play();
}, 600);

const json = {
    type: "Feature",
    geometry: {
        type: "Point",
        coordinates: [-0.113049, 51.498568],
    },
    properties: {
        name: "point marker",
    },
};
maptalks.SpatialReference.getProjectionInstance("");
new maptalks.CRS("", {});
maptalks.GeoJSON.toGeometry(json).addTo(map5.getLayer("v"));
const marker = new maptalks.Marker([-0.113049, 51.498568], {
    properties: {
        name: "point marker",
    },
}).addTo(map5.getLayer("v"));

JSON.stringify(marker.toGeoJSON());
map5.toJSON();
const cc = [-0.113049, 51.498568];
new maptalks.Map("map", {
    center: c,
    zoom: 13,
    baseLayer: new maptalks.TileLayer("base", {
        urlTemplate: "https:// {s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
        subdomains: ["a", "b", "c", "d"],
        attribution:
            '&copy; <a href="http:// osm.org">OpenStreetMap</a> contributors, &copy; <a href="https:// carto.com/">CARTO</a>',
    }),
    layers: [
        new maptalks.VectorLayer("v0", [new maptalks.Marker(cc)]),
        new maptalks.VectorLayer("v1", [new maptalks.Rectangle(cc, 1000, 800)]),
    ],
});

new maptalks.Marker(c);
new maptalks.Rectangle(c, 1000, 800);
(<VectorLayer> map5.getLayer("v")).addGeometry(marker, rect);

const map1 = new maptalks.Map("map1", {
    center: c,
    zoom: 13,
    baseLayer: new maptalks.TileLayer("base", {
        urlTemplate: "https:// {s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
        subdomains: ["a", "b", "c", "d"],
        attribution:
            '&copy; <a href="http:// osm.org">OpenStreetMap</a> contributors, &copy; <a href="https:// carto.com/">CARTO</a>',
    }),
});
const newLayer = new maptalks.VectorLayer("v").addTo(map1);
//  copy geometry by JSON
maptalks.Geometry.fromJSON(rect.toJSON()).addTo(newLayer);

const optionscc = {
    content: "",
    // override parent's animationOnHide option
    animationOnHide: false,
};

class MyUI extends maptalks.ui.UIComponent {
    constructor(coordinate: Coordinate, options: object) {
        super(options);
        this._coordinate = coordinate;
    }

    buildOn(map: maptalks.Map) {
        const dom = document.createElement("div");
        dom.className = "my-ui";
        dom.innerText = this.options["content"];
        return dom;
    }

    getOffset() {
        const size = this.getSize();
        // move anchor to center of UI
        return new maptalks.Point(-size.width / 2, -size.height / 2);
    }

    getEvents() {
        return {
            zoomend: this._flash,
        };
    }

    onRemove() {
        if (this._flashTimeout) {
            clearTimeout(this._flashTimeout);
        }
    }

    _flash() {
        // flash after zooming.
        this.hide();
        this._flashTimeout = setTimeout(() => {
            this.show(this._coordinate);
        }, 200);
    }
}

MyUI.mergeOptions(optionscc);

const map = new maptalks.Map("map", {
    center: [-0.113049, 51.49856],
    zoom: 14,
    baseLayer: new maptalks.TileLayer("base", {
        urlTemplate: "https:// {s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
        subdomains: ["a", "b", "c", "d"],
        attribution:
            '&copy; <a href="http:// osm.org">OpenStreetMap</a> contributors, &copy; <a href="https:// carto.com/">CARTO</a>',
    }),
});

const ui = new MyUI(map5.getCenter(), {
    content: "Hello, MyUI",
});
ui.addTo(map5).show();

function toolbarc(text: string) {
    const toolbar = new maptalks.control.Toolbar({
        position: "top-right",
        items: [
            {
                item: text,
                click() {},
            },
        ],
    });
    return toolbar;
}

toolbarc('<div class="attr">Click to add Marker, right click to clear</div>').addTo(map5);

class CustomTool extends maptalks.MapTool {
    onEnable() {
        this._markerLayer = new maptalks.VectorLayer("CustomTool_layer").addTo(this.getMap());
    }

    onDisable() {
        if (this._markerLayer) {
            this._markerLayer.remove();
        }
    }

    getEvents() {
        return {
            click: this._onClick,
            contextmenu: this._onRightClick,
        };
    }

    _onClick(param: any) {
        (<VectorLayer> this._markerLayer).addGeometry(new maptalks.Marker(param.coordinate));
    }

    _onRightClick(param: any) {
        (<VectorLayer> this._markerLayer).clear();
    }
}

const customTool = new CustomTool().addTo(map5);

const options = {
    //  默认颜色
    color: "Red",
    //  默认字体
    font: "30px san-serif",
};

class HelloLayer extends maptalks.Layer {
    data: any;
    //  构造函数
    constructor(id: string | number, data?: any, options?: maptalks.LayerOptions) {
        super(id, options);
        this.data = data;
    }

    setData(data: any) {
        this.data = data;
        return this;
    }

    getData() {
        return this.data;
    }
}

// 定义默认的图层配置属性
HelloLayer.mergeOptions(options);

class HelloLayerRenderer extends maptalks.renderer.CanvasRenderer {
    _drawnData: any;
    checkResources() {
        // HelloLayer只是绘制文字, 没有外部图片, 所以返回空数组
        return [];
    }

    draw() {
        const drawn = this._drawData(this.layer.getData(), this.layer.options.color);
        // 记录下绘制过的数据
        this._drawnData = drawn;
        // 结束绘制:
        //  1. 触发必要的事件
        //  2. 将渲染器的canvas设为更新状态, map会加载canvas并呈现在地图上
        this.completeRender();
    }

    drawOnInteracting(evtParam: any) {
        if (!this._drawnData || this._drawnData.length === 0) {
            return;
        }
        this._drawData(this._drawnData, this.layer.options.color);
    }

    // drawOnIntearcting被略过时的回调函数
    onSkipDrawOnInteracting() {}

    // 当animation为true时是动画图层, 返回true
    needToRedraw() {
        if (this.layer.options["animation"]) {
            return true;
        }
        return super.needToRedraw();
    }
    /**
     * 绘制数据
     */
    _drawData(data: any, color: string) {
        if (!Array.isArray(data)) {
            return;
        }
        const map = this.getMap();
        // prepareCanvas是父类CanvasRenderer中的方法
        // 用于准备canvas画布
        // 如果canvas不存在时, 则创建它
        // 如果canvas已存在, 则清空画布
        this.prepareCanvas();
        // this.context是渲染器canvas的CanvasRenderingContext2D
        const ctx = this.context;
        // 设置样式
        ctx.fillStyle = color;
        ctx.font = this.layer.options["font"];

        const containerExtent = map5.getContainerExtent();
        const drawn: any = [];
        data.forEach(d => {
            // 将中心点经纬度坐标转化为containerPoint
            // containerPoint是指相对地图容器左上角的像素坐标.
            const point = map5.coordinateToContainerPoint(new maptalks.Coordinate(d.coord));
            // 如果绘制的点不在屏幕范围内, 则不做绘制以提高性能
            if (!containerExtent.contains(point)) {
                return;
            }
            const text = d.text;
            const len = ctx.measureText(text);
            ctx.fillText(text, point.x - len.width / 2, point.y);
            drawn.push(d);
        });

        return drawn;
    }
}

HelloLayer.registerRenderer("canvas", HelloLayerRenderer);

const layerccc = new HelloLayer("hello");
layerccc.setData([
    {
        coord: map5.getCenter().toArray(),
        text: "Hello World",
    },
    {
        coord: map5.getCenter().add(0.01, 0.01).toArray(),
        text: "Hello World 2",
    },
]);
layerccc.addTo(map5);

maptalks.INTERNAL_LAYER_PREFIX;
