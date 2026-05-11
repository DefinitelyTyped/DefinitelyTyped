import * as React from "react";

export interface GLViewNativeProps {
    onContextCreate?: ((gl: WebGLRenderingContext) => void) | undefined;
    onContextFailure?: ((e: Error) => void) | undefined;
    style?: any;
    children?: any;
}

export class GLViewNative extends React.Component<GLViewNativeProps> {
    afterDraw?: (() => void) | undefined;
}
