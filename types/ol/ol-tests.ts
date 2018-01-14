import ControlAttribution from 'ol/control/attribution';

import ControlControl from 'ol/control/control';

import ControlFullScreen from 'ol/control/fullscreen';

import ControlMousePosition from 'ol/control/mouseposition';

import ControlOverviewMap from 'ol/control/overviewmap';

import ControlRotate from 'ol/control/rotate';

import ControlScaleLine from 'ol/control/scaleline';

import ControlZoom from 'ol/control/zoom';

import ControlZoomSlider from 'ol/control/zoomslider';

import ControlZoomToExtent from 'ol/control/zoomtoextent';

import Eventscondition from 'ol/events/condition';

import EventsEvent from 'ol/events/event';

import EventsEventTarget from 'ol/events/eventtarget';

import FormatEsriJSON from 'ol/format/esrijson';

import FormatFeature from 'ol/format/feature';

import Formatfilter from 'ol/format/filter';

import FormatGeoJSON from 'ol/format/geojson';

import FormatGML2 from 'ol/format/gml2';

import FormatGML3 from 'ol/format/gml3';

import FormatGMLBase from 'ol/format/gmlbase';

import FormatGPX from 'ol/format/gpx';

import FormatIGC from 'ol/format/igc';

import FormatIGCZ from 'ol/format/igcz';

import FormatJSONFeature from 'ol/format/jsonfeature';

import FormatKML from 'ol/format/kml';

import FormatMVT from 'ol/format/mvt';

import FormatOSMXML from 'ol/format/osmxml';

import FormatPolyline from 'ol/format/polyline';

import FormatTextFeature from 'ol/format/textfeature';

import FormatTopoJSON from 'ol/format/topojson';

import FormatWFS from 'ol/format/wfs';

import FormatWKT from 'ol/format/wkt';

import FormatWMSCapabilities from 'ol/format/wmscapabilities';

import FormatWMSGetFeatureInfo from 'ol/format/wmsgetfeatureinfo';

import FormatWMTSCapabilities from 'ol/format/wmtscapabilities';

import FormatXML from 'ol/format/xml';

import FormatXMLFeature from 'ol/format/xmlfeature';

import GeomCircle from 'ol/geom/circle';

import GeomGeometry from 'ol/geom/geometry';

import GeomGeometryCollection from 'ol/geom/geometrycollection';

import GeomGeometryLayout from 'ol/geom/geometrylayout';

import GeomGeometryType from 'ol/geom/geometrytype';

import GeomLinearRing from 'ol/geom/linearring';

import GeomLineString from 'ol/geom/linestring';

import GeomMultiLineString from 'ol/geom/multilinestring';

import GeomMultiPoint from 'ol/geom/multipoint';

import GeomMultiPolygon from 'ol/geom/multipolygon';

import GeomPoint from 'ol/geom/point';

import GeomPolygon from 'ol/geom/polygon';

import GeomSimpleGeometry from 'ol/geom/simplegeometry';

import InteractionDoubleClickZoom from 'ol/interaction/doubleclickzoom';

import InteractionDragAndDrop from 'ol/interaction/draganddrop';

import InteractionDragBox from 'ol/interaction/dragbox';

import InteractionDragPan from 'ol/interaction/dragpan';

import InteractionDragRotate from 'ol/interaction/dragrotate';

import InteractionDragRotateAndZoom from 'ol/interaction/dragrotateandzoom';

import InteractionDragZoom from 'ol/interaction/dragzoom';

import InteractionDraw from 'ol/interaction/draw';

import InteractionInteraction from 'ol/interaction/interaction';

import InteractionKeyboardPan from 'ol/interaction/keyboardpan';

import InteractionKeyboardZoom from 'ol/interaction/keyboardzoom';

import InteractionModify from 'ol/interaction/modify';

import InteractionMouseWheelZoom from 'ol/interaction/mousewheelzoom';

import InteractionPinchRotate from 'ol/interaction/pinchrotate';

import InteractionPinchZoom from 'ol/interaction/pinchzoom';

import InteractionPointer from 'ol/interaction/pointer';

import InteractionSelect from 'ol/interaction/select';

import InteractionSnap from 'ol/interaction/snap';

import InteractionTranslate from 'ol/interaction/translate';

import InteractionTranslateEventType from 'ol/interaction/translateeventtype';

import LayerBase from 'ol/layer/base';

import LayerGroup from 'ol/layer/group';

import LayerHeatmap from 'ol/layer/heatmap';

import LayerImage from 'ol/layer/image';

import LayerLayer from 'ol/layer/layer';

import LayerTile from 'ol/layer/tile';

import LayerVector from 'ol/layer/vector';

import LayerVectorTile from 'ol/layer/vectortile';

import LayerVectorTileRenderType from 'ol/layer/vectortilerendertype';

import PointerPointerEvent from 'ol/pointer/pointerevent';

import ProjProjection from 'ol/proj/projection';

import ProjUnits from 'ol/proj/units';

import Rendercanvas from 'ol/render/canvas';

import RenderEvent from 'ol/render/event';

import RenderFeature from 'ol/render/feature';

import RenderVectorContext from 'ol/render/vectorcontext';

import SourceBingMaps from 'ol/source/bingmaps';

import SourceCartoDB from 'ol/source/cartodb';

import SourceCluster from 'ol/source/cluster';

import SourceImage from 'ol/source/image';

import SourceImageArcGISRest from 'ol/source/imagearcgisrest';

import SourceImageCanvas from 'ol/source/imagecanvas';

import SourceImageMapGuide from 'ol/source/imagemapguide';

import SourceImageStatic from 'ol/source/imagestatic';

import SourceImageVector from 'ol/source/imagevector';

import SourceImageWMS from 'ol/source/imagewms';

import SourceOSM from 'ol/source/osm';

import SourceRaster from 'ol/source/raster';

import SourceSource from 'ol/source/source';

import SourceStamen from 'ol/source/stamen';

import SourceState from 'ol/source/state';

import SourceTile from 'ol/source/tile';

import SourceTileArcGISRest from 'ol/source/tilearcgisrest';

import SourceTileDebug from 'ol/source/tiledebug';

import SourceTileImage from 'ol/source/tileimage';

import SourceTileJSON from 'ol/source/tilejson';

import SourceTileUTFGrid from 'ol/source/tileutfgrid';

import SourceTileWMS from 'ol/source/tilewms';

import SourceUrlTile from 'ol/source/urltile';

import SourceVector from 'ol/source/vector';

import SourceVectorTile from 'ol/source/vectortile';

import SourceWMTS from 'ol/source/wmts';

import SourceXYZ from 'ol/source/xyz';

import SourceZoomify from 'ol/source/zoomify';

import StyleAtlasManager from 'ol/style/atlasmanager';

import StyleCircle from 'ol/style/circle';

import StyleFill from 'ol/style/fill';

import StyleIcon from 'ol/style/icon';

import StyleImage from 'ol/style/image';

import StyleRegularShape from 'ol/style/regularshape';

import StyleStroke from 'ol/style/stroke';

import StyleStyle from 'ol/style/style';

import StyleText from 'ol/style/text';

import TilegridTileGrid from 'ol/tilegrid/tilegrid';

import TilegridWMTS from 'ol/tilegrid/wmts';

import WebglShader from 'ol/webgl/shader';

import WebglVertex from 'ol/webgl/vertex';

import AssertionError from 'ol/assertionerror';

import Attribution from 'ol/attribution';

import Collection from 'ol/collection';

import Color from 'ol/color';

import Colorlike from 'ol/colorlike';

import Control from 'ol/control';

import Coordinate from 'ol/coordinate';

import DeviceOrientation from 'ol/deviceorientation';

import Disposable from 'ol/disposable';

import Easing from 'ol/easing';

import Events from 'ol/events';

import Extent from 'ol/extent';

import Feature from 'ol/feature';

import FeatureLoader from 'ol/featureloader';

import Geolocation from 'ol/geolocation';

import Graticule from 'ol/graticule';

import Image from 'ol/image';

import ImageBase from 'ol/imagebase';

import ImageState from 'ol/imagestate';

import ImageTile from 'ol/imagetile';

import Interaction from 'ol/interaction';

import Kinetic from 'ol/kinetic';

import Loadingstrategy from 'ol/loadingstrategy';

import Map from 'ol/map';

import MapBrowserEvent from 'ol/mapbrowserevent';

import MapBrowserPointerEvent from 'ol/mapbrowserpointerevent';

import MapEvent from 'ol/mapevent';

import Object from 'ol/object';

import Observable from 'ol/observable';

import Overlay from 'ol/overlay';

import Size from 'ol/size';

import Sphere from 'ol/sphere';

import Tile from 'ol/tile';

import TileCoord from 'ol/tilecoord';

import Tilegrid from 'ol/tilegrid';

import VectorTile from 'ol/vectortile';

import View from 'ol/view';

// Map
const map: ol.Map = new Map(<any> {});
const mapView: View = <any> {};
const layerBase: LayerBase = <any> {};
const control: ControlControl = <any> {};
const interaction: InteractionInteraction = <any> {};
map.setView(mapView);
map.addLayer(layerBase);
map.addControl(control);
map.addInteraction(interaction);

// View
let view: View;
const coordinate: Coordinate = <any> {};
const size: Size = <any> {};
const position: ol.Pixel = <any> {};
view = map.getView();
view.getProjection();
view.animate(<any> {});
view.calculateExtent(<any> 'size');
view.centerOn(coordinate, size, position);
