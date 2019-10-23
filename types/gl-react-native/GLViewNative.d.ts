import * as React from 'react';

export interface GLViewNativeProps {
  onContextCreate?: (gl: WebGLRenderingContext) => void;
  onContextFailure?: (e: Error) => void;
  style?: any;
  children?: any;
}

export class GLViewNative extends React.Component<GLViewNativeProps> {
  afterDraw?: () => void;
}
