export const REVISION: string;

// Geographic tools
export { default as Extent } from "./Core/Geographic/Extent";
export { default as Coordinates } from "./Core/Geographic/Coordinates";
export { default as GeoidGrid } from "./Core/Geographic/GeoidGrid";
export { default as CRS } from "./Core/Geographic/Crs";

export { default as Ellipsoid, ellipsoidSizes } from "./Core/Math/Ellipsoid";
export { default as GlobeView, GLOBE_VIEW_EVENTS } from "./Core/Prefab/GlobeView";
export { default as PlanarView } from "./Core/Prefab/PlanarView"; // TODO
export { default as Fetcher } from "./Provider/Fetcher";
export { MAIN_LOOP_EVENTS } from "./Core/MainLoop";
export { default as View } from './Core/View';
export { VIEW_EVENTS } from './Core/View';
export { default as FeatureProcessing } from "./Process/FeatureProcessing";
export { updateLayeredMaterialNodeImagery, updateLayeredMaterialNodeElevation } from "./Process/LayeredMaterialNodeProcessing";
export { default as OrientedImageCamera } from "./Renderer/OrientedImageCamera";
export { default as PointsMaterial, PNTS_MODE, ClassificationScheme } from './Renderer/PointsMaterial';
export { default as GlobeControls } from "./Controls/GlobeControls";
export { default as FlyControls } from "./Controls/FlyControls";
export { default as FirstPersonControls } from "./Controls/FirstPersonControls";
export { default as StreetControls } from "./Controls/StreetControls";
export { default as PlanarControls } from "./Controls/PlanarControls";
export { CONTROL_EVENTS } from "./Controls/GlobeControls";
export { PLANAR_CONTROL_EVENT } from "./Controls/PlanarControls";
export { default as Feature2Mesh } from "./Converter/Feature2Mesh";
export { default as FeaturesUtils } from "./Utils/FeaturesUtils";
export { default as DEMUtils } from "./Utils/DEMUtils";
export { default as CameraUtils } from "./Utils/CameraUtils";
export { default as OrientationUtils } from "./Utils/OrientationUtils";
export { default as ShaderChunk } from "./Renderer/Shader/ShaderChunk";
export { getMaxColorSamplerUnitsCount, colorLayerEffects } from "./Renderer/LayeredMaterial";
export { default as Capabilities } from "./Core/System/Capabilities";
export { CAMERA_TYPE } from "./Renderer/Camera";

// Internal itowns format
export { default as Feature, FeatureCollection, FeatureGeometry, FEATURE_TYPES } from "./Core/Feature";
export { default as Style } from "./Core/Style"; // TODO
export { default as Label } from "./Core/Label"; // TODO

// Layers provided by default in iTowns
// A custom layer should at least implements Layer
// See http://www.itowns-project.org/itowns/docs/#api/Layer/Layer
export { default as Layer, ImageryLayers } from "./Layer/Layer"; // TODO
export { default as ColorLayer } from "./Layer/ColorLayer";
export { default as ElevationLayer } from "./Layer/ElevationLayer"; // TODO
export { default as GeometryLayer } from "./Layer/GeometryLayer";
export { default as FeatureGeometryLayer } from "./Layer/FeatureGeometryLayer";
export { default as PointCloudLayer } from "./Layer/PointCloudLayer";
export { default as PotreeLayer } from "./Layer/PotreeLayer";
export { default as C3DTilesLayer, C3DTILES_LAYER_EVENTS } from './Layer/C3DTilesLayer';
export { default as TiledGeometryLayer } from "./Layer/TiledGeometryLayer";
// export { default as OrientedImageLayer } from "./Layer/OrientedImageLayer";
export { STRATEGY_MIN_NETWORK_TRAFFIC, STRATEGY_GROUP, STRATEGY_PROGRESSIVE, STRATEGY_DICHOTOMY } from "./Layer/LayerUpdateStrategy";
export { default as ColorLayersOrdering } from "./Renderer/ColorLayersOrdering";
// export { default as GlobeLayer } from "./Core/Prefab/Globe/GlobeLayer";
// export { default as PlanarLayer } from "./Core/Prefab/Planar/PlanarLayer";
export { default as LabelLayer } from "./Layer/LabelLayer";
export { default as EntwinePointTileLayer } from "./Layer/EntwinePointTileLayer";
export { default as GeoidLayer } from "./Layer/GeoidLayer";

// Sources provided by default in iTowns
// A custom source should at least implements Source
// See http://www.itowns-project.org/itowns/docs/#api/Source/Source
export { default as Source } from "./Source/Source";
export { default as FileSource } from "./Source/FileSource";
export { default as TMSSource } from "./Source/TMSSource";
export { default as WFSSource } from "./Source/WFSSource";
export { default as WMSSource } from "./Source/WMSSource";
export { default as WMTSSource } from "./Source/WMTSSource";
export { default as VectorTilesSource } from "./Source/VectorTilesSource";
export { default as OrientedImageSource } from "./Source/OrientedImageSource";
export { default as PotreeSource } from "./Source/PotreeSource";
export { default as C3DTilesSource } from "./Source/C3DTilesSource";
export { default as C3DTilesIonSource } from "./Source/C3DTilesIonSource";
export { default as EntwinePointTileSource } from "./Source/EntwinePointTileSource";

// Parsers provided by default in iTowns
// Custom parser can be implemented as wanted, as long as the main function
// takes the data as the first argument and options as the second.
export { default as GpxParser } from "./Parser/GpxParser";
export { default as GeoJsonParser } from "./Parser/GeoJsonParser";
export { default as KMLParser } from "./Parser/KMLParser";
export { default as CameraCalibrationParser } from "./Parser/CameraCalibrationParser";
export { default as ShapefileParser } from "./Parser/ShapefileParser";
export { default as LASParser } from "./Parser/LASParser";
export { default as ISGParser } from "./Parser/ISGParser";
export { default as GDFParser } from "./Parser/GDFParser";
export { default as GTXParser } from "./Parser/GTXParser";
export { enableDracoLoader, glTFLoader /*, legacyGLTFLoader */ } from "./Parser/B3dmParser"; // TODO

// 3D Tiles classes and extensions
// Exported to allow one to implement its own 3D Tiles extension which needs to
// know the classes it extends
export { default as C3DTFeature } from './Core/3DTiles/C3DTFeature';
export { default as C3DTileset } from "./Core/3DTiles/C3DTileset";
export { default as C3DTBoundingVolume } from "./Core/3DTiles/C3DTBoundingVolume";
export { default as C3DTBatchTable } from "./Core/3DTiles/C3DTBatchTable";
export { default as C3DTExtensions } from "./Core/3DTiles/C3DTExtensions";
export { default as C3DTilesTypes } from "./Core/3DTiles/C3DTilesTypes";
export { default as C3DTBatchTableHierarchyExtension } from "./Core/3DTiles/C3DTBatchTableHierarchyExtension";
export { process3dTilesNode, $3dTilesCulling, $3dTilesSubdivisionControl } from "./Process/3dTilesProcessing";
