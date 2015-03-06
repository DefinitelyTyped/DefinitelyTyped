/// <reference path="leaflet-draw.d.ts" />

var map: L.Map;

var drawnItems = new L.FeatureGroup();
map.addLayer(drawnItems);

var shapeOptions: L.PathOptions = {
	color: '#6274d7',
	weight: 1,
};

var example: () => void;

example = () => {
	var drawControl = new L.Control.Draw({
		edit: {
			featureGroup: drawnItems
		}
	});
	
	map.addControl(drawControl);
}

example = () => {
	var drawControl = new L.Control.Draw({
		draw: {
			polygon: false,
			marker: false
		},
		edit: {
			featureGroup: drawnItems,
			edit: false
		}
	});


example = () => {
	map.on('draw:created', function (e: L.Draw.CreatedEvent) {
		var type = e.layerType,
			layer = e.layer;

		if (type === 'marker') {
			// Do marker specific actions
		}

		// Do whatever else you need to. (save to db, add to map etc)
		map.addLayer(layer);
	});
}

example = () => {
	map.on('draw:edited', function (e: L.Draw.EditedEvent) {
		var layers = e.layers;
		layers.eachLayer(function (layer) {
			//do whatever you want, most likely save back to db
		});
	});
}}

example = () => {
	var drawControl = new L.Control.Draw({
		edit: {
			featureGroup: drawnItems
		}
	});
	drawControl.setDrawingOptions({
		rectangle: {
			shapeOptions: {
				color: '#0000FF'
			}
		}
	});
}

example = () => {
	var polygon: L.Draw.Polygon;
	polygon	= new L.Draw.Polygon(map, {
		shapeOptions: shapeOptions,
		allowIntersection: false,
		metric: false,
		zIndexOffset: 1500,
		repeatMode: true,
		drawError: {
			color: '#baabaa',
			timeout: 1200
		},
		showArea: false,
	});
	
	polygon.enable();
}

example = () => {
	var polyline: L.Draw.Polyline;
	polyline = new L.Draw.Polyline(map, {
		shapeOptions: shapeOptions,
		allowIntersection: false,
		metric: false,
		zIndexOffset: 1500,
		repeatMode: true,
		drawError: {
			color: '#baabaa',
			timeout: 1200
		}
	});
	
	polyline.disable();
}

example = () => {
	var circle: L.Draw.Circle;
	circle = new L.Draw.Circle(map, {
		shapeOptions: shapeOptions,
		repeatMode: false
	});
	
	circle.disable();
}

example = () => {
	var rectangle: L.Draw.Rectangle;
	rectangle = new L.Draw.Rectangle(map, {
		shapeOptions: shapeOptions,
		repeatMode: false
	});
	
	rectangle.disable();
}

example = () => {
	var marker: L.Draw.Marker;
	marker = new L.Draw.Marker(map, {
		icon: L.icon({
			iconUrl: 'my-icon.png'
		}),
		zIndexOffset: 100,
		repeatMode: true,
	});
	
	marker.disable();
}
