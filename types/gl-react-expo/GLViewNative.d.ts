import * as React from 'react';
// Re-add this after fixing react-native types, and update it to ref's below
// import { GLView as EXGLView } from 'expo';

export interface GLViewNativeProps {
  onContextCreate?: (gl: WebGLRenderingContext) => void;
  style?: any;
  children?: any;
}

export class GLViewNative extends React.Component<GLViewNativeProps> {
  afterDraw?: () => void;
  ref?: any;
  onRef: (ref: any) => void;
  onContextCreate: (gl: WebGLRenderingContext) => void;
  capture(opt: any): Promise<{ uri: string, localUri: string, width: number, height: number }>;
}
