import * as itowns from "itowns";
import * as proj4 from "proj4";
import * as THREE from "three";

// Define crs projection that we will use (taken from https://epsg.io/3946, Proj4js section)
proj4.defs(
    "EPSG:3946",
    "+proj=lcc +lat_1=45.25 +lat_2=46.75 +lat_0=46 +lon_0=3 +x_0=1700000 +y_0=5200000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
);

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
const cameraCoord = new itowns.Coordinates(
    "EPSG:3946",
    1841980,
    5175682,
    3000,
);
const view = new itowns.PlanarView(viewerDiv, extent, {
    placement: {
        coord: cameraCoord,
        heading: 30,
        range: 4000,
        tilt: 30,
    },
});

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

// Add 3D Tiles layer
// This 3D Tiles tileset uses the draco compression that is an
// extension of gltf. We need to enable it.
itowns.enableDracoLoader("./libs/draco/");

const $3dTilesLayer = new itowns.C3DTilesLayer(
    "3d-tiles-layer-building",
    {
        name: "Lyon-2015-building",
        source: new itowns.C3DTilesSource({
            url: "https://raw.githubusercontent.com/iTowns/iTowns2-sample-data/master/"
                + "3DTiles/lyon_1_3946_textured_draco/tileset.json",
        }),
    },
    view,
);

// Lights
const dirLight = new THREE.DirectionalLight(0xffffff, 1);
dirLight.position.set(-0.9, 0.3, 1);
dirLight.updateMatrixWorld();
view.scene.add(dirLight);

const ambLight = new THREE.AmbientLight(0xffffff, 0.2);
view.scene.add(ambLight);

itowns.View.prototype.addLayer.call(view, $3dTilesLayer);

// Request redraw
view.notifyChange();
