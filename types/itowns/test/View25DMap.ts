import * as itowns from "itowns";

// 2.5D map example
// https://github.com/iTowns/itowns/blob/master/examples/view_25d_map.html

// Define geographic extent: CRS, min/max X, min/max Y
const extent = new itowns.Extent(
    "EPSG:3946",
    1837816.94334,
    1847692.32501,
    5170036.4587,
    5178412.82698,
);

// `viewerDiv` will contain iTowns' rendering area (`<canvas>`)
const viewerDiv = document.getElementById("viewerDiv") as HTMLDivElement;

// Instanciate PlanarView*
const view = new itowns.PlanarView(
    viewerDiv,
    extent,
    { placement: { heading: 49.6, range: 6200, tilt: 17 } },
);

// Add a WMS imagery source
const wmsImagerySource = new itowns.WMSSource({
    extent,
    name: "Ortho2009_vue_ensemble_16cm_CC46",
    url: "https://download.data.grandlyon.com/wms/grandlyon",
    version: "1.3.0",
    crs: "EPSG:3946",
    format: "image/jpeg",
});

// Add a WMS imagery layer
const wmsImageryLayer = new itowns.ColorLayer("wms_imagery", {
    updateStrategy: {
        type: itowns.STRATEGY_DICHOTOMY,
        options: {},
    },
    source: wmsImagerySource,
});

view.addLayer(wmsImageryLayer);

// Add a WMS elevation source
const wmsElevationSource = new itowns.WMSSource({
    extent,
    url: "https://download.data.grandlyon.com/wms/grandlyon",
    name: "MNT2012_Altitude_10m_CC46",
    crs: "EPSG:3946",
    width: 256,
    format: "image/jpeg",
});

// Add a WMS elevation layer
const wmsElevationLayer = new itowns.ElevationLayer("wms_elevation", {
    useColorTextureElevation: true,
    colorTextureElevationMinZ: 144,
    colorTextureElevationMaxZ: 622,
    source: wmsElevationSource,
});

view.addLayer(wmsElevationLayer);

const wfsCartoSource = new itowns.WFSSource({
    url: "https://wxs.ign.fr/cartovecto/geoportail/wfs?",
    version: "2.0.0",
    typeName: "BDCARTO_BDD_WLD_WGS84G:zone_habitat_mairie",
    crs: "EPSG:3946",
    format: "application/json",
});

const wfsCartoStyle = new itowns.Style({
    zoom: { min: 0, max: 20 },
    text: {
        field: "{toponyme}",
        color: "white",
        transform: "uppercase",
        size: 15,
        haloColor: "rgba(20,20,20, 0.8)",
        haloWidth: 3,
    },
});

const wfsCartoLayer = new itowns.LabelLayer("wfsCarto", {
    source: wfsCartoSource,
    style: wfsCartoStyle,
});

view.addLayer(wfsCartoLayer);

// Request redraw
view.notifyChange();
