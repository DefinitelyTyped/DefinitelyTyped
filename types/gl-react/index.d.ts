import * as React from "react";

export type Vec2 = [number, number];
export type Vec4 = [number, number, number, number];

export interface BusProps {
    children?: any;
    uniform?: string | undefined;
    index: number;
}

export class Bus extends React.Component<BusProps> {
    id: number;
    context: { glParent: Surface<any> | Node; glSurface: Surface<any> };
    dependents: Array<Node | Surface<any>>;
    glNode?: Node | undefined;
    glBusRootNode: any;

    static defaultProps: BusProps;
    static contextTypes: { glParent: any; glSurface: any };
    static childContextTypes: { glParent: any };

    getChildContext(): { glParent: Bus };
    getGLRenderableNode(): Node;
    getGLRenderableContent(): any;
    getGLName(): string;
    getGLShortName(): string;
    capture(x?: number, y?: number, w?: number, h?: number): any[];
    onRef: (ref: any) => void;
    redraw: () => void;
}

export type connectSize = (GLComponent: any) => any;

export interface SurfaceProps {
    children?: any;
    style?: any;
    preload?: any[] | undefined;
    visitor?: Visitor | undefined;
    onLoad?: (() => void) | undefined;
    onLoadError?: ((e: Error) => void) | undefined;
}

export interface SurfaceState {
    ready: boolean;
    rebootId: number;
    debug: boolean;
}

export class Surface<T> extends React.Component<SurfaceProps, SurfaceState> {
    id: number;
    gl?: WebGLRenderingContext | undefined;
    buffer: WebGLBuffer;
    loaderResolver?: any;
    glView: T;
    root: Node;
    shaders: { [key: string]: any };

    mapRenderableContent(inst: any): any;
    getVisitors(): Visitor[];
    getGLSize(): [number, number];
    getGLName(): string;
    getGLShortName(): string;
    captureAsDataURL(...args: any[]): string;
    captureAsBlob(...args: any[]): Promise<Blob>;
    capture(x?: number, y?: number, w?: number, h?: number): any[];
    redraw(): void;
    flush(): void;
    getEmptyTexture(): WebGLTexture;
    glIsAvailable(): boolean;
    rebootForDebug(): void;
}

export type createSurface = (
    GLView: any,
    RenderLessElement: any,
    mapRenderableContent: any,
    requestFrame: (callback: (time: number) => void) => number,
    cancelFrame: (id: number) => void,
) => Surface<typeof GLView>;

export type listSurfaces = () => Array<Surface<any>>;

export function GLSL(strings: TemplateStringsArray, ...values: any[]): string;

export interface LinearCopyProps {
    children?: any;
}

export class LinearCopy extends React.Component<LinearCopyProps> {
    getNodeRef(): Node;
}

export interface NearestCopyProps {
    children?: any;
}

export class NearestCopy extends React.Component<NearestCopyProps> {
    getNodeRef(): Node;
}

export interface SurfaceContext {
    glParent: Node | Surface<any> | Bus;
    glSurface: Surface<any>;
    glSizable: {
        getGLSize: () => [number, number];
    };
}

export interface Framebuffer {
    handle: WebGLFramebuffer;
    color: WebGLTexture;
    bind: () => void;
    dispose: () => void;
    syncSize: (w: number, h: number) => void;
}

export interface NodeProps {
    shader: ShaderIdentifier | ShaderDefinition;
    uniformsOptions?: any;
    uniforms?: { [key: string]: any } | undefined;
    ignoreUnusedUniforms?: string[] | boolean | undefined;
    sync?: boolean | undefined;
    width?: number | undefined;
    height?: number | undefined;
    children?: any;
    backbuffering?: boolean | undefined;
    blendFunc?: {
        src: () => void;
        dst: () => void;
    } | undefined;
    clear?: {
        color: Vec4;
    } | undefined;

    onDraw?: (() => void) | undefined;
}

export class Node extends React.Component<NodeProps> {
    drawProps: NodeProps;
    context: SurfaceContext;
    framebuffer?: Framebuffer | undefined;
    backbuffer?: Framebuffer | undefined;
    capturePixelsArray?: Uint8Array | undefined;
    id: number;
    uniformsBus: {
        [key: string]: Array<Bus | undefined>;
    };
    dependencies: Array<Node | Bus>;
    dependents: Array<Node | Surface<any>>;
}

export interface ShaderIdentifier {
    type: string;
    id: string;
}

export interface ShaderDefinition {
    frag: string;
    vert?: string | undefined;
}

export interface ShaderInfo {
    frag: string;
    vert: string;
}

export interface ShadersSheet {
    [key: string]: ShaderIdentifier;
}

export namespace Shaders {
    function create(shaders: { [key: string]: ShaderDefinition }): ShadersSheet;
    function getName(shaderIdentifier: ShaderIdentifier): string;
    function getShortName(shaderIdentifier: ShaderIdentifier): string;
    function get(shaderIdentifier: ShaderIdentifier): ShaderInfo;
}

export namespace Uniform {
    const Backbuffer: string;
    function backbufferFrom(node: Node | Bus): { type: string; node: Node | Bus };
    const Resolution: string;
    function textureSize(obj: any): { type: string; obj: any };
    function textureSizeRatio(obj: any): { type: string; obj: any; ratio: boolean };
}

export class Visitor {
    onSurfaceMount(surface: Surface<any>): void;
    onSurfaceUnmount(surface: Surface<any>): void;
    onSurfaceGLContextChange(surface: Surface<any>, gl?: WebGLRenderingContext): void;
    onSurfaceDrawSkipped(surface: Surface<any>): void;
    onSurfaceDrawStart(surface: Surface<any>): void;
    onSurfaceDrawError(e: Error): boolean;
    onSurfaceDrawEnd(surface: Surface<any>): void;
    onNodeDrawSkipped(node: Node): void;
    onNodeDrawStart(node: Node): void;
    onNodeSyncDeps(node: Node, additions: Array<Node | Bus>, deletions: Array<Node | Bus>): void;
    onNodeDraw(node: Node, preparedUniforms: any[]): void;
    onNodeDrawEnd(node: Node): void;
}

export class VisitorLogger extends Visitor {
    groupNestedLvl: number;
}

export namespace Visitors {
    function add(visitor: Visitor): void;
    function remove(visitor: Visitor): void;
    function get(): Visitor[];
}
