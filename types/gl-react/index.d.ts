// Type definitions for gl-react 3.15
// Project: https://github.com/gre/gl-react
// Definitions by: Jussi Kinnula <https://github.com/jussikinnula>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export type Vec2 = [number, number];
export type Vec4 = [number, number, number, number];

export interface BusProps {
  children?: any;
  uniform?: string;
  index: number;
}

export class Bus extends React.Component<BusProps> {
  id: number;
  context: { glParent: Surface | Node, glSurface: Surface };
  dependents: Array<Node | Surface>;
  glNode?: Node;
  glBusRootNode: any;

  static defaultProps: BusProps;
  static contextTypes: { glParent: any, glSurface: any };
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
  preload?: any[];
  visitor?: Visitor;

  onLoad?: () => void;
  onLoadError?: (e: Error) => void;
  onContextLost?: () => void;
  onContextRestored?: () => void;
}

export interface SurfaceState {
  ready: boolean;
  rebootId: number;
  debug: boolean;
}

export class Surface extends React.Component<SurfaceProps, SurfaceState> {
  props: SurfaceProps;
  state: SurfaceState;
  id: number;
  gl: WebGLRenderingContext;
  RenderLessElement: any;
  root: Node;

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
  cancelFrame: (id: number) => void
) => Surface;

export type listSurfaces = () => Surface[];

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
  glParent: Node | Surface | Bus;
  glSurface: Surface;
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
  uniforms: { [key: string]: any };
  ignoreUnusedUniforms?: string[] | boolean;
  sync?: boolean;
  width?: number;
  height?: number;
  children?: any;
  backbuffering?: boolean;
  blendFunc?: {
    src: () => void;
    dst: () => void;
  };
  clear?: {
    color: Vec4;
  };

  onDraw?: () => void;
}

export class Node extends React.Component<NodeProps> {
  drawProps: NodeProps;
  context: SurfaceContext;
  framebuffer?: Framebuffer;
  backbuffer?: Framebuffer;
  capturePixelsArray?: Uint8Array;
  id: number;
  uniformsBus: {
    [key: string]: Array<Bus | undefined>;
  };
  dependencies: Array<Node | Bus>;
  dependents: Array<Node | Surface>;
}

export interface ShaderIdentifier {
  type: string;
  id: string;
}

export interface ShaderDefinition {
  frag: string;
  vert?: string;
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
  function backbufferFrom(node: Node | Bus): { type: string, node: Node | Bus };
  const Resolution: string;
  function textureSize(obj: any): { type: string, obj: any };
  function textureSizeRatio(obj: any): { type: string, obj: any, ratio: boolean };
}

export class Visitor {
  onSurfaceMount(surface: Surface): void;
  onSurfaceUnmount(surface: Surface): void;
  onSurfaceGLContextChange(surface: Surface, gl?: WebGLRenderingContext): void;
  onSurfaceDrawSkipped(surface: Surface): void;
  onSurfaceDrawStart(surface: Surface): void;
  onSurfaceDrawError(e: Error): boolean;
  onSurfaceDrawEnd(surface: Surface): void;
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
