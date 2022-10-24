import MapboxDraw, {
    DrawCustomMode,
    DrawFeature,
    DrawMode,
    DrawUpdateEvent,
    IMapboxDrawOptions,
} from '@mapbox/mapbox-gl-draw';
import { LineString, MultiLineString, MultiPoint, MultiPolygon, Point, Polygon } from 'geojson';

const draw = new MapboxDraw({});

// $ExpectType string[]
draw.add({
    type: 'FeatureCollection',
    features: [],
});

// accepts string
// $ExpectType MapboxDraw
draw.delete('1');

// accepts string[]
// $ExpectType MapboxDraw
draw.delete(['1', '2']);

// $ExpectType string[]
draw.getSelectedIds();

// $ExpectType MapboxDraw
draw.changeMode('direct_select', { featureId: '1' });

// @ts-expect-error
draw.changeMode('direct_select');

// $ExpectType MapboxDraw
draw.changeMode('simple_select');

const drawLineSelect: DrawMode = 'draw_line_string';
// $ExpectType MapboxDraw
draw.changeMode(drawLineSelect, { featureId: '1', from: [1] });

// $ExpectType MapboxDraw
draw.changeMode('draw_point');

// @ts-expect-error
draw.changeMode('draw_point', {});

// $ExpectType MapboxDraw
draw.changeMode('custom_mode');

// $ExpectType MapboxDraw
draw.changeMode('custom_mode', {});

function callback(event: DrawUpdateEvent) {
    // $ExpectType "draw.update"
    event.type;
}

interface CustomMode extends DrawCustomMode<{}, {}> {
    customMethod(): number;
}

const customMode: CustomMode = {
    onSetup(this, options) {
        const pointFeature = this.getFeature('1') as DrawFeature<Point>;
        // $ExpectType "Point"
        pointFeature.type;
        // $ExpectType Position
        pointFeature.coordinates;

        const multiPointFeature = this.getFeature('2') as DrawFeature<MultiPoint>;
        // $ExpectType "MultiPoint"
        multiPointFeature.type;
        // $ExpectType Position[]
        multiPointFeature.coordinates;

        const lineStringFeature = this.getFeature('3') as DrawFeature<LineString>;
        // $ExpectType "LineString"
        lineStringFeature.type;
        // $ExpectType Position[]
        lineStringFeature.coordinates;

        const multiLineStringFeature = this.getFeature('4') as DrawFeature<MultiLineString>;
        // $ExpectType "MultiLineString"
        multiLineStringFeature.type;
        // $ExpectType Position[][]
        multiLineStringFeature.coordinates;

        const polygonFeature = this.getFeature('5') as DrawFeature<Polygon>;
        // $ExpectType "Polygon"
        polygonFeature.type;
        // $ExpectType Position[][]
        polygonFeature.coordinates;

        const multiPolygonFeature = this.getFeature('6') as DrawFeature<MultiPolygon>;
        // $ExpectType "MultiPolygon"
        multiPolygonFeature.type;
        // $ExpectType Position[][][]
        multiPolygonFeature.coordinates;

        return {};
    },

    onClick(state, e) {
        // $ExpectType LngLat
        e.lngLat;
        // $ExpectType DrawFeature<Point | MultiPoint | LineString | MultiLineString | Polygon | MultiPolygon, GeoJsonProperties>
        e.featureTarget;

        this.setSelectedCoordinates([
            {
                coord_path: '0',
                feature_id: '1',
            },
        ]);

        this.setSelected();
        this.setSelected('1');
        this.setSelected(['1', '2']);

        // $ExpectType DrawFeature<Point | MultiPoint | LineString | MultiLineString | Polygon | MultiPolygon, GeoJsonProperties>
        const feat = this.getFeature('1');
        feat.setCoordinates(feat.coordinates);

        // $ExpectType number
        this.customMethod();
    },

    toDisplayFeatures(state, geojson, display) {},

    customMethod(): number {
        return 1;
    },
};

// @ts-expect-error
const CustomModeMissingDisplayFeatures: DrawCustomMode<{}, {}> = {};

const options: IMapboxDrawOptions = {
    modes: {
        custom_mode: customMode,
        ...MapboxDraw.modes,
    },
};

const drawWithCustomMode = new MapboxDraw(options);
