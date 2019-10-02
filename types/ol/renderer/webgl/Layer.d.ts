import { EventsKey } from '../../events';
import Event from '../../events/Event';
import Layer, { State } from '../../layer/Layer';
import { Pixel } from '../../pixel';
import { FrameState } from '../../PluggableMap';
import { Transform } from '../../transform';
import WebGLContext from '../../webgl/Context';
import LayerRenderer from '../Layer';
import WebGLMapRenderer from './Map';

export default class WebGLLayerRenderer extends LayerRenderer {
    constructor(mapRenderer: WebGLMapRenderer, layer: Layer);
    protected framebuffer: WebGLFramebuffer;
    protected framebufferDimension: number;
    protected mapRenderer: WebGLMapRenderer;
    protected projectionMatrix: Transform;
    protected texCoordMatrix: Transform;
    protected texture: WebGLTexture;
    protected bindFramebuffer(frameState: FrameState, framebufferDimension: number): void;
    composeFrame(frameState: FrameState, layerState: State, context: WebGLContext): void;
    forEachLayerAtPixel<S, T, U>(pixel: Pixel, frameState: FrameState, callback: (this: S, p0: Layer, p1: Uint8ClampedArray | Uint8Array) => T, thisArg: S): T | undefined;
    getProjectionMatrix(): Transform;
    getTexCoordMatrix(): Transform;
    getTexture(): WebGLTexture;
    handleWebGLContextLost(): void;
    prepareFrame(frameState: FrameState, layerState: State, context: WebGLContext): boolean;
    on(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => void): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): void;
}
