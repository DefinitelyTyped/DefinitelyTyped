/// <reference path="leaflet.d.ts" />
declare module L{
	export class MarkerClusterGroup implements ILayer{
		constructor(options?:MarkerClusterGroupOptions);
		
		on(eventName:string, callback:(a)=>void);

		addLayer(layer: Marker): MarkerClusterGroup;
		/** Takes an array of markers and adds them in bulk*/
		addLayers(layers: Marker[]): MarkerClusterGroup;


		removeLayer(layer: Marker): MarkerClusterGroup;
		/** Takes an array of markers and removes them in bulk*/
		removeLayers(layer: Marker[]): MarkerClusterGroup;

		onAdd(map: Map): void;
		onRemove(map: Map): void;
	}
	export interface MarkerClusterGroupOptions{
		/**When you click a cluster we zoom to its bounds.*/
		zoomToBoundsOnClick?:boolean;

		/**When you mouse over a cluster it shows the bounds of its markers.*/
		showCoverageOnHover?:boolean;

		/**When you click a cluster at the bottom zoom level we spiderfy it so you can see all of its markers.*/
		spiderfyOnMaxZoom?:boolean;

		/**If set to true then adding individual markers to the MarkerClusterGroup after it has been added to the map will add the marker and animate it in to the cluster. Defaults to false as this gives better performance when bulk adding markers. addLayers does not support this, only addLayer with individual Markers.*/
		animateAddingMarkers?:boolean;

		/**If set, at this zoom level and below markers will not be clustered. This defaults to disabled.*/
		disableClusteringAtZoom?:number;

		/**The maximum radius that a cluster will cover from the central marker (in pixels). Default 80. Decreasing will make more smaller clusters.*/
		maxClusterRadius?:number;

		/**Options to pass when creating the L.Polygon to show the bounds of a cluster*/
		polygonOptions?:PolylineOptions;

		/**If set to true, overrides the icon for all added markers to make them appear as a 1 size cluster*/
		singleMarkerMode?:boolean;

		/**Increase from 1 to increase the distance away from the center that spiderfied markers are placed. Use if you are using big marker icons.*/
		spiderfyDistanceMultiplier?:number;

		iconCreateFunction:(cluster:ClusterParameter)=>L.DivIcon;
	}
	export interface ClusterParameter{
		getAllChildMarkers():Marker[];
		getChildCount():number;
	}
}
