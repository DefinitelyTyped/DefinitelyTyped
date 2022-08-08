import * as L from 'leaflet';
import 'leaflet-routing-machine';

const map: L.Map = L.map('map-container');

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const waypoints = [
    L.latLng(57.75934, 11.93927),
    L.latLng(57.74, 11.94),
    L.latLng(57.6792, 11.949),
];

const myPlan = new L.Routing.Plan(waypoints, {
    addWaypoints: false,
    createMarker: (index: number, waypoint: L.Routing.Waypoint, numberOfWaypoints: number) => {
      if (waypoint && index > -1 && index < numberOfWaypoints) {
        return L.marker(waypoint.latLng);
      }
      return false;
    }
  });

L.Routing.control({
    plan: myPlan,
    waypoints
}).addTo(map);
