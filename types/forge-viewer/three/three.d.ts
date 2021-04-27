// minimal types for three.js (r71)
// Forge viewer is built on older version of three.js
// this package contains only types used by Forge viewer and may be incomplete

declare namespace THREE {
    const REVISION: string;

    enum MOUSE {}
    const LEFT: MOUSE;
    const MIDDLE: MOUSE;
    const RIGHT: MOUSE;

    // GL STATE CONSTANTS
    enum CullFace {}
    const CullFaceNone: CullFace;
    const CullFaceBack: CullFace;
    const CullFaceFront: CullFace;
    const CullFaceFrontBack: CullFace;

    enum FrontFaceDirection {}
    const FrontFaceDirectionCW: FrontFaceDirection;
    const FrontFaceDirectionCCW: FrontFaceDirection;

    // Shadowing Type
    enum ShadowMapType {}
    const BasicShadowMap: ShadowMapType;
    const PCFShadowMap: ShadowMapType;
    const PCFSoftShadowMap: ShadowMapType;

    // MATERIAL CONSTANTS

    // side
    enum Side {}
    const FrontSide: Side;
    const BackSide: Side;
    const DoubleSide: Side;

    // shading
    enum Shading { }
    const FlatShading: Shading;
    const SmoothShading: Shading;

    // colors
    enum Colors {}
    const NoColors: Colors;
    const FaceColors: Colors;
    const VertexColors: Colors;

    // blending modes
    enum Blending {}
    const NoBlending: Blending;
    const NormalBlending: Blending;
    const AdditiveBlending: Blending;
    const SubtractiveBlending: Blending;
    const MultiplyBlending: Blending;
    const CustomBlending: Blending;

    // custom blending equations
    // (numbers start from 100 not to clash with other
    //  mappings to OpenGL constants defined in Texture.js)
    enum BlendingEquation {}
    const AddEquation: BlendingEquation;
    const SubtractEquation: BlendingEquation;
    const ReverseSubtractEquation: BlendingEquation;
    const MinEquation: BlendingEquation;
    const MaxEquation: BlendingEquation;

    // custom blending destination factors
    enum BlendingDstFactor {}
    const ZeroFactor: BlendingDstFactor;
    const OneFactor: BlendingDstFactor;
    const SrcColorFactor: BlendingDstFactor;
    const OneMinusSrcColorFactor: BlendingDstFactor;
    const SrcAlphaFactor: BlendingDstFactor;
    const OneMinusSrcAlphaFactor: BlendingDstFactor;
    const DstAlphaFactor: BlendingDstFactor;
    const OneMinusDstAlphaFactor: BlendingDstFactor;

    // custom blending src factors
    enum BlendingSrcFactor {}
    const DstColorFactor: BlendingSrcFactor;
    const OneMinusDstColorFactor: BlendingSrcFactor;
    const SrcAlphaSaturateFactor: BlendingSrcFactor;

    // depth modes
    enum DepthModes { }
    const NeverDepth: DepthModes;
    const AlwaysDepth: DepthModes;
    const LessDepth: DepthModes;
    const LessEqualDepth: DepthModes;
    const EqualDepth: DepthModes;
    const GreaterEqualDepth: DepthModes;
    const GreaterDepth: DepthModes;
    const NotEqualDepth: DepthModes;

    // TEXTURE CONSTANTS
    // Operations
    enum Combine {}
    const MultiplyOperation: Combine;
    const MixOperation: Combine;
    const AddOperation: Combine;

    // Tone Mapping modes
    enum ToneMapping { }
    const NoToneMapping: ToneMapping;
    const LinearToneMapping: ToneMapping;
    const ReinhardToneMapping: ToneMapping;
    const Uncharted2ToneMapping: ToneMapping;
    const CineonToneMapping: ToneMapping;

    // Mapping modes
    enum Mapping {}
    const UVMapping: Mapping;
    const CubeReflectionMapping: Mapping;
    const CubeRefractionMapping: Mapping;
    const EquirectangularReflectionMapping: Mapping;
    const EquirectangularRefractionMapping: Mapping;
    const SphericalReflectionMapping: Mapping;

    // Wrapping modes
    enum Wrapping {}
    const RepeatWrapping: Wrapping;
    const ClampToEdgeWrapping: Wrapping;
    const MirroredRepeatWrapping: Wrapping;

    // Filters
    enum TextureFilter {}
    const NearestFilter: TextureFilter;
    const NearestMipMapNearestFilter: TextureFilter;
    const NearestMipMapLinearFilter: TextureFilter;
    const LinearFilter: TextureFilter;
    const LinearMipMapNearestFilter: TextureFilter;
    const LinearMipMapLinearFilter: TextureFilter;

        // Interpolation
    enum InterpolationModes { }
    const InterpolateDiscrete: InterpolationModes;
    const InterpolateLinear: InterpolationModes;
    const InterpolateSmooth: InterpolationModes;

        // Interpolant ending modes
    enum InterpolationEndingModes { }
    const ZeroCurvatureEnding: InterpolationEndingModes;
    const ZeroSlopeEnding: InterpolationEndingModes;
    const WrapAroundEnding: InterpolationEndingModes;

        // Triangle Draw modes
    enum TrianglesDrawModes { }
    const TrianglesDrawModesMode: TrianglesDrawModes;
    const TriangleStripDrawMode: TrianglesDrawModes;
    const TriangleFanDrawMode: TrianglesDrawModes;

    // Texture Encodings
    enum TextureEncoding { }
    const LinearEncoding: TextureEncoding;
    const sRGBEncoding: TextureEncoding;
    const GammaEncoding: TextureEncoding;
    const RGBEEncoding: TextureEncoding;
    const LogLuvEncoding: TextureEncoding;
    const RGBM7Encoding: TextureEncoding;
    const RGBM16Encoding: TextureEncoding;
    const RGBDEncoding: TextureEncoding;

    // Data types
    enum TextureDataType {}
    const UnsignedByteType: TextureDataType;
    const ByteType: TextureDataType;
    const ShortType: TextureDataType;
    const UnsignedShortType: TextureDataType;
    const IntType: TextureDataType;
    const UnsignedIntType: TextureDataType;
    const FloatType: TextureDataType;
    const HalfFloatType: TextureDataType;

    // Pixel types
    enum PixelType {}
    const UnsignedShort4444Type: PixelType;
    const UnsignedShort5551Type: PixelType;
    const UnsignedShort565Type: PixelType;

    // Pixel formats
    enum PixelFormat {}
    const AlphaFormat: PixelFormat;
    const RGBFormat: PixelFormat;
    const RGBAFormat: PixelFormat;
    const LuminanceFormat: PixelFormat;
    const LuminanceAlphaFormat: PixelFormat;
    const RGBEFormat: PixelFormat;

    // Compressed texture formats
    // DDS / ST3C Compressed texture formats
    enum CompressedPixelFormat {}
    const RGB_S3TC_DXT1_Format: CompressedPixelFormat;
    const RGBA_S3TC_DXT1_Format: CompressedPixelFormat;
    const RGBA_S3TC_DXT3_Format: CompressedPixelFormat;
    const RGBA_S3TC_DXT5_Format: CompressedPixelFormat;

    // PVRTC compressed texture formats
    const RGB_PVRTC_4BPPV1_Format: CompressedPixelFormat;
    const RGB_PVRTC_2BPPV1_Format: CompressedPixelFormat;
    const RGBA_PVRTC_4BPPV1_Format: CompressedPixelFormat;
    const RGBA_PVRTC_2BPPV1_Format: CompressedPixelFormat;

    class AnimationClip {
      constructor(name?: string, duration?: number, tracks?: KeyframeTrack[]);

      name: string;
      tracks: KeyframeTrack[];
      duration: number;
      uuid: string;
      results: any[];

      resetDuration(): void;
      trim(): AnimationClip;
      optimize(): AnimationClip;

      static CreateFromMorphTargetSequence(name: string, morphTargetSequence: MorphTarget[], fps: number, noLoop: boolean): AnimationClip;
      static findByName(clipArray: AnimationClip, name: string): AnimationClip;
      static CreateClipsFromMorphTargetSequences(morphTargets: MorphTarget[], fps: number, noLoop: boolean): AnimationClip[];
      static parse(json: any): AnimationClip;
      static parseAnimation(animation: any, bones: Bone[], nodeName: string): AnimationClip;
      static toJSON(): any;
    }

    abstract class Interpolant {
      constructor(parameterPositions: any, samplesValues: any, sampleSize: number, resultBuffer?: any);

      parameterPositions: any;
      samplesValues: any;
      valueSize: number;
      resultBuffer: any;

      evaluate(time: number): any;
    }

    class CubicInterpolant extends Interpolant {
      constructor(parameterPositions: any, samplesValues: any, sampleSize: number, resultBuffer?: any);

      interpolate_(i1: number, t0: number, t: number, t1: number): any;
    }

    class DiscreteInterpolant extends Interpolant {
      constructor(parameterPositions: any, samplesValues: any, sampleSize: number, resultBuffer?: any);

      interpolate_(i1: number, t0: number, t: number, t1: number): any;
    }

    class LinearInterpolant extends Interpolant {
      constructor(parameterPositions: any, samplesValues: any, sampleSize: number, resultBuffer?: any);

      interpolate_(i1: number, t0: number, t: number, t1: number): any;
    }

    class QuaternionLinearInterpolant extends Interpolant {
      constructor(parameterPositions: any, samplesValues: any, sampleSize: number, resultBuffer?: any);

      interpolate_(i1: number, t0: number, t: number, t1: number): any;
    }

    class InterleavedBuffer {
      constructor(array: ArrayLike<number>, stride: number);

      array: ArrayLike<number>;
      stride: number;
      dynamic: boolean;
      updateRange: { offset: number; count: number };
      version: number;
      length: number;
      count: number;
      needsUpdate: boolean;

      setDynamic(dynamic: boolean): InterleavedBuffer;
      clone(): InterleavedBuffer;
      copy(source: InterleavedBuffer): InterleavedBuffer;
      copyAt(index1: number, attribute: InterleavedBufferAttribute, index2: number): InterleavedBuffer;
      set(value: ArrayLike<number>, index: number): InterleavedBuffer;
    }

    class InstancedInterleavedBuffer extends InterleavedBuffer {
      constructor(array: ArrayLike<number>, stride: number, meshPerAttribute?: number);

      meshPerAttribute: number;

      clone(): InstancedInterleavedBuffer;
      copy(source: InstancedInterleavedBuffer): InstancedInterleavedBuffer;
    }

    class InterleavedBufferAttribute {
      constructor(interleavedBuffer: InterleavedBuffer, itemSize: number, offset: number, normalized: boolean);

      uuid: string;
      data: InterleavedBuffer;
      itemSize: number;
      offset: number;
      count: number;
      normalized: boolean;
      array: any[];

      getX(index: number): number;
      setX(index: number, x: number): InterleavedBufferAttribute;
      getY(index: number): number;
      setY(index: number, y: number): InterleavedBufferAttribute;
      getZ(index: number): number;
      setZ(index: number, z: number): InterleavedBufferAttribute;
      getW(index: number): number;
      setW(index: number, z: number): InterleavedBufferAttribute;
      setXY(index: number, x: number, y: number): InterleavedBufferAttribute;
      setXYZ(index: number, x: number, y: number, z: number): InterleavedBufferAttribute;
      setXYZW(index: number, x: number, y: number, z: number, w: number): InterleavedBufferAttribute;

      length: number; // deprecated, use count instead
    }

    class Bone extends Object3D {
      constructor(skin: SkinnedMesh);

      skin: SkinnedMesh;

      clone(): Bone;
      copy(source: Bone): Bone;
    }

    class Box2 {
      min: Vector2;
      max: Vector2;

      constructor(min?: Vector2, max?: Vector2);

      center(optionalTarget?: Vector2): Vector2;
      clampPoint(point: Vector2, optionalTarget?: Vector2): Vector2;
      clone(): Box2;
      containsBox(box: Box2): boolean;
      containsPoint(point: Vector2): boolean;
      copy(box: Box2): Box2;
      distanceToPoint(point: Vector2): number;
      empty(): boolean;
      equals(box: Box2): boolean;
      expandByPoint(point: Vector2): Box2;
      expandByScalar(scalar: number): Box2;
      expandByVector(vector: Vector2): Box2;
      getParameter(point: Vector2): Vector2;
      intersect(box: Box2): Box2;
      isIntersectionBox(box: Box2): boolean;
      makeEmpty(): Box2;
      set(min: Vector2, max: Vector2): Box2;
      setFromCenterAndSize(center: Vector2, size: Vector2): Box2;
      setFromPoints(points: Vector2[]): Box2;
      size(optionalTarget?: Vector2): Vector2;
      translate(offset: Vector2): Box2;
      union(box: Box2): Box2;
    }

    class Box3 {
      min: Vector3;
      max: Vector3;

      constructor(min?: Vector3, max?: Vector3);

      applyMatrix4(matrix: Matrix4): Box3;
      center(): Vector3;
      clampPoint(point: Vector3, optionalTarget?: Vector3): Vector3;
      clone(): Box3;
      containsBox(box: Box3): boolean;
      containsPoint(point: Vector3): boolean;
      copy(box: Box3): Box3;
      distanceToPoint(point: Vector3): number;
      empty(): boolean;
      equals(box: Box3): boolean;
      expandByPoint(point: Vector3): Box3;
      expandByScalar(scalar: number): Box3;
      expandByVector(vector: Vector3): Box3;
      getBoundingSphere(optionalTarget?: Sphere): Sphere;
      getParameter(point: Vector3): Vector3;
      intersect(box: Box3): Box3;
      isIntersectionBox(box: Box3): boolean;
      makeEmpty(): Box3;
      set(min: Vector3, max: Vector3): Box3;
      setFromCenterAndSize(center: Vector3, size: Vector3): Box3;
      setFromObject(object: Object3D): Box3;
      setFromPoints(points: Vector3[]): Box3;
      size(optionalTarget?: Vector3): Vector3;
      translate(offset: Vector3): Box3;
      union(box: Box3): Box3;
    }

    class BufferAttribute {
      array: number[];
      itemSize: number;
      length: number;
      needsUpdate: boolean;

      constructor(array: any, itemSize: number);

      clone(): BufferAttribute;
      copyAt(index1: number, attribute: BufferAttribute, index2: number): void;
      set(value: number, offset?: number): BufferAttribute;
      setX(index: number, x: number): BufferAttribute;
      setY(index: number, y: number): BufferAttribute;
      setZ(index: number, z: number): BufferAttribute;
      setXY(index: number, x: number, y: number): BufferAttribute;
      setXYZ(index: number, x: number, y: number, z: number): BufferAttribute;
      setXYZW(index: number, x: number, y: number, z: number, w: number): BufferAttribute;
    }

    class DirectGeometry {
      constructor();

      id: number;
      uuid: string;
      name: string;
      type: string;
      indices: number[];
      vertices: Vector3[];
      normals: Vector3[];
      colors: Color[];
      uvs: Vector2[];
      uvs2: Vector2[];
      groups: Array<{start: number, materialIndex: number}>;
      morphTargets: MorphTarget[];
      skinWeights: number[];
      skinIndices: number[];
      boundingBox: Box3;
      boundingSphere: Sphere;
      verticesNeedUpdate: boolean;
      normalsNeedUpdate: boolean;
      colorsNeedUpdate: boolean;
      uvsNeedUpdate: boolean;
      groupsNeedUpdate: boolean;

      computeBoundingBox(): void;
      computeBoundingSphere(): void;
      computeGroups(geometry: Geometry): void;
      fromGeometry(geometry: Geometry): DirectGeometry;
      dispose(): void;

      // EventDispatcher mixins
      addEventListener(type: string, listener: (event: Event) => void): void;
      hasEventListener(type: string, listener: (event: Event) => void): void;
      removeEventListener(type: string, listener: (event: Event) => void): void;
      dispatchEvent(event: { type: string; [attachment: string]: any; }): void;
    }

    class PlaneBufferGeometry extends BufferGeometry {
      constructor(width: number, height: number, widthSegments?: number, heightSegments?: number);

      parameters: {
        width: number;
        height: number;
        widthSegments: number;
        heightSegments: number;
      };
    }

    class BufferGeometry {
      constructor();

      static MaxIndex: number;
      id: number;
      uuid: string;
      name: string;
      type: string;
      index: BufferAttribute;
      attributes: BufferAttribute|InterleavedBufferAttribute[];
      morphAttributes: any;
      groups: Array<{start: number, count: number, materialIndex?: number}>;
      boundingBox: Box3;
      boundingSphere: Sphere;
      drawRange: { start: number, count: number };
      addIndex(index: any): void;
      getIndex(): BufferAttribute;
      setIndex(index: BufferAttribute): void;
      addAttribute(name: string, attribute: BufferAttribute|InterleavedBufferAttribute): BufferGeometry;
      addAttribute(name: any, array: any, itemSize: any): any;
      getAttribute(name: string): BufferAttribute|InterleavedBufferAttribute;
      removeAttribute(name: string): BufferGeometry;
      addGroup(start: number, count: number, materialIndex?: number): void;
      clearGroups(): void;
      setDrawRange(start: number, count: number): void;
      applyMatrix(matrix: Matrix4): BufferGeometry;
      rotateX(angle: number): BufferGeometry;
      rotateY(angle: number): BufferGeometry;
      rotateZ(angle: number): BufferGeometry;
      translate(x: number, y: number, z: number): BufferGeometry;
      scale(x: number, y: number, z: number): BufferGeometry;
      lookAt(v: Vector3): void;
      center(): Vector3;
      setFromObject(object: Object3D): void;
      updateFromObject(object: Object3D): void;
      fromGeometry(geometry: Geometry, settings?: any): BufferGeometry;
      fromDirectGeometry(geometry: DirectGeometry): BufferGeometry;
      computeBoundingBox(): void;
      computeBoundingSphere(): void;
      computeVertexNormals(): void;
      merge(geometry: BufferGeometry, offset: number): BufferGeometry;
      normalizeNormals(): void;
      toNonIndexed(): BufferGeometry;
      toJSON(): any;
      clone(): BufferGeometry;
      copy(source: BufferGeometry): BufferGeometry;
      dispose(): void;

      // deprecated
      drawcalls: any;
      offsets: any;

      addDrawCall(start: any, count: any, indexOffset?: any): void;
      clearDrawCalls(): void;
    }

    class Camera extends Object3D {
      matrixWorldInverse: Matrix4;
      projectionMatrix: Matrix4;

      constructor();

      clone(recursive?: boolean): Object3D;
      getWorldDirection(optionalTarget?: Vector3): Vector3;
      lookAt(vector: Vector3): void;
      copy(source?: Object3D, recursive?: boolean): Object3D;
    }

    class Color {
      r: number;
      g: number;
      b: number;

      constructor(color?: Color | string | number);
      constructor(r: number, g: number, b: number);

      clone(): Color;
      copy(color: Color): Color;
      set(color: Color | string | number): Color;
      setHex(hex: number): Color;
      setHSL(h: number, s: number, l: number): Color;
      setRGB(r: number, g: number, b: number): Color;
      setStyle(style: string): Color;
    }

    class DataTexture extends Texture {
      constructor(
        data: ArrayBuffer | Int8Array | Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array,
        width: number,
        height: number,
        format: PixelFormat,
        type?: TextureDataType,
        mapping?: Mapping,
        wrapS?: Wrapping,
        wrapT?: Wrapping,
        magFilter?: TextureFilter,
        minFilter?: TextureFilter,
        anisotropy?: number,
        encoding?: TextureEncoding
      );

      image: { data: ImageData; width: number; height: number; };

      clone(): DataTexture;
      copy(source: DataTexture): DataTexture;
    }

    class Euler {
      x: number;
      y: number;
      z: number;
      order: string;

      constructor(x?: number, y?: number, z?: number, order?: string);

      setFromQuaternion(q: Quaternion, order?: string, update?: boolean): Euler;
    }

    class ExtrudeGeometry {
      constructor(shapes?: Shape | Shape[], options?: any);

      WorldUVGenerator: {
        generateSideWallUV(geometry: Geometry, indexA: number, indexB: number, indexC: number, indexD: number): Vector2[];
        generateTopUV(geometry: Geometry, indexA: number, indexB: number, indexC: number): Vector2[];
      };

      addShape(shape: Shape, options?: any): void;
      addShapeList(shapes: Shape[], options?: any): void;
    }

    class Face3 {
      a: number;
      b: number;
      c: number;
      color: Color;
      materialIndex: number;
      normal: Vector3;
      vertexColors: Color[];
      vertexNormals: Vector3[];
      vertexTangents: number[];

      constructor(a: number, b: number, c: number, normal?: Vector3 | Vector3[], color?: Color | Color[], materialIndex?: number);

      clone(): Face3;
    }

    interface MorphTarget {
      name: string;
      vertices: Vector3[];
    }

    interface MorphColor {
      name: string;
      colors: Color[];
    }

    interface MorphNormals {
      name: string;
      normals: Vector3[];
    }

    class Geometry {
      constructor();
      id: number;
      uuid: string;
      name: string;
      type: string;
      vertices: Vector3[];
      colors: Color[];
      faces: Face3[];
      faceVertexUvs: Vector2[][][];
      morphTargets: MorphTarget[];
      morphNormals: MorphNormals[];
      skinWeights: Vector4[];
      skinIndices: Vector4[];
      lineDistances: number[];
      boundingBox: Box3;
      boundingSphere: Sphere;
      verticesNeedUpdate: boolean;
      elementsNeedUpdate: boolean;
      uvsNeedUpdate: boolean;
      normalsNeedUpdate: boolean;
      colorsNeedUpdate: boolean;
      lineDistancesNeedUpdate: boolean;
      groupsNeedUpdate: boolean;
      applyMatrix(matrix: Matrix4): Geometry;
      rotateX(angle: number): Geometry;
      rotateY(angle: number): Geometry;
      rotateZ(angle: number): Geometry;
      translate(x: number, y: number, z: number): Geometry;
      scale(x: number, y: number, z: number): Geometry;
      lookAt(vector: Vector3): void;
      fromBufferGeometry(geometry: BufferGeometry): Geometry;
      center(): Vector3;
      normalize(): Geometry;
      computeFaceNormals(): void;
      computeVertexNormals(areaWeighted?: boolean): void;
      computeMorphNormals(): void;
      computeLineDistances(): void;
      computeBoundingBox(): void;
      computeBoundingSphere(): void;
      merge(geometry: Geometry, matrix: Matrix, materialIndexOffset?: number): void;
      mergeMesh(mesh: Mesh): void;
      mergeVertices(): number;
      sortFacesByMaterialIndex(): void;
      toJSON(): any;
      clone(): Geometry;
      copy(source: Geometry): Geometry;
      dispose(): void;

      // These properties do not exist in a normal Geometry class, but if you use the instance that was passed by JSONLoader, it will be added.
      bones: Bone[];
      animation: AnimationClip;
      animations: AnimationClip[];

      // EventDispatcher mixins
      addEventListener(type: string, listener: (event: Event) => void): void;
      hasEventListener(type: string, listener: (event: Event) => void): void;
      removeEventListener(type: string, listener: (event: Event) => void): void;
      dispatchEvent(event: { type: string; [attachment: string]: any; }): void;
    }

    class BoxGeometry extends Geometry {
      constructor(width: number, height: number, depth: number, widthSegments?: number, heightSegments?: number, depthSegments?: number);

      parameters: {
        width: number;
        height: number;
        depth: number;
        widthSegments: number;
        heightSegments: number;
        depthSegments: number;
      };

      clone(): BoxGeometry;
    }

    class CylinderBufferGeometry extends BufferGeometry {
      constructor(radiusTop?: number, radiusBottom?: number, height?: number, radialSegments?: number, heightSegments?: number, openEnded?: boolean, thetaStart?: number, thetaLength?: number);

      parameters: {
        radiusTop: number;
        radiusBottom: number;
        height: number;
        radialSegments: number;
        heightSegments: number;
        openEnded: boolean;
        thetaStart: number;
        thetaLength: number;
      };
    }

    class CylinderGeometry extends Geometry {
      constructor(radiusTop?: number, radiusBottom?: number, height?: number, radiusSegments?: number, heightSegments?: number, openEnded?: boolean, thetaStart?: number, thetaLength?: number);

      parameters: {
        radiusTop: number;
        radiusBottom: number;
        height: number;
        radialSegments: number;
        heightSegments: number;
        openEnded: boolean;
        thetaStart: number;
        thetaLength: number;
      };
    }

    class Group extends Object3D {
      constructor();
    }

    class KeyframeTrack {
      constructor(name: string, times: any[], values: any[], interpolation: InterpolationModes);

      name: string;
      times: any[];
      values: any[];

      ValueTypeName: string;
      TimeBufferType: Float32Array;
      ValueBufferType: Float32Array;

      DefaultInterpolation: InterpolationModes;

      InterpolantFactoryMethodDiscrete(result: any): DiscreteInterpolant;
      InterpolantFactoryMethodLinear(result: any): LinearInterpolant;
      InterpolantFactoryMethodSmooth(result: any): CubicInterpolant;

      setInterpolation(interpolation: InterpolationModes): void;
      getInterpolation(): InterpolationModes;

      getValuesize(): number;

      shift(timeOffset: number): KeyframeTrack;
      scale(timeScale: number): KeyframeTrack;
      trim(startTime: number, endTime: number): KeyframeTrack;
      validate(): boolean;
      optimize(): KeyframeTrack;

      static parse(json: any): KeyframeTrack;
      static toJSON(track: KeyframeTrack): any;
    }

    class Line3 {
    }

    interface LineBasicMaterialParameters extends MaterialParameters {
      color?: number|string;
      linewidth?: number;
      linecap?: string;
      linejoin?: string;
    }

    class LineBasicMaterial extends Material {
      constructor(parameters?: LineBasicMaterialParameters);

      color: Color;
      linewidth: number;
      linecap: string;
      linejoin: string;

      setValues(parameters: LineBasicMaterialParameters): void;
      clone(): LineBasicMaterial;
      copy(source: LineBasicMaterial): LineBasicMaterial;
    }

    interface LineDashedMaterialParameters extends MaterialParameters {
      color?: number|string;
      linewidth?: number;
      scale?: number;
      dashSize?: number;
      gapSize?: number;
      }

    class LineDashedMaterial extends Material {
      constructor(parameters?: LineDashedMaterialParameters);

      color: Color;
      linewidth: number;
      scale: number;
      dashSize: number;
      gapSize: number;

      setValues(parameters: LineDashedMaterialParameters): void;
      clone(): LineDashedMaterial;
      copy(source: LineDashedMaterial): LineDashedMaterial;
    }

    class Line extends Object3D {
      constructor(
        geometry?: Geometry | BufferGeometry,
        material?: LineDashedMaterial | LineBasicMaterial | ShaderMaterial,
        mode?: number
      );

      geometry: Geometry|BufferGeometry;
      material: Material; // LineDashedMaterial or LineBasicMaterial or ShaderMaterial

      raycast(raycaster: Raycaster, intersects: any): void;
      clone(): Line;
      copy(source: Line): Line;
    }

    class LineSegments extends Line {
      constructor(
        geometry?: Geometry | BufferGeometry,
        material?: LineDashedMaterial | LineBasicMaterial | ShaderMaterial,
        mode?: number
      );

      clone(): LineSegments;
      copy(source: LineSegments): LineSegments;
    }

    class SkeletonHelper extends LineSegments {
      constructor(bone: Object3D);

      bones: Bone[];
      root: Object3D;

      getBoneList(object: Object3D): Bone[];
      update(): void;
    }

    namespace Math {
        function degToRad(degree: number): number;
        function radToDeg(radians: number): number;
    }

    interface MaterialParameters {
      name?: string;
      side?: Side;
      opacity?: number;
      transparent?: boolean;
      blending?: Blending;
      blendSrc?: BlendingDstFactor;
      blendDst?: BlendingSrcFactor;
      blendEquation?: BlendingEquation;
      blendSrcAlpha?: number;
      blendDstAlpha?: number;
      blendEquationAlpha?: number;
      depthFunc?: DepthModes;
      depthTest?: boolean;
      depthWrite?: boolean;
      colorWrite?: boolean;
      precision?: number;
      polygonOffset?: boolean;
      polygonOffsetFactor?: number;
      polygonOffsetUnits?: number;
      alphaTest?: number;
      premultipliedAlpha?: boolean;
      overdraw?: number;
      visible?: boolean;
      fog?: boolean;
      lights?: boolean;
      shading?: Shading;
      vertexColors?: Colors;
    }

    class Material {
      id: number;
      uuid: string;
      name: string;
      type: string;
      side: Side;
      opacity: number;
      blending: Blending;
      blendSrc: BlendingDstFactor;
      blendDst: BlendingSrcFactor;
      blendEquation: BlendingEquation;
      blendSrcAlpha: number;
      blendDstAlpha: number;
      blendEquationAlpha: number;
      depthTest: boolean;
      depthWrite: boolean;
      colorWrite: boolean;
      polygonOffset: boolean;
      polygonOffsetFactor: number;
      polygonOffsetUnits: number;
      alphaTest: number;
      overdraw: number;
      visible: boolean;
      needsUpdate: boolean;

      constructor();

      clone(material?: Material): Material;
      copy(source: Material): Material;
      dispose(): void;
      setValues(parameters: MaterialParameters): void;
      toJSON(meta?: any): any;
      update(): void;
      // EventDispatcher mixins
      addEventListener(type: string, listener: (event: any) => void): void;
      dispatchEvent(event: { type: string; target: any; }): void;
      hasEventListener(type: string, listener: (event: any) => void): void;
      removeEventListener(type: string, listener: (event: any) => void): void;
    }

    interface Matrix {
      elements: Float32Array;
      identity(): Matrix;
      copy(m: Matrix): Matrix;
      multiplyScalar(s: number): Matrix;
      determinant(): number;
      getInverse(matrix: Matrix, throwOnInvertible?: boolean): Matrix;
      transpose(): Matrix;
      clone(): Matrix;
    }

    class Matrix3 implements Matrix {
      elements: Float32Array;

      constructor(n11?: number, n12?: number, n13?: number,
        n21?: number, n22?: number, n23?: number,
        n31?: number, n32?: number, n33?: number);

      applyToVector3Array(array: number[], offset?: number, length?: number): number[];
      clone(): Matrix3;
      copy(m: Matrix3): Matrix3;
      determinant(): number;
      flattenToArrayOffset(array: number[], offset: number): number[];
      fromArray(array: number[]): Matrix3;
      getInverse(matrix: Matrix3 | Matrix4, throwOnInvertible?: boolean): Matrix3;
      getNormalMatrix(m: Matrix4): Matrix3;
      identity(): Matrix3;
      multiplyScalar(s: number): Matrix3;
      set(n11: number, n12: number, n13: number,
        n21: number, n22: number, n23: number,
        n31: number, n32: number, n33: number): Matrix3;
      toArray(): number[];
      transpose(): Matrix3;
      transposeIntoArray(r: number[]): number[];
    }

    class Matrix4 {
      elements: Float32Array;

      constructor(n11?: number, n12?: number, n13?: number, n14?: number,
        n21?: number, n22?: number, n23?: number, n24?: number,
        n31?: number, n32?: number, n33?: number, n34?: number,
        n41?: number, n42?: number, n43?: number, n44?: number);

      applyToVector3Array(array: number[], offset?: number, length?: number): number[];
      clone(): Matrix4;
      compose(translation: Vector3, rotation: Quaternion, scale: Vector3): Matrix4;
      copy(m: Matrix4): Matrix4;
      copyPosition(m: Matrix4): Matrix4;
      decompose(translation?: Vector3, rotation?: Quaternion, scale?: Vector3): object[];
      determinant(): number;
      extractBasis(xAxis: Vector3, yAxis: Vector3, zAxis: Vector3): Matrix4;
      extractRotation(m: Matrix4): Matrix4;
      flattenToArrayOffset(array: number[], offset: number): number[];
      getInverse(m: Matrix4, throwOnInvertible?: boolean): Matrix4;
      getMaxScaleOnAxis(): number;
      identity(): Matrix4;
      lookAt(eye: Vector3, target: Vector3, up: Vector3): Matrix4;
      makeBasis(xAxis: Vector3, yAxis: Vector3, zAxis: Vector3): Matrix4;
      makeRotationAxis(axis: Vector3, angle: number): Matrix4;
      makeRotationFromEuler(euler: Euler): Matrix4;
      makeRotationFromQuaternion(q: Quaternion): Matrix4;
      makeRotationX(theta: number): Matrix4;
      makeRotationY(theta: number): Matrix4;
      makeRotationZ(theta: number): Matrix4;
      makeScale(x: number, y: number, z: number): Matrix4;
      makeTranslation(x: number, y: number, z: number): Matrix4;
      multiply(m: Matrix4): Matrix4;
      multiplyMatrices(a: Matrix4, b: Matrix4): Matrix4;
      multiplyScalar(s: number): Matrix4;
      multiplyToArray(a: Matrix4, b: Matrix4, r: number[]): Matrix4;
      scale(v: Vector3): Matrix4;
      set(n11: number, n12: number, n13: number, n14: number,
          n21: number, n22: number, n23: number, n24: number,
          n31: number, n32: number, n33: number, n34: number,
          n41: number, n42: number, n43: number, n44: number): Matrix4;
      setPosition(v: Vector3): Vector3;
      transpose(): Matrix4;
    }

    class Mesh extends Object3D {
      constructor(geometry?: Geometry | BufferGeometry, material?: Material);
      geometry: Geometry;
      material: Material;

      drawMode: TrianglesDrawModes;

      setDrawMode(drawMode: TrianglesDrawModes): void;
      updateMorphTargets(): void;
      getMorphTargetIndexByName(name: string): number;
      raycast(raycaster: Raycaster, intersects: any): void;
      clone(): Mesh;
      copy(source: Mesh): Mesh;
    }

    interface MeshBasicMaterialParameters extends MaterialParameters {
      color?: number|string;
      opacity?: number;
      map?: Texture;
      aoMap?: Texture;
      aoMapIntensity?: number;
      specularMap?: Texture;
      alphaMap?: Texture;
      envMap?: Texture;
      combine?: Combine;
      reflectivity?: number;
      refractionRatio?: number;
      shading?: Shading;
      wireframe?: boolean;
      wireframeLinewidth?: number;
      wireframeLinecap?: string;
      wireframeLinejoin?: string;
      skinning?: boolean;
      morphTargets?: boolean;
  }

    class MeshBasicMaterial extends Material {
      constructor(parameters?: MeshBasicMaterialParameters);

      color: Color;
      map: Texture;
      aoMap: Texture;
      aoMapIntensity: number;
      specularMap: Texture;
      alphaMap: Texture;
      envMap: Texture;
      combine: Combine;
      reflectivity: number;
      refractionRatio: number;
      shading: Shading;
      wireframe: boolean;
      wireframeLinewidth: number;
      wireframeLinecap: string;
      wireframeLinejoin: string;
      skinning: boolean;
      morphTargets: boolean;

      setValues(parameters: MeshBasicMaterialParameters): void;
      clone(): MeshBasicMaterial;
      copy(source: MeshBasicMaterial): MeshBasicMaterial;
    }

    interface MeshDepthMaterialParameters extends MaterialParameters {
      wireframe?: boolean;
      wireframeLinewidth?: number;
    }

    class MeshDepthMaterial extends Material {
      constructor(parameters?: MeshDepthMaterialParameters);

      wireframe: boolean;
      wireframeLinewidth: number;

      setValues(parameters: MeshDepthMaterialParameters): void;
      clone(): MeshDepthMaterial;
      copy(source: MeshDepthMaterial): MeshDepthMaterial;
    }

    interface MeshLambertMaterialParameters extends MaterialParameters {
      color?: number|string;
      emissive?: number|string;
      emissiveIntensity?: number;
      emissiveMap?: Texture;
      map?: Texture;
      lighhtMap?: Texture;
      lightMapIntensity?: number;
      aoMap?: Texture;
      aoMapIntensity?: number;
      specularMap?: Texture;
      alphaMap?: Texture;
      envMap?: Texture;
      combine?: Combine;
      reflectivity?: number;
      refractionRatio?: number;
      wireframe?: boolean;
      wireframeLinewidth?: number;
      wireframeLinecap?: string;
      wireframeLinejoin?: string;
      skinning?: boolean;
      morphTargets?: boolean;
      morphNormals?: boolean;
    }

    class MeshLambertMaterial extends Material {
      constructor(parameters?: MeshLambertMaterialParameters);

      color: Color;
      emissive: number|string;
      emissiveIntensity: number;
      emissiveMap: Texture;
      map: Texture;
      lighhtMap: Texture;
      lightMapIntensity: number;
      aoMap: Texture;
      aoMapIntensity: number;
      specularMap: Texture;
      alphaMap: Texture;
      envMap: Texture;
      combine: Combine;
      reflectivity: number;
      refractionRatio: number;
      wireframe: boolean;
      wireframeLinewidth: number;
      wireframeLinecap: string;
      wireframeLinejoin: string;
      skinning: boolean;
      morphTargets: boolean;
      morphNormals: boolean;

      setValues(parameters: MeshLambertMaterialParameters): void;
      clone(): MeshLambertMaterial;
      copy(source: MeshLambertMaterial): MeshLambertMaterial;
    }

    interface MeshStandardMaterialParameters extends MaterialParameters {
      color?: number|string;
      roughness?: number;
      metalness?: number;
      map?: Texture;
      lighhtMap?: Texture;
      lightMapIntensity?: number;
      aoMap?: Texture;
      aoMapIntensity?: number;
      emissive?: Color;
      emissiveIntensity?: number;
      emissiveMap?: Texture;
      bumpMap?: Texture;
      bumpScale?: number;
      normalMap?: Texture;
      normalScale?: number;
      displacementMap?: Texture;
      displacementScale?: number;
      displacementBias?: number;
      roughnessMap?: Texture;
      metalMap?: Texture;
      alphaMap?: Texture;
      envMap?: Texture;
      envMapIntensity?: number;
      refractionRatio?: number;
      wireframe?: boolean;
      wireframeLinewidth?: number;
      skinning?: boolean;
      morphTargets?: boolean;
      morphNormals?: boolean;
    }

    class MeshStandardMaterial extends Material {
      constructor(parameters?: MeshStandardMaterialParameters);

      defines: any;
      color: Color;
      roughness: number;
      metalness: number;
      map: Texture;
      lighhtMap: Texture;
      lightMapIntensity: number;
      aoMap: Texture;
      aoMapIntensity: number;
      emissive: Color;
      emissiveIntensity: number;
      emissiveMap: Texture;
      bumpMap: Texture;
      bumpScale: number;
      normalMap: Texture;
      normalScale: number;
      displacementMap: Texture;
      displacementScale: number;
      displacementBias: number;
      roughnessMap: Texture;
      metalMap: Texture;
      alphaMap: Texture;
      envMap: Texture;
      envMapIntensity: number;
      refractionRatio: number;
      wireframe: boolean;
      wireframeLinewidth: number;
      skinning: boolean;
      morphTargets: boolean;
      morphNormals: boolean;

      setValues(parameters: MeshStandardMaterialParameters): void;
      clone(): MeshStandardMaterial;
      copy(source: MeshStandardMaterial): MeshStandardMaterial;
    }

    interface MeshNormalMaterialParameters extends MaterialParameters {
      /** Render geometry as wireframe. Default is false (i.e. render as smooth shaded). */
      wireframe?: boolean;
      /** Controls wireframe thickness. Default is 1. */
      wireframeLinewidth?: number;
      morphTargets?: boolean;
    }

    class MeshNormalMaterial extends Material {
      constructor(parameters?: MeshNormalMaterialParameters);

      wireframe: boolean;
      wireframeLinewidth: number;
      morphTargets: boolean;

      setValues(parameters: MeshNormalMaterialParameters): void;
      clone(): MeshNormalMaterial;
      copy(source: MeshNormalMaterial): MeshNormalMaterial;
    }

    interface MeshPhongMaterialParameters extends MaterialParameters {
      /** geometry color in hexadecimal. Default is 0xffffff. */
      color?: number|string;
      specular?: number;
      shininess?: number;
      opacity?: number;
      map?: Texture;
      lightMap?: Texture;
      lightMapIntensity?: number;
      aoMap?: Texture;
      aoMapIntensity?: number;
      emissive?: number;
      emissiveIntensity?: number;
      emissiveMap?: Texture;
      bumpMap?: Texture;
      bumpScale?: number;
      normalMap?: Texture;
      normalScale?: Vector2;
      displacementMap?: Texture;
      displacementScale?: number;
      displacementBias?: number;
      specularMap?: Texture;
      alphaMap?: Texture;
      envMap?: Texture;
      combine?: Combine;
      reflectivity?: number;
      refractionRatio?: number;
      wireframe?: boolean;
      wireframeLinewidth?: number;
      wireframeLinecap?: string;
      wireframeLinejoin?: string;
      skinning?: boolean;
      morphTargets?: boolean;
      morphNormals?: boolean;
    }

    class MeshPhongMaterial extends Material {
      constructor(parameters?: MeshPhongMaterialParameters);

      color: Color; // diffuse
      specular: Color;
      shininess: number;
      map: Texture;
      lightMap: Texture;
      lightMapIntensity: number;
      aoMap: Texture;
      aoMapIntensity: number;
      emissive: Color;
      emissiveIntensity: number;
      emissiveMap: Texture;
      bumpMap: Texture;
      bumpScale: number;
      normalMap: Texture;
      normalScale: Vector2;
      displacementMap: Texture;
      displacementScale: number;
      displacementBias: number;
      specularMap: Texture;
      alphaMap: Texture;
      envMap: Texture;
      combine: Combine;
      reflectivity: number;
      refractionRatio: number;
      wireframe: boolean;
      wireframeLinewidth: number;
      wireframeLinecap: string;
      wireframeLinejoin: string;
      skinning: boolean;
      morphTargets: boolean;
      morphNormals: boolean;
      metal: boolean; // deprecated

      setValues(parameters: MeshPhongMaterialParameters): void;
      clone(): MeshPhongMaterial;
      copy(source: MeshPhongMaterial): MeshPhongMaterial;
    }

    interface MeshPhysicalMaterialParameters extends MeshStandardMaterialParameters {
      reflectivity?: number;
      clearCoat?: number;
      clearCoatRoughness?: number;
    }

    class MeshPhysicalMaterial extends MeshStandardMaterial {
      constructor(parameters: MeshPhysicalMaterialParameters);

      defines: any;
      reflectivity: number;
      clearCoat: number;
      clearCoatRoughness: number;
    }

    // MultiMaterial does not inherit the Material class in the original code. However, it should treat as Material class.
    // See tests/canvas/canvas_materials.ts.
    class MultiMaterial extends Material {
      constructor(materials?: Material[]);

      materials: Material[];

      toJSON(meta: any): any;
      clone(): MultiMaterial;
    }

    class MeshFaceMaterial extends MultiMaterial {} // deprecated, use MultiMaterial

    class Object3D {
      constructor();
      id: number;
      uuid: string;
      name: string;
      type: string;
      parent: Object3D;
      children: Object3D[];
      up: Vector3;
      position: Vector3;
      rotation: Euler;
      quaternion: Quaternion;
      scale: Vector3;
      modelViewMatrix: Matrix4;
      normalMatrix: Matrix3;
      matrix: Matrix4;
      matrixWorld: Matrix4;
      matrixAutoUpdate: boolean;
      matrixWorldNeedsUpdate: boolean;
      // layers: Layers;
      visible: boolean;
      castShadow: boolean;
      receiveShadow: boolean;
      frustumCulled: boolean;
      renderOrder: number;
      userData: any;
      static DefaultUp: Vector3;
      static DefaultMatrixAutoUpdate: boolean;
      applyMatrix(matrix: Matrix4): void;
      setRotationFromAxisAngle(axis: Vector3, angle: number): void;
      setRotationFromEuler(euler: Euler): void;
      setRotationFromMatrix(m: Matrix4): void;
      setRotationFromQuaternion(q: Quaternion): void;
      rotateOnAxis(axis: Vector3, angle: number): Object3D;
      rotateX(angle: number): Object3D;
      rotateY(angle: number): Object3D;
      rotateZ(angle: number): Object3D;
      translateOnAxis(axis: Vector3, distance: number): Object3D;
      translateX(distance: number): Object3D;
      translateY(distance: number): Object3D;
      translateZ(distance: number): Object3D;
      localToWorld(vector: Vector3): Vector3;
      worldToLocal(vector: Vector3): Vector3;
      lookAt(vector: Vector3): void;
      add(object: Object3D): void;
      remove(object: Object3D): void;
      getObjectById(id: number): Object3D;
      getObjectByName(name: string): Object3D;
      getObjectByProperty(name: string, value: string): Object3D;
      getWorldPosition(optionalTarget?: Vector3): Vector3;
      getWorldQuaternion(optionalTarget?: Quaternion): Quaternion;
      getWorldRotation(optionalTarget?: Euler): Euler;
      getWorldScale(optionalTarget?: Vector3): Vector3;
      getWorldDirection(optionalTarget?: Vector3): Vector3;
      raycast(raycaster: Raycaster, intersects: any): void;
      traverse(callback: (object: Object3D) => any): void;
      traverseVisible(callback: (object: Object3D) => any): void;
      traverseAncestors(callback: (object: Object3D) => any): void;
      updateMatrix(): void;
      updateMatrixWorld(force: boolean): void;
      toJSON(meta?: { geometries: any, materials: any, textures: any, images: any }): any;
      clone(recursive?: boolean): Object3D;
      copy(source: Object3D, recursive?: boolean): Object3D;
      // deprecated
      eulerOrder: string;
      getChildByName(name: string): Object3D;
      translate(distance: number, axis: Vector3): Object3D;
    }

    class OrthographicCamera extends Camera {
      constructor(left: number, right: number, top: number, bottom: number, near?: number, far?: number);

      zoom: number;
      view: {
        fullWidth: number,
        fullHeight: number,
        offsetX: number,
        offsetY: number,
        width: number,
        height: number
      };

      left: number;
      right: number;
      top: number;
      bottom: number;
      near: number;
      far: number;

      updateProjectionMatrix(): void;
      setViewOffset(fullWidth: number, fullHeight: number, offsetX: number, offsetY: number, width: number, height: number): void;
      clearViewOffset(): void;
      clone(): OrthographicCamera;
      copy(source: OrthographicCamera): OrthographicCamera;
      toJSON(meta?: any): any;
    }

    class Path {
        lineTo(x: number, y: number): void;
        moveTo(x: number, y: number): void;
    }

    class PerspectiveCamera extends Camera {
      constructor(fov?: number, aspect?: number, near?: number, far?: number);
      zoom: number;
      fov: number;
      aspect: number;
      near: number;
      far: number;
      focus: number;
      view: {
        fullWidth: number,
        fullHeight: number,
        offsetX: number,
        offsetY: number,
        width: number,
        height: number
      };
      filmGauge: number;
      filmOffset: number;
      setFocalLength(focalLength: number): void;
      getFocalLength(): number;
      getEffectiveFOV(): number;
      getFilmWidth(): number;
      getFilmHeight(): number;
      setViewOffset(fullWidth: number, fullHeight: number, x: number, y: number, width: number, height: number): void;
      clearViewOffset(): void;
      updateProjectionMatrix(): void;
      clone(): PerspectiveCamera;
      toJSON(meta?: any): any;

      // deprecated
      setLens(focalLength: number, frameHeight?: number): void;
    }

    class Plane {
      constant: number;
      normal: Vector3;

      constructor(normal?: Vector3, constant?: number);

      applyMatrix4(matrix: Matrix4, optionalNormalMatrix?: Matrix3): Plane;
      clone(): Plane;
      coplanarPoint(optionalTarget?: boolean): Vector3;
      copy(plane: Plane): Plane;
      distanceToPoint(point: Vector3): number;
      distanceToSphere(sphere: Sphere): number;
      equals(plane: Plane): boolean;
      intersectLine(line: Line3, optionalTarget?: Vector3): Vector3;
      isIntersectionLine(line: Line3): boolean;
      negate(): Plane;
      normalize(): Plane;
      orthoPoint(point: Vector3, optionalTarget?: Vector3): Vector3;
      projectPoint(point: Vector3, optionalTarget?: Vector3): Vector3;
      set(normal: Vector3, constant: number): Plane;
      setComponents(x: number, y: number, z: number, w: number): Plane;
      setFromNormalAndCoplanarPoint(normal: Vector3, point: Vector3): Plane;
      setFromCoplanarPoints(a: Vector3, b: Vector3, c: Vector3): Plane;
      translate(offset: Vector3): Plane;
    }

    class PointCloud extends Object3D {
      constructor(geometry: Geometry | BufferGeometry, material?: PointCloudMaterial);
      geometry: Geometry | BufferGeometry;
      material: Material;
      raycast(raycaster: Raycaster, intersects: any): void;
      clone(): PointCloud;
      copy(source: PointCloud): PointCloud;
    }

    class PointCloudMaterial extends Material {
      constructor(parameters: {
        color?: string;
        fog?: boolean;
        opacity?: number;
        size?: number;
        vertexColors?: number;
      });
    }

    class Quaternion {
      x: number;
      y: number;
      z: number;
      w: number;

      constructor(x?: number, y?: number, z?: number, w?: number);

      static slerp(qa: Quaternion, qb: Quaternion, qm: Quaternion, t: number): Quaternion;

      clone(): Quaternion;
      conjugate(): Quaternion;
      copy(q: Quaternion): Quaternion;
      dot(v: Vector3): number;
      equals(v: Quaternion): boolean;
      fromArray(xyzw: number[], offset?: number): Quaternion;
      inverse(): Quaternion;
      length(): number;
      lengthSq(): number;
      multiply(q: Quaternion): Quaternion;
      multiplyQuaternions(a: Quaternion, b: Quaternion): Quaternion;
      multiplyVector3(vector: Vector3): Vector3;
      normalize(): Quaternion;
      onChange: () => void;
      set(x: number, y: number, z: number, w: number): Quaternion;
      setFromAxisAngle(axis: Vector3, angle: number): Quaternion;
      setFromEuler(euler: Euler, update?: boolean): Quaternion;
      setFromRotationMatrix(m: Matrix4): Quaternion;
      setFromUnitVectors(vFrom: Vector3, vTo: Vector3): Quaternion;
      slerp(qb: Quaternion, t: number): Quaternion;
      toArray(xyzw?: number[], offset?: number): number[];
    }

    class Ray {
      origin: Vector3;
      direction: Vector3;

      constructor(origin?: Vector3, direction?: Vector3);

      applyMatrix4(matrix4: Matrix4): Ray;
      at(t: number, optionalTarget?: Vector3): Vector3;
      clone(): Ray;
      closestPointToPoint(point: Vector3, optionalTarget?: Vector3): Vector3;
      copy(ray: Ray): Ray;
      distanceSqToSegment(
        v0: Vector3,
        v1: Vector3,
        optionalPointOnRay?: Vector3,
        optionalPointOnSegment?: Vector3
      ): number;
      distanceToPlane(plane: Plane): number;
      distanceToPoint(point: Vector3): number;
      equals(ray: Ray): boolean;
      isIntersectionSphere(sphere: Sphere): boolean;
      intersectSphere(sphere: Sphere, optionalTarget?: Vector3): Vector3;
      isIntersectionPlane(plane: Plane): boolean;
      intersectPlane(plane: Plane, optionalTarget?: Vector3): Vector3;
      intersectBox(box: Box3, optionalTarget?: Vector3): Vector3;
      intersectTriangle(
        a: Vector3,
        b: Vector3,
        c: Vector3,
        backfaceCulling: boolean,
        optionalTarget?: Vector3
      ): Vector3;
      isIntersectionBox(box: Box3): boolean;
      recast(t: number): Ray;
      set(origin: Vector3, direction: Vector3): Ray;
    }

    interface Intersection {
      distance: number;
      distanceToRay: number;
      point: Vector3;
      index: number;
      face: Face3;
      faceIndex: number;
      object: Object3D;
    }

    interface RaycasterParameters {
      Sprite?: any;
      Mesh?: any;
      PointCloud?: any;
      LOD?: any;
      Line?: any;
    }

    class Raycaster {
      ray: Ray;
      near: number;
      far: number;
      params: RaycasterParameters;
      precision: number;
      linePrecision: number;

      constructor(
        origin?: Vector3,
        direction?: Vector3,
        near?: number,
        far?: number
      );

      intersectObject(object: Object3D, recursive?: boolean): Intersection[];
      intersectObjects(objects: Object3D[], recursive?: boolean): Intersection[];
      set(origin: Vector3, direction: Vector3): void;
      setFromCamera(coords: { x: number; y: number }, camera: Camera): void;
    }

    class Scene extends Object3D {
      constructor();
      fog: Fog;
      overrideMaterial: Material;
      autoUpdate: boolean;
      background: any;

      copy(source: Scene, recursive?: boolean): Scene;
    }

    interface Fog {
      name: string;
      color: Color;
      clone(): Fog;
    }

    class Fog implements Fog {
      constructor(hex: number, near?: number, far?: number);
      name: string;
      color: Color;
      near: number;
      far: number;
      clone(): Fog;
    }

    class Light extends Object3D {
      constructor(hex?: number|string, intensity?: number);

      color: Color;
      intensity: number;
      receiveShadow: boolean;
      shadow: LightShadow;
      shadowCameraFov: any; // deprecated, use shadow.camera.fov
      shadowCameraLeft: any; // deprecated, use shadow.camera.left
      shadowCameraRight: any; // deprecated, use shadow.camera.right
      shadowCameraTop: any; // deprecated, use shadow.camera.top
      shadowCameraBottom: any; // deprecated, use shadow.camera.bottom
      shadowCameraNear: any; // deprecated, use shadow.camera.near
      shadowCameraFar: any; // deprecated, use shadow.camera.far
      shadowBias: any; // deprecated, use shadow.bias
      shadowMapWidth: any; // deprecated, use shadow.mapSize.width
      shadowMapHeight: any; // deprecated, use shadow.mapSize.height

      copy(source: Light): Light;
      clone(recursive?: boolean): Light;
    }

    class LightShadow {
      constructor(camera: Camera);

      camera: Camera;
      bias: number;
      radius: number;
      mapSize: Vector2;
      map: any;
      matrix: Matrix4;

      copy(source: LightShadow): LightShadow;
      clone(recursive?: boolean): LightShadow;
    }

    class AmbientLight extends Light {
      constructor(hex?: number|string, intensity?: number);
      castShadow: boolean;

      copy(source: AmbientLight): AmbientLight;
      clone(recursive?: boolean): AmbientLight;
    }

    class DirectionalLight extends Light {
      constructor(hex?: number|string, intensity?: number);

      target: Object3D;
      intensity: number;
      shadow: LightShadow;
      copy(source: DirectionalLight): DirectionalLight;
      clone(recursive?: boolean): HemisphereLight;
    }

    class DirectionalLightShadow extends LightShadow {}

    class HemisphereLight extends Light {
      constructor(skyColorHex?: number|string, groundColorHex?: number|string, intensity?: number);

      groundColor: Color;
      intensity: number;
      copy(source: HemisphereLight): HemisphereLight;
      clone(recursive?: boolean): HemisphereLight;
    }

    class PointLight extends Light {
      constructor(hex?: number|string, intensity?: number, distance?: number, decay?: number);

      intensity: number;
      distance: number;
      decay: number;
      shadow: LightShadow;
      power: number;

      copy(source: PointLight): PointLight;
      clone(recursive?: boolean): PointLight;
    }

    class SpotLight extends Light {
      constructor(hex?: number|string, intensity?: number, distance?: number, angle?: number, exponent?: number, decay?: number);

      target: Object3D;
      intensity: number;
      distance: number;
      angle: number;
      exponent: number;
      decay: number;
      shadow: SpotLightShadow;
      power: number;
      penumbra: number;
      clone(recursive?: boolean): SpotLight;
      copy(source: PointLight): SpotLight;
    }

    class SpotLightShadow extends LightShadow {
      update(light: Light): void;
    }

    class Shape extends Path {
    }

    interface ShaderMaterialParameters extends MaterialParameters {
      defines?: any;
      uniforms?: any;
      vertexShader?: string;
      fragmentShader?: string;
      lineWidth?: number;
      wireframe?: boolean;
      wireframeLinewidth?: number;
      lights?: boolean;
      clipping?: boolean;
      skinning?: boolean;
      morphTargets?: boolean;
      morphNormals?: boolean;
      attributes?: any;
    }

    class ShaderMaterial extends Material {
      constructor(parameters?: ShaderMaterialParameters);

      defines: any;
      uniforms: any; // type should be  { [uniform: string]: { value: any }; };    but gives "Index signature is missing in type" error during compilation
      vertexShader: string;
      fragmentShader: string;
      linewidth: number;
      wireframe: boolean;
      wireframeLinewidth: number;
      lights: boolean;
      clipping: boolean;
      skinning: boolean;
      morphTargets: boolean;
      morphNormals: boolean;
      derivatives: any; // deprecated, use extensions.derivatives
      extensions: { derivatives: boolean; fragDepth: boolean; drawBuffers: boolean; shaderTextureLOD: boolean };
      defaultAttributeValues: any;
      index0AttributeName: string;

      setValues(parameters: ShaderMaterialParameters): void;
      clone(): ShaderMaterial;
      copy(source: ShaderMaterial): ShaderMaterial;
      toJSON(meta: any): any;
    }

    class RawShaderMaterial extends ShaderMaterial {
      constructor(parameters?: ShaderMaterialParameters);
    }

    class Skeleton {
      constructor(bones: Bone[], boneInverses?: Matrix4[], useVertexTexture?: boolean);

      useVertexTexture: boolean;
      identityMatrix: Matrix4;
      bones: Bone[];
      boneTextureWidth: number;
      boneTextureHeight: number;
      boneMatrices: Float32Array;
      boneTexture: DataTexture;
      boneInverses: Matrix4[];

      calculateInverses(bone: Bone): void;
      pose(): void;
      update(): void;
      clone(): Skeleton;
    }

    class SkinnedMesh extends Mesh {
      constructor(geometry?: Geometry|BufferGeometry,
                  material?: MeshBasicMaterial |
                             MeshDepthMaterial |
                             MultiMaterial |
                             MeshLambertMaterial |
                             MeshNormalMaterial |
                             MeshPhongMaterial |
                             ShaderMaterial,
                  useVertexTexture?: boolean);

      bindMode: string;
      bindMatrix: Matrix4;
      bindMatrixInverse: Matrix4;
      skeleton: Skeleton;

      bind(skeleton: Skeleton, bindMatrix?: Matrix4): void;
      pose(): void;
      normalizeSkinWeights(): void;
      updateMatrixWorld(force?: boolean): void;
      clone(): SkinnedMesh;
      copy(source: SkinnedMesh): SkinnedMesh;
    }

    class Sphere {
      center: Vector3;
      radius: number;

      constructor(center?: Vector3, radius?: number);

      applyMatrix4(matrix: Matrix4): Sphere;
      clampPoint(point: Vector3, optionalTarget?: Vector3): Vector3;
      clone(): Sphere;
      containsPoint(point: Vector3): boolean;
      copy(sphere: Sphere): Sphere;
      distanceToPoint(point: Vector3): number;
      empty(): boolean;
      equals(sphere: Sphere): boolean;
      getBoundingBox(optionalTarget?: Box3): Box3;
      intersectsSphere(sphere: Sphere): boolean;
      set(center: Vector3, radius: number): Sphere;
      setFromPoints(points: Vector3[], optionalCenter?: Vector3): Sphere;
      translate(offset: Vector3): Sphere;
    }

    interface Vector {
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
      distanceTo?(v: Vector): number;
      distanceToSquared?(v: Vector): number;
      setLength(l: number): Vector;
      lerp(v: Vector, alpha: number): Vector;
      equals(v: Vector): boolean;
      clone(): Vector;
    }

    class Curve<T extends Vector> {
      getPoint(t: number): T;
      getPointAt(u: number): T;
      getPoints(divisions?: number): T[];
      getSpacedPoints(divisions?: number): T[];
      getLength(): number;
      getLengths(divisions?: number): number[];
      updateArcLengths(): void;
      getUtoTmapping(u: number, distance: number): number;
      getTangent(t: number): T;
      getTangentAt(u: number): T;
      static create(constructorFunc: any, getPointFunc: any): any;
    }

    class CatmullRomCurve3 extends Curve<Vector3> {
      constructor(points?: Vector3[]);

      points: Vector3[];
      getPoint(t: number): Vector3;
    }

    class ClosedSplineCurve3 extends CatmullRomCurve3 {} // deprecated, use CatmullRomCurve3
    class SplineCurve3 extends CatmullRomCurve3 {} // will be deprecated, use CatmullRomCurve3

    class LoadingManager {
      constructor(onLoad?: () => void, onProgress?: (url: string, loaded: number, total: number) => void, onError?: () => void);

      onStart: () => void;
      onLoad: () => void;
      onProgress: (item: any, loaded: number, total: number) => void;
      onError: () => void;
      itemStart(url: string): void;
      itemEnd(url: string): void;
      itemError(url: string): void;
    }

    class Loader {
      constructor();

      onLoadStart: () => void;
      onLoadProgress: () => void;
      onLoadComplete: () => void;
      crossOrigin: string;
      extractUrlBase(url: string): string;
      initMaterials(materials: Material[], texturePath: string): Material[];
      createMaterial(m: Material, texturePath: string, crossOrigin?: string): boolean;
      static Handlers: LoaderHandler;
    }

    interface LoaderHandler {
      handlers: Array<RegExp | Loader>;

      add(regex: RegExp, loader: Loader): void;
      get(file: string): Loader;
    }

    class ImageLoader {
      constructor(manager?: LoadingManager);

      manager: LoadingManager;
      crossOrigin: string;
      path: string;
      load(url: string, onLoad?: (image: HTMLImageElement) => void, onProgress?: (event: any) => void, onError?: (event: any) => void): HTMLImageElement;
      setCrossOrigin(crossOrigin: string): ImageLoader;
      setPath(value: any): ImageLoader;
    }

    class TextureLoader {
      constructor(manager?: LoadingManager);

      manager: LoadingManager;
      crossOrigin: string;
      path: string;
      load(url: string, onLoad?: (texture: Texture) => void): Texture;
      setCrossOrigin(crossOrigin: string): TextureLoader;
      setPath(path: string): TextureLoader;
    }

    class Texture {
      static DEFAULT_IMAGE: any;
      static DEFAULT_MAPPING: any;

      constructor(
        image: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement,
        mapping?: Mapping,
        wrapS?: Wrapping,
        wrapT?: Wrapping,
        magFilter?: TextureFilter,
        minFilter?: TextureFilter,
        format?: PixelFormat,
        type?: TextureDataType,
        anisotropy?: number
      );

      id: number;
      uuid: string;
      name: string;
      sourceFile: string;
      image: any; // HTMLImageElement or ImageData ;
      mipmaps: ImageData[];
      mapping: Mapping;
      wrapS: Wrapping;
      wrapT: Wrapping;
      magFilter: TextureFilter;
      minFilter: TextureFilter;
      anisotropy: number;
      format: PixelFormat;
      type: TextureDataType;
      offset: Vector2;
      repeat: Vector2;
      generateMipmaps: boolean;
      premultiplyAlpha: boolean;
      flipY: boolean;
      unpackAlignment: number;
      needsUpdate: boolean;
      onUpdate: () => void;
      clone(): Texture;
      copy(source: Texture): Texture;
      dispose(): void;
      update(): void;
      // EventDispatcher mixins
      addEventListener(type: string, listener: (event: any) => void): void;
      dispatchEvent(event: { type: string; target: any }): void;
      hasEventListener(type: string, listener: (event: any) => void): void;
      removeEventListener(type: string, listener: (event: any) => void): void;
    }

    class TransformControls {
      constructor(camera: Camera, domElement: HTMLElement, mode: string, includeAxis?: boolean);

      visible: boolean;
      attach(object: any): void;
      detach(object: any): void;
      onPointerDown(event: any): boolean;
      onPointerHover(event: any): boolean;
      onPointerMove(event: any): boolean;
      onPointerUp(event: any): boolean;
      update(highlight?: boolean): void;
    }

    class Vector2 implements Vector {
      constructor(x?: number, y?: number);

      x: number;
      y: number;
      add(v: Vector2): Vector2;
      addScalar(s: number): Vector2;
      addVectors(a: Vector2, b: Vector2): Vector2;
      ceil(): Vector2;
      clamp(min: Vector2, max: Vector2): Vector2;
      clampScalar(min: number, max: number): Vector2;
      clone(): Vector2;
      copy(v: Vector2): Vector2;
      distanceTo(v: Vector2): number;
      distanceToSquared(v: Vector2): number;
      divide(v: Vector2): Vector2;
      divideScalar(s: number): Vector2;
      dot(v: Vector2): number;
      equals(v: Vector2): boolean;
      floor(): Vector2;
      fromArray(xy: number[], offset?: number): Vector2;
      fromAttribute(attribute: BufferAttribute, index: number, offset?: number): Vector2;
      getComponent(index: number): number;
      length(): number;
      lengthSq(): number;
      lerp(v: Vector2, alpha: number): Vector2;
      lerpVectors(v1: Vector2, v2: Vector2, alpha: number): Vector2;
      max(v: Vector2): Vector2;
      min(v: Vector2): Vector2;
      multiply(v: Vector2): Vector2;
      multiplyScalar(s: number): Vector2;
      negate(): Vector2;
      normalize(): Vector2;
      round(): Vector2;
      roundToZero(): Vector2;
      set(x: number, y: number): Vector2;
      setComponent(index: number, value: number): void;
      setLength(l: number): Vector2;
      setX(x: number): Vector2;
      setY(y: number): Vector2;
      sub(v: Vector2): Vector2;
      subVectors(a: Vector2, b: Vector2): Vector2;
      toArray(xy?: number[], offset?: number): number[];
    }

    class Vector3 implements Vector {
      constructor(x?: number, y?: number, z?: number);

      x: number;
      y: number;
      z: number;
      add(a: Vector3): Vector3;
      addScalar(s: number): Vector3;
      addVectors(a: Vector3, b: Vector3): Vector3;
      angleTo(v: Vector3): number;
      applyAxisAngle(axis: Vector3, angle: number): Vector3;
      applyEuler(euler: Euler): Vector3;
      applyMatrix3(m: Matrix3): Vector3;
      applyMatrix4(m: Matrix4): Vector3;
      applyProjection(m: Matrix4): Vector3;
      applyQuaternion(q: Quaternion): Vector3;
      ceil(): Vector3;
      clamp(min: Vector3, max: Vector3): Vector3;
      clampScalar(min: number, max: number): Vector3;
      clone(): Vector3;
      copy(v: Vector3): Vector3;
      cross(a: Vector3): Vector3;
      crossVectors(a: Vector3, b: Vector3): Vector3;
      distanceTo(v: Vector3): number;
      distanceToSquared(v: Vector3): number;
      divide(v: Vector3): Vector3;
      divideScalar(s: number): Vector3;
      dot(v: Vector3): number;
      equals(v: Vector3): boolean;
      floor(): Vector3;
      fromArray(xyz: number[], offset?: number): Vector3;
      fromAttribute(attribute: BufferAttribute, index: number, offset?: number): Vector3;
      getComponent(index: number): number;
      length(): number;
      lengthManhattan(): number;
      lengthSq(): number;
      lerp(v: Vector3, alpha: number): Vector3;
      lerpVectors(v1: Vector3, v2: Vector3, alpha: number): Vector3;
      max(v: Vector3): Vector3;
      min(v: Vector3): Vector3;
      multiply(v: Vector3): Vector3;
      multiplyScalar(s: number): Vector3;
      multiplyVectors(a: Vector3, b: Vector3): Vector3;
      negate(): Vector3;
      normalize(): Vector3;
      project(camera: Camera): Vector3;
      projectOnPlane(planeNormal: Vector3): Vector3;
      projectOnVector(v: Vector3): Vector3;
      reflect(vector: Vector3): Vector3;
      round(): Vector3;
      roundToZero(): Vector3;
      set(x: number, y: number, z: number): Vector3;
      setComponent(index: number, value: number): void;
      setFromMatrixColumn(index: number, matrix: Matrix4): Vector3;
      setFromMatrixPosition(m: Matrix4): Vector3;
      setFromMatrixScale(m: Matrix4): Vector3;
      setLength(l: number): Vector3;
      setX(x: number): Vector3;
      setY(y: number): Vector3;
      setZ(z: number): Vector3;
      sub(a: Vector3): Vector3;
      subScalar(s: number): Vector3;
      subVectors(a: Vector3, b: Vector3): Vector3;
      toArray(xyz?: number[], offset?: number): number[];
      transformDirection(m: Matrix4): Vector3;
      unproject(camera: Camera): Vector3;
    }

    class Vector4 implements Vector {
      x: number;
      y: number;
      z: number;
      w: number;

      constructor(x?: number, y?: number, z?: number, w?: number);

      add(v: Vector4): Vector4;
      addScalar(s: number): Vector4;
      addVectors(a: Vector4, b: Vector4): Vector4;
      applyMatrix4(m: Matrix4): Vector4;
      ceil(): Vector4;
      clamp(min: Vector4, max: Vector4): Vector4;
      clampScalar(min: number, max: number): Vector4;
      clone(): Vector4;
      copy(v: Vector4): Vector4;
      divideScalar(s: number): Vector4;
      dot(v: Vector4): number;
      equals(v: Vector4): boolean;
      floor(): Vector4;
      fromArray(xyzw: number[], offset?: number): Vector4;
      fromAttribute(attribute: BufferAttribute, index: number, offset?: number): Vector4;
      getComponent(index: number): number;
      length(): number;
      lengthManhattan(): number;
      lengthSq(): number;
      lerp(v: Vector4, alpha: number): Vector4;
      lerpVectors(v1: Vector4, v2: Vector4, alpha: number): Vector4;
      max(v: Vector4): Vector4;
      min(v: Vector4): Vector4;
      multiplyScalar(s: number): Vector4;
      negate(): Vector4;
      normalize(): Vector4;
      round(): Vector4;
      roundToZero(): Vector4;
      set(x: number, y: number, z: number, w: number): Vector4;
      setAxisAngleFromQuaternion(q: Quaternion): Vector4;
      setAxisAngleFromRotationMatrix(m: Matrix3): Vector4;
      setComponent(index: number, value: number): void;
      setLength(l: number): Vector4;
      setX(x: number): Vector4;
      setY(y: number): Vector4;
      setZ(z: number): Vector4;
      setW(w: number): Vector4;
      sub(v: Vector4): Vector4;
      subScalar(s: number): Vector4;
      subVectors(a: Vector4, b: Vector4): Vector4;
      toArray(xyzw?: number[], offset?: number): number[];
    }

    class WebGLProperties {
      constructor();

      get(object: any): any;
      delete(object: any): void;
      clear(): void;
    }

    class WebGLShadowMap {
      constructor(_renderer: Renderer, _lights: any[], _objects: any[], capabilities: any);

      enabled: boolean;
      autoUpdate: boolean;
      needsUpdate: boolean;
      type: ShadowMapType;
      renderReverseSided: boolean;
      renderSingleSided: boolean;

      render(scene: Scene, camera: Camera): void;

      // deprecated
      cullFace: any;
    }

    class WebGLState {
      constructor(gl: any, extensions: any, paramThreeToGL: any);

      buffers: {
        color: WebGLColorBuffer,
        depth: WebGLDepthBuffer,
        stencil: WebGLStencilBuffer,
      };

      init(): void;
      initAttributes(): void;
      enableAttribute(attribute: string): void;
      enableAttributeAndDivisor(attribute: string, meshPerAttribute: any, extension: any): void;
      disableUnusedAttributes(): void;
      enable(id: string): void;
      disable(id: string): void;
      getCompressedTextureFormats(): any[];
      setBlending(blending: number, blendEquation: number, blendSrc: number, blendDst: number, blendEquationAlpha: number, blendSrcAlpha: number, blendDstAlpha: number): void;
      setColorWrite(colorWrite: number): void;
      setDepthTest(depthTest: number): void;
      setDepthWrite(depthWrite: number): void;
      setDepthFunc(depthFunc: any): void;
      setStencilTest(stencilTest: boolean): void;
      setStencilWrite(stencilWrite: any): void;
      setStencilFunc(stencilFunc: any, stencilRef: any, stencilMask: number): void;
      setStencilOp(stencilFail: any, stencilZFail: any, stencilZPass: any): void;
      setFlipSided(flipSided: number): void;
      setCullFace(cullFace: CullFace): void;
      setLineWidth(width: number): void;
      setPolygonOffset(polygonoffset: number, factor: number, units: number): void;
      setScissorTest(scissorTest: boolean): void;
      getScissorTest(): boolean;
      activeTexture(webglSlot: any): void;
      bindTexture(webglType: any, webglTexture: any): void;
      compressedTexImage2D(): void;
      texImage2D(): void;
      clearColor(r: number, g: number, b: number, a: number): void;
      clearDepth(depth: number): void;
      clearStencil(stencil: any): void;
      scissor(scissor: any): void;
      viewport(viewport: any): void;
      reset(): void;
    }

    class WebGLColorBuffer {
      constructor(gl: any, state: any);

      setMask(colorMask: number): void;
      setLocked(lock: boolean): void;
      setClear(r: number, g: number, b: number, a: number): void;
      reset(): void;
    }

    class WebGLDepthBuffer {
      constructor(gl: any, state: any);

      setTest(depthTest: boolean): void;
      sertMask(depthMask: number): void;
      setFunc(depthFunc: any): void;
      setLocked(lock: boolean): void;
      setClear(depth: any): void;
      reset(): void;
    }

    class WebGLStencilBuffer {
      constructor(gl: any, state: any);

      setTest(stencilTest: boolean): void;
      sertMask(stencilMask: number): void;
      setFunc(stencilFunc: any, stencilRef: any, stencilMask: number): void;
      setOp(stencilFail: any, stencilZFail: any, stencilZPass: any): void;
      setLocked(lock: boolean): void;
      setClear(stencil: any): void;
      reset(): void;
    }

    interface WebGLRendererParameters {
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
      logarithmicDepthBuffer?: boolean;
    }

    interface WebGLCapabilitiesParameters {
      precision?: any;
      logarithmicDepthBuffer?: any;
    }

    class WebGLCapabilities {
      constructor(gl: WebGLRenderingContext, extensions: any, parameters: WebGLCapabilitiesParameters);

      precision: any;
      logarithmicDepthBuffer: any;
      maxTextures: any;
      maxVertexTextures: any;
      maxTextureSize: any;
      maxCubemapSize: any;
      maxAttributes: any;
      maxVertexUniforms: any;
      maxVaryings: any;
      maxFragmentUniforms: any;
      vertexTextures: any;
      floatFragmentTextures: any;
      floatVertexTextures: any;

      getMaxAnisotropy(): number;
      getMaxPrecision(precision: string): string;
    }

    class WebGLExtensions {
      constructor(gl: WebGLRenderingContext);

      get(name: string): any;
    }

    class WebGLRenderer implements Renderer {
      constructor(parameters?: WebGLRendererParameters);

      domElement: HTMLCanvasElement;
      context: WebGLRenderingContext;
      autoClear: boolean;
      autoClearColor: boolean;
      autoClearDepth: boolean;
      autoClearStencil: boolean;
      sortObjects: boolean;

      clippingPlanes: any[];
      localClippingEnabled: boolean;

      extensions: WebGLExtensions;
      gammaInput: boolean;
      gammaOutput: boolean;

      physicallyCorrectLights: boolean;
      toneMapping: ToneMapping;
      toneMappingExposure: number;
      toneMappingWhitePoint: number;
      shadowMapDebug: boolean;
      maxMorphTargets: number;
      maxMorphNormals: number;
      info: {
        memory: {
          geometries: number;
          textures: number;
        };
        render: {
          calls: number;
          vertices: number;
          faces: number;
          points: number;
        };
        programs: number;
      };
      shadowMap: WebGLShadowMap;
      pixelRation: number;
      capabilities: WebGLCapabilities;
      properties: WebGLProperties;
      state: WebGLState;
      allocTextureUnit: any;

      getContext(): WebGLRenderingContext;
      getContextAttributes(): any;
      forceContextLoss(): void;
      getMaxAnisotropy(): number;
      getPrecision(): string;
      getPixelRatio(): number;
      setPixelRatio(value: number): void;
      getSize(): { width: number; height: number; };
      setSize(width: number, height: number, updateStyle?: boolean): void;
      setViewport(x?: number, y?: number, width?: number, height?: number): void;
      setScissor(x: number, y: number, width: number, height: number): void;
      setScissorTest(enable: boolean): void;
      getClearColor(): Color;
      setClearColor(color: Color | string | number, alpha?: number): void;
      getClearAlpha(): number;
      setClearAlpha(alpha: number): void;
      clear(color?: boolean, depth?: boolean, stencil?: boolean): void;
      clearColor(): void;
      clearDepth(): void;
      clearStencil(): void;
      clearTarget(renderTarget: WebGLRenderTarget, color: boolean, depth: boolean, stencil: boolean): void;
      resetGLState(): void;
      dispose(): void;
      renderBufferImmediate(object: Object3D, program: object, material: Material): void;
      renderBufferDirect(camera: Camera, fog: Fog, material: Material, geometryGroup: any, object: Object3D): void;
      render(scene: Scene, camera: Camera, renderTarget?: any, forceClear?: boolean): void;
      setFaceCulling(cullFace?: CullFace, frontFace?: FrontFaceDirection): void;
      setTexture(texture: Texture, slot: number): void; // deprecated
      setTexture2D(texture: Texture, slot: number): void;
      setTextureCube(texture: Texture, slot: number): void;
      getCurrentRenderTarget(): any;
      setRenderTarget(renderTarget: any): void;
      readRenderTargetPixels(renderTarget: any, x: number, y: number, width: number, height: number, buffer: any): void;

      // deprecated
      gammaFactor: number;
      shadowMapEnabled: boolean;
      shadowMapType: ShadowMapType;
      shadowMapCullFace: CullFace;

      supportsFloatTextures(): any;
      supportsHalfFloatTextures(): any;
      supportsStandardDerivatives(): any;
      supportsCompressedTextureS3TC(): any;
      supportsCompressedTexturePVRTC(): any;
      supportsBlendMinMax(): any;
      supportsVertexTextures(): any;
      supportsInstancedArrays(): any;
      enableScissorTest(boolean: any): any;
    }

    interface Renderer {
      domElement: HTMLCanvasElement;

      render(scene: Scene, camera: Camera): void;
      setSize(width: number, height: number, updateStyle?: boolean): void;
    }

    interface WebGLRenderTargetOptions {
      wrapS?: Wrapping;
      wrapT?: Wrapping;
      magFilter?: TextureFilter;
      minFilter?: TextureFilter;
      format?: number; // RGBAFormat;
      type?: TextureDataType; // UnsignedByteType;
      anisotropy?: number; // 1;
      depthBuffer?: boolean; // true;
      stencilBuffer?: boolean; // true;
    }

    class WebGLRenderTarget {
      constructor(width: number, height: number, options?: WebGLRenderTargetOptions);

      uuid: string;
      width: number;
      height: number;
      scissor: Vector4;
      scissorTest: boolean;
      viewpport: Vector4;
      texture: Texture;
      depthBuffer: boolean;
      stencilBuffer: boolean;
      depthTexture: Texture;
      wrapS: any; // deprecated, use texture.wrapS
      wrapT: any; // deprecated, use texture.wrapT
      magFilter: any; // deprecated, use texture.magFilter
      minFilter: any; // deprecated, use texture.minFilter
      anisotropy: any; // deprecated, use texture.anisotropy
      offset: any; // deprecated, use texture.offset
      repeat: any; // deprecated, use texture.repeat
      format: any; // deprecated, use texture.format
      type: any; // deprecated, use texture.type
      generateMipmaps: any; // deprecated, use texture.generateMipmaps

      setSize(width: number, height: number): void;
      clone(): WebGLRenderTarget;
      copy(source: WebGLRenderTarget): WebGLRenderTarget;
      dispose(): void;
    }

    namespace ImageUtils { // deprecated
      let crossOrigin: string;

      function loadTexture(url: string, mapping?: Mapping, onLoad?: (texture: Texture) => void, onError?: (message: string) => void): Texture;
      function loadTextureCube(array: string[], mapping?: Mapping, onLoad?: (texture: Texture) => void , onError?: (message: string) => void): Texture;
    }
  }
