import Event from '../events/Event';
import { FrameState } from '../PluggableMap';
import WebGLContext from '../webgl/Context';
import EventType from './EventType';
import VectorContext from './VectorContext';

export default class RenderEvent extends Event {
    constructor(type: EventType, opt_vectorContext?: VectorContext, opt_frameState?: FrameState, opt_context?: CanvasRenderingContext2D, opt_glContext?: WebGLContext);
    context: CanvasRenderingContext2D;
    frameState: FrameState;
    glContext: WebGLContext;
    vectorContext: VectorContext;
}
