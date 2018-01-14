// Type definitions for ol ^4.6
// Project: https://github.com/openlayers/openlayers/tree/master/package#readme
// Definitions by: Yair Tawil <https://github.com/yairtawil>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as ol from 'openlayers';

declare module 'ol/control/attribution' {
    export default ol.control.Attribution;
}
declare module 'ol/control/control' {
    export default ol.control.Control;
}
declare module 'ol/control/fullscreen' {
    export default ol.control.FullScreen;
}
declare module 'ol/control/mouseposition' {
    export default ol.control.MousePosition;
}
declare module 'ol/control/overviewmap' {
    export default ol.control.OverviewMap;
}
declare module 'ol/control/rotate' {
    export default ol.control.Rotate;
}
declare module 'ol/control/scaleline' {
    export default ol.control.ScaleLine;
}
declare module 'ol/control/zoom' {
    export default ol.control.Zoom;
}
declare module 'ol/control/zoomslider' {
    export default ol.control.ZoomSlider;
}
declare module 'ol/control/zoomtoextent' {
    export default ol.control.ZoomToExtent;
}
declare module 'ol/events/condition' {
    export default ol.events.condition;
}
declare module 'ol/events/event' {
    export default ol.events.Event;
}
declare module 'ol/events/eventtarget' {
    export default ol.events.EventTarget;
}
declare module 'ol/format/esrijson' {
    export default ol.format.EsriJSON;
}
declare module 'ol/format/feature' {
    export default ol.format.Feature;
}
declare module 'ol/format/filter' {
    export default ol.format.filter;
}
declare module 'ol/format/geojson' {
    export default ol.format.GeoJSON;
}
declare module 'ol/format/gml2' {
    export default ol.format.GML2;
}
declare module 'ol/format/gml3' {
    export default ol.format.GML3;
}
declare module 'ol/format/gmlbase' {
    export default ol.format.GMLBase;
}
declare module 'ol/format/gpx' {
    export default ol.format.GPX;
}
declare module 'ol/format/igc' {
    export default ol.format.IGC;
}
declare module 'ol/format/igcz' {
    export default ol.format.IGCZ;
}
declare module 'ol/format/jsonfeature' {
    export default ol.format.JSONFeature;
}
declare module 'ol/format/kml' {
    export default ol.format.KML;
}
declare module 'ol/format/mvt' {
    export default ol.format.MVT;
}
declare module 'ol/format/osmxml' {
    export default ol.format.OSMXML;
}
declare module 'ol/format/polyline' {
    export default ol.format.Polyline;
}
declare module 'ol/format/textfeature' {
    export default ol.format.TextFeature;
}
declare module 'ol/format/topojson' {
    export default ol.format.TopoJSON;
}
declare module 'ol/format/wfs' {
    export default ol.format.WFS;
}
declare module 'ol/format/wkt' {
    export default ol.format.WKT;
}
declare module 'ol/format/wmscapabilities' {
    export default ol.format.WMSCapabilities;
}
declare module 'ol/format/wmsgetfeatureinfo' {
    export default ol.format.WMSGetFeatureInfo;
}
declare module 'ol/format/wmtscapabilities' {
    export default ol.format.WMTSCapabilities;
}
declare module 'ol/format/xml' {
    export default ol.format.XML;
}
declare module 'ol/format/xmlfeature' {
    export default ol.format.XMLFeature;
}
declare module 'ol/geom/circle' {
    export default ol.geom.Circle;
}
declare module 'ol/geom/geometry' {
    export default ol.geom.Geometry;
}
declare module 'ol/geom/geometrycollection' {
    export default ol.geom.GeometryCollection;
}
declare module 'ol/geom/geometrylayout' {
    export default ol.geom.GeometryLayout;
}
declare module 'ol/geom/geometrytype' {
    export default ol.geom.GeometryType;
}
declare module 'ol/geom/linearring' {
    export default ol.geom.LinearRing;
}
declare module 'ol/geom/linestring' {
    export default ol.geom.LineString;
}
declare module 'ol/geom/multilinestring' {
    export default ol.geom.MultiLineString;
}
declare module 'ol/geom/multipoint' {
    export default ol.geom.MultiPoint;
}
declare module 'ol/geom/multipolygon' {
    export default ol.geom.MultiPolygon;
}
declare module 'ol/geom/point' {
    export default ol.geom.Point;
}
declare module 'ol/geom/polygon' {
    export default ol.geom.Polygon;
}
declare module 'ol/geom/simplegeometry' {
    export default ol.geom.SimpleGeometry;
}
declare module 'ol/interaction/doubleclickzoom' {
    export default ol.interaction.DoubleClickZoom;
}
declare module 'ol/interaction/draganddrop' {
    export default ol.interaction.DragAndDrop;
}
declare module 'ol/interaction/dragbox' {
    export default ol.interaction.DragBox;
}
declare module 'ol/interaction/dragpan' {
    export default ol.interaction.DragPan;
}
declare module 'ol/interaction/dragrotate' {
    export default ol.interaction.DragRotate;
}
declare module 'ol/interaction/dragrotateandzoom' {
    export default ol.interaction.DragRotateAndZoom;
}
declare module 'ol/interaction/dragzoom' {
    export default ol.interaction.DragZoom;
}
declare module 'ol/interaction/draw' {
    export default ol.interaction.Draw;
}
declare module 'ol/interaction/interaction' {
    export default ol.interaction.Interaction;
}
declare module 'ol/interaction/interaction' {
    export default ol.interaction.Interaction;
}
declare module 'ol/interaction/keyboardpan' {
    export default ol.interaction.KeyboardPan;
}
declare module 'ol/interaction/keyboardzoom' {
    export default ol.interaction.KeyboardZoom;
}
declare module 'ol/interaction/modify' {
    export default ol.interaction.Modify;
}
declare module 'ol/interaction/mousewheelzoom' {
    export default ol.interaction.MouseWheelZoom;
}
declare module 'ol/interaction/pinchrotate' {
    export default ol.interaction.PinchRotate;
}
declare module 'ol/interaction/pinchzoom' {
    export default ol.interaction.PinchZoom;
}
declare module 'ol/interaction/pointer' {
    export default ol.interaction.Pointer;
}
declare module 'ol/interaction/select' {
    export default ol.interaction.Select;
}
declare module 'ol/interaction/snap' {
    export default ol.interaction.Snap;
}
declare module 'ol/interaction/translate' {
    export default ol.interaction.Translate;
}
declare module 'ol/interaction/translateeventtype' {
    export default ol.interaction.TranslateEventType;
}
declare module 'ol/layer/base' {
    export default ol.layer.Base;
}
declare module 'ol/layer/group' {
    export default ol.layer.Group;
}
declare module 'ol/layer/heatmap' {
    export default ol.layer.Heatmap;
}
declare module 'ol/layer/image' {
    export default ol.layer.Image;
}
declare module 'ol/layer/layer' {
    export default ol.layer.Layer;
}
declare module 'ol/layer/layer' {
    export default ol.layer.Layer;
}
declare module 'ol/layer/tile' {
    export default ol.layer.Tile;
}
declare module 'ol/layer/vector' {
    export default ol.layer.Vector;
}
declare module 'ol/layer/vectortile' {
    export default ol.layer.VectorTile;
}
declare module 'ol/layer/vectortilerendertype' {
    export default ol.layer.VectorTileRenderType;
}
declare module 'ol/pointer/pointerevent' {
    export default ol.pointer.PointerEvent;
}
declare module 'ol/proj/projection' {
    export default ol.proj.Projection;
}
declare module 'ol/proj/units' {
    export default ol.proj.Units;
}

declare module 'ol/render/canvas' {
    export default ol.render.canvas;
}
declare module 'ol/render/event' {
    export default ol.render.Event;
}
declare module 'ol/render/feature' {
    export default ol.render.Feature;
}
declare module 'ol/render/vectorcontext' {
    export default ol.render.VectorContext;
}
declare module 'ol/source/bingmaps' {
    export default ol.source.BingMaps;
}
declare module 'ol/source/cartodb' {
    export default ol.source.CartoDB;
}
declare module 'ol/source/cluster' {
    export default ol.source.Cluster;
}
declare module 'ol/source/image' {
    export default ol.source.Image;
}
declare module 'ol/source/imagearcgisrest' {
    export default ol.source.ImageArcGISRest;
}
declare module 'ol/source/imagecanvas' {
    export default ol.source.ImageCanvas;
}
declare module 'ol/source/imagemapguide' {
    export default ol.source.ImageMapGuide;
}
declare module 'ol/source/imagestatic' {
    export default ol.source.ImageStatic;
}
declare module 'ol/source/imagevector' {
    export default ol.source.ImageVector;
}
declare module 'ol/source/imagewms' {
    export default ol.source.ImageWMS;
}
declare module 'ol/source/osm' {
    export default ol.source.OSM;
}
declare module 'ol/source/raster' {
    export default ol.source.Raster;
}
declare module 'ol/source/source' {
    export default ol.source.Source;
}
declare module 'ol/source/stamen' {
    export default ol.source.Stamen;
}
declare module 'ol/source/state' {
    export default ol.source.State;
}
declare module 'ol/source/tile' {
    export default ol.source.Tile;
}
declare module 'ol/source/tilearcgisrest' {
    export default ol.source.TileArcGISRest;
}
declare module 'ol/source/tiledebug' {
    export default ol.source.TileDebug;
}
declare module 'ol/source/tileimage' {
    export default ol.source.TileImage;
}
declare module 'ol/source/tilejson' {
    export default ol.source.TileJSON;
}
declare module 'ol/source/tileutfgrid' {
    export default ol.source.TileUTFGrid;
}
declare module 'ol/source/tilewms' {
    export default ol.source.TileWMS;
}
declare module 'ol/source/urltile' {
    export default ol.source.UrlTile;
}
declare module 'ol/source/vector' {
    export default ol.source.Vector;
}
declare module 'ol/source/vectortile' {
    export default ol.source.VectorTile;
}
declare module 'ol/source/wmts' {
    export default ol.source.WMTS;
}
declare module 'ol/source/xyz' {
    export default ol.source.XYZ;
}
declare module 'ol/source/zoomify' {
    export default ol.source.Zoomify;
}
declare module 'ol/style/atlasmanager' {
    export default ol.style.AtlasManager;
}
declare module 'ol/style/circle' {
    export default ol.style.Circle;
}
declare module 'ol/style/fill' {
    export default ol.style.Fill;
}
declare module 'ol/style/icon' {
    export default ol.style.Icon;
}
declare module 'ol/style/image' {
    export default ol.style.Image;
}
declare module 'ol/style/regularshape' {
    export default ol.style.RegularShape;
}
declare module 'ol/style/stroke' {
    export default ol.style.Stroke;
}
declare module 'ol/style/style' {
    export default ol.style.Style;
}
declare module 'ol/style/text' {
    export default ol.style.Text;
}
declare module 'ol/tilegrid/tilegrid' {
    export default ol.tilegrid.TileGrid;
}
declare module 'ol/tilegrid/wmts' {
    export default ol.tilegrid.WMTS;
}
declare module 'ol/webgl/fragment' {
    export default ol.webgl.Fragment;
}
declare module 'ol/webgl/shader' {
    export default ol.webgl.Shader;
}
declare module 'ol/webgl/vertex' {
    export default ol.webgl.Vertex;
}
declare module 'ol/assertionerror' {
    export default ol.AssertionError;
}
declare module 'ol/attribution' {
    export default ol.Attribution;
}
declare module 'ol/collection' {
    export default ol.Collection;
}
declare module 'ol/color' {
    export default ol.Color;
}
declare module 'ol/colorlike' {
    export default ol.colorlike;
}
declare module 'ol/control' {
    export default ol.control;
}
declare module 'ol/coordinate' {
    export default ol.Coordinate;
}
declare module 'ol/deviceorientation' {
    export default ol.DeviceOrientation;
}
declare module 'ol/disposable' {
    export default ol.Disposable;
}
declare module 'ol/easing' {
    export default ol.easing;
}
declare module 'ol/events' {
    export default ol.events;
}
declare module 'ol/extent' {
    export default ol.Extent;
}
declare module 'ol/feature' {
    export default ol.Feature;
}
declare module 'ol/featureloader' {
    export default ol.FeatureLoader;
}
declare module 'ol/geolocation' {
    export default ol.Geolocation;
}
declare module 'ol/graticule' {
    export default ol.Graticule;
}
declare module 'ol/image' {
    export default ol.Image;
}
declare module 'ol/imagebase' {
    export default ol.ImageBase;
}
declare module 'ol/imagestate' {
    export default ol.ImageState;
}
declare module 'ol/imagetile' {
    export default ol.ImageTile;
}
declare module 'ol/interaction' {
    export default ol.interaction;
}
declare module 'ol/kinetic' {
    export default ol.Kinetic;
}
declare module 'ol/loadingstrategy' {
    export default ol.loadingstrategy;
}
declare module 'ol/map' {
    export default ol.Map;
}
declare module 'ol/mapbrowserevent' {
    export default ol.MapBrowserEvent;
}
declare module 'ol/mapbrowserpointerevent' {
    export default ol.MapBrowserPointerEvent;
}
declare module 'ol/mapevent' {
    export default ol.MapEvent;
}
declare module 'ol/object' {
    export default ol.Object;
}
declare module 'ol/observable' {
    export default ol.Observable;
}
declare module 'ol/overlay' {
    export default ol.Overlay;
}
declare module 'ol/size' {
    export default ol.Size;
}
declare module 'ol/sphere' {
    export default ol.Sphere;
}
declare module 'ol/tile' {
    export default ol.Tile;
}
declare module 'ol/tilecoord' {
    export default ol.TileCoord;
}
declare module 'ol/tilegrid' {
    export default ol.tilegrid;
}
declare module 'ol/vectortile' {
    export default ol.VectorTile;
}
declare module 'ol/view' {
    export default ol.View;
}
