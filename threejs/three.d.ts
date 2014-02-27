// Type definitions for three.js -- r66
// Project: http://mrdoob.github.com/three.js/
// Definitions by: Kon <http://phyzkit.net/>, Satoru Kimura <https://github.com/gyohk>
// Definitions: https://github.com/borisyankov/DefinitelyTyped  

interface WebGLRenderingContext {}

declare module THREE {
    export var REVISION:string;

    // custom blending equations
    export enum BlendingEquation { }
    export var AddEquation: BlendingEquation;
    export var SubtractEquation: BlendingEquation;
    export var ReverseSubtractEquation: BlendingEquation;
    
    // custom blending destination factors
    export enum BlendingDstFactor { }
    export var ZeroFactor: BlendingDstFactor;
    export var OneFactor: BlendingDstFactor;
    export var SrcColorFactor: BlendingDstFactor;
    export var OneMinusSrcColorFactor: BlendingDstFactor;
    export var SrcAlphaFactor: BlendingDstFactor;
    export var OneMinusSrcAlphaFactor: BlendingDstFactor;
    export var DstAlphaFactor: BlendingDstFactor;
    export var OneMinusDstAlphaFactor: BlendingDstFactor;

    // custom blending source factors
    export enum BlendingSrcFactor { }
    export var DstColorFactor: BlendingSrcFactor;
    export var OneMinusDstColorFactor: BlendingSrcFactor;
    export var SrcAlphaSaturateFactor: BlendingSrcFactor;

    // GL STATE CONSTANTS
    export enum CullFace { }
    export var CullFaceNone: CullFace;
    export var CullFaceBack: CullFace;
    export var CullFaceFront: CullFace;
    export var CullFaceFrontBack: CullFace;

    export enum FrontFaceDirection { }
    export var FrontFaceDirectionCW: FrontFaceDirection;
    export var FrontFaceDirectionCCW: FrontFaceDirection;

    // MATERIAL CONSTANTS
    // side
    export enum Side { }
    export var FrontSide: Side;
    export var BackSide: Side;
    export var DoubleSide: Side;

    // shading
    export enum Shading { }
    export var NoShading: Shading;
    export var FlatShading: Shading;
    export var SmoothShading: Shading;

    // colors
    export enum Colors { }
    export var NoColors: Colors;
    export var FaceColors: Colors;
    export var VertexColors: Colors;

    // blending modes
    export enum Blending { }
    export var NoBlending: Blending;
    export var NormalBlending: Blending;
    export var AdditiveBlending: Blending;
    export var SubtractiveBlending: Blending;
    export var MultiplyBlending: Blending;
    export var CustomBlending: Blending;

    // Shadowing Type
    export enum ShadowMapType { }
    export var BasicShadowMap: ShadowMapType;
    export var PCFShadowMap: ShadowMapType;
    export var PCFSoftShadowMap: ShadowMapType;

    // TEXTURE CONSTANTS
    // Operations
    export enum Combine { }
    export var MultiplyOperation: Combine;
    export var MixOperation: Combine;
    export var AddOperation: Combine;

    // Mapping modes
    export enum Mapping { }
    export interface MappingConstructor {
        new (): Mapping;
    }
    export var UVMapping: MappingConstructor;
    export var CubeReflectionMapping: MappingConstructor;
    export var CubeRefractionMapping: MappingConstructor;
    export var SphericalReflectionMapping: MappingConstructor;
    export var SphericalRefractionMapping: MappingConstructor;

    // Wrapping modes
    export enum Wrapping { }
    export var RepeatWrapping: Wrapping;
    export var ClampToEdgeWrapping: Wrapping;
    export var MirroredRepeatWrapping: Wrapping;

    // Filters
    export enum TextureFilter { }
    export var NearestFilter: TextureFilter;
    export var NearestMipMapNearestFilter: TextureFilter;
    export var NearestMipMapLinearFilter: TextureFilter;
    export var LinearFilter: TextureFilter;
    export var LinearMipMapNearestFilter: TextureFilter;
    export var LinearMipMapLinearFilter: TextureFilter;

    // Data types
    export enum TextureDataType { }
    export var UnsignedByteType: TextureDataType;
    export var ByteType: TextureDataType;
    export var ShortType: TextureDataType;
    export var UnsignedShortType: TextureDataType;
    export var IntType: TextureDataType;
    export var UnsignedIntType: TextureDataType;
    export var FloatType: TextureDataType;

    // Pixel types
    export enum PixelType { }
    export var UnsignedShort4444Type: PixelType;
    export var UnsignedShort5551Type: PixelType;
    export var UnsignedShort565Type: PixelType;

    // Pixel formats
    export enum PixelFormat { }
    export var AlphaFormat: PixelFormat;
    export var RGBFormat: PixelFormat;
    export var RGBAFormat: PixelFormat;
    export var LuminanceFormat: PixelFormat;
    export var LuminanceAlphaFormat: PixelFormat;

    // Compressed texture formats
    export enum CompressedPixelFormat { }
    export var RGB_S3TC_DXT1_Format: CompressedPixelFormat;
    export var RGBA_S3TC_DXT1_Format: CompressedPixelFormat;
    export var RGBA_S3TC_DXT3_Format: CompressedPixelFormat;
    export var RGBA_S3TC_DXT5_Format: CompressedPixelFormat;

    // Cameras ////////////////////////////////////////////////////////////////////////////////////////

    export class Camera extends Object3D {
        constructor();

        matrixWorldInverse: Matrix4;
        projectionMatrix: Matrix4;

        lookAt(vector: Vector3): void;
    }
    
    export class OrthographicCamera extends Camera {
        constructor(left: number, right: number, top: number, bottom: number, near?: number, far?: number);

        left: number;
        right: number;
        top: number;
        bottom: number;
        near: number;
        far: number;

        updateProjectionMatrix(): void;
    }

    export class PerspectiveCamera extends Camera {
        constructor(fov?: number, aspect?: number, near?: number, far?: number);

        fov: number;
        aspect: number;
        near: number;
        far: number;

        setLens(focalLength: number, frameHeight?: number): void;
        setViewOffset(fullWidth: number, fullHeight: number, x: number, y: number, width: number, height: number): void;
        updateProjectionMatrix(): void;
    }

    // Core ///////////////////////////////////////////////////////////////////////////////////////////////

    interface BufferGeometryAttributeArray extends ArrayBufferView{
        length: number;
    }    

    interface BufferGeometryAttribute{
        itemSize: number;
        array: BufferGeometryAttributeArray;
        numItems: number;
    }

    interface BufferGeometryAttributes{ 
        [name: string]: BufferGeometryAttribute; 
        index?: BufferGeometryAttribute;
        position?: BufferGeometryAttribute;
        normal?: BufferGeometryAttribute;
        color?: BufferGeometryAttribute;
    }

    export class BufferGeometry {
        constructor();

        id: number;
        attributes: BufferGeometryAttributes;
        dynamic: boolean;
        offsets: { start: number; count: number; index: number; }[];
        boundingBox: BoundingBox3D;
        boundingSphere: BoundingSphere;
        morphTargets: any[];
        hasTangents: boolean;

        applyMatrix(matrix: Matrix4): void;
        computeVertexNormals(): void;
        computeTangents(): void;
        computeBoundingBox(): void;
        computeBoundingSphere(): void;
        dispose(): void;
        normalizeNormals(): void;
    }

    export class Clock {
        constructor(autoStart?: boolean);

        autoStart: boolean;
        startTime: number;
        oldTime: number;
        elapsedTime: number;
        running: boolean;

        start(): void;
        stop(): void;
        getElapsedTime(): number;
        getDelta(): number;
    }

    export class EventDispatcher {
        constructor();

        addEventListener(type: string, listener: (event: any) => void ): void;
        hasEventListener(type: string, listener: (event: any) => void): void;
        removeEventListener(type: string, listener: (event: any) => void): void;
        dispatchEvent(event: { type: string; target: any; }): void;
    }
    
    export interface Face {
        normal: Vector3;
        color: Color;
        vertexNormals: Vector3[];
        vertexColors: Color[];
        vertexTangents: number[];
        materialIndex: number;
        centroid: Vector3;

        clone(): Face;
    }

    export class Face3 implements Face {
        constructor(a: number, b: number, c: number, normal?: Vector3, color?: Color, materialIndex?: number);
        constructor(a: number, b: number, c: number, normal?: Vector3, vertexColors?: Color[], materialIndex?: number);
        constructor(a: number, b: number, c: number, vertexNormals?: Vector3[], color?: Color, materialIndex?: number);
        constructor(a: number, b: number, c: number, vertexNormals?: Vector3[], vertexColors?: Color[], materialIndex?: number);

        a: number;
        b: number;
        c: number;

        normal: Vector3;
        color: Color;
        vertexNormals: Vector3[];
        vertexColors: Color[];
        vertexTangents: number[];
        materialIndex: number;
        centroid: Vector3;

        clone(): Face3;
    }

    export interface MorphTarget {
        name: string;
        vertices: Vector3[];
    }

    export interface MorphColor {
        name: string;
        color: Color[];
    }

    export interface MorphNormals {
        name: string;
        normals: Vector3[];
    }

    export interface BoundingBox3D {
        min: Vector3;
        max: Vector3;
    }

    export interface BoundingSphere {
        radius: number;
    }

    export class Geometry {
        constructor();

        id: number;
        name: string;
        vertices: Vector3[];
        colors: Color[];
        faces: Face[];
        faceVertexUvs: Vector2[][][];
        morphTargets: MorphTarget[];
        morphColors: MorphColor[];
        morphNormals: MorphNormals[];
        skinWeights: number[];
        skinIndices: number[];
        boundingBox: BoundingBox3D;
        boundingSphere: BoundingSphere;
        hasTangents: boolean;
        dynamic: boolean;
        verticesNeedUpdate: boolean;
        elementsNeedUpdate: boolean;
        uvsNeedUpdate: boolean;
        normalsNeedUpdate: boolean;
        tangentsNeedUpdate: boolean;
        colorsNeedUpdate: boolean;
        lineDistancesNeedUpdate: boolean;
        buffersNeedUpdate: boolean;
        lineDistances: number[];

        applyMatrix(matrix: Matrix4): void;
        computeCentroids(): void;
        computeFaceNormals(): void;
        computeVertexNormals(areaWeighted?: boolean): void;
        computeMorphNormals(): void;
        computeTangents(): void;
        computeBoundingBox(): void;
        computeBoundingSphere(): void;
        mergeVertices(): number;
        clone(): Geometry;
        dispose(): void;
        computeLineDistances(): void;
    }

    export class Object3D {
        constructor();

        id: number;
        name: string;
        parent: Object3D;
        children: Object3D[];
        position: Vector3;
        rotation: Euler;
        eulerOrder: string;
        scale: Vector3;
        up: Vector3;
        matrix: Matrix4;
        quaternion: Quaternion;
        useQuaternion: boolean;
        renderDepth: number;
        visible: boolean;
        castShadow: boolean;
        receiveShadow: boolean;
        frustumCulled: boolean;
        matrixAutoUpdate: boolean;
        matrixWorldNeedsUpdate: boolean;
        rotationAutoUpdate: boolean;
        userData: any;
        matrixWorld: Matrix4;

        applyMatrix(matrix: Matrix4): void;
        translateX(distance: number): void;
        translateY(distance: number): void;
        translateZ(distance: number): void;
        localToWorld(vector: Vector3): Vector3;
        worldToLocal(vector: Vector3): Vector3;
        lookAt(vector: Vector3): void;
        add(object: Object3D): void;
        remove(object: Object3D): void;
        traverse(callback: (object: Object3D) => any): void;
        getDescendants(array?: Object3D[]): Object3D[];
        updateMatrix(): void;
        updateMatrixWorld(force: boolean): void;
        clone(object?: Object3D, recursive?: boolean): Object3D;
        getObjectByName(name: string, recursive: boolean): Object3D;
        getObjectById(id: string, recursive: boolean): Object3D;
        translateOnAxis(axis: Vector3, distance: number): Object3D;
        rotateOnAxis(axis: Vector3, angle: number): Object3D;
    }

    export class Projector {
        constructor();

        projectVector(vector: Vector3, camera: Camera): Vector3;
        unprojectVector(vector: Vector3, camera: Camera): Vector3;
        pickingRay(vector: Vector3, camera: Camera): Raycaster;
        projectScene(scene: Scene, camera: Camera, sortObjects: boolean, sortElements?: boolean): {
            objects: Object3D[];     // Mesh, Line or other object  
            sprites: Object3D[];    // Sprite or Particle 
            lights: Light[];
            elements: Face[];    // Line, Particle, Face3 or Face4 
        };
    }

    export interface Intersection {
        distance: number;
        point: Vector3;
        face: Face;
        object: Object3D;
    }

    export class Raycaster {
        constructor(origin?: Vector3, direction?: Vector3, near?: number, far?: number);

        ray: Ray;
        near: number;
        far: number;
        precision: number;

        set(origin: Vector3, direction: Vector3): void;
        intersectObject(object: Object3D, recursive?: boolean): Intersection[];
        intersectObjects(objects: Object3D[], recursive?: boolean): Intersection[];
    }

    // Lights //////////////////////////////////////////////////////////////////////////////////

    export class Light extends Object3D {
        constructor(hex?: number);

        color: Color;
    }

    export class AmbientLight extends Light {
        constructor(hex?: number);
    }

    export class AreaLight extends Light{
        constructor(hex: number, intensity?: number);

        position: Vector3;
        right: Vector3;
        normal: Vector3;
        quadraticAttenuation: number;
        height: number;
        linearAttenuation: number;
        width: number;
        intensity: number;
        constantAttenuation: number;
    }

    export class DirectionalLight extends Light {
        constructor(hex?: number, intensity?: number);
        
        position: Vector3;
        target: Object3D;
        intensity: number;
        castShadow: boolean;
        onlyShadow: boolean;
        shadowCameraNear: number;
        shadowCameraFar: number;
        shadowCameraLeft: number;
        shadowCameraRight: number;
        shadowCameraTop: number;
        shadowCameraBottom: number;
        shadowCameraVisible: boolean;
        shadowBias: number;
        shadowDarkness: number;
        shadowMapWidth: number;
        shadowMapHeight: number;
        shadowCascade: boolean;
        shadowCascadeOffset: Vector3;
        shadowCascadeCount: number;
        shadowCascadeBias: number[];
        shadowCascadeWidth: number[];
        shadowCascadeHeight: number[];
        shadowCascadeNearZ: number[];
        shadowCascadeFarZ: number[];
        shadowCascadeArray: DirectionalLight[];
        shadowMap: RenderTarget;
        shadowMapSize: number;
        shadowCamera: Camera;
        shadowMatrix: Matrix4;
    }

    export class HemisphereLight extends Light {
        constructor(skyColorHex?: number, groundColorHex?: number, intensity?: number);

        position: Vector3;
        groundColor: Color;
        intensity: number;
    }

    export class PointLight extends Light {
        constructor(hex?: number, intensity?: number, distance?: number);

        position: Vector3;
        intensity: number;
        distance: number;
    }

    export class SpotLight extends Light {
        constructor(hex?: number, intensity?: number, distance?: number, angle?: number, exponent?: number);

        position: Vector3;
        target: Object3D;
        intensity: number;
        distance: number;
        angle: number;
        exponent: number;
        castShadow: boolean;
        onlyShadow: boolean;
        shadowCameraNear: number;
        shadowCameraFar: number;
        shadowCameraFov: number;
        shadowCameraVisible: boolean;
        shadowBias: number;
        shadowDarkness: number;
        shadowMapWidth: number;
        shadowMapHeight: number;
        shadowMatrix: Matrix4;
        shadowMapSize: Vector2;
        shadowCamera: Camera;
        shadowMap: RenderTarget;
    }

    // Loaders //////////////////////////////////////////////////////////////////////////////////

    export interface Progress {
        total: number;
        loaded: number;
    }

    export class Loader {
        constructor(showStatus?: boolean);

        showStatus: boolean;
        statusDomElement: HTMLElement;
        onLoadStart: () => void;
        onLoadProgress: () => void;
        onLoadComplete: () => void;
        crossOrigin: string;

        needsTangents(materials: Material[]): boolean;
        updateProgress(progress: Progress): void;
        createMaterial(m: Material, texturePath: string): boolean;
        initMaterials(materials: Material[], texturePath: string): Material[];
        extractUrlBase(url: string): string;
        addStatusElement(): HTMLElement;
    }

    export class ImageLoader extends EventDispatcher {
        constructor();

        crossOrigin: string;

        load(url: string, onLoad?: (event: any) => void, onProgress?: (event: any) => void, onError?: (event: any) => void): HTMLImageElement;
        setCrossOrigin(crossOrigin: string): void;
    }

    export class JSONLoader extends Loader {
        constructor(showStatus?: boolean);

        withCredentials: boolean;

        load(url: string, callback: (geometry: Geometry, materials: Material[]) => void , texturePath?: string): void;
        parse(json:string, texturePath:string): any;
        loadAjaxJSON(context: JSONLoader, url: string, callback: (geometry: Geometry, materials: Material[]) => void , texturePath?: string, callbackProgress?: (progress: Progress) => void ): void;

    }

    export class LoadingManager {
        constructor(onLoad?: (event: any) => void, onProgress?: (event: any) => void, onError?: (event: any) => void);

        onLoad: () => void;
        onProgress: (item:any, loaded:number, total:number) => void;
        onError: (event: () => void) => void;

        itemStart(url: string): void;
        itemEnd(url: string): void;
    }

    interface SceneLoaderResult{
        scene: Scene;
        geometries: {[id:string]:Geometry;};
        face_materials: {[id:string]:Material;};
        materials: {[id:string]:Material;};
        textures: {[id:string]:Texture;};
        objects: {[id:string]:Object3D;};
        cameras: {[id:string]:Camera;};
        lights: {[id:string]:Light;};
        fogs: {[id:string]:IFog;};
        empties: {[id:string]:any;};
        groups: {[id:string]:any;};
    }

    interface SceneLoaderProgress{
        totalModels: number;
        totalTextures: number;
        loadedModels: number;
        loadedTextures: number;
    }

    export class SceneLoader {
        constructor();

        onLoadStart: () => void;
        onLoadProgress: () => void;
        onLoadComplete: () => void;
        callbackSync: (result: SceneLoaderResult) => void;
        callbackProgress: (progress: SceneLoaderProgress, result: SceneLoaderResult) => void;
        hierarchyHandlerMap: any;
        geometryHandlerMap: any;

        load(url: string, callbackFinished: (scene: Scene) => void ): void;
        addHierarchyHandler(typeID: string, loaderClass: Object): void;
        parse(json: any, callbackFinished: (result: SceneLoaderResult) => void, url: string): void;
        addGeometryHandler(typeID: string, loaderClass: Object): void;
    }

    export class TextureLoader extends EventDispatcher {
        constructor();

        crossOrigin: string;

        load(url: string): void;
    }

    // Materials //////////////////////////////////////////////////////////////////////////////////

    export class Material {
        constructor();

        id: number;
        name: string;
        opacity: number;
        transparent: boolean;
        blending: Blending;
        blendSrc: BlendingDstFactor;
        blendDst: BlendingSrcFactor;
        blendEquation: BlendingEquation;
        depthTest: boolean;
        depthWrite: boolean;
        polygonOffset: boolean;
        polygonOffsetFactor: number;
        polygonOffsetUnits: number;
        alphaTest: number;
        overdraw: boolean;
        visible: boolean;
        side: Side;
        needsUpdate: boolean;

        clone(): Material;

        dispose(): void;
        setValues(Object): void;
    }

    export interface LineBasicMaterialParameters {
        color?: number;
        linewidth?: number;
        linecap?: string;
        linejoin?: string;
        vertexColors?: Colors;
        fog?: boolean;
    }

    export class LineBasicMaterial extends Material {

        constructor(parameters?: LineBasicMaterialParameters);
        color: Color;
        linewidth: number;
        linecap: string;
        linejoin: string;
        vertexColors: Colors;
        fog: boolean;

        clone(): LineBasicMaterial;
    }

    export interface LineDashedMaterialParameters {
        scale?: number;
        color?: number;
        vertexColors?: boolean;
        dashSize?: number;
        fog?: boolean;
        gapSize?: number;
        linewidth?: number;
    }

    export class LineDashedMaterial extends Material {
        constructor(parameters?: LineDashedMaterialParameters);
        scale: number;
        color: Color;
        vertexColors: boolean;
        dashSize: number;
        fog: boolean;
        gapSize: number;
        linewidth: number;

        clone(): LineDashedMaterial;
    }


    export interface MeshBasicMaterialParameters {
        color?: number;
        wireframe?: boolean;
        wireframeLinewidth?: number;
        wireframeLinecap?: string;
        wireframeLinejoin?: string;
        shading?: Shading;
        vertexColors?: Colors;
        fog?: boolean;
        lightMap?: Texture;
        specularMap?: Texture;
        envMap?: Texture;
        skinning?: boolean;
        morphTargets?: boolean;
        map?: Texture;
        combine?: Combine;
        reflectivity?: number;
        refractionRatio?: number;
    }

    export class MeshBasicMaterial extends Material {
        constructor(parameters?: MeshBasicMaterialParameters);

        color: Color;
        wireframe: boolean;
        wireframeLinewidth: number;
        wireframeLinecap: string;
        wireframeLinejoin: string;
        shading: Shading;
        vertexColors: Colors;
        fog: boolean;
        lightMap: Texture;
        specularMap: Texture;
        envMap: Texture;
        skinning: boolean;
        morphTargets: boolean;
        map: Texture;
        combine: Combine;
        reflectivity: number;
        refractionRatio: number;

        clone(): MeshBasicMaterial;
    }

    export interface MeshDepthMaterialParameters {
        wireframe?: boolean;
        wireframeLinewidth?: number;
    }

    export class MeshDepthMaterial extends Material {
        constructor(parameters?: MeshDepthMaterialParameters);
        wireframe: boolean;
        wireframeLinewidth: number;

        clone(): MeshDepthMaterial;
    }

    export class MeshFaceMaterial extends Material {
        constructor(materials?: Material[]);
        materials: Material[];

        clone(): MeshFaceMaterial;
    }

    export interface MeshLambertMaterialParameters {
        color?: number;
        ambient?: number;
        emissive?: number;
        shading?: Shading;
        wireframe?: boolean;
        wireframeLinewidth?: number;
        wireframeLinecap?: string;
        wireframeLinejoin?: string;
        vertexColors?: Colors;
        fog?: boolean;
        map?: Texture;
        lightMap?: Texture;
        specularMap?: Texture;
        envMap?: Texture;
        reflectivity?: number;
        refractionRatio?: number;
        combine?: Combine;
        skinning?: boolean;
        morphTargets?: boolean;
        wrapRGB?: Vector3;
        morphNormals?: boolean;
        wrapAround?: boolean;
    }

    export class MeshLambertMaterial extends Material {
        constructor(parameters?: MeshLambertMaterialParameters);
        color: Color;
        ambient: Color;
        emissive: Color;
        shading: Shading;
        wireframe: boolean;
        wireframeLinewidth: number;
        wireframeLinecap: string;
        wireframeLinejoin: string;
        vertexColors: Colors;
        fog: boolean;
        map: Texture;
        lightMap: Texture;
        specularMap: Texture;
        envMap: Texture;
        reflectivity: number;
        refractionRatio: number;
        combine: Combine;
        skinning: boolean;
        morphTargets: boolean;
        wrapRGB: Vector3;
        morphNormals: boolean;
        wrapAround: boolean;

        clone(): MeshLambertMaterial;
    }

    export interface MeshNormalMaterialParameters {
        morphTargets?: boolean;
        shading?: Shading;
        wireframe?: boolean;
        wireframeLinewidth?: number;
    }

    export class MeshNormalMaterial extends Material {
        constructor(parameters?: MeshNormalMaterialParameters);
        morphTargets: boolean;
        shading: Shading;
        wireframe: boolean;
        wireframeLinewidth: number;

        clone(): MeshNormalMaterial;
    }

    export interface MeshPhongMaterialParameters {
        color?: number; // diffuse
        ambient?: number;
        emissive?: number;
        specular?: number;
        shininess?: number;
        shading?: Shading;
        wireframe?: boolean;
        wireframeLinewidth?: number;
        wireframeLinecap?: string;
        wireframeLinejoin?: string;
        vertexColors?: Colors;
        fog?: boolean;
        map?: Texture;
        lightMap?: Texture;
        specularMap?: Texture;
        envMap?: Texture;
        reflectivity?: number;
        refractionRatio?: number;
        combine?: Combine;
        skinning?: boolean;
        morphTargets?: boolean;
        normalScale?: Vector2;
        morphNormals?: boolean;
        metal?: boolean;
        bumpScale?: number;
        wrapAround?: boolean;
        perPixel?: boolean;
        normalMap?: Texture;
        bumpMap?: Texture;
        wrapRGB?: Vector3;
    }

    export class MeshPhongMaterial extends Material {
        constructor(parameters?: MeshPhongMaterialParameters);
        color: Color; // diffuse
        ambient: Color;
        emissive: Color;
        specular: Color;
        shininess: number;
        shading: Shading;
        wireframe: boolean;
        wireframeLinewidth: number;
        wireframeLinecap: string;
        wireframeLinejoin: string;
        vertexColors: Colors;
        fog: boolean;
        map: Texture;
        lightMap: Texture;
        specularMap: Texture;
        envMap: Texture;
        reflectivity: number;
        refractionRatio: number;
        combine: Combine;
        skinning: boolean;
        morphTargets: boolean;
        normalScale: Vector2;
        morphNormals: boolean;
        metal: boolean;
        bumpScale: number;
        wrapAround: boolean;
        normalMap: Texture;
        bumpMap: Texture;
        wrapRGB: Vector3;
        
        clone(): MeshPhongMaterial;
    }

    export interface ParticleSystemMaterialParameters {
        color?: number;
        map?: Texture;
        size?: number;
        sizeAttenuation?: boolean;
        vertexColors?: boolean;
        fog?: boolean;
    }

    export class ParticleSystemMaterial extends Material {
        constructor(parameters?: ParticleSystemMaterialParameters);
        color: Color;
        map: Texture;
        size: number;
        sizeAttenuation: boolean;
        vertexColors: boolean;
        fog: boolean;

        clone(): ParticleSystemMaterial;
    }

    export interface Uniforms {
        [name: string]: { type: string; value: any; };
        color?: { type: string; value: THREE.Color; };
    }

    export interface ShaderMaterialParameters {
        uniforms?: Uniforms;
        fragmentShader?: string;
        vertexShader?: string;
        morphTargets?: boolean;
        lights?: boolean;
        morphNormals?: boolean;
        wireframe?: boolean;
        vertexColors?: Colors;
        skinning?: boolean;
        fog?: boolean;
        attributes?: any;
        shading?: Shading;
        linewidth?: number;
        wireframeLinewidth?: number;
        defines?: any;
    }

    export class ShaderMaterial extends Material {
        constructor(parameters?: ShaderMaterialParameters);

        uniforms: Uniforms;
        fragmentShader: string;
        vertexShader: string;
        morphTargets: boolean;
        lights: boolean;
        morphNormals: boolean;
        wireframe: boolean;
        vertexColors: Colors;
        skinning: boolean;
        fog: boolean;
        attributes: any;
        shading: Shading;
        linewidth: number;
        wireframeLinewidth: number;
        defines: any;
        
        clone(): ShaderMaterial;
    }

    export interface SpriteMaterialParameters {
        map?: Texture;
        uvScale?: Vector2;
        sizeAttenuation?: boolean;
        color?: number;
        uvOffset?: Vector2;
        fog?: boolean;
        useScreenCoordinates?: boolean;
        scaleByViewport?: boolean;
        alignment?: Vector2;
    }

    export class SpriteMaterial extends Material {
        constructor(parameters?: SpriteMaterialParameters);

        map: Texture;
        uvScale: Vector2;
        sizeAttenuation: boolean;
        color: Color;
        uvOffset: Vector2;
        fog: boolean;
        useScreenCoordinates: boolean;
        scaleByViewport: boolean;
        alignment: Vector2;

        clone(): SpriteMaterial;
    }

    export interface SpriteCanvasMaterialParameters {
        color?: number;

    }

    export class SpriteCanvasMaterial extends Material {
        constructor(parameters?: SpriteCanvasMaterialParameters);

        color: Color;

        program(context: any, color: Color): void;
        clone(): SpriteCanvasMaterial;
    }

    // Math //////////////////////////////////////////////////////////////////////////////////

    export class Box2 {
        constructor(min?: Vector2, max?: Vector2);
        max: Vector2;
        min: Vector2;

        set(min: Vector2, max: Vector2): Box2;
        expandByPoint(point: Vector2): Box2;
        clampPoint(point: Vector2, optionalTarget?: Vector2): Vector2;
        isIntersectionBox(box: Box2): boolean;
        setFromPoints(points: Vector2[]): Box2;
        size(optionalTarget?: Vector2): Vector2;
        union(box: Box2): Box2;
        getParameter(point: Vector2): Vector2;
        expandByScalar(scalar: number): Box2;
        intersect(box: Box2): Box2;
        containsBox(box: Box2): boolean;
        translate(offset: Vector2): Box2;
        empty(): boolean;
        clone(): Box2;
        equals(box: Box2): boolean;
        expandByVector(vector: Vector2): Box2;
        copy(box: Box2): Box2;
        makeEmpty(): Box2;
        center(optionalTarget?: Vector2): Vector2;
        distanceToPoint(point: Vector2): number;
        containsPoint(point: Vector2): boolean;
        setFromCenterAndSize(center: Vector2, size: number): Box2;
    }

    export class Box3 {
        constructor(min?: Vector3, max?: Vector3);

        max: Vector3;
        min: Vector3;
        
        set(min: Vector3, max: Vector3): Box3;
        applyMatrix4(matrix: Matrix4): Box3;
        expandByPoint(point: Vector3): Box3;
        clampPoint(point: Vector3, optionalTarget?: Vector3): Vector3;
        isIntersectionBox(box: Box3): boolean;
        setFromPoints(points: Vector3[]): Box3;
        size(optionalTarget?: Vector3): Vector3;
        union(box: Box3): Box3;
        getParameter(point: Vector3): Vector3;
        expandByScalar(scalar: number): Box3;
        intersect(box: Box3): Box3;
        containsBox(box: Box3): boolean;
        translate(offset: Vector3): Box3;
        empty(): boolean;
        clone(): Box3;
        equals(box: Box3): boolean;
        expandByVector(vector: Vector3): Box3;
        copy(box: Box3): Box3;
        makeEmpty(): Box3;
        center(optionalTarget?: Vector3): Vector3;
        getBoundingSphere(): Sphere;
        distanceToPoint(point: Vector3): number;
        containsPoint(point: Vector3): boolean;
        setFromCenterAndSize(center: Vector3, size: number): Box3;
    }

    export interface HSL {
        h: number;
        s: number;
        l: number;
    }

    export class Color {
        constructor(hex?: string);
        constructor(hex?: number);

        r: number;
        g: number;
        b: number;

        copy(color: Color): Color;
        copyGammaToLinear(color: Color): Color;
        copyLinearToGamma(color: Color): Color;
        convertGammaToLinear(): Color;
        convertLinearToGamma(): Color;
        setRGB(r: number, g: number, b: number): Color;
        getHex(): number;
        getHexString(): string;
        setHex(hex: number): Color;
        setStyle(style: string): Color;
        getStyle(): string;
        setHSL(h: number, s: number, l: number): Color;
        getHSL(): HSL;
        offsetHSL(h: number, s: number, l: number): Color;
        add(color: Color): Color;
        addColors(color1: Color, color2: Color): Color;
        addScalar(s: number): Color;
        multiply(color: Color): Color;
        multiplyScalar(s: number): Color;
        lerp(color: Color, alpha: number): Color;
        equals(color: Color): boolean;
        clone(): Color;

        set(value: number): void;
        set(value: string): void;
    }

    export class Euler {
        constructor(x?: number, y?: number, z?: number, order?: string);

        x: number;
        y: number;
        z: number;
        order: string;

        set(x: number, y: number, z: number, order?: string): Euler;
        copy(euler: Euler): Euler;
        setFromRotationMatrix(m: Matrix4, order: string): Euler;
        setFromQuaternion(q:Quaternion, order: string): Euler;
        reorder(newOrder: string): Euler;
        fromArray(xyzo: any[]): Euler;
        toArray(): any[];
        equals(euler: Euler): boolean;
        clone(): Euler;
    }

    export class Frustum {
        constructor(p0?: Plane, p1?: Plane, p2?: Plane, p3?: Plane, p4?: Plane, p5?: Plane);

        planes: Plane[];

        setFromMatrix(m: Matrix4): Frustum;
        intersectsObject(object: Object3D): boolean;
        clone(): Frustum;
        set(p0?: number, p1?: number, p2?: number, p3?: number, p4?: number, p5?: number): Frustum;
        copy(frustum: Frustum): Frustum;
        containsPoint(point: Vector3): boolean;
        intersectsSphere(sphere: Sphere): boolean;
    }

    export class Line3 {
        constructor(start?: Vector3, end?: Vector3);
        start: Vector3;
        end: Vector3;

        set(start?: Vector3, end?: Vector3): Line3;
        copy(line: Line3): Line3;
        clone(): Line3;
        equals(line: Line3): boolean;
        distance(): number;
        distanceSq(): number;
        applyMatrix4(matrix: Matrix4): Line3;
        at(t: number, optionalTarget?: Vector3): Vector3;
        center(optionalTarget?: Vector3): Vector3;
        delta(optionalTarget?: Vector3): Vector3;
        closestPointToPoint(point: Vector3, clampToLine?: boolean, optionalTarget?: Vector3): Vector3;
        closestPointToPointParameter(point: Vector3, clampToLine?: boolean): number;
    }

    interface Math {
        clamp(x: number, a: number, b: number): number;
        clampBottom(x: number, a: number): number;
        mapLinear(x: number, a1: number, a2: number, b1: number, b2: number): number;
        random16(): number;
        randInt(low: number, high: number): number;
        randFloat(low: number, high: number): number;
        randFloatSpread(range: number): number;
        sign(x: number): number;
        degToRad(degrees: number): number;
        radToDeg(radians: number): number;
        smoothstep(x: number, min: number, max: number): number;
        smootherstep(x: number, min: number, max: number): number;
    }

    export var Math: Math;

    export interface Matrix {
        elements: Float32Array;

        identity(): Matrix;
        copy(m: Matrix): Matrix;
        multiplyVector3Array(a: number[]): number[];
        multiplyScalar(s: number): Matrix;
        determinant(): number;
        getInverse(matrix: Matrix, throwOnInvertible?: boolean): Matrix;
        transpose(): Matrix;
        clone(): Matrix;
    }

    export class Matrix3 implements Matrix {
        constructor();
        constructor(n11: number, n12: number, n13: number, n21: number, n22: number, n23: number, n31: number, n32: number, n33: number);

        elements: Float32Array;

        transpose(): Matrix3;
        transposeIntoArray(r: number[]): number[];
        determinant(): number;
        set(n11: number, n12: number, n13: number, n21: number, n22: number, n23: number, n31: number, n32: number, n33: number): Matrix3;
        multiplyScalar(s: number): Matrix3;
        multiplyVector3Array(a: number[]): number[];
        getNormalMatrix(m: Matrix4): Matrix3;
        getInverse(matrix: Matrix3, throwOnInvertible?: boolean): Matrix3;
        getInverse(matrix: Matrix4, throwOnInvertible?: boolean): Matrix3;
        copy(m: Matrix3): Matrix3;
        clone(): Matrix3;
        identity(): Matrix3;
    }

    export class Matrix4 implements Matrix {
        constructor();
        constructor(n11: number, n12: number, n13: number, n14: number, n21: number, n22: number, n23: number, n24: number, n31: number, n32: number, n33: number, n34: number, n41: number, n42: number, n43: number, n44: number);

        elements: Float32Array;

        set(n11: number, n12: number, n13: number, n14: number, n21: number, n22: number, n23: number, n24: number, n31: number, n32: number, n33: number, n34: number, n41: number, n42: number, n43: number, n44: number): Matrix4;
        identity(): Matrix4;
        copy(m: Matrix4): Matrix4;
        copyPosition(m: Matrix4): Matrix4;
        extractRotation(m: Matrix4): Matrix4;
        lookAt(eye: Vector3, target: Vector3, up: Vector3): Matrix4;
        multiply(m: Matrix4): Matrix4;
        multiplyMatrices(a: Matrix4, b: Matrix4): Matrix4;
        multiplyToArray(a: Matrix4, b: Matrix4, r: number[]): Matrix4;
        multiplyScalar(s: number): Matrix4;
        determinant(): number;
        transpose(): Matrix4;
        flattenToArray(flat: number[]): number[];
        flattenToArrayOffset(flat: number[], offset: number): number[];
        setPosition(v: Vector3): Vector3;
        getInverse(m: Matrix4, throwOnInvertible?: boolean): Matrix4;
        makeRotationFromEuler(euler: Euler): Matrix4;
        makeRotationFromQuaternion(q: Quaternion): Matrix4;
        scale(v: Vector3): Matrix4;
        compose(translation: Vector3, rotation: Quaternion, scale: Vector3): Matrix4;
        decompose(translation?: Vector3, rotation?: Quaternion, scale?: Vector3): Object[]; // [Vector3, Quaternion, Vector3]
        makeTranslation(x: number, y: number, z: number): Matrix4;
        makeRotationX(theta: number): Matrix4;
        makeRotationY(theta: number): Matrix4;
        makeRotationZ(theta: number): Matrix4;
        makeRotationAxis(axis: Vector3, angle: number): Matrix4;
        makeScale(x: number, y: number, z: number): Matrix4;
        makeFrustum(left: number, right: number, bottom: number, top: number, near: number, far: number): Matrix4;
        makePerspective(fov: number, aspect: number, near: number, far: number): Matrix4;
        makeOrthographic(left: number, right: number, top: number, bottom: number, near: number, far: number): Matrix4;
        clone(): Matrix4;

        multiplyVector3Array(a: number[]): number[];
        getMaxScaleOnAxis(): number;
    }

    export class Plane {
        constructor(normal?: Vector3, constant?: number);

        normal: Vector3;
        constant: number;

        normalize(): Plane;
        set(normal: Vector3, constant: number): Plane;
        copy(plane: Plane): Plane;
        applyMatrix4(matrix: Matrix4, optionalNormalMatrix?: Matrix3): Plane;
        orthoPoint(point: Vector3, optionalTarget?: Vector3): Vector3;
        isIntersectionLine(line: Line3): boolean;
        intersectLine(line: Line3, optionalTarget?: Vector3): Vector3;
        setFromNormalAndCoplanarPoint(normal: Vector3, point: Vector3): Plane;
        clone(): Plane;
        distanceToPoint(point: Vector3): number;
        equals(plane: Plane): boolean;
        setComponents(x: number, y: number, z: number, w: number): Plane;
        distanceToSphere(sphere: Sphere): number;
        setFromCoplanarPoints(a: Vector3, b: Vector3, c: Vector3): Plane;
        projectPoint(point: Vector3, optionalTarget?: Vector3): Vector3;
        negate(): Plane;
        translate(offset: Vector3): Plane;
        coplanarPoint(optionalTarget?: boolean): Vector3;
    }

    export class Quaternion {
        constructor(x?: number, y?: number, z?: number, w?: number);

        x: number;
        y: number;
        z: number;
        w: number;

        set(x: number, y: number, z: number, w: number): Quaternion;
        copy(q: Quaternion): Quaternion;
        setFromEuler(euler: Euler, update?: boolean): Quaternion;
        setFromAxisAngle(axis: Vector3, angle: number): Quaternion;
        setFromRotationMatrix(m: Matrix4): Quaternion;
        inverse(): Quaternion;
        length(): number;
        normalize(): Quaternion;
        multiply(q: Quaternion): Quaternion;
        multiplyQuaternions(a: Quaternion, b: Quaternion): Quaternion;
        multiplyVector3(vector: Vector3, dest: Vector3): Quaternion;
        clone(): Quaternion;

        static slerp(qa: Quaternion, qb: Quaternion, qm: Quaternion, t: number): Quaternion;

        slerp(qb: Quaternion, t: number): Quaternion;
        toArray(): number[];
        equals(v: Quaternion): boolean;
        lengthSq(): number;
        fromArray(n: number[]): Quaternion;
        conjugate(): Quaternion;
    }

    export class Ray {
        constructor(origin?: Vector3, direction?: Vector3);

        origin: Vector3;
        direction: Vector3;

        applyMatrix4(matrix4: Matrix4): Ray;
        at(t: number, optionalTarget?: Vector3): Vector3;
        clone(): Ray;
        closestPointToPoint(point: Vector3, optionalTarget?: Vector3): Vector3;
        copy(ray: Ray): Ray;
        distanceSqToSegment(v0: Vector3, v1: Vector3, optionalPointOnRay?: Vector3, optionalPointOnSegment?: Vector3): number;
        distanceToPlane(plane: Plane): number;
        distanceToPoint(point: Vector3): number;
        equals(ray: Ray): boolean;
        intersectBox(box: Box3, optionalTarget?: Vector3): Vector3;
        intersectPlane(plane: Plane, optionalTarget?: Vector3): Vector3;
        intersectTriangle(a: Vector3, b: Vector3, c: Vector3, backfaceCulling: boolean, optionalTarget?: Vector3): Vector3;
        isIntersectionBox(box: Box3): boolean;
        isIntersectionPlane(plane: Plane): boolean;
        isIntersectionSphere(sphere: Sphere): boolean;
        recast(t: number): Ray;
        set(origin: Vector3, direction: Vector3): Ray;
    }

    export class Sphere {
        constructor(center?: Vector3, radius?: number);

        center: Vector3;
        radius: number;

        set(center: Vector3, radius: number): Sphere;
        applyMatrix4(matrix: Matrix4): Sphere;
        clampPoint(point: Vector3, optionalTarget?: Vector3): Vector3;
        translate(offset: Vector3): Sphere;
        clone(): Sphere;
        equals(sphere: Sphere): boolean;
        setFromPoints(points: Vector3[], optionalCenter?: Vector3): Sphere;
        distanceToPoint(point: Vector3): number;
        getBoundingBox(optionalTarget?: Box3): Box3;
        containsPoint(point: Vector3): boolean;
        copy(sphere: Sphere): Sphere;
        intersectsSphere(sphere: Sphere): boolean;
        empty(): boolean;
    }

    export interface SplineControlPoint {
        x: number;
        y: number;
        z: number;
    }

    export class Spline {
        constructor(points: SplineControlPoint[]);

        points: SplineControlPoint[];
        initFromArray(a: number[][]): void;
        getPoint(k: number): SplineControlPoint;
        getControlPointsArray(): number[][];
        getLength(nSubDivisions?: number): { chunks: number[]; total: number; };
        reparametrizeByArcLength(samplingCoef: number): void;
    }

    class Triangle {
        constructor(a?: Vector3, b?: Vector3, c?: Vector3);

        a: Vector3;
        b: Vector3;
        c: Vector3;

        setFromPointsAndIndices(points: Vector3[], i0: number, i1: number, i2: number): Triangle;
        set(a: Vector3, b: Vector3, c: Vector3): Triangle;
        normal(optionalTarget?: Vector3): Vector3;
        barycoordFromPoint(point: Vector3, optionalTarget?: Vector3): Vector3;
        clone(): Triangle;
        area(): number;
        midpoint(optionalTarget?: Vector3): Vector3;
        equals(triangle: Triangle): boolean;
        plane(optionalTarget?: Vector3): Plane;
        containsPoint(point: Vector3): boolean;
        copy(triangle: Triangle): Triangle;
        
        static normal(a: Vector3, b: Vector3, c: Vector3, optionalTarget?: Vector3): Vector3;
        static barycoordFromPoint(point: Vector3, a: Vector3, b: Vector3, c: Vector3, optionalTarget: Vector3): Vector3;
        static containsPoint(point: Vector3, a: Vector3, b: Vector3, c: Vector3): boolean;
    }


    export interface Vector {
        setComponent(index: number, value: number): void;
        getComponent(index: number): number;
        copy(v: Vector): Vector;
        add(v: Vector): Vector;
        addVectors(a: Vector, b: Vector): Vector;
        sub(v: Vector): Vector;
        subVectors(a: Vector, b: Vector): Vector;
        multiplyScalar(s: number): Vector;
        divideScalar(s: number): Vector;
        negate(): Vector;
        dot(v: Vector): number;
        lengthSq(): number;
        length(): number;
        normalize(): Vector;
        setLength(l: number): Vector;
        lerp(v: Vector, alpha: number): Vector;
        equals(v: Vector): boolean;
        clone(): Vector;
    }

    export class Vector2 implements Vector {
        constructor(x?: number, y?: number);

        x: number;
        y: number;

        set(x: number, y: number): Vector2;
        copy(v: Vector2): Vector2;
        add(v: Vector2): Vector2;
        addVectors(a: Vector2, b: Vector2): Vector2;
        sub(v: Vector2): Vector2;
        subVectors(a: Vector2, b: Vector2): Vector2;
        multiplyScalar(s: number): Vector2;
        divideScalar(s: number): Vector2;
        negate(): Vector2;
        dot(v: Vector2): number;
        lengthSq(): number;
        length(): number;
        normalize(): Vector2;
        distanceTo(v: Vector2): number;
        distanceToSquared(v: Vector2): number;
        setLength(l: number): Vector2;
        equals(v: Vector2): boolean;
        clone(): Vector2;
        clamp(min: Vector2, max: Vector2): Vector2;
        clampScalar(min: number, max: number): Vector2;
        floor(): Vector2;
        ceil(): Vector2;
        round(): Vector2;
        roundToZero(): Vector2;
        lerp(v: Vector2, alpha: number): Vector2;
        setComponent(index: number, value: number): void;
        addScalar(s: number): Vector2;
        getComponent(index: number): number;
        fromArray(xy: number[]): Vector2;
        toArray(): number[];
        min(v: Vector2): Vector2;
        max(v: Vector2): Vector2;
        setX(x: number): Vector2;
        setY(y: number): Vector2;
    }

    export class Vector3 implements Vector {
        constructor(x?: number, y?: number, z?: number);

        x: number;
        y: number;
        z: number;

        set(x: number, y: number, z: number): Vector3;
        setX(x: number): Vector3;
        setY(y: number): Vector3;
        setZ(z: number): Vector3;
        copy(v: Vector3): Vector3;
        add(a: Object): Vector3;
        addVectors(a: Vector3, b: Vector3): Vector3;
        sub(a: Vector3): Vector3;
        subVectors(a: Vector3, b: Vector3): Vector3;
        multiplyScalar(s: number): Vector3;
        divideScalar(s: number): Vector3;
        negate(): Vector3;
        dot(v: Vector3): number;
        lengthSq(): number;
        length(): number;
        lengthManhattan(): number;
        normalize(): Vector3;
        distanceTo(v: Vector3): number;
        distanceToSquared(v: Vector3): number;
        setLength(l: number): Vector3;
        cross(a: Vector3): Vector3;
        crossVectors(a: Vector3, b: Vector3): Vector3;
        setFromMatrixPosition(m: Matrix4): Vector3;
        setFromMatrixScale(m: Matrix4): Vector3;
        equals(v: Vector3): boolean;
        clone(): Vector3;
        clamp(min: Vector3, max: Vector3): Vector3;
        clampScalar(min: number, max: number): Vector3;
        floor(): Vector3;
        ceil(): Vector3;
        round(): Vector3;
        roundToZero(): Vector3;
        applyMatrix3(m: Matrix3): Vector3;
        applyMatrix4(m: Matrix4): Vector3;
        projectOnPlane(planeNormal: Vector3): Vector3;
        projectOnVector(v: Vector3): Vector3;
        addScalar(s: number): Vector3;
        divide(v: Vector3): Vector3;
        min(v: Vector3): Vector3;
        max(v: Vector3): Vector3;
        setComponent(index: number, value: number): void;
        transformDirection(m: Matrix4): Vector3;
        multiplyVectors(a: Vector3, b: Vector3): Vector3;
        getComponent(index: number): number;
        applyAxisAngle(axis: Vector3, angle: number): Vector3;
        lerp(v: Vector3, alpha: number): Vector3;
        angleTo(v: Vector3): number;
        setFromMatrixColumn(index, matrix): Vector3;
        reflect(vector: Vector3): Vector3;
        fromArray(xyz: number[]): Vector3;
        multiply(v: Vector3): Vector3;
        applyProjection(m: Matrix4): Vector3;
        toArray(): number[];
        applyEuler(euler: Euler): Vector3;
        applyQuaternion(q: Quaternion): Vector3;
    }

    export class Vector4 implements Vector {
        constructor(x?: number, y?: number, z?: number, w?: number);
        x: number;
        y: number;
        z: number;
        w: number;

        set(x: number, y: number, z: number, w: number): Vector4;
        copy(v: Vector4): Vector4;
        add(v: Vector4): Vector4;
        addVectors(a: Vector4, b: Vector4): Vector4;
        sub(v: Vector4): Vector4;
        subVectors(a: Vector4, b: Vector4): Vector4;
        multiplyScalar(s: number): Vector4;
        divideScalar(s: number): Vector4;
        negate(): Vector4;
        dot(v: Vector4): number;
        lengthSq(): number;
        length(): number;
        normalize(): Vector4;
        setLength(l: number): Vector4;
        lerp(v: Vector4, alpha: number): Vector4;
        clone(): Vector4;
        clamp(min: Vector4, max: Vector4): Vector4;
        clampScalar(min: number, max: number): Vector4;
        floor(): Vector4;
        ceil(): Vector4;
        round(): Vector4;
        roundToZero(): Vector4;
        applyMatrix4(m: Matrix4): Vector4;
        min(v: Vector4): Vector4;
        max(v: Vector4): Vector4;
        addScalar(s: number): Vector4;
        equals(v: Vector4): boolean;
        setAxisAngleFromRotationMatrix(m: Matrix3): Vector4;
        setAxisAngleFromQuaternion(q: Quaternion): Vector4;
        getComponent(index: number): number;
        setComponent(index: number, value: number): void;
        fromArray(xyzw: number[]): number[];
        toArray(): number[];
        lengthManhattan(): number;
        setX(x: number): Vector2;
        setY(y: number): Vector2;
        setZ(z: number): Vector2;
        setW(w: number): Vector2;
    }

    // Objects //////////////////////////////////////////////////////////////////////////////////

    export class Bone extends Object3D {
        constructor(belongsToSkin: SkinnedMesh);
        skinMatrix: Matrix4;
        skin: SkinnedMesh;
        update(parentSkinMatrix?: Matrix4, forceUpdate?: boolean): void;
    }

    export class Line extends Object3D {
        constructor(geometry?: Geometry, material?: LineDashedMaterial, type?: number);
        constructor(geometry?: Geometry, material?: LineBasicMaterial, type?: number);
        constructor(geometry?: Geometry, material?: ShaderMaterial, type?: number);
        constructor(geometry?: BufferGeometry, material?: LineDashedMaterial, type?: number);
        constructor(geometry?: BufferGeometry, material?: LineBasicMaterial, type?: number);
        constructor(geometry?: BufferGeometry, material?: ShaderMaterial, type?: number);
        geometry: Geometry;
        material: Material;
        type: LineType;
        clone(object?: Line): Line;
    }

    enum LineType{}
    var LineStrip: LineType;
    var LinePieces: LineType;

    export class LOD extends Object3D {
        constructor();

        objects: any[];

        addLevel(object: Object3D, distance?: number): void;
        getObjectForDistance(distance: number): Object3D;
        update(camera: Camera): void;
        clone(): LOD;
    }

    export class Mesh extends Object3D {
        constructor(geometry?: Geometry, material?: Material);
        constructor(geometry?: BufferGeometry, material?: Material);

        geometry: Geometry;
        material: Material;
        
        getMorphTargetIndexByName(name: string): number;
        updateMorphTargets(): void;
        clone(object?: Mesh): Mesh;
    }

    export class MorphAnimMesh extends Mesh {
        constructor(geometry?: Geometry, material?: MeshBasicMaterial);
        constructor(geometry?: Geometry, material?: MeshDepthMaterial);
        constructor(geometry?: Geometry, material?: MeshFaceMaterial);
        constructor(geometry?: Geometry, material?: MeshLambertMaterial);
        constructor(geometry?: Geometry, material?: MeshNormalMaterial);
        constructor(geometry?: Geometry, material?: MeshPhongMaterial);
        constructor(geometry?: Geometry, material?: ShaderMaterial);

        directionBackwards: boolean;
        direction: number;
        endKeyframe: number;
        mirroredLoop: boolean;
        startKeyframe: number;
        lastKeyframe: number;
        length: number;
        time: number;
        duration: number; // milliseconds
        currentKeyframe: number;

        setDirectionForward(): void;
        playAnimation(label: string, fps: number): void;
        setFrameRange(start: number, end: number): void;
        setDirectionBackward(): void;
        parseAnimations(): void;
        updateAnimation(delta: number): void;
        setAnimationLabel(label: string, start: number, end: number): void;
        
        clone(object?: MorphAnimMesh): MorphAnimMesh;
    }

    export class ParticleSystem extends Object3D {
        constructor(geometry: Geometry, material?: ParticleSystemMaterial);
        constructor(geometry: Geometry, material?: ShaderMaterial);
        constructor(geometry: BufferGeometry, material?: ParticleSystemMaterial);
        constructor(geometry: BufferGeometry, material?: ShaderMaterial);        

        geometry: Geometry;
        material: Material;
        frustrumCulled: boolean;
        sortParticles: boolean;

        clone(object?: ParticleSystem): ParticleSystem;
    }

    export class SkinnedMesh extends Mesh {
        constructor(geometry?: Geometry, material?: MeshBasicMaterial, useVertexTexture?: boolean);
        constructor(geometry?: Geometry, material?: MeshDepthMaterial, useVertexTexture?: boolean);
        constructor(geometry?: Geometry, material?: MeshFaceMaterial, useVertexTexture?: boolean);
        constructor(geometry?: Geometry, material?: MeshLambertMaterial, useVertexTexture?: boolean);
        constructor(geometry?: Geometry, material?: MeshNormalMaterial, useVertexTexture?: boolean);
        constructor(geometry?: Geometry, material?: MeshPhongMaterial, useVertexTexture?: boolean);
        constructor(geometry?: Geometry, material?: ShaderMaterial, useVertexTexture?: boolean);

        bones: Bone[];
        identityMatrix: Matrix4;
        useVertexTexture: boolean;
        boneMatrices: Float32Array;
        
        pose(): void;
        addBone(bone?: Bone): Bone;
        clone(object?: SkinnedMesh): SkinnedMesh;
    }

    export class Sprite extends Object3D {
        constructor(material?: Material);

        material: Material;

        updateMatrix(): void;
        clone(object?: Sprite): Sprite;
    }


    // Renderers //////////////////////////////////////////////////////////////////////////////////

    export interface Renderer {
        render(scene: Scene, camera: Camera): void;
    }

    export interface CanvasRendererParameters {
        canvas?: HTMLCanvasElement;
        devicePixelRatio?: number;
    }

    export class CanvasRenderer implements Renderer {
        constructor(parameters?: CanvasRendererParameters);

        info: { render: { vertices: number; faces: number; }; };
        domElement: HTMLCanvasElement;
        devicePixelRatio: number;
        autoClear: boolean;
        sortObjects: boolean;
        sortElements: boolean;
        
        getMaxAnisotropy(): number;
        render(scene: Scene, camera: Camera): void;
        clear(): void;
        setClearColor(color: Color, opacity?: number): void;
        setFaceCulling(): void;
        supportsVertexTextures(): void;
        setSize(width: number, height: number, updateStyle: boolean): void;
        setClearColorHex(hex: number, alpha?: number): void;
    }

    export interface RendererPlugin {
        init(renderer: WebGLRenderer): void;
        render(scene: Scene, camera: Camera, currentWidth: number, currentHeight: number): void;
    }

    export interface WebGLRendererParameters {
        canvas?: HTMLCanvasElement;
        precision?: string;
        alpha?: boolean;
        premultipliedAlpha?: boolean;
        antialias?: boolean;
        stencil?: boolean;
        preserveDrawingBuffer?: boolean;
        clearColor?: number;
        clearAlpha?: number;
        devicePixelRatio?: number;
    }


    export class WebGLRenderer implements Renderer {
        constructor(parameters?: WebGLRendererParameters);

        domElement: HTMLCanvasElement;
        context: any;
        autoClear: boolean;
        autoClearColor: boolean;
        autoClearDepth: boolean;
        autoClearStencil: boolean;
        sortObjects: boolean;
        autoUpdateObjects: boolean;
        gammaInput: boolean;
        gammaOutput: boolean;
        shadowMapEnabled: boolean;
        shadowMapAutoUpdate: boolean;
        shadowMapType: ShadowMapType;
        shadowMapCullFace: CullFace;
        shadowMapDebug: boolean;
        shadowMapCascade: boolean;
        maxMorphTargets: number;
        maxMorphNormals: number;
        autoScaleCubemaps: boolean;
        renderPluginsPre: RendererPlugin[];
        renderPluginsPost: RendererPlugin[];
        info: {
            memory: {
                programs: number;
                geometries: number;
                textures: number;
            };
            render: {
                calls: number;
                vertices: number;
                faces: number;
                points: number;
            };
        };
        shadowMapPlugin: ShadowMapPlugin;
        devicePixelRatio: number;

        getContext(): WebGLRenderingContext;
        supportsVertexTextures(): boolean;
        setSize(width: number, height: number): void;
        setViewport(x?: number, y?: number, width?: number, height?: number): void;
        setScissor(x: number, y: number, width: number, height: number): void;
        enableScissorTest(enable: boolean): void;
        setClearColor(color: Color, alpha: number): void;
        getClearColor(): Color;
        getClearAlpha(): number;
        clear(color?: boolean, depth?: boolean, stencil?: boolean): void;
        addPostPlugin(plugin: RendererPlugin): void;
        addPrePlugin(plugin: RendererPlugin): void;
        updateShadowMap(scene: Scene, camera: Camera): void;
        renderBufferImmediate(object: Object3D, program: Object, material: Material): void;
        renderBufferDirect(camera: Camera, lights: Light[], fog: Fog, material: Material, geometryGroup: any, object: Object3D): void;
        renderBuffer(camera: Camera, lights: Light[], fog: Fog, material: Material, geometryGroup: any, object: Object3D): void;
        render(scene: Scene, camera: Camera, renderTarget?: RenderTarget, forceClear?: boolean): void;
        renderImmediateObject(camera: Camera, lights: Light[], fog: Fog, material: Material, object: Object3D): void;
        initWebGLObjects(scene: Scene): void;
        initMaterial(material: Material, lights: Light[], fog: Fog, object: Object3D): void;
        setFaceCulling(cullFace?: string, frontFace?: FrontFaceDirection): void;
        setDepthTest(depthTest: boolean): void;
        setDepthWrite(depthWrite: boolean): void;
        setBlending(blending: Blending, blendEquation: BlendingEquation, blendSrc: BlendingSrcFactor, blendDst: BlendingDstFactor): void;
        setTexture(texture: Texture, slot: number): void;
        setRenderTarget(renderTarget: RenderTarget): void;
        supportsCompressedTextureS3TC(): any;
        getMaxAnisotropy(): number;
        getPrecision(): string;
        setMaterialFaces(material: Material): void;
        supportsStandardDerivatives(): any;
        supportsFloatTextures(): any;
        clearTarget(renderTarget, color, depth, stencil): void;
        setClearColorHex(hex: number, alpha: number): void;
    }

    export interface RenderTarget {
    }

    export interface WebGLRenderTargetOptions {
        wrapS?: Wrapping;
        wrapT?: Wrapping;
        magFilter?: TextureFilter;
        minFilter?: TextureFilter;
        anisotropy?: number; // 1;
        format?: number; // RGBAFormat;
        type?: TextureDataType; // UnsignedByteType;
        depthBuffer?: boolean; // true;
        stencilBuffer?: boolean; // true;
    }

    export class WebGLRenderTarget implements RenderTarget {
        constructor(width: number, height: number, options?: WebGLRenderTargetOptions);
        width: number;
        height: number;
        wrapS: Wrapping;
        wrapT: Wrapping;
        magFilter: TextureFilter;
        minFilter: TextureFilter;
        anisotropy: number;
        offset: Vector2;
        repeat: Vector2;
        format: number;
        type: number;
        depthBuffer: boolean;
        stencilBuffer: boolean;
        generateMipmaps: boolean;
        clone(): WebGLRenderTarget;
        dispose(): void;
    }

    export class WebGLRenderTargetCube extends WebGLRenderTarget {
        constructor(width: number, height: number, options?: WebGLRenderTargetOptions);
        activeCubeFace: number; // PX 0, NX 1, PY 2, NY 3, PZ 4, NZ 5
    }

    // Renderers / Renderables /////////////////////////////////////////////////////////////////////

    export class RenderableFace {
        constructor();

        vertexNormalsModelView: Vector3[];
        normalWorld: Vector3;
        color: number;
        material: Material;
        uvs: Vector2[][];
        v1: RenderableVertex;
        v2: RenderableVertex;
        v3: RenderableVertex;
        normalModelView: Vector3;
        centroidModel: Vector3;
        vertexNormalsLength: number;
        z: number;
        vertexNormalsModel: Vector3[];
    }

    export class RenderableLine {
        constructor();

        v1: RenderableVertex;
        v2: RenderableVertex;
        z: number;
        material: Material;
    }

    export class RenderableObject {
        constructor();

        object: Object;
        z: number;
        id: number;
    }

    export class RenderableParticle {
        constructor();

        scale: Vector2;
        material: Material;
        object: Object;
        y: number;
        x: number;
        rotation: number;
        z: number;
    }

    export class RenderableVertex {
        constructor();

        visible: boolean;
        positionScreen: Vector4;
        positionWorld: Vector3;
        
        copy(vertex: RenderableVertex): void;
    }

    // Shaders /////////////////////////////////////////////////////////////////////
    export interface ShaderChunk {
        [name: string]: string;
        fog_pars_fragment: string;
        fog_fragment: string;
        envmap_pars_fragment: string;
        envmap_fragment: string;
        envmap_pars_vertex: string;
        worldpos_vertex: string;
        envmap_vertex: string;
        map_particle_pars_fragment: string;
        map_particle_fragment: string;
        map_pars_vertex: string;
        map_pars_fragment: string;
        map_vertex: string;
        map_fragment: string;
        lightmap_pars_fragment: string;
        lightmap_pars_vertex: string;
        lightmap_fragment: string;
        lightmap_vertex: string;
        bumpmap_pars_fragment: string;
        normalmap_pars_fragment: string;
        specularmap_pars_fragment: string;
        specularmap_fragment: string;
        lights_lambert_pars_vertex: string;
        lights_lambert_vertex: string;
        lights_phong_pars_vertex: string;
        lights_phong_vertex: string;
        lights_phong_pars_fragment: string;
        lights_phong_fragment: string;
        color_pars_fragment: string;
        color_fragment: string;
        color_pars_vertex: string;
        color_vertex: string;
        skinning_pars_vertex: string;
        skinbase_vertex: string;
        skinning_vertex: string;
        morphtarget_pars_vertex: string;
        morphtarget_vertex: string;
        default_vertex: string;
        morphnormal_vertex: string;
        skinnormal_vertex: string;
        defaultnormal_vertex: string;
        shadowmap_pars_fragment: string;
        shadowmap_fragment: string;
        shadowmap_pars_vertex: string;
        shadowmap_vertex: string;
        alphatest_fragment: string;
        linear_to_gamma_fragment: string;
    }

    export var ShaderChunk: ShaderChunk;

    export var UniformsUtils: {
        merge(uniforms: Object[]): Uniforms;
        merge(uniforms: Uniforms[]): Uniforms;
        clone(uniforms_src: Uniforms): Uniforms;
    };

    export var UniformsLib: {
        common: Uniforms;
        bump: Uniforms;
        normalmap: Uniforms;
        fog: Uniforms;
        lights: Uniforms;
        particle: Uniforms;
        shadowmap: Uniforms;
    };


    export interface Shader {
        uniforms: Uniforms;
        vertexShader: string;
        fragmentShader: string;
    }

    export var ShaderLib: {
        [name: string]: Shader;
        basic: Shader;
        lambert: Shader;
        phong: Shader;
        particle_basic: Shader;
        depth: Shader;
        dashed: Shader;
        normal: Shader;
        normalmap: Shader;
        cube: Shader;
        depthRGBA: Shader;
    };

    // Scenes /////////////////////////////////////////////////////////////////////

    export interface IFog {
        name:string;
        color: Color;        
        clone():IFog;
    }

    export class Fog implements IFog {
        constructor(hex: number, near?: number, far?: number);

        name:string;
        color: Color;
        near: number;
        far: number;

        clone(): Fog;
    }

    export class FogExp2 implements IFog {
        constructor(hex: number, density?: number);

        name: string;
        color: Color;
        density: number;

        clone(): FogExp2;
    }

    export class Scene extends Object3D {
        constructor();

        fog: IFog;
        overrideMaterial: Material;
        matrixAutoUpdate: boolean;
        autoUpdate: boolean;
    }

    // Textures /////////////////////////////////////////////////////////////////////
    export class CompressedTexture extends Texture {
        constructor(
            mipmaps: ImageData[],
            width: number,
            height: number,
            format?: PixelFormat,
            type?: TextureDataType,
            mapping?: Mapping,
            wrapS?: Wrapping,
            wrapT?: Wrapping,
            magFilter?: TextureFilter,
            minFilter?: TextureFilter,
            anisotropy?: number
        );
        
        clone(): CompressedTexture;
    }

    export class DataTexture extends Texture {
        constructor(
            data: ImageData,
            width: number,
            height: number,
            format: PixelFormat,
            type: TextureDataType,
            mapping: Mapping,
            wrapS: Wrapping,
            wrapT: Wrapping,
            magFilter: TextureFilter,
            minFilter: TextureFilter,
            anisotropy?: number
        );

        clone(): DataTexture;
    }

    export class Texture {
        constructor(
            image: HTMLImageElement,
            mapping?: Mapping,
            wrapS?: Wrapping,
            wrapT?: Wrapping,
            magFilter?: TextureFilter,
            minFilter?: TextureFilter,
            format?: PixelFormat,
            type?: TextureDataType,
            anisotropy?: number
        );
        constructor(
            image: HTMLCanvasElement,
            mapping?: Mapping,
            wrapS?: Wrapping,
            wrapT?: Wrapping,
            magFilter?: TextureFilter,
            minFilter?: TextureFilter,
            format?: PixelFormat,
            type?: TextureDataType,
            anisotropy?: number
        );
        constructor(
            image: HTMLImageElement,
            mapping?: MappingConstructor,
            wrapS?: Wrapping,
            wrapT?: Wrapping,
            magFilter?: TextureFilter,
            minFilter?: TextureFilter,
            format?: PixelFormat,
            type?: TextureDataType,
            anisotropy?: number
            );
        constructor(
            image: HTMLCanvasElement,
            mapping?: MappingConstructor,
            wrapS?: Wrapping,
            wrapT?: Wrapping,
            magFilter?: TextureFilter,
            minFilter?: TextureFilter,
            format?: PixelFormat,
            type?: TextureDataType,
            anisotropy?: number
        );

        image: Object; // HTMLImageElement or ImageData ;
        mapping: Mapping;
        wrapS: Wrapping;
        wrapT: Wrapping;
        magFilter: TextureFilter;
        minFilter: TextureFilter;
        format: PixelFormat;
        type: TextureDataType;
        anisotropy: number;
        needsUpdate: boolean;
        repeat: Vector2;
        offset: Vector2;
        name: string;
        generateMipmaps: boolean;
        flipY: boolean;
        mipmaps: ImageData[];
        unpackAlignment: number;
        premultiplyAlpha: boolean;
        onUpdate: () => void;
        id: number;

        clone(): Texture;
        dispose(): void;
    }

    // Extras /////////////////////////////////////////////////////////////////////

    export interface TypefaceData {
        familyName: string;
        cssFontWeight: string;
        cssFontStyle: string;
    }

    export var FontUtils: {

        divisions: number;
        style: string;
        weight: string;
        face: string;
        faces: { [weight: string]: { [style: string]: Face; }; };
        size: number;
        
        drawText(text: string): { paths: Path[]; offset: number; };
        Triangulate: {
            (contour: Vector2[], indices: boolean): Vector2[];
            area(contour: Vector2[]): number;
        };
        extractGlyphPoints(c: string, face: Face, scale: number, offset: number, path: Path): { offset: number; path: Path; };
        generateShapes(text: string, parameters?: { size?: number; curveSegments?: number; font?: string; weight?: string; style?: string; }): Shape[];
        loadFace(data: TypefaceData): TypefaceData;
        getFace(): Face;
    };

    export var GeometryUtils: {
        merge(geometry1: Geometry, object2: Mesh, materialIndexOffset?: number): void;
        merge(geometry1: Geometry, object2: Geometry, materialIndexOffset?: number): void;
        randomPointInTriangle(vectorA: Vector3, vectorB: Vector3, vectorC: Vector3): Vector3;
        randomPointInFace(face: Face, geometry: Geometry, useCachedAreas: boolean): Vector3;
        randomPointsInGeometry(geometry: Geometry, points: number): Vector3;
        triangleArea(vectorA: Vector3, vectorB: Vector3, vectorC: Vector3): number;
        center(geometry: Geometry): Vector3;
        triangulateQuads(geometry: Geometry): void;
    };

    export var ImageUtils: {
        crossOrigin: string;

        generateDataTexture(width: number, height: number, color: Color): DataTexture;
        parseDDS(buffer: ArrayBuffer, loadMipmaps: boolean): { mipmaps: { data: Uint8Array; width: number; height: number; }[]; width: number; height: number; format: number; mipmapCount: number; };
        loadCompressedTexture(url: string, mapping?: Mapping, onLoad?: (texture: Texture) => void, onError?: (message: string) => void): Texture;
        loadTexture(url: string, mapping?: Mapping, onLoad?: (texture: Texture) => void, onError?: (message: string) => void): Texture;
        getNormalMap(image: HTMLImageElement, depth?: number): HTMLCanvasElement;
        loadCompressedTextureCube(array: string[], mapping?: Mapping, onLoad?: () => void, onError?: (message: string) => void): Texture;
        loadTextureCube(array: string[], mapping?: Mapping, onLoad?: () => void , onError?: (message: string) => void ): Texture;
    };

    export var SceneUtils: {
        createMultiMaterialObject(geometry: Geometry, materials: Material[]): Object3D;
        attach(child: Object3D, scene: Scene, parent: Object3D): void;
        detach(child: Object3D, parent: Object3D, scene: Scene): void;
    };

    // Extras / Animation /////////////////////////////////////////////////////////////////////

    export interface KeyFrame {
        pos: number[];
        rot: number[];
        scl: number[];
        time: number;
    }

    export interface KeyFrames {
        keys: KeyFrame[];
        parent: number;
    }

    export interface AnimationData {
        JIT: number;
        fps: number;
        hierarchy: KeyFrames[];
        length: number;
        name: string;
    }

    export class Animation {
        constructor(root: Mesh, name: string);

        root: Mesh;
        data: AnimationData;
        hierarchy: Bone[];
        currentTime: number;
        timeScale: number;
        isPlaying: boolean;
        isPaused: boolean;
        loop: boolean;
        interpolationType: AnimationInterpolation;

        play(loop?: boolean, startTimeMS?: number): void;
        pause(): void;
        stop(): void;
        reset(): void;
        update(deltaTimeMS: number): void;
        interpolateCatmullRom(points: Vector3[], scale: number): Vector3[];
        interpolate(p0: number, p1: number, p2: number, p3: number, t: number, t2: number, t3: number): number;
        getNextKeyWith(type: string, h: number, key: number): KeyFrame;    // ????
        getPrevKeyWith(type: string, h: number, key: number): KeyFrame;
    }

    export class AnimationInterpolation { }

    export var AnimationHandler: {
        constructor();

        CATMULLROM: AnimationInterpolation;
        CATMULLROM_FORWARD: AnimationInterpolation;
        LINEAR: AnimationInterpolation;

        removeFromUpdate(animation: Animation): void;
        get(name: string): AnimationData;
        update(deltaTimeMS: number): void;
        parse(root: SkinnedMesh): Object3D[];
        add(data: AnimationData): void;
        addToUpdate(animation: Animation): void;
    };

    export class AnimationMorphTarget {
        constructor(root: Bone, data: any);
        
        root: Bone;
        data: Object;
        hierarchy: KeyFrames[];
        currentTime: number;
        timeScale: number;
        isPlaying: boolean;
        isPaused: boolean;
        loop: boolean;
        influence: number;

        play(loop?: boolean, startTimeMS?: number): void;
        pause(): void;
        stop(): void;
        update(deltaTimeMS: number): void;
    }

    export class KeyFrameAnimation {
        constructor(root: Mesh, data: any, JITCompile?: boolean);

        root: Mesh;
        data: Object;
        hierarchy: KeyFrames[];
        currentTime: number;
        timeScale: number;
        isPlaying: number;
        isPaused: number;
        loop: number;
        JITCompile: boolean;

        play(loop?: number, startTimeMS?: number): void;
        pause(): void;
        stop(): void;
        update(deltaTimeMS: number): void;
        interpolateCatmullRom(points: Vector3[], scale: number): Vector3[];
        getNextKeyWith(type: string, h: number, key: number): KeyFrame;    // ????
        getPrevKeyWith(type: string, h: number, key: number): KeyFrame;
    }

    // Extras / Cameras /////////////////////////////////////////////////////////////////////

    export class CombinedCamera extends Camera {
        constructor(width: number, height: number, fov: number, near: number, far: number, orthoNear: number, orthoFar: number);
        
        fov: number;
        right: number;
        bottom: number;
        cameraP: PerspectiveCamera;
        top: number;
        zoom: number;
        far: number;
        near: number;
        inPerspectiveMode: boolean;
        cameraO: OrthographicCamera;
        inOrthographicMode: boolean;
        left: number;

        toBottomView(): void;
        setFov(fov: number): void;
        toBackView(): void;
        setZoom(zoom: number): void;
        setLens(focalLength: number, frameHeight?: number): number;
        toFrontView(): void;
        toLeftView(): void;
        updateProjectionMatrix(): void;
        toTopView(): void;
        toOrthographic(): void;
        setSize(width: number, height: number): void;
        toPerspective(): void;
        toRightView(): void;
    }

    export class CubeCamera extends Object3D {
        constructor(near: number, far: number, cubeResolution: number);

        renderTarget: WebGLRenderTargetCube;
        updateCubeMap(renderer: Renderer, scene: Scene): void;
    }

    // Extras / Core /////////////////////////////////////////////////////////////////////

    export class Curve {
        constructor();

        needsUpdate: boolean;
        getPoint(t: number): Vector;
        getPointAt(u: number): Vector;
        getPoints(divisions?: number): Vector[];
        getSpacedPoints(divisions?: number): Vector[];

        getLength(): number;
        getLengths(divisions?: number): number[];
        updateArcLengths(): void;
        getUtoTmapping(u: number, distance: number): number;
        getTangent(t: number): Vector;
        getTangentAt(u: number): Vector;

        static Utils: {
            tangentQuadraticBezier(t: number, p0: number, p1: number, p2: number): number;
            tangentCubicBezier(t: number, p0: number, p1: number, p2: number, p3: number): number;
            tangentSpline(t: number, p0: number, p1: number, p2: number, p3: number): number;
            interpolate(p0: number, p1: number, p2: number, p3: number, t: number): number;
        };

        static create(constructorFunc: Function, getPointFunc: Function): Function;
    }

    export interface BoundingBox {
        minX: number;
        minY: number;
        maxX: number;
        maxY: number;
        centroid: Vector;
    }

    export class CurvePath extends Curve {
        constructor();

        curves: Curve[];
        bends: Path[];
        autoClose: boolean;

        getWrapPoints(oldPts: Vector2[], path: Path): Vector2[];
        createPointsGeometry(divisions: number): Geometry;
        addWrapPath(bendpath: Path): void;
        createGeometry(points: Vector2[]): Geometry;
        add(curve: Curve): void;
        getTransformedSpacedPoints(segments: number, bends?: Path[]): Vector2[];
        createSpacedPointsGeometry(divisions: number): Geometry;
        closePath(): void;
        getBoundingBox(): BoundingBox;
        getCurveLengths(): number;
        getTransformedPoints(segments: number, bends?: Path): Vector2[];
        checkConnection(): boolean;
    }

    export class Gyroscope extends Object3D {
        constructor();

        scaleWorld: Vector3;
        translationWorld: Vector3;
        rotationWorld: Quaternion;
        translationObject: Vector3;
        scaleObject: Vector3;
        rotationObject: Quaternion;

        updateMatrixWorld(force?: boolean): void;
    }

    export enum PathActions {
        MOVE_TO,
        LINE_TO,
        QUADRATIC_CURVE_TO, // Bezier quadratic curve
        BEZIER_CURVE_TO,     // Bezier cubic curve
        CSPLINE_THRU,        // Catmull-rom spline
        ARC,                // Circle
        ELLIPSE,
    }

    export class Path extends CurvePath {
        constructor(points?: Vector2);

        actions: PathActions[];

        fromPoints(vectors: Vector2[]): void;
        moveTo(x: number, y: number): void;
        lineTo(x: number, y: number): void;
        quadraticCurveTo(aCPx: number, aCPy: number, aX: number, aY: number): void;
        bezierCurveTo(aCP1x: number, aCP1y: number, aCP2x: number, aCP2y: number, aX: number, aY: number): void;
        splineThru(pts: Vector2[]): void;
        arc(aX: number, aY: number, aRadius: number, aStartAngle: number, aEndAngle: number, aClockwise: boolean): void;
        absarc(aX: number, aY: number, aRadius: number, aStartAngle: number, aEndAngle: number, aClockwise: boolean): void;
        ellipse(aX: number, aY: number, xRadius: number, yRadius: number, aStartAngle: number, aEndAngle: number, aClockwise: boolean): void;
        absellipse(aX: number, aY: number, xRadius: number, yRadius: number, aStartAngle: number, aEndAngle: number, aClockwise: boolean): void;
        toShapes(): Shape[];
    }

    export class Shape implements Path {
        constructor(points?: Vector2[]);

        holes: Path[];

        makeGeometry(options?: any): ShapeGeometry;
        extractAllPoints(divisions: number): {
            shape: Vector2[];
            holes: Vector2[][];
        };
        extrude(options?: any): ExtrudeGeometry;
        extractPoints(divisions: number): Vector2[];
        extractAllSpacedPoints(divisions: Vector2): {
            shape: Vector2[];
            holes: Vector2[][];
        };
        getPointsHoles(divisions: number): Vector2[][];
        getSpacedPointsHoles(divisions: number): Vector2[][];

        getCurveLengths(): number;

        // trick for TypeScript 0.9.5 compile passed
        // from Path
        actions: PathActions[];
        fromPoints(vectors: Vector2[]): void;
        moveTo(x: number, y: number): void;
        lineTo(x: number, y: number): void;
        quadraticCurveTo(aCPx: number, aCPy: number, aX: number, aY: number): void;
        bezierCurveTo(aCP1x: number, aCP1y: number, aCP2x: number, aCP2y: number, aX: number, aY: number): void;
        splineThru(pts: Vector2[]): void;
        arc(aX: number, aY: number, aRadius: number, aStartAngle: number, aEndAngle: number, aClockwise: boolean): void;
        absarc(aX: number, aY: number, aRadius: number, aStartAngle: number, aEndAngle: number, aClockwise: boolean): void;
        ellipse(aX: number, aY: number, xRadius: number, yRadius: number, aStartAngle: number, aEndAngle: number, aClockwise: boolean): void;
        absellipse(aX: number, aY: number, xRadius: number, yRadius: number, aStartAngle: number, aEndAngle: number, aClockwise: boolean): void;
        toShapes(): Shape[];
        // from CurvePath
        curves: Curve[];
        bends: Path[];
        autoClose: boolean;
        add(curve: Curve): void;
        checkConnection(): boolean;
        closePath(): void;
        getBoundingBox(): BoundingBox;
        createPointsGeometry(divisions: number): Geometry;
        createSpacedPointsGeometry(divisions: number): Geometry;
        createGeometry(points: Vector2[]): Geometry;
        addWrapPath(bendpath: Path): void;
        getTransformedPoints(segments: number, bends?: Path): Vector2[];
        getTransformedSpacedPoints(segments: number, bends?: Path[]): Vector2[];
        getWrapPoints(oldPts: Vector2[], path: Path): Vector2[];
        getPoint(t: number): Vector;
        getPointAt(u: number): Vector;
        getPoints(divisions?: number): Vector[];
        getSpacedPoints(divisions?: number): Vector[];
        getLength(): number;
        getLengths(divisions?: number): number[];
        needsUpdate: boolean;
        updateArcLengths(): void;
        getUtoTmapping(u: number, distance: number): number;
        getNormalVector(t: number): Vector;
        getTangent(t: number): Vector;
        getTangentAt(u: number): Vector;
    }



    // Extras / Geomerties /////////////////////////////////////////////////////////////////////

    export class CircleGeometry extends Geometry {
        constructor(radius?: number, segments?: number, thetaStart?: number, thetaLength?: number);
    }

    export class ConvexGeometry extends Geometry {
        constructor(vertices: Vector3[]);
    }

    export class BoxGeometry extends Geometry {
        constructor(width: number, height: number, depth: number, widthSegments?: number, heightSegments?: number, depthSegments?: number);
    }

    export class CubeGeometry extends BoxGeometry {
    }

    export class CylinderGeometry extends Geometry {
        constructor(radiusTop?: number, radiusBottom?: number, height?: number, radiusSegments?: number, heightSegments?: number, openEnded?: boolean);
    }

    export class ExtrudeGeometry extends Geometry {
        constructor(shape?: Shape, options?: any);
        constructor(shapes?: Shape[], options?: any);

        addShapeList(shapes: Shape[], options?: any): void;
        addShape(shape: Shape, options?: any): void;
    }

    export class IcosahedronGeometry extends PolyhedronGeometry {
        constructor(radius: number, detail: number);
    }

    export class LatheGeometry extends Geometry {
        constructor(points: Vector3[], steps?: number, angle?: number);
    }

    export class OctahedronGeometry extends PolyhedronGeometry {
        constructor(radius: number, detail: number);
    }

    export class ParametricGeometry extends Geometry {
        constructor(func: (u: number, v: number) => Vector3, slices: number, stacks: number, useTris?: boolean);
    }

    export class PlaneGeometry extends Geometry {
        constructor(width: number, height: number, widthSegments?: number, heightSegments?: number);
    }

    export class PolyhedronGeometry extends Geometry {
        constructor(vertices: Vector3[], faces: Face[], radius?: number, detail?: number);
    }

    export class RingGeometry extends Geometry {
        constructor(innerRadius?: number, outerRadius?: number, thetaSegments?: number, phiSegments?: number, thetaStart?: number, thetaLength?: number);
    }

    export class ShapeGeometry extends Geometry {
        constructor(shape: Shape, options?: any);
        constructor(shapes: Shape[], options?: any);

        shapebb: BoundingBox;
        addShapeList(shapes: Shape[], options: any): ShapeGeometry;
        addShape(shape: Shape, options?: any): void;
    }

    export class SphereGeometry extends Geometry {
        constructor(radius: number, widthSegments?: number, heightSegments?: number, phiStart?: number, phiLength?: number, thetaStart?: number, thetaLength?: number);
    }

    export class TetrahedronGeometry extends PolyhedronGeometry {
        constructor(radius?: number, detail?: number);
    }

    export interface TextGeometryParameters {
        size?: number; // size of the text
        height?: number; // thickness to extrude text
        curveSegments?: number; // number of points on the curves
        font?: string; // font name
        weight?: string; // font weight (normal, bold)
        style?: string; // font style  (normal, italics)
        bevelEnabled?: boolean;   // turn on bevel
        bevelThickness?: number; // how deep into text bevel goes
        bevelSize?: number; // how far from text outline is bevel
    }

    export class TextGeometry extends ExtrudeGeometry {
        constructor(text: string, TextGeometryParameters?: TextGeometryParameters);
    }

    export class TorusGeometry extends Geometry {
        constructor(radius?: number, tube?: number, radialSegments?: number, tubularSegments?: number, arc?: number);
    }

    export class TorusKnotGeometry extends Geometry {
        constructor(radius?: number, tube?: number, radialSegments?: number, tubularSegments?: number, p?: number, q?: number, heightScale?: number);
    }

    export class TubeGeometry extends Geometry {
        constructor(path: Path, segments?: number, radius?: number, radiusSegments?: number, closed?: boolean);

        path: Path;
        segments: number;
        radius: number;
        radiusSegments: number;
        closed: boolean;
        tangents: Vector3[];
        normals: Vector3[];
        binormals: Vector3[];

        FrenetFrames(path: Path, segments: number, closed: boolean): void;
    }

    // Extras / Helpers /////////////////////////////////////////////////////////////////////

    export class ArrowHelper extends Object3D {
        constructor(dir: Vector3, origin?: Vector3, length?: number, hex?: number, headLength?: number, headWidth?: number);

        line: Line;
        cone: Mesh;

        setColor(hex: number): void;
        setLength(length: number): void;
        setDirection(dir: Vector3): void;
    }

    export class AxisHelper extends Line {
        constructor(size: number);
    }

    export class BoundingBoxHelper extends Mesh {
        constructor(object: Object3D, hex: number);

        object: Object3D;
        box: Box3;

        update(): void;
    }

    export class CameraHelper extends Line {
        constructor(camera: Camera);

        pointMap: { [id: string]: number[]; };
        camera: Camera;

        update(): void;
    }

    export class DirectionalLightHelper extends Object3D {
        constructor(light: Light, sphereSize: number, arrowLength: number);

        lightSphere: Mesh;
        light: Light;
        targetLine: Line;

        update(): void;
    }

    export class GridHelper extends Line {
        constructor(size: number, step: number);

        setColors(colorCenterLine: number, colorGrid: number);
    }

    export class HemisphereLightHelper extends Object3D {
        constructor(light: Light, sphereSize: number, arrowLength: number, domeSize: number);

        lightSphere: Mesh;
        light: Light;

        update(): void;
    }

    export class PointLightHelper extends Object3D {
        constructor(light: Light, sphereSize: number);

        lightSphere: Mesh;
        light: Light;
        
        update(): void;
    }

    export class SpotLightHelper extends Object3D {
        constructor(light: Light, sphereSize: number, arrowLength: number);

        lightSphere: Mesh;
        light: Light;
        lightCone: Mesh;

        update(): void;
    }

    // Extras / Objects /////////////////////////////////////////////////////////////////////

    export class ImmediateRenderObject extends Object3D {
        constructor();

        render(renderCallback): void;
    }

    export interface LensFlareProperty {
        texture: Texture;             // Texture
        size: number;             // size in pixels (-1 = use texture.width)
        distance: number;             // distance (0-1) from light source (0=at light source)
        x: number;
        y: number;
        z: number;            // screen position (-1 =>  1) z = 0 is ontop z = 1 is back
        scale: number;             // scale
        rotation: number;             // rotation
        opacity: number;            // opacity
        color: Color;                // color
        blending: Blending;
    }

    export class LensFlare extends Object3D {
        constructor(texture?: Texture, size?: number, distance?: number, blending?: Blending, color?: Color);

        lensFlares: LensFlareProperty[];
        positionScreen: Vector3;
        customUpdateCallback: (object: LensFlare) => void;

        add(obj: Object3D): void;
        add(texture: Texture, size?: number, distance?: number, blending?: Blending, color?: Color): void;
        updateLensFlares(): void;
    }

    export interface MorphBlendMeshAnimation {
        startFrame: number;
        endFrame: number;
        length: number;
        fps: number;
        duration: number;
        lastFrame: number;
        currentFrame: number;
        active: boolean;
        time: number;
        direction: number;
        weight: number;
        directionBackwards: boolean;
        mirroredLoop: boolean;
    }

    export class MorphBlendMesh extends Mesh {
        constructor(geometry: Geometry, material: Material);

        animationsMap: { [name: string]: MorphBlendMeshAnimation; };
        animationsList: MorphBlendMeshAnimation[];

        setAnimationWeight(name: string, weight: number): void;
        setAnimationFPS(name: string, fps: number): void;
        createAnimation(name: string, start: number, end: number, fps: number): void;
        playAnimation(name: string): void;
        update(delta: number): void;
        autoCreateAnimations(fps: number): void;
        setAnimationDuration(name: string, duration: number): void;
        setAnimationDirectionForward(name: string): void;
        getAnimationDuration(name: string): number;
        getAnimationTime(name: string): number;
        setAnimationDirectionBackward(name: string): void;
        setAnimationTime(name: string, time: number): void;
        stopAnimation(name: string): void;
    }

    // Extras / Renderers / Plugins /////////////////////////////////////////////////////////////////////

    export class DepthPassPlugin implements RendererPlugin {
        constructor();

        enabled: boolean;
        renderTarget: RenderTarget;

        init(renderer: Renderer): void;
        update(scene: Scene, camera: Camera): void;
        render(scene: Scene, camera: Camera): void;
    }

    export class LensFlarePlugin implements RendererPlugin {
        constructor();

        init(renderer: Renderer): void;
        render(scene: Scene, camera: Camera, viewportWidth: number, viewportHeight: number): void;
    }

    export class ShadowMapPlugin implements RendererPlugin {
        constructor();

        init(renderer: Renderer): void;
        update(scene: Scene, camera: Camera): void;
        render(scene: Scene, camera: Camera): void;
    }

    export class SpritePlugin implements RendererPlugin {
        constructor();

        init(renderer: Renderer): void;
        render(scene: Scene, camera: Camera, viewportWidth: number, viewportHeight: number): void;
    }

    // Extras / Shaders /////////////////////////////////////////////////////////////////////

    export var ShaderFlares: {
        'lensFlareVertexTexture': {
            vertexShader: string;
            fragmentShader: string;
        };
        'lensFlare': {
            vertexShader: string;
            fragmentShader: string;
        };
    };
}
