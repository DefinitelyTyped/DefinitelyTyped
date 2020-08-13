import InfoWindow = google.maps.InfoWindow;
import InfoWindowOptions = google.maps.InfoWindowOptions;
import LatLng = google.maps.LatLng;
import GoogleMap = google.maps.Map;
import Marker = google.maps.Marker;
import Size = google.maps.Size;
import StreetViewPanorama = google.maps.StreetViewPanorama;

const infoWindowOptions: InfoWindowOptions = {};
const infoWindowOptionContent1: InfoWindowOptions = { content: 'test' };
const infoWindowOptionContent2: InfoWindowOptions = { content: new Text('test') };
const infoWindowOptionContent3: InfoWindowOptions = { content: document.createElement('div') };
const infoWindowOptionContent4: InfoWindowOptions = { content: document.createDocumentFragment() };
const infoWindowOptionDisableAutoPan1: InfoWindowOptions = { disableAutoPan: true };
const infoWindowOptionMaxWidth1: InfoWindowOptions = { maxWidth: 0 };
const infoWindowOptionPixelOffset1: InfoWindowOptions = { pixelOffset: new Size(0, 0) };
const infoWindowOptionPosition1: InfoWindowOptions = { position: { lat: 0, lng: 0 } };
const infoWindowOptionPosition2: InfoWindowOptions = { position: new LatLng(0, 0) };
const infoWindowOptionZIndex1: InfoWindowOptions = { zIndex: 0 };

const infoWindow = new InfoWindow();

const infoWindowWithEmptyOptions = new InfoWindow({});

infoWindow.addListener('closeclick', () => {});
infoWindow.addListener('closeclick', event => {}); // $ExpectError

infoWindow.addListener('content_changed', () => {});
infoWindow.addListener('content_changed', event => {}); // $ExpectError

infoWindow.addListener('domready', () => {});
infoWindow.addListener('domready', event => {}); // $ExpectError

infoWindow.addListener('position_changed', () => {});
infoWindow.addListener('position_changed', event => {}); // $ExpectError

infoWindow.addListener('zindex_changed', () => {});
infoWindow.addListener('zindex_changed', event => {}); // $ExpectError

infoWindow.close();

infoWindow.getContent(); // $ExpectType string | Node

infoWindow.getPosition(); // $ExpectType LatLng

infoWindow.getZIndex(); // $ExpectType number

infoWindow.open();
infoWindow.open(new GoogleMap(document.body));
infoWindow.open(new GoogleMap(document.body), new Marker());
infoWindow.open(new StreetViewPanorama(document.body));
infoWindow.open(new StreetViewPanorama(document.body), new Marker());

infoWindow.setContent('test');
infoWindow.setContent(new Text('test'));
infoWindow.setContent(document.createElement('div'));
infoWindow.setContent(document.createDocumentFragment());

infoWindow.setOptions({});

infoWindow.setPosition({ lat: 0, lng: 0 });
infoWindow.setPosition(new LatLng(0, 0));

infoWindow.setZIndex(0);

export {};
