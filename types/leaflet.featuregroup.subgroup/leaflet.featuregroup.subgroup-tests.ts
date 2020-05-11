import * as L from 'leaflet';
import 'leaflet.featuregroup.subgroup';

// Setup
interface MyProperties {
	testProperty: string;
}
const parentGroup1: L.LayerGroup = L.layerGroup();
const latLng: L.LatLng = L.latLng(10, 10);
const layer: L.Layer = L.marker(latLng);
const layers: L.Layer[] = [layer];

// Construction using the constructor
let subGroup = new L.FeatureGroup.SubGroup<MyProperties>();
subGroup = new L.FeatureGroup.SubGroup<MyProperties>(parentGroup1);
subGroup = new L.FeatureGroup.SubGroup<MyProperties>(parentGroup1, layers);

// Construction using the 'leaflet-style' factory method
subGroup = L.featureGroup.subGroup();
subGroup = L.featureGroup.subGroup(parentGroup1);
subGroup = L.featureGroup.subGroup(parentGroup1, layers);

// Setting and getting the parent group
const parentGroup2: L.LayerGroup = L.layerGroup();
subGroup.setParentGroup(parentGroup2);
subGroup.setParentGroupSafe(parentGroup2);
const parentGroup3 = subGroup.getParentGroup();

// Calling methods inherited from FeatureGroup
const bounds: L.LatLngBounds = subGroup
   .setStyle({})
   .bringToFront()
   .bringToBack()
   .getBounds();
