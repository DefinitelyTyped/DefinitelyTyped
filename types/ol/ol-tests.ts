import { Collection, Map, MapBrowserEvent, Overlay, PluggableMap, View } from 'ol';
import { unByKey } from 'ol/Observable';
import { stableSort } from 'ol/array';
import {
    Control,
    FullScreen,
    MousePosition,
    OverviewMap,
    ScaleLine,
    ZoomSlider,
    ZoomToExtent,
    defaults as defaultControls,
} from 'ol/control';
import { Options as ControlOptions } from 'ol/control/Control';
import { toStringXY } from 'ol/coordinate';
import { EventsKey } from 'ol/events';
import { applyTransform } from 'ol/extent';
import { GeoJSON, MVT } from 'ol/format';
import GeometryType from 'ol/geom/GeometryType';
import { Draw, Modify, Select, defaults as defaultInteractions } from 'ol/interaction';
import { Tile as TileLayer, Vector as VectorLayer, VectorTile as VectorTileLayer } from 'ol/layer';
import { fromLonLat, get as getProjection, getTransform } from 'ol/proj';
import { register } from 'ol/proj/proj4';
import { OSM, Vector as VectorSource, VectorTile as VectorTileSource } from 'ol/source';
import { Circle, Fill, Stroke, Style } from 'ol/style';
import { StyleFunction } from 'ol/style/Style';

import proj4 = require('proj4');
/**
 * ==================================================
 * # Styles
 * ==================================================
 */

const image = new Circle({
    radius: 5,
    fill: null as any,
    stroke: new Stroke({ color: 'red', width: 1 }),
});

const styles: { [key: string]: Style } = {
    Point: new Style({
        image,
    }),
    LineString: new Style({
        stroke: new Stroke({
            color: 'green',
            width: 1,
        }),
    }),
    MultiLineString: new Style({
        stroke: new Stroke({
            color: 'green',
            width: 1,
        }),
    }),
    MultiPoint: new Style({
        image,
    }),
    MultiPolygon: new Style({
        stroke: new Stroke({
            color: 'yellow',
            width: 1,
        }),
        fill: new Fill({
            color: 'rgba(255, 255, 0, 0.1)',
        }),
    }),
    Polygon: new Style({
        stroke: new Stroke({
            color: 'blue',
            lineDash: [4],
            width: 3,
        }),
        fill: new Fill({
            color: 'rgba(0, 0, 255, 0.1)',
        }),
    }),
    GeometryCollection: new Style({
        stroke: new Stroke({
            color: 'magenta',
            width: 2,
        }),
        fill: new Fill({
            color: 'magenta',
        }),
        image: new Circle({
            radius: 10,
            fill: null as any,
            stroke: new Stroke({
                color: 'magenta',
            }),
        }),
    }),
    Circle: new Style({
        stroke: new Stroke({
            color: 'red',
            width: 2,
        }),
        fill: new Fill({
            color: 'rgba(255,0,0,0.2)',
        }),
    }),
};

const styleFunction: StyleFunction = feature => styles[feature.getGeometry().getType()];

/**
 * ==================================================
 * # Vector
 * ==================================================
 */

const geojsonObj = {
    type: 'FeatureCollection',
    crs: { type: 'name', properties: { name: 'EPSG:3857' } },
    features: [
        { type: 'Feature', geometry: { type: 'Point', coordinates: [0, 0] } },
        {
            type: 'Feature',
            geometry: {
                type: 'LineString',
                coordinates: [
                    [4000000, -2000000],
                    [8000000, 2000000],
                ],
            },
        },
        {
            type: 'Feature',
            geometry: {
                type: 'LineString',
                coordinates: [
                    [4000000, 2000000],
                    [8000000, -2000000],
                ],
            },
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Polygon',
                coordinates: [
                    [
                        [-5000000, -1000000],
                        [-4000000, 1000000],
                        [-3000000, -1000000],
                    ],
                ],
            },
        },
        {
            type: 'Feature',
            geometry: {
                type: 'MultiLineString',
                coordinates: [
                    [
                        [-1000000, -750000],
                        [-1000000, 750000],
                    ],
                    [
                        [1000000, -750000],
                        [1000000, 750000],
                    ],
                    [
                        [-750000, -1000000],
                        [750000, -1000000],
                    ],
                    [
                        [-750000, 1000000],
                        [750000, 1000000],
                    ],
                ],
            },
        },
        {
            type: 'Feature',
            geometry: {
                type: 'MultiPolygon',
                coordinates: [
                    [
                        [
                            [-5000000, 6000000],
                            [-5000000, 8000000],
                            [-3000000, 8000000],
                            [-3000000, 6000000],
                        ],
                    ],
                    [
                        [
                            [-2000000, 6000000],
                            [-2000000, 8000000],
                            [0, 8000000],
                            [0, 6000000],
                        ],
                    ],
                    [
                        [
                            [1000000, 6000000],
                            [1000000, 8000000],
                            [3000000, 8000000],
                            [3000000, 6000000],
                        ],
                    ],
                ],
            },
        },
        {
            type: 'Feature',
            geometry: {
                type: 'GeometryCollection',
                geometries: [
                    {
                        type: 'LineString',
                        coordinates: [
                            [-5000000, -5000000],
                            [0, -5000000],
                        ],
                    },
                    { type: 'Point', coordinates: [4000000, -5000000] },
                    {
                        type: 'Polygon',
                        coordinates: [
                            [
                                [1000000, -6000000],
                                [2000000, -4000000],
                                [3000000, -6000000],
                            ],
                        ],
                    },
                ],
            },
        },
    ],
};

const vectorSource = new VectorSource({
    features: new GeoJSON().readFeatures(geojsonObj),
});

const vectorLayer = new VectorLayer({
    source: vectorSource,
    style: styleFunction,
    visible: true,
    zIndex: 10,
});

const vectorTileSource = new VectorTileSource({
    format: new MVT(),
    url: 'https://basemaps.arcgis.com/v1/arcgis/rest/services/World_Basemap/VectorTileServer/tile/{z}/{y}/{x}.pbf',
});

const vectorTileLayer = new VectorTileLayer({
    source: vectorTileSource,
    visible: false,
    zIndex: 9,
});

/**
 * ==================================================
 * # Tile
 * ==================================================
 */

const osmLayer = new TileLayer({
    source: new OSM({
        crossOrigin: 'anonymous',
    }),
    visible: true,
    zIndex: 0,
});

/**
 * ==================================================
 * # Controls
 * ==================================================
 */

const layers = [osmLayer, vectorLayer, vectorTileLayer];

const controls = defaultControls().extend([
    new FullScreen(),
    new MousePosition({
        coordinateFormat: coord => toStringXY(coord!, 8),
        undefinedHTML: '',
    }),
    new OverviewMap({
        layers,
        view: new View({
            projection: 'EPSG:3857',
        }),
    }),
    new ScaleLine(),
    new ZoomSlider(),
    new ZoomToExtent(),
]);

/**
 * ==================================================
 * # Interactions
 * ==================================================
 */

const drawInteractions: Draw[] = [];
(Object.keys(GeometryType) as (keyof typeof GeometryType)[]).forEach(type => {
    const draw = new Draw({
        type: GeometryType[type],
    });

    drawInteractions.push(draw);
});

const selectInteraction = new Select({
    features: new Collection(vectorSource.getFeatures()),
});

const modifyInteraction = new Modify({
    features: selectInteraction.getFeatures(),
});

const interactions = defaultInteractions().extend([selectInteraction, modifyInteraction]);

/**
 * ==================================================
 * # Map and View
 * ==================================================
 */

const view = new View({
    center: [0, 0],
    projection: 'EPSG:3857',
    zoom: 10,
});

const map = new Map({
    target: document.getElementById('map') as HTMLElement,
    view,
    layers,
    controls,
    interactions,
});

/**
 * ==================================================
 * # Reprojection
 * ==================================================
 */

const projSpec = {
    code: 'EPSG:4813',
    bbox: [-5.83, 105.06, -8.91, 115.77],
    proj4: '+proj=longlat +ellps=bessel +towgs84=-377,681,-50,0,0,0,0 +pm=jakarta +no_defs',
    name: 'Batavia (Jakarta)',
};

proj4.defs(projSpec.code, projSpec.proj4);
register(proj4);

const proj = getProjection(projSpec.code);
const transform = getTransform('EPSG:4326', proj);
const extent = applyTransform([projSpec.bbox[1], projSpec.bbox[2], projSpec.bbox[3], projSpec.bbox[0]], transform);
proj.setExtent(extent);
const newView = new View({
    projection: proj,
});

setTimeout(() => {
    map.setView(newView);
    newView.fit(extent);
}, 5000);

/**
 * ==================================================
 * # Custom Control
 * ==================================================
 */

interface CustomControlOptions extends ControlOptions {
    name?: string;
}

class CustomControl extends Control {
    element: HTMLElement;
    name: string;
    mapViewport?: HTMLElement;
    private readonly _boundListener: (e: Event) => void;
    private readonly _eventKeys: EventsKey[];

    constructor(options: CustomControlOptions = {}) {
        options.element = document.createElement('div');
        options.element.className = 'ol-custom-control ol-unselectable ol-control';
        super(options);
        this.name = options.name || this.constructor.name;
        this._boundListener = this._listener.bind(this);
        this._eventKeys = [];
    }

    // Override
    setMap(map: PluggableMap) {
        super.setMap(map);
        unByKey(this._eventKeys);
        this._eventKeys.splice(0);

        if (this.mapViewport) this.mapViewport.removeEventListener('click', this._boundListener);

        this.mapViewport = map ? map.getViewport() : undefined;

        if (!this.mapViewport) return;

        this.mapViewport.addEventListener('click', this._boundListener);
        const view = map.getView();
        this._eventKeys.push(
            view.on('change:center', evt => {
                console.log(evt.oldValue, view.getCenter());
            }),
        );
    }

    private _listener(evt: MouseEvent) {
        const mapEvent = new MapBrowserEvent(evt.type, this.getMap(), evt);
        console.log(mapEvent);
    }
}

map.addControl(new CustomControl());

/**
 * ==================================================
 * # Overlay
 * ==================================================
 */

const overlay = new Overlay({
    position: fromLonLat([0, 0]),
    element: document.createElement('div'),
});

map.addOverlay(overlay);

map.on('click', evt => {
    if (overlay.getPosition() === undefined) overlay.setPosition(evt.coordinate);
    else overlay.setPosition(undefined);
});

/**
 * ==================================================
 * # ol/array.stableSort
 * ==================================================
 */

const arr = Array(10)
    .fill(0)
    .map((_, i) => i);

stableSort(arr, (a: number, b: number) => (a < b ? 1 : a > b ? -1 : 0));
