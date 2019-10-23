import * as L from 'leaflet';
import 'leaflet-label';

const map: L.Map = L.map('map-container');
let label: L.Label;

// Icon
const icon: L.Icon = new L.Icon({ labelAnchor: L.point(1, 1) });

// CircleMarker
let circleMarker: L.CircleMarker = new L.CircleMarker(new L.LatLng(0, 0), { labelAnchor: L.point(1, 1) });

circleMarker = circleMarker.bindLabel('test', {
	className: 'thingy',
	clickable: true,
	direction: 'right',
	noHide: false,
	offset: new L.Point(0, 0),
	opacity: 0.5,
	zoomAnimation: true,
});

circleMarker.showLabel();
circleMarker.hideLabel();
circleMarker.setLabelNoHide(true);
circleMarker.updateLabelContent('test2');
label = circleMarker.getLabel();
circleMarker = circleMarker.unbindLabel();

// Marker
let marker = new L.Marker(new L.LatLng(0, 0));

marker = marker.bindLabel('test', {
	className: 'thingy',
	clickable: true,
	direction: 'right',
	noHide: false,
	offset: new L.Point(0, 0),
	opacity: 0.5,
	zoomAnimation: true,
});

marker.showLabel();
marker.hideLabel();
marker.setLabelNoHide(true);
marker.updateLabelContent('test2');
label = marker.getLabel();
marker = marker.unbindLabel();
marker.setOpacity(0.5);
marker.setOpacity(0.5, true);

// Path
let path: L.Path = new L.Polyline([L.latLng(0, 0)]);

path = path.bindLabel('test', {
	className: 'thingy',
	clickable: true,
	direction: 'right',
	noHide: false,
	offset: new L.Point(0, 0),
	opacity: 0.5,
	zoomAnimation: true,
});

path.updateLabelContent('test2');

path = path.unbindLabel();

// Label

label = new L.Label();

label.setOpacity(0.7);
label.updateZIndex(5);
label.setLatLng(new L.LatLng(3, 3));
label.setContent('thing');
label.close();

// Examples from the README
let example: () => void;

example = () => {
	L.marker(L.latLng(-37.7772, 175.2606)).bindLabel('Look revealing label!').addTo(map);
};

example = () => {
	L.polyline([
		L.latLng(-37.7612, 175.2756),
		L.latLng(-37.7702, 175.2796),
		L.latLng(-37.7802, 175.2750),
	]).bindLabel('Even polylines can have labels.').addTo(map);
};

example = () => {
	L.marker(L.latLng(-37.785, 175.263))
		.bindLabel('A sweet static label!', { noHide: true })
		.addTo(map);
};

example = () => {
	const myIcon = L.icon({
		iconUrl: 'my-icon.png',
		iconSize: L.point(20, 20),
		iconAnchor: L.point(10, 10),
		labelAnchor: L.point(6, 0) // as I want the label to appear 2px past the icon (10 + 2 - 6)
	});
	L.marker(L.latLng(-37.7772, 175.2606), {
		icon: myIcon
	}).bindLabel('My label', {
		noHide: true,
		direction: 'auto'
	});
};

example = () => {
	const myIcon = L.icon({
		iconUrl: 'my-icon.png',
		iconSize: L.point(20, 20),
		iconAnchor: L.point(10, 10),
		labelAnchor: L.point(6, 0) // as I want the label to appear 2px past the icon (10 + 2 - 6)
	});
	L.marker(L.latLng(-37.7772, 175.2606), {
		icon: myIcon
	}).bindLabel('Look revealing label!').addTo(map);
};

example = () => {
	const markerLabel = L.marker(L.latLng(-37.7772, 175.2606)).bindLabel('Look revealing label!').addTo(map);

	// Sets opacity of marker to 0.3 and opacity of label to 1
	markerLabel.setOpacity(0.3);

	// Sets opacity of marker to 0.3 and opacity of label to 0.3
	markerLabel.setOpacity(0.3, true);

	// Sets opacity of marker to 0 and opacity of label to 0
	markerLabel.setOpacity(0);
	markerLabel.setOpacity(0, true);

	// Sets opacity of marker to 1 and opacity of label to 1
	markerLabel.setOpacity(1);
	markerLabel.setOpacity(1, true);
};
