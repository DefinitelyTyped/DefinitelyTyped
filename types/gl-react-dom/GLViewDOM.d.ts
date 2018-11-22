import * as React from 'react';

export type SupportedImage = 'image/png' | 'image/jpeg' | 'image/bmp' | 'image/webp' | 'image/ico';
export type ValidQuality = 0.0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1.0;

export interface GLViewDOMProps {
  onContextCreate?: (gl: WebGLRenderingContext) => void;
  onContextFailure?: (e: Error) => void;
  onContextLost?: () => void;
  onContextRestored?: (gl: WebGLRenderingContext) => void;
  webglContextAttributes?: WebGLContextAttributes;
  pixelRatio?: number;
  width: number;
  height: number;
  style?: any;
  debug?: number;
}

export interface GLViewDOMState {
  error: Error;
}

export class GLViewDOM extends React.Component<GLViewDOMProps, GLViewDOMState> {
  onRef: (ref: HTMLCanvasElement) => void;
  debugError?: (error: Error) => void;
  afterDraw?: () => void;
  captureAsDataURL(type?: SupportedImage, quality?: ValidQuality): string;
  captureAsBlob(callback: (data: Blob) => void, type?: SupportedImage, quality?: ValidQuality): Promise<Blob>;
  webglContextAttributes: WebGLContextAttributes;
  canvas?: HTMLCanvasElement;
  gl?: WebGLRenderingContext;
}
