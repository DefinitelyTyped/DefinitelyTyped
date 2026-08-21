import * as Terraformer from "@terraformer/arcgis";
import * as arcgisApi from "arcgis-rest-api";

const arcgisPoint: arcgisApi.Point = {
    x: -122.6764,
    y: 45.5165,
    spatialReference: {
        wkid: 4326,
    },
};
const geojsonPoint: GeoJSON.Point = {
    type: "Point",
    coordinates: [45.5165, -122.6764],
};

const geojsonFeatureCollection: GeoJSON.FeatureCollection = {
    type: "FeatureCollection",
    features: [
        {
            type: "Feature",
            geometry: geojsonPoint,
            properties: {},
        },
    ],
};

// parse ArcGIS JSON, convert it to GeoJSON
Terraformer.arcgisToGeoJSON(arcgisPoint);

// take a GeoJSON Point and convert it to ArcGIS JSON
Terraformer.geojsonToArcGIS(geojsonPoint);

// take a GeoJSON FeatureCollection and convert it to ArcGIS JSON
Terraformer.geojsonToArcGIS(geojsonFeatureCollection);
