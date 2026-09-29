import { Loader, LoadingManager, MeshPhysicalNodeMaterial } from "three/webgpu";
import { MaterialXInterfaceValidator } from "./materialx/MaterialXInterfaceValidation.js";
import { MaterialXLogEntry } from "./materialx/MaterialXLog.js";

export interface MaterialXLoadOptions {
    /**
     * The UV space of the MaterialX document.
     *
     * @default 'bottom-left'
     */
    uvSpace?: "bottom-left" | "top-left";
    /**
     * The name of the material to translate. When not set, all materials are translated.
     */
    materialName?: string | null;
    /**
     * Called with the root node of the parsed document so additional problems can be added to the log.
     */
    interfaceValidator?: MaterialXInterfaceValidator;
    /**
     * Whether to throw when the translation produced errors.
     *
     * @default true
     */
    throwOnErrors?: boolean;
    /**
     * The path used to resolve the resources of the MaterialX document.
     */
    path?: string;
    /**
     * Resolves the URI of a resource contained in a MaterialX archive.
     */
    archiveResolver?: ((uri: string) => string | null) | null;
}

export interface MaterialXResult {
    materials: Record<string, MeshPhysicalNodeMaterial>;
    log: MaterialXLogEntry[];
    errors: MaterialXLogEntry[];
    warnings: MaterialXLogEntry[];
}

export class MaterialXLoader extends Loader<MaterialXResult> {
    constructor(manager?: LoadingManager);

    dispose(): this;

    load(
        url: string,
        onLoad: (data: MaterialXResult) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (err: unknown) => void,
        options?: MaterialXLoadOptions,
    ): this;

    loadAsync(url: string, options?: MaterialXLoadOptions): Promise<MaterialXResult>;
    loadAsync(
        url: string,
        onProgress?: (event: ProgressEvent) => void,
        options?: MaterialXLoadOptions,
    ): Promise<MaterialXResult>;

    parseBuffer(
        data: ArrayBuffer | Uint8Array | string,
        url?: string,
        options?: MaterialXLoadOptions,
    ): MaterialXResult;

    parse(text: string, options?: MaterialXLoadOptions): MaterialXResult;
}
