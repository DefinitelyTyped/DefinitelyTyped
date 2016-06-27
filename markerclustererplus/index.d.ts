// Type definitions for MarkerClustererPlus for Google Maps V3 2.1.1
// Project: http://github.com/mahnunchik/markerclustererplus
// Definitions by: Mathias Rodriguez <http://github.com/enanox>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="google-maps" />

/**
 * This class represents the object for values in the <code>styles</code> array passed
 * to the {@link MarkerClusterer} constructor. The element in this array that is used to
 * style the cluster icon is determined by calling the <code>calculator</code> function.
 */
declare interface ClusterIconStyle {
    /** The URL of the cluster icon image file. Required. */
    url: string;
    /** Height The display height (in pixels) of the cluster icon. Required. */
    height: number;
    /** Width The display width (in pixels) of the cluster icon. Required. */
    width: number;
    /**
     * [anchorText] The position (in pixels) from the center of the cluster icon to
     * where the text label is to be centered and drawn. The format is <code>[yoffset, xoffset]</code>
     * where <code>yoffset</code> increases as you go down from center and <code>xoffset</code>
     * increases to the right of center. The default is <code>[0, 0]</code>.
     */
    anchorText?: number[];
    /**
     * [anchorIcon] The anchor position (in pixels) of the cluster icon. This is the
     * spot on the cluster icon that is to be aligned with the cluster position. The format is
     * <code>[yoffset, xoffset]</code> where <code>yoffset</code> increases as you go down and
     * <code>xoffset</code> increases to the right of the top-left corner of the icon. The default
     * anchor position is the center of the cluster icon.
     */
    anchorIcon?: number[];
    /** [textColor="black"] The color of the label text shown on the cluster icon. */
    textColor?: string;
    /** textSize=11] The size (in pixels) of the label text shown on the cluster icon. */
    textSize?: number;
    /**
     * [textDecoration="none"] The value of the CSS <code>text-decoration</code>
     * property for the label text shown on the cluster icon.
     */
    textDecoration?: string;
    /** [fontWeight="bold"] The value of the CSS <code>font-weight</code>
     * property for the label text shown on the cluster icon.
     */
    fontWeight?: string;
    /** 
     * [fontStyle="normal"] The value of the CSS <code>font-style</code>
     *  property for the label text shown on the cluster icon.
     */
    fontStyle?: string;
    /**
     * [fontFamily="Arial,sans-serif"] The value of the CSS <code>font-family</code>
     *  property for the label text shown on the cluster icon.
     */
    fontFamily?: string;
    /**
     * [backgroundPosition="0 0"] The position of the cluster icon image
     * within the image defined by <code>url</code>. The format is <code>"xpos ypos"</code>
     * (the same format as for the CSS <code>background-position</code> property). You must set
     * this property appropriately when the image defined by <code>url</code> represents a sprite
     * containing multiple images. Note that the position <i>must</i> be specified in px units.
     */
    backgroundPosition?: string;    
}

/**
 * @name ClusterIconInfo
 * @class This class is an object containing general information about a cluster icon. This is
 *      the object that a <code>calculator</code> function returns.
 *
 * @property {string} text The text of the label to be shown on the cluster icon.
 * @property {number} index The index plus 1 of the element in the <code>styles</code>
 *      array to be used to style the cluster icon.
 * @property {string} title The tooltip to display when the mouse moves over the cluster icon.
 *      If this value is <code>undefined</code> or <code>""</code>, <code>title</code> is set to the
 *      value of the <code>title</code> property passed to the MarkerClusterer.
 */

declare class ClusterIconInfo extends google.maps.OverlayView {
   text: string;
   index: number;
   title: string;
   /**
    * A cluster icon.
    *
    * @constructor
    * @extends google.maps.OverlayView
    * @param {Cluster} cluster The cluster with which the icon is to be associated.
    * @param {Array} [styles] An array of {@link ClusterIconStyle} defining the cluster icons
    *       to use for various cluster sizes.
    * @private
    */
   constructor(cluster: Cluster, styles: ClusterIconStyle[]);
   
   /**
    * Adds the icon to the DOM.
    */
   onAdd(): void;
   
   /**
    * Removes the icon from the DOM.
    */
   onRemove(): void;
   
   /**
    * Draws the icon.
    */
   draw(): void;
   
   /**
    * Hides the icon.
    */
   hide(): void;
   
   /**
    * Positions and shows the icon.
    */
   show(): void;
   
   /**
    * Sets the icon styles to the appropriate element in the styles array.
    *
    * @param {ClusterIconInfo} sums The icon label text and styles index.
    */
   useStyle(sums: ClusterIconInfo[]): void;
   
   /**
    * Sets the position at which to center the icon.
    *
    * @param {google.maps.LatLng} center The latlng to set as the center.
    */
   setCenter(center: google.maps.LatLng): void;
   
   /**
    * Creates the cssText style parameter based on the position of the icon.
    *
    * @param {google.maps.Point} pos The position of the icon.
    * @return {string} The CSS style text.
    */
   createCss(pos: google.maps.Point): string;
   
   /**
    * Returns the position at which to place the DIV depending on the latlng.
    *
    * @param {google.maps.LatLng} latlng The position in latlng.
    * @return {google.maps.Point} The position in pixels.
   */
   getPosFromLatLng_(latLng: google.maps.LatLng): google.maps.Point;
}
 
interface Cluster {
   /**
    * Creates a single cluster that manages a group of proximate markers.
    * Used internally, do not call this constructor directly.
    * @constructor
    * @param {MarkerClusterer} mc The <code>MarkerClusterer</code> object with which this
    *       cluster is associated.
    */
   new (mc: MarkerClusterer): Cluster;
   
   /**
    * Returns the number of markers managed by the cluster. You can call this from
    * a <code>click</code>, <code>mouseover</code>, or <code>mouseout</code> event handler
    * for the <code>MarkerClusterer</code> object.
    *
    * @return {number} The number of markers in the cluster.
    */
   getSize(): number;
   
   /**
    * Returns the array of markers managed by the cluster. You can call this from
    * a <code>click</code>, <code>mouseover</code>, or <code>mouseout</code> event handler
    * for the <code>MarkerClusterer</code> object.
    *
    * @return {Array} The array of markers in the cluster.
    */
   getMarkers(): google.maps.Marker[];
   
   /**
     * Returns the center of the cluster. You can call this from
     * a <code>click</code>, <code>mouseover</code>, or <code>mouseout</code> event handler
     * for the <code>MarkerClusterer</code> object.
     *
     * @return {google.maps.LatLng} The center of the cluster.
     */
   getCenter(): google.maps.LatLng;
   
   /**
     * Returns the map with which the cluster is associated.
     *
     * @return {google.maps.Map} The map.
     * @ignore
     */
   getMap(): google.maps.Map;
   
   /**
     * Returns the <code>MarkerClusterer</code> object with which the cluster is associated.
     *
     * @return {MarkerClusterer} The associated marker clusterer.
     * @ignore
     */
   getMarkerClusterer(): MarkerClusterer;
    
   /**
     * Returns the bounds of the cluster.
     *
     * @return {google.maps.LatLngBounds} the cluster bounds.
     * @ignore
     */
   getBounds(): google.maps.LatLngBounds;
    
   /**
     * Removes the cluster from the map.
     *
     * @ignore
     */
   remove(): void;
    
   /**
     * Adds a marker to the cluster.
     *
     * @param {google.maps.Marker} marker The marker to be added.
     * @return {boolean} True if the marker was added.
     * @ignore
     */
   addMarker(marker: google.maps.Marker): boolean;
   
   /**
     * Determines if a marker lies within the cluster's bounds.
     *
     * @param {google.maps.Marker} marker The marker to check.
     * @return {boolean} True if the marker lies in the bounds.
     * @ignore
     */
   isMarkerInClusterBounds(marker: google.maps.Marker): boolean;
   
   /**
     * Calculates the extended bounds of the cluster with the grid.
     */
   calculateBounds_(): void;
   
   /**
     * Updates the cluster icon.
     */
   updateIcon_(): void;
   
   /**
     * Determines if a marker has already been added to the cluster.
     *
     * @param {google.maps.Marker} marker The marker to check.
     * @return {boolean} True if the marker has already been added.
     */
   isMarkerAlreadyAdded_(marker: google.maps.Marker): boolean;    
}

/**
 * Optional parameter passed to the {@link MarkerClusterer} constructor.
 */
interface MarkerClustererOptions {
   /** [gridSize=60] The grid size of a cluster in pixels. The grid is a square. */
   gridSize?: number;
   /** [maxZoom=null] The maximum zoom level at which clustering is enabled or 
    * <code>null</code> if clustering is to be enabled at all zoom levels.
    */
   maxZoom?: number;
   /**
    * [zoomOnClick=true] Whether to zoom the map when a cluster marker is
    * clicked. You may want to set this to <code>false</code> if you have installed a handler
    * for the <code>click</code> event and it deals with zooming on its own.
    */
   zoomOnClick?: boolean;
   /**
    * [averageCenter=false] Whether the position of a cluster marker should be
    * the average position of all markers in the cluster. If set to <code>false</code>, the
    * cluster marker is positioned at the location of the first marker added to the cluster.
    */
   averageCenter?: boolean;
   /**
    * [minimumClusterSize=2] The minimum number of markers needed in a cluster
    * before the markers are hidden and a cluster marker appears.
    */
   minimumClusterSize?: number;
   /**
    * [ignoreHidden=false] Whether to ignore hidden markers in clusters. You
    * may want to set this to <code>true</code> to ensure that hidden markers are not included
    * in the marker count that appears on a cluster marker (this count is the value of the
    * <code>text</code> property of the result returned by the default <code>calculator</code>).
    * If set to <code>true</code> and you change the visibility of a marker being clustered, be
    * sure to also call <code>MarkerClusterer.repaint()</code>.
    */
   ignoreHidden?: boolean;
   /**
    * [title=""] The tooltip to display when the mouse moves over a cluster
    * marker. (Alternatively, you can use a custom <code>calculator</code> function to specify a
    * different tooltip for each cluster marker.)
    */
   title?: string;
   /**
    * [calculator=MarkerClusterer.CALCULATOR] The function used to determine
    * the text to be displayed on a cluster marker and the index indicating which style to use
    * for the cluster marker. The input parameters for the function are (1) the array of markers
    * represented by a cluster marker and (2) the number of cluster icon styles. It returns a
    * {@link ClusterIconInfo} object. The default <code>calculator</code> returns a
    * <code>text</code> property which is the number of markers in the cluster and an
    * <code>index</code> property which is one higher than the lowest integer such that
    * <code>10^i</code> exceeds the number of markers in the cluster, or the size of the styles
    * array, whichever is less. The <code>styles</code> array element used has an index of
    * <code>index</code> minus 1. For example, the default <code>calculator</code> returns a
    * <code>text</code> value of <code>"125"</code> and an <code>index</code> of <code>3</code>
    * for a cluster icon representing 125 markers so the element used in the <code>styles</code>
    * array is <code>2</code>. A <code>calculator</code> may also return a <code>title</code>
    * property that contains the text of the tooltip to be used for the cluster marker. If
    * <code>title</code> is not defined, the tooltip is set to the value of the <code>title</code>
    * property for the MarkerClusterer.
    */
   calculator?: (markers: google.maps.Marker[], clusterIconStylesCount: number) => ClusterIconInfo;
   /**
   * [clusterClass="cluster"] The name of the CSS class defining general styles
   * for the cluster markers. Use this class to define CSS styles that are not set up by the code
   * that processes the <code>styles</code> array.
   */
   clusterClass?: string;
   /**
    *[styles] An array of {@link ClusterIconStyle} elements defining the styles
    * of the cluster markers to be used. The element to be used to style a given cluster marker
    * is determined by the function defined by the <code>calculator</code> property.
    * The default is an array of {@link ClusterIconStyle} elements whose properties are derived
    * from the values for <code>imagePath</code>, <code>imageExtension</code>, and
    * <code>imageSizes</code>.
    */
   styles?: ClusterIconStyle[];
   /**
    * [enableRetinaIcons=false] Whether to allow the use of cluster icons that
    * have sizes that are some multiple (typically double) of their actual display size. Icons such
    * as these look better when viewed on high-resolution monitors such as Apple's Retina displays.
    * Note: if this property is <code>true</code>, sprites cannot be used as cluster icons.
    */
   enableRetinaIcons?: boolean;
   /**
    * [batchSize=MarkerClusterer.BATCH_SIZE] Set this property to the
    * number of markers to be processed in a single batch when using a browser other than
    * Internet Explorer (for Internet Explorer, use the batchSizeIE property instead).
    */
   batchSize?: number;
   /** 
    * [batchSizeIE=MarkerClusterer.BATCH_SIZE_IE] When Internet Explorer is
    * being used, markers are processed in several batches with a small delay inserted between
    * each batch in an attempt to avoid Javascript timeout errors. Set this property to the
    * number of markers to be processed in a single batch; select as high a number as you can
    * without causing a timeout error in the browser. This number might need to be as low as 100
    * if 15,000 markers are being managed, for example.
    */
   batchSizeIE?: number;
   /**
    * [imagePath=MarkerClusterer.IMAGE_PATH]
    * The full URL of the root name of the group of image files to use for cluster icons.
    * The complete file name is of the form <code>imagePath</code>n.<code>imageExtension</code>
    * where n is the image file number (1, 2, etc.).
    */
   imagePath?: string;
   /**
    * [imageExtension=MarkerClusterer.IMAGE_EXTENSION]
    * The extension name for the cluster icon image files (e.g., <code>"png"</code> or
    * <code>"jpg"</code>).
    */
   imageExtension?: string;
   /**
    * [imageSizes=MarkerClusterer.IMAGE_SIZES]
    * An array of numbers containing the widths of the group of
    * <code>imagePath</code>n.<code>imageExtension</code> image files.
    * (The images are assumed to be square.)
    */
   imageSizes?: number[];
}

interface MarkerClusterer extends google.maps.OverlayView {
   /**
     * Creates a MarkerClusterer object with the options specified in {@link MarkerClustererOptions}.
     * @constructor
     * @extends google.maps.OverlayView
     * @param {google.maps.Map} map The Google map to attach to.
     * @param {Array.<google.maps.Marker>} [opt_markers] The markers to be added to the cluster.
     * @param {MarkerClustererOptions} [opt_options] The optional parameters.
     */
   new (map: google.maps.Map, opt_markers: google.maps.Marker[], opt_options?: MarkerClustererOptions): MarkerClusterer;
   
   /**
     * Implementation of the onAdd interface method.
     * @ignore
     */
   onAdd(): void; 
   
   /**
     * Implementation of the onRemove interface method.
     * Removes map event listeners and all cluster icons from the DOM.
     * All managed markers are also put back on the map.
     * @ignore
     */
   onRemove(): void;
   
   /**
     * Implementation of the draw interface method.
     * @ignore
     */
   draw(): void;
   
   /**
     * Sets up the styles object.
     */
   setupStyles_(): void;
   
   /**
     *  Fits the map to the bounds of the markers managed by the clusterer.
     */
   fitMapToMarkers(): void;
   
   /**
     * Returns the value of the <code>gridSize</code> property.
     *
     * @return {number} The grid size.
     */
   getGridSize(): number;
   
   /**
     * Sets the value of the <code>gridSize</code> property.
     *
     * @param {number} gridSize The grid size.
     */
   setGridSize(gridSize: number): void;
   
   /**
     * Returns the value of the <code>minimumClusterSize</code> property.
     *
     * @return {number} The minimum cluster size.
     */
   getMinimumClusterSize(): number; 
   
   /**
     * Sets the value of the <code>minimumClusterSize</code> property.
     *
     * @param {number} minimumClusterSize The minimum cluster size.
     */
   setMinimumClusterSize(minimumClusterSize: number): void;
   
   /**
     *  Returns the value of the <code>maxZoom</code> property.
     *
     *  @return {number} The maximum zoom level.
     */
   getMaxZoom(): number;
   
   /**
     *  Sets the value of the <code>maxZoom</code> property.
     *
     *  @param {number} maxZoom The maximum zoom level.
     */
   setMaxZoom(maxZoom: number): void; 
   
   /**
     *  Returns the value of the <code>styles</code> property.
     *
     *  @return {Array} The array of styles defining the cluster markers to be used.
     */
   getStyles(): ClusterIconStyle[];
   
   /**
     *  Sets the value of the <code>styles</code> property.
     *
     *  @param {Array.<ClusterIconStyle>} styles The array of styles to use.
     */
   setStyles(styles: ClusterIconStyle[]): void;
   
   /**
     * Returns the value of the <code>title</code> property.
     *
     * @return {string} The content of the title text.
     */
   getTitle(): string;
   
   /**
     *  Sets the value of the <code>title</code> property.
     *
     *  @param {string} title The value of the title property.
     */
   setTitle(title: string): void;
   
   /**
     * Returns the value of the <code>zoomOnClick</code> property.
     *
     * @return {boolean} True if zoomOnClick property is set.
     */
   getZoomOnClick(): boolean;
   
   /**
     *  Sets the value of the <code>zoomOnClick</code> property.
     *
     *  @param {boolean} zoomOnClick The value of the zoomOnClick property.
     */
   setZoomOnClick(zoomOnClick: boolean): void;
   
   /**
     * Returns the value of the <code>averageCenter</code> property.
     *
     * @return {boolean} True if averageCenter property is set.
     */
   getAverageCenter(): boolean;
   
   /**
     *  Sets the value of the <code>averageCenter</code> property.
     *
     *  @param {boolean} averageCenter The value of the averageCenter property.
     */
   setAverageCenter(averageCenter: boolean): void;
   
   /**
     * Returns the value of the <code>ignoreHidden</code> property.
     *
     * @return {boolean} True if ignoreHidden property is set.
     */
   getIgnoreHidden(): boolean; 
   
   /**
     * Sets the value of the <code>ignoreHidden</code> property.
     *
     * @param {boolean} ignoreHidden The value of the ignoreHidden property.
     */
   setIgnoreHidden(ignoreHidden: boolean): void;
   
   /**
     * Returns the value of the <code>enableRetinaIcons</code> property.
     *
     * @return {boolean} True if enableRetinaIcons property is set.
     */
   getEnableRetinaIcons(): boolean;
   
   /**
     * Sets the value of the <code>enableRetinaIcons</code> property.
     *
     * @param {boolean} enableRetinaIcons The value of the enableRetinaIcons property.
     */
   setEnableRetinaIcons(enableRetinaIcons: boolean): void;
   
   /**
     * Returns the value of the <code>imageExtension</code> property.
     *
     * @return {string} The value of the imageExtension property.
     */
   getImageExtension(): string;
   
   /**
     * Sets the value of the <code>imageExtension</code> property.
     *
     * @param {string} imageExtension The value of the imageExtension property.
     */
   setImageExtension(imageExtension: string): void;
   
   /**
     * Returns the value of the <code>imagePath</code> property.
     *
     * @return {string} The value of the imagePath property.
     */
   getImagePath(): string;
   
   /**
    * Sets the value of the <code>imagePath</code> property.
    *
    * @param {string} imagePath The value of the imagePath property.
    */
   setImagePath(imagePath: string): void;
   
   /**
     * Returns the value of the <code>imageSizes</code> property.
     *
     * @return {Array} The value of the imageSizes property.
     */
   getImageSizes(): number[];
   
   /**
     * Sets the value of the <code>imageSizes</code> property.
     *
     * @param {Array} imageSizes The value of the imageSizes property.
     */
   setImageSizes(imageSizes: number[]): void;
   
   /**
     * Returns the value of the <code>calculator</code> property.
     *
     * @return {function} the value of the calculator property.
     */  
   getCalculator(): Function;  
   
   /**
     * Sets the value of the <code>calculator</code> property.
     *
     * @param {function(Array.<google.maps.Marker>, number)} calculator The value
     *  of the calculator property.
     */
   setCalculator(calculator: (marker: google.maps.Marker, value: number) => Function): void;
   
   /**
     * Sets the value of the <code>hideLabel</code> property.
     *
     * @param {boolean} printable The value of the hideLabel property.
     */
   setHideLabel(printable: boolean): void;
   
   /**
     * Returns the value of the <code>hideLabel</code> property.
     *
     * @return {boolean} the value of the hideLabel property.
     */
   getHideLabel(): boolean;
   
   /**
     * Returns the value of the <code>batchSizeIE</code> property.
     *
     * @return {number} the value of the batchSizeIE property.
     */
   getBatchSizeIE(): number;
    
   /**
     * Sets the value of the <code>batchSizeIE</code> property.
     *
     * @param {number} batchSizeIE The value of the batchSizeIE property.
     */
   setBatchSizeIE(batchSizeIE: number): void;
   
   /**
     * Returns the value of the <code>clusterClass</code> property.
     *
     * @return {string} the value of the clusterClass property.
     */
   getClusterClass(): string;
   
   /**
     * Sets the value of the <code>clusterClass</code> property.
     *
     * @param {string} clusterClass The value of the clusterClass property.
     */
   setClusterClass(clusterClass: string): void;  
   
   /**
     * Returns the array of markers managed by the clusterer.
     *
     * @return {Array} The array of markers managed by the clusterer.
     */
    getMarkers(): google.maps.Marker[];
    
   /**
     * Returns the number of markers managed by the clusterer.
     *
     * @return {number} The number of markers.
     */
   getTotalMarkers(): number;
   
   /**
     * Returns the current array of clusters formed by the clusterer.
     *
     * @return {Array} The array of clusters formed by the clusterer.
     */
   getClusters(): Cluster[];
   
   /**
     * Returns the number of clusters formed by the clusterer.
     *
     * @return {number} The number of clusters formed by the clusterer.
     */
   getTotalClusters(): number;
   
   /**
     * Adds a marker to the clusterer. The clusters are redrawn unless
     * <code>opt_nodraw</code> is set to <code>true</code>.
     *
     * @param {google.maps.Marker} marker The marker to add.
     * @param {boolean} [opt_nodraw] Set to <code>true</code> to prevent redrawing.
     */
   addMarker(marker: google.maps.Marker, opt_nodraw: boolean): void;
    
   /**
     * Adds an array of markers to the clusterer. The clusters are redrawn unless
     * <code>opt_nodraw</code> is set to <code>true</code>.
     *
     * @param {Array.<google.maps.Marker>} markers The markers to add.
     * @param {boolean} [opt_nodraw] Set to <code>true</code> to prevent redrawing.
     */
   addMarkers(markers: google.maps.Marker[], opt_nodraw: boolean): void;
   
   /**
     * Pushes a marker to the clusterer.
     *
     * @param {google.maps.Marker} marker The marker to add.
     */
   pushMarkerTo_(marker: google.maps.Marker): void;
   
   /**
     * Removes a marker from the cluster and map.  The clusters are redrawn unless
     * <code>opt_nodraw</code> is set to <code>true</code>. Returns <code>true</code> if the
     * marker was removed from the clusterer.
     *
     * @param {google.maps.Marker} marker The marker to remove.
     * @param {boolean} [opt_nodraw] Set to <code>true</code> to prevent redrawing.
     * @param {boolean} [opt_noMapRemove] Set to <code>true</code> to prevent removal from map but still removing from cluster management
     * @return {boolean} True if the marker was removed from the clusterer.
     */
   removeMarker(marker: google.maps.Marker, opt_nodraw: boolean, noMapRemove: boolean): boolean;
   
   /**
     * Removes an array of markers from the cluster and map. The clusters are redrawn unless
     * <code>opt_nodraw</code> is set to <code>true</code>. Returns <code>true</code> if markers
     * were removed from the clusterer.
     *
     * @param {Array.<google.maps.Marker>} markers The markers to remove.
     * @param {boolean} [opt_nodraw] Set to <code>true</code> to prevent redrawing.
     * @param {boolean} [opt_noMapRemove] Set to <code>true</code> to prevent removal from map but still removing from cluster management
     * @return {boolean} True if markers were removed from the clusterer.
     */
   removeMarkers(markers: google.maps.Marker[], opt_nodraw: boolean, opt_noMapRemove: boolean): boolean;
   
   /**
     * Removes a marker and returns true if removed, false if not.
     *
     * @param {google.maps.Marker} marker The marker to remove
     * @param {boolean} removeFromMap set to <code>true</code> to explicitly remove from map as well as cluster manangement
     * @return {boolean} Whether the marker was removed or not
     */
   removeMarker_(marker: google.maps.Marker, removeFromMap: boolean): boolean;
   
   /**
     * Removes all clusters and markers from the map and also removes all markers
     * managed by the clusterer.
     */
   clearMarkers(): void;
   
   /**
     * Recalculates and redraws all the marker clusters from scratch.
     * Call this after changing any properties.
     */
   repaint(): void;
   
   /**
     * Returns the current bounds extended by the grid size.
     *
     * @param {google.maps.LatLngBounds} bounds The bounds to extend.
     * @return {google.maps.LatLngBounds} The extended bounds.
     * @ignore
     */
   getExtendedBounds(bounds: google.maps.LatLngBounds): google.maps.LatLngBounds;
   
   /**
     * Redraws all the clusters.
     */
   redraw_(): void;
   
   /**
     * Removes all clusters from the map. The markers are also removed from the map
     * if <code>opt_hide</code> is set to <code>true</code>.
     *
     * @param {boolean} [opt_hide] Set to <code>true</code> to also remove the markers
     *      from the map.
     */
   resetViewport_(opt_hide: boolean): void;
   
   /**
     * Calculates the distance between two latlng locations in km.
     *
     * @param {google.maps.LatLng} p1 The first lat lng point.
     * @param {google.maps.LatLng} p2 The second lat lng point.
     * @return {number} The distance between the two points in km.
     * @see http://www.movable-type.co.uk/scripts/latlong.html
    */
   distanceBetweenPoints_(p1: google.maps.LatLng, p2: google.maps.LatLng): number;
   
   /**
     * Determines if a marker is contained in a bounds.
     *
     * @param {google.maps.Marker} marker The marker to check.
     * @param {google.maps.LatLngBounds} bounds The bounds to check against.
     * @return {boolean} True if the marker is in the bounds.
     */
   isMarkerInBounds_(marker: google.maps.Marker, bounds: google.maps.LatLngBounds): boolean;
   
   /**
     * Adds a marker to a cluster, or creates a new cluster.
     *
     * @param {google.maps.Marker} marker The marker to add.
     */
   addToClosestCluster_(marker: google.maps.Marker): void;
   
   /**
     * Creates the clusters. This is done in batches to avoid timeout errors
     * in some browsers when there is a huge number of markers.
     *
     * @param {number} iFirst The index of the first marker in the batch of
     *      markers to be added to clusters.
     */
   createClusters_(iFirst: number): void;
   
   /**
     * Extends an object's prototype by another's.
     *
     * @param {Object} obj1 The object to be extended.
     * @param {Object} obj2 The object to extend with.
     * @return {Object} The new extended object.
     * @ignore
     */
   extend(obj1: Object, obj2: Object): Object;
   
   /**
     * The default function for determining the label text and style
     * for a cluster icon.
     *
     * @param {Array.<google.maps.Marker>} markers The array of markers represented by the cluster.
     * @param {number} numStyles The number of marker styles available.
     * @return {ClusterIconInfo} The information resource for the cluster.
     * @constant
     * @ignore
     */
   CALCULATOR(markers: google.maps.Marker[], numStyles: number): ClusterIconInfo;
   
   /**
     * The number of markers to process in one batch.
     *
     * @type {number}
     * @constant
     */
   BATCH_SIZE: number;
   
   /**
     * The number of markers to process in one batch (IE only).
     *
     * @type {number}
     * @constant
     */
   BATCH_SIZE_IE: number;
   
   /**
     * The default root name for the marker cluster images.
     *
     * @type {string}
     * @constant
     */
   IMAGE_PATH: string;
   
   /**
     * The default extension name for the marker cluster images.
     *
     * @type {string}
     * @constant
     */
   IMAGE_EXTENSION: string;
   
   /**
     * The default array of sizes for the marker cluster images.
     *
     * @type {Array.<number>}
     * @constant
     */
   IMAGE_SIZES: number[];
   
}

declare var MarkerClusterer: MarkerClusterer;
 
interface String {
   trim(): string;
}
