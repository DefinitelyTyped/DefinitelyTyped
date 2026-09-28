import ee = require("@google/earthengine");
import type {
    EarthEngineSdk,
    EeCallback,
    EeElement,
    EeFeature,
    EeGeometry,
    EeImage,
    EeServiceAccountKey,
} from "@google/earthengine";

const key: EeServiceAccountKey = {
    client_email: "service-account@example.com",
    private_key: "private-key",
};

ee.data.authenticateViaPrivateKey(key, () => undefined, error => error.toUpperCase());
ee.initialize("https://earthengine.googleapis.com/api", "https://earthengine.googleapis.com");

const point = ee.Geometry.Point([-47.5, -23.5]);
const polygon = ee.Geometry.Polygon([
    [
        [-47.6, -23.6],
        [-47.4, -23.6],
        [-47.4, -23.4],
        [-47.6, -23.6],
    ],
]);
const region = point.buffer(2_000).union(polygon);
const collection = ee
    .ImageCollection("COPERNICUS/S2_SR_HARMONIZED")
    .filterDate("2026-01-01", "2026-02-01")
    .filterBounds(region)
    .filter(ee.Filter.lt("CLOUDY_PIXEL_PERCENTAGE", 30))
    .distinct("system:time_start")
    .sort("CLOUDY_PIXEL_PERCENTAGE");

function describe(element: EeElement): EeFeature {
    const image = ee.Image(element);
    const reducer = ee.Reducer.mean().combine({
        reducer2: ee.Reducer.minMax(),
        sharedInputs: true,
    });
    const statistics = image.normalizedDifference(["B8", "B4"]).rename("NDVI").reduceRegion({
        reducer,
        geometry: region,
        scale: 10,
        maxPixels: 1e13,
    });
    statistics.getInfo(values => values?.NDVI_mean.toFixed());

    return ee.Feature(null, {
        mean: statistics.get("NDVI_mean"),
        imageId: ee.String("COPERNICUS/S2_SR_HARMONIZED/").cat(image.id()),
        takenOn: image.get("system:time_start"),
    });
}

collection.map(describe).getInfo(result => result?.features[0]?.properties);

const image = collection
    .first()
    .select(["B4", "B3", "B2"])
    .convolve(ee.Kernel.gaussian({ radius: 8, sigma: 4 }))
    .clip(region)
    .visualize({ bands: ["B4", "B3", "B2"], min: 100, max: 2_000, gamma: 1.4 });
const painted = ee.Image().paint({
    featureCollection: ee.FeatureCollection(ee.Feature(polygon)),
    color: 1,
    width: 7,
});
const mosaic = ee.ImageCollection([image, painted]).mosaic();
const typedRegion: EeGeometry = region;
const download = {
    dimensions: "1280x720",
    region: typedRegion,
    format: "png",
    crs: "EPSG:3857",
    maxPixels: 1e13,
};

mosaic.getDownloadURL(download); // $ExpectType string
mosaic.getDownloadURL(download, url => url?.toUpperCase());

const sdk: EarthEngineSdk = ee;
const callback: EeCallback<string> = value => value?.toUpperCase();
const typedImage: EeImage = sdk.Image("COPERNICUS/S2_SR_HARMONIZED/example");

callback(typedImage.getDownloadURL(download));

async function loadSdk(): Promise<EarthEngineSdk> {
    return (await import("@google/earthengine")).default;
}

loadSdk(); // $ExpectType Promise<EarthEngineSdk>
