// These examples are from Mapbox (https://www.mapbox.com/mapbox-gl-js/examples/) and therefore under the copyright of Mapbox Inc.
/// <reference path="./mapbox-gl.d.ts" />
/// <reference path="./typings/index.d.ts" />

/**
 * Set API Access Token
 */
mapboxgl.accessToken = 'foo';


/**
 * Display a Map
 */
let map = new mapboxgl.Map({
	container: 'map', // container id
	style: 'mapbox://styles/mapbox/streets-v8', //stylesheet location
	center: [-74.50, 40], // starting position
	zoom: 9 // starting zoom
});


/**
 * Create and style marker clusters
 */
map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/dark-v8',
	center: [-103.59179687498357, 40.66995747013945],
	zoom: 3,
});

map.on('load', function(){

	// Add a new source from our GeoJSON data and set the
	// 'cluster' option to true.
	map.addSource("earthquakes", {
		type: "geojson",
		// Point to GeoJSON data. This example visualizes all M1.0+ earthquakes
		// from 12/22/15 to 1/21/16 as logged by USGS' Earthquake hazards program.
		data: "/mapbox-gl-js/assets/earthquakes.geojson",
		cluster: true,
		clusterMaxZoom: 14, // Max zoom to cluster points on
		clusterRadius: 50 // Radius of each cluster when clustering points (defaults to 50)
	});

	// Use the earthquakes source to create five layers:
	// One for non-clustered markers, three for each cluster category,
	// and one for cluster labels.
	map.addLayer({
		"id": "non-cluster-markers",
		"type": "symbol",
		"source": "earthquakes",
		"layout": {
			"icon-image": "marker-15"
		}
	});

	// Display the earthquake data in three layers, each filtered to a range of
	// count values. Each range gets a different fill color.
	var layers = [
		[150, '#f28cb1'],
		[20, '#f1f075'],
		[0, '#51bbd6']
	];

	layers.forEach(function (layer, i) {
		map.addLayer({
			"id": "cluster-" + i,
			"type": "circle",
			"source": "earthquakes",
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
		"source": "earthquakes",
		"layout": {
			"text-field": "{point_count}",
			"text-font": [
				"DIN Offc Pro Medium",
				"Arial Unicode MS Bold"
			],
			"text-size": 12
		}
	});
});

/**
 * Add a GeoJSON line
 */
map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v8',
	center: [-122.486052, 37.830348],
	zoom: 15
});

map.on('load', function () {
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

/**
 * Display a Popup
 */

map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v8',
	center: [-96, 37.8],
	zoom: 3
});

map.flyTo({center: [0, 0], zoom: 9});

map.flyTo({
	center: [0, 0],
	zoom: 9,
	speed: 0.2,
	curve: 1,
	easing: function(t: any) {
		return t;
	}
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
				"coordinates": [
					-76.53063297271729,
					39.18174077994108
				]
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
	url: 'https://www.mapbox.com/images/foo.png',
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
		'https://www.mapbox.com/videos/baltimore-smoke.mp4',
		'https://www.mapbox.com/videos/baltimore-smoke.webm'
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
 * Tooltip
 */
var tooltip = new mapboxgl.Popup({closeOnClick: false})
	.setLngLat([-96, 37.8])
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
				[-80.425, 46.437],
				[-71.516, 46.437],
				[-71.516, 37.936],
				[-80.425, 37.936]
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

map = new mapboxgl.Map({
	container: 'map',
	maxZoom: 5.99,
	minZoom: 4,
	zoom: 5,
	center: [-75.789, 41.874],
	style: mapStyle,
	hash: false
});

/**
 * Add video
 */
var videoStyle = {
	"version": 8,
	"sources": {
		"satellite": {
			"type": "raster",
			"url": "mapbox://mapbox.satellite",
			"tileSize": 256
		},
		"video": {
			"type": "video",
			"urls": ["https://www.mapbox.com/drone/video/drone.mp4", "https://www.mapbox.com/drone/video/drone.webm"],
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

/**
 * Add GeoJSON Markers
 */
map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v8',
	center: [-96, 37.8],
	zoom: 3
});

map.on('load', function () {
	map.addSource("markers", {
		"type": "geojson",
		"data": {
			"type": "FeatureCollection",
			"features": [{
				"type": "Feature",
				"geometry": {
					"type": "Point",
					"coordinates": [-77.03238901390978, 38.913188059745586]
				},
				"properties": {
					"title": "Mapbox DC",
					"marker-symbol": "monument"
				}
			}, {
				"type": "Feature",
				"geometry": {
					"type": "Point",
					"coordinates": [-122.414, 37.776]
				},
				"properties": {
					"title": "Mapbox SF",
					"marker-symbol": "harbor"
				}
			}]
		}
	});

	map.addLayer({
		"id": "markers",
		"type": "symbol",
		"source": "markers",
		"layout": {
			"icon-image": "{marker-symbol}-15",
			"text-field": "{title}",
			"text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
			"text-offset": [0, 0.6],
			"text-anchor": "top"
		}
	});
});