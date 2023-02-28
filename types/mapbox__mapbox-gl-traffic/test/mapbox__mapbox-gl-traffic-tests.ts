import * as Mapbox from "mapbox-gl";
import * as MapboxTraffic from "mapbox__mapbox-gl-traffic";

const options: MapboxTraffic.Options = {
    showTraffic: true,
    showTrafficButton: false,
    trafficSource: new RegExp(/mapbox-traffic-v\d/),
};

const map = new Mapbox.Map();
const mapboxTraffic = new MapboxTraffic(options);

const hasTraffic: boolean = mapboxTraffic._hasTraffic();

mapboxTraffic._hideTraffic();

mapboxTraffic._showTraffic();

const btnWrapper = mapboxTraffic.onAdd(map);
const isDiv = btnWrapper instanceof HTMLDivElement;

mapboxTraffic.onRemove();

mapboxTraffic.toggleTraffic();
