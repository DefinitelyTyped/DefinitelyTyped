import shp = require("shpjs");

shp("https://this.is.a.url", ["white", "list"]).then((geojson) => {});
shp(new Buffer("")).then((geojson) => {});
shp(new ArrayBuffer(50)).then((geojson) => {});
shp(new Int32Array(50)).then((geojson) => {});

shp.parseZip(new Buffer("")).then((geojson) => {});
shp.parseZip(new Buffer(""), ["white", "list"]).then((geojson) => {});
shp.parseZip(new ArrayBuffer(50)).then((geojson) => {});
shp.parseZip(new Int32Array(50)).then((geojson) => {});

shp.getShapefile("xxx.zip").then((geojson) => {});
shp.getShapefile("xxx.zip", ["white", "list"]).then((geojson) => {});
shp.getShapefile(new Buffer("")).then((geojson) => {});
shp.getShapefile(new ArrayBuffer(50)).then((geojson) => {});
shp.getShapefile(new Int32Array(50)).then((geojson) => {});

const combinedGeojson = shp.combine([
    [{
        type: "Point",
        coordinates: [],
    }],
    [{
        test: "test",
    }],
]);

let parsedShp: GeoJSON.Geometry[];
let parsedDbf: GeoJSON.GeoJsonProperties[];

parsedShp = shp.parseShp(new Buffer(""), "proj");
parsedShp = shp.parseShp(new Buffer(""), new Buffer("proj"));
parsedShp = shp.parseShp(new ArrayBuffer(50), "proj");
parsedShp = shp.parseShp(new Int32Array(50), "proj");

// Should parse shapes without projection (use default)
parsedShp = shp.parseShp(new Int32Array(50));
parsedShp = shp.parseShp(new ArrayBuffer(50));
parsedShp = shp.parseShp(new Buffer(""));

parsedDbf = shp.parseDbf(new Buffer(""), new Buffer(""));
parsedDbf = shp.parseDbf(new ArrayBuffer(50), new Buffer(""));
parsedDbf = shp.parseDbf(new Int32Array(50), new Buffer(""));

shp.combine([shp.parseShp(new Buffer(""), "proj"), shp.parseDbf(new Buffer(""), new Buffer(""))]);
