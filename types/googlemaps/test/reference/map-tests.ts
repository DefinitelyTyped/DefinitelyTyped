// TODO: transfer and process tests for a map from the googlemaps-tests.ts file

import GoogleMap = google.maps.Map;

const map = new GoogleMap(document.body);

map.addListener('bounds_changed', () => {});
map.addListener('bounds_changed', (event) => {}); // $ExpectError
map.addListener('center_changed', () => {});
map.addListener('center_changed', (event) => {}); // $ExpectError
map.addListener('click', event => {
    event; // $ExpectType MapMouseEvent | IconMouseEvent
});
map.addListener('dblclick', event => {
    event; // $ExpectType MapMouseEvent
});
map.addListener('drag', () => {});
map.addListener('drag', (event) => {}); // $ExpectError
map.addListener('dragend', () => {});
map.addListener('dragend', (event) => {}); // $ExpectError
map.addListener('dragstart', () => {});
map.addListener('dragstart', (event) => {}); // $ExpectError
map.addListener('heading_changed', () => {});
map.addListener('heading_changed', (event) => {}); // $ExpectError
map.addListener('idle', () => {});
map.addListener('idle', (event) => {}); // $ExpectError
map.addListener('maptypeid_changed', () => {});
map.addListener('maptypeid_changed', (event) => {}); // $ExpectError
map.addListener('mousemove', event => {
    event; // $ExpectType MapMouseEvent
});
map.addListener('mouseout', event => {
    event; // $ExpectType MapMouseEvent
});
map.addListener('mouseover', event => {
    event; // $ExpectType MapMouseEvent
});
map.addListener('projection_changed', () => {});
map.addListener('projection_changed', (event) => {}); // $ExpectError
map.addListener('rightclick', event => {
    event; // $ExpectType MapMouseEvent
});
map.addListener('tilesloaded', () => {});
map.addListener('tilesloaded', (event) => {}); // $ExpectError
map.addListener('tilt_changed', () => {});
map.addListener('tilt_changed', (event) => {}); // $ExpectError
map.addListener('zoom_changed', () => {});
map.addListener('zoom_changed', (event) => {}); // $ExpectError

// TODO: #50253 remove after that most libraries will go to MapMouseEvent
declare const nativeMouseEvent: MouseEvent;
declare const mapMouseEvent: google.maps.MapMouseEvent;
declare const deprecatedMapMouseEvent: google.maps.MouseEvent;
nativeMouseEvent.preventDefault();
mapMouseEvent.domEvent.preventDefault();
deprecatedMapMouseEvent.domEvent.preventDefault();

export {};
