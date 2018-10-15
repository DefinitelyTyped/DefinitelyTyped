import mapboxgl = require('.');

// These examples adapted from Mapbox's examples (https://www.mapbox.com/mapbox-gl-js/examples)

/**
 * Set API Access Token
 */
mapboxgl.accessToken = 'foo';


/**
 * Display a Map
 */
let map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v8',
	center: [-50, 50],
	zoom: 10,
	minZoom: 1,
	maxZoom: 2,
	interactive: true,
	attributionControl: true,
	customAttribution: '© YourCo',
	bearingSnap: 7,
	scrollZoom: true,
	maxBounds: [[-100,-90],[100,90]],
	boxZoom: true,
	dragRotate: false,
	dragPan: true,
});


/**
 * Create and style marker clusters
 */
map.on('load', function(){

	// Add a new source from our GeoJSON data and set the
	// 'cluster' option to true.
	map.addSource("data", {
		type: "geojson",
		data: "/data.geojson",
		cluster: true,
		clusterMaxZoom: 14, // Max zoom to cluster points on
		clusterRadius: 50 // Radius of each cluster when clustering points (defaults to 50)
	});

	map.addLayer({
		"id": "layer",
		"type": "symbol",
		"source": "data",
		"layout": {
			"icon-image": "marker-15"
		}
	});

        var layers: [number, string][] = [
		[150, '#f28cb1'],
		[20, '#f1f075'],
		[0, '#51bbd6']
	];

	layers.forEach(function (layer, i) {
		map.addLayer({
			"id": "cluster-" + i,
			"type": "circle",
			"source": "data",
			"paint": {
				"circle-color": layer[1],
				"circle-radius": 18
			},
			"filter": i == 0 ?
				[">=", "point_count", layer[0]] :
				["all",
					[">=", "point_count", layer[0]],
					["<", "point_count", layers[i - 1][0]]]
		});
	});

	// Add a layer for the clusters' count labels
	map.addLayer({
		"id": "cluster-count",
		"type": "symbol",
		"source": "data",
		"layout": {
			"text-field": "{point_count}",
			"text-font": [
				"DIN Offc Pro Medium",
				"Arial Unicode MS Bold"
			],
			"text-size": 12
		}
	});

/**
 * Add a GeoJSON line
 */
	map.addSource("route", {
		"type": "geojson",
		"data": {
			"type": "Feature",
			"properties": {},
			"geometry": {
				"type": "LineString",
				"coordinates": [
					[-122.48369693756104, 37.83381888486939],
					[-122.48348236083984, 37.83317489144141],
					[-122.48339653015138, 37.83270036637107],
					[-122.48356819152832, 37.832056363179625],
					[-122.48404026031496, 37.83114119107971],
					[-122.48404026031496, 37.83049717427869],
					[-122.48348236083984, 37.829920943955045],
					[-122.48356819152832, 37.82954808664175],
					[-122.48507022857666, 37.82944639795659],
					[-122.48610019683838, 37.82880236636284],
					[-122.48695850372314, 37.82931081282506],
					[-122.48700141906738, 37.83080223556934],
					[-122.48751640319824, 37.83168351665737],
					[-122.48803138732912, 37.832158048267786],
					[-122.48888969421387, 37.83297152392784],
					[-122.48987674713133, 37.83263257682617],
					[-122.49043464660643, 37.832937629287755],
					[-122.49125003814696, 37.832429207817725],
					[-122.49163627624512, 37.832564787218985],
					[-122.49223709106445, 37.83337825839438],
					[-122.49378204345702, 37.83368330777276]
				]
			}
		}
	});

	map.addLayer({
		"id": "route",
		"type": "line",
		"source": "route",
		"layout": {
			"line-join": "round",
			"line-cap": "round"
		},
		"paint": {
			"line-color": "#888",
			"line-width": 8
		}
	});
});

// FlyTo
map.flyTo({
	center: [0, 0],
	zoom: 10,
	speed: 0.5,
	curve: 1,
	screenSpeed: 1,
	easing: function(t: number) {
		return t;
	},
	maxDuration: 1
});

/**
 * GeoJSONSource
 */
var geoJSONSourceObj = new mapboxgl.GeoJSONSource({
	data: {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": null,
			"geometry": {
				"type": "Point",
				"coordinates": [-50, 0]
			}
		}]
	}
});
map.addSource('some id', geoJSONSourceObj); // add
map.removeSource('some id');  // remove

/**
 * ImageSource
 */
var imageSourceObj = new mapboxgl.ImageSource({
	url: '/foo.png',
	coordinates: [
		[-76.54335737228394, 39.18579907229748],
		[-76.52803659439087, 39.1838364847587],
		[-76.5295386314392, 39.17683392507606],
		[-76.54520273208618, 39.17876344106642]
	]
});
map.addSource('some id', imageSourceObj); // add
map.removeSource('some id');  // remove

/**
 * Video Source
 */
var videoSourceObj = new mapboxgl.VideoSource({
	urls: [
		'/blah.mp4',
		'/blah.webm'
	],
	coordinates: [
		[-76.54335737228394, 39.18579907229748],
		[-76.52803659439087, 39.1838364847587],
		[-76.5295386314392, 39.17683392507606],
		[-76.54520273208618, 39.17876344106642]
	]
});
map.addSource('some id', videoSourceObj); // add
map.removeSource('some id');  // remove

/**
 * Add Raster Source /// made URL optional to allow only tiles.
 */
map.addSource('radar', {
	type: 'raster',
	tiles: ['https://nowcoast.noaa.gov/arcgis/services/nowcoast/radar_meteo_imagery_nexrad_time/MapServer/WmsServer?bbox={bbox-epsg-3857}&service=WMS&request=GetMap&version=1.3.0&layers=1&styles=&format=image/png&transparent=true&height=256&width=256&crs=EPSG:3857'],
	tileSize: 256
})

map.addLayer({
	id: 'radar',
	type: 'raster',
	source: 'radar',
	paint: {}
})

/**
 * Popup
 */
var popup = new mapboxgl.Popup({closeOnClick: false, closeButton: true, anchor: 'top-right', offset: {'top': [0,0], 'bottom': [25,-50]}, className: 'custom-class' })
	.setLngLat([-50, 50])
	.setHTML('<h1>Hello World!</h1>')
	.addTo(map);

/**
 * Add an image
 */
var mapStyle = {
	"version": 8,
	"name": "Dark",
	"sources": {
		"mapbox": {
			"type": "vector",
			"url": "mapbox://mapbox.mapbox-streets-v6"
		},
		"overlay": {
			"type": "image",
			"url": "/mapbox-gl-js/assets/radar.gif",
			"coordinates": [
				[-50, 40],
				[0, 40],
				[0, 0],
				[-50, 0]
			]
		}
	},
	"sprite": "mapbox://sprites/mapbox/dark-v8",
	"glyphs": "mapbox://fonts/mapbox/{fontstack}/{range}.pbf",
	"layers": [
		{
			"id": "background",
			"type": "background",
			"paint": {"background-color": "#111"}
		},
		{
			"id": "water",
			"source": "mapbox",
			"source-layer": "water",
			"type": "fill",
			"paint": {"fill-color": "#2c2c2c"}
		},
		{
			"id": "boundaries",
			"source": "mapbox",
			"source-layer": "admin",
			"type": "line",
			"paint": {"line-color": "#797979", "line-dasharray": [2, 2, 6, 2]},
			"filter": ["all", ["==", "maritime", 0]],
		},
		{
			"id": "overlay",
			"source": "overlay",
			"type": "raster",
			"paint": {"raster-opacity": 0.85}
		},
		{
			"id": "cities",
			"source": "mapbox",
			"source-layer": "place_label",
			"type": "symbol",
			"layout": {
				"text-field": "{name_en}",
				"text-font": ["DIN Offc Pro Bold", "Arial Unicode MS Bold"],
				"text-size": {"stops": [[4, 9], [6, 12]]}
			},
			"paint": {
				"text-color": "#969696",
				"text-halo-width": 2,
				"text-halo-color": "rgba(0, 0, 0, 0.85)"
			}
		},
		{
			"id": "states",
			"source": "mapbox",
			"source-layer": "state_label",
			"type": "symbol",
			"layout": {
				"text-transform": "uppercase",
				"text-field": "{name_en}",
				"text-font": ["DIN Offc Pro Bold", "Arial Unicode MS Bold"],
				"text-letter-spacing": 0.15,
				"text-max-width": 7,
				"text-size": {"stops": [[4, 10], [6, 14]]}
			},
			"filter": [">=", "area", 80000],
			"paint": {
				"text-color": "#969696",
				"text-halo-width": 2,
				"text-halo-color": "rgba(0, 0, 0, 0.85)"
			}
		}
	]
};

/**
 * Add video
 */
var videoStyle: mapboxgl.Style = {
	"version": 8,
	"sources": {
		"satellite": {
			"type": "raster",
			"url": "mapbox://mapbox.satellite",
			"tileSize": 256
		},
		"video": {
			"type": "video",
			"urls": ["drone.mp4", "drone.webm"],
			"coordinates": [
				[-122.51596391201019, 37.56238816766053],
				[-122.51467645168304, 37.56410183312965],
				[-122.51309394836426, 37.563391708549425],
				[-122.51423120498657, 37.56161849366671]
			]
		}
	},
	"layers": [{
		"id": "background",
		"type": "background",
		"paint": {
			"background-color": "rgb(4,7,14)"
		}
	}, {
		"id": "satellite",
		"type": "raster",
		"source": "satellite"
	}, {
		"id": "video",
		"type": "raster",
		"source": "video"
	}]
};

map = new mapboxgl.Map({
	container: 'map',
	minZoom: 14,
	zoom: 17,
	center: [-122.514426, 37.562984],
	bearing: -96,
	style: videoStyle,
	hash: false
});

map = new mapboxgl.Map({
	container: 'map',
	minZoom: 14,
	zoom: 17,
	center: [-122.514426, 37.562984],
	bearing: -96,
	style: videoStyle,
	hash: false
});

/**
 * Marker
 */
let marker = new mapboxgl.Marker(undefined, {offset: [10, 0]})
	.setLngLat([-50,50])
	.addTo(map);

marker.remove();

/*
 * LngLatBounds
 */
let bool:boolean
let bounds = new mapboxgl.LngLatBounds()
bool = bounds.isEmpty()
/*
 * AttributionControl
 */
let attributionControl = new mapboxgl.AttributionControl({ compact: false, customAttribution: '© YourCo' });
attributionControl.on('click', () => {});

declare var lnglat: mapboxgl.LngLat;
declare var lnglatlike: mapboxgl.LngLatLike;
declare var lnglatboundslike: mapboxgl.LngLatBoundsLike;
declare var pointlike: mapboxgl.PointLike;

function expectType<T>(value: T) { /* let the compiler handle things */ }

/*
 * LngLatLike
 */

expectType<mapboxgl.LngLatLike>(new mapboxgl.LngLat(0, 0));
expectType<mapboxgl.LngLatLike>([0, 0]);
expectType<mapboxgl.LngLatLike>({ lng: 0, lat: 0 });

/*
 * LngLat
 */

new mapboxgl.LngLat(0, 0);
expectType<mapboxgl.LngLat>(mapboxgl.LngLat.convert(lnglatlike));

/*
 * LngLatBoundsLike
 */

expectType<mapboxgl.LngLatBoundsLike>([lnglatlike, lnglatlike]);
expectType<mapboxgl.LngLatBoundsLike>([0, 0, 1, 1]);
expectType<mapboxgl.LngLatBoundsLike>(new mapboxgl.LngLatBounds());

/*
 * LngLatBounds
 */

new mapboxgl.LngLatBounds();
new mapboxgl.LngLatBounds([0, 0, 1, 1]);
new mapboxgl.LngLatBounds([lnglatlike, lnglatlike]);
new mapboxgl.LngLatBounds(lnglat, lnglat);
new mapboxgl.LngLatBounds(lnglatlike, lnglatlike);
expectType<mapboxgl.LngLatBounds>(mapboxgl.LngLatBounds.convert(lnglatboundslike));

/*
 * PointLike
 */

expectType<mapboxgl.PointLike>(new mapboxgl.Point(0, 0));
expectType<mapboxgl.PointLike>([0, 0]);

/*
 * Point
 */

new mapboxgl.Point(0, 0);
expectType<mapboxgl.Point>(mapboxgl.Point.convert(pointlike));

/*
 * TransformRequestFunction
 */

expectType<mapboxgl.TransformRequestFunction>((url: string) => ({ url }));
expectType<mapboxgl.TransformRequestFunction>((url: string, resourceType: mapboxgl.ResourceType) => ({
	 url,
	 credentials: 'same-origin',
	 headers: { 'Accept-Encoding': 'compress' },
	 method: 'POST',
	collectResourceTiming: true,
 }));

/*
 * Map
 */

let padding: mapboxgl.PaddingOptions = {
	top: 0,
	bottom: 0,
	left: 0,
	right: 0,
};
let animOpts: mapboxgl.AnimationOptions;
let cameraOpts: mapboxgl.CameraOptions = {
	around: lnglatlike,
	center: lnglatlike,
	bearing: 0,
	pitch: 0,
	zoom: 0,
};
let cameraForBoundsOpts: mapboxgl.CameraForBoundsOptions = {
	offset: pointlike,
	maxZoom: 10,
	padding,
	...cameraOpts,
}

expectType<mapboxgl.CameraOptions | undefined>(map.cameraForBounds(lnglatboundslike));
expectType<mapboxgl.CameraOptions | undefined>(map.cameraForBounds(lnglatboundslike, cameraForBoundsOpts));

expectType<mapboxgl.Map>(map.fitScreenCoordinates([0, 0], pointlike, 1));
expectType<mapboxgl.Map>(map.fitScreenCoordinates([0, 0], pointlike, 1, cameraOpts));
expectType<mapboxgl.Map>(map.fitScreenCoordinates([0, 0], pointlike, 1, cameraOpts, { key: 'value' }));

/*
 * Map Events
 */

// General events
expectType<mapboxgl.Map>(map.on('load', (ev) => {
	expectType<mapboxgl.MapboxEvent>(ev);
	expectType<mapboxgl.Map>(ev.target);
	expectType<undefined>(ev.originalEvent);
}));
expectType<mapboxgl.Map>(map.on('remove', (ev) => {
	expectType<mapboxgl.MapboxEvent>(ev);
	expectType<mapboxgl.Map>(ev.target);
	expectType<undefined>(ev.originalEvent);
}));
expectType<mapboxgl.Map>(map.on('render', (ev) => {
	expectType<mapboxgl.MapboxEvent>(ev);
	expectType<mapboxgl.Map>(ev.target);
	expectType<undefined>(ev.originalEvent);
}));
expectType<mapboxgl.Map>(map.on('resize', (ev) => {
	expectType<mapboxgl.MapboxEvent>(ev);
	expectType<mapboxgl.Map>(ev.target);
	expectType<undefined>(ev.originalEvent);
}));

// Error event
expectType<mapboxgl.Map>(map.on('error', (ev) => {
	expectType<mapboxgl.ErrorEvent>(ev);
	expectType<Error>(ev.error);
	expectType<undefined>(ev.originalEvent);
}));

// Mouse events
expectType<mapboxgl.Map>(map.on('mousedown', (ev) => {
	expectType<mapboxgl.MapMouseEvent>(ev);
	expectType<mapboxgl.Map>(ev.target);
	expectType<mapboxgl.LngLat>(ev.lngLat);
	expectType<mapboxgl.Point>(ev.point);

	expectType<void>(ev.preventDefault());
	expectType<boolean>(ev.defaultPrevented);

	expectType<MouseEvent>(ev.originalEvent);
}));
expectType<mapboxgl.Map>(map.on('mouseup', (ev) => {
	expectType<mapboxgl.MapMouseEvent>(ev);
	expectType<mapboxgl.Map>(ev.target);
	expectType<mapboxgl.LngLat>(ev.lngLat);
	expectType<mapboxgl.Point>(ev.point);

	expectType<void>(ev.preventDefault());
	expectType<boolean>(ev.defaultPrevented);

	expectType<MouseEvent>(ev.originalEvent);
}));
expectType<mapboxgl.Map>(map.on('click', (ev) => {
	expectType<mapboxgl.MapMouseEvent>(ev);
	expectType<mapboxgl.Map>(ev.target);
	expectType<mapboxgl.LngLat>(ev.lngLat);
	expectType<mapboxgl.Point>(ev.point);

	expectType<void>(ev.preventDefault());
	expectType<boolean>(ev.defaultPrevented);

	expectType<MouseEvent>(ev.originalEvent);
}));
expectType<mapboxgl.Map>(map.on('dblclick', (ev) => {
	expectType<mapboxgl.MapMouseEvent>(ev);
	expectType<mapboxgl.Map>(ev.target);
	expectType<mapboxgl.LngLat>(ev.lngLat);
	expectType<mapboxgl.Point>(ev.point);

	expectType<void>(ev.preventDefault());
	expectType<boolean>(ev.defaultPrevented);

	expectType<MouseEvent>(ev.originalEvent);
}));
expectType<mapboxgl.Map>(map.on('mousemove', (ev) => {
	expectType<mapboxgl.MapMouseEvent>(ev);
	expectType<mapboxgl.Map>(ev.target);
	expectType<mapboxgl.LngLat>(ev.lngLat);
	expectType<mapboxgl.Point>(ev.point);

	expectType<void>(ev.preventDefault());
	expectType<boolean>(ev.defaultPrevented);

	expectType<MouseEvent>(ev.originalEvent);
}));
expectType<mapboxgl.Map>(map.on('mouseover', (ev) => {
	expectType<mapboxgl.MapMouseEvent>(ev);
	expectType<mapboxgl.Map>(ev.target);
	expectType<mapboxgl.LngLat>(ev.lngLat);
	expectType<mapboxgl.Point>(ev.point);

	expectType<void>(ev.preventDefault());
	expectType<boolean>(ev.defaultPrevented);

	expectType<MouseEvent>(ev.originalEvent);
}));
expectType<mapboxgl.Map>(map.on('mouseout', (ev) => {
	expectType<mapboxgl.MapMouseEvent>(ev);
	expectType<mapboxgl.Map>(ev.target);
	expectType<mapboxgl.LngLat>(ev.lngLat);
	expectType<mapboxgl.Point>(ev.point);

	expectType<void>(ev.preventDefault());
	expectType<boolean>(ev.defaultPrevented);

	expectType<MouseEvent>(ev.originalEvent);
}));
expectType<mapboxgl.Map>(map.on('contextmenu', (ev) => {
	expectType<mapboxgl.MapMouseEvent>(ev);
	expectType<mapboxgl.Map>(ev.target);
	expectType<mapboxgl.LngLat>(ev.lngLat);
	expectType<mapboxgl.Point>(ev.point);

	expectType<void>(ev.preventDefault());
	expectType<boolean>(ev.defaultPrevented);

	expectType<MouseEvent>(ev.originalEvent);
}));

// Touch events
expectType<mapboxgl.Map>(map.on('touchcancel', (ev) => {
	expectType<mapboxgl.MapTouchEvent>(ev);
	expectType<mapboxgl.Map>(ev.target);
	expectType<mapboxgl.LngLat>(ev.lngLat);
	expectType<mapboxgl.LngLat[]>(ev.lngLats);
	expectType<mapboxgl.Point>(ev.point);
	expectType<mapboxgl.Point[]>(ev.points);

	expectType<void>(ev.preventDefault());
	expectType<boolean>(ev.defaultPrevented);

	expectType<TouchEvent>(ev.originalEvent);
}));
expectType<mapboxgl.Map>(map.on('touchmove', (ev) => {
	expectType<mapboxgl.MapTouchEvent>(ev);
	expectType<mapboxgl.Map>(ev.target);
	expectType<mapboxgl.LngLat>(ev.lngLat);
	expectType<mapboxgl.LngLat[]>(ev.lngLats);
	expectType<mapboxgl.Point>(ev.point);
	expectType<mapboxgl.Point[]>(ev.points);

	expectType<void>(ev.preventDefault());
	expectType<boolean>(ev.defaultPrevented);

	expectType<TouchEvent>(ev.originalEvent);
}));
expectType<mapboxgl.Map>(map.on('touchend', (ev) => {
	expectType<mapboxgl.MapTouchEvent>(ev);
	expectType<mapboxgl.Map>(ev.target);
	expectType<mapboxgl.LngLat>(ev.lngLat);
	expectType<mapboxgl.LngLat[]>(ev.lngLats);
	expectType<mapboxgl.Point>(ev.point);
	expectType<mapboxgl.Point[]>(ev.points);

	expectType<void>(ev.preventDefault());
	expectType<boolean>(ev.defaultPrevented);

	expectType<TouchEvent>(ev.originalEvent);
}));
expectType<mapboxgl.Map>(map.on('touchstart', (ev) => {
	expectType<mapboxgl.MapTouchEvent>(ev);
	expectType<mapboxgl.Map>(ev.target);
	expectType<mapboxgl.LngLat>(ev.lngLat);
	expectType<mapboxgl.LngLat[]>(ev.lngLats);
	expectType<mapboxgl.Point>(ev.point);
	expectType<mapboxgl.Point[]>(ev.points);

	expectType<void>(ev.preventDefault());
	expectType<boolean>(ev.defaultPrevented);

	expectType<TouchEvent>(ev.originalEvent);
}));

// Context events
expectType<mapboxgl.Map>(map.on('webglcontextlost', (ev) => {
	expectType<mapboxgl.MapContextEvent>(ev);
	expectType<mapboxgl.Map>(ev.target);
	expectType<WebGLContextEvent>(ev.originalEvent);
}));
expectType<mapboxgl.Map>(map.on('webglcontextrestored', (ev) => {
	expectType<mapboxgl.MapContextEvent>(ev);
	expectType<mapboxgl.Map>(ev.target);
	expectType<WebGLContextEvent>(ev.originalEvent);
}));

// Data events
expectType<mapboxgl.Map>(map.on('dataloading', (ev) => {
	expectType<mapboxgl.MapDataEvent>(ev);
	expectType<mapboxgl.Map>(ev.target);
	expectType<undefined>(ev.originalEvent);
}));
expectType<mapboxgl.Map>(map.on('data', (ev) => {
	expectType<mapboxgl.MapDataEvent>(ev);
	expectType<mapboxgl.Map>(ev.target);
	expectType<undefined>(ev.originalEvent);
}));
expectType<mapboxgl.Map>(map.on('tiledataloading', (ev) => {
	expectType<mapboxgl.MapDataEvent>(ev);
	expectType<mapboxgl.Map>(ev.target);
	expectType<undefined>(ev.originalEvent);
}));
expectType<mapboxgl.Map>(map.on('sourcedataloading', (ev) => {
	expectType<mapboxgl.MapSourceDataEvent>(ev);
	expectType<mapboxgl.Map>(ev.target);
	expectType<undefined>(ev.originalEvent);
	expectType<'source'>(ev.dataType);
}));
expectType<mapboxgl.Map>(map.on('sourcedata', (ev) => {
	expectType<mapboxgl.MapSourceDataEvent>(ev);
	expectType<mapboxgl.Map>(ev.target);
	expectType<undefined>(ev.originalEvent);
	expectType<'source'>(ev.dataType);
}));
expectType<mapboxgl.Map>(map.on('styledataloading', (ev) => {
	expectType<mapboxgl.MapStyleDataEvent>(ev);
	expectType<mapboxgl.Map>(ev.target);
	expectType<undefined>(ev.originalEvent);
	expectType<'style'>(ev.dataType);
}));
expectType<mapboxgl.Map>(map.on('styledata', (ev) => {
	expectType<mapboxgl.MapStyleDataEvent>(ev);
	expectType<mapboxgl.Map>(ev.target);
	expectType<undefined>(ev.originalEvent);
	expectType<'style'>(ev.dataType);
}));

// Layer events
expectType<mapboxgl.Map>(map.on('click', 'text', (ev) => {
	expectType<mapboxgl.MapLayerMouseEvent>(ev);
	expectType<mapboxgl.MapboxGeoJSONFeature[] | undefined>(ev.features);
}));
expectType<mapboxgl.Map>(map.on('dblclick', 'text', (ev) => {
	expectType<mapboxgl.MapLayerMouseEvent>(ev);
	expectType<mapboxgl.MapboxGeoJSONFeature[] | undefined>(ev.features);
}));
expectType<mapboxgl.Map>(map.on('mousedown', 'text', (ev) => {
	expectType<mapboxgl.MapLayerMouseEvent>(ev);
	expectType<mapboxgl.MapboxGeoJSONFeature[] | undefined>(ev.features);
}));
expectType<mapboxgl.Map>(map.on('mouseup', 'text', (ev) => {
	expectType<mapboxgl.MapLayerMouseEvent>(ev);
	expectType<mapboxgl.MapboxGeoJSONFeature[] | undefined>(ev.features);
}));
expectType<mapboxgl.Map>(map.on('mousemove', 'text', (ev) => {
	expectType<mapboxgl.MapLayerMouseEvent>(ev);
	expectType<mapboxgl.MapboxGeoJSONFeature[] | undefined>(ev.features);
}));
expectType<mapboxgl.Map>(map.on('mouseenter', 'text', (ev) => {
	expectType<mapboxgl.MapLayerMouseEvent>(ev);
	expectType<mapboxgl.MapboxGeoJSONFeature[] | undefined>(ev.features);
}));
expectType<mapboxgl.Map>(map.on('mouseleave', 'text', (ev) => {
	expectType<mapboxgl.MapLayerMouseEvent>(ev);
	expectType<mapboxgl.MapboxGeoJSONFeature[] | undefined>(ev.features);
}));
expectType<mapboxgl.Map>(map.on('mouseover', 'text', (ev) => {
	expectType<mapboxgl.MapLayerMouseEvent>(ev);
	expectType<mapboxgl.MapboxGeoJSONFeature[] | undefined>(ev.features);
}));
expectType<mapboxgl.Map>(map.on('mouseout', 'text', (ev) => {
	expectType<mapboxgl.MapLayerMouseEvent>(ev);
	expectType<mapboxgl.MapboxGeoJSONFeature[] | undefined>(ev.features);
}));
expectType<mapboxgl.Map>(map.on('contextmenu', 'text', (ev) => {
	expectType<mapboxgl.MapLayerMouseEvent>(ev);
	expectType<mapboxgl.MapboxGeoJSONFeature[] | undefined>(ev.features);
}));

expectType<mapboxgl.Map>(map.on('touchstart', 'text', (ev) => {
	expectType<mapboxgl.MapLayerTouchEvent>(ev);
	expectType<mapboxgl.MapboxGeoJSONFeature[] | undefined>(ev.features);
}));
expectType<mapboxgl.Map>(map.on('touchend', 'text', (ev) => {
	expectType<mapboxgl.MapLayerTouchEvent>(ev);
	expectType<mapboxgl.MapboxGeoJSONFeature[] | undefined>(ev.features);
}));
expectType<mapboxgl.Map>(map.on('touchcancel', 'text', (ev) => {
	expectType<mapboxgl.MapLayerTouchEvent>(ev);
	expectType<mapboxgl.MapboxGeoJSONFeature[] | undefined>(ev.features);
}));
