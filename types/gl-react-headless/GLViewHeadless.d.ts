import * as React from 'react';

export interface GLViewHeadlessProps {
  onContextCreate?: (gl: WebGLRenderingContext) => void;
  onContextFailure?: (e: Error) => void;
  onContextLost?: () => void;
  onContextRestored?: (gl: WebGLRenderingContext) => void;
  webglContextAttributes?: WebGLContextAttributes;
  pixelRatio?: number;
  width: number;
  height: number;
}

export class GLViewHeadless extends React.Component<GLViewHeadlessProps> {
  onRef: (ref: HTMLCanvasElement) => void;
  captureAsDataURL(): string;
  captureAsBlob(): Promise<Blob>;
  simulateContextLost(): void;
  simulateContextRestored(): void;
  webglContextAttributes: WebGLContextAttributes;
  canvas?: HTMLCanvasElement;
  gl?: WebGLRenderingContext;
}
