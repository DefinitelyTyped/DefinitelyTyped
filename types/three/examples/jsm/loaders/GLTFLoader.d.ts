import {
    AnimationClip,
    BufferAttribute,
    BufferGeometry,
    Camera,
    FileLoader,
    Group,
    ImageBitmapLoader,
    InterleavedBufferAttribute,
    Loader,
    LoadingManager,
    Material,
    Mesh,
    MeshStandardMaterial,
    Object3D,
    Skeleton,
    SkinnedMesh,
    Texture,
    TextureLoader,
} from "three";

import { MeshoptDecoder } from "../libs/meshopt_decoder.module.js";
import { DRACOLoader } from "./DRACOLoader.js";
import { KTX2Loader } from "./KTX2Loader.js";

export interface GLTF {
    animations: AnimationClip[];
    scene: Group;
    scenes: Group[];
    cameras: Camera[];
    asset: {
        copyright?: string | undefined;
        generator?: string | undefined;
        version?: string | undefined;
        minVersion?: string | undefined;
        extensions?: any;
        extras?: any;
    };
    parser: GLTFParser;
    userData: Record<string, any>;
}

export class GLTFLoader extends Loader<GLTF> {
    dracoLoader: DRACOLoader | null;
    ktx2Loader: KTX2Loader | null;
    meshoptDecoder: typeof MeshoptDecoder | null;

    constructor(manager?: LoadingManager);

    setDRACOLoader(dracoLoader: DRACOLoader): this;
    setKTX2Loader(ktx2Loader: KTX2Loader | null): this;
    setMeshoptDecoder(meshoptDecoder: typeof MeshoptDecoder | null): this;

    register(callback: (parser: GLTFParser) => GLTFLoaderPlugin): this;
    unregister(callback: (parser: GLTFParser) => GLTFLoaderPlugin): this;

    parse(
        data: ArrayBuffer | string,
        path: string,
        onLoad: (gltf: GLTF) => void,
        onError?: (event: ErrorEvent) => void,
    ): void;

    parseAsync(data: ArrayBuffer | string, path: string): Promise<GLTF>;
}

export type GLTFReferenceType = "materials" | "nodes" | "textures" | "meshes";

export interface GLTFReference {
    materials?: number;
    nodes?: number;
    textures?: number;
    meshes?: number;
}

export class GLTFParser {
    json: any;

    options: {
        path: string;
        manager: LoadingManager;
        ktx2Loader: KTX2Loader;
        meshoptDecoder: /* MeshoptDecoder */ any;
        crossOrigin: string;
        requestHeader: { [header: string]: string };
    };

    fileLoader: FileLoader;
    textureLoader: TextureLoader | ImageBitmapLoader;
    plugins: { [name: string]: GLTFLoaderPlugin };
    extensions: { [name: string]: any };
    associations: Map<Object3D | Material | Texture, GLTFReference>;

    setExtensions(extensions: { [name: string]: any }): void;
    setPlugins(plugins: { [name: string]: GLTFLoaderPlugin }): void;

    parse(onLoad: (gltf: GLTF) => void, onError?: (event: ErrorEvent) => void): void;

    getDependency: (type: string, index: number) => Promise<any>;
    getDependencies: (type: string) => Promise<any[]>;
    loadBuffer: (bufferIndex: number) => Promise<ArrayBuffer>;
    loadBufferView: (bufferViewIndex: number) => Promise<ArrayBuffer>;
    loadAccessor: (accessorIndex: number) => Promise<BufferAttribute | InterleavedBufferAttribute>;
    loadTexture: (textureIndex: number) => Promise<Texture>;
    loadTextureImage: (textureIndex: number, sourceIndex: number, loader: Loader) => Promise<Texture>;
    loadImageSource: (sourceIndex: number, loader: Loader) => Promise<Texture>;
    assignTexture: (
        materialParams: { [key: string]: any },
        mapName: string,
        mapDef: {
            index: number;
            texCoord?: number | undefined;
            extensions?: any;
        },
    ) => Promise<void>;
    assignFinalMaterial: (object: Mesh) => void;
    getMaterialType: () => typeof MeshStandardMaterial;
    loadMaterial: (materialIndex: number) => Promise<Material>;
    createUniqueName: (originalName: string) => string;
    createNodeMesh: (nodeIndex: number) => Promise<Group | Mesh | SkinnedMesh>;
    loadGeometries: (
        /**
         * GLTF.Primitive[]
         * See: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/schema/mesh.primitive.schema.json
         */
        primitives: Array<{ [key: string]: any }>,
    ) => Promise<BufferGeometry[]>;
    loadMesh: (meshIndex: number) => Promise<Group | Mesh | SkinnedMesh>;
    loadCamera: (cameraIndex: number) => Promise<Camera>;
    loadSkin: (skinIndex: number) => Promise<Skeleton>;
    loadAnimation: (animationIndex: number) => Promise<AnimationClip>;
    loadNode: (nodeIndex: number) => Promise<Object3D>;
    loadScene: () => Promise<Group>;
}

export interface GLTFLoaderPlugin {
    readonly name: string;
    beforeRoot?: (() => Promise<void> | null) | undefined;
    afterRoot?: ((result: GLTF) => Promise<void> | null) | undefined;
    loadNode?: ((nodeIndex: number) => Promise<Object3D> | null) | undefined;
    loadMesh?: ((meshIndex: number) => Promise<Group | Mesh | SkinnedMesh> | null) | undefined;
    loadBufferView?: ((bufferViewIndex: number) => Promise<ArrayBuffer> | null) | undefined;
    loadMaterial?: ((materialIndex: number) => Promise<Material> | null) | undefined;
    loadTexture?: ((textureIndex: number) => Promise<Texture> | null) | undefined;
    getMaterialType?: ((materialIndex: number) => typeof Material | null) | undefined;
    extendMaterialParams?:
        | ((materialIndex: number, materialParams: { [key: string]: any }) => Promise<any> | null)
        | undefined;
    createNodeMesh?: ((nodeIndex: number) => Promise<Group | Mesh | SkinnedMesh> | null) | undefined;
    createNodeAttachment?: ((nodeIndex: number) => Promise<Object3D> | null) | undefined;
}
