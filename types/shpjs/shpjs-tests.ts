import shp = require("shpjs");

shp("https://this.is.a.url", ["white", "list"]).then((geojson) => {});
shp(Buffer.from("")).then((geojson) => {});
shp(new ArrayBuffer(50)).then((geojson) => {});
shp(new Int32Array(50)).then((geojson) => {});

// Test for ShpJSInputObject
const shpInputObject: shpjs.ShpJSInputObject = {
    shp: Buffer.from(""),
    dbf: Buffer.from(""),
    prj: Buffer.from(""),
    cpg: Buffer.from("")
};
shp(shpInputObject).then((geojson) => {});
shp({ shp: new ArrayBuffer(50), dbf: new ArrayBuffer(50) }).then((geojson) => {});

shp.parseZip(Buffer.from("")).then((geojson) => {});
shp.parseZip(Buffer.from(""), ["white", "list"]).then((geojson) => {});
shp.parseZip(new ArrayBuffer(50)).then((geojson) => {});
shp.parseZip(new Int32Array(50)).then((geojson) => {});

shp.getShapefile("xxx.zip").then((geojson) => {});
shp.getShapefile("xxx.zip", ["white", "list"]).then((geojson) => {});
shp.getShapefile(Buffer.from("")).then((geojson) => {});
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

parsedShp = shp.parseShp(Buffer.from(""), "proj");
parsedShp = shp.parseShp(Buffer.from(""), Buffer.from("proj"));
parsedShp = shp.parseShp(new ArrayBuffer(50), "proj");
parsedShp = shp.parseShp(new Int32Array(50), "proj");

// Should parse shapes without projection (use default)
parsedShp = shp.parseShp(new Int32Array(50));
parsedShp = shp.parseShp(new ArrayBuffer(50));
parsedShp = shp.parseShp(Buffer.from(""));

parsedDbf = shp.parseDbf(Buffer.from(""), Buffer.from(""));
parsedDbf = shp.parseDbf(new ArrayBuffer(50), Buffer.from(""));
parsedDbf = shp.parseDbf(new Int32Array(50), Buffer.from(""));

// Test parseDbf with optional cpg
parsedDbf = shp.parseDbf(Buffer.from(""));

shp.combine([shp.parseShp(Buffer.from(""), "proj"), shp.parseDbf(Buffer.from(""), Buffer.from(""))]);
